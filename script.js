// Navigation switching
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "🌞 লাইট থিম"
    : "🌗 ডার্ক থিম";
});

// Scroll-based animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-on-scroll").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add("visible");
  });
});

// Contact form
const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", e => {
  e.preventDefault();
  response.textContent = "ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে 💙";
  form.reset();
});
