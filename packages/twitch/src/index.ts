import { ChatClient } from "@twurple/chat";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { Resource } from "sst";
import { bus } from "sst/aws/bus";
import { Twitch } from "@adamdotdev/core/twitch/index";
import { ETwitterStreamEvent, TwitterApi } from "twitter-api-v2";

class TwitchController {
  listener: EventSubWsListener | undefined;
  chatClient: ChatClient | undefined;
  twitterClient: TwitterApi;

  constructor() {
    this.twitterClient = new TwitterApi(Resource.TwitterBearerToken.value);

    this.setup();
  }

  async setup() {
    if (!Resource.TwitchClientId.value || !Resource.TwitterBearerToken.value) {
      console.warn(
        "You haven't setup your Twitch and Twitter environment variables!",
      );
      return;
    }

    await this.setupEventSub();
    await this.setupChatBot();
    await this.setupTwitter();

    console.log("Twitch and Twitter setup complete!");
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
      bus.publish(Resource.Bus, Twitch.Events.ChatMessage, {
        channel,
        user,
        message,
        msg,
      });
    });
  }

  async setupTwitter() {
    console.log(await this.twitterClient.v2.streamRules());
    await this.twitterClient.v2.updateStreamRules({
      add: [
        {
          value: "from:adamdotdev OR from:terminaldotshop OR from:tomorrow_fm",
          tag: "from me and the gang",
        },
        {
          value: "to:adamdotdev OR to:terminaldotshop OR to:tomorrow_fm",
          tag: "to me and the gang",
        },
      ],
    });

    const stream = await this.twitterClient.v2.sampleStream();
    stream.on(ETwitterStreamEvent.ConnectionError, (err) =>
      console.log("Connection error!", err),
    );
    stream.on(ETwitterStreamEvent.ConnectionClosed, () =>
      console.log("Connection has been closed."),
    );
    stream.on(ETwitterStreamEvent.Data, (eventData) =>
      // eventData.data.id
      console.log("Twitter has sent something:", eventData),
    );
    stream.on(ETwitterStreamEvent.DataKeepAlive, () =>
      console.log("Twitter has a keep-alive packet."),
    );
    stream.autoReconnect = true;
    stream.autoReconnectRetries = Infinity;
  }
}

export const controller = new TwitchController();
