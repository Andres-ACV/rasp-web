import { useWebSocket } from './hooks/useWebSocket';
import { ControlPanel } from './components/ControlPanel';
import { StatusDisplay } from './components/StatusDisplay';
import './App.css'

function App() {
  const { sendMessage, lastMessage, isConnected, isPiConnected } = useWebSocket('/ws/controller');

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 Raspberry Pi Motor Control</h1>
        <p>Control your motors remotely via WebSocket</p>
      </header>

      <main>
        <StatusDisplay 
          isConnected={isConnected}
          isPiConnected={isPiConnected}
          lastMessage={lastMessage}
        />

        <ControlPanel 
          onSendCommand={sendMessage}
          isPiConnected={isPiConnected}
        />
      </main>

      <footer className="App-footer">
        <p>Built with React + FastAPI + WebSockets</p>
      </footer>
    </div>
  );
}

export default App
