import type { IconName } from "@/components/ui/Icon"

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

export const education = {
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
      icon: "graduation" as IconName,
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
      icon: "school" as IconName,
    },
  ] satisfies EducationItem[],
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
