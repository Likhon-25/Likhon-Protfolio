import type { IconName } from "@/components/ui/Icon"
import { academics } from "@/data/education"
import { site } from "@/data/site"

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
      value: academics.diploma.shortDegree,
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
      value: site.availability,
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
