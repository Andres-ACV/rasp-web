interface StatusDisplayProps {
  isConnected: boolean;
  isPiConnected: boolean;
  lastMessage: any; // luego lo podemos tipar mejor cuando estabilices el protocolo
}

export const StatusDisplay = ({
  isConnected,
  isPiConnected,
  lastMessage,
}: StatusDisplayProps) => {
  const formatTimestamp = (ts?: number) => {
    if (!ts) return null;
    try {
      const d = new Date(ts * 1000);
      return d.toLocaleTimeString();
    } catch {
      return null;
    }
  };

  const renderAxes = (axes: any) => {
    if (!axes || typeof axes !== "object") return null;

    const entries = Object.entries(axes) as [string, any][];

    if (!entries.length) return null;

    return (
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {entries.map(([axis, data]) => (
          <div
            key={axis}
            className="rounded-xl border border-zinc-200 bg-white/70 px-3 py-2 text-xs shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                Axis {axis}
              </span>
            </div>
            <div className="space-y-1 text-[11px] text-zinc-700 dark:text-zinc-300">
              <div className="flex justify-between gap-2">
                <span className="font-medium text-zinc-500 dark:text-zinc-400">
                  Steps
                </span>
                <span className="tabular-nums">{data?.steps ?? "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-medium text-zinc-500 dark:text-zinc-400">
                  Units
                </span>
                <span className="tabular-nums">
                  {typeof data?.units === "number"
                    ? data.units.toFixed(3)
                    : "—"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMessageContent = () => {
    if (!lastMessage) {
      return (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50/80 px-4 py-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400">
          No messages yet
        </div>
      );
    }

    const tsLabel = formatTimestamp(lastMessage.ts);

    // status from Pi (our new protocol)
    if (lastMessage.type === "status") {
      return (
        <div className="space-y-3 rounded-2xl border border-blue-200 bg-blue-50/80 px-4 py-3 text-sm text-blue-900 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">Status</p>
              <p className="mt-0.5 text-xs text-blue-900/80 dark:text-blue-100/80">
                {lastMessage.message ?? "No status message provided."}
              </p>
            </div>
            {tsLabel && (
              <span className="mt-1 inline-flex items-center rounded-full bg-blue-100/70 px-2 py-0.5 text-[10px] font-medium text-blue-900 dark:bg-blue-900/60 dark:text-blue-100">
                {tsLabel}
              </span>
            )}
          </div>

          {renderAxes(lastMessage.axes)}
        </div>
      );
    }

    // position response (old protocol or custom)
    if (lastMessage.type === "position") {
      return (
        <div className="space-y-2 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">Current Position</p>
              <p className="mt-0.5 text-xs text-emerald-900/80 dark:text-emerald-100/80">
                Raw payload:
              </p>
            </div>
            {tsLabel && (
              <span className="mt-1 inline-flex items-center rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-medium text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100">
                {tsLabel}
              </span>
            )}
          </div>
          <pre className="mt-1 overflow-x-auto rounded-lg bg-emerald-900/90 px-3 py-2 text-[11px] text-emerald-50">
            {JSON.stringify(lastMessage, null, 2)}
          </pre>
        </div>
      );
    }

    // generic "ok" response from new client
    if (lastMessage.type === "ok") {
      return (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">Command OK</p>
              <p className="mt-0.5 text-xs text-emerald-900/80 dark:text-emerald-100/80">
                {lastMessage.command
                  ? `Command "${lastMessage.command}" completed.`
                  : "Command completed successfully."}
              </p>
            </div>
            {tsLabel && (
              <span className="mt-1 inline-flex items-center rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-medium text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100">
                {tsLabel}
              </span>
            )}
          </div>
          {lastMessage.details && (
            <pre className="mt-2 overflow-x-auto rounded-lg bg-emerald-900/90 px-3 py-2 text-[11px] text-emerald-50">
              {JSON.stringify(lastMessage.details, null, 2)}
            </pre>
          )}
        </div>
      );
    }

    // error
    if (lastMessage.type === "error") {
      return (
        <div className="rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm text-rose-900 shadow-sm dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">Error</p>
              <p className="mt-0.5 text-xs text-rose-900/80 dark:text-rose-100/80">
                {lastMessage.message ?? "Unknown error."}
              </p>
              {lastMessage.command && (
                <p className="mt-1 text-[11px] text-rose-900/70 dark:text-rose-100/70">
                  Command: <code>{lastMessage.command}</code>
                </p>
              )}
            </div>
            {tsLabel && (
              <span className="mt-1 inline-flex items-center rounded-full bg-rose-100/70 px-2 py-0.5 text-[10px] font-medium text-rose-900 dark:bg-rose-900/60 dark:text-rose-100">
                {tsLabel}
              </span>
            )}
          </div>
          {lastMessage.raw && (
            <pre className="mt-2 overflow-x-auto rounded-lg bg-rose-900/90 px-3 py-2 text-[11px] text-rose-50">
              {JSON.stringify(lastMessage.raw, null, 2)}
            </pre>
          )}
        </div>
      );
    }

    // Fallback: show raw JSON
    return (
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-xs text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100">
        <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Raw message
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-900/90 px-3 py-2 text-[11px] text-zinc-50">
          {JSON.stringify(lastMessage, null, 2)}
        </pre>
      </div>
    );
  };

  const statusDot = (active: boolean, color: "emerald" | "rose") => {
    const base =
      color === "emerald"
        ? "bg-emerald-500"
        : "bg-rose-500";
    const ping =
      color === "emerald"
        ? "bg-emerald-400"
        : "bg-rose-400";

    return (
      <div className="relative flex h-3 w-3 items-center justify-center">
        {active && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full ${ping} opacity-60 animate-ping`}
          />
        )}
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${
            active ? base : "bg-zinc-400 dark:bg-zinc-600"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
        {/* Top: connection indicators */}
        <div className="flex flex-col gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Connection Status
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              WebSocket server & Raspberry Pi machine controller
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2">
              {statusDot(isConnected, "emerald")}
              <span className="font-medium text-zinc-700 dark:text-zinc-200">
                Server:{" "}
                <span className={isConnected ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
                  {isConnected ? "Connected" : "Disconnected"}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              {statusDot(isPiConnected, "emerald")}
              <span className="font-medium text-zinc-700 dark:text-zinc-200">
                Raspberry Pi:{" "}
                <span className={isPiConnected ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
                  {isPiConnected ? "Connected" : "Disconnected"}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom: last message */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Last Response
            </h3>
            {lastMessage?.type && (
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                Type: <span className="ml-1 font-semibold">{lastMessage.type}</span>
              </span>
            )}
          </div>
          {renderMessageContent()}
        </div>
      </div>
    </div>
  );
};
