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

### 2. Run MongoDB in a Container
```bash
sudo docker run -d --name mongodb mongo
```

### 3. Run the Node.js Application in a Container
```bash
sudo docker run -d --name node_container -p 3000:3000 node_app
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

## CI/CD Pipeline
The **CI/CD pipeline** has been successfully implemented to automate testing and deployment. The pipeline includes:
- **Automated builds** triggered on code changes.
- **Continuous integration** with unit testing.
- **Continuous deployment** to ensure seamless updates.

## Next Steps
- Move on to the next phase of development and optimizations.

## Author
- **Your Name** ismaildaniyal
