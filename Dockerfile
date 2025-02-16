# Stage 1: Build
FROM node:alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package.json package-lock.json ./

# Install dependencies including mongoose
RUN npm install --only=production

# Stage 2: Run
FROM node:alpine

WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy all application files
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

