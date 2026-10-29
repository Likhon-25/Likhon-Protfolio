import type { IconName } from "@/components/ui/Icon"

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
  image: string
}

export const projectsSection = {
  kicker: "Selected work",
  title: "Projects built to solve real problems.",
  description:
    "A small, honest collection of work that shows how I think about interfaces, state, and user experience.",
}

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
    techs: ["Next.js", "React", "JavaScript", "Tailwind CSS", "REST API"],
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
    tagline: "Minimalist Workout Companion & Routine Planner",
    description:
      "A dark-themed gym companion and workout planner designed for athletes and lifters. Features an illustrated exercise library covering 12 major lifts, custom routine building, and interactive workout set tracking.",
    techs: ["React", "Javascript(ES6+)", "Tailwind CSS"],
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
