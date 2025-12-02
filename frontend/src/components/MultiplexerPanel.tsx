// src/components/MultiplexerPanel.tsx
import { useEffect, useMemo, useState } from "react";
import type { Command } from "../types/commands";

interface MultiplexerPanelProps {
  onSendCommand: (command: Command) => void;
  isPiConnected: boolean;
  lastMessage: any; // shape real vendrá del backend; lo filtramos por type
}

type MuxState = {
  channels: boolean[];
  ts?: number;
};

const DEFAULT_CHANNELS = 8;

export const MultiplexerPanel = ({
  onSendCommand,
  isPiConnected,
  lastMessage,
}: MultiplexerPanelProps) => {
  const [muxState, setMuxState] = useState<MuxState>({
    channels: Array(DEFAULT_CHANNELS).fill(false),
    ts: undefined,
  });

  const [autoPoll, setAutoPoll] = useState(false);
  const [intervalMs, setIntervalMs] = useState(200);

  const disabledClass = useMemo(
    () => (isPiConnected ? "" : "pointer-events-none opacity-50"),
    [isPiConnected]
  );

  const send = (cmd: Command) => onSendCommand(cmd);

  // Escuchamos mensajes entrantes tipo "mux_state"
  useEffect(() => {
    if (!lastMessage) return;
    if (lastMessage.type !== "mux_state") return;

    const rawChannels = lastMessage.channels;
    if (!Array.isArray(rawChannels)) return;

    const channels = rawChannels.map((v: any) => !!v);
    setMuxState({
      channels,
      ts:
        typeof lastMessage.ts === "number"
          ? lastMessage.ts
          : Date.now() / 1000,
    });
  }, [lastMessage]);

  // Auto-poll desde el frontend (por ahora)
  useEffect(() => {
    if (!autoPoll || !isPiConnected) return;

    const id = setInterval(() => {
      send({ type: "mux_read_all" } as Command);
    }, intervalMs);

    return () => clearInterval(id);
  }, [autoPoll, intervalMs, isPiConnected, send]);

  const handleSingleRead = () => {
    send({ type: "mux_read_all" } as Command);
  };

  const handleToggleStreaming = () => {
    const next = !autoPoll;
    setAutoPoll(next);

    // Pensando ya en la futura implementación en la Pi:
    if (next) {
      // cuando lo implementemos en la Pi:
      // send({ type: "mux_stream_start", interval_ms: intervalMs });
      // por ahora ya con el setInterval del front tenemos algo usable
    } else {
      // send({ type: "mux_stream_stop" });
    }
  };

  const formattedTs =
    muxState.ts != null
      ? new Date(muxState.ts * 1000).toLocaleTimeString()
      : "—";

  return (
    <section className="mt-6 rounded-2xl border border-zinc-300 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Multiplexer (74HC4051) Monitor
          </h3>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Reads the digital states of the multiplexer channels (limit
            switches, inputs, etc.).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 font-medium ${
              isPiConnected
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            {isPiConnected ? "Pi online" : "Pi offline"}
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            Last update:{" "}
            <span className="font-mono text-zinc-300">{formattedTs}</span>
          </span>
        </div>
      </div>

      {/* Controles de lectura */}
      <div
        className={`mb-4 flex flex-col gap-3 border-b border-zinc-200 pb-4 text-xs dark:border-zinc-800 ${disabledClass}`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button
              onClick={handleSingleRead}
              disabled={!isPiConnected}
              className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-zinc-900"
            >
              Read once
            </button>
            <button
              onClick={handleToggleStreaming}
              disabled={!isPiConnected}
              className={`rounded-lg px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 ${
                autoPoll
                  ? "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500"
                  : "bg-zinc-700 hover:bg-zinc-800 focus:ring-zinc-500"
              }`}
            >
              {autoPoll ? "Stop auto-read" : "Start auto-read"}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Interval (ms)
            </span>
            <input
              type="number"
              min={50}
              step={10}
              className="w-24 rounded-lg border border-zinc-400 bg-white px-2 py-1.5 text-xs text-zinc-900 placeholder-zinc-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
              value={intervalMs}
              onChange={(e) => setIntervalMs(Number(e.target.value) || 100)}
            />
          </div>
        </div>
        {!isPiConnected && (
          <p className="text-[11px] text-amber-600 dark:text-amber-300">
            Raspberry Pi is not connected. Multiplexer readings will be
            unavailable.
          </p>
        )}
      </div>

      {/* Visualización de canales */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
        {muxState.channels.map((active, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-3 text-xs dark:border-zinc-700 dark:bg-zinc-900/60"
          >
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              CH {idx}
            </span>
            <div
              className={`h-4 w-4 rounded-full border-2 ${
                active
                  ? "border-emerald-400 bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  : "border-zinc-500 bg-zinc-800"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                active
                  ? "text-emerald-500 dark:text-emerald-300"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {active ? "ON" : "OFF"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
