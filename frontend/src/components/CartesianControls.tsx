// src/components/CartesianControls.tsx
import { useState } from "react";
import type { Command } from "../types/commands";

interface CartesianControlsProps {
  onSendCommand: (command: Command) => void;
  isPiConnected: boolean;
}

type CartesianState = {
  x: number | "";
  y: number | "";
  z: number | "";
  feedHz: number;
  trapEnabled: boolean;
  trapVMax: number;
  trapAccel: number;
  trapMinFeed: number;
  gcodeLine: string;
  homeFreq: number;
  homeAxis: "X" | "Y" | "Z";
};

const defaultCartesianState: CartesianState = {
  x: "",
  y: "",
  z: "",
  feedHz: 1000,
  trapEnabled: false,
  trapVMax: 2000,
  trapAccel: 20000,
  trapMinFeed: 50,
  gcodeLine: "",
  homeFreq: 2000,
  homeAxis: "X",
};

export const CartesianControls = ({
  onSendCommand,
  isPiConnected,
}: CartesianControlsProps) => {
  const [cartesian, setCartesian] =
    useState<CartesianState>(defaultCartesianState);

  const disabledClass = isPiConnected ? "" : "pointer-events-none opacity-50";

  const update = (patch: Partial<CartesianState>) =>
    setCartesian((prev) => ({ ...prev, ...patch }));

  const send = (cmd: Command) => onSendCommand(cmd);

  const handleHomeAll = () => {
    send({ type: "home_all", freq_hz: cartesian.homeFreq });
  };

  const handleHomeAxis = () => {
    send({
      type: "home_axis",
      axis: cartesian.homeAxis,
      freq_hz: cartesian.homeFreq,
    });
  };

  const handleGotoUnits = () => {
    const { x, y, z, feedHz, trapEnabled, trapVMax, trapAccel, trapMinFeed } =
      cartesian;

    const payload = {
      x: x === "" ? undefined : Number(x),
      y: y === "" ? undefined : Number(y),
      z: z === "" ? undefined : Number(z),
    };

    if (trapEnabled) {
      send({
        type: "goto_units_trap",
        ...payload,
        v_max_hz: trapVMax,
        accel_steps_s2: trapAccel,
        min_feed_hz: trapMinFeed,
      });
    } else {
      send({
        type: "goto_units",
        ...payload,
        feed_hz: feedHz,
        trapezoidal: false,
      });
    }
  };

  const handleSendGcode = () => {
    if (!cartesian.gcodeLine.trim()) return;
    send({ type: "gcode", line: cartesian.gcodeLine });
  };

  const handleGetMachinePosition = () => {
    send({ type: "get_position" });
  };

  return (
    <section className="mb-8 rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Cartesian Machine Controls
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            High-level commands: homing, coordinated moves in X/Y/Z and simple
            G-code.
          </p>
        </div>
        <button
          onClick={handleGetMachinePosition}
          disabled={!isPiConnected}
          className="rounded-lg bg-cyan-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
        >
          Get Machine Position
        </button>
      </div>

      <div className={disabledClass}>
        {/* Homing */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-[2fr,1fr,1fr]">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Homing frequency (Hz)
            </span>
            <input
              type="number"
              className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
              value={cartesian.homeFreq}
              onChange={(e) => update({ homeFreq: Number(e.target.value) })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Axis to home
            </span>
            <select
              className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
              value={cartesian.homeAxis}
              onChange={(e) =>
                update({ homeAxis: e.target.value as "X" | "Y" | "Z" })
              }
            >
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={handleHomeAxis}
              disabled={!isPiConnected}
              className="w-full rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
            >
              Home Axis
            </button>
            <button
              onClick={handleHomeAll}
              disabled={!isPiConnected}
              className="w-full rounded-lg bg-amber-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
            >
              Home All
            </button>
          </div>
        </div>

        {/* Coordinated move */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-4">
          {(["x", "y", "z"] as const).map((axisKey) => (
            <div key={axisKey} className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {axisKey.toUpperCase()} (units)
              </span>
              <input
                type="number"
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={cartesian[axisKey] as number | ""}
                onChange={(e) =>
                  update({
                    [axisKey]:
                      e.target.value === "" ? "" : Number(e.target.value),
                  } as Partial<CartesianState>)
                }
                placeholder="keep"
              />
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Feed (Hz, dominant axis)
            </span>
            <input
              type="number"
              className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
              value={cartesian.feedHz}
              onChange={(e) => update({ feedHz: Number(e.target.value) })}
            />
          </div>
        </div>

        {/* Trapezoidal + button */}
        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-400 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600"
                checked={cartesian.trapEnabled}
                onChange={(e) => update({ trapEnabled: e.target.checked })}
              />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Use trapezoidal profile
              </span>
            </label>

            {cartesian.trapEnabled && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                    v_max (Hz)
                  </span>
                  <input
                    type="number"
                    className="rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                    value={cartesian.trapVMax}
                    onChange={(e) =>
                      update({ trapVMax: Number(e.target.value) })
                    }
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                    accel (steps/s²)
                  </span>
                  <input
                    type="number"
                    className="rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                    value={cartesian.trapAccel}
                    onChange={(e) =>
                      update({ trapAccel: Number(e.target.value) })
                    }
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                    min feed (Hz)
                  </span>
                  <input
                    type="number"
                    className="rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                    value={cartesian.trapMinFeed}
                    onChange={(e) =>
                      update({ trapMinFeed: Number(e.target.value) })
                    }
                  />
                </label>
              </div>
            )}
          </div>

          <button
            onClick={handleGotoUnits}
            disabled={!isPiConnected}
            className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900 sm:w-auto"
          >
            Move to X/Y/Z
          </button>
        </div>

        {/* G-code */}
        <div className="mt-5 border-t border-zinc-200 pt-4 text-xs dark:border-zinc-800">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
              G-code line (G0/G1 subset)
            </span>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                className="flex-1 rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={cartesian.gcodeLine}
                onChange={(e) => update({ gcodeLine: e.target.value })}
                placeholder='Example: G1 X10 Y5 Z2 F800'
              />
              <button
                onClick={handleSendGcode}
                disabled={!isPiConnected || !cartesian.gcodeLine.trim()}
                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
              >
                Send G-code
              </button>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};
