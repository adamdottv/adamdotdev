FROM oven/bun:latest

WORKDIR /app
RUN mkdir packages patches
COPY package.json ./
COPY packages/*/package.json ./packages/
COPY packages ./packages
COPY patches ./patches
COPY bun.lockb .
RUN bun install
WORKDIR /app/packages/service
CMD bun run ./src/index.ts
