// script.js

// مثال لتأثير عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
      header.style.transition = "all 0.8s ease-in-out";
      header.style.opacity = 1;
      header.style.transform = "translateY(0)";
    }, 100);
  }
});

// زر للعودة لأعلى الصفحة
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "⬆";
scrollToTopButton.className = "btn";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.left = "20px";
scrollToTopButton.style.zIndex = "999";
scrollToTopButton.onclick = () => window.scrollTo
