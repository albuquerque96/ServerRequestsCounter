# oficial  Node.js image
FROM node:14


WORKDIR /app


COPY package*.json ./

# install dependencies
RUN npm install

# copy sorce code to working directory
COPY . .

# Expose port running the server
EXPOSE 5000

# start application
CMD ["npm", "start"]
