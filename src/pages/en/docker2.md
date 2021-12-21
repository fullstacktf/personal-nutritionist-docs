---
title: 🐳 Docker Instalation
description: Lorem ipsum dolor sit amet - 4
layout: ../../layouts/MainLayout.astro
---

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
🐳 [Docker documentation](https://docs.docker.com/engine/install/debian/)
## 1. 📸 List images

```zsh
docker image ls
docker images
```

## 2. 📦 List containers
-a option show exited containers

```zsh
docker container ls
docker container ls -a
```
## 3. 💣 Delete an image and containers

To delete unused docker image
```zsh
docker rmi id/image:tag
```

To delete all images
```zsh
docker rmi $(docker images -aq)
```

To delete stopped container
```zsh
docker rm id/name
```

To delete all stopped containers
```zsh
docker container prune
```

To delete all unused resources
```zsh
docker system prune
```

## 4. 🛠 Utils

To execute a bash terminal on the container
```zsh
docker exec -it container bash
```

View changes
```zsh
docker diff container
```

Copy to container
```zsh
docker cp src container:/app
```

## 5. 🚗 Container states
```zsh
docker container start container_name
docker container stop container_name
docker container pause container_name
docker container unpause container_name
docker container restart container_name
docker container kill container_name
```
To run a container you need to puts:
* -it: interactive mode
* -d: run on second plane
* -p: port
```zsh
docker build . -t container_name:test
docker run --name container_name -it -d -p 8080:80 image_name
```
