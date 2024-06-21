import { z } from "zod";
import { Twitch } from ".";
import { HelixStream } from "@twurple/api";

export module Stream {
  export const Info = z.object({
    live: z.boolean(),
    title: z.string().optional(),
    category: z.string().optional(),
    viewers: z.number().optional(),
    started: z.string().optional(),
    thumbnail: z.string().optional(),
  });

  export async function get() {
    const twitch = await Twitch.Client.api();
    return twitch.streams.getStreamByUserId(Twitch.UserId).then(serialize);
  }

  export async function getSchedule() {
    const twitch = await Twitch.Client.api();
    return twitch.schedule.getSchedule(Twitch.UserId);
  }

  export async function getMetadata() {
    const twitch = await Twitch.Client.api();
    return twitch.channels.getChannelInfoById(Twitch.UserId);
  }

  function serialize(input: HelixStream | null): z.infer<typeof Info> {
    return {
      live: !!input,
      title: input?.title,
      category: input?.gameName,
      viewers: input?.viewers,
      started: input?.startDate?.toISOString(),
      thumbnail: input?.getThumbnailUrl(1280, 720),
    };
  }
}
