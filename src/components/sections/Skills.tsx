import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, type SkillAccent } from "@/data/portfolio";

/**
 * SKILLS — 03
 * Four grouped cards, one per layer of the stack, plus a strip of extras.
 * Content edit: src/data/portfolio.ts → skills
 */
const accentStyles: Record<
  SkillAccent,
  { icon: string; glow: string; bar: string; count: string }
> = {
  cyan: {
    icon: "bg-cyan-400/10 text-cyan-600 ring-cyan-400/15 dark:text-cyan-300",
    glow: "bg-cyan-400/15",
    bar: "from-cyan-400 to-sky-500",
    count: "text-cyan-600 dark:text-cyan-300",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600 ring-violet-500/15 dark:text-violet-300",
    glow: "bg-violet-500/15",
    bar: "from-violet-500 to-indigo-500",
    count: "text-violet-600 dark:text-violet-300",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/15 dark:text-emerald-300",
    glow: "bg-emerald-500/15",
    bar: "from-emerald-400 to-teal-500",
    count: "text-emerald-600 dark:text-emerald-300",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600 ring-amber-500/15 dark:text-amber-300",
    glow: "bg-amber-500/15",
    bar: "from-amber-400 to-orange-500",
    count: "text-amber-600 dark:text-amber-300",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-pad scroll-mt-24">
      <SectionHeading
        index="03"
        kicker={skills.kicker}
        title={skills.title}
        description={skills.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skills.groups.map((group, index) => {
          const accent = accentStyles[group.accent];

          return (
            <Reveal key={group.title} delay={0.06 * index} className="h-full">
              <article className="card group relative h-full overflow-hidden p-5 sm:p-6">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${accent.glow}`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${accent.icon}`}
                  >
                    <Icon name={group.icon} className="h-4 w-4" />
                  </span>

                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${accent.count}`}
                  >
                    {String(group.skills.length).padStart(2, "0")} tools
                  </span>
                </div>

                <h3 className="relative mt-4 font-display text-base font-semibold tracking-tight text-main">
                  {group.title}
                </h3>
                <p className="relative mt-1.5 text-[13px] leading-6 text-muted">
                  {group.description}
                </p>

                <span
                  aria-hidden="true"
                  className={`relative mt-4 block h-px w-full bg-gradient-to-r ${accent.bar} opacity-25`}
                />

                <ul className="relative mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="chip">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Extras */}
      <Reveal delay={0.1}>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-line/10 bg-surface/30 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
            <Icon name="layers" className="h-3.5 w-3.5 text-accent" />
            Also comfortable with
          </p>

          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {skills.extras.map((extra) => (
              <li
                key={extra}
                className="flex items-center gap-2 text-[12px] text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {extra}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
