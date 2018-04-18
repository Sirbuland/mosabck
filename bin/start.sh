#!/usr/bin/env bash
docker-compose up -d postgres
sleep 5
docker-compose run --rm app rails db:migrate
docker-compose up app