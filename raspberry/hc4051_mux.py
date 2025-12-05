#hc4051_mux.py
import time
import lgpio


class HC4051SwitchMux:
    """
    Multiplexer controller for the 74HC4051 using the lgpio library.

    This class allows reading multiple digital switches using a single GPIO
    input on the Raspberry Pi by cycling through the multiplexer channels.

    Assumptions:
        - The 74HC4051 is powered at 3.3V.
        - All grounds (Raspberry Pi and the multiplexer) are common.
        - EN/INH on the 4051 is tied LOW (always enabled).
        - Each switch connects its corresponding Yn channel to GND when pressed.
        - The COM/Z line has a pull-up resistor (recommended ~10kΩ external).

    Parameters:
        chip (int):
            The lgpio chip index (usually 0 on Raspberry Pi).
        select_pins (tuple[int, int, int]):
            GPIO pins used for channel address selection (S0, S1, S2).
        com_pin (int):
            GPIO pin connected to the COM/Z output of the 4051.
        num_channels (int):
            Number of active channels to read (1-8).
        active_low (bool):
            If True, a LOW level means "pressed". Otherwise, HIGH = pressed.
    """

    def __init__(
        self,
        chip: int = 0,
        select_pins=(5, 6, 12),
        com_pin: int = 13,
        num_channels: int = 6,
        active_low: bool = True,
    ):
        if len(select_pins) != 3:
            raise ValueError("select_pins must contain exactly 3 GPIO pins (S0, S1, S2).")

        if not (1 <= num_channels <= 8):
            raise ValueError("num_channels must be between 1 and 8.")

        self.chip = chip
        self.select_pins = tuple(select_pins)
        self.com_pin = com_pin
        self.num_channels = num_channels
        self.active_low = active_low

        # Open the GPIO chip
        self.handle = lgpio.gpiochip_open(self.chip)

        # Claim selector pins as outputs
        for pin in self.select_pins:
            lgpio.gpio_claim_output(self.handle, pin)
            lgpio.gpio_write(self.handle, pin, 0)

        # Claim COM pin as input (external pull-up recommended)
        lgpio.gpio_claim_input(self.handle, self.com_pin)

    def _set_address(self, channel: int) -> None:
        """
        Set the multiplexer address bits (S0, S1, S2) for the given channel.
        Channels range from 0 to 7.
        """
        if not (0 <= channel <= 7):
            raise ValueError("channel must be between 0 and 7.")

        # Write binary representation of channel to selector pins
        for bit_index, pin in enumerate(self.select_pins):
            level = (channel >> bit_index) & 1
            lgpio.gpio_write(self.handle, pin, level)

    def read_channel(self, channel: int) -> bool:
        """
        Read the state of a specific channel.

        Returns:
            bool:
                True  -> switch is pressed
                False -> switch is not pressed

        Behavior depends on active_low:
            - If active_low=True:  LOW  (0) means pressed.
            - If active_low=False: HIGH (1) means pressed.
        """
        if not (0 <= channel < self.num_channels):
            raise ValueError(
                f"channel must be between 0 and {self.num_channels - 1}."
            )

        # Select desired channel
        self._set_address(channel)

        # Allow signal to settle
        time.sleep(0.00005)  # ~50 microseconds

        raw_value = lgpio.gpio_read(self.handle, self.com_pin)

        if self.active_low:
            return raw_value == 0
        else:
            return raw_value == 1

    def read_all(self):
        """
        Read all active channels.

        Returns:
            list[bool]: A list of switch states.
                        Example: [False, True, False, ...]
        """
        return [self.read_channel(ch) for ch in range(self.num_channels)]

    def close(self):
        """
        Close the GPIO chip handle.
        Must be called before exiting the program if the chip was opened here.
        """
        if self.handle is not None:
            lgpio.gpiochip_close(self.handle)
            self.handle = None

    # Support context manager usage:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc, tb):
        self.close()
