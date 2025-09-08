// نختار عناصر الفيديو والأزرار
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");

// تشغيل/إيقاف الفيديو
playPauseBtn.addEventListener("click", () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = "⏸️"; // زر الإيقاف
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️"; // زر التشغيل
  }
});

// كتم/إلغاء الكتم
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});

// التحكم في مستوى الصوت
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});
