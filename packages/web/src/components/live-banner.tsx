"use client";

import clsx from "clsx";
import React from "react";
import { handleResponse } from "@/lib/api";
import { client } from "@/lib/api/client";
import { useEvent } from "@/hooks/use-event";

export interface LiveBannerProps extends React.ComponentProps<"a"> {
  live: boolean;
}

export const LiveBanner: React.FC<LiveBannerProps> = ({
  live,
  className,
  ...props
}) => {
  const [isLive, setIsLive] = React.useState(live);
  React.useEffect(() => {
    client()
      .public.livestream.$get()
      .then(handleResponse)
      .then((res) => {
        if (typeof res === "string") return;
        setIsLive(res.live);
      });
  }, []);

  useEvent("live.stream.updated", (evt) => {
    setIsLive(evt.properties.live);
  });

  if (!isLive) return null;

  return (
    <a
      href="https://adam.tv"
      target="_blank"
      className={clsx({
        "fixed inset-x-0 top-0 flex h-10 items-center justify-center gap-2 overflow-clip bg-recording":
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
