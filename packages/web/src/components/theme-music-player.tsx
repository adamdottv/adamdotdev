"use client";

import React from "react";
import { PlayIcon, PauseIcon, TrackNextIcon } from "@radix-ui/react-icons";
import { AudioSpectrum } from "./audio-spectrum";
import { BrandDetail } from "./elements";

export interface ThemeMusicPlayerProps extends React.ComponentProps<"audio"> {
  playlist: string[];
}

export const ThemeMusicPlayer: React.FC<ThemeMusicPlayerProps> = ({
  playlist,
  ...props
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [song, setSong] = React.useState<string>(playlist[0]);
  const [muted, setMuted] = React.useState<boolean>(true);

  const handleSongEnded = () => {
    next();
  };

  const mute = () => {
    if (muted) audioRef.current?.play();
    else audioRef.current?.pause();
    setMuted((m) => !m);
  };

  const next = () => {
    const currentIndex = playlist.indexOf(song);
    const nextIndex =
      currentIndex + 1 > playlist.length - 1 ? 0 : currentIndex + 1;
    setSong(playlist[nextIndex]);

    setTimeout(() => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = 0;
      if (!muted) audioRef.current.play();
    }, 200);
  };

  return (
    <div className="absolute inset-0 overflow-hidden px-4 sm:px-8">
      <div className="relative flex h-full items-center gap-4">
        <audio
          ref={audioRef}
          src={`/media/${song}`}
          onEnded={handleSongEnded}
          {...props}
        />
        <div className="-mx-2 flex items-center">
          <button className="p-2 text-mint" onMouseDown={mute}>
            {muted ? (
              <PlayIcon className="h-5 w-5" />
            ) : (
              <PauseIcon className="h-5 w-5" />
            )}
          </button>
          <button className="p-2 text-mint" onMouseDown={next}>
            <TrackNextIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="whitespace-nowrap">{song}</p>
        <div className="flex-grow" />
        {!muted ? (
          <>
            <AudioSpectrum
              className="relative hidden self-end sm:block"
              audioRef={audioRef}
              meterCount={8}
              width={160}
              height={60}
            />
            <AudioSpectrum
              className="relative self-end sm:hidden"
              audioRef={audioRef}
              meterCount={4}
              width={80}
              height={60}
            />
          </>
        ) : (
          <BrandDetail className="relative w-[80px] origin-right scale-125 sm:w-[160px] sm:scale-100 " />
        )}
      </div>
    </div>
  );
};

export default ThemeMusicPlayer;
