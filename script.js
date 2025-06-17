// رسالة ترحيب في الكونسول
console.log("مرحبًا بك في Fabrica Course!");

// تمرير سلس عند الضغط على الروابط داخل الصفحة
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// تأثير عند الضغط على زر الاشتراك
const subscribeBtn = document.querySelector("#subscribeBtn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    alert("شكرًا لانضمامك! سيتم التواصل معك عبر واتساب.");
  });
}
