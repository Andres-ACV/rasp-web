#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Simple command-line driver for a DM556 stepper motor driver using lgpio on Raspberry Pi / Linux.

Features:
- Position-based moves with software-timed PWM
- Continuous jog mode until Ctrl+C
- Simple REPL interface: move, jog, pos, setpos, quit

Requirements:
- Raspberry Pi (or compatible board) with lgpio available
  Install with: sudo apt install python3-lgpio
- DM556 (or similar step/dir) stepper driver wired to the chosen GPIO pins
"""

import time
import lgpio  # sudo apt install python3-lgpio

# --- Constants ---
CW, CCW = 1, 0              # Direction constants (clockwise, counter-clockwise)
STEPS_PER_REV = 3200        # Adjust according to your microstepping configuration
MIN_FREQ = 10               # Minimum step frequency in Hz
MAX_FREQ = 10000            # Maximum step frequency in Hz (software-timed; >~5–10 kHz may have jitter)


class DM556:
    """
    DM556 stepper driver helper using lgpio for step/dir control.

    Parameters
    ----------
    dir_pin : int
        GPIO pin used for direction (DIR) input of the driver.
    pul_pin : int
        GPIO pin used for pulse (PUL / STEP) input of the driver.
    chip : int, optional
        GPIO chip index used by lgpio (default 0, e.g. gpiochip0 on Raspberry Pi 5).

    Attributes
    ----------
    h : int
        Handle to the opened gpiochip.
    dir : int
        Direction GPIO pin number.
    pul : int
        Pulse GPIO pin number.
    enabled : bool
        Logical flag; not directly used to control enable pin, but kept for extension.
    pos : int
        Software position counter in steps (incremented on each move).
    """

    def __init__(self, dir_pin: int, pul_pin: int, chip: int = 0) -> None:
        # On Raspberry Pi 5, the main header usually corresponds to gpiochip0
        self.h = lgpio.gpiochip_open(chip)
        self.dir = dir_pin
        self.pul = pul_pin
        self.enabled = False

        # Software position counter
        self.pos = 0

        # Configure pins as outputs
        for g in (self.dir, self.pul):
            lgpio.gpio_claim_output(self.h, g)

    def set_dir(self, cw: bool) -> None:
        """
        Set the motor direction.

        Parameters
        ----------
        cw : bool
            If True, set direction to clockwise (CW); otherwise counter-clockwise (CCW).
        """
        lgpio.gpio_write(self.h, self.dir, 1 if cw else 0)

    def move(self, steps: int, freq_hz: int) -> None:
        """
        Move the motor a finite number of steps using software PWM on the pulse pin.

        Parameters
        ----------
        steps : int
            Number of steps to move. Positive for CW, negative for CCW.
        freq_hz : int
            Requested step frequency in Hz. Clamped between MIN_FREQ and MAX_FREQ.
        """
        if steps == 0:
            return

        # Clamp frequency to allowed range
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq_hz)))

        # Determine direction from the sign of steps
        cw = steps > 0
        self.set_dir(cw)

        # Number of pulses to generate and total duration
        n = abs(int(steps))
        duration = n / float(f)

        # Generate 50% duty cycle PWM for the required duration
        lgpio.tx_pwm(self.h, self.pul, f, 50.0)
        time.sleep(duration)
        lgpio.tx_pwm(self.h, self.pul, 0, 0.0)

        # Update software position counter
        self.pos += steps

    def jog(self, direction: str, freq_hz: int) -> None:
        """
        Start continuous rotation (jog mode) until Ctrl+C is pressed.

        Parameters
        ----------
        direction : str
            Direction string. Accepted values (case-insensitive):
            - "cw", "clockwise", "r", "right"
            - "ccw", "counterclockwise", "l", "left"
        freq_hz : int
            Step frequency in Hz. Clamped between MIN_FREQ and MAX_FREQ.
        """
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq_hz)))

        direction_lower = direction.lower()
        cw = direction_lower in ("cw", "clockwise", "r", "right")
        self.set_dir(cw)

        print("Jog active (press Ctrl+C to stop)…")
        lgpio.tx_pwm(self.h, self.pul, f, 50.0)

        try:
            while True:
                time.sleep(0.2)
        except KeyboardInterrupt:
            # Ctrl+C stops the jog loop
            pass
        finally:
            # Ensure PWM is stopped
            lgpio.tx_pwm(self.h, self.pul, 0, 0.0)

    def close(self) -> None:
        """
        Stop PWM and close the gpiochip handle.
        Call this before exiting the program.
        """
        lgpio.tx_pwm(self.h, self.pul, 0, 0.0)
        lgpio.gpiochip_close(self.h)


if __name__ == "__main__":
    # Example: DIR on GPIO 26, PUL on GPIO 13
    m = DM556(26, 13)

    print("Commands:")
    print("  move <steps> <freq_hz>   (e.g. move 3200 5000)")
    print("  jog  cw|ccw <freq_hz>    (Ctrl+C to stop)")
    print("  pos                      (show position counter)")
    print("  setpos <value>           (set position counter)")
    print("  quit")

    try:
        while True:
            line = input("> ").strip()
            if not line:
                continue

            parts = line.split()
            cmd = parts[0].lower()

            if cmd == "move" and len(parts) == 3:
                steps = int(parts[1])
                freq = int(parts[2])
                m.move(steps, freq)
                print(f"OK. pos={m.pos}")

            elif cmd == "jog" and len(parts) == 3:
                direction = parts[1]
                freq = int(parts[2])
                m.jog(direction, freq)
                print(f"pos={m.pos}")

            elif cmd == "pos":
                print(f"pos={m.pos}")

            elif cmd == "setpos" and len(parts) == 2:
                m.pos = int(parts[1])
                print(f"pos={m.pos}")

            elif cmd == "quit":
                break

            else:
                print("Unrecognized command.")
    finally:
        m.close()