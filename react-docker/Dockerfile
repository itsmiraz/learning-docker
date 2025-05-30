# Use an official Node.js runtime as a parent image
FROM node:18-alpine


# -S create a system user
# -G add ther user to a group


RUN addgroup app && adduser -S -G app app

# Set the user to run the app
USER app

# Set the working directory in the container
WORKDIR /app


# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

USER root

RUN chown -R app:app .
# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev", "--host"]