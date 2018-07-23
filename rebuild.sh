#!/bin/bash

docker-compose down && docker build -f Dockerfile-dev.yml -t info/vcl . && export METEOR_SETTINGS="$(cat .settings.json)" && docker-compose up -d
