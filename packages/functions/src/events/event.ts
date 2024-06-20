import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";

import {
  IoTDataPlaneClient,
  PublishCommand,
} from "@aws-sdk/client-iot-data-plane";
import { Resource } from "sst";
const realtimeClient = new IoTDataPlaneClient();

export const handler = bus.subscriber([...Twitch.AllEvents], async (event) => {
  console.log("event", event);

  await realtimeClient.send(
    new PublishCommand({
      payload: Buffer.from(JSON.stringify(event)),
      topic: `${Resource.App.name}/${Resource.App.stage}/notifs`,
    }),
  );

  switch (event.type) {
    case "twitch.channel.online":
      await Twitch.Rewards.enableAll();
      break;
    case "twitch.channel.offline":
      await Twitch.Rewards.disableAll();
      break;

    default:
      break;
  }
});

export type TwitchEvent = Parameters<
  Parameters<
    typeof bus.subscriber<
      | typeof Twitch.Events.ChannelOnline
      | typeof Twitch.Events.ChannelOffline
      | typeof Twitch.Events.ChannelFollow
      | typeof Twitch.Events.ChannelSubscribe
      | typeof Twitch.Events.ChannelUpdate
      | typeof Twitch.Events.ChannelCheer
      | typeof Twitch.Events.ChannelSubscriptionGift
      | typeof Twitch.Events.ChannelRaid
      | typeof Twitch.Events.ChatMessage
      | typeof Twitch.Events.RewardRedeem
    >
  >[1]
>[0];
