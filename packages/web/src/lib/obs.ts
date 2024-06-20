import OBSWebSocket from "obs-websocket-js"
import { delay } from "./utils"
import WsController from "./ws"
import { CustomServer } from "./server"
import StreamController, { Guest } from "./stream"
import type { JsonObject } from "type-fest"
import { fadeIn } from "./spotify"

export type Scene =
  | "Init"
  | "Intro"
  | "Camera"
  | "Camera (w/ Guest)"
  | "Camera (Chroma)"
  | "Screen"
  | "Screen (w/ Guest)"
  | "Behind Screen"
  | "Mobile"
  | "Break"
  | "Outro"

export type Source =
  | "Shared"
  | "Overlay"
  | "Overlay (Intro)"
  | "Overlay (Break)"
  | "Overlay (Outro)"
  | "Camera (Guest)"

const scenes: Scene[] = [
  "Init",
  "Intro",
  "Camera",
  "Camera (w/ Guest)",
  "Screen",
  "Screen (w/ Guest)",
  "Behind Screen",
  "Break",
  "Outro",
]

type ZoomSource = {
  scene: Scene
  sceneItemId: number
  status?: "zoomedIn" | "zoomedOut"
}

const zoomSources: ZoomSource[] = []

export default class ObsController {
  obs = new OBSWebSocket()
  currentScene: Scene | undefined
  scenes: JsonObject[] | undefined
  connected: boolean = false
  streaming: boolean = false
  recording: boolean = false
  cameraZoomFilter: string | undefined = undefined

  private server: CustomServer
  private wsController: WsController
  private streamController: StreamController
  private timerHandler?: NodeJS.Timer

  constructor(
    server: CustomServer,
    wsController: WsController,
    streamController: StreamController
  ) {
    this.server = server
    this.wsController = wsController
    this.streamController = streamController
    this.server.on("online", this.handleStreamOnline.bind(this))

    this.initObsWebsocket()

    this.server.on("guest-joined", this.handleGuestJoined.bind(this))
    this.server.on("guest-left", this.handleGuestLeft.bind(this))
  }

  private async handleStreamOnline() {
    this.setScene("Init")

    setTimeout(() => {
      this.setScene("Intro")
    }, 1000 * 30)
  }

  private async handleGuestJoined(_guest: Guest) {
    await this.refreshBrowserSource("Camera (Guest)")

    if (this.currentScene?.startsWith("Camera")) {
      this.setScene("Camera (w/ Guest)")
    } else if (this.currentScene?.startsWith("Screen")) {
      this.setScene("Screen (w/ Guest)")
    }
  }

  private async handleGuestLeft(_guest: Guest) {
    await this.refreshBrowserSource("Camera (Guest)")

    if (this.currentScene?.startsWith("Camera")) {
      this.setScene("Camera")
    } else if (this.currentScene?.startsWith("Screen")) {
      this.setScene("Screen")
    }
  }

  private async initObsWebsocket() {
    try {
      await this.obs.connect("ws://localhost:4455")
    } catch (error) {
      console.error("Error connecting to OBS")
      console.info("Retrying in 5 seconds")
      this.connected = false
      await delay(1000 * 5)
      this.initObsWebsocket()
      return
    }

    await delay(1000 * 3)
    this.connected = true

    const response = await this.obs.call("GetCurrentProgramScene")
    this.currentScene = response.currentProgramSceneName as Scene

    const allScenes = await this.obs.call("GetSceneList")
    this.scenes = allScenes.scenes

    // console.log("scenes", JSON.stringify(this.scenes, null, 2))

    const {
      filters: [filter],
    } = await this.obs.call("GetSourceFilterList", {
      sourceName: "Screen",
    })

    this.cameraZoomFilter = filter.filterName as string

    this.obs.on("ConnectionClosed", async () => {
      console.error("OBS connection closed")

      if (this.connected) {
        this.connected = false
        await this.initObsWebsocket()
      }
    })

    this.obs.on("ConnectionError", async () => {
      console.error("OBS connection error")

      if (this.connected) {
        this.connected = false
        await this.initObsWebsocket()
      }
    })

    this.obs.on("StreamStateChanged", async (status) => {
      this.streaming = status.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED"
    })

    this.obs.on("RecordStateChanged", async (status) => {
      this.recording = status.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED"
    })

    for (const scene of scenes) {
      const sources = await this.obs.call("GetSceneItemList", {
        sceneName: scene,
      })

      const zooms = sources.sceneItems.filter((i) =>
        i.sourceName?.toString().includes("(Zoomed)")
      ) as { sceneItemId: number }[]

      for (const { sceneItemId } of zooms) {
        zoomSources.push({ scene, sceneItemId })
      }
    }

    await this.refreshBrowserSource("Shared")
    await this.refreshBrowserSource("Overlay")
  }

