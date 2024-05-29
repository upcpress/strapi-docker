# 标准操作流程

## 1. 本地制作并上传 Docker 镜像

1. 本地执行 `docker build -t strapi.node-base -f .\Dockerfile.node-base .`，构建基础镜像。
2. 然后执行 `docker build -t strapi.final -f .\Dockerfile.final .`，构建最终镜像。
3. 执行 `docker login --username=hi*****@aliyun.com registry.cn-qingdao.aliyuncs.com`，登录阿里云容器镜像服务。
4. 执行 `docker tag [ImageId] registry.cn-qingdao.aliyuncs.com/[命名空间]/[镜像仓库名称]:[镜像版本号]`，给镜像打标签。
5. 执行 `docker push registry.cn-qingdao.aliyuncs.com/[命名空间]/[镜像仓库名称]:[镜像版本号]`，推送镜像到阿里云容器镜像服务。

## 2. 服务器拉取并运行 Docker 镜像

1. 服务器执行 `docker login --username=hi*****@aliyun.com registry.cn-qingdao.aliyuncs.com`，登录阿里云容器镜像服务。
2. 服务器执行 `docker pull registry.cn-qingdao.aliyuncs.com/[命名空间]/[镜像仓库名称]:[镜像版本号]`，拉取镜像。
3. 服务器执行 `docker compose -f compose-remote.yml up -d`，运行容器。然后查看 Docker 日志，确认容器启动成功。
