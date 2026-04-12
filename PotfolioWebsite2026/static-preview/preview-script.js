const root = document.documentElement;
const body = document.body;
const reveals = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll("[data-nav]");
const themeKey = "arianna-preview-theme";

function applyTheme(theme) {
  body.classList.toggle("theme-dark", theme === "dark");
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeButton(button) {
  const isDark = body.classList.contains("theme-dark");
  button.setAttribute("aria-pressed", String(isDark));
  button.innerHTML = isDark
    ? '<span class="theme-toggle__icon">☀</span><span>Light Mode</span>'
    : '<span class="theme-toggle__icon">☾</span><span>Dark Mode</span>';
}

function initThemeToggle() {
  const actionRow = document.querySelector(".nav-actions");
  if (!actionRow) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button--outline theme-toggle";
  actionRow.prepend(button);

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  updateThemeButton(button);

  button.addEventListener("click", () => {
    const nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(themeKey, nextTheme);
    updateThemeButton(button);
  });
}

function updateScrollEffects() {
  root.style.setProperty("--scroll-offset", `${window.scrollY}px`);

  document.querySelectorAll("[data-parallax]").forEach((element) => {
    const speed = Number(element.getAttribute("data-parallax")) || 0.08;
    element.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
  });
}

function revealOnView() {
  const trigger = window.innerHeight * 0.88;
  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < trigger) {
      element.classList.add("is-visible");
    }
  });
}

function setActiveNav() {
  const sections = [...document.querySelectorAll("section[id]")];
  if (!sections.length) return;

  const current = sections.findLast((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 140;
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute("href");
    link.classList.toggle("is-active", current && target === `#${current.id}`);
  });
}

window.addEventListener("scroll", () => {
  updateScrollEffects();
  revealOnView();
  setActiveNav();
});

window.addEventListener("load", () => {
  initThemeToggle();
  updateScrollEffects();
  revealOnView();
  setActiveNav();
});
