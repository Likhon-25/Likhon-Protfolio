"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { hero, site, socials, stats } from "@/data/portfolio";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * HERO — first screen
 * বাম দিকে intro + CTA, ডান দিকে portrait card.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");

  /* Typewriter for "I build ..." */
  useEffect(() => {
    if (reduceMotion) {
      setTyped(hero.typewriterWords[0] ?? "");
      return;
    }

    const words = hero.typewriterWords;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex] ?? "";

      if (!deleting) {
        charIndex += 1;
        setTyped(word.slice(0, charIndex));

        if (charIndex >= word.length) {
          deleting = true;
          timer = setTimeout(tick, 1700);
          return;
        }
      } else {
        charIndex -= 1;
        setTyped(word.slice(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      timer = setTimeout(tick, deleting ? 42 : 82);
    };

    timer = setTimeout(tick, 750);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const fadeUp = (delay: number) => ({
    /* Keep the initial state identical on server + client so hydration
       matches; reduced motion only shortens the timing. */
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* ═══════════════ Left: content ═══════════════ */}
          <div>
            <motion.a
              href="#contact"
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-accent3/25 bg-accent3/10 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent3 transition hover:bg-accent3/15"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent3" />
              </span>
              {site.availability}
            </motion.a>

            <motion.p
              {...fadeUp(0.06)}
              className="mt-7 font-mono text-[11px] uppercase tracking-[0.24em] text-dim"
            >
              {hero.greeting}{" "}
              <span className="text-main">{site.name}</span>
            </motion.p>

            <motion.h1
              id="hero-title"
              {...fadeUp(0.1)}
              className="mt-4 font-display text-[clamp(2.9rem,7.4vw,5.3rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-main"
            >
              Full-stack
              <br />
              <span className="text-gradient">engineer.</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.16)}
              className="mt-5 flex min-h-7 flex-wrap items-center gap-x-2 font-mono text-sm text-muted sm:text-[15px]"
            >
              <span className="text-dim">&gt;</span>
              <span>I build</span>
              <span className="font-medium text-accent">
                {typed || "\u00A0"}
              </span>
              <span className="inline-block h-[1.05em] w-[2px] animate-blink bg-accent align-middle" />
            </motion.div>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted"
            >
              {hero.intro}
            </motion.p>

            <motion.div
              {...fadeUp(0.26)}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <a href="#projects" className="btn btn-primary">
                Explore my work
                <Icon name="arrowUpRight" />
              </a>
              <a
                href={site.resumeUrl}
                download="Likhon_Mondol_Resume.pdf"
                className="btn btn-ghost"
              >
                <Icon name="download" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-surface/50 text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon name={social.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <span className="hidden h-4 w-px bg-line/20 sm:block" />

              <a
                href={`mailto:${site.email}`}
                className="link-arrow text-xs"
              >
                Say hello
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </a>

              <span className="hidden h-4 w-px bg-line/20 sm:block" />

              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-dim">
                <Icon name="pin" className="h-3 w-3" />
                {site.location}
              </span>
            </motion.div>
          </div>

          {/* ═══════════════ Right: portrait ═══════════════ */}
          <Portrait reduceMotion={Boolean(reduceMotion)} />
        </div>

        {/* ═══════════════ Stats ═══════════════ */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 sm:mt-16 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-page/85 px-5 py-5 backdrop-blur sm:px-6 sm:py-6"
            >
              <div className="text-gradient font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-dim">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Portrait card + floating mini cards
   ───────────────────────────────────────────────────────────────────── */
function Portrait({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : 0.22,
        ease,
      }}
      className="relative mx-auto w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[420px]"
    >
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.22),transparent_55%)] blur-2xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#0a0f1c]">
          <Image
            src="/images/profile.jpg"
            alt="Portrait of Likhon Mondol"
            fill
            preload
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 380px, 420px"
            className="object-cover object-top transition duration-700 hover:scale-[1.04]"
          />

          {/* Photo overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/10 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

          {/* Top chips */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
            <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
              MERN
            </span>
            <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
              TypeScript
            </span>
          </div>

          {/* Bottom identity card */}
          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/45 p-3.5 backdrop-blur-md sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-display text-base font-semibold text-white sm:text-lg">
                  {site.name}
                </p>
                <p className="mt-0.5 truncate font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/55">
                  {site.role}
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — clean code */}
      <div className="absolute -left-4 top-[22%] hidden animate-float items-center gap-2.5 rounded-xl border border-line/15 bg-page/85 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-md sm:flex lg:-left-8">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
          <Icon name="code" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-main">Clean code</p>
          <p className="font-mono text-[9px] text-dim">front → back</p>
        </div>
      </div>

      {/* Floating card — education */}
      <div className="absolute -right-4 bottom-[18%] hidden animate-float items-center gap-2.5 rounded-xl border border-line/15 bg-page/85 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-md [animation-delay:-2.5s] sm:flex lg:-right-8">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400/10 text-amber-300">
          <Icon name="graduation" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-main">6th semester</p>
          <p className="font-mono text-[9px] text-dim">CST · RIIT</p>
        </div>
      </div>
    </motion.div>
  );
}
