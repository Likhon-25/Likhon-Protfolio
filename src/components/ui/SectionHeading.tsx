import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

/**
 * প্রতিটা section-এর উপরে একই রকম heading রাখার জন্য common component.
 * index = "01", kicker = "About me", title = বড় headline
 */
export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={centered ? "flex flex-col items-center text-center" : undefined}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-widest text-dim">
          {index}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-accent/70 to-transparent" />
        <span className="eyebrow">{kicker}</span>
      </div>

      <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-main sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
