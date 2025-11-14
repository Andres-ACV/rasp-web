#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WebSocket client for Raspberry Pi + DM556 (3 motors)
- Clean shutdown on Ctrl+C
- Auto-reconnect
- Heartbeat (periodic status)
- Commands (JSON): move, jog, stop, stop_all, pos, setpos
- English-only I/O (no Spanish keys or messages)
"""

import asyncio
import json
import os
import signal
import sys
import time
from typing import Optional, Dict
from urllib.parse import urlparse

import websockets

# --- Driver ---
try:
    from dm556 import DM556, MIN_FREQ, MAX_FREQ
except Exception as e:
    print("Failed to import DM556 driver:", e)
    raise

WS_URL = os.getenv("WS_URL")
HEARTBEAT_INTERVAL = 10
RECONNECT_DELAY = 3


def derive_origin(ws_url: str) -> str:
    try:
        u = urlparse(ws_url)
        if not u.scheme or not u.netloc:
            return ""
        return f"https://{u.netloc}" if u.scheme == "wss" else f"http://{u.netloc}"
    except Exception:
        return ""


class MotorWrapper:
    def __init__(self, dir_pin: int, pul_pin: int):
        self.m = DM556(dir_pin, pul_pin)
        self._jog_task: Optional[asyncio.Task] = None
        self._jog_running = asyncio.Event()
        self._jog_freq = 0

    def move(self, steps: int, freq: int):
        self.stop()
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq)))
        self.m.move(int(steps), f)

    def start_jog(self, direction: str, freq: int):
        cw = (direction or "").lower() in (
            "cw", "right", "clockwise", "r", "1", "true", "t"
        )
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq)))
        self._jog_freq = f
        self.m.set_dir(cw)

        if self._jog_task and not self._jog_task.done():
            self._jog_running.set()
            return

        self._jog_running.set()
        self._jog_task = asyncio.create_task(self._jog_loop())

    async def _jog_loop(self):
        import lgpio
        try:
            lgpio.tx_pwm(self.m.h, self.m.pul, self._jog_freq, 50.0)
            while self._jog_running.is_set():
                await asyncio.sleep(0.2)
        finally:
            try:
                import lgpio
                lgpio.tx_pwm(self.m.h, self.m.pul, 0, 0.0)
            except Exception:
                pass

    def stop(self):
        if self._jog_task and not self._jog_task.done():
            self._jog_running.clear()

    def position(self) -> int:
        return int(self.m.pos)

    def set_position(self, val: int):
        self.m.pos = int(val)

    def close(self):
        self.stop()
        try:
            import lgpio
            lgpio.tx_pwm(self.m.h, self.m.pul, 0, 0.0)
        except Exception:
            pass
        try:
            self.m.close()
        except Exception:
            pass


def clamp_freq(value: int) -> int:
    return max(MIN_FREQ, min(MAX_FREQ, int(value)))


async def send_status(ws, motors: Dict[int, MotorWrapper], msg="alive"):
    await ws.send(json.dumps({
        "type": "status",
        "pi_connected": True,
        "message": msg,
        "ts": time.time(),
        "motors": {i: {"position": m.position()} for i, m in motors.items()}
    }))


async def heartbeat(ws, motors: Dict[int, MotorWrapper], stop_event: asyncio.Event):
    while not stop_event.is_set():
        try:
            await send_status(ws, motors, "alive")
        except Exception:
            break
        # Sleep with interruption check
        try:
            await asyncio.wait_for(stop_event.wait(), HEARTBEAT_INTERVAL)
        except asyncio.TimeoutError:
            pass


def resolve_motor(motors: Dict[int, MotorWrapper], msg: dict) -> int:
    mnum = int(msg.get("motor", 1))
    if mnum not in motors:
        raise ValueError(f"Invalid motor number: {mnum}. Valid range is 1..{len(motors)}.")
    return mnum


async def handle_message(ws, motors: Dict[int, MotorWrapper], msg: dict):
    mtype = (msg.get("type") or "").lower()

    async def send(obj):
        await ws.send(json.dumps(obj))

    try:
        if mtype == "move":
            mnum = resolve_motor(motors, msg)
            steps = int(msg.get("steps", 0))
            freq = clamp_freq(int(msg.get("frequency", MIN_FREQ)))
            motors[mnum].move(steps, freq)
            await send({"type": "move_complete", "motor": mnum, "steps": steps, "frequency": freq,
                        "position": motors[mnum].position()})

        elif mtype == "jog":
            mnum = resolve_motor(motors, msg)
            freq = clamp_freq(int(msg.get("frequency", MIN_FREQ)))
            direction = (msg.get("direction") or "cw").lower()
            if direction not in ("cw", "ccw", "right", "left", "clockwise", "counterclockwise"):
                raise ValueError("direction must be one of: cw, ccw, right, left, clockwise, counterclockwise")
            motors[mnum].start_jog(direction, freq)
            await send({"type": "jog_started", "motor": mnum, "frequency": freq, "direction": direction})

        elif mtype == "stop":
            mnum = resolve_motor(motors, msg)
            motors[mnum].stop()
            await send({"type": "motor_stopped", "motor": mnum})

        elif mtype == "stop_all":
            for i, m in motors.items():
                m.stop()
            await send({"type": "all_motors_stopped"})

        elif mtype == "pos":
            mnum = resolve_motor(motors, msg)
            await send({"type": "position", "motor": mnum, "position": motors[mnum].position()})

        elif mtype == "setpos":
            mnum = resolve_motor(motors, msg)
            motors[mnum].set_position(int(msg.get("value", 0)))
            await send({"type": "position", "motor": mnum, "position": motors[mnum].position()})

        else:
            await send({"type": "info", "message": "unknown command", "raw": msg})

    except Exception as e:
        await ws.send(json.dumps({"type": "error", "message": str(e)}))


async def run_client():
    import contextlib

    motors: Dict[int, MotorWrapper] = {
        1: MotorWrapper(dir_pin=26, pul_pin=19),
        2: MotorWrapper(dir_pin=22, pul_pin=23),
        3: MotorWrapper(dir_pin=24, pul_pin=25),
    }

    loop = asyncio.get_running_loop()
    stop_event = asyncio.Event()

    def _graceful(sig=None, frame=None):
        print("\n[Pi] Ctrl+C received, shutting down gracefully…")
        stop_event.set()
        # Forcefully cancel all running tasks
        for task in asyncio.all_tasks(loop):
            if task is not asyncio.current_task():
                task.cancel()

    signal.signal(signal.SIGINT, _graceful)
    signal.signal(signal.SIGTERM, _graceful)

    origin = os.getenv("ORIGIN") or derive_origin(WS_URL)

    try:
        while not stop_event.is_set():
            ws = None
            hb = None
            try:
                print(f"[Pi] Connecting to {WS_URL} …")
                
                # Add timeout to connection attempt
                ws = await asyncio.wait_for(
                    websockets.connect(
                        WS_URL,
                        ping_interval=None,
                        origin=origin if origin else None,
                    ),
                    timeout=10.0
                )
                print("[Pi] Connected.")
                await send_status(ws, motors, "Pi connected")

                # Start heartbeat
                hb = asyncio.create_task(heartbeat(ws, motors, stop_event))

                # Main message loop with stop_event check
                while not stop_event.is_set():
                    try:
                        # Use wait_for to make the receive interruptible
                        raw = await asyncio.wait_for(ws.recv(), timeout=1.0)
                        try:
                            msg = json.loads(raw)
                            await handle_message(ws, motors, msg)
                        except Exception as e:
                            await ws.send(json.dumps({"type": "error", "message": str(e)}))
                    except asyncio.TimeoutError:
                        # Timeout is expected, just continue to check stop_event
                        continue
                    except websockets.exceptions.ConnectionClosed:
                        break
                    except asyncio.CancelledError:
                        break

            except asyncio.TimeoutError:
                print(f"[Pi] Connection timeout to {WS_URL}")
            except (OSError, websockets.exceptions.ConnectionClosed) as e:
                if not stop_event.is_set():
                    print(f"[Pi] Connection error: {e}. Retrying in {RECONNECT_DELAY}s…")
                    # Use wait_for to make sleep interruptible
                    try:
                        await asyncio.wait_for(stop_event.wait(), RECONNECT_DELAY)
                    except asyncio.TimeoutError:
                        pass
            except asyncio.CancelledError:
                break
            finally:
                # Cancel heartbeat
                if hb and not hb.done():
                    hb.cancel()
                    with contextlib.suppress(asyncio.CancelledError):
                        await hb
                # Close websocket
                if ws is not None:
                    await ws.close()

        print("[Pi] Stop signal received, cleaning up…")

    except asyncio.CancelledError:
        print("\n[Pi] Task cancelled.")
    finally:
        for m in motors.values():
            m.close()
        print("[Pi] Program terminated.")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        WS_URL = sys.argv[1]
    try:
        asyncio.run(run_client())
    except KeyboardInterrupt:
        print("\n[Pi] Manually interrupted.")