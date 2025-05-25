# Dockerfile

# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose app port
EXPOSE 8000

# Default command (can be overridden by docker-compose)
CMD ["npm", "start"]