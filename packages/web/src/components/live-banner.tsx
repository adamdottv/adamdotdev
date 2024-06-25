"use client";

import { useTopic } from "@/hooks/use-topic";
import clsx from "clsx";
import React from "react";
import type { TwitchEvent } from "@adamdotdev/functions/events/event";
import { client, handleResponse } from "@/lib/api";

export interface LiveBannerProps extends React.ComponentProps<"a"> {
  topic: string;
  endpoint: string;
  authorizer: string;
  apiUrl: string;
  live: boolean;
}

export const LiveBanner: React.FC<LiveBannerProps> = ({
  live,
  topic,
  endpoint,
  authorizer,
  apiUrl,
  className,
  ...props
}) => {
  const [isLive, setIsLive] = React.useState(live);
  React.useEffect(() => {
    client(apiUrl)
      .public.livestream.$get()
      .then(handleResponse)
      .then((res) => {
        if (typeof res === "string") return;
        setIsLive(res.live);
      });
  }, []);

  useTopic<TwitchEvent>(
    "live-banner",
    { topic, endpoint, authorizer },
    (evt) => {
      if (evt.type === "twitch.channel.online") {
        setIsLive(true);
      } else if (evt.type === "twitch.channel.offline") {
        setIsLive(false);
      }
    },
  );

  if (!isLive) return null;

  return (
    <a
      href="https://adam.tv"
      target="_blank"
      className={clsx({
        "bg-recording fixed inset-x-0 top-0 flex h-10 items-center justify-center gap-2 overflow-clip":
          true,
        [className ?? ""]: !!className,
      })}
      {...props}
    >
      <div className="absolute left-2 flex h-8 w-8 items-center justify-center sm:left-6">
        <div className="absolute z-20 h-4 w-4 rounded-full bg-white" />
        <div className="absolute z-10 h-6 w-6 animate-ping rounded-full bg-white" />
      </div>
      <div className="mt-1 font-bebas text-2xl">LIVE NOW AT ADAM.TV</div>
    </a>
  );
};

export default LiveBanner;