  async startStream() {
    return this.obs.call("StartStream")
  }

  async stopStream() {
    return this.obs.call("StopStream")
  }

  async startRecording() {
    return this.obs.call("StartRecord")
  }

  async stopRecording() {
    return this.obs.call("StopRecord")
  }

  async zoomIn() {
    await this.obs.call("SetSourceFilterEnabled", {
      sourceName: "Screen",
      filterName: this.cameraZoomFilter!,
      filterEnabled: true,
    })

    // for (const source of zoomSources) {
    //   const { scene, sceneItemId, status } = source
    //   if (status === "zoomedIn") continue
    //
    //   await this.obs.call("SetSceneItemEnabled", {
    //     sceneName: scene,
    //     sceneItemId,
    //     sceneItemEnabled: true,
    //   })
    //
    //   source.status = "zoomedIn"
    // }
  }

  async zoomOut() {
    await this.obs.call("SetSourceFilterEnabled", {
      sourceName: "Screen",
      filterName: this.cameraZoomFilter!,
      filterEnabled: true,
    })
    // for (const source of zoomSources) {
    //   const { scene, sceneItemId, status } = source
    //   if (status === "zoomedOut") continue
    //
    //   await this.obs.call("SetSceneItemEnabled", {
    //     sceneName: scene,
    //     sceneItemId,
    //     sceneItemEnabled: false,
    //   })
    //
    //   source.status = "zoomedOut"
    // }
  }

  // async moveRight() {
  //   const screen = this.scenes?.find(s => s.sceneName === "Screen")
  //   this.obs.call("...")
  // }

  async refreshBrowserSource(inputName: Source) {
    return this.obs.call("PressInputPropertiesButton", {
      inputName,
      propertyName: "refreshnocache",
    })
  }

  async refreshSrtSource() {
    type SceneItem = {
      inputKind: string
      sceneItemEnabled: true
      sceneItemId: number
      sceneItemIndex: number
      sceneItemLocked: boolean
      sourceName: string
      sourceType: string
    }

    type GetSceneItemList = { sceneItems: SceneItem[] }
    const sceneName = "Mobile"

    const sceneItems = (await this.obs.call("GetSceneItemList", {
      sceneName,
    })) as unknown as GetSceneItemList
    const sceneItem = sceneItems.sceneItems.find(
      (i) => i.sourceName === "SRT Ingest (Direct)"
    )

    if (sceneItem) {
      const sceneItemId = sceneItem.sceneItemId

      await this.obs.call("SetSceneItemEnabled", {
        sceneName,
        sceneItemId,
        sceneItemEnabled: false,
      })

      await delay(1000)

      await this.obs.call("SetSceneItemEnabled", {
        sceneName,
        sceneItemId,
        sceneItemEnabled: true,
      })
    }
  }

  async startTimer() {
    this.stopTimer()

    this.timerHandler = setInterval(() => {
      if (this.currentScene === "Screen") {
        this.setScene("Behind Screen")
        setTimeout(() => {
          if (this.currentScene === "Behind Screen") {
            this.setScene("Screen")
          }
        }, 1000 * 15) // for 15 seconds
      }
    }, 1000 * 60 * 6) // every 6 minutes
  }

  async stopTimer() {
    if (this.timerHandler) clearInterval(this.timerHandler)
  }

  async setScene(sceneName: Scene) {
    const hasGuest = !!this.streamController.guest

    let scene = sceneName
    if (scene.startsWith("Camera") && hasGuest) {
      scene = "Camera (w/ Guest)"
    } else if (scene.startsWith("Screen") && hasGuest) {
      scene = "Screen (w/ Guest)"
    }

    this.currentScene = scene
    this.server.emit("sceneChange", scene)

    return this.obs.call("SetCurrentProgramScene", {
      sceneName: scene,
    })
  }

  async transition(to: Scene) {
    this.wsController.emit("transitioning", true)
    await this.stopTimer()

    await delay(800)

    switch (to) {
      case "Camera":
      case "Camera (w/ Guest)":
        await this.setScene(to)
        break

      case "Screen":
      // await this.startTimer()
      case "Screen (w/ Guest)":
        // fadeIn()
        await this.setScene(to)
        break

      default:
        await this.setScene(to)
    }

    await delay(1000)
    this.wsController.emit("transitioning", false)
  }
}
