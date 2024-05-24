# ServerRequestsCounter
# Main Goal

Practice various software development concepts including:
- **Git**: `init`, `log`, `status`, `add`, `commit`, `branches`, `push`, `pull`, `checkout`, `.gitignore`.
- **JSON**: Configuration settings for the Node.js app (`package.json`).
- **Node.js**: `Middleware, Express, endpoints, `.
- **Nginx**: `Load balancing, reverse proxy, different algorithms` (static and dynamic).
- **Docker**: `Dockerfile commands, building images, creating and stopping containers,docker-compose` for orchestrating the solution.

## Phase 1

### Goal
Make a single Node.js server instance available to accept HTTP requests, listening on port 5000, and count the number of requests made.




### Testing the Code


```sh
#start three server instances:
examples: 
    node ./app.js $PORT
    
    node ./app.js 
    node ./app.js 5001
    node ./app.js 5002
```  

Use the curl command:

```sh 
    - curl http://localhost:5000
    - curl http://localhost:5001 
    - curl http://localhost:5002
 ```   
1. Make several requests to the above endpoints.
2. View the responses directly in the browser or in Visual Studio Code console.
3. Each server instance will respond with the total number of requests made.

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

## Phase 3

### Goal
Create several server instances and also an Nginx container for load balancing using `docker-compose` with a single command.

### Commands to Run the Code
```sh
docker-compose up
```

### Testing
Make several HTTP requests to `localhost:80` and view the responses. The default algorithm used is round-robin, a static load balancing algorithm.

### Remove the Solution from Your Machine
```sh
docker-compose down
```
