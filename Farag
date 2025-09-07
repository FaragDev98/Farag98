from flask import Flask, render_template_string

app = Flask(__name__)

# HTML + CSS بتصميم زجاجي (Glassmorphism)
html_code = """
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>معرض أعمال فراج</title>
  <style>
    body {
      margin: 0;
      font-family: "Cairo", sans-serif;
      background: linear-gradient(135deg, #4f46e5, #9333ea);
      color: white;
      text-align: center;
    }
    .glass-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      margin: 10px;
    }
    .glass-header img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .nav-buttons a {
      margin: 0 10px;
      padding: 8px 16px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      transition: 0.3s;
    }
    .nav-buttons a:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .works {
      margin-top: 50px;
    }
    .card {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 20px;
      margin: 20px auto;
      width: 80%;
      max-width: 400px;
      transition: transform 0.3s;
    }
    .card:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <header class="glass-header">
    <img src="https://via.placeholder.com/40" alt="شعار AI">
    <nav class="nav-buttons">
      <a href="/">FaragDev</a>
      <a href="/portfolio">معرض مطور</a>
      <a href="/contact">تواصل</a>
    </nav>
  </header>

  <section class="works">
    <h2>✨ أعمالي ✨</h2>
    <div class="card">
      <h3>📘 مشروع القرآن الكريم</h3>
      <p>تطبيق ويب كامل يعمل بدون إنترنت لقراءة القرآن.</p>
      <a href="https://fabrica-courses.netlify.app/" target="_blank">عرض المشروع</a>
    </div>
    <div class="card">
      <h3>🌐 موقع فبريكا</h3>
      <p>موقع تعليمي مع كورسات وخدمات برمجية.</p>
      <a href="https://fabrica-courses.netlify.app/" target="_blank">عرض الموقع</a>
    </div>
  </section>
</body>
</html>
"""

@app.route("/")
def home():
    return render_template_string(html_code)

@app.route("/portfolio")
def portfolio():
    return "<h1>🚀 معرض أعمال فراج</h1><p>المزيد من المشاريع قادمة قريباً...</p>"

@app.route("/contact")
def contact():
    return "<h1>📞 تواصل معي</h1><p>واتساب: 01091838789</p><p>إيميل: Faragbdallh891@gmail.com</p>"

if __name__ == "__main__":
    app.run(debug=True)
