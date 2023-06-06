# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Build the app
RUN npm run build

# Expose a port (if your app needs it)
EXPOSE 8080

# Set the command to run your app using npm
CMD [ "npm", "start" ]
