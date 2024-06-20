FROM oven/bun:latest

WORKDIR /app
RUN mkdir packages
COPY package.json ./
COPY packages/*/package.json ./packages/
COPY packages ./packages
COPY bun.lockb .
RUN bun install
WORKDIR /app/packages/twitch
CMD bun run ./src/index.ts
