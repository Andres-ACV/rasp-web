import { useEffect, useState } from "react";
import { useWebSocket } from "./hooks/useWebSocket";
import { ControlPanel } from "./components/ControlPanel";
import { StatusDisplay } from "./components/StatusDisplay";
import { MachineViewer3D } from "./components/MachineViewer3D";

type MachinePose = { x: number; y: number; z: number };

function App() {
  const {
    sendMessage,
    lastMessage,
    isConnected,
    isPiConnected,
  } = useWebSocket("/ws/controller");

  const [pose, setPose] = useState<MachinePose>({ x: 0, y: 0, z: 0 });

  // Adapter: update pose from status messages
  useEffect(() => {
    if (!lastMessage) return;

    // Example shape: { type: "status", axes: { X: { units: ... }, Y: ..., Z: ... } }
    if (lastMessage.type === "status" && lastMessage.axes) {
      setPose({
        x: lastMessage.axes.X?.units ?? 0,
        y: lastMessage.axes.Y?.units ?? 0,
        z: lastMessage.axes.Z?.units ?? 0,
      });
    }
  }, [lastMessage]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 border-b border-zinc-800 pb-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
                🤖 Raspberry Pi Cartesian Controller
              </h1>
              <p className="mt-1 max-w-xl text-sm text-zinc-400">
                Control a 3-axis CNC / pick-and-place and see its live
                position with a 3D digital twin.
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 space-y-6 pb-6">
          <StatusDisplay
            isConnected={isConnected}
            isPiConnected={isPiConnected}
            lastMessage={lastMessage}
          />

          <MachineViewer3D
            workVolume={{ x: 300, y: 200, z: 150 }} // TODO: match your real machine
            pose={pose}
          />

          <ControlPanel
            onSendCommand={sendMessage}
            isPiConnected={isPiConnected}
            lastMessage={lastMessage}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
