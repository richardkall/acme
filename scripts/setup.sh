#!/usr/bin/env bash
set -e

echo "Installing dependencies..."
bun install

echo "Setting up .env files..."
cp -n apps/api/.env.example apps/api/.env || true
cp -n apps/web/.env.example apps/web/.env || true
cp -n packages/db/.env.example packages/db/.env || true

echo "Starting Docker containers..."
docker-compose up -d

echo "Setup complete!"
