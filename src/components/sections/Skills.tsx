import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, type SkillAccent } from "@/data/skills";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { FaCode, FaDatabase, FaKey, FaLayerGroup, FaPlug } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

/**
 * SKILLS — 03
 * Four grouped cards, one per layer of the stack, plus a strip of extras.
 * Content edit: src/data/skills.ts → skills
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

const skillIcons = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#E5E7EB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#663399" },
  "Framer Motion": { icon: SiFramer, color: "#A855F7" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#A3A3A3" },
  "REST APIs": { icon: FaPlug, color: "#22C55E" },
  "JWT authentication": { icon: SiJsonwebtokens, color: "#D63AFF" },
  Middleware: { icon: FaLayerGroup, color: "#8B5CF6" },
  "Input validation": { icon: FaKey, color: "#F59E0B" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  "Schema design": { icon: FaDatabase, color: "#10B981" },
  "CRUD operations": { icon: FaDatabase, color: "#06B6D4" },
  Aggregation: { icon: FaDatabase, color: "#14B8A6" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#A3A3A3" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Vercel: { icon: SiVercel, color: "#A3A3A3" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  npm: { icon: SiNpm, color: "#CB3837" },
  Vite: { icon: SiVite, color: "#8B5CF6" },
};

const getSkillIcon = (skill: string) =>
  skillIcons[skill as keyof typeof skillIcons] ?? {
    icon: FaCode,
    color: "#22D3EE",
  };

export default function Skills() {
  const totalTools = skills.groups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  return (
    <section id="skills" className="section-shell section-pad scroll-mt-24">
      <SectionHeading
        index="03"
        kicker={skills.kicker}
        title={skills.title}
        description={skills.description}
      />

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-col gap-3 border-y border-line/10 py-3 sm:flex-row sm:items-center">
          <p className="mr-auto flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-dim">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent3" />
            Core stack active
          </p>
          <div className="flex gap-2">
            <span className="rounded-full border border-line/10 bg-surface/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              {String(skills.groups.length).padStart(2, "0")} domains
            </span>
            <span className="rounded-full border border-line/10 bg-surface/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              {String(totalTools).padStart(2, "0")} tools
            </span>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.groups.map((group, index) => {
          const accent = accentStyles[group.accent];

          return (
            <Reveal key={group.title} delay={0.06 * index} className="h-full">
              <article className="card group relative h-full overflow-hidden p-5 sm:p-7">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${accent.glow}`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${accent.icon}`}
                    >
                      <Icon name={group.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                      Layer {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${accent.count}`}
                  >
                    {String(group.skills.length).padStart(2, "0")} tools
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-main sm:text-xl">
                  {group.title}
                </h3>
                <p className="relative mt-1.5 text-[13px] leading-6 text-muted">
                  {group.description}
                </p>

                <span
                  aria-hidden="true"
                  className={`relative mt-5 block h-px w-full bg-gradient-to-r ${accent.bar} opacity-35`}
                />

                <ul className="relative mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skill}>
                      {(() => {
                        const { icon: SkillIcon, color } = getSkillIcon(skill);
                        return (
                          <div className="group/tool flex min-h-12 items-center gap-2.5 rounded-xl border border-line/8 bg-page/35 px-3 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-line/20 hover:bg-page/60">
                            <span
                              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1"
                              style={{
                                color,
                                backgroundColor: `${color}18`,
                                borderColor: `${color}35`,
                              }}
                            >
                              <SkillIcon className="h-4 w-4" />
                            </span>
                            <span className="text-[12px] font-medium leading-4 text-main/85">
                              {skill}
                            </span>
                            <span className="ml-auto hidden font-mono text-[8px] text-dim/50 sm:block lg:hidden xl:block">
                              {String(skillIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                        );
                      })()}
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
        <div className="mt-4 overflow-hidden rounded-2xl border border-line/10 bg-surface/30">
          <div className="flex items-center gap-1.5 border-b border-line/10 px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            <span className="ml-3 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
              capabilities.sh
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              <span className="mr-2 text-accent">$</span>
              list --comfortable-with
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {skills.extras.map((extra, index) => (
                <li
                  key={extra}
                  className="flex items-center gap-2.5 rounded-lg border border-line/8 bg-page/35 px-3 py-2.5 text-[12px] text-muted transition hover:border-accent/20 hover:text-main"
                >
                  <span className="font-mono text-[8.5px] text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{extra}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
