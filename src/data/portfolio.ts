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
  role: "Full-Stack Engineer",
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
    "I'm a full-stack developer who enjoys turning ideas into complete web products — thoughtful React interfaces, dependable Node.js APIs, and data models that stay clean as things grow. Currently in my 6th semester of Computer Science & Technology.",
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
  { value: "03+", label: "Projects shipped" },
  { value: "06", label: "Semester · CST" },
  { value: "12+", label: "Tools & technologies" },
  { value: "100%", label: "Self-driven learning" },
]

/* ── 6. ABOUT SECTION ───────────────────────────────────────────────── */
export const about = {
  kicker: "About me",
  title: "A developer who cares about the whole picture.",
  description:
    "I like the part most people skip: understanding how the interface, the API, and the database actually fit together.",
  paragraphs: [
    "I'm Likhon Mondol, a Computer Science & Technology student and full-stack web developer from Rangpur, Bangladesh. I enjoy the entire build — from sketching an interface to designing the API and data model behind it.",
    "My core stack is the MERN ecosystem with TypeScript and Next.js. I care about clean architecture, accessible UI, and the small details that make a product feel effortless to use.",
    "Right now I'm in my 6th semester of diploma, sharpening both sides of my skill set through real projects: front-end craft and back-end reliability.",
  ],
  quote:
    "Good software isn't just code that runs. It's code someone else can understand, extend, and trust.",
  facts: [
    { icon: "pin" as IconName, label: "Location", value: site.location },
    {
      icon: "graduation" as IconName,
      label: "Education",
      value: `${academics.diploma.shortDegree} · ${academics.diploma.semester}`,
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
      title: "Front-end craft",
      description:
        "Responsive, accessible interfaces built with React, Next.js, and Tailwind CSS — designed to feel fast on every screen.",
      tag: "UI / UX",
    },
    {
      icon: "server" as IconName,
      title: "Back-end thinking",
      description:
        "REST APIs, authentication, and data models built with Node.js, Express, and MongoDB — predictable and easy to extend.",
      tag: "API / DATA",
    },
    {
      icon: "bulb" as IconName,
      title: "Product mindset",
      description:
        "I ask why before how, test the edge cases, and ship things that actually work for the person using them.",
      tag: "SHIP / LEARN",
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
}

export const projectsSection = {
  kicker: "Selected work",
  title: "Projects built to solve real problems.",
  description:
    "A small, honest collection of work that shows how I think about interfaces, state, and user experience.",
}

export const projects: Project[] = [
  {
    id: "modern-hearth",
    icon: "utensils",
    title: "Modern Hearth Restaurant",
    tagline:
      "A premium restaurant experience, from the first scroll to the last dish.",
    description:
      "A fully responsive restaurant website built around a warm visual identity, smooth motion, and a menu-first layout. Designed to make a local restaurant feel premium on every screen size.",
    techs: ["React", "Tailwind CSS", "Framer Motion"],
    tags: ["react", "tailwind"],
    live: "https://modern-hearth-resturent.vercel.app/",
    github: "https://github.com/Likhon-25/Modern-Hearth-Resturent",
    domain: "modern-hearth-resturent.vercel.app",
    accent: "amber",
    featured: true,
  },
  {
    id: "payoo",
    icon: "wallet",
    title: "Payoo Mobile Banking",
    tagline: "A mobile banking dashboard with real transaction flows.",
    description:
      "A client-side banking simulation with balance tracking, fund transfers, transaction history, and a clean dashboard. Built in vanilla JavaScript to strengthen state management and DOM skills without a framework.",
    techs: ["JavaScript", "Tailwind CSS", "DaisyUI"],
    tags: ["javascript", "tailwind"],
    live: "https://likhon-25.github.io/Payoo-Mobile-Bank/",
    github: "https://github.com/Likhon-25/Payoo-Mobile-Bank",
    domain: "likhon-25.github.io/Payoo-Mobile-Bank",
    accent: "cyan",
  },
  {
    id: "english-window",
    icon: "book",
    title: "English Window",
    tagline: "A vocabulary app that makes practice feel like play.",
    description:
      "An interactive English learning platform with flashcards, categorised word banks, and lightweight game mechanics. Focused on a distraction-free learning flow and a mobile-first interface.",
    techs: ["JavaScript ES6", "Tailwind CSS", "DaisyUI"],
    tags: ["javascript", "tailwind"],
    live: "https://likhon-25.github.io/English_Janala_App/",
    github: "https://github.com/Likhon-25/English_Janala_App",
    domain: "likhon-25.github.io/English_Janala_App",
    accent: "violet",
  },
]

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "React", value: "react" },
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
  title: "Likhon Mondol — Full-Stack Engineer",
  description:
    "Likhon Mondol is a full-stack engineer from Rangpur, Bangladesh, building modern web applications with React, Next.js, TypeScript, Node.js, and MongoDB.",
  keywords: [
    "Likhon Mondol",
    "Full-Stack Engineer",
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
