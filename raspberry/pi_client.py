"""
Raspberry Pi WebSocket Client
Connects to FastAPI backend and receives motor control commands
"""
import asyncio
import websockets
import json
import logging
from typing import Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class RaspberryPiClient:
    """WebSocket client for Raspberry Pi motor control"""
    
    def __init__(self, server_url: str):
        """
        Initialize Pi client
        
        Args:
            server_url: WebSocket server URL (e.g., "ws://localhost:8000/ws/raspberry")
        """
        self.server_url = server_url
        self.websocket: Optional[websockets.WebSocketClientProtocol] = None
        self.is_jogging = False
        self.current_position = 0  # Mock position counter
    
    # ====================
    # MOCK MOTOR FUNCTIONS - REPLACE THESE WITH YOUR ACTUAL MOTOR CONTROL CODE
    # ====================
    
    def move_motor(self, pasos: int, frecuencia: int):
        """
        Mock function: Move motor with specified steps and frequency
        
        Args:
            pasos: Number of steps to move
            frecuencia: Frequency in Hz
        
        TODO: Replace this with your actual motor control code
        """
        logger.info(f"[MOCK] Moving motor: {pasos} steps at {frecuencia} Hz")
        # Simulate position change
        self.current_position += pasos
        logger.info(f"[MOCK] New position: {self.current_position}")
    
    def jog_motor(self, frecuencia: int):
        """
        Mock function: Start continuous motor movement (jog) at specified frequency
        
        Args:
            frecuencia: Frequency in Hz
        
        TODO: Replace this with your actual motor jog code
        """
        logger.info(f"[MOCK] Starting jog at {frecuencia} Hz")
        self.is_jogging = True
        # In real implementation, this would start continuous movement
    
    def stop_motor(self):
        """
        Mock function: Stop motor movement (stops jog)
        
        TODO: Replace this with your actual motor stop code
        """
        logger.info("[MOCK] Stopping motor")
        self.is_jogging = False
        # In real implementation, this would stop the motor
    
    def get_position(self) -> int:
        """
        Mock function: Get current motor position
        
        Returns:
            Current position as integer
        
        TODO: Replace this with your actual position reading code
        """
        logger.info(f"[MOCK] Current position: {self.current_position}")
        return self.current_position
    
    # ====================
    # WebSocket Communication
    # ====================
    
    async def handle_command(self, message: dict):
        """
        Handle incoming command from server
        
        Args:
            message: Command message as dictionary
        """
        try:
            command_type = message.get("type")
            
            if command_type == "move":
                pasos = message.get("pasos")
                frecuencia = message.get("frecuencia")
                
                if pasos is None or frecuencia is None:
                    logger.error("Move command missing parameters")
                    await self.send_error("Move command requires 'pasos' and 'frecuencia'")
                    return
                
                self.move_motor(int(pasos), int(frecuencia))
                await self.send_response({
                    "type": "move_complete",
                    "pasos": pasos,
                    "frecuencia": frecuencia
                })
            
            elif command_type == "jog":
                frecuencia = message.get("frecuencia")
                
                if frecuencia is None:
                    logger.error("Jog command missing frequency")
                    await self.send_error("Jog command requires 'frecuencia'")
                    return
                
                self.jog_motor(int(frecuencia))
                await self.send_response({
                    "type": "jog_started",
                    "frecuencia": frecuencia
                })
            
            elif command_type == "stop":
                self.stop_motor()
                await self.send_response({
                    "type": "motor_stopped"
                })
            
            elif command_type == "pos":
                position = self.get_position()
                await self.send_response({
                    "type": "position",
                    "position": position
                })
            
            else:
                logger.warning(f"Unknown command type: {command_type}")
                await self.send_error(f"Unknown command: {command_type}")
        
        except Exception as e:
            logger.error(f"Error handling command: {e}")
            await self.send_error(f"Error processing command: {str(e)}")
    
    async def send_response(self, message: dict):
        """Send response back to server"""
        if self.websocket:
            try:
                await self.websocket.send(json.dumps(message))
                logger.info(f"Sent response: {message}")
            except Exception as e:
                logger.error(f"Error sending response: {e}")
    
    async def send_error(self, error_message: str):
        """Send error message to server"""
        await self.send_response({
            "type": "error",
            "message": error_message
        })
    
    async def connect(self):
        """Connect to WebSocket server and handle messages"""
        retry_delay = 5  # seconds
        
        while True:
            try:
                logger.info(f"Connecting to {self.server_url}...")
                async with websockets.connect(self.server_url) as websocket:
                    self.websocket = websocket
                    logger.info("Connected to server successfully!")
                    
                    # Listen for messages
                    async for message in websocket:
                        try:
                            data = json.loads(message)
                            logger.info(f"Received: {data}")
                            await self.handle_command(data)
                        except json.JSONDecodeError as e:
                            logger.error(f"Invalid JSON received: {e}")
                        except Exception as e:
                            logger.error(f"Error processing message: {e}")
            
            except websockets.exceptions.WebSocketException as e:
                logger.error(f"WebSocket error: {e}")
            except Exception as e:
                logger.error(f"Connection error: {e}")
            
            # Connection lost, attempt to reconnect
            self.websocket = None
            logger.info(f"Disconnected. Reconnecting in {retry_delay} seconds...")
            await asyncio.sleep(retry_delay)


async def main():
    """Main entry point"""
    # IMPORTANT: Change this URL to your Railway deployment URL
    # Example: "wss://your-app.up.railway.app/ws/raspberry"
    SERVER_URL = "ws://localhost:8000/ws/raspberry"
    
    # For production (Railway), use wss:// instead of ws://
    # SERVER_URL = "wss://your-app.up.railway.app/ws/raspberry"
    
    logger.info("Starting Raspberry Pi WebSocket Client")
    logger.info(f"Server URL: {SERVER_URL}")
    logger.info("=" * 50)
    
    client = RaspberryPiClient(SERVER_URL)
    await client.connect()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("\nShutting down gracefully...")
