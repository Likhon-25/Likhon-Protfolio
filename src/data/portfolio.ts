import type { IconName } from "@/components/ui/Icon";

/* ═══════════════════════════════════════════════════════════════════════
   LIKHON'S PORTFOLIO CONTENT
   ───────────────────────────────────────────────────────────────────────
   এই ফাইলটাই তোমার সাইটের "control panel".
   এখানে text / link / education / project বদলালে পুরো website এ বদলে যাবে।
   আলাদা করে component খোঁজার দরকার নেই।

   COMPONENT MAP (কোন ফাইল কোন section):
   ─ Hero ............ src/components/sections/Hero.tsx
   ─ About ........... src/components/sections/About.tsx
   ─ Education ....... src/components/sections/Education.tsx
   ─ Skills .......... src/components/sections/Skills.tsx
   ─ Projects ........ src/components/sections/Projects.tsx
   ─ Contact ......... src/components/sections/Contact.tsx
   ═══════════════════════════════════════════════════════════════════════ */

/* ── 1. BASIC INFO ──────────────────────────────────────────────────── */
export const site = {
  name: "Likhon Mondol",
  firstName: "Likhon",
  initials: "LM",
  role: "Full-Stack Developer",
  tagline: "I build complete web products — from interface to database.",
  availability: "Open to internships & junior roles",
  email: "likhonmondol327@gmail.com",
  location: "Rangpur, Bangladesh",
  url: "https://likhon-protfolio.vercel.app",
  resumeUrl: "/resume.pdf",
}

/* ── 2. EDUCATION (একজায়গায় রাখা হয়েছে, About + Education দুই জায়গায় use হয়) ── */
export const academics = {
  diploma: {
    degree: "Diploma in Engineering — Computer Science & Technology",
    shortDegree: "Diploma in CST",
    institute: "Rangpur Ideal Institute of Technology",
    semester: "6th semester",
    period: "2023 — Present",
    status: "Ongoing" as const,
  },
  ssc: {
    degree: "Secondary School Certificate (SSC)",
    shortDegree: "SSC · Batch 2023",
    institute: "Kochashahar B.L High School",
    period: "2023",
    status: "Completed" as const,
  },
}

/* ── 3. NAVIGATION ──────────────────────────────────────────────────── */
export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
]

/* ── 4. SOCIAL LINKS ────────────────────────────────────────────────── */
export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Likhon-25", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/likhon-mondol/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091255685543",
    icon: "facebook",
  },
  { label: "Email", href: "mailto:likhonmondol327@gmail.com", icon: "mail" },
]

/* ── 5. HERO SECTION ────────────────────────────────────────────────── */
export const hero = {
  greeting: "Hey, I'm",
  intro:
    "I’m a passionate Full-Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into real-world digital experiences using modern web technologies.",
  typewriterWords: ["web apps.", "REST APIs.", "clean UIs.", "real products."],
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ],
}

export const stats = [
  { value: "03", label: "Projects in portfolio" },
  { value: "04", label: "Skill areas" },
  { value: "AI", label: "VS Code-assisted workflow" },
]

/* ── 6. ABOUT SECTION ───────────────────────────────────────────────── */
export const about = {
  kicker: "About me",
  title: "AI-Driven MERN Stack Developer",
  description:
    "I am a passionate AI-Driven MERN Stack Developer dedicated to transforming ideas into clean, reliable, and high-performance digital products.",
  paragraphs: [
    "My work centers on the intersection of robust backend engineering and deliberate, highly refined user interfaces. With hands-on expertise in MongoDB Atlas, Mongoose ODM, Express.js modular patterns, React, Node.js, and TypeScript—alongside Next.js App Router, BetterAuth security, and Stripe integrations—I build applications where structure, security, and performance operate in sync.",
    "I prioritize maintainable codebases, thoughtful typography, and seamless interactivity. Incorporating modern agentic workflows (Cursor AI, Antigravity, Claude Code), every interface is engineered to scale smoothly and deliver exceptional user experiences.",
  ],
  quote: "Structure, security, and performance operate in sync.",
  facts: [
    { icon: "pin" as IconName, label: "Location", value: site.location },
    {
      icon: "graduation" as IconName,
      label: "Education",
      value: `${academics.diploma.shortDegree}`,
    },
    {
      icon: "building" as IconName,
      label: "Institute",
      value: academics.diploma.institute,
    },
    {
      icon: "briefcase" as IconName,
      label: "Focus",
      value: "Full-stack web development",
    },
    {
      icon: "sparkles" as IconName,
      label: "Status",
      value: "Open to internships & junior roles",
    },
  ],
  pillars: [
    {
      icon: "code" as IconName,
      title: "MERN Web Apps",
      description:
        "Production-quality full-stack architectures with modular API routes, resilient MongoDB data persistence, and reactive React frontends.",
      tag: "MERN",
    },
    {
      icon: "layers" as IconName,
      title: "Next.js Engineering",
      description:
        "Server-side rendering, Server Components, caching & ISR, optimized layouts, and lightning-fast bundle delivery.",
      tag: "NEXT.JS",
    },
    {
      icon: "sparkles" as IconName,
      title: "AI-Driven Workflows",
      description:
        "Agentic development with Cursor, Antigravity, Claude Code, and local LLM integration with Ollama for rapid full-stack delivery.",
      tag: "AI TOOLS",
    },
    {
      icon: "monitor" as IconName,
      title: "Editorial Aesthetics",
      description:
        "Crafting memorable, cinematic visual identities without reliance on generic templates or gratuitous gradients.",
      tag: "UI DESIGN",
    },
  ],
}

