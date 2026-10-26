"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Icon from "@/components/ui/Icon";
import { navItems, site, socials } from "@/data/portfolio";

/**
 * NAVBAR
 * ─ Desktop: floating glass bar + active-section pill
 * ─ Mobile: hamburger → dropdown sheet
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* Glass background after a small scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock page scroll + close on Escape while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative z-50 mt-3 flex h-14 items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-line/12 bg-page/75 shadow-xl shadow-black/10 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label={`${site.name} — back to top`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-display text-[13px] font-bold tracking-tight text-white shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-105">
              {site.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[13.5px] font-semibold text-main">
                {site.name}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                {site.role}
              </span>
            </span>
          </a>

          {/* ── Desktop links ── */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? "text-main" : "text-muted hover:text-main"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-surface2/80 ring-1 ring-line/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Right controls ── */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.resumeUrl}
              download="Likhon_Mondol_Resume.pdf"
              className="btn btn-ghost hidden !px-4 !py-2 text-xs sm:inline-flex"
            >
              <Icon name="download" className="!h-3.5 !w-3.5" />
              Resume
            </a>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-surface/60 text-muted transition hover:border-accent/40 hover:text-accent lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 h-full w-full cursor-default bg-page/70 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
              className="glass-strong absolute inset-x-4 top-[78px] overflow-hidden rounded-2xl p-3 shadow-2xl shadow-black/20 sm:inset-x-6"
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-muted transition hover:bg-surface2/70 hover:text-main"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-widest text-dim">
                        0{index + 1}
                      </span>
                      {item.label}
                    </span>
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 text-dim transition group-hover:text-accent"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-3 border-t border-line/10 pt-3">
                <a
                  href={site.resumeUrl}
                  download="Likhon_Mondol_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  <Icon name="download" />
                  Download CV
                </a>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-surface/60 text-muted transition hover:border-accent/40 hover:text-accent"
                    >
                      <Icon name={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
