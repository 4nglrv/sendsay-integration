git pull origin master
git checkout master
cp .env.example .env

echo "Starting prod front container..."
docker compose --env-file .env -f docker-compose.yml up prod-cap-email-back --build -d || echo "Error occurred when starting front container"
