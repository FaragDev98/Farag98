// ===== مشغل الفيديو =====
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const fullscreenBtn = document.getElementById("fullscreen");

// تشغيل/إيقاف الفيديو
playPauseBtn.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// كتم/تشغيل الصوت
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

// التحكم في مستوى الصوت
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

// ملء الشاشة
fullscreenBtn.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
