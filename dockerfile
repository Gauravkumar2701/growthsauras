# Stage 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY .package.json package-lock.json ./

RUN npm install

# Copy the React app source code and build the app
COPY . /app

RUN npm run build

# Stage 2: Nginx to serve the React app
FROM nginx:alpine

# Copy the build output from the first stage to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx config for SSL and reverse proxy setup
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80 443
