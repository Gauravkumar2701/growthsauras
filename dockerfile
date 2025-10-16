FROM node:22 

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy the React app source code and build the app
COPY . /app

RUN npm run build

