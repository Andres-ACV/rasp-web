#!/bin/bash

echo "==================================="
echo "Raspberry Pi Motor Control Setup"
echo "==================================="
echo ""

# Create backend virtual environment
echo "🐍 Creating backend virtual environment..."
cd backend
python3 -m venv venv
source venv/bin/activate
echo "📦 Installing backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
deactivate
cd ..

# Create raspberry virtual environment
echo "🐍 Creating Raspberry Pi virtual environment..."
cd raspberry
python3 -m venv venv
source venv/bin/activate
echo "📦 Installing Raspberry Pi dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
deactivate
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "==================================="
echo "To run the application locally:"
echo "==================================="
echo ""
echo "1. Start backend (in one terminal):"
echo "   cd backend"
echo "   source venv/bin/activate"
echo "   python main.py"
echo ""
echo "2. Start frontend (in another terminal):"
echo "   cd frontend"
echo "   npm run dev"
echo ""
echo "3. On Raspberry Pi:"
echo "   cd raspberry"
echo "   source venv/bin/activate"
echo "   python pi_client.py"
echo ""
