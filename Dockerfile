# Step 1: Build the React frontend
FROM node:18 AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
COPY frontend/.env ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Step 2: Setup the Node.js backend
FROM node:18 AS backend-builder
WORKDIR /app
COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .
COPY --from=frontend-builder /app/frontend/build ./frontend/build

# Expose the backend port
EXPOSE 8080

# Start the Node.js server
CMD [ "npm", "run", "server" ]
