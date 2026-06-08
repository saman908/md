# Bina web (Next.js) — simple dev container so you can run it with one command.
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json ./
RUN npm install

# Copy the rest of the source
COPY . .

EXPOSE 3000

# Run the Next.js dev server, listening on all interfaces so it's reachable
CMD ["npm", "run", "dev"]
