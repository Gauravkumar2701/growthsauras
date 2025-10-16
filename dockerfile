# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY .package.json package-lock.json ./

RUN npm install

# Copy the React app source code and build the app
COPY . /app

RUN npm run build

