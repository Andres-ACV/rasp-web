#main.py
# -*- coding: utf-8 -*-
"""
WebSocket client for Raspberry Pi + Cartesian3AxisMachine

This client connects a high-level 3-axis Cartesian machine controller
(Cartesian3AxisMachine) to a remote server via WebSockets.

Key features:
- Clean shutdown on Ctrl+C (SIGINT) / SIGTERM.
- Auto-reconnect with backoff.
- Periodic heartbeat with axis positions.
- High-level machine commands, JSON-based:

  Incoming commands (server -> Pi):
    - home_all:
        {
          "type": "home_all",
          "freq_hz": 2000
        }

    - home_axis:
        {
          "type": "home_axis",
          "axis": "X",          // "X", "Y" or "Z"
          "freq_hz": 2000
        }

    - goto_units (coordinated move, constant speed):
        {
          "type": "goto_units",
          "x": 10.0,            // optional, omit to keep current
          "y": 5.0,
          "z": 2.0,
          "feed_hz": 1200       // step rate along dominant axis
        }

    - goto_units_trap (coordinated move, trapezoidal profile):
        {
          "type": "goto_units_trap",
          "x": 10.0,
          "y": 5.0,
          "z": 2.0,
          "v_max_hz": 2500,
          "accel_steps_s2": 30000,
          "min_feed_hz": 100
        }

    - gcode (G0/G1 subset):
        {
          "type": "gcode",
          "line": "G1 X10 Y5 Z2 F800"
        }

    - get_position:
        {
          "type": "get_position"
        }

  Outgoing messages (Pi -> server):
    - status:
        {
          "type": "status",
          "pi_connected": true,
          "message": "alive",
          "ts": <unix_timestamp>,
          "axes": {
            "X": { "steps": <int>, "units": <float> },
            "Y": { "steps": <int>, "units": <float> },
            "Z": { "steps": <int>, "units": <float> }
          }
        }

    - ok:
        {
          "type": "ok",
          "command": "<command_type>",
          "details": { ... }    // optional, command-specific
        }

    - error:
        {
          "type": "error",
          "command": "<command_type>",
          "message": "description of the error"
        }

Configuration:
- WS_URL  (env var) sets the WebSocket URL, e.g.:
    ws://192.168.51.79:8000/ws/raspberry
- ORIGIN  (env var) sets the Origin header. If not set, it will be
  derived automatically from WS_URL.

Hardware mapping:
- Motor pins, steps-per-unit and limit switch channels are configured
  inside PiMachine._configure_machine(). Adjust to match your hardware.
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

# High-level machine controller (your file/module)
from cartesian_machine import Cartesian3AxisMachine

# --- WebSocket config ---
WS_URL = os.getenv("WS_URL") or "ws://192.168.51.79:8000/ws/raspberry"
HEARTBEAT_INTERVAL = 10
RECONNECT_DELAY = 3


def derive_origin(ws_url: str) -> str:
    """
    Derive an HTTP(S) Origin header from a WebSocket URL.

    Example:
        "ws://host:8000/ws/raspberry" -> "http://host:8000"
        "wss://example.com/ws" -> "https://example.com"
    """
    try:
        u = urlparse(ws_url)
        if not u.scheme or not u.netloc:
            return ""
        return f"https://{u.netloc}" if u.scheme == "wss" else f"http://{u.netloc}"
    except Exception:
        return ""


class PiMachine:
    """
    Wrapper around Cartesian3AxisMachine to:

    - Configure hardware (motor pins, steps-per-unit, mux, limits).
    - Provide async-friendly methods that offload blocking motion
      to a thread via asyncio.to_thread.
    - Ensure only one motion runs at a time via an asyncio.Lock.
    """

    def __init__(self) -> None:
        self.machine = Cartesian3AxisMachine()
        # Ensure only one motion command is active at a time.
        self._motion_lock = asyncio.Lock()
        self._configure_machine()

    # ------------------------------------------------------------------
    #  Hardware configuration (EDIT THIS FOR YOUR SETUP)
    # ------------------------------------------------------------------
    def _configure_machine(self) -> None:
        """
        Configure motor pins, steps-per-unit and limit switch mapping.

        IMPORTANT:
            Adjust pin numbers, steps-per-unit and limit channels to match
            your actual wiring and mechanics.
        """
        # --- Motor pins (example mapping: X, Y, Z) ---
        # These are the pins used in your previous client:
        #   Motor 1: dir=26, pul=19
        #   Motor 2: dir=22, pul=23
        #   Motor 3: dir=24, pul=25
        # Here we map them to X/Y/Z axes:
        self.machine.set_axis_motor_pins("X", dir_pin=26, pul_pin=19)
        self.machine.set_axis_motor_pins("Y", dir_pin=22, pul_pin=23)
        self.machine.set_axis_motor_pins("Z", dir_pin=24, pul_pin=25)

        # --- Steps per unit (e.g. steps per mm) ---
        # Placeholder values; tune according to your mechanics.
        self.machine.set_axis_steps_per_unit("X", 3200.0)
        self.machine.set_axis_steps_per_unit("Y", 3200.0)
        self.machine.set_axis_steps_per_unit("Z", 3200.0)

        # --- Limit switch multiplexer (HC4051) ---
        # Example wiring; adjust to your actual GPIO configuration.
        self.machine.configure_mux(
            chip=0,
            select_pins=(5, 6, 12),  # S0, S1, S2
            com_pin=13,              # COM/Z
            num_channels=6,          # using 6 channels for 3 axes
            active_low=True,
        )

        # Map channels 0..5 to X+/X-/Y+/Y-/Z+/Z-
        # Adjust according to how you wired your switches.
        self.machine.set_limit_channel("X", "+", 0)
        self.machine.set_limit_channel("X", "-", 1)
        self.machine.set_limit_channel("Y", "+", 2)
        self.machine.set_limit_channel("Y", "-", 3)
        self.machine.set_limit_channel("Z", "+", 4)
        self.machine.set_limit_channel("Z", "-", 5)

    # ------------------------------------------------------------------
    #  Async wrappers around blocking operations
    # ------------------------------------------------------------------
    async def home_all(self, freq_hz: int, step_chunk: int = 50, max_steps: int = 100_000) -> None:
        """
        Home all axes sequentially. This is a blocking operation in the
        underlying machine, so we offload it to a thread.
        """
        async with self._motion_lock:
            await asyncio.to_thread(
                self.machine.calibrate_all_axes,
                freq_hz,
                step_chunk,
                max_steps,
            )

    async def home_axis(self, axis: str, freq_hz: int, step_chunk: int = 50, max_steps: int = 100_000) -> None:
        """
        Home a single axis.
        """
        async with self._motion_lock:
            await asyncio.to_thread(
                self.machine.home_axis,
                axis,
                freq_hz,
                step_chunk,
                max_steps,
            )

    async def goto_units(
        self,
        x: Optional[float],
        y: Optional[float],
        z: Optional[float],
        feed_hz: int,
        trapezoidal: bool = False,
    ) -> None:
        """
        Coordinated move to X/Y/Z in user units (e.g. mm).
        If trapezoidal=True, uses the trapezoidal profile variant.
        """
        async with self._motion_lock:
            if trapezoidal:
                # Use default trapezoidal parameters for now; can be tuned later.
                await asyncio.to_thread(
                    self.machine.go_to_units_coordinated_trapezoidal,
                    x,
                    y,
                    z,
                    feed_hz,     # v_max_hz
                    20000.0,     # accel_steps_s2 (placeholder)
                    50,          # min_feed_hz
                    0.0002,      # pulse_width_s
                )
            else:
                await asyncio.to_thread(
                    self.machine.go_to_units_coordinated,
                    x,
                    y,
                    z,
                    feed_hz,
                    0.0002,
                )

    async def goto_units_trapezoidal(
        self,
        x: Optional[float],
        y: Optional[float],
        z: Optional[float],
        v_max_hz: int,
        accel_steps_s2: float,
        min_feed_hz: int,
    ) -> None:
        """
        Coordinated move to X/Y/Z in user units using a trapezoidal
        velocity profile.
        """
        async with self._motion_lock:
            await asyncio.to_thread(
                self.machine.go_to_units_coordinated_trapezoidal,
                x,
                y,
                z,
                v_max_hz,
                accel_steps_s2,
                min_feed_hz,
                0.0002,
            )

    async def execute_gcode(self, line: str) -> None:
        """
        Execute a single G-code-like line (G0/G1 subset) via the machine.
        """
        async with self._motion_lock:
            await asyncio.to_thread(self.machine.execute_gcode_line, line)

    def get_positions(self) -> Dict[str, Dict[str, float]]:
        """
        Return axis positions in both steps and user units.
        """
        axes = {}
        for axis in ("X", "Y", "Z"):
            axes[axis] = {
                "steps": int(self.machine.get_axis_position_steps(axis)),
                "units": float(self.machine.get_axis_position_units(axis)),
            }
        return axes

    def shutdown(self) -> None:
        """
        Shutdown the machine (close drivers, mux, etc.).
        """
        self.machine.shutdown()


# ----------------------------------------------------------------------
#  WebSocket helpers
# ----------------------------------------------------------------------
async def send_status(ws, pi_machine: PiMachine, msg: str = "alive") -> None:
    """
    Send a status message to the server, including axis positions.
    """
    payload = {
        "type": "status",
        "pi_connected": True,
        "message": msg,
        "ts": time.time(),
        "axes": pi_machine.get_positions(),
    }
    await ws.send(json.dumps(payload))


async def heartbeat(ws, pi_machine: PiMachine, stop_event: asyncio.Event) -> None:
    """
    Periodic heartbeat task: sends status every HEARTBEAT_INTERVAL seconds
    until stop_event is set.
    """
    while not stop_event.is_set():
        try:
            await send_status(ws, pi_machine, "alive")
        except Exception:
            # If we fail to send, break; run_client() will handle reconnect logic.
            break
        # Sleep with interruption check
        try:
            await asyncio.wait_for(stop_event.wait(), HEARTBEAT_INTERVAL)
        except asyncio.TimeoutError:
            # Timeout is expected; continue loop
            continue


async def handle_message(ws, pi_machine: PiMachine, msg: dict) -> None:
    """
    Handle a single incoming JSON message from the server.

    Dispatches to the appropriate high-level machine operation and sends
    an "ok" or "error" response.
    """
    mtype = (msg.get("type") or "").lower()

    async def send(obj: dict) -> None:
        await ws.send(json.dumps(obj))

    try:
        if mtype == "home_all":
            freq = int(msg.get("freq_hz", 2000))
            await pi_machine.home_all(freq_hz=freq)
            await send({"type": "ok", "command": "home_all", "details": {"freq_hz": freq}})

        elif mtype == "home_axis":
            axis = (msg.get("axis") or "X").upper()
            freq = int(msg.get("freq_hz", 2000))
            await pi_machine.home_axis(axis=axis, freq_hz=freq)
            await send({"type": "ok", "command": "home_axis", "details": {"axis": axis, "freq_hz": freq}})

        elif mtype == "goto_units":
            x = msg.get("x")
            y = msg.get("y")
            z = msg.get("z")
            feed_hz = int(msg.get("feed_hz", 1000))
            trapezoidal = bool(msg.get("trapezoidal", False))
            await pi_machine.goto_units(x=x, y=y, z=z, feed_hz=feed_hz, trapezoidal=trapezoidal)
            await send({
                "type": "ok",
                "command": "goto_units",
                "details": {"x": x, "y": y, "z": z, "feed_hz": feed_hz, "trapezoidal": trapezoidal},
            })

        elif mtype == "goto_units_trap":
            x = msg.get("x")
            y = msg.get("y")
            z = msg.get("z")
            v_max_hz = int(msg.get("v_max_hz", 2000))
            accel_steps_s2 = float(msg.get("accel_steps_s2", 20000.0))
            min_feed_hz = int(msg.get("min_feed_hz", 50))
            await pi_machine.goto_units_trapezoidal(
                x=x,
                y=y,
                z=z,
                v_max_hz=v_max_hz,
                accel_steps_s2=accel_steps_s2,
                min_feed_hz=min_feed_hz,
            )
            await send({
                "type": "ok",
                "command": "goto_units_trap",
                "details": {
                    "x": x,
                    "y": y,
                    "z": z,
                    "v_max_hz": v_max_hz,
                    "accel_steps_s2": accel_steps_s2,
                    "min_feed_hz": min_feed_hz,
                },
            })

        elif mtype == "gcode":
            line = msg.get("line") or ""
            if not line.strip():
                raise ValueError("Missing 'line' for gcode command.")
            await pi_machine.execute_gcode(line)
            await send({"type": "ok", "command": "gcode", "details": {"line": line}})

        elif mtype == "get_position":
            await send({
                "type": "position",
                "axes": pi_machine.get_positions(),
            })

        else:
            await send({
                "type": "error",
                "command": mtype or "<none>",
                "message": "unknown or unsupported command",
                "raw": msg,
            })

    except Exception as e:
        await send({
            "type": "error",
            "command": mtype or "<none>",
            "message": str(e),
        })


# ----------------------------------------------------------------------
#  Main client loop
# ----------------------------------------------------------------------
async def run_client() -> None:
    import contextlib

    pi_machine = PiMachine()

    loop = asyncio.get_running_loop()
    stop_event = asyncio.Event()

    def _graceful(sig=None, frame=None) -> None:
        """
        Signal handler for clean shutdown.
        """
        print("\n[Pi] Stop signal received, shutting down gracefully…")
        stop_event.set()
        # Forcefully cancel all running tasks except the current one
        for task in asyncio.all_tasks(loop):
            if task is not asyncio.current_task():
                task.cancel()

    # Register signal handlers
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
                    timeout=10.0,
                )
                print("[Pi] Connected.")
                await send_status(ws, pi_machine, "Pi connected")

                # Start heartbeat task
                hb = asyncio.create_task(heartbeat(ws, pi_machine, stop_event))

                # Main message loop with stop_event check
                while not stop_event.is_set():
                    try:
                        # Make receive interruptible via timeout
                        raw = await asyncio.wait_for(ws.recv(), timeout=1.0)
                        try:
                            msg = json.loads(raw)
                            await handle_message(ws, pi_machine, msg)
                        except Exception as e:
                            await ws.send(json.dumps({"type": "error", "message": str(e)}))
                    except asyncio.TimeoutError:
                        # Timeout is expected; used to periodically check stop_event
                        continue
                    except websockets.exceptions.ConnectionClosed:
                        print("[Pi] Connection closed by server.")
                        break
                    except asyncio.CancelledError:
                        break

            except asyncio.TimeoutError:
                print(f"[Pi] Connection timeout to {WS_URL}")
            except (OSError, websockets.exceptions.ConnectionClosed) as e:
                if not stop_event.is_set():
                    print(f"[Pi] Connection error: {e}. Retrying in {RECONNECT_DELAY}s…")
                    # Sleep with interruptibility
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
        pi_machine.shutdown()
        print("[Pi] Program terminated.")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        WS_URL = sys.argv[1]
    try:
        asyncio.run(run_client())
    except KeyboardInterrupt:
        print("\n[Pi] Manually interrupted.")
