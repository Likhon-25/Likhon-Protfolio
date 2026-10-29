import type { IconName } from "@/components/ui/Icon"

export type SkillAccent = "cyan" | "violet" | "emerald" | "amber"

export type SkillGroup = {
  icon: IconName
  title: string
  description: string
  accent: SkillAccent
  skills: string[]
}

export const skills = {
  kicker: "Skills & tools",
  title: "The stack I use to ship end to end.",
  description:
    "Not a list of everything I've touched — just the tools I reach for when building a complete product.",
  groups: [
    {
      icon: "code" as IconName,
      title: "Frontend",
      description: "Interfaces that feel instant, responsive, and intentional.",
      accent: "cyan" as const,
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
      icon: "server" as IconName,
      title: "Backend",
      description: "APIs designed to be predictable, secure, and easy to extend.",
      accent: "violet" as const,
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
      icon: "database" as IconName,
      title: "Database",
      description: "Data models that keep products consistent as they grow.",
      accent: "emerald" as const,
      skills: [
        "MongoDB",
        "Mongoose",
        "Schema design",
        "CRUD operations",
        "Aggregation",
      ],
    },
    {
      icon: "wrench" as IconName,
      title: "Tools & workflow",
      description: "The everyday setup behind how I build and ship.",
      accent: "amber" as const,
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
  ] satisfies SkillGroup[],
  extras: [
    "Responsive design",
    "API integration",
    "Authentication flows",
    "State management",
    "Git workflow",
    "Deployment",
  ],
}
