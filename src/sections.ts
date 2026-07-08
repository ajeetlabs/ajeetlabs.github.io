import {
  OWNER,
  SERVICES,
  WORK,
  PROCESS,
  TECH_STACK,
} from "./data";

/** Wraps inline SVG path markup in a consistent icon frame. */
const icon = (paths: string, cls = "h-6 w-6") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="square" stroke-linejoin="miter" class="${cls}">${paths}</svg>`;

const NAV_LINKS = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Tech", "#tech"],
  ["Contact", "#contact"],
];

/* =========================================================================
   Header
========================================================================= */
export const Header = () => `
<div id="scroll-progress"></div>
<header class="fixed inset-x-0 top-0 z-50 border-b-2 border-transparent transition-colors duration-300 bg-[var(--color-ink)]" id="site-header">
  <nav class="container-x flex h-16 items-center justify-between">
    <a href="#top" class="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--color-brand)]">
      > ${OWNER.brand}
    </a>

    <ul class="hidden items-center gap-8 text-sm text-[var(--color-mist)] md:flex">
      ${NAV_LINKS.map(([label, href]) => `<li><a class="nav-link transition hover:text-[var(--color-brand)]" href="${href}" data-nav-link>${label}</a></li>`).join("")}
    </ul>

    <div class="hidden md:block">
      <a href="#contact" class="btn-primary !px-5 !py-2">Execute</a>
    </div>

    <button id="nav-toggle" aria-label="Open menu" aria-expanded="false"
      class="grid h-10 w-10 place-items-center border-2 border-[var(--color-brand)] text-[var(--color-brand)] md:hidden hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors">
      ${icon(`<path d="M4 6h16M4 12h16M4 18h16"/>`, "h-5 w-5")}
    </button>
  </nav>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden border-t-2 border-[var(--color-brand)] bg-[var(--color-ink)] md:hidden">
    <ul class="container-x flex flex-col gap-1 py-4 text-[var(--color-brand)]">
      ${NAV_LINKS.map(([label, href]) => `<li><a class="block px-3 py-2 hover:bg-[var(--color-surface)]" href="${href}">> ${label}</a></li>`).join("")}
      <li class="pt-2"><a href="#contact" class="btn-primary w-full">Execute</a></li>
    </ul>
  </div>
</header>`;

/* =========================================================================
   Hero
========================================================================= */
export const Hero = () => `
<section id="top" class="relative pt-32 pb-20 sm:pt-40 overflow-hidden">
  <div class="container-x">
    <div class="reveal mx-auto max-w-3xl text-center">
      <span class="inline-flex items-center gap-2 border-2 border-[var(--color-brand)] bg-[var(--color-surface)] px-4 py-1.5 text-xs text-[var(--color-brand)] font-bold uppercase tracking-widest">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping bg-[var(--color-brand)] opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 bg-[var(--color-brand)]"></span>
        </span>
        System Online
      </span>
      <h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl text-[var(--color-brand)]">
        > Ajeet Kumar<br class="hidden sm:block" />
        Software Architect<span class="terminal-cursor"></span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-mist)]">
        ${OWNER.role} who turns ideas into fast, reliable and beautiful
        web applications, bots, and platforms — from concept to production.
      </p>
      <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a href="#contact" class="btn-primary">${icon(`<path d="M5 12h14M13 6l6 6-6 6"/>`, "h-4 w-4")} Initialize</a>
        <a href="#work" class="btn-ghost">View root/work</a>
      </div>
    </div>

    <!-- Platform badges -->
    <div class="reveal mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[var(--color-line)]">
      ${[
        ["Web Apps", `<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v9.5A2.25 2.25 0 0 1 18.75 17H5.25A2.25 2.25 0 0 1 3 14.75zM3 20h18"/><path d="m8 8 2.5 2.5L8 13m4 0h3"/>`],
        ["Bots & APIs", `<path d="M12 8V4H8"/><path d="M2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10"/><path d="M12 12 8 4"/>`],
        ["DevOps", `<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>`],
      ]
        .map(
          ([label, path]) =>
            `<span class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">${icon(path, "h-5 w-5")} ${label}</span>`,
        )
        .join("")}
    </div>
  </div>
</section>

