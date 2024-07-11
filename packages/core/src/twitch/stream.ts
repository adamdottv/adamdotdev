import { z } from "zod";
import { Twitch } from ".";
import { HelixStream } from "@twurple/api";
import { StreamInfo } from "../schema";
import { randomItem } from "../util";

export module Stream {
  export async function get() {
    const twitch = await Twitch.Client.api();
    return twitch.streams.getStreamByUserId(Twitch.UserId).then(serialize);
  }

  export async function getSchedule() {
    const twitch = await Twitch.Client.api();
    const schedule = await twitch.schedule.getSchedule(Twitch.UserId);
    const segments = schedule.data.segments.map(
      ({ title, startDate, endDate }) => ({
        title,
        start: startDate,
        end: endDate,
      }),
    );
    return segments;
  }

  export async function getMetadata() {
    const twitch = await Twitch.Client.api();
    return twitch.channels.getChannelInfoById(Twitch.UserId);
  }

  export async function raid() {
    const twitch = await Twitch.Client.api();
    const response =
      (await twitch.streams.getStreamsByUserNames([
        "thdxr",
        "theprimeagen",
        "teej_dv",
        "StudyTme",
        "acorn1010",
        "bashbunni",
        "thealtf4stream",
        "ottomated",
        "cmgriffing",
        "theo",
        "d0nutptr",
        "roxcodes",
        "melkey",
        "dmmulroy",
      ])) || [];
    const streams = response.map((r) => r.userId);
    if (!streams) return;

    const randomStream = randomItem(streams);
    await twitch.raids.startRaid(Twitch.UserId, randomStream);
  }

  function serialize(input: HelixStream | null): z.infer<typeof StreamInfo> {
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
