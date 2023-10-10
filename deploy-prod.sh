cp .env.example .env

echo "Starting prod front container..."
docker compose --env-file .env -f docker-compose.yml up sendsay-integration --build -d || echo "Error occurred when starting backend container"