<div class="section-divider container-x mx-auto"></div>`;

/* =========================================================================
   Services
========================================================================= */
export const Services = () => `
<section id="services" class="py-20">
  <div class="container-x">
    <div class="reveal max-w-2xl">
      <span class="eyebrow">// What I do</span>
      <h2 class="text-3xl font-bold sm:text-4xl text-[var(--color-brand)]">End-to-end engineering</h2>
      <p class="mt-4 text-[var(--color-mist)]">
        From crafting pixel-perfect frontends to designing scalable backends and
        deploying to production — I handle the full stack.
      </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3 reveal-stagger">
      ${SERVICES.map(
        (s) => `
        <article class="reveal card">
          <div class="mb-5 grid h-12 w-12 place-items-center bg-[var(--color-brand)] text-[var(--color-ink)]">
            ${icon(s.icon)}
          </div>
          <h3 class="text-xl font-bold text-[var(--color-brand)]">${s.title}</h3>
          <p class="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">${s.desc}</p>
          <ul class="mt-5 space-y-2 text-sm text-[var(--color-mist)]">
            ${s.points
              .map(
                (p) =>
                  `<li class="flex items-center gap-2">${icon(`<path d="M5 12l4 4L19 6"/>`, "h-4 w-4 text-[var(--color-brand)]")} ${p}</li>`,
              )
              .join("")}
          </ul>
        </article>`,
      ).join("")}
    </div>
  </div>
</section>

<div class="section-divider container-x mx-auto"></div>`;

/* =========================================================================
   Work — with device mockups and live links
========================================================================= */

const browserMockup = () => `
<div class="mockup-browser">
  <div class="mockup-browser__bar">
    <span class="mockup-browser__dot"></span>
    <span class="mockup-browser__dot"></span>
    <span class="mockup-browser__dot"></span>
  </div>
  <div class="mockup-browser__body">
    <div class="mockup-line mockup-line--accent" style="width:60%"></div>
    <div class="mockup-line" style="width:100%"></div>
    <div class="mockup-line" style="width:85%"></div>
    <div class="mockup-line" style="width:45%"></div>
    <div style="display:flex;gap:6px;margin-top:4px">
      <div style="flex:1;height:24px;border:2px solid var(--color-line)"></div>
      <div style="flex:1;height:24px;border:2px solid var(--color-line)"></div>
    </div>
    <div class="mockup-line" style="width:70%;margin-top:4px"></div>
  </div>
</div>`;

const phoneMockup = () => `
<div class="mockup-phone" style="position:relative;right:auto;bottom:auto">
  <div class="mockup-phone__notch"></div>
  <div class="mockup-phone__body" style="min-height:80px">
    <div class="mockup-line mockup-line--accent" style="width:70%"></div>
    <div class="mockup-line" style="width:100%"></div>
    <div class="mockup-line" style="width:60%"></div>
    <div style="height:20px;border:2px solid var(--color-line);margin-top:2px"></div>
    <div class="mockup-line" style="width:80%"></div>
  </div>
</div>`;

const bothMockup = () => `
<div style="position:relative;display:flex;align-items:center;justify-content:center;height:100%;padding:1rem">
  ${browserMockup()}
  <div class="mockup-phone" style="right:8%;bottom:10%">
    <div class="mockup-phone__notch"></div>
    <div class="mockup-phone__body">
      <div class="mockup-line mockup-line--accent" style="width:60%"></div>
      <div class="mockup-line" style="width:100%"></div>
      <div class="mockup-line" style="width:50%"></div>
    </div>
  </div>
</div>`;

const getMockup = (type: string) => {
  if (type === "browser") return `<div class="mockup-container">${browserMockup()}</div>`;
  if (type === "phone") return `<div class="mockup-container">${phoneMockup()}</div>`;
  return bothMockup();
};

export const Work = () => `
<section id="work" class="py-20">
  <div class="container-x">
    <div class="reveal flex flex-wrap items-end justify-between gap-4">
      <div class="max-w-2xl">
        <span class="eyebrow">// Selected work</span>
        <h2 class="text-3xl font-bold sm:text-4xl text-[var(--color-brand)]">Projects I've built</h2>
      </div>
      <a href="#contact" class="btn-ghost">Execute -></a>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-2 reveal-stagger">
      ${WORK.map(
        (w) => `
        <article class="reveal card work-card overflow-hidden !p-0">
          <a href="${w.url}" target="_blank" rel="noopener" class="block">
            <div class="relative h-48 bg-[var(--color-ink)] border-b-2 border-[var(--color-line)]">
              ${getMockup(w.mockup)}
              <span class="absolute left-5 top-5 bg-[var(--color-surface)] border-2 border-[var(--color-brand)] px-3 py-1 text-xs font-bold text-[var(--color-brand)] uppercase tracking-widest">${w.category}</span>
              <div class="card-overlay"></div>
            </div>
          </a>
          <div class="p-7">
            <h3 class="text-xl font-bold text-[var(--color-brand)]">${w.title}</h3>
            <p class="mt-2 text-sm text-[var(--color-mist)]">${w.blurb}</p>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                ${w.tags
                  .map(
                    (t) =>
                      `<span class="border border-[var(--color-line)] px-3 py-1 text-xs font-bold text-[var(--color-mist)] uppercase">${t}</span>`,
                  )
                  .join("")}
              </div>
              <a href="${w.url}" target="_blank" rel="noopener" class="card-link text-sm font-bold text-[var(--color-brand)] flex items-center gap-1 hover:underline">
                [ Visit ]
              </a>
            </div>
          </div>
        </article>`,
      ).join("")}
    </div>
  </div>
