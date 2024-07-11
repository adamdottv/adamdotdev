"use client";

import { playlist } from "@/lib/utils";
import React from "react";

export interface ThemeMusicProps extends React.ComponentProps<"audio"> {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const ThemeMusic: React.FC<ThemeMusicProps> = ({
  audioRef,
  ...props
}) => {
  const [song, setSong] = React.useState<string>();
  React.useEffect(() => setSong(playlist[0]), []);

  const handleSongEnded = React.useCallback(() => {
    if (!song) return;

    const currentIndex = playlist.indexOf(song);
    const nextIndex =
      currentIndex + 1 > playlist.length - 1 ? 0 : currentIndex + 1;
    setSong(playlist[nextIndex]);

    setTimeout(async () => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    }, 100);
  }, [song]);

  if (!song) return null;

  return (
    <audio
      ref={audioRef}
      src={`/media/${song}`}
      onEnded={handleSongEnded}
      {...props}
    />
  );
};

export default ThemeMusic;
