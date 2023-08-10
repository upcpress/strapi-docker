#!/bin/bash

CONTAINER_NAME=strapi

docker stop $CONTAINER_NAME
printf 'container stopped\n'

docker rm $CONTAINER_NAME
printf 'container deleted\n'

docker image rm $CONTAINER_NAME
printf 'image deleted\n'

docker compose -f compose-dev.yml up -d
printf 'done\n'