</section>

<div class="section-divider container-x mx-auto"></div>`;

/* =========================================================================
   Process — with timeline connector and icons
========================================================================= */
export const Process = () => `
<section id="process" class="py-20">
  <div class="container-x">
    <div class="reveal max-w-2xl">
      <span class="eyebrow">// How I work</span>
      <h2 class="text-3xl font-bold sm:text-4xl text-[var(--color-brand)]">A process built for momentum</h2>
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 process-grid reveal-stagger">
      ${PROCESS.map(
        (s) => `
        <div class="reveal card process-card">
          <div class="mb-4 grid h-10 w-10 place-items-center bg-[var(--color-brand)] text-[var(--color-ink)]">
            ${icon(s.icon, "h-5 w-5")}
          </div>
          <div class="text-4xl font-black text-[var(--color-mist)]">${s.no}</div>
          <h3 class="mt-4 text-lg font-bold text-[var(--color-brand)]">${s.title}</h3>
          <p class="mt-2 text-sm text-[var(--color-mist)]">${s.desc}</p>
        </div>`,
      ).join("")}
    </div>
  </div>
</section>

<div class="section-divider container-x mx-auto"></div>`;

/* =========================================================================
   Tech Stack
========================================================================= */
export const TechStack = () => `
<section id="tech" class="py-20">
  <div class="container-x">
    <div class="reveal max-w-2xl">
      <span class="eyebrow">// Tech stack</span>
      <h2 class="text-3xl font-bold sm:text-4xl text-[var(--color-brand)]">Tools & technologies</h2>
      <p class="mt-4 text-[var(--color-mist)]">
        I pick the right tool for the job — whether it's a lightweight CMS or a custom-built
        real-time platform, every project gets the stack it deserves.
      </p>
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 reveal-stagger">
      ${TECH_STACK.map(
        (cat) => `
        <div class="reveal card">
          <h3 class="text-lg font-bold text-[var(--color-brand)] mb-5 uppercase tracking-wider">${cat.name}</h3>
          <div class="flex flex-wrap gap-2">
            ${cat.techs
              .map(
                (t) =>
                  `<span class="border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-1.5 text-xs font-bold text-[var(--color-mist)] uppercase transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">${t}</span>`,
              )
              .join("")}
          </div>
        </div>`,
      ).join("")}
    </div>
  </div>
