# 1. Use the official Node.js image as base
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and lock file
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy the rest of the app files
COPY . .

# 6. Build the app
RUN npm run build

# 7. Expose the default Next.js port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
