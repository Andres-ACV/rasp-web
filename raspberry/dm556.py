#dm556.py
# -*- coding: utf-8 -*-
import time
import lgpio  # sudo apt install python3-lgpio

# --- Pines BCM ---
'''PUL = 12
DIR = 16'''

# --- Constantes ---
CW, CCW = 1, 0              # sentido
STEPS_PER_REV = 3200        # ajusta según tu microstepping
MIN_FREQ = 10               # Hz
MAX_FREQ = 10000            # Hz (software-timed; >~5–10 kHz puede tener jitter)

class DM556:
    def __init__(self, dir_pin, pul_pin, chip=0):
        # En Pi 5 suele ser gpiochip0 para el header principal
        self.h = lgpio.gpiochip_open(chip)
        self.dir = dir_pin
        self.pul = pul_pin
        self.enabled = False

        self.pos = 0

        # Configura pines como salida
        for g in (self.dir, self.pul):
            lgpio.gpio_claim_output(self.h, g)

    def set_dir(self, cw: bool):
        lgpio.gpio_write(self.h, self.dir, 1 if cw else 0)
    

    def move(self, steps: int, freq_hz: int):
        """Mueve 'steps' pasos a 'freq_hz' Hz usando PWM software."""
        if steps == 0:
            return
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq_hz)))
        cw = steps > 0
        self.set_dir(cw)

        n = abs(int(steps))
        duration = n / float(f)

        # Genera PWM de 50 % duty durante el tiempo indicado
        lgpio.tx_pwm(self.h, self.pul, f, 50.0)
        time.sleep(duration)
        lgpio.tx_pwm(self.h, self.pul, 0, 0.0)

        self.pos += steps

    def jog(self, direction: str, freq_hz: int):
        """Giro continuo hasta Ctrl+C."""
        f = max(MIN_FREQ, min(MAX_FREQ, int(freq_hz)))
        cw = direction.lower() in ("cw", "horario", "r", "right")
        self.set_dir(cw)
        print("Jog activo (Ctrl+C para detener)…")
        lgpio.tx_pwm(self.h, self.pul, f, 50.0)
        try:
            while True:
                time.sleep(0.2)
        except KeyboardInterrupt:
            pass
        finally:
            lgpio.tx_pwm(self.h, self.pul, 0, 0.0)

    def step_pulse(self, cw: bool, pulse_width_s: float = 0.0002):
        """
        Generate a single step pulse in the requested direction.

        Args:
            cw: True for CW, False for CCW.
            pulse_width_s: High time for the pulse in seconds.
        """
        self.set_dir(cw)
        # Rising edge
        lgpio.gpio_write(self.h, self.pul, 1)
        time.sleep(pulse_width_s)
        # Falling edge
        lgpio.gpio_write(self.h, self.pul, 0)
        # (fall time is essentially instantaneous; no extra sleep here)
        self.pos += 1 if cw else -1

    def close(self):
        lgpio.tx_pwm(self.h, self.pul, 0, 0.0)
        lgpio.gpiochip_close(self.h)

if __name__ == "__main__":
    m = DM556(26,13)
    print("Comandos:")
    print("  move <steps> <freq_hz>   (ej: move 3200 5000)")
    print("  jog  cw|ccw <freq_hz>    (Ctrl+C para detener)")
    print("  pos                      (muestra contador)")
    print("  setpos <valor>")
    print("  quit")

    try:
        while True:
            line = input("> ").strip()
            if not line:
                continue
            parts = line.split()
            cmd = parts[0].lower()

            if cmd == "move" and len(parts) == 3:
                steps = int(parts[1]); freq = int(parts[2])
                m.move(steps, freq)
                print(f"OK. pos={m.pos}")

            elif cmd == "jog" and len(parts) == 3:
                direction = parts[1]; freq = int(parts[2])
                m.jog(direction, freq)
                print(f"pos={m.pos}")

            elif cmd == "pos":
                print(f"pos={m.pos}")

            elif cmd == "setpos" and len(parts) == 2:
                m.pos = int(parts[1]); print(f"pos={m.pos}")

            elif cmd == "quit":
                break
            else:
                print("Comando no reconocido.")
    finally:
        m.close()
