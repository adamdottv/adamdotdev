import { z } from "zod";
import { Resource } from "sst";
import { Twitch } from ".";
import { fn } from "../util/fn";

export module Rewards {
  export const Info = z.object({
    id: z.string(),
  });

  export async function list() {
    const twitch = await Twitch.Client.api();
    return twitch.channelPoints.getCustomRewards(Twitch.UserId, true);
  }

  export const enable = fn(Info.shape.id, async (id) => {
    const twitch = await Twitch.Client.api();
    try {
      await twitch.channelPoints.updateCustomReward(
        Resource.TwitchUserId.value,
        id,
        {
          isEnabled: true,
          isPaused: false,
        },
      );
    } catch (error) {
      console.error("failed to enable reward " + id);
      console.error(error);
    }
  });

  export async function enableAll() {
    const rewards = await list().then((rewards) => rewards.map((r) => r.id));
    await Promise.all(rewards.map(enable));
  }

  export const disable = fn(Info.shape.id, async (id) => {
    const twitch = await Twitch.Client.api();
    try {
      await twitch.channelPoints.updateCustomReward(
        Resource.TwitchUserId.value,
        id,
        {
          isEnabled: true,
          isPaused: false,
        },
      );
    } catch (error) {
      console.error("failed to enable reward " + id);
      console.error(error);
    }
  });

  export async function disableAll() {
    const rewards = await list().then((rewards) => rewards.map((r) => r.id));
    await Promise.all(rewards.map(disable));
  }
}
