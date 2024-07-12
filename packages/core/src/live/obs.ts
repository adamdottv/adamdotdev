import { z } from "zod";
import { event } from "../event";
import { fn } from "../util/fn";
import { Resource } from "sst";
import { Scene, SceneName } from "../schema";
import { bus } from "sst/aws/bus";

export module OBS {
  export const Events = {
    Connected: event("obs.connected", z.literal("ok")),
    Disconnected: event("obs.disconnected", z.literal("ok")),
    StreamStarted: event("obs.stream.started", z.literal("ok")),
    StreamStopped: event("obs.stream.stopped", z.literal("ok")),
    SceneChanged: event(
      "obs.scene.changed",
      z.object({
        from: Scene.shape.name,
        to: Scene.shape.name,
      }),
    ),
  };
  export const AllEvents = Object.values(Events);

  type OkResponse = "ok";

  export const streaming = async () => {
    type StreamingResponse = { streaming: boolean };
    const response = await api<StreamingResponse>("get", "/stream");
    if (typeof response === "string") return response;
    return response;
  };

  export const startStream = async () => {
    const response = await api<OkResponse>("post", "/stream");
    if (typeof response === "string") return response;
    return response;
  };

  export const stopStream = async () => {
    const response = await api<OkResponse>("delete", "/stream");
    if (typeof response === "string") return response;
    return response;
  };

  export const zoomed = async () => {
    type ZoomedResponse = { zoomed: boolean };
    const response = await api<ZoomedResponse>("get", "/zoom");
    if (typeof response === "string") return response;
    return response;
  };

  export const zoomIn = async () => {
    const response = await api<OkResponse>("post", "/zoom");
    if (typeof response === "string") return response;
    return response;
  };

  export const zoomOut = async () => {
    const response = await api<OkResponse>("delete", "/zoom");
    if (typeof response === "string") return response;
    return response;
  };

  export const startTimer = async () => {
    const response = await api<OkResponse>("post", "/timer");
    if (typeof response === "string") return response;
    return response;
  };

  export const stopTimer = async () => {
    const response = await api<OkResponse>("delete", "/timer");
    if (typeof response === "string") return response;
    return response;
  };

  export const setScene = fn(Scene.shape.name, async (name) => {
    type SetSceneResponse = { previous: SceneName; current: SceneName };
    const response = await api<SetSceneResponse>("put", "/scene", { name });
    if (typeof response === "string") return response;
    return response;
  });

  export const getCurrentScene = async () => {
    type GetSceneResponse = { name: SceneName };
    const response = await api<GetSceneResponse>("get", "/scene");
    if (typeof response === "string") return response;
    return response;
  };

  // The OBS proxy service calls these as needed
  export module Proxy {
    export const onConnected = async () => {
      await bus.publish(Resource.Bus, OBS.Events.Connected, "ok");
    };

    export const onDisconnected = async () => {
      await bus.publish(Resource.Bus, OBS.Events.Disconnected, "ok");
    };

    export const onStreamStarted = async () => {
      await bus.publish(Resource.Bus, OBS.Events.StreamStarted, "ok");
    };

    export const onStreamStopped = async () => {
      await bus.publish(Resource.Bus, OBS.Events.StreamStopped, "ok");
    };

    export const onSceneChanged = fn(
      z.object({ from: Scene.shape.name, to: Scene.shape.name }),
      ({ from, to }) =>
        bus.publish(Resource.Bus, OBS.Events.SceneChanged, { from, to }),
    );
  }

  async function api<T>(method: string, path: string, body?: any) {
    const ROOT = process.env.SST_LIVE
      ? "http://localhost:80"
      : Resource.Service.url;
    return fetch(ROOT + "/api/obs" + path, {
      method,
      headers: {
        authorization: `Bearer ${Resource.ApiKey.value}`,
        "content-type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(async (r) => {
        const text = await r.text();
        if (!r.ok || text === "ok") return text;
        const result = JSON.parse(text) as T;
        return { Result: result };
      })
      .catch((error) => {
        console.log({ error });
        return String(error);
      });
  }
}
