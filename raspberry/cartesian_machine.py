#cartesian_machine.py
# -*- coding: utf-8 -*-
"""
High-level 3-axis Cartesian machine controller for Raspberry Pi.

This class orchestrates:
- Three DM556 stepper drivers (X, Y, Z).
- One HC4051-based limit switch multiplexer for end-stops.
- Axis homing / calibration using limit switches.
- Absolute positioning in:
    - raw steps, or
    - user units (e.g. millimeters) once steps-per-unit are configured.
- Coordinated motion for X/Y/Z with:
    - constant-velocity (simple DDA/Bresenham),
    - optional trapezoidal acceleration profile.
- A minimal G-code-like interface (G0/G1 with X/Y/Z/F).

Dependencies:
- DM556 (low-level stepper driver wrapper; must implement:
    - move(steps: int, freq_hz: int)
    - step_pulse(cw: bool, pulse_width_s: float)
  )
- HC4051SwitchMux (limit switch multiplexer wrapper).
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Optional, Tuple

import time
import math

# Import your low-level drivers
from dm556 import DM556
from hc4051_mux import HC4051SwitchMux


AxisName = str       # expected values: "X", "Y", "Z"
DirectionSign = str  # expected values: "+", "-"


@dataclass
class AxisState:
    """
    Runtime state for a single axis, always tracked in steps.

    Attributes:
        position_steps:
            Current logical position in steps. This value is updated by all
            motion methods (go_to_*, homing, coordinated motion, etc.).
        min_steps:
            Minimum allowed position in steps, typically 0 after homing.
        max_steps:
            Maximum allowed position in steps once calibration is complete.
            If None, no software maximum limit is enforced.
    """
    position_steps: int = 0
    min_steps: int = 0
    max_steps: Optional[int] = None


class Cartesian3AxisMachine:
    """
    High-level abstraction for a 3-axis Cartesian machine (e.g. CNC / pick-and-place).

    This class is intentionally focused on:
        - axis-level semantics (X/Y/Z),
        - limit switch routing via an HC4051 multiplexer,
        - homing and software travel limits,
        - basic and coordinated motions,
        - a small G-code-like interface for later integration (e.g. serial / WebSocket).

    It does NOT handle:
        - low-level GPIO details (delegated to DM556 / HC4051SwitchMux),
        - motion planning queues,
        - complex G-code dialects,
        - concurrency / multi-threading.

    Units:
        - Internally: positions are tracked in STEP units (integers).
        - User-facing: you may optionally configure steps-per-unit (e.g. steps/mm)
          for each axis. Once configured, you can use the *_units* methods to work
          in user units (e.g. millimeters).

    Typical lifecycle:
        1. Create instance.
        2. Assign motor pins for X/Y/Z (set_axis_motor_pins).
        3. Configure steps-per-unit (set_axis_steps_per_unit).
        4. Configure mux and map limit channels (configure_mux + set_limit_channel).
        5. Run homing (calibrate_all_axes or home_axis per axis).
        6. Use go_to_* or execute_gcode_line to move the machine.
        7. Call shutdown() on exit.
    """

    VALID_AXES = ("X", "Y", "Z")
    VALID_SIGNS = ("+", "-")

    def __init__(self) -> None:
        # Axis → DM556 driver instance
        self._motors: Dict[AxisName, DM556] = {}

        # Axis → AxisState (position and travel limits in steps)
        self._axis_state: Dict[AxisName, AxisState] = {
            axis: AxisState() for axis in self.VALID_AXES
        }

        # Axis → steps per user unit (e.g. steps per mm).
        # By default 1 step = 1 unit until explicitly configured.
        self._steps_per_unit: Dict[AxisName, float] = {
            axis: 1.0 for axis in self.VALID_AXES
        }

        # Multiplexer instance (for limit switches)
        self._mux: Optional[HC4051SwitchMux] = None

        # Mapping: (axis, sign) → mux channel index
        # Example: ("X", "+") -> 0, ("X", "-") -> 1
        self._limit_channels: Dict[Tuple[AxisName, DirectionSign], int] = {}

        # Current feed rate in user units per minute (G-code F value).
        # Used by execute_gcode_line and _compute_feed_hz_for_move.
        self._current_feed_units_per_min: float = 600.0  # e.g. 600 mm/min

        # Default rapid feed (for G0 moves) in user units per minute.
        self._rapid_feed_units_per_min: float = 2000.0   # e.g. 2000 mm/min

    # ------------------------------------------------------------------
    #  Motor & pin configuration
    # ------------------------------------------------------------------
    def set_axis_motor_pins(
        self,
        axis: AxisName,
        dir_pin: int,
        pul_pin: int,
        chip: int = 0,
    ) -> None:
        """
        (Re)assign GPIO pins for the given axis motor.

        If there is already a motor assigned to this axis:
            - the previous DM556 instance will be closed (freeing GPIO),
            - it will be replaced by a new DM556 instance using the new pins.

        Args:
            axis:
                Logical axis name: "X", "Y" or "Z" (case-insensitive).
            dir_pin:
                GPIO pin used for direction on the DM556.
            pul_pin:
                GPIO pin used for the pulse/step input on the DM556.
            chip:
                lgpio chip index (typically 0 on Raspberry Pi 5 for main header).

        Raises:
            ValueError:
                If the axis name is invalid.
        """
        axis = axis.upper()
        if axis not in self.VALID_AXES:
            raise ValueError(f"Invalid axis '{axis}'. Use one of {self.VALID_AXES}.")

        # Close previous driver if present
        old = self._motors.get(axis)
        if old is not None:
            old.close()

        # Create new driver with the requested pins
        self._motors[axis] = DM556(dir_pin=dir_pin, pul_pin=pul_pin, chip=chip)

    def set_axis_steps_per_unit(self, axis: AxisName, steps_per_unit: float) -> None:
        """
        Configure the mechanical scaling for the given axis.

        Example:
            If your mechanical setup has 3200 steps per mm, call:
                set_axis_steps_per_unit("X", 3200.0)

        Args:
            axis:
                Logical axis name: "X", "Y" or "Z" (case-insensitive).
            steps_per_unit:
                Number of motor steps per one user unit (e.g. per mm).

        Raises:
            ValueError:
                If the axis is invalid or steps_per_unit is not positive.
        """
        axis = axis.upper()
        if axis not in self.VALID_AXES:
            raise ValueError(f"Invalid axis '{axis}'. Use one of {self.VALID_AXES}.")
        if steps_per_unit <= 0:
            raise ValueError("steps_per_unit must be positive.")
        self._steps_per_unit[axis] = steps_per_unit

    # ------------------------------------------------------------------
    #  Multiplexer configuration & limit switch mapping
    # ------------------------------------------------------------------
    def configure_mux(
        self,
        chip: int = 0,
        select_pins=(5, 6, 12),
        com_pin: int = 13,
        num_channels: int = 6,
        active_low: bool = True,
    ) -> None:
        """
        (Re)create the HC4051 multiplexer instance used for limit switches.

        If a previous mux instance exists, it is closed first.

        Args:
            chip:
                lgpio chip index for the mux GPIOs.
            select_pins:
                Tuple of 3 GPIO pins used as address lines (S0, S1, S2).
            com_pin:
                GPIO pin connected to the COM/Z pin of the 74HC4051.
            num_channels:
                Number of active channels to use (1..8).
            active_low:
                If True, LOW means "pressed". This should match your wiring.
        """
        if self._mux is not None:
            self._mux.close()
            self._mux = None

        self._mux = HC4051SwitchMux(
            chip=chip,
            select_pins=select_pins,
            com_pin=com_pin,
            num_channels=num_channels,
            active_low=active_low,
        )

    def set_limit_channel(self, axis: AxisName, sign: DirectionSign, channel: int) -> None:
        """
        Map a multiplexer channel to a logical axis direction limit switch.

        This allows you to associate a specific mux channel (0..7) with
        X+, X-, Y+, Y-, Z+ or Z-.

        Example:
            set_limit_channel("X", "+", 0)
            set_limit_channel("X", "-", 1)

        Args:
            axis:
                Logical axis name: "X", "Y" or "Z" (case-insensitive).
            sign:
                "+" for positive limit (max side), "-" for negative limit (min side).
            channel:
                74HC4051 channel index (0..7).

        Raises:
            ValueError:
                If axis or sign are invalid, or channel is out of range.
        """
        axis = axis.upper()
        sign = sign.strip()
        if axis not in self.VALID_AXES:
            raise ValueError(f"Invalid axis '{axis}'. Use one of {self.VALID_AXES}.")
        if sign not in self.VALID_SIGNS:
            raise ValueError(f"Invalid sign '{sign}'. Use '+' or '-'.")
        if not (0 <= channel <= 7):
            raise ValueError("channel must be between 0 and 7 for 74HC4051.")

        self._limit_channels[(axis, sign)] = channel

    # ------------------------------------------------------------------
    #  Internal helpers (limit reading + single-step for coordinated moves)
    # ------------------------------------------------------------------
    def _read_limit_switch(self, axis: AxisName, sign: DirectionSign) -> bool:
        """
        Read the limit switch assigned to (axis, sign) via the multiplexer.

        Returns:
            bool:
                True  -> switch is currently pressed.
                False -> switch is not pressed.

        Raises:
            RuntimeError:
                If the multiplexer is not configured or the mapping is missing.
        """
        if self._mux is None:
            raise RuntimeError("Multiplexer not configured. Call configure_mux() first.")

        key = (axis, sign)
        if key not in self._limit_channels:
            raise RuntimeError(f"No limit channel mapped for {axis}{sign}.")

        ch = self._limit_channels[key]
        return self._mux.read_channel(ch)

    def _step_axis_once(
        self,
        axis: AxisName,
        cw: bool,
        pulse_width_s: float = 0.0002,
    ) -> None:
        """
        Issue a single step pulse on the given axis and update its step counter.

        This is used only by coordinated motion routines that need to control
        individual steps explicitly (as opposed to using DM556.move with PWM).

        Args:
            axis:
                Logical axis name: "X", "Y" or "Z".
            cw:
                Direction flag (True for CW / positive direction, False for CCW).
            pulse_width_s:
                High time for the pulse in seconds; must be compatible with
                your stepper driver timing requirements.
        """
        motor = self._motors.get(axis)
        if motor is None:
            # If no motor assigned, silently skip (or raise if preferred).
            return

        # Delegate one physical step to the DM556 driver
        motor.step_pulse(cw=cw, pulse_width_s=pulse_width_s)

        # Update logical position in steps
        st = self._axis_state[axis]
        st.position_steps += 1 if cw else -1

    # ------------------------------------------------------------------
    #  Coordinated move (constant speed, DDA/Bresenham style)
    # ------------------------------------------------------------------
    def go_to_steps_coordinated(
        self,
        x_steps: Optional[int] = None,
        y_steps: Optional[int] = None,
        z_steps: Optional[int] = None,
        feed_hz: int = 1000,
        pulse_width_s: float = 0.0002,
    ) -> None:
        """
        Perform a coordinated move so that X, Y, Z reach their targets at
        (approximately) the same time, following a straight line in step space.

        This uses a simple Bresenham-style digital differential analyzer (DDA)
        in Python, with a fixed step rate (feed_hz) along the dominant axis.

        Args:
            x_steps, y_steps, z_steps:
                Absolute target positions in steps for each axis.
                If None, that axis is not moved.
            feed_hz:
                Effective step rate (steps per second) along the dominant axis.
                Very high values may not be reliable from Python due to timing
                jitter; moderate speeds are recommended.
            pulse_width_s:
                High time for each step pulse in seconds.

        Raises:
            RuntimeError:
                If a target would exceed configured software limits (min/max)
                for an axis that has max_steps defined.
        """
        # Current positions
        cur = {
            "X": self._axis_state["X"].position_steps,
            "Y": self._axis_state["Y"].position_steps,
            "Z": self._axis_state["Z"].position_steps,
        }

        targets = {"X": x_steps, "Y": y_steps, "Z": z_steps}
        deltas: Dict[str, int] = {}
        steps_abs: Dict[str, int] = {}
        dirs_cw: Dict[str, bool] = {}

        # Compute deltas and directions for each axis
        for axis in ("X", "Y", "Z"):
            t = targets[axis]
            if t is None:
                deltas[axis] = 0
                steps_abs[axis] = 0
                dirs_cw[axis] = True  # dummy
                continue

            delta = int(t) - cur[axis]
            deltas[axis] = delta
            steps_abs[axis] = abs(delta)
            dirs_cw[axis] = (delta > 0)

        # If no axis needs to move, exit early
        longest = max(steps_abs.values())
        if longest == 0:
            return

        # Enforce software limits (if max_steps is known)
        for axis in ("X", "Y", "Z"):
            st = self._axis_state[axis]
            if steps_abs[axis] == 0:
                continue
            if st.max_steps is not None:
                new_pos = cur[axis] + deltas[axis]
                if not (st.min_steps <= new_pos <= st.max_steps):
                    raise RuntimeError(
                        f"Target out of range for axis {axis}: "
                        f"{new_pos} steps (allowed {st.min_steps}..{st.max_steps})"
                    )

        # DDA accumulators
        acc = {"X": 0, "Y": 0, "Z": 0}

        # Time between "ticks" along the dominant axis
        feed_hz = max(1, int(feed_hz))
        tick_interval = 1.0 / float(feed_hz)

        for _ in range(longest):
            start_tick = time.perf_counter()

            for axis in ("X", "Y", "Z"):
                if steps_abs[axis] == 0:
                    continue

                acc[axis] += steps_abs[axis]

                if acc[axis] >= longest:
                    # Step this axis once
                    self._step_axis_once(axis, cw=dirs_cw[axis], pulse_width_s=pulse_width_s)
                    acc[axis] -= longest

            # Maintain approximate timing (simple pacing)
            elapsed = time.perf_counter() - start_tick
            remain = tick_interval - elapsed
            if remain > 0:
                time.sleep(remain)

    def go_to_units_coordinated(
        self,
        x: Optional[float] = None,
        y: Optional[float] = None,
        z: Optional[float] = None,
        feed_hz: int = 1000,
        pulse_width_s: float = 0.0002,
    ) -> None:
        """
        Coordinated move to an absolute position expressed in user units
        (e.g. millimeters), using steps_per_unit for each axis.

        Args:
            x, y, z:
                Absolute target positions in user units (e.g. mm).
                If None, that axis is not moved.
            feed_hz:
                Step frequency for the dominant axis (same semantics as
                go_to_steps_coordinated).
            pulse_width_s:
                High time for each step pulse in seconds.
        """
        targets_units = {"X": x, "Y": y, "Z": z}
        targets_steps: Dict[str, Optional[int]] = {"X": None, "Y": None, "Z": None}

        for axis in ("X", "Y", "Z"):
            val = targets_units[axis]
            if val is None:
                continue
            steps_per_unit = self._steps_per_unit[axis]
            targets_steps[axis] = int(round(val * steps_per_unit))

        self.go_to_steps_coordinated(
            x_steps=targets_steps["X"],
            y_steps=targets_steps["Y"],
            z_steps=targets_steps["Z"],
            feed_hz=feed_hz,
            pulse_width_s=pulse_width_s,
        )

    # ------------------------------------------------------------------
    #  Axis state helpers
    # ------------------------------------------------------------------
    def get_axis_position_steps(self, axis: AxisName) -> int:
        """
        Get the current logical position of an axis in steps.
        """
        return self._axis_state[axis.upper()].position_steps

    def get_axis_position_units(self, axis: AxisName) -> float:
        """
        Get the current logical position of an axis in user units.

        Requires:
            set_axis_steps_per_unit(axis, steps_per_unit) to have been
            called with a non-zero value for this axis.
        """
        a = axis.upper()
        st = self._axis_state[a].position_steps
        return st / self._steps_per_unit[a]

    # ------------------------------------------------------------------
    #  Homing / calibration
    # ------------------------------------------------------------------
    def home_axis(
        self,
        axis: AxisName,
        freq_hz: int,
        step_chunk: int = 50,
        max_steps: int = 100_000,
        settle_delay: float = 0.001,
    ) -> None:
        """
        Home a single axis using its negative and positive limit switches.

        Strategy (simple version):
            1. Move towards negative (-) in small step chunks until the
               negative limit switch is hit.
               -> This defines the 0 position (min_steps).
            2. Move slightly away from the switch (backoff).
            3. Move towards positive (+) until the positive limit switch is hit.
               -> The travelled distance defines max_steps for the axis.
            4. Backoff a little from the positive limit.

        This routine uses DM556.move() with fixed-size chunks and a fixed
        frequency. It assumes:
            - limit switches are correctly wired and mapped via set_limit_channel,
            - there are no mechanical obstructions between both limits.

        Args:
            axis:
                Axis to home ("X", "Y", or "Z").
            freq_hz:
                Step frequency to use during homing moves.
            step_chunk:
                Number of steps per homing sub-move (chunk size).
            max_steps:
                Safety limit: maximum number of steps allowed in one direction
                during homing before aborting with an error.
            settle_delay:
                Small delay after each chunk to let mechanics and limit
                switch signals settle.

        Raises:
            ValueError:
                If the axis name is invalid.
            RuntimeError:
                If no motor is configured for the axis or if a limit switch is not
                reached within max_steps steps.
        """
        axis = axis.upper()
        if axis not in self.VALID_AXES:
            raise ValueError(f"Invalid axis '{axis}'.")

        motor = self._motors.get(axis)
        if motor is None:
            raise RuntimeError(f"No motor assigned for axis '{axis}'. Use set_axis_motor_pins().")

        # --- Go to negative limit ---
        print(f"[{axis}] Homing negative direction…")
        moved = 0
        while not self._read_limit_switch(axis, "-"):
            if moved >= max_steps:
                raise RuntimeError(
                    f"Homing {axis}- failed: max travel reached without hitting limit."
                )
            motor.move(-step_chunk, freq_hz)
            moved += step_chunk
            time.sleep(settle_delay)

        # Small backoff
        motor.move(step_chunk, freq_hz)
        time.sleep(settle_delay)

        # At this point, we consider this 0
        st = self._axis_state[axis]
        st.position_steps = 0
        st.min_steps = 0

        # --- Go to positive limit ---
        print(f"[{axis}] Homing positive direction…")
        moved = 0
        while not self._read_limit_switch(axis, "+"):
            if moved >= max_steps:
                raise RuntimeError(
                    f"Homing {axis}+ failed: max travel reached without hitting limit."
                )
            motor.move(step_chunk, freq_hz)
            moved += step_chunk
            time.sleep(settle_delay)

        # Backoff again
        motor.move(-step_chunk, freq_hz)
        time.sleep(settle_delay)

        # Save travel range
        st.max_steps = moved
        print(f"[{axis}] Homing complete. Travel range: 0 .. {moved} steps")

    def calibrate_all_axes(
        self,
        freq_hz: int,
        step_chunk: int = 50,
        max_steps: int = 100_000,
    ) -> None:
        """
        Home/calibrate all configured axes sequentially.

        Only axes that currently have an assigned motor (via set_axis_motor_pins)
        are homed. Axes without motors are skipped.

        Args:
            freq_hz:
                Step frequency to use during homing moves for all axes.
            step_chunk:
                Number of steps per homing sub-move.
            max_steps:
                Safety limit per direction during homing.
        """
        for axis in self.VALID_AXES:
            if axis in self._motors:
                self.home_axis(
                    axis=axis,
                    freq_hz=freq_hz,
                    step_chunk=step_chunk,
                    max_steps=max_steps,
                )

    # ------------------------------------------------------------------
    #  Simple (non-coordinated) motion commands
    # ------------------------------------------------------------------
    def go_to_steps(
        self,
        x_steps: Optional[int] = None,
        y_steps: Optional[int] = None,
        z_steps: Optional[int] = None,
        freq_hz: int = 1000,
    ) -> None:
        """
        Move each axis independently to the specified absolute position in steps.

        This method does NOT coordinate the motion between axes:
            - X moves, then Y, then Z (in dictionary order),
            - each axis uses DM556.move() directly with the specified freq_hz.

        Args:
            x_steps, y_steps, z_steps:
                Absolute target positions in steps. If None, axis is not moved.
            freq_hz:
                Step frequency to use for each individual axis move.

        Raises:
            RuntimeError:
                If a target would exceed configured software limits (min/max)
                for an axis that has max_steps defined.
        """
        targets = {"X": x_steps, "Y": y_steps, "Z": z_steps}

        for axis, target in targets.items():
            if target is None:
                continue
            motor = self._motors.get(axis)
            if motor is None:
                continue

            st = self._axis_state[axis]
            delta = int(target) - st.position_steps
            if delta == 0:
                continue

            # Optional: enforce soft limits if max_steps is known
            if st.max_steps is not None:
                new_pos = st.position_steps + delta
                if not (st.min_steps <= new_pos <= st.max_steps):
                    raise RuntimeError(
                        f"Target out of range for axis {axis}: {new_pos} steps "
                        f"(allowed {st.min_steps}..{st.max_steps})"
                    )

            motor.move(delta, freq_hz)
            st.position_steps += delta

    def go_to_units(
        self,
        x: Optional[float] = None,
        y: Optional[float] = None,
        z: Optional[float] = None,
        freq_hz: int = 1000,
    ) -> None:
        """
        Move to an absolute position expressed in user units (e.g. mm),
        without coordinated interpolation between axes.

        This is a convenience wrapper around go_to_steps() that converts
        user-space units to steps using steps_per_unit for each axis.

        Args:
            x, y, z:
                Target positions in user units (e.g. mm). If None, axis is not moved.
            freq_hz:
                Step frequency to use for each individual axis move.
        """
        targets = {"X": x, "Y": y, "Z": z}
        target_steps: Dict[str, Optional[int]] = {"X": None, "Y": None, "Z": None}

        for axis, val in targets.items():
            if val is None:
                continue
            steps_per_unit = self._steps_per_unit[axis]
            target_steps[axis] = int(round(val * steps_per_unit))

        self.go_to_steps(
            x_steps=target_steps["X"],
            y_steps=target_steps["Y"],
            z_steps=target_steps["Z"],
            freq_hz=freq_hz,
        )

    # ------------------------------------------------------------------
    #  Feed computation for G-code integration
    # ------------------------------------------------------------------
    def _compute_feed_hz_for_move(
        self,
        cur_units: Dict[str, float],
        tgt_units: Dict[str, float],
    ) -> int:
        """
        Compute an approximate feed_hz (steps per second along the dominant axis)
        for a given move from cur_units to tgt_units.

        This is used by execute_gcode_line() to convert a G-code-like feed rate
        (F in units/min) into a suitable step frequency for the DDA-based
        coordinated move.

        Strategy:
            - Compute the path length in user units.
            - Use current feed (units/min) to derive total move time.
            - Convert user-space deltas to steps for each axis.
            - Use number of steps along the dominant axis divided by total time
              to obtain the dominant step frequency (feed_hz).

        Returns:
            int:
                Step frequency in steps/second (>= 1). If the motion length is
                effectively zero, returns 0 (caller can clamp as needed).
        """
        # Unit deltas
        du = {axis: tgt_units[axis] - cur_units[axis] for axis in ("X", "Y", "Z")}

        # Path length in user units (e.g. mm)
        length_units = math.sqrt(du["X"]**2 + du["Y"]**2 + du["Z"]**2)
        if length_units <= 0.0:
            return 0

        # Convert units/min (F) to units/s
        feed_units_per_min = max(self._current_feed_units_per_min, 1e-3)
        feed_units_per_s = feed_units_per_min / 60.0

        # Total time for this move in seconds
        total_time_s = length_units / feed_units_per_s

        # Compute required steps per axis
        steps_per_unit = self._steps_per_unit
        steps_axis = {
            axis: abs(int(round(du[axis] * steps_per_unit[axis])))
            for axis in ("X", "Y", "Z")
        }

        longest = max(steps_axis.values())
        if longest == 0 or total_time_s <= 0:
            return 0

        feed_hz = int(round(longest / total_time_s))
        return max(feed_hz, 1)

    # ------------------------------------------------------------------
    #  Minimal G-code-like interface (G0 / G1, absolute coordinates)
    # ------------------------------------------------------------------
    def execute_gcode_line(self, line: str) -> None:
        """
        Execute a very small subset of G-code syntax:

            - G0: rapid move (uses _rapid_feed_units_per_min).
            - G1: linear move (uses _current_feed_units_per_min).
            - X, Y, Z: absolute target positions in user units (e.g. mm).
            - F: feed rate in units per minute (e.g. mm/min), updates state.

        Only absolute positioning (G90-style) is supported at the moment.
        Comments starting with ';' or '(' are ignored.

        Examples:
            "G1 X10 Y5 Z2 F1200"
            "G0 X0 Y0"
            "G1 Z-3"

        Args:
            line:
                Raw G-code-like line, possibly including comments.
        """
        line = line.strip()
        if not line or line.startswith(";") or line.startswith("("):
            # Empty or pure comment line
            return

        # Remove inline comments after ';'
        if ";" in line:
            line = line.split(";", 1)[0].strip()

        tokens = line.split()
        if not tokens:
            return

        mode: Optional[str] = None   # "G0" or "G1"
        new_feed: Optional[float] = None
        has_motion = False

        # Current positions in units
        cur_units = {
            axis: self.get_axis_position_units(axis)
            for axis in ("X", "Y", "Z")
        }

        # Start with current positions as default targets
        tgt_units = dict(cur_units)

        for tok in tokens:
            tok = tok.upper()

            if tok.startswith("G"):
                # Motion modes we support: G0, G1
                if tok in ("G0", "G00"):
                    mode = "G0"
                elif tok in ("G1", "G01"):
                    mode = "G1"

            elif tok.startswith("X"):
                has_motion = True
                try:
                    tgt_units["X"] = float(tok[1:])
                except ValueError:
                    raise ValueError(f"Invalid X value in: {tok}")

            elif tok.startswith("Y"):
                has_motion = True
                try:
                    tgt_units["Y"] = float(tok[1:])
                except ValueError:
                    raise ValueError(f"Invalid Y value in: {tok}")

            elif tok.startswith("Z"):
                has_motion = True
                try:
                    tgt_units["Z"] = float(tok[1:])
                except ValueError:
                    raise ValueError(f"Invalid Z value in: {tok}")

            elif tok.startswith("F"):
                try:
                    new_feed = float(tok[1:])
                except ValueError:
                    raise ValueError(f"Invalid F value in: {tok}")

            # Additional features (e.g. G90/G91) can be added in the future.

        # Update feed if F was specified
        if new_feed is not None:
            self._current_feed_units_per_min = new_feed

        if not has_motion or mode is None:
            # Only feed change or unsupported command
            return

        # Choose feed for this move
        if mode == "G0":
            # Rapid: use rapid feed override
            saved = self._current_feed_units_per_min
            self._current_feed_units_per_min = self._rapid_feed_units_per_min
            feed_hz = self._compute_feed_hz_for_move(cur_units, tgt_units)
            self.go_to_units_coordinated(
                x=tgt_units["X"],
                y=tgt_units["Y"],
                z=tgt_units["Z"],
                feed_hz=feed_hz,
            )
            # Restore previous feed
            self._current_feed_units_per_min = saved
        elif mode == "G1":
            feed_hz = self._compute_feed_hz_for_move(cur_units, tgt_units)
            self.go_to_units_coordinated(
                x=tgt_units["X"],
                y=tgt_units["Y"],
                z=tgt_units["Z"],
                feed_hz=feed_hz,
            )

    # ------------------------------------------------------------------
    #  Coordinated move with trapezoidal velocity profile
    # ------------------------------------------------------------------
    def go_to_steps_coordinated_trapezoidal(
        self,
        x_steps: Optional[int] = None,
        y_steps: Optional[int] = None,
        z_steps: Optional[int] = None,
        v_max_hz: int = 2000,
        accel_steps_s2: float = 20000.0,
        min_feed_hz: int = 50,
        pulse_width_s: float = 0.0002,
    ) -> None:
        """
        Coordinated move with a trapezoidal velocity profile along the
        dominant axis (the one with the largest step count).

        The speed starts at ~min_feed_hz, accelerates with constant
        acceleration (accel_steps_s2) up to v_max_hz, cruises, and then
        decelerates symmetrically. For very short moves, the profile
        degenerates into a triangular one (no cruise phase).

        Args:
            x_steps, y_steps, z_steps:
                Absolute target positions in steps (None = do not move).
            v_max_hz:
                Maximum step frequency along the dominant axis (steps/s).
            accel_steps_s2:
                Acceleration in steps/s^2 along the dominant axis.
            min_feed_hz:
                Minimum step frequency to avoid extremely slow movement.
            pulse_width_s:
                High time for each step pulse (driver-dependent).

        Raises:
            RuntimeError:
                If a target would exceed configured software limits.
        """
        # Current positions
        cur = {
            "X": self._axis_state["X"].position_steps,
            "Y": self._axis_state["Y"].position_steps,
            "Z": self._axis_state["Z"].position_steps,
        }

        targets = {"X": x_steps, "Y": y_steps, "Z": z_steps}
        deltas: Dict[str, int] = {}
        steps_abs: Dict[str, int] = {}
        dirs_cw: Dict[str, bool] = {}

        for axis in ("X", "Y", "Z"):
            t = targets[axis]
            if t is None:
                deltas[axis] = 0
                steps_abs[axis] = 0
                dirs_cw[axis] = True
                continue

            delta = int(t) - cur[axis]
            deltas[axis] = delta
            steps_abs[axis] = abs(delta)
            dirs_cw[axis] = (delta > 0)

        total_steps = max(steps_abs.values())
        if total_steps == 0:
            return

        # Soft limit check
        for axis in ("X", "Y", "Z"):
            st = self._axis_state[axis]
            if steps_abs[axis] == 0:
                continue
            if st.max_steps is not None:
                new_pos = cur[axis] + deltas[axis]
                if not (st.min_steps <= new_pos <= st.max_steps):
                    raise RuntimeError(
                        f"Target out of range for axis {axis}: "
                        f"{new_pos} steps (allowed {st.min_steps}..{st.max_steps})"
                    )

        # --- Trapezoidal profile computation ---
        v_max = float(max(v_max_hz, min_feed_hz))
        a = float(max(accel_steps_s2, 1.0))

        # Steps needed to accelerate from 0 to v_max:
        s_accel = v_max * v_max / (2.0 * a)

        # If we don't have enough distance for full trapezoid, use a triangle
        if 2.0 * s_accel > total_steps:
            # Peak velocity for triangular profile:
            v_max = math.sqrt(a * total_steps)
            s_accel = total_steps / 2.0

        # DDA accumulators
        acc = {"X": 0, "Y": 0, "Z": 0}

        # Prevent division by zero / extremely low speeds
        min_v = float(min_feed_hz)

        steps_done = 0

        for _ in range(total_steps):
            steps_done += 1
            start_tick = time.perf_counter()

            # Determine velocity based on distance travelled
            if steps_done < s_accel:
                # Acceleration phase
                v = math.sqrt(max(2.0 * a * steps_done, min_v * min_v))
                if v > v_max:
                    v = v_max
            elif steps_done > (total_steps - s_accel):
                # Deceleration phase
                s_remain = max(total_steps - steps_done, 0)
                if s_remain <= 0:
                    v = min_v
                else:
                    v = math.sqrt(max(2.0 * a * s_remain, min_v * min_v))
                    if v > v_max:
                        v = v_max
            else:
                # Cruise phase
                v = v_max

            if v < min_v:
                v = min_v

            tick_interval = 1.0 / v

            # --- DDA step distribution among X/Y/Z ---
            for axis in ("X", "Y", "Z"):
                if steps_abs[axis] == 0:
                    continue

                acc[axis] += steps_abs[axis]

                if acc[axis] >= total_steps:
                    self._step_axis_once(
                        axis,
                        cw=dirs_cw[axis],
                        pulse_width_s=pulse_width_s,
                    )
                    acc[axis] -= total_steps

            # Timing control
            elapsed = time.perf_counter() - start_tick
            remain = tick_interval - elapsed
            if remain > 0:
                time.sleep(remain)

    def go_to_units_coordinated_trapezoidal(
        self,
        x: Optional[float] = None,
        y: Optional[float] = None,
        z: Optional[float] = None,
        v_max_hz: int = 2000,
        accel_steps_s2: float = 20000.0,
        min_feed_hz: int = 50,
        pulse_width_s: float = 0.0002,
    ) -> None:
        """
        Same as go_to_steps_coordinated_trapezoidal, but using user units
        (e.g. millimeters) instead of steps.

        Args:
            x, y, z:
                Absolute target positions in user units (e.g. mm).
            v_max_hz:
                Maximum step frequency along the dominant axis (steps/s).
            accel_steps_s2:
                Acceleration in steps/s^2 along the dominant axis.
            min_feed_hz:
                Minimum step frequency to avoid extremely slow movement.
            pulse_width_s:
                High time for each step pulse (driver-dependent).
        """
        targets_units = {"X": x, "Y": y, "Z": z}
        targets_steps: Dict[str, Optional[int]] = {"X": None, "Y": None, "Z": None}

        for axis in ("X", "Y", "Z"):
            val = targets_units[axis]
            if val is None:
                continue
            steps_per_unit = self._steps_per_unit[axis]
            targets_steps[axis] = int(round(val * steps_per_unit))

        self.go_to_steps_coordinated_trapezoidal(
            x_steps=targets_steps["X"],
            y_steps=targets_steps["Y"],
            z_steps=targets_steps["Z"],
            v_max_hz=v_max_hz,
            accel_steps_s2=accel_steps_s2,
            min_feed_hz=min_feed_hz,
            pulse_width_s=pulse_width_s,
        )

    # ------------------------------------------------------------------
    #  Shutdown / cleanup
    # ------------------------------------------------------------------
    def shutdown(self) -> None:
        """
        Close all underlying drivers and free GPIO resources.

        This should be called once when the process is shutting down to
        ensure lgpio handles are properly released and the multiplexer
        is closed.
        """
        for axis, motor in self._motors.items():
            try:
                motor.close()
            except Exception as e:
                print(f"[{axis}] Error closing motor: {e}")
        self._motors.clear()

        if self._mux is not None:
            try:
                self._mux.close()
            except Exception as e:
                print(f"[MUX] Error closing mux: {e}")
            self._mux = None
