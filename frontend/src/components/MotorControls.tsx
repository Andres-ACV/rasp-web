// src/components/MotorControls.tsx
import { useMemo, useState } from "react";
import type { Command } from "../types/commands";

interface MotorControlsProps {
  onSendCommand: (command: Command) => void;
  isPiConnected: boolean;
}

type MotorState = {
  steps: number;
  moveFreq: number;
  jogFreq: number;
  direction: "cw" | "ccw";
  isJogging: boolean;
  setPosValue: number;
};

const defaultMotorState: MotorState = {
  steps: 100,
  moveFreq: 3000,
  jogFreq: 3000,
  direction: "cw",
  isJogging: false,
  setPosValue: 0,
};

export const MotorControls = ({
  onSendCommand,
  isPiConnected,
}: MotorControlsProps) => {
  const [motors, setMotors] = useState<Record<number, MotorState>>({
    1: { ...defaultMotorState },
    2: { ...defaultMotorState },
    3: { ...defaultMotorState },
  });

  const disabledClass = useMemo(
    () => (isPiConnected ? "" : "pointer-events-none opacity-50"),
    [isPiConnected]
  );

  const updateMotor = (id: number, patch: Partial<MotorState>) =>
    setMotors((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));

  const send = (cmd: Command) => onSendCommand(cmd);

  const handleMove = (id: number) => {
    const { steps, moveFreq } = motors[id];
    send({
      type: "move",
      motor: id,
      steps: Number(steps),
      frequency: Number(moveFreq),
    });
  };

  const handleJogStart = (id: number) => {
    const { jogFreq, direction } = motors[id];
    send({
      type: "jog",
      motor: id,
      frequency: Number(jogFreq),
      direction,
    });
    updateMotor(id, { isJogging: true });
  };

  const handleStop = (id: number) => {
    send({ type: "stop", motor: id });
    updateMotor(id, { isJogging: false });
  };

  const handleGetPos = (id: number) => {
    send({ type: "pos", motor: id });
  };

  const handleSetPos = (id: number) => {
    const { setPosValue } = motors[id];
    send({
      type: "setpos",
      motor: id,
      value: Number(setPosValue),
    });
  };

  const handleStopAll = () => {
    send({ type: "stop_all" });
    setMotors((prev) => ({
      1: { ...prev[1], isJogging: false },
      2: { ...prev[2], isJogging: false },
      3: { ...prev[3], isJogging: false },
    }));
  };

  const MotorCard = (id: number) => {
    const s = motors[id];
    const cardTitle = `Motor ${id}`;

    return (
      <div
        key={id}
        className="rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {cardTitle}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              s.isJogging
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200"
                : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            }`}
          >
            {s.isJogging ? "Jogging" : "Idle"}
          </span>
        </div>

        {/* Move */}
        <section className="mb-5">
          <h4 className="mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Move
          </h4>
          <div
            className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${disabledClass}`}
          >
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Steps
              </span>
              <input
                type="number"
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={s.steps}
                onChange={(e) =>
                  updateMotor(id, { steps: Number(e.target.value) })
                }
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Frequency (Hz)
              </span>
              <input
                type="number"
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={s.moveFreq}
                onChange={(e) =>
                  updateMotor(id, { moveFreq: Number(e.target.value) })
                }
              />
            </label>
            <div className="flex items-end">
              <button
                onClick={() => handleMove(id)}
                disabled={!isPiConnected}
                className="w-full rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
              >
                Move
              </button>
            </div>
          </div>
        </section>

        {/* Jog */}
        <section className="mb-5">
          <h4 className="mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Jog
          </h4>
          <div
            className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${disabledClass}`}
          >
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Frequency (Hz)
              </span>
              <input
                type="number"
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={s.jogFreq}
                onChange={(e) =>
                  updateMotor(id, { jogFreq: Number(e.target.value) })
                }
                disabled={s.isJogging}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Direction
              </span>
              <select
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                value={s.direction}
                onChange={(e) =>
                  updateMotor(id, {
                    direction: e.target.value as "cw" | "ccw",
                  })
                }
                disabled={s.isJogging}
              >
                <option value="cw">cw (clockwise)</option>
                <option value="ccw">ccw (counterclockwise)</option>
              </select>
            </label>
            <div className="flex items-end gap-2">
              {!s.isJogging ? (
                <button
                  onClick={() => handleJogStart(id)}
                  disabled={!isPiConnected}
                  className="w-full rounded-lg bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
                >
                  Start Jog
                </button>
              ) : (
                <button
                  onClick={() => handleStop(id)}
                  className="w-full rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                >
                  Stop
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Position */}
        <section className="mb-2">
          <h4 className="mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Position
          </h4>
          <div
            className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${disabledClass}`}
          >
            <div className="flex items-end">
              <button
                onClick={() => handleGetPos(id)}
                disabled={!isPiConnected}
                className="w-full rounded-lg bg-cyan-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
              >
                Get Position
              </button>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                Set position value
              </span>
              <input
                type="number"
                className="rounded-lg border border-zinc-400 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
                value={s.setPosValue}
                onChange={(e) =>
                  updateMotor(id, { setPosValue: Number(e.target.value) })
                }
              />
            </label>
            <div className="flex items-end">
              <button
                onClick={() => handleSetPos(id)}
                disabled={!isPiConnected}
                className="w-full rounded-lg bg-zinc-700 px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900"
              >
                Set Position
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <section className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Low-level Motor Controls
        </h3>
        <button
          onClick={handleStopAll}
          className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
        >
          Stop All Motors
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MotorCard(1)}
        {MotorCard(2)}
        {MotorCard(3)}
      </div>

      {!isPiConnected && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-100 px-4 py-3 text-sm font-medium text-amber-800 dark:border-amber-700 dark:bg-amber-900/60 dark:text-amber-200">
          Raspberry Pi is not connected.
        </div>
      )}
    </section>
  );
};
