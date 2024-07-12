# stage 1: build
FROM oven/bun:latest AS builder

WORKDIR /app
RUN mkdir packages patches
COPY package.json ./
COPY packages/*/package.json ./packages/
COPY packages ./packages
COPY patches ./patches
COPY bun.lockb .
RUN bun install
COPY . .

WORKDIR /app/packages/service
RUN bun build ./src/index.ts --target=bun --outdir=./dist --sourcemap --external=@aws-sdk/client-iot-data-plane

# stage 2: run
FROM oven/bun:slim

WORKDIR /app
COPY --from=builder /app/node_modules/@aws-sdk/client-iot-data-plane /app/dist/node_modules/@aws-sdk/client-iot-data-plane
COPY --from=builder /app/packages/service/dist /app/dist

WORKDIR /app
CMD ["bun", "run", "./dist/index.js"]