/* ── 7. EDUCATION SECTION ───────────────────────────────────────────── */
export type EducationStatus = "Ongoing" | "Completed"

export type EducationItem = {
  status: EducationStatus
  period: string
  title: string
  institution: string
  location: string
  description: string
  highlights: string[]
  icon: IconName
}

export const education: {
  kicker: string
  title: string
  description: string
  items: EducationItem[]
  learning: {
    title: string
    subtitle: string
    items: string[]
    note: string
  }
} = {
  kicker: "Education",
  title: "Learning the fundamentals, building beyond them.",
  description:
    "A formal foundation in computer science, paired with self-directed practice through real projects.",
  items: [
    {
      status: academics.diploma.status,
      period: academics.diploma.period,
      title: academics.diploma.degree,
      institution: academics.diploma.institute,
      location: "Rangpur, Bangladesh",
      description:
        "Currently in the 6th semester, studying programming, data structures, database management, networking, and software engineering fundamentals — while applying them to full-stack projects outside class.",
      highlights: [
        "Programming & OOP",
        "Data structures",
        "DBMS & networking",
        "Software engineering",
      ],
      icon: "graduation",
    },
    {
      status: academics.ssc.status,
      period: academics.ssc.period,
      title: academics.ssc.degree,
      institution: academics.ssc.institute,
      location: "Rangpur, Bangladesh",
      description:
        "Completed SSC in the 2023 batch, building the academic base in mathematics, science, and communication that I still rely on today.",
      highlights: ["SSC · 2023", "Kochashahar, Rangpur"],
      icon: "school",
    },
  ],
  learning: {
    title: "Always in beta",
    subtitle: "What I'm learning next",
    items: [
      "Next.js App Router & server components",
      "TypeScript patterns for larger apps",
      "System design fundamentals",
      "Testing & clean architecture",
    ],
    note: "I learn by shipping, breaking, fixing, and repeating.",
  },
}

/* ── 8. SKILLS SECTION ──────────────────────────────────────────────── */
export type SkillAccent = "cyan" | "violet" | "emerald" | "amber"

export type SkillGroup = {
  icon: IconName
  title: string
  description: string
  accent: SkillAccent
  skills: string[]
}

export const skills: {
  kicker: string
  title: string
  description: string
  groups: SkillGroup[]
  extras: string[]
} = {
  kicker: "Skills & tools",
  title: "The stack I use to ship end to end.",
  description:
    "Not a list of everything I've touched — just the tools I reach for when building a complete product.",
  groups: [
    {
      icon: "code",
      title: "Frontend",
      description:
        "Interfaces that feel instant, responsive, and intentional.",
      accent: "cyan",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Framer Motion",
      ],
    },
    {
      icon: "server",
      title: "Backend",
      description:
        "APIs designed to be predictable, secure, and easy to extend.",
      accent: "violet",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT authentication",
        "Middleware",
        "Input validation",
      ],
    },
    {
      icon: "database",
      title: "Database",
      description:
        "Data models that keep products consistent as they grow.",
      accent: "emerald",
      skills: [
        "MongoDB",
        "Mongoose",
        "Schema design",
        "CRUD operations",
        "Aggregation",
      ],
    },
    {
      icon: "wrench",
      title: "Tools & workflow",
      description: "The everyday setup behind how I build and ship.",
      accent: "amber",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Figma",
        "npm",
        "Vite",
      ],
    },
  ],
  extras: [
    "Responsive design",
    "API integration",
    "Authentication flows",
    "State management",
    "Git workflow",
    "Deployment",
  ],
}

/* ── 9. PROJECTS SECTION ────────────────────────────────────────────── */
export type ProjectAccent = "cyan" | "violet" | "amber"

export type Project = {
  id: string
  icon: IconName
  title: string
  tagline: string
  description: string
  techs: string[]
  tags: string[]
  live: string
  github: string
  domain: string
  accent: ProjectAccent
  featured?: boolean
  /* Card-এর উপরের preview image — ফাইলটা public/images/projects/ এ রাখো */
  image: string
}

