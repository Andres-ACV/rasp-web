"""
WebSocket Connection Manager
Manages connections between React controllers and Raspberry Pi
"""
from fastapi import WebSocket
from typing import Dict, Optional
import logging
import uuid

logger = logging.getLogger(__name__)


class ConnectionManager:
    """Manages WebSocket connections for controllers and Raspberry Pi"""
    
    def __init__(self):
        # Dictionary of controller connections {id: websocket}
        self.controllers: Dict[str, WebSocket] = {}
        # Single Raspberry Pi connection
        self.pi_websocket: Optional[WebSocket] = None
    
    async def connect_controller(self, websocket: WebSocket) -> str:
        """
        Connect a new controller (React frontend)
        Returns unique controller ID
        """
        controller_id = str(uuid.uuid4())
        self.controllers[controller_id] = websocket
        logger.info(f"Controller {controller_id} connected. Total controllers: {len(self.controllers)}")
        return controller_id
    
    def disconnect_controller(self, controller_id: str):
        """Disconnect a controller"""
        if controller_id in self.controllers:
            del self.controllers[controller_id]
            logger.info(f"Controller {controller_id} disconnected. Remaining: {len(self.controllers)}")
    
    async def connect_pi(self, websocket: WebSocket):
        """Connect Raspberry Pi"""
        self.pi_websocket = websocket
        logger.info("Raspberry Pi connected")
    
    def disconnect_pi(self):
        """Disconnect Raspberry Pi"""
        self.pi_websocket = None
        logger.info("Raspberry Pi disconnected")
    
    def is_pi_connected(self) -> bool:
        """Check if Raspberry Pi is connected"""
        return self.pi_websocket is not None
    
    async def send_to_pi(self, message: dict) -> bool:
        """
        Send message to Raspberry Pi
        Returns True if successful, False otherwise
        """
        if not self.is_pi_connected():
            logger.warning("Attempted to send message to Pi, but Pi is not connected")
            return False
        
        try:
            await self.pi_websocket.send_json(message)
            logger.info(f"Sent to Pi: {message}")
            return True
        except Exception as e:
            logger.error(f"Error sending to Pi: {e}")
            self.disconnect_pi()
            return False
    
    async def broadcast_to_controllers(self, message: dict):
        """
        Broadcast message to all connected controllers
        """
        disconnected = []
        
        for controller_id, websocket in self.controllers.items():
            try:
                await websocket.send_json(message)
                logger.info(f"Sent to controller {controller_id}: {message}")
            except Exception as e:
                logger.error(f"Error sending to controller {controller_id}: {e}")
                disconnected.append(controller_id)
        
        # Remove disconnected controllers
        for controller_id in disconnected:
            self.disconnect_controller(controller_id)
