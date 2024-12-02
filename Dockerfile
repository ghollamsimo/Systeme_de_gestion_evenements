# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start the application using a simple HTTP server
CMD ["npx", "serve", "-s", "build", "-l", "8080"]