export const projectsSection = {
  kicker: "Selected work",
  title: "Projects built to solve real problems.",
  description:
    "A small, honest collection of work that shows how I think about interfaces, state, and user experience.",
}

/* নতুন project add করতে: নিচের যেকোনো একটা block কপি করে বসাও।
   `image`-এ public/images/projects/ এর ভেতরের ফাইল path দাও। */
export const projects: Project[] = [
  {
    id: "Bazar-Dor",
    icon: "wallet",
    title: "Bazar Dor (বাজার দর)",
    tagline: "Daily Commodity Price Tracker & Market Analytics",
    description:
      "A specialized Bengali web platform that tracks daily grocery and essential commodity market rates (চাল, ডাল, তেল, সবজি, মাছ, মাংস). Provides transparent market analytics, price change indicators with percentage tags (আজ দাম বেড়েছে/কমেছে), and itemized search to empower consumers.",
    techs: [
      "Next.js",
      "TypeScript",
      "State Management",
      "Tailwind CSS",
      "DaisyUI",
    ],
    tags: ["nextjs", "typescript", "tailwind"],
    live: "https://a7-bazar-dor-eight.vercel.app/",
    github: "https://github.com/Likhon-25/Bazar_Dor",
    domain: "https://github.com/Likhon-25/Bazar_Dor",
    accent: "cyan",
    image: "/images/projects/Project-2.png",
  },
  {
    id: "bangla-news-24",
    icon: "book",
    title: "Bangla News 24",
    tagline: "Real-Time Digital Journalism & News Aggregator",
    description:
      "A modern digital journalism portal engineered for rapid content delivery and breaking news reporting. Powered by Next.js, featuring live breaking news tickers (সর্বশেষ সংবাদ), dynamic multi-category routing (রাজনীতি, বিশ্ব, অর্থনীতি, প্রযুক্তি), top-read rankings, and responsive Bengali typography.",
    techs: ["Next.js","React", "JavaScript", "Tailwind CSS", "REST API"],
    tags: ["nextjs", "javascript", "tailwind"],
    live: "https://bangla-news-24-phi.vercel.app/",
    github: "https://github.com/Likhon-25/bangla-news-24",
    domain: "https://github.com/Likhon-25/bangla-news-24",
    accent: "violet",
    image: "/images/projects/Project-1.png",
  },
    {
    id: "fit-log",
    icon: "utensils",
    title: "FITLOG",
    tagline:
      "Minimalist Workout Companion & Routine Planner",
    description:
      "A dark-themed gym companion and workout planner designed for athletes and lifters. Features an illustrated exercise library covering 12 major lifts, custom routine building, and interactive workout set tracking.",
    techs: ["React","Javascript(ES6+)", "Tailwind CSS"],
    tags: ["javascript", "tailwind"],
    live: "https://fitlog-blond.vercel.app/",
    github: "https://github.com/Likhon-25/FITLOG",
    domain: "https://github.com/Likhon-25/FITLOG",
    accent: "amber",
    featured: true,
    image: "/images/projects/fitlog.png",
  },
]

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Next.js", value: "nextjs" },
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" },
  { label: "Tailwind CSS", value: "tailwind" },
]

/* ── 10. CONTACT SECTION ────────────────────────────────────────────── */
export const contact = {
  kicker: "Contact",
  title: "Have an idea? Let's build it well.",
  description:
    "I'm open to internships, junior full-stack roles, freelance work, and interesting collaborations. Tell me what you're working on — I usually reply within a day.",
  note: "Prefer email? Write to me directly — the form lands in the same inbox.",
  responseTime: "Usually replies within 24 hours",
  links: [
    {
      icon: "mail" as IconName,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "github" as IconName,
      label: "GitHub",
      value: "github.com/Likhon-25",
      href: "https://github.com/Likhon-25",
    },
    {
      icon: "linkedin" as IconName,
      label: "LinkedIn",
      value: "in/likhon-mondol",
      href: "https://www.linkedin.com/in/likhon-mondol/",
    },
    {
      icon: "facebook" as IconName,
      label: "Facebook",
      value: "Facebook profile",
      href: "https://www.facebook.com/profile.php?id=100091255685543",
    },
  ],
}

/* ── 11. FOOTER + SEO ───────────────────────────────────────────────── */
export const footer = {
  blurb:
    "Full-stack developer from Rangpur, building thoughtful web products with React, Next.js, TypeScript, Node.js, and MongoDB.",
  builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
}

export const seo = {
  title: "Likhon Mondol — Full-Stack Developer",
  description:
    "Likhon Mondol is a full-stack developer from Rangpur, Bangladesh, building modern web applications with React, Next.js, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Likhon Mondol",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Rangpur",
    "Bangladesh",
  ],
}
