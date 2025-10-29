document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return; // safety check if the ID is missing

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("⚠️ Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Network error. Please check your connection.");
    }
  });
});