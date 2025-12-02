// src/components/ControlPanel.tsx
import type { Command } from "../types/commands";
import { CartesianControls } from "./CartesianControls";
import { MotorControls } from "./MotorControls";
import { MultiplexerPanel } from "./MultiplexerPanel";

interface ControlPanelProps {
  onSendCommand: (command: Command) => void;
  isPiConnected: boolean;
  lastMessage: any;
}

export const ControlPanel = ({
  onSendCommand,
  isPiConnected,
  lastMessage,
}: ControlPanelProps) => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Machine Control Panel
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          High-level Cartesian control, low-level motors and multiplexer monitor.
        </p>
      </div>

      <CartesianControls
        onSendCommand={onSendCommand}
        isPiConnected={isPiConnected}
      />

      <MultiplexerPanel
        onSendCommand={onSendCommand}
        isPiConnected={isPiConnected}
        lastMessage={lastMessage}
      />

      <MotorControls
        onSendCommand={onSendCommand}
        isPiConnected={isPiConnected}
      />
    </div>
  );
};
