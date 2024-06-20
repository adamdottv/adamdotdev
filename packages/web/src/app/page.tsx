import { BrandMark } from "@/components/elements";
import Notifications from "@/components/notifications";
import Image, { getImageProps } from "next/image";
import { Resource } from "sst";
import React from "react";
import AdamAvatar from "../../public/media/adam.jpg";
import StatMuse from "../../public/media/www.statmuse.com_400w.png";
import { BackgroundMusic } from "@/components/background-music";
import { shuffle } from "@/lib/utils";
import { songs } from "@/lib/stream";
import StatMuseBackground from "@/components/statmuse-background";
import ProAWSBackground from "@/components/proaws-background";
import TomorrowBackground from "@/components/tomorrow-background";
import TerminalBackground from "@/components/terminal-background";

export default async function LandingPage() {
  const playlist = shuffle(songs.map((s) => s.replace(".wav", ".mp3")));

  return (
    <main className="relative h-screen overflow-y-hidden">
      <div className="no-scrollbar grid h-screen snap-x snap-mandatory grid-flow-col overflow-y-hidden">
        <div className="relative w-screen snap-center">
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="absolute left-1/2 top-1/2 -z-20 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              muted
              loop
            >
              <source src="media/office-b-roll-720p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="relative w-screen snap-center">
          <StatMuseBackground />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative w-screen snap-center">
          <ProAWSBackground />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative w-screen snap-center">
          <TomorrowBackground />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative w-screen snap-center">
          <TerminalBackground />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10 bg-black/75 text-white text-opacity-[15%]">
          <svg
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 -left-40 min-h-full min-w-full scale-150 sm:-left-20 sm:scale-125 xl:-top-20 xl:left-20 xl:scale-150"
          >
            <path d="M300 0V1080" stroke="currentColor" />
            <path d="M340 0V1080" stroke="currentColor" />
            <path d="M100 0V1080" stroke="currentColor" />
            <path d="M1820 0V1080" stroke="currentColor" />
            <path d="M1620 0V1080" stroke="currentColor" />
            <path d="M1588 0V1080" stroke="currentColor" />
            <path d="M1920 300L-4.76837e-06 300" stroke="currentColor" />
            <path d="M1920 780L-4.76837e-06 780" stroke="currentColor" />
            <path d="M1920 980L-4.76837e-06 980" stroke="currentColor" />
            <path d="M1920 100L-4.76837e-06 99.9999" stroke="currentColor" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-5">
          <Image
            src={AdamAvatar}
            alt="Adam's face"
            className="w-32 rounded-lg"
          />
          <div className="flex h-8 items-center justify-center gap-5">
            <BrandMark className="w-32" />
            <h1 className="mt-1 font-bebas text-4xl">adamdotdev</h1>
            <BrandMark className="invisible w-32" />
          </div>
          <p className="pointer-events-auto max-w-lg text-pretty text-xl">
            Adam is an AWS Hero and co-founder of{" "}
            <a
              href="https://www.statmuse.com"
              target="_blank"
              className="text-statmuse"
            >
              statmuse.com
            </a>
            . He teaches AWS at{" "}
            <a
              className="text-proaws"
              href="https://proaws.dev"
              target="_blank"
            >
              proaws.dev
            </a>
            , talks to Dax on{" "}
            <a
              className="text-tomorrow"
              href="https://tomorrow.fm"
              target="_blank"
            >
              tomorrow.fm
            </a>{" "}
            and sells coffee from{" "}
            <a
              className="text-terminal"
              href="https://terminal.shop"
              target="_blank"
            >
              terminal.shop
            </a>
            .
          </p>
        </div>
      </div>
      <div className="pointer-events-none z-50 mt-4 flex items-center justify-center sm:absolute sm:right-10 sm:top-10">
        <Notifications
          endpoint={Resource.Realtime.endpoint}
          authorizer={Resource.Realtime.authorizer}
          topic={`${Resource.App.name}/${Resource.App.stage}/notifs`}
        />
      </div>
      <div className="fixed inset-x-0 bottom-0 h-20 bg-mauve-1">
        <div className="h-full px-4 sm:px-8">
          <BackgroundMusic playlist={playlist} />
        </div>
      </div>
    </main>
  );
}
