/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { ITrack, IWindowObj, Player } from "./interface";

const Spotify = () => {
  const [token, setToken] = useState(
    window.localStorage.getItem("spotify-token")
  );
  const [player, setPlayer] = useState<Player>();
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState<ITrack>();
  useEffect(() => {
    if (token) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);
      const thisWindow: IWindowObj = window;
      thisWindow.onSpotifyWebPlaybackSDKReady = () => {
        if (thisWindow?.Spotify?.Player) {
          const playerObj = new thisWindow.Spotify.Player({
            name: "Web Playback SDK",
            getOAuthToken: (cb) => {
              cb(token);
            },
            volume: 0.5,
          });

          setPlayer(playerObj);

          playerObj.addListener("ready", ({ device_id }) => {
            console.log("Ready with Device ID", device_id);
          });

          playerObj.addListener("not_ready", ({ device_id }) => {
            console.log("Device ID has gone offline", device_id);
          });

          playerObj.addListener("player_state_changed", (state) => {
            if (!state) {
              return;
            }

            setTrack(state?.track_window?.current_track);
            setPaused(state.paused);

            playerObj
              .getCurrentState()
              .then((newState) =>
                !newState ? setActive(false) : setActive(true)
              );
          });

          playerObj.connect();
        }
      };
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      const url =
        "https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback";
      // const tab = window.open(url, "_blank");
      // const interval = setInterval(() => {
      //   try {
      //     if (tab?.location.hostname === window.location.hostname) {
      //       tab?.close();
      //       clearInterval(interval);
      //       const hashParams: Record<string, string> = {};
      //       let e: RegExp | RegExpExecArray | null = /([^&;=]+)=?([^&;]*)/g;
      //       const r = /([^&;=]+)=?([^&;]*)/g,
      //         q = tab.location.hash.substring(1);
      //       while ((e = r.exec(q))) {
      //         hashParams[e[1]] = decodeURIComponent(e[2]);
      //       }
      //       if (hashParams.access_token) {
      //         setToken(hashParams.access_token);
      //         window.localStorage.setItem(
      //           "spotify-token",
      //           hashParams.access_token
      //         );
      //       }
      //       console.log(hashParams.access_token, tab.location.hash);
      //     }
      //   } catch (er) {
      //     //
      //   }
      // }, 100);
    }
  }, []);
  return (
    <>
      <iframe src="https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback" />
    </>
  );
};

export default Spotify;
