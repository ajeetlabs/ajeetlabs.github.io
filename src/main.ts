import "./style.css";
import {
  Header,
  Hero,
  Services,
  Work,
  Process,
  TechStack,
  Contact,
  Footer,
} from "./sections";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = [
  Header(),
  `<main>`,
  Hero(),
  Services(),
  Work(),
  Process(),
  TechStack(),
  Contact(),
  `</main>`,
  Footer(),
].join("");

/* -------------------------------------------------------------------------
   Current year in footer
------------------------------------------------------------------------- */
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* -------------------------------------------------------------------------
   Header background on scroll
------------------------------------------------------------------------- */
const header = document.querySelector("#site-header")!;
const onScroll = () => {
  header.classList.toggle("bg-[var(--color-ink)]/80", window.scrollY > 8);
  header.classList.toggle("backdrop-blur", window.scrollY > 8);
  header.classList.toggle("border-[var(--color-line)]", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* -------------------------------------------------------------------------
   Mobile navigation
------------------------------------------------------------------------- */
const toggle = document.querySelector<HTMLButtonElement>("#nav-toggle")!;
const menu = document.querySelector<HTMLDivElement>("#mobile-menu")!;

const closeMenu = () => {
  menu.classList.add("hidden");
  toggle.setAttribute("aria-expanded", "false");
};

toggle.addEventListener("click", () => {
  const isOpen = !menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  toggle.setAttribute("aria-expanded", String(!isOpen));
});

menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

/* -------------------------------------------------------------------------
   Scroll-reveal animations with staggered delays
------------------------------------------------------------------------- */
const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

/* -------------------------------------------------------------------------
   Scroll progress bar
------------------------------------------------------------------------- */
const progressBar = document.querySelector<HTMLDivElement>("#scroll-progress");
const updateProgress = () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* -------------------------------------------------------------------------
   Active nav link highlighting
------------------------------------------------------------------------- */
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");
const sections = document.querySelectorAll<HTMLElement>("section[id]");

const updateActiveNav = () => {
  const scrollY = window.scrollY + 120;

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === `#${currentSection}`) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });
};

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* -------------------------------------------------------------------------
   Back to top button
------------------------------------------------------------------------- */
const backToTop = document.querySelector<HTMLButtonElement>("#back-to-top");
const toggleBackToTop = () => {
  if (!backToTop) return;
  backToTop.classList.toggle("is-visible", window.scrollY > 400);
};

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* -------------------------------------------------------------------------
   Contact form (front-end only — wire up to a real endpoint as needed)
------------------------------------------------------------------------- */
const form = document.querySelector<HTMLFormElement>("#contact-form");
const note = document.querySelector<HTMLParagraphElement>("#form-note");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  if (note) {
    note.textContent = "Thanks! I'll get back to you within one business day.";
    note.classList.remove("hidden");
  }
  form.reset();
});


