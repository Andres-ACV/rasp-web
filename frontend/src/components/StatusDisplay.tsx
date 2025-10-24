import './StatusDisplay.css';

interface StatusDisplayProps {
  isConnected: boolean;
  isPiConnected: boolean;
  lastMessage: any;
}

export const StatusDisplay = ({ isConnected, isPiConnected, lastMessage }: StatusDisplayProps) => {
  const getStatusColor = (connected: boolean) => {
    return connected ? '#28a745' : '#dc3545';
  };

  const renderMessageContent = () => {
    if (!lastMessage) {
      return <p className="no-message">No messages yet</p>;
    }

    switch (lastMessage.type) {
      case 'position':
        return (
          <div className="message-success">
            <strong>Current Position:</strong> {lastMessage.position}
          </div>
        );
      
      case 'move_complete':
        return (
          <div className="message-success">
            <strong>Move Complete:</strong> {lastMessage.pasos} steps at {lastMessage.frecuencia} Hz
          </div>
        );
      
      case 'jog_started':
        return (
          <div className="message-success">
            <strong>Jog Started:</strong> Running at {lastMessage.frecuencia} Hz
          </div>
        );
      
      case 'motor_stopped':
        return (
          <div className="message-success">
            <strong>Motor Stopped</strong>
          </div>
        );
      
      case 'error':
        return (
          <div className="message-error">
            <strong>Error:</strong> {lastMessage.message}
          </div>
        );
      
      case 'status':
        return (
          <div className="message-info">
            <strong>Status:</strong> {lastMessage.message}
          </div>
        );
      
      default:
        return (
          <div className="message-info">
            <pre>{JSON.stringify(lastMessage, null, 2)}</pre>
          </div>
        );
    }
  };

  return (
    <div className="status-display">
      <div className="status-indicators">
        <div className="status-indicator">
          <div 
            className="status-dot" 
            style={{ backgroundColor: getStatusColor(isConnected) }}
          />
          <span>Server: {isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
        
        <div className="status-indicator">
          <div 
            className="status-dot" 
            style={{ backgroundColor: getStatusColor(isPiConnected) }}
          />
          <span>Raspberry Pi: {isPiConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
      </div>

      <div className="message-display">
        <h3>Last Response</h3>
        {renderMessageContent()}
      </div>
    </div>
  );
};
