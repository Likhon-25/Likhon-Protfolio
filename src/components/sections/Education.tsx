import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, type EducationItem } from "@/data/education";

/**
 * EDUCATION — 02
 * Timeline of academic history on the left, "always in beta" panel on the right.
 * Content edit: src/data/education.ts → education
 */
export default function Education() {
  return (
    <section id="education" className="section-shell section-pad scroll-mt-24">
      <SectionHeading
        index="02"
        kicker={education.kicker}
        title={education.title}
        description={education.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-8">
        {/* Timeline */}
        <ol className="relative space-y-4 sm:space-y-5">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-[43px] top-8 hidden w-px bg-gradient-to-b from-accent/40 via-line/20 to-transparent sm:block"
          />

          {education.items.map((item, index) => (
            <li key={item.title} className="relative">
              <Reveal delay={0.06 * index}>
                <EducationCard item={item} index={index} />
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Currently learning */}
        <Reveal delay={0.12} className="lg:sticky lg:top-24 lg:self-start">
          <aside className="card relative flex flex-col overflow-hidden p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent2/15 blur-3xl"
            />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="eyebrow">{education.learning.subtitle}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-main sm:text-xl">
                  {education.learning.title}
                </h3>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-accent ring-1 ring-line/10">
                <Icon name="terminal" className="h-4 w-4" />
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {education.learning.items.map((entry) => (
                <li key={entry} className="flex items-start gap-2.5">
                  <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon name="check" className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-[13.5px] leading-5 text-muted">
                    {entry}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-line/10 pt-5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              {education.learning.note}
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   One timeline entry
   ═══════════════════════════════════════════════════════════════════════ */
function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const ongoing = item.status === "Ongoing";

  const statusStyle = ongoing
    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
    : "border-line/20 bg-surface2/70 text-muted";

  return (
    <article className="card group relative p-5 sm:p-6 sm:pl-[5.25rem]">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className="absolute left-4 top-6 hidden h-[54px] w-[54px] place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-accent ring-1 ring-line/10 transition duration-300 group-hover:from-cyan-400/25 group-hover:to-violet-500/25 sm:grid"
      >
        <Icon name={item.icon} className="h-5 w-5" />
      </span>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] ${statusStyle}`}
        >
          {ongoing && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          )}
          {item.status}
        </span>

        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
          <Icon name="calendar" className="h-3 w-3" />
          {item.period}
        </span>

        <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-dim">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-3.5 font-display text-base font-semibold leading-snug tracking-tight text-main sm:text-lg">
        {item.title}
      </h3>

      <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
        <span className="font-medium text-main/90">{item.institution}</span>
        <span className="h-1 w-1 rounded-full bg-dim/50" />
        <span className="inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-dim">
          <Icon name="pin" className="h-3 w-3" />
          {item.location}
        </span>
      </p>

      <p className="mt-3 text-[13.5px] leading-6 text-muted">
        {item.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {item.highlights.map((highlight) => (
          <li key={highlight}>
            <span className="chip">{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
