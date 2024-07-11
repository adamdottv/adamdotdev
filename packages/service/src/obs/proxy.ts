import { Resource } from "sst";
import OBSWebSocket from "obs-websocket-js";
import { delay } from "@adamdotdev/core/util/index";
import { OBS } from "@adamdotdev/core/overlays/obs";
import { SceneName } from "@adamdotdev/core/schema";

export class ObsProxy {
  obs = new OBSWebSocket();
  currentScene: SceneName | undefined;
  connected: boolean = false;
  streaming: boolean = false;
  recording: boolean = false;
  zoomed: boolean = false;
  zoomInFilter: string | undefined = undefined;
  zoomOutFilter: string | undefined = undefined;

  private timerHandler?: NodeJS.Timeout;

  constructor() {
    this.setup();
  }

  private async setup() {
    if (!Resource.ObsPassword.value) {
      console.error("You haven't set the ObsPassword secret!");
      return;
    }

    await this.initObsWebsocket();
    console.log("OBS proxy setup complete!");
  }

  private async initObsWebsocket() {
    try {
      console.log("connecting to OBS");
      await this.obs.connect(
        Resource.ObsWebsocket.url,
        Resource.ObsPassword.value,
        { rpcVersion: 1 },
      );
    } catch (error) {
      console.error(error);
      console.error("Error connecting to OBS");
      console.info("Retrying in 5 seconds");
      this.connected = false;
      await delay(1000 * 5);
      await this.initObsWebsocket();
      return;
    }

    console.log("Connected to OBS");
    await delay(1000 * 3);
    this.connected = true;
    await OBS.Proxy.onConnected();

    const response = await this.obs.call("GetCurrentProgramScene");
    this.currentScene = response.sceneName as SceneName;

    const {
      filters: [zoomInFilter, zoomOutFilter],
    } = await this.obs.call("GetSourceFilterList", {
      sourceName: "Screen",
    });

    this.zoomInFilter = zoomInFilter?.filterName as string;
    this.zoomOutFilter = zoomOutFilter?.filterName as string;

    this.obs.on("CurrentProgramSceneChanged", async (scene) => {
      await OBS.Proxy.onSceneChanged({
        from: this.currentScene as SceneName,
        to: scene.sceneName as SceneName,
      });
      this.currentScene = scene.sceneName as SceneName;
    });

    this.obs.on("ConnectionClosed", async (error) => {
      console.error("OBS connection closed: " + error);
      if (this.connected) {
        await OBS.Proxy.onDisconnected();
        this.connected = false;
        await this.initObsWebsocket();
      }
    });

    this.obs.on("ConnectionError", async (error) => {
      console.error("OBS connection error: " + error);
      if (this.connected) {
        await OBS.Proxy.onDisconnected();
        this.connected = false;
        await this.initObsWebsocket();
      }
    });

    this.obs.on("StreamStateChanged", async (status) => {
      this.streaming = status.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED";
      if (this.streaming) {
        await OBS.Proxy.onStreamStarted();
      } else {
        await OBS.Proxy.onStreamStopped();
      }
    });

    this.obs.on("RecordStateChanged", async (status) => {
      this.recording = status.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED";
    });

    await this.refreshBrowserSource("Shared");
    await this.refreshBrowserSource("Overlay");
  }

  private async refreshBrowserSource(inputName: string) {
    return this.obs.call("PressInputPropertiesButton", {
      inputName,
      propertyName: "refreshnocache",
    });
  }

  async startStream() {
    await this.refreshBrowserSource("Shared");
    await this.refreshBrowserSource("Overlay");

    if (this.streaming) return;
    return this.obs.call("StartStream");
  }

  async stopStream() {
    if (!this.streaming) return;
    return this.obs.call("StopStream");
  }

  async startRecording() {
    if (this.recording) return;
    return this.obs.call("StartRecord");
  }

  async stopRecording() {
    if (!this.recording) return;
    return this.obs.call("StopRecord");
  }

  async zoomIn() {
    await this.obs.call("SetSourceFilterEnabled", {
      sourceName: "Screen",
      filterName: this.zoomInFilter!,
      filterEnabled: true,
    });
    this.zoomed = true;
  }

  async zoomOut() {
    await this.obs.call("SetSourceFilterEnabled", {
      sourceName: "Screen",
      filterName: this.zoomOutFilter!,
      filterEnabled: true,
    });
    this.zoomed = false;
  }

  async setScene(sceneName: SceneName) {
    if (sceneName === this.currentScene) return;
    return this.obs.call("SetCurrentProgramScene", { sceneName });
  }

  async startTimer() {
    this.stopTimer();

    this.timerHandler = setInterval(
      () => {
        if (this.currentScene === "Screen") {
          this.setScene("Behind Screen");
          setTimeout(() => {
            if (this.currentScene === "Behind Screen") {
              this.setScene("Screen");
            }
          }, 1000 * 10); // for 10 seconds
        }
      },
      1000 * 60 * 10,
    ); // every 10 minutes
  }

  async stopTimer() {
    if (this.timerHandler) clearInterval(this.timerHandler);
  }
}
