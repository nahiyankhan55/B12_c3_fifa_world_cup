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

// Scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------------------------------------
  // 1. Sidebar Active State Management
  // Allows only one sidebar button to be active/highlighted at a time.
  // --------------------------------------------------------------------------
  const sidebarButtons = document.querySelectorAll(".sidebar .btn");

  sidebarButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Stop the default anchor link action

      // Remove 'active' class from all buttons
      sidebarButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      this.classList.add("active");

      // You would add logic here to load content based on the button clicked
      // For example: loadBlogPosts(this.textContent);
      console.log(
        `Sidebar link clicked: ${this.textContent}. Content should now update.`
      );
    });
  });

  // --------------------------------------------------------------------------
  // 2. Contact Form Validation and Submission Handler
  // Provides basic front-end validation and confirmation message.
  // --------------------------------------------------------------------------
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm
        .querySelector('input[type="email"]')
        .value.trim();
      const message = contactForm.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before sending your message.");
        return; // Stop execution if validation fails
      }

      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate form submission success
      console.log("Form Submitted:", { name, email, message });
      alert(`Thank you, ${name}! Your message has been sent successfully.`);

      // Clear the form after success
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 3. Simple Button Click Handler for "Watch Live"
  // Provides feedback for the main CTA buttons.
  // --------------------------------------------------------------------------
  const watchButtons = document.querySelectorAll(
    ".hero a.btn.active, .hero a.watch-btn"
  );

  watchButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(
        `Watch Live button clicked! Navigating to live stream page...`
      );
      // In a real application, you'd navigate the user:
      // window.location.href = '/live-stream';
    });
  });

  // --------------------------------------------------------------------------
  // 4. Newsletter Subscription Handler
  // Basic handler for the new newsletter form.
  // --------------------------------------------------------------------------
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        console.log(`Subscribing email: ${email}`);
        alert(`Success! ${email} is now subscribed to our newsletter.`);
        newsletterForm.reset();
      } else {
        alert("Please enter a valid email address for the newsletter.");
      }
    });
  }
});
