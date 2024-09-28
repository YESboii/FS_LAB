FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before copying the entire project
# This helps with caching layers and improves build speed if dependencies don't change
COPY package*.json /app/

# Install dependencies conditionally based on the NODE_ENV argument
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

# Now copy the rest of the application files after installing dependencies
COPY . /app

# Expose the port that the application listens to
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
