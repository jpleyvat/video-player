import MediaPlayer from "@jpleyvat/platzimediaplayer";
import AutoPlay from "@jpleyvat/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@jpleyvat/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@jpleyvat/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
