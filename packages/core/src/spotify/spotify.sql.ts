import { id, timestamps } from "../drizzle/types";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const spotifyTable = pgTable("spotify", {
  ...id,
  ...timestamps,
  playing: boolean("playing"),
  shuffle: boolean("shuffle"),
  repeat: text("repeat"),
  title: text("title"),
  artist: text("artist"),
  artwork: text("artwork"),
  progress: integer("progress"),
  volume: integer("volume"),
});
