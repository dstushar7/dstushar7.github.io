document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // ✅ Validate email before sending
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      showError("Please enter a valid email address.");
      emailInput.focus();
      return; // stop submission
    }

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        showSuccess("✅ Message sent successfully!");
        form.reset();
      } else {
        showError("⚠️ Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      showError("Network error. Please check your connection.");
    }
  });

  // Inline message helpers 💬
  function showSuccess(message) {
    const box = document.getElementById("success");
    box.innerHTML = `<div class="alert alert-success">${message}</div>`;
    setTimeout(() => (box.innerHTML = ""), 4000);
  }

  function showError(message) {
    const box = document.getElementById("success");
    box.innerHTML = `<div class="alert alert-danger">${message}</div>`;
    setTimeout(() => (box.innerHTML = ""), 4000);
  }
});