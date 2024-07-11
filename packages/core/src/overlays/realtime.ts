import {
  IoTDataPlaneClient,
  PublishCommand,
} from "@aws-sdk/client-iot-data-plane";
import { Resource } from "sst";
import { z } from "zod";
import { fn } from "../util/fn";
import { Scene, SpotifyInfo, StreamInfo } from "../schema";

const realtimeClient = new IoTDataPlaneClient();

export module Realtime {
  export const Topic = `${Resource.App.name}/${Resource.App.stage}/live`;

  export const Events = {
    TransitionStarted: z.object({
      type: z.literal("live.transition.started"),
      properties: z.object({
        to: Scene.shape.name,
      }),
    }),
    TransitionEnded: z.object({
      type: z.literal("live.transition.ended"),
      properties: z.object({
        to: Scene.shape.name,
      }),
    }),
    FadeAudioIn: z.object({
      type: z.literal("live.fade.audio.in"),
      properties: z.object({}),
    }),
    FadeAudioOut: z.object({
      type: z.literal("live.fade.audio.out"),
      properties: z.object({}),
    }),
    TwitchChatMessage: z.object({
      type: z.literal("live.twitch.chat.message"),
      properties: z.object({
        user: z.string(),
        message: z.string(),
        isFirst: z.boolean(),
        isReturningChatter: z.boolean(),
        isHighlight: z.boolean(),
        isBroadcaster: z.boolean(),
        isSubscriber: z.boolean(),
        isMod: z.boolean(),
        isFounder: z.boolean(),
        isVip: z.boolean(),
        isArtist: z.boolean(),
      }),
    }),
    StreamUpdated: z.object({
      type: z.literal("live.stream.updated"),
      properties: StreamInfo,
    }),
    SpotifyPlaybackStarted: z.object({
      type: z.literal("live.spotify.playback.started"),
      properties: SpotifyInfo,
    }),
    SpotifyPlaybackPaused: z.object({
      type: z.literal("live.spotify.playback.paused"),
      properties: SpotifyInfo,
    }),
    SpotifyTrackChanged: z.object({
      type: z.literal("live.spotify.track.changed"),
      properties: SpotifyInfo,
    }),
  };
  export const AllEvents = Object.values(Events);

  export const LiveEvent = z.discriminatedUnion("type", [
    Events.TransitionStarted,
    Events.TransitionEnded,
    Events.FadeAudioIn,
    Events.FadeAudioOut,
    Events.TwitchChatMessage,
    Events.StreamUpdated,
    Events.SpotifyPlaybackStarted,
    Events.SpotifyPlaybackPaused,
    Events.SpotifyTrackChanged,
  ]);
  export type LiveEvent = Parameters<typeof push>[0];

  export const push = fn(LiveEvent, async (event) => {
    await realtimeClient.send(
      new PublishCommand({
        payload: Buffer.from(JSON.stringify(event)),
        topic: Realtime.Topic,
      }),
    );
  });
}
