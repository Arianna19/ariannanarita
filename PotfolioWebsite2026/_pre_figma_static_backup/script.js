const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const parallaxNodes = Array.from(document.querySelectorAll("[data-parallax]"));

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(scrollY / maxScroll, 1);

    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    document.documentElement.style.setProperty("--bg-shift-y", `${scrollY}px`);
    document.documentElement.style.setProperty("--pattern-opacity", `${0.16 + progress * 0.16}`);

    for (const node of parallaxNodes) {
      const speed = Number(node.dataset.parallax || 0);
      node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    }
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");

for (const link of navLinks) {
  const href = link.getAttribute("href") || "";

  if (currentPage === "artist-statement" && href === "artist-statement.html") {
    link.setAttribute("aria-current", "page");
  }

  if (currentPage === "biography" && href === "biography.html") {
    link.setAttribute("aria-current", "page");
  }

  if (currentPage === "selected-work" && href === "index.html#selected-work") {
    link.setAttribute("aria-current", "page");
  }
}
