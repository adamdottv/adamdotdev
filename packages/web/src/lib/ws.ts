import { CustomServer } from "./server"
import { WebSocketServer, WebSocket } from "ws"

export default class WsController {
  socketServer: WebSocketServer

  constructor(server: CustomServer) {
    this.socketServer = new WebSocketServer({ server })

    this.socketServer.on("connection", (ws: WebSocket) => {
      console.log("Client connected")

      ws.on("close", () => {
        console.log("Client disconnected")
      })

      ws.on("error", (error) => {
        console.log("WebSocket error")
        console.log(error)
      })

      ws.on("message", (message) => {
        console.log("Received raw message:", message)
        try {
          let data
          if (message instanceof Buffer) {
            const messageString = message.toString("utf-8")
            data = JSON.parse(messageString)
          } else if (typeof message === "string") {
            data = JSON.parse(message)
          }

          if (data) {
            console.log("Parsed message:", data)
            if (data.event === "yourEvent") {
              // Handle your specific event
            }
          } else {
            console.error("Invalid message format received")
          }
        } catch (e) {
          console.log("Invalid message received:", message)
        }
      })
    })
  }

  emit(event: string, payload: unknown) {
    console.log(`emitting ${event} with payload ${JSON.stringify(payload)}`)
    const message = JSON.stringify({ event, payload })
    this.socketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
    return message
  }
}
