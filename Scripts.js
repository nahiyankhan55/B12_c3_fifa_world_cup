// ========================
// 1️⃣ Watch Live Button
// ========================
const watchBtns = document.querySelectorAll(".btn, .watch-btn");
watchBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("⚽ Thanks for joining! The live stream will start soon!");
  })
);

// ========================
// 2️⃣ Sidebar Active Button
// ========================
const sidebarButtons = document.querySelectorAll(".sidebar .btn");
sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sidebarButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});

// ========================
// 3️⃣ Blog Card Click Alert
// ========================
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3")?.textContent || "Untitled Post";
    alert(`📖 Opening blog post: "${title}"`);
  });
});

// ========================
// 4️⃣ Contact Form Validation
// ========================
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea")?.value.trim() || "";

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    alert(`✅ Thanks, ${name}! Your message has been received.`);
    contactForm.reset();
  });
}

// ========================
// 5️⃣ Scroll Reveal Animation
// ========================
const revealElements = document.querySelectorAll(
  ".hero, .featured, .cards, .testimonials, .contact-section"
);
revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.8s ease";
    }
  });
});

// ========================
// 6️⃣ Dark / Light Mode Toggle
// ========================
const modeToggleBtn = document.createElement("button");
modeToggleBtn.textContent = "🌙 Dark Mode";
modeToggleBtn.classList.add("mode-toggle-btn");
document.body.appendChild(modeToggleBtn);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  modeToggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme
modeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  modeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ========================
// 7️⃣ Sticky Navbar
// ========================
const navbar = document.querySelector("header");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 50);
  });
}

// ========================
// 8️⃣ Back to Top Button
// ========================
const backToTopBtn = document.createElement("button");
backToTopBtn.classList.add("back-to-top");
backToTopBtn.innerHTML = "⬆️";
document.body.appendChild(backToTopBtn);

// Show or hide button on scroll
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 400 ? "flex" : "none";
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
