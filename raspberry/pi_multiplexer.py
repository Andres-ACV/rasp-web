#pi_multiplexer.py
# -*- coding: utf-8 -*-
"""
WebSocket client for Raspberry Pi + 74HC4051 (HC4051SwitchMux).

This script:
- Connects to the SAME WebSocket endpoint as the motor client:
    ws://<host>:8000/ws/raspberry
- Exposes the state of a 74HC4051-based switch multiplexer.
- Supports JSON commands:
    - mux_read_all
    - mux_read   (with "channel": int)
- Sends responses:
    - mux_state   (full channels list)
    - mux_channel (single channel state)
- Sends PERIODIC "status" messages compatible with the motor client:
    {
      "type": "status",
      "pi_connected": true,
      "message": "alive",
      "ts": ...,
      "mux_connected": true,
      "num_channels": 6
    }

All logs / messages are in English.
"""

import asyncio
import json
import os
import signal
import sys
import time
from typing import Optional
from urllib.parse import urlparse

import websockets
from websockets.exceptions import ConnectionClosed, InvalidStatus

from hc4051_mux import HC4051SwitchMux

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# Use the SAME endpoint as your motor client
WS_URL = os.getenv("WS_URL") or "ws://192.168.51.79:8000/ws/raspberry"

HEARTBEAT_INTERVAL = 10  # seconds
RECONNECT_DELAY = 3      # seconds

# Default hardware config – override via environment vars if needed
MUX_CHIP = int(os.getenv("MUX_CHIP", "0"))
MUX_S0 = int(os.getenv("MUX_S0", "5"))
MUX_S1 = int(os.getenv("MUX_S1", "6"))
MUX_S2 = int(os.getenv("MUX_S2", "12"))
MUX_COM = int(os.getenv("MUX_COM", "13"))
MUX_NUM_CHANNELS = int(os.getenv("MUX_NUM_CHANNELS", "6"))
MUX_ACTIVE_LOW = os.getenv("MUX_ACTIVE_LOW", "1") not in ("0", "false", "False")


def derive_origin(ws_url: str) -> str:
    """
    Derive an HTTP/HTTPS Origin header from a ws:// or wss:// URL.
    Useful if your backend enforces Origin checks.
    """
    try:
        u = urlparse(ws_url)
        if not u.scheme or not u.netloc:
            return ""
        return f"https://{u.netloc}" if u.scheme == "wss" else f"http://{u.netloc}"
    except Exception:
        return ""


# ---------------------------------------------------------------------------
# Mux wrapper
# ---------------------------------------------------------------------------

class MuxWrapper:
    """
    Simple manager around HC4051SwitchMux.

    Responsible for:
    - Owning the HC4051SwitchMux instance.
    - Providing read_all() and read_channel() helpers.
    """

    def __init__(self) -> None:
        self.mux = HC4051SwitchMux(
            chip=MUX_CHIP,
            select_pins=(MUX_S0, MUX_S1, MUX_S2),
            com_pin=MUX_COM,
            num_channels=MUX_NUM_CHANNELS,
            active_low=MUX_ACTIVE_LOW,
        )

    def read_all(self) -> list[bool]:
        return self.mux.read_all()

    def read_channel(self, ch: int) -> bool:
        return self.mux.read_channel(ch)

    def close(self) -> None:
        try:
            self.mux.close()
        except Exception as e:
            print(f"[MUX] Error closing mux: {e}")


# ---------------------------------------------------------------------------
# WebSocket helpers
# ---------------------------------------------------------------------------

async def send_status(ws, mux: Optional[MuxWrapper], msg: str = "alive") -> None:
    """
    Send a status message COMPATIBLE with the motor client.

    Your frontend / server expects:
        type: "status"
        pi_connected: true

    We also include fields specific to the multiplexer:
        mux_connected, num_channels
    """
    payload = {
        "type": "status",
        "pi_connected": True,           # <- same flag used by your frontend
        "message": msg,
        "ts": time.time(),
        "mux_connected": mux is not None,
        "num_channels": MUX_NUM_CHANNELS,
        "role": "mux_client",          # optional, por si quieres distinguir en el server
    }
    await ws.send(json.dumps(payload))


async def heartbeat(ws, mux: Optional[MuxWrapper], stop_event: asyncio.Event) -> None:
    """
    Periodically send a status message until stop_event is set.
    """
    while not stop_event.is_set():
        try:
            await send_status(ws, mux, "alive")
        except Exception:
            break

        # Sleep with interruption check (igual que en el cliente de motores)
        try:
            await asyncio.wait_for(stop_event.wait(), HEARTBEAT_INTERVAL)
        except asyncio.TimeoutError:
            pass