</section>`;

/* =========================================================================
   Contact
========================================================================= */
export const Contact = () => `
<section id="contact" class="py-20">
  <div class="container-x">
    <div class="reveal overflow-hidden border-2 border-[var(--color-brand)] bg-[var(--color-surface)] p-8 sm:p-12">
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <span class="eyebrow">// Let's build together</span>
          <h2 class="text-3xl font-bold sm:text-4xl text-[var(--color-brand)]">Have an idea? Let's make it real.</h2>
          <p class="mt-4 text-[var(--color-mist)]">
            Tell me about your project and I'll get back to you within one business day.
          </p>
          <div class="mt-8 space-y-3 text-sm font-bold">
            <a href="mailto:${OWNER.email}" class="flex items-center gap-3 text-[var(--color-brand)] hover:underline transition-colors">
              ${icon(`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`, "h-5 w-5")} ${OWNER.email}
            </a>
          </div>
        </div>

        <form id="contact-form" class="space-y-4" novalidate>
          <div class="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="> Your name"
              class="w-full border-2 border-[var(--color-line)] bg-[var(--color-ink)] px-4 py-3 text-sm font-bold text-[var(--color-brand)] outline-none placeholder:text-[var(--color-line)] focus:border-[var(--color-brand)] transition-colors" />
            <input name="email" type="email" required placeholder="> Email address"
              class="w-full border-2 border-[var(--color-line)] bg-[var(--color-ink)] px-4 py-3 text-sm font-bold text-[var(--color-brand)] outline-none placeholder:text-[var(--color-line)] focus:border-[var(--color-brand)] transition-colors" />
          </div>
          <select name="type"
            class="w-full border-2 border-[var(--color-line)] bg-[var(--color-ink)] px-4 py-3 text-sm font-bold text-[var(--color-brand)] outline-none focus:border-[var(--color-brand)] transition-colors appearance-none">
            <option>> Website / web app</option>
            <option>> Bot / API development</option>
            <option>> Architecture consulting</option>
            <option>> Other</option>
          </select>
          <textarea name="message" required rows="4" placeholder="> Tell me about your project"
            class="w-full border-2 border-[var(--color-line)] bg-[var(--color-ink)] px-4 py-3 text-sm font-bold text-[var(--color-brand)] outline-none placeholder:text-[var(--color-line)] focus:border-[var(--color-brand)] transition-colors"></textarea>
          <button type="submit" class="btn-primary w-full sm:w-auto">Send ${icon(`<path d="M5 12h14M13 6l6 6-6 6"/>`, "h-4 w-4")}</button>
          <p id="form-note" class="hidden text-sm font-bold text-[var(--color-brand)] mt-2"></p>
        </form>
      </div>
    </div>
  </div>
</section>`;

/* =========================================================================
   Footer
========================================================================= */
export const Footer = () => `
<footer class="border-t-2 border-[var(--color-brand)] py-12 bg-[var(--color-surface)]">
  <div class="container-x">
    <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
      <!-- Brand + tagline -->
      <div>
        <div class="flex items-center gap-2 font-bold text-[var(--color-brand)] text-lg">
          > ${OWNER.brand}
        </div>
        <p class="mt-3 max-w-xs text-sm text-[var(--color-mist)]">${OWNER.role} crafting high-performance web and bot experiences.</p>
      </div>

      <!-- Navigation -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">// Navigation</h4>
        <ul class="space-y-2 text-sm text-[var(--color-mist)] font-bold">
          ${NAV_LINKS.map(([label, href]) => `<li><a href="${href}" class="hover:text-[var(--color-brand)] hover:underline transition-colors">${label}</a></li>`).join("")}
        </ul>
      </div>

      <!-- Socials -->
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">// Connect</h4>
        <div class="flex items-center gap-4 text-[var(--color-brand)]">
          <a aria-label="GitHub" href="${OWNER.github}" target="_blank" rel="noopener" class="hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors p-1 border border-transparent hover:border-[var(--color-brand)]">
            ${icon(`<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8v2.700c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>`, "h-5 w-5")}
          </a>
          <a aria-label="LinkedIn" href="${OWNER.linkedin}" target="_blank" rel="noopener" class="hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors p-1 border border-transparent hover:border-[var(--color-brand)]">
            ${icon(`<rect x="3" y="3" width="18" height="18"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4"/>`, "h-5 w-5")}
          </a>
          <a aria-label="X" href="${OWNER.x}" target="_blank" rel="noopener" class="hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors p-1 border border-transparent hover:border-[var(--color-brand)]">
            ${icon(`<path d="M4 4l16 16M20 4 4 20"/>`, "h-5 w-5")}
          </a>
          <a aria-label="Email" href="mailto:${OWNER.email}" class="hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors p-1 border border-transparent hover:border-[var(--color-brand)]">
            ${icon(`<rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/>`, "h-5 w-5")}
          </a>
        </div>
      </div>
    </div>

    <div class="mt-10 border-t-2 border-[var(--color-brand)] pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm font-bold text-[var(--color-mist)]">© <span id="year"></span> ${OWNER.brand}.</p>
      <p class="text-xs font-bold text-[var(--color-line)]">sys.admin: ${OWNER.name}</p>
    </div>
  </div>
</footer>

<!-- Back to top -->
<button id="back-to-top" class="back-to-top" aria-label="Back to top">
  ${icon(`<path d="M12 19V5M5 12l7-7 7 7"/>`, "h-5 w-5")}
</button>`;
