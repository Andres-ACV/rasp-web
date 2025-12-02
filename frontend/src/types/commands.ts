// Legacy per-motor commands (old protocol)
export type LegacyCommand =
  | { type: "move"; motor: number; steps: number; frequency: number }
  | {
      type: "jog";
      motor: number;
      direction:
        | "cw"
        | "ccw"
        | "right"
        | "left"
        | "clockwise"
        | "counterclockwise";
      frequency: number;
    }
  | { type: "stop"; motor: number }
  | { type: "stop_all" }
  | { type: "pos"; motor: number }
  | { type: "setpos"; motor: number; value: number };

// High-level Cartesian / machine commands (new protocol)
export type MachineCommand =
  | { type: "home_all"; freq_hz?: number }
  | { type: "home_axis"; axis: "X" | "Y" | "Z"; freq_hz?: number }
  | {
      type: "goto_units";
      x?: number;
      y?: number;
      z?: number;
      feed_hz?: number;
      trapezoidal?: boolean;
    }
  | {
      type: "goto_units_trap";
      x?: number;
      y?: number;
      z?: number;
      v_max_hz?: number;
      accel_steps_s2?: number;
      min_feed_hz?: number;
    }
  | { type: "gcode"; line: string }
  | { type: "get_position" };

export type MuxCommand =
  | { type: "mux_read_all" }
  | { type: "mux_read"; channel: number }
  | { type: "mux_stream_start"; interval_ms?: number }
  | { type: "mux_stream_stop" };

// Unión completa de comandos que el frontend puede mandar
export type Command = LegacyCommand | MachineCommand | MuxCommand;

