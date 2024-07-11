import { z } from "zod";

export const Scene = z.object({
  name: z.enum([
    "Init",
    "Intro",
    "Camera",
    "Screen",
    "Behind Screen",
    "Mobile",
    "Mobile (Home)",
    "Break",
    "Outro",
  ]),
});
export type SceneName = z.infer<typeof Scene.shape.name>;

export const StreamInfo = z.object({
  live: z.boolean(),
  title: z.string().optional(),
  category: z.string().optional(),
  viewers: z.number().optional(),
  started: z.string().optional(),
  thumbnail: z.string().optional(),
});
export type StreamInfo = z.infer<typeof StreamInfo>;

export const StreamSchedule = z.object({
  title: z.string().optional(),
  scheduled: z.string().optional(),
});
export type StreamSchedule = z.infer<typeof StreamSchedule>;

export const SpotifyInfo = z.object({
  playing: z.boolean().optional(),
  shuffle: z.boolean().optional(),
  repeat: z.string().optional(),
  title: z.string().optional(),
  artist: z.string().optional(),
  artwork: z.string().optional(),
  progress: z.number().int().optional(),
  volume: z.number().int().optional(),
});
export type SpotifyInfo = z.infer<typeof SpotifyInfo>;
