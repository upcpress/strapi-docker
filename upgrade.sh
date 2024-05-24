#!/bin/bash

CONTAINER_NAME=strapi

# 停止当前的 Strapi 容器
docker stop $CONTAINER_NAME
printf 'container stopped\n'

# 删除当前的 Strapi 容器
docker rm $CONTAINER_NAME
printf 'container deleted\n'

# 删除当前的 Strapi 镜像
docker image rm $CONTAINER_NAME
printf 'image deleted\n'

# 重新构建 Strapi 镜像
docker compose -f compose-remote.yml up -d
printf 'done\n'
