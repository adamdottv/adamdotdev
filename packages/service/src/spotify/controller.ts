import { Resource } from "sst";
import { Spotify } from "@adamdotdev/core/spotify/index";

export class SpotifyController {
  private timer: NodeJS.Timeout | undefined = undefined;

  constructor() {
    this.setup();
  }

  ok() {
    return true;
  }

  async setup() {
    if (!Resource.SpotifyClientId.value) {
      console.warn("You haven't setup your Spotify environment variables!");
      return;
    }

    this.sync();
    console.log("Spotify setup complete!");
  }

  PLAYING_TIMEOUT = 1000 * 2;
  ERROR_TIMEOUT = 1000 * 5;
  IDLE_TIMEOUT = 1000 * 10 * 1;

  async sync() {
    if (this.timer) clearTimeout(this.timer);

    try {
      const current = await Spotify.sync();
      this.timer = setTimeout(
        this.sync.bind(this),
        current.playing ? this.PLAYING_TIMEOUT : this.IDLE_TIMEOUT,
      );
    } catch (error) {
      this.timer = setTimeout(this.sync.bind(this), this.ERROR_TIMEOUT);
    }
  }
}
