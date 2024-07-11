import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { Notifications } from "@adamdotdev/core/notifications/index";
import { Realtime } from "@adamdotdev/core/overlays/realtime";

export const handler = bus.subscriber([...Twitch.AllEvents], async (event) => {
  console.log("event", event);

  // TODO: don't do this
  await Notifications.send(event);

  switch (event.type) {
    case "twitch.channel.online":
      await Twitch.Rewards.enableAll();
      break;
    case "twitch.channel.offline":
      await Twitch.Rewards.disableAll();
      break;
    case "twitch.chat.message":
      await Realtime.push({
        type: "live.twitch.chat.message",
        properties: {
          message: event.properties.message,
          user: event.properties.user,
          ...event.properties.msg,
          ...event.properties.msg.userInfo,
        },
      });
      break;
    case "twitch.channel.update":
      await Realtime.push({
        type: "live.stream.updated",
        properties: await Twitch.Stream.get(),
      });
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
