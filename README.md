# Raspberry Pi Motor Control via WebSocket

# rasp-web

A full-stack application for remotely controlling Raspberry Pi motors (DM556 drivers) using WebSockets.

## Architecture

* **Frontend:** React + TypeScript + Vite
* **Backend:** FastAPI + WebSockets
* **Pi Client:** Python + WebSockets + DM556 driver
* **Deployment:** Railway (backend + frontend together)

---

## Environment Variables (IMPORTANT)

The Raspberry Pi client **no longer uses hardcoded URLs**.
Instead, it reads environment variables:

### **Required**

| Variable | Used by             | Description                                                                                             |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| `WS_URL` | Raspberry Pi client | Full WebSocket URL to backend WebSocket endpoint. Example: `wss://your-app.up.railway.app/ws/raspberry` |

### **Optional**

| Variable | Used by             | Description                                                                               |
| -------- | ------------------- | ----------------------------------------------------------------------------------------- |
| `ORIGIN` | Raspberry Pi client | Explicit Origin header (optional). If not set, it is derived automatically from `WS_URL`. |

You can set these on the Pi:

```bash
export WS_URL="wss://your-app.up.railway.app/ws/raspberry"
export ORIGIN="https://your-app.up.railway.app"   # optional
```

Or run the client with an override:

```bash
python pi_client.py wss://your-app.up.railway.app/ws/raspberry
```

---

## Project Structure

```
rasp-web/
├── backend/              # FastAPI backend
│   ├── main.py
│   ├── connection_manager.py
│   ├── requirements.txt
│   ├── railway.json
│   └── static/           # Built React app (vite build)
├── frontend/             # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── raspberry/            # Raspberry Pi WebSocket client
    ├── pi_client.py
    ├── dm556.py
    └── requirements.txt
```

---

## Features

### Motor Commands (via WebSocket)

1. **Move**

   * Parameters: `steps` (int), `frequency` (Hz)

2. **Jog (Continuous Move)**

   * Parameters: `direction`, `frequency`
   * Runs until a Stop command or Ctrl+C on the Pi

3. **Stop / Stop All**

   * Stops jog/pulse generation

4. **Position Query**

   * Returns internal step counter

---

## Local Development

### Requirements

* Python 3.8+
* Node.js 18+
* npm or yarn

---

## Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

Backend runs at:

```
http://localhost:8000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## Raspberry Pi Client Setup

On your Raspberry Pi:

```bash
cd raspberry
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### **Set the WebSocket URL using environment variables**

#### Local development example:

```bash
export WS_URL="ws://192.168.0.50:8000/ws/raspberry"
python pi_client.py
```

#### Production (Railway) example:

```bash
export WS_URL="wss://your-app.up.railway.app/ws/raspberry"
python pi_client.py
```

You may optionally specify `ORIGIN`:

```bash
export ORIGIN="https://your-app.up.railway.app"
```

Or send the URL directly:

```bash
python pi_client.py wss://your-app.up.railway.app/ws/raspberry
```

---

## Production Deployment (Railway)

### 1. Deploy Backend + Frontend

Before pushing:

```bash
cd frontend
npm install
npm run build
```

This outputs the production build to:

```
backend/static/
```

### 2. Push to GitHub and Deploy with Railway

Railway automatically:

* Installs backend dependencies
* Runs FastAPI via `uvicorn`
* Serves frontend from `/`

### 3. Get Your Public URL

Railway will give you a URL like:

```
https://your-app.up.railway.app
```

### 4. Set `WS_URL` on the Raspberry Pi

```bash
export WS_URL="wss://your-app.up.railway.app/ws/raspberry"
```

---

## WebSocket Endpoints

| Endpoint         | Purpose                       |
| ---------------- | ----------------------------- |
| `/ws/controller` | Frontend WebSocket            |
| `/ws/raspberry`  | Raspberry Pi client WebSocket |

---

## Message Format

### Frontend → Backend → Pi

```json
{
  "type": "move",
  "motor": 1,
  "steps": 1000,
  "frequency": 1200
}
```

### Pi → Backend → Frontend

```json
{
  "type": "position",
  "motor": 1,
  "position": 24500
}
```

---

## Troubleshooting

### Pi can't connect?

1. Verify environment variable:

   ```bash
   echo $WS_URL
   ```

2. Make sure backend is reachable:

   ```bash
   curl https://your-app.up.railway.app/api/health
   ```

3. Railway requires **WSS** (TLS).

---

### Frontend says “Pi disconnected”

* Check Pi logs
* Check Railway WebSocket logs
* Ensure correct WS_URL

---

## Security Recommendations

* Use HTTPS/WSS only
* Restrict CORS
* Require API keys or authentication
* Validate all command inputs

---

## License

MIT

---

## Author

Built for Raspberry Pi motor control PoC.

---