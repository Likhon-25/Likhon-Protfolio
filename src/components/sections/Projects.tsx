"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  projectFilters,
  projects,
  projectsSection,
  type Project,
  type ProjectAccent,
} from "@/data/portfolio";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const accentStyles: Record<
  ProjectAccent,
  { icon: string; glow: string; line: string; badge: string }
> = {
  cyan: {
    icon: "bg-cyan-400/10 text-cyan-600 ring-cyan-400/15 dark:text-cyan-300",
    glow: "bg-cyan-400/15",
    line: "from-cyan-400 to-sky-500",
    badge: "border-cyan-400/25 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600 ring-violet-500/15 dark:text-violet-300",
    glow: "bg-violet-500/15",
    line: "from-violet-500 to-indigo-500",
    badge:
      "border-violet-500/25 bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600 ring-amber-500/15 dark:text-amber-300",
    glow: "bg-amber-500/15",
    line: "from-amber-400 to-orange-500",
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
};

/**
 * PROJECTS — 04
 * Filterable project grid. Filters come from `projectFilters`,
 * tags on each project decide which filter it belongs to.
 * Content edit: src/data/portfolio.ts → projects / projectFilters
 */
export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-shell section-pad scroll-mt-24">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          index="04"
          kicker={projectsSection.kicker}
          title={projectsSection.title}
          description={projectsSection.description}
        />

        <Reveal delay={0.08} className="shrink-0">
          <div
            role="group"
            aria-label="Filter projects by technology"
            className="flex flex-wrap items-center gap-1.5"
          >
            {projectFilters.map((option) => {
              const active = filter === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFilter(option.value)}
                  aria-pressed={active}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active
                      ? "text-page"
                      : "border border-line/12 text-muted hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.35, ease }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-line/10 bg-surface/30 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="text-[13px] leading-6 text-muted">
            More experiments live on GitHub — including smaller builds that
            never made it to this list.
          </p>
          <a
            href="https://github.com/Likhon-25"
            target="_blank"
            rel="noreferrer"
            className="link-arrow shrink-0 text-xs"
          >
            <Icon name="github" className="h-3.5 w-3.5" />
            Browse all repositories
            <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   One project card
   ═══════════════════════════════════════════════════════════════════════ */
function ProjectCard({ project }: { project: Project }) {
  const accent = accentStyles[project.accent];

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line} opacity-50`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90 ${accent.glow}`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${accent.icon}`}
        >
          <Icon name={project.icon} className="h-4 w-4" />
        </span>

        {project.featured && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] ${accent.badge}`}
          >
            <Icon name="sparkles" className="h-2.5 w-2.5" />
            Featured
          </span>
        )}
      </div>

      <h3 className="relative mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-main">
        {project.title}
      </h3>
      <p className="relative mt-1 text-[13px] font-medium leading-5 text-accent/90">
        {project.tagline}
      </p>
      <p className="relative mt-3 text-[13.5px] leading-6 text-muted">
        {project.description}
      </p>

      <ul className="relative mt-4 flex flex-wrap gap-1.5">
        {project.techs.map((tech) => (
          <li key={tech}>
            <span className="chip">{tech}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-line/10 pt-4">
        <span
          title={project.domain}
          className="min-w-0 flex-1 truncate font-mono text-[10px] tracking-[0.04em] text-dim"
        >
          {project.domain}
        </span>

        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code on GitHub`}
            className="grid h-8 w-8 place-items-center rounded-full border border-line/15 bg-surface/50 text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            <Icon name="github" className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open the live ${project.title} site`}
            className="inline-flex items-center gap-1.5 rounded-full border border-line/15 bg-surface/50 px-3 py-1.5 text-[11px] font-medium text-main transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            Live
            <Icon name="external" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
