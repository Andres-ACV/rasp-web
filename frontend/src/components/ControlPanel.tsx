import { useState } from 'react';
import './ControlPanel.css';

interface ControlPanelProps {
  onSendCommand: (command: any) => void;
  isPiConnected: boolean;
}

export const ControlPanel = ({ onSendCommand, isPiConnected }: ControlPanelProps) => {
  // Move command state
  const [movePasos, setMovePasos] = useState<number>(100);
  const [moveFrecuencia, setMoveFrecuencia] = useState<number>(50);

  // Jog command state
  const [jogFrecuencia, setJogFrecuencia] = useState<number>(50);
  const [isJogging, setIsJogging] = useState<boolean>(false);

  const handleMove = () => {
    if (!isPiConnected) {
      alert('Raspberry Pi is not connected');
      return;
    }

    onSendCommand({
      type: 'move',
      pasos: movePasos,
      frecuencia: moveFrecuencia,
    });
  };

  const handleJog = () => {
    if (!isPiConnected) {
      alert('Raspberry Pi is not connected');
      return;
    }

    onSendCommand({
      type: 'jog',
      frecuencia: jogFrecuencia,
    });
    setIsJogging(true);
  };

  const handleStop = () => {
    onSendCommand({
      type: 'stop',
    });
    setIsJogging(false);
  };

  const handleGetPosition = () => {
    if (!isPiConnected) {
      alert('Raspberry Pi is not connected');
      return;
    }

    onSendCommand({
      type: 'pos',
    });
  };

  return (
    <div className="control-panel">
      <h2>Motor Control Panel</h2>

      {/* Move Command */}
      <div className="control-section">
        <h3>Move</h3>
        <div className="input-group">
          <label>
            Steps (pasos):
            <input
              type="number"
              value={movePasos}
              onChange={(e) => setMovePasos(Number(e.target.value))}
              disabled={!isPiConnected}
            />
          </label>
          <label>
            Frequency (Hz):
            <input
              type="number"
              value={moveFrecuencia}
              onChange={(e) => setMoveFrecuencia(Number(e.target.value))}
              disabled={!isPiConnected}
            />
          </label>
        </div>
        <button 
          onClick={handleMove} 
          disabled={!isPiConnected}
          className="btn btn-primary"
        >
          Move Motor
        </button>
      </div>

      {/* Jog Command */}
      <div className="control-section">
        <h3>Jog</h3>
        <div className="input-group">
          <label>
            Frequency (Hz):
            <input
              type="number"
              value={jogFrecuencia}
              onChange={(e) => setJogFrecuencia(Number(e.target.value))}
              disabled={!isPiConnected || isJogging}
            />
          </label>
        </div>
        <div className="button-group">
          <button 
            onClick={handleJog} 
            disabled={!isPiConnected || isJogging}
            className="btn btn-success"
          >
            Start Jog
          </button>
          <button 
            onClick={handleStop} 
            disabled={!isJogging}
            className="btn btn-danger"
          >
            Stop
          </button>
        </div>
      </div>

      {/* Position Query */}
      <div className="control-section">
        <h3>Position</h3>
        <button 
          onClick={handleGetPosition} 
          disabled={!isPiConnected}
          className="btn btn-info"
        >
          Get Position
        </button>
      </div>
    </div>
  );
};
