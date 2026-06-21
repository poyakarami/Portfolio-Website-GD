
# 🎮 Game Developer Portfolio

یک وبسایت رزومه‌ای حرفه‌ای، مدرن و خیره‌کننده مخصوص بازی‌سازان (Game Developers) که با طراحی سایبرپانک/نئونی و انیمیشن‌های جذاب ساخته شده است.

![Game Developer Portfolio](https://img.shields.io/badge/Status-Complete-success)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

---

## ✨ ویژگی‌های کلیدی

### 🎨 طراحی بصری
- **تم گیمینگ سایبرپانک**: پالت رنگی نئونی با ۱۰ رنگ جذاب (بنفش، آبی، صورتی، سبز نئونی و...)
- **انیمیشن‌های بهینه**: سیستم ذرات (Particle System)، نوارهای مهارت متحرک، افکت‌های hover
- **طراحی کاملاً ریسپانسیو**: سازگار با موبایل، تبلت و دسکتاپ
- **فونت‌های تخصصی**: Orbitron, Rajdhani, Roboto برای ظاهر گیمینگ

### 📂 ساختار ماژولار
```
gamedev-portfolio/
├── index.html              # صفحه اصلی با تمام بخش‌ها
├── css/
│   ├── variables.css       # متغیرها، رنگ‌ها و استایل‌های پایه
│   ├── components.css      # کامپوننت‌ها (نویگیشن، دکمه‌ها، کارت‌ها)
│   └── sections.css        # استایل بخش‌ها (هیرو، درباره، پروژه‌ها، مهارت‌ها، تماس)
├── js/
│   └── main.js             # جاوااسکریپت ماژولار (انیمیشن‌ها، فیلتر، فرم)
└── assets/                 # پوشه فایل‌های رسانه‌ای (تصاویر، آیکون‌ها)
```

### 🚀 قابلیت‌های تعاملی
- ✅ Loading Screen انیمیشنی
- ✅ منوی نویگیشن ثابت با افکت اسکرول
- ✅ Hero Section با ذرات معلق و آمار متحرک
- ✅ فیلتر پروژه‌ها بر اساس دسته‌بندی (Unity, Unreal, Mobile, VR)
- ✅ Skill Bars با انیمیشن پر شدن خودکار
- ✅ فرم تماس با اعتبارسنجی
- ✅ منوی موبایل همبرگری
- ✅ Smooth Scroll برای ناوبری
- ✅ Highlight لینک فعال در منو

### 🛠 تکنولوژی‌های استفاده‌شده
- **HTML5** Semantic
- **CSS3** با Variables و Flexbox/Grid
- **Vanilla JavaScript** (بدون فریم‌ورک اضافی)
- **Font Awesome 6** برای آیکون‌ها
- **Google Fonts** (Orbitron, Rajdhani, Roboto)
- **Canvas API** برای سیستم ذرات

---

## 📑 بخش‌های وبسایت

1. **Navigation Bar**: منوی ثابت با لوگو و لینک‌های ناوبری
2. **Hero Section**: معرفی با افکت تایپ، ذرات معلق، آمار متحرک و دکمه‌های CTA
3. **About Me**: معرفی شخصی با تصویر، اطلاعات تماس و دکمه دانلود CV
4. **Projects**: گالری ۶ پروژه با فیلتر دسته‌بندی و لینک‌های دمو/کد
5. **Skills**: نمایش مهارت‌ها در ۳ دسته (Game Engines, Programming, Design) با نوار پیشرفت
6. **Tech Stack**: آیکون‌های تکنولوژی‌های مورد استفاده
7. **Contact**: فرم تماس + اطلاعات ارتباطی + شبکه‌های اجتماعی
8. **Footer**: کپی‌رایت و لینک‌های اضافی

---

## 🚀 نصب و اجرا

### روش ۱: اجرای مستقیم
فایل `index.html` را در مرورگر خود باز کنید:
```bash
open index.html
```

### روش ۲: استفاده از Live Server (پیشنهادی)
اگر از VS Code استفاده می‌کنید:
1. افزونه **Live Server** را نصب کنید
2. روی فایل `index.html` راست‌کلیک کرده و **Open with Live Server** را انتخاب کنید

### روش ۳: استفاده از Python
```bash
# Python 3
python -m http.server 8000

# سپس در مرورگر به آدرس زیر بروید
http://localhost:8000
```

### روش ۴: استفاده از Node.js (http-server)
```bash
npm install -g http-server
http-server -p 8000
```

---

## 🎨 شخصی‌سازی

### تغییر رنگ‌ها
فایل `css/variables.css` را ویرایش کنید تا پالت رنگی را تغییر دهید:
```css
:root {
    --neon-purple: #b026ff;
    --neon-blue: #00f3ff;
    --neon-pink: #ff006e;
    --neon-green: #00ff88;
    /* ... سایر رنگ‌ها */
}
```

### تغییر محتوا
- **اطلاعات شخصی**: نام، ایمیل، موقعیت مکانی را در `index.html` ویرایش کنید
- **پروژه‌ها**: بخش `<section class="projects">` را با پروژه‌های خود جایگزین کنید
- **مهارت‌ها**: درصدها و نام مهارت‌ها را در بخش Skills تغییر دهید
- **تصاویر**: تصاویر موجود در `assets/` یا URLهای خارجی را جایگزین کنید

### افزودن پروژه جدید
```html
<div class="project-card animate-on-scroll" data-category="unity">
    <img src="path/to/image.jpg" alt="Project Name" class="project-image">
    <div class="project-content">
        <div class="project-tags">
            <span class="project-tag">Unity</span>
            <span class="project-tag">C#</span>
        </div>
        <h3 class="project-title">نام پروژه</h3>
        <p class="project-description">توضیحات پروژه...</p>
        <div class="project-links">
            <a href="#" class="project-link primary"><i class="fas fa-play"></i> Play Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

---

## 🌐 دموی آنلاین

🔗 **[مشاهده دموی زنده](https://github.com/poyakarami/Portfolio-Website.git)**

*(لینک دموی خود را جایگزین `YOUR_DEMO_LINK_HERE` کنید)*

---

## 🤖 ساخته‌شده با هوش مصنوعی

این پروژه با کمک **هوش مصنوعی Qwen3.5** (توسعه‌یافته توسط Alibaba Cloud) طراحی و پیاده‌سازی شده است.

- **طراحی UI/UX**: پالت رنگی، چیدمان و انیمیشن‌ها
- **کدنویسی Frontend**: HTML5, CSS3, Vanilla JavaScript
- **بهینه‌سازی**: Responsive Design، Performance Tuning
- **ساختار ماژولار**: جداسازی فایل‌ها برای نگهداری آسان

---

## 📄 مجوز استفاده (License)

### ✅ استفاده کاملاً آزاد است!

این پروژه تحت **مجوز MIT** منتشر شده است. شما می‌توانید:

- ✅ از این قالب برای وبسایت شخصی خود استفاده کنید
- ✅ آن را تغییر دهید و سفارشی‌سازی کنید
- ✅ در پروژه‌های تجاری و غیرتجاری به کار ببرید
- ✅ کد را کپی، توزیع و بازنشر کنید
- ✅ نسخه‌های مشتق‌شده ایجاد کنید


---

## 📞 پشتیبانی و تماس

اگر سوالی دارید یا نیاز به کمک در شخصی‌سازی این قالب دارید:

- 📧 ایمیل: poyak1386@gmail.com
- 💼 لینکدین: [لینک پروفایل](www.linkedin.com/in/poya-karami-b75649362)

---

## 🙏 تشکر و قدردانی

- **Font Awesome**: برای آیکون‌های عالی
- **Google Fonts**: برای فونت‌های زیبا
- **هوش مصنوعی Qwen3.5**: برای طراحی و پیاده‌سازی این پروژه

---

## 📊 آمار پروژه

| معیار | مقدار |
|-------|-------|
| تعداد فایل‌ها | 5 فایل اصلی |
| خطوط کد | ~1500+ خط |
| رنگ‌های پالت | 10 رنگ نئونی |
| انیمیشن‌ها | 15+ انیمیشن CSS/JS |
| ریسپانسیو | ✅ کامل |
| سئو | ✅ بهینه‌شده |


---

<div align="center">


**ساخته‌شده با 💜 و ☕ توسط Poya Karami با کمک هوش مصنوعی Qwen3.5**

</div>