async def handle_message(ws, mux: Optional[MuxWrapper], msg: dict) -> None:
    """
    Handle a single JSON command coming from the server.

    Supported commands (msg["type"]):
        - "mux_read_all"
        - "mux_read" (requires "channel": int)

    Responses:
        - mux_state:
            {
              "type": "mux_state",
              "channels": [true, false, ...],
              "ts": ...
            }

        - mux_channel:
            {
              "type": "mux_channel",
              "channel": 0,
              "pressed": true,
              "ts": ...
            }
    """
    mtype = (msg.get("type") or "").lower()

    async def send(obj):
        await ws.send(json.dumps(obj))

    try:
        if mux is None:
            raise RuntimeError("Multiplexer not initialized on this client.")

        if mtype == "mux_read_all":
            states = mux.read_all()
            await send(
                {
                    "type": "mux_state",
                    "channels": states,
                    "ts": time.time(),
                }
            )

        elif mtype == "mux_read":
            ch = int(msg.get("channel", 0))
            if not (0 <= ch < MUX_NUM_CHANNELS):
                raise ValueError(
                    f"Invalid channel {ch}, valid range is 0..{MUX_NUM_CHANNELS-1}."
                )
            value = mux.read_channel(ch)
            await send(
                {
                    "type": "mux_channel",
                    "channel": ch,
                    "pressed": bool(value),
                    "ts": time.time(),
                }
            )

        elif mtype in ("ping", "hello"):
            await send(
                {
                    "type": "pong",
                    "role": "mux_client",
                    "ts": time.time(),
                }
            )

        else:
            # Don't crash on unknown messages – just inform.
            await send(
                {
                    "type": "info",
                    "role": "mux_client",
                    "message": "unknown command for mux client",
                    "raw": msg,
                }
            )

    except Exception as e:
        await ws.send(
            json.dumps(
                {
                    "type": "error",
                    "role": "mux_client",
                    "message": str(e),
                }
            )
        )


# ---------------------------------------------------------------------------
# Main client loop
# ---------------------------------------------------------------------------

async def run_client() -> None:
    import contextlib

    # Initialize multiplexer
    try:
        mux = MuxWrapper()
        print(
            f"[MUX] Initialized (chip={MUX_CHIP}, S0={MUX_S0}, S1={MUX_S1}, "
            f"S2={MUX_S2}, COM={MUX_COM}, num_channels={MUX_NUM_CHANNELS}, "
            f"active_low={MUX_ACTIVE_LOW})"
        )
    except Exception as e:
        print("[MUX] Failed to initialize multiplexer:", e)
        mux = None

    loop = asyncio.get_running_loop()
    stop_event = asyncio.Event()

    def _graceful(sig=None, frame=None):
        print("\n[MUX] Ctrl+C received, shutting down gracefully…")
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
                print(f"[MUX] Connecting to {WS_URL} …")

                ws = await asyncio.wait_for(
                    websockets.connect(
                        WS_URL,
                        ping_interval=None,
                        origin=origin if origin else None,
                    ),
                    timeout=10.0,
                )
                print("[MUX] Connected.")
                await send_status(ws, mux, "mux client connected")

                # Start heartbeat task (igual que en el de motores)
                hb = asyncio.create_task(heartbeat(ws, mux, stop_event))

                # Main message loop with stop_event check
                while not stop_event.is_set():
                    try:
                        raw = await asyncio.wait_for(ws.recv(), timeout=1.0)
                        try:
                            msg = json.loads(raw)
                            await handle_message(ws, mux, msg)
                        except Exception as e:
                            await ws.send(
                                json.dumps(
                                    {
                                        "type": "error",
                                        "role": "mux_client",
                                        "message": str(e),
                                    }
                                )
                            )
                    except asyncio.TimeoutError:
                        # Normal – gives us a chance to check stop_event
                        continue
                    except ConnectionClosed:
                        print("[MUX] WebSocket connection closed by server.")
                        break
                    except asyncio.CancelledError:
                        break

            except asyncio.TimeoutError:
                print(f"[MUX] Connection timeout to {WS_URL}")
            except (OSError, ConnectionClosed, InvalidStatus) as e:
                if not stop_event.is_set():
                    print(
                        f"[MUX] Connection error: {e}. Retrying in {RECONNECT_DELAY}s…"
                    )
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

        print("[MUX] Stop signal received, cleaning up…")

    except asyncio.CancelledError:
        print("\n[MUX] Task cancelled.")
    finally:
        if mux is not None:
            mux.close()
        print("[MUX] Program terminated.")


if __name__ == "__main__":
    # Optional: override WS_URL via CLI for quick tests
    #   python pi_multiplexer.py ws://192.168.51.79:8000/ws/raspberry
    if len(sys.argv) > 1:
        WS_URL = sys.argv[1]
    try:
        asyncio.run(run_client())
    except KeyboardInterrupt:
        print("\n[MUX] Manually interrupted.")
