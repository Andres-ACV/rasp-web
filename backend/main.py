"""
FastAPI Backend for Raspberry Pi Motor Control
Handles WebSocket connections from React frontend and Raspberry Pi
"""
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import json
import logging
from pathlib import Path
from connection_manager import ConnectionManager

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Raspberry Pi Motor Control API")

# CORS middleware (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connection manager instance
manager = ConnectionManager()

# WebSocket endpoint for React frontend (controllers)
@app.websocket("/ws/controller")
async def controller_websocket(websocket: WebSocket):
    """Handle WebSocket connections from React frontend"""
    await websocket.accept()
    controller_id = await manager.connect_controller(websocket)
    logger.info(f"Controller connected: {controller_id}")
    
    try:
        # Send initial status
        await websocket.send_json({
            "type": "status",
            "pi_connected": manager.is_pi_connected(),
            "message": "Connected to server"
        })
        
        while True:
            # Receive command from frontend
            data = await websocket.receive_text()
            message = json.loads(data)
            logger.info(f"Received from controller {controller_id}: {message}")
            
            # Check if Pi is connected
            if not manager.is_pi_connected():
                await websocket.send_json({
                    "type": "error",
                    "message": "Raspberry Pi is not connected"
                })
                continue
            
            # Validate message format
            if "type" not in message:
                await websocket.send_json({
                    "type": "error",
                    "message": "Invalid message format: missing 'type' field"
                })
                continue
            
            # Forward command to Raspberry Pi
            success = await manager.send_to_pi(message)
            
            if not success:
                await websocket.send_json({
                    "type": "error",
                    "message": "Failed to send command to Raspberry Pi"
                })
    
    except WebSocketDisconnect:
        logger.info(f"Controller disconnected: {controller_id}")
        manager.disconnect_controller(controller_id)
    except Exception as e:
        logger.error(f"Error in controller websocket: {e}")
        manager.disconnect_controller(controller_id)


# WebSocket endpoint for Raspberry Pi
@app.websocket("/ws/raspberry")
async def raspberry_websocket(websocket: WebSocket):
    """Handle WebSocket connection from Raspberry Pi"""
    await websocket.accept()
    
    # Only allow one Pi connection
    if manager.is_pi_connected():
        await websocket.send_json({
            "type": "error",
            "message": "Another Raspberry Pi is already connected"
        })
        await websocket.close()
        return
    
    await manager.connect_pi(websocket)
    logger.info("Raspberry Pi connected")
    
    # Notify all controllers that Pi is connected
    await manager.broadcast_to_controllers({
        "type": "status",
        "pi_connected": True,
        "message": "Raspberry Pi connected"
    })
    
    try:
        while True:
            # Receive responses from Pi (e.g., position data)
            data = await websocket.receive_text()
            message = json.loads(data)
            logger.info(f"Received from Pi: {message}")
            
            # Broadcast Pi response to all controllers
            await manager.broadcast_to_controllers(message)
    
    except WebSocketDisconnect:
        logger.info("Raspberry Pi disconnected")
        manager.disconnect_pi()
        
        # Notify all controllers that Pi is disconnected
        await manager.broadcast_to_controllers({
            "type": "status",
            "pi_connected": False,
            "message": "Raspberry Pi disconnected"
        })
    except Exception as e:
        logger.error(f"Error in Pi websocket: {e}")
        manager.disconnect_pi()


# Health check endpoint
@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "pi_connected": manager.is_pi_connected(),
        "active_controllers": len(manager.controllers)
    }


# Serve React static files
static_path = Path(__file__).parent / "static"
if static_path.exists():
    app.mount("/assets", StaticFiles(directory=static_path / "assets"), name="assets")
    
    @app.get("/")
    async def serve_frontend():
        """Serve React frontend"""
        index_file = static_path / "index.html"
        if index_file.exists():
            return FileResponse(index_file)
        return {"message": "Frontend not built yet. Run 'npm run build' in frontend directory."}
else:
    @app.get("/")
    async def root():
        return {
            "message": "Backend is running. Build frontend with 'npm run build' to serve it.",
            "health_endpoint": "/api/health",
            "controller_ws": "/ws/controller",
            "pi_ws": "/ws/raspberry"
        }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
