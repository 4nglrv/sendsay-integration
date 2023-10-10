echo "Starting prod senday-integration container..."
docker-compose up --build -d || echo "Error occurred when starting senday-integration container"
