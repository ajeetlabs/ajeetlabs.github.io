// Central content for the AjeetLabs portfolio site.
// Edit these arrays to update the site copy.

export const OWNER = {
  name: "Ajeet Kumar",
  brand: "AjeetLabs",
  role: "Software Architect",
  email: "ajeetlabs@gmail.com",
  github: "https://github.com/ajeetlabs",
  linkedin: "https://www.linkedin.com/company/ajeetlabs",
  x: "https://x.com/ajeetlabs",
};

export interface Service {
  icon: string; // inline SVG path/markup
  title: string;
  desc: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    icon: `<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v9.5A2.25 2.25 0 0 1 18.75 17H5.25A2.25 2.25 0 0 1 3 14.75zM3 20h18"/><path d="m8 8 2.5 2.5L8 13m4 0h3"/>`,
    title: "Web Development",
    desc: "Full-stack websites and web applications — from WordPress to custom-built platforms with modern frameworks.",
    points: ["WordPress, PHP & MySQL", "Node.js & TypeScript", "Nginx & server config"],
  },
  {
    icon: `<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 5.5h4"/><path d="M12 18.5h.01"/>`,
    title: "Bot & API Development",
    desc: "Intelligent bots and robust APIs that power real-time communication and automation workflows.",
    points: ["Telegram Bot API", "WebSockets & real-time", "RESTful & GraphQL APIs"],
  },
  {
    icon: `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
    title: "Architecture & DevOps",
    desc: "Scalable system design, cloud infrastructure, and deployment pipelines that keep products running smoothly.",
    points: ["System design & scaling", "CI/CD & automation", "Cloud & containerisation"],
  },
];

export interface Work {
  title: string;
  category: string;
  blurb: string;
  tags: string[];
  /** Type of mockup to show: "browser", "phone", "both" */
  mockup: "browser" | "phone" | "both";
  url: string;
}

export const WORK: Work[] = [
  {
    title: "GhostGossip",
    category: "Telegram Bot",
    blurb: "Anonymous Telegram chat bot — chat with strangers without sharing any personal details.",
    tags: ["Node.js", "Telegram Bot API", "WebSockets"],
    mockup: "both",
    url: "https://ghostgossip.sociohub.in/",
  },
  {
    title: "Hamara Bokaro",
    category: "News & Media",
    blurb: "Regional digital news publishing platform with custom content management for Bokaro.",
    tags: ["WordPress", "PHP", "MySQL"],
    mockup: "browser",
    url: "https://hamarabokaro.in/",
  },
  {
    title: "Glowing Star Furniture",
    category: "Portfolio Website",
    blurb: "Structured dismantling and responsible scrap management solutions — a professional services portfolio.",
    tags: ["Web Design", "Portfolio"],
    mockup: "browser",
    url: "https://www.gsfscrap.com/",
  },
  {
    title: "Shubhanjali Click",
    category: "Portfolio Website",
    blurb: "Photography studio showcase — a visual portfolio highlighting captured moments and services.",
    tags: ["Laravel", "PHP", "MySQL", "Node.js"],
    mockup: "browser",
    url: "https://shubhanjaliclick.com/",
  },
  {
    title: "Kaun Banega Lakhpati",
    category: "Quiz & Gaming",
    blurb: "Interactive quiz and rewards platform where players answer questions to win — a real-time gaming experience.",
    tags: ["Node.js", "WebSockets", "PostgreSQL"],
    mockup: "both",
    url: "https://kaunbanegalakhpati.com/",
  },
];

export interface Step {
  no: string;
  title: string;
  desc: string;
  icon: string;
}

export const PROCESS: Step[] = [
  {
    no: "01",
    title: "Discover",
    desc: "I dig into your goals, users and market to define what success looks like.",
    icon: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
  },
  {
    no: "02",
    title: "Design",
    desc: "Wireframes and polished UI turn ideas into an experience people love.",
    icon: `<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>`,
  },
  {
    no: "03",
    title: "Build",
    desc: "Clean, tested code shipped in fast iterations with regular demos and feedback.",
    icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  },
  {
    no: "04",
    title: "Launch & Scale",
    desc: "I deploy, monitor and keep improving well after go-live.",
    icon: `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`,
  },
];

export interface TechCategory {
  name: string;
  techs: string[];
}

export const TECH_STACK: TechCategory[] = [
  {
    name: "Languages",
    techs: ["JavaScript", "TypeScript", "PHP", "Python", "Kotlin"],
  },
  {
    name: "Frontend",
    techs: ["React", "HTML/CSS", "Tailwind", "WordPress"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express", "MySQL", "MongoDB"],
  },
  {
    name: "DevOps & Tools",
    techs: ["Nginx", "Docker", "Git", "Linux", "CI/CD"],
  },
];
