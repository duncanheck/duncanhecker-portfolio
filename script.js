// Dynamically set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Scroll animation for fade-in elements
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));
});

// Simple validation for contact form
function validateContactForm() {
  const inputs = document.querySelectorAll('form input, form textarea');
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill out all fields.");
      return false;
    }
  }
  alert("Message sent successfully!");
  return true;
}
