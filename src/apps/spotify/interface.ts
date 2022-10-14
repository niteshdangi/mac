export interface ITrack {
  name: string;
  album: {
    images: { url: string }[];
  };
  artists: { name: string }[];
}
export interface Player {
  addListener: (
    name: string,
    cb: (e: {
      device_id?: string;
      track_window?: { current_track: ITrack };
      paused: boolean;
    }) => void
  ) => void;
  connect: () => void;
  getCurrentState: () => Promise<unknown>;
  previousTrack: () => void;
  togglePlay: () => void;
  nextTrack: () => void;
}

export interface IWindowObj extends Window {
  onSpotifyWebPlaybackSDKReady?: () => void;
  Spotify?: {
    Player?: {
      new (options: {
        name: string;
        getOAuthToken: (cb: (token: string) => void) => void;
        volume: number;
      }): Player;
    };
  };
}
