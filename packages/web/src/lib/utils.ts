import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomItem = <T>(array: Array<T>) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export const shuffle = <T>(a: Array<T>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const songs = [
  "theme-synth.wav",
  "theme-piano.wav",
  "theme-lofi.wav",
  "theme-classical.wav",
  "theme-edm.wav",
  "theme-showtime.wav",
  "theme-ballad.wav",
  "theme-run-dmc.wav",
  "theme-sonic.wav",
  "theme-rtj.wav",
  "theme-mellow.wav",
  "theme-ozarks.wav",
  // "theme-horror.wav",
];

export const playlist = shuffle(songs);

export const formatDate = (date?: Date | string) => {
  if (!date) return "";

  const value = typeof date === "string" ? new Date(date) : date;
  return value.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
  });
};
