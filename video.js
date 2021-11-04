const videoPlayer = document.querySelector(".video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");
const volume = videoPlayer.querySelector(".volume");
const currentTimeElement = videoPlayer.querySelector(".current");
const durationTimeElement = videoPlayer.querySelector(".duration");
const progress = videoPlayer.querySelector(".video-progress");
const progressBar = videoPlayer.querySelector(".video-progress-filled");
const mute = videoPlayer.querySelector(".mute");
const fullscreen = videoPlayer.querySelector(".fullscreen");

// console.log("video element:", video);

// Play and Pause button
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    playButton.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
    video.pause();
    playButton.innerHTML = "<i class='fas fa-play'></i>";
  }
});

// Volume
volume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});

volume.addEventListener("click", (e) => {
  video.volume = e.target.value;
});

// Current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);

  let durationMinutes = Math.floor(video.duration / 60);
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

  currentTimeElement.innerHTML = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  durationTimeElement.innerHTML = `${durationMinutes}:${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;
};

video.addEventListener("timeupdate", currentTime);

// Progress bar
video.addEventListener("timeupdate", () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

// progress.addEventListener("click", (e) => {
//   console.log("clicked", e);
// });

// Change progress bar on click
progress.addEventListener("click", (e) => {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
});

// console.dir(video.loop);

// mute button
mute.addEventListener("click", () => {
  video.muted = !video.muted;
  mute.classList.toggle("muted");
});

// fullscreen button
fullscreen.addEventListener("click", () => {
  video.requestFullscreen();
});
