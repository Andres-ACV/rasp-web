# Raspberry Pi Motor Control via WebSocket# rasp-web

A full-stack application for controlling Raspberry Pi motors remotely via WebSocket connections.

## Architecture

- **Frontend**: React + TypeScript + Vite
- **Backend**: FastAPI + WebSockets
- **Pi Client**: Python WebSocket client
- **Deployment**: Railway (unified deployment)

## Project Structure

```
rasp-web/
├── backend/              # FastAPI backend
│   ├── main.py          # Main FastAPI application
│   ├── connection_manager.py  # WebSocket connection manager
│   ├── requirements.txt
│   ├── railway.json     # Railway deployment config
│   └── static/          # Built React app (auto-generated)
├── frontend/            # React frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── ControlPanel.tsx
│   │   │   └── StatusDisplay.tsx
│   │   └── hooks/
│   │       └── useWebSocket.ts
│   ├── package.json
│   └── vite.config.ts
└── raspberry/           # Raspberry Pi client
    ├── pi_client.py
    └── requirements.txt
```

## Features

### Motor Commands

1. **Move**: Move motor with specified steps and frequency
   - Parameters: `pasos` (steps), `frecuencia` (Hz)

2. **Jog**: Continuous movement until stop
   - Parameters: `frecuencia` (Hz)
   - Requires explicit Stop command

3. **Stop**: Stop motor movement (stops jog)

4. **Position**: Query current motor position
   - Returns: Current position as integer

## Local Development

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Quick Start

Run the setup script to create virtual environments and install dependencies:

```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup

#### 1. Setup Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Backend runs on: `http://localhost:8000`

#### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

#### 3. Setup Raspberry Pi Client

On your Raspberry Pi:

```bash
cd raspberry
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Edit pi_client.py and update SERVER_URL to your backend URL
# For local development: ws://YOUR_COMPUTER_IP:8000/ws/raspberry
# For production: wss://your-app.up.railway.app/ws/raspberry

python pi_client.py
```

## Production Deployment

### Deploy to Railway

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your repository

3. **Configure Deployment**
   - Railway will auto-detect Python
   - Set root directory: `backend`
   - Start command (auto-configured via railway.json):
     ```
     uvicorn main:app --host 0.0.0.0 --port $PORT
     ```

4. **Build Frontend**
   
   Before deploying, build the frontend:
   
   ```bash
   cd frontend
   npm install
   npm run build
   ```
   
   This creates `backend/static/` with production files.

5. **Push to GitHub**
   
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

6. **Access Your App**
   
   Railway provides a URL like: `https://your-app.up.railway.app`

### Update Raspberry Pi Client

After deployment, update `raspberry/pi_client.py`:

```python
SERVER_URL = "wss://your-app.up.railway.app/ws/raspberry"
```

Run on your Pi:

```bash
python pi_client.py
```

## API Endpoints

### HTTP Endpoints

- `GET /` - Serves React frontend
- `GET /api/health` - Health check endpoint

### WebSocket Endpoints

- `WS /ws/controller` - For React frontend connections
- `WS /ws/raspberry` - For Raspberry Pi connection

### Message Format

**Frontend → Backend → Pi:**
```json
{
  "type": "move",
  "pasos": 100,
  "frecuencia": 50
}
```

**Pi → Backend → Frontend:**
```json
{
  "type": "position",
  "position": 1250
}
```

## Motor Control Integration

The Raspberry Pi client (`raspberry/pi_client.py`) contains mock motor functions. Replace these with your actual motor control code:

```python
def move_motor(self, pasos: int, frecuencia: int):
    # TODO: Add your motor control code here
    # Example: stepper.move(steps=pasos, frequency=frecuencia)
    pass

def jog_motor(self, frecuencia: int):
    # TODO: Add your jog implementation
    # Example: stepper.jog(frequency=frecuencia)
    pass

def stop_motor(self):
    # TODO: Add your stop implementation
    # Example: stepper.stop()
    pass

def get_position(self) -> int:
    # TODO: Return actual position from encoder/stepper
    # Example: return stepper.get_position()
    return 0
```

## Troubleshooting

### Pi Can't Connect

1. Check SERVER_URL in `pi_client.py`
2. Ensure backend is running
3. Check firewall settings
4. For Railway: Use `wss://` (secure WebSocket)

### Frontend Shows "Pi Disconnected"

1. Make sure `pi_client.py` is running on your Pi
2. Check Pi client logs for connection errors
3. Verify backend logs show Pi connection

### Commands Not Working

1. Verify Pi is connected (green indicator)
2. Check browser console for errors
3. Check Pi client logs for received commands
4. Ensure motor control functions are implemented

## Development Tips

- Backend logs show all WebSocket messages
- Frontend DevTools → Network → WS shows WebSocket traffic
- Pi client prints all received commands and responses

## Security Notes (Production)

For production use, add:

1. Authentication (API keys, JWT tokens)
2. Rate limiting
3. Input validation
4. HTTPS/WSS only
5. CORS restrictions

## License

MIT

## Author

Built for Raspberry Pi motor control PoC
