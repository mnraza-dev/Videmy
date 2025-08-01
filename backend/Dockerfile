FROM node:20.11.0-alpine
WORKDIR /app
RUN npm install -g pnpm
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --ignore-scripts
COPY . .
EXPOSE 4000
CMD ["pnpm", "run", "dev"]