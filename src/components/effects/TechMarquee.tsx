import { hero } from "@/data/portfolio";

/** Hero-র নিচে চলমান tech stack strip. */
export default function TechMarquee() {
  const items = [...hero.stack, ...hero.stack];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line/10 bg-soft/40 py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-page to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-page to-transparent" />

      <div className="flex w-max animate-marquee items-center">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 pr-8 font-mono text-[11px] uppercase tracking-[0.2em] text-dim"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
