# Node.js Project

## Overview
This project is a **Node.js application** that is containerized using **Docker** and communicates with a **MongoDB** database via a Docker network. The project is set up to run both the Node.js app and MongoDB in separate containers that can communicate with each other.

## Features
- **Containerized Node.js application** using Docker.
- **MongoDB as a database** running in a separate container.
- **Docker networking** to enable communication between Node.js and MongoDB.
- **Exposes port 3000** for accessing the Node.js application.

## Prerequisites
Make sure you have the following installed:
- **Docker** ([Install Docker](https://docs.docker.com/get-docker/))

## Project Structure
```
├── Dockerfile
├── docker-compose.yml
├── package.json
├── index.js
├── .dockerignore
└── README.md
```

## Dockerizing the Project
### 1. Build the Node.js Application Image
```bash
sudo docker build -t node_app .
```

### 2. Create a Network for Communication
```bash
sudo docker network create my_network
```

### 3. Run MongoDB in a Container
```bash
sudo docker run -d --name mongodb --network=my_network mongo
```

### 4. Run the Node.js Application in a Container
```bash
sudo docker run -d --name node_container --network=my_network -p 3000:3000 node_app
```

## Verifying the Setup
- **Check running containers:**
  ```bash
  sudo docker ps
  ```
- **Check logs of Node.js container:**
  ```bash
  sudo docker logs node_container
  ```
- **Access the application:** Open your browser and go to `http://localhost:3000`

## Next Steps
- Implement a **CI/CD pipeline** for automated deployment.
- Use **Docker Compose** for easier container management.

## Author
- **Your Name** @ismaildaniyal

