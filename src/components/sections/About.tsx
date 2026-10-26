import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/portfolio";

/**
 * ABOUT — 01
 * বাম দিকে story, ডান দিকে quick facts, নিচে ৩টা strength card.
 * Content edit: src/data/portfolio.ts → about
 */
export default function About() {
  const pillarStyles: Record<string, string> = {
    code: "bg-cyan-500/10 text-cyan-600 ring-cyan-500/15 dark:text-cyan-300",
    server:
      "bg-violet-500/10 text-violet-600 ring-violet-500/15 dark:text-violet-300",
    bulb: "bg-amber-500/10 text-amber-600 ring-amber-500/15 dark:text-amber-300",
  };

  return (
    <section id="about" className="section-shell section-pad scroll-mt-24">
      <SectionHeading
        index="01"
        kicker={about.kicker}
        title={about.title}
        description={about.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        {/* ── Story ── */}
        <div>
          <Reveal delay={0.05}>
            <div className="space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[15px] leading-[1.8] text-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="relative mt-7 overflow-hidden rounded-2xl border border-accent/15 bg-accent/[0.045] p-5 sm:p-6">
              <Icon
                name="quote"
                className="absolute right-4 top-4 h-8 w-8 text-accent/15"
              />
              <p className="relative max-w-lg font-display text-[15px] font-medium leading-7 text-main sm:text-base">
                “{about.quote}”
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* ── Quick facts ── */}
        <Reveal delay={0.1}>
          <div className="card h-full p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">At a glance</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-main">
                  Quick facts
                </h3>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-accent ring-1 ring-line/10">
                <Icon name="sparkles" className="h-4 w-4" />
              </span>
            </div>

            <dl className="mt-5 divide-y divide-line/10">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface2/70 text-muted ring-1 ring-line/10">
                    <Icon name={fact.icon} className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-dim">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-[13px] font-medium leading-5 text-main">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      {/* ── Strengths ── */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {about.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.08 * index} className="h-full">
            <article className="card group h-full p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${
                    pillarStyles[pillar.icon] ??
                    "bg-accent/10 text-accent ring-accent/15"
                  }`}
                >
                  <Icon name={pillar.icon} className="h-4 w-4" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-main">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-6 text-muted">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
