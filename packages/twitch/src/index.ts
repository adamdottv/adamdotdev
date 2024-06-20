import { ChatClient } from "@twurple/chat";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { Resource } from "sst";
import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";

class TwitchController {
  listener: EventSubWsListener | undefined;
  chatClient: ChatClient | undefined;

  constructor() {
    this.setup();
  }

  async setup() {
    if (!Resource.TwitchClientId.value) {
      console.warn("You haven't setup your Twitch environment variables!");
      return;
    }

    await this.setupEventSub();
    await this.setupChatBot();

    console.log("Twitch setup complete!");
  }

  async setupEventSub() {
    this.listener = await Twitch.Client.listener();

    this.listener.onChannelFollow(Twitch.UserId, Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelFollow, event),
    );
    this.listener.onChannelSubscription(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelSubscribe, event),
    );
    this.listener.onChannelUpdate(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelUpdate, event),
    );
    this.listener.onChannelCheer(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelCheer, event),
    );
    this.listener.onChannelSubscriptionGift(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelSubscriptionGift, event),
    );
    this.listener.onChannelRaidTo(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelRaid, event),
    );
    this.listener.onStreamOnline(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelOnline, event),
    );
    this.listener.onStreamOffline(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.ChannelOffline, event),
    );
    this.listener.onChannelRedemptionAdd(Twitch.UserId, (event) =>
      bus.publish(Resource.Bus, Twitch.Events.RewardRedeem, event),
    );

    this.listener.start();
  }

  async setupChatBot() {
    this.chatClient = await Twitch.Client.chat();
    this.chatClient.connect();

    this.chatClient.onMessage(async (channel, user, message, msg) => {
      console.log("message", message);
      bus.publish(Resource.Bus, Twitch.Events.ChatMessage, {
        channel,
        user,
        message,
        msg,
      });
    });
  }
}

export const controller = new TwitchController();
