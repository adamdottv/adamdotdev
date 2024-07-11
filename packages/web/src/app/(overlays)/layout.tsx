"use client";

import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import clsx from "clsx";
import "@/styles/tailwind.css";
import { OverlaysContext, OverlaysContextType } from "./overlays/context";
import { useEvent, useEvents } from "@/hooks/use-event";
import React, { Suspense } from "react";
import { client } from "@/lib/api/client";
import { handleResponse } from "@/lib/api";
import { getSpotifyInfo } from "./overlays/actions";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const holbeard = localFont({
  src: "../../../public/fonts/holbeard-credit.woff2",
  display: "swap",
  variable: "--font-holbeard",
});

const dsDigital = localFont({
  src: "../../../public/fonts/DSDIGI.woff",
  display: "swap",
  variable: "--font-digital",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dev = process.env.NEXT_PUBLIC_DEV === "true";
  const [context, setContext] = React.useState<OverlaysContextType>({ dev });

  React.useEffect(() => {
    client()
      .public.livestream.$get()
      .then(handleResponse)
      .then((stream) => {
        if (typeof stream === "string") return;
        setContext((ctx) => ({ ...ctx, stream }));
      });

    client()
      .public.livestream.schedule.$get()
      .then(handleResponse)
      .then((schedule) => {
        if (typeof schedule === "string") return;
        const [next] = schedule;
        setContext((ctx) => ({
          ...ctx,
          schedule: { title: next.title, scheduled: next.start },
        }));
      });

    getSpotifyInfo().then((spotify) => {
      if (typeof spotify === "string") return;
      setContext((ctx) => ({ ...ctx, spotify }));
    });
  }, []);

  useEvent("live.twitch.chat.message", (msg) => {
    const isAdmin = msg.properties.isMod || msg.properties.isBroadcaster;
    if (isAdmin && msg.properties.message.startsWith("!topic")) {
      const topic = msg.properties.message.split("!topic")[1].trim();
      setContext((ctx) => ({ ...ctx, topic }));
    }

    if (msg.properties.isHighlight) {
      const highlight = `${msg.properties.user}: ${msg.properties.message}`;
      setContext((ctx) => ({ ...ctx, highlight }));
      setTimeout(
        () => setContext((ctx) => ({ ...ctx, highlight: "" })),
        10 * 1000,
      );
    }
  });

  useEvent("live.stream.updated", (msg) => {
    setContext((ctx) => ({ ...ctx, stream: msg.properties }));
  });

  useEvents(
    [
      "live.spotify.track.changed",
      "live.spotify.playback.started",
      "live.spotify.playback.paused",
    ],
    (msg) => {
      setContext((ctx) => ({ ...ctx, spotify: msg.properties }));
    },
  );

  return (
    <html
      lang="en"
      className={clsx(
        "size-fit origin-top-left scale-[200%] transform overflow-hidden antialiased",
        bebas.variable,
        jakarta.variable,
        holbeard.variable,
        GeistMono.variable,
        dsDigital.variable,
      )}
    >
      <head></head>
      <body
        className={clsx({
          "relative h-[1080px] w-[1920px]": true,
          "border border-red-500": dev,
        })}
      >
        <OverlaysContext.Provider value={context}>
          <Suspense fallback={null}>{children}</Suspense>
        </OverlaysContext.Provider>
      </body>
    </html>
  );
}
