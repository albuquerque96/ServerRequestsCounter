# ServerRequestsCounter

# Main Goal

Practice various software development concepts including:
- **Git**: `init`, `log`, `status`, `add`, `commit`, `branches`, `push`, `pull`, `checkout`, `.gitignore`.
- **JSON**: Configuration settings for the Node.js app (`package.json`).
- **Node.js**: `Middleware, Express, endpoints, `.
- **Nginx**: `Load balancing, reverse proxy, different algorithms` (static and dynamic).
- **Docker**: `Dockerfile commands, building images, creating and stopping containers,docker-compose` for orchestrating the solution.
- 
## Phase 2

### Goal
Use Docker containers to run several instances of the server.

### Commands to Run the Code

**Create Docker Image:**
```sh
docker build -t serverimage:1 .
```

**Create 2 Server Instances (Containers):**
```sh
docker run -d -p 5000:5000 --name nodeServerContainer serverimage:1
docker run -d -p 5001:5000 --name nodeServerContainer2 serverimage:1
```

### Testing
Make several HTTP requests to `localhost:5000` and `localhost:5001` and view the total requests.

### Remove the Solution from Your Machine

**Stop Docker Containers:**
```sh
docker stop nodeServerContainer
docker stop nodeServerContainer2
```

**Remove Docker Containers:**
```sh
docker rm nodeServerContainer
docker rm nodeServerContainer2
```

**Remove Image:**
```sh
docker rmi serverimage:1
```
