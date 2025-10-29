document.addEventListener("DOMContentLoaded", async () => {
  const rssUrl = "https://medium.com/feed/@dstushar7"; 
  const request = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

  try {
    const res = await fetch(request);
    const data = await res.json();

    const container = document.getElementById("blog-container");
    if (!container || !data.items) return;

    // Show latest 3 posts
    const postsHTML = data.items.slice(0, 3).map(item => {
      const date = new Date(item.pubDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });

      // extract small thumbnail if available
      const img = item.thumbnail || "img/blog-placeholder.jpg";

      return `
        <div class="col-lg-4 mb-4">
          <div class="card border-0 shadow-sm">
            <img src="${img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text text-muted">${date}</p>
              <a href="${item.link}" target="_blank" class="btn btn-outline-primary btn-sm">
                Read More
              </a>
            </div>
          </div>
        </div>`;
    }).join("");

    container.innerHTML = postsHTML;

  } catch (err) {
    console.error("Failed to load Medium feed:", err);
  }
});