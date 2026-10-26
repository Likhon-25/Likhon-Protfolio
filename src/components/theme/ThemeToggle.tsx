"use client";

import { useLayoutEffect } from "react";
import Icon from "@/components/ui/Icon";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Dark / Light toggle.
 * Theme preference localStorage-এ save থাকে।
 */
export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  /* Dev-এ React Strict Mode <html> class reset করে — stored theme আবার apply করি */
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored !== "dark" && stored !== "light") return;

      const root = document.documentElement;
      root.classList.toggle("dark", stored === "dark");
      root.classList.toggle("light", stored === "light");
      root.style.colorScheme = stored;
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextIsDark);
    root.classList.toggle("light", !nextIsDark);
    root.style.colorScheme = nextIsDark ? "dark" : "light";

    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      /* storage blocked — theme still works for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className={`grid h-9 w-9 place-items-center rounded-full border border-line/15 bg-surface/60 text-muted transition duration-300 hover:border-accent/40 hover:text-accent ${className}`}
    >
      <Icon name="moon" className="hidden h-4 w-4 dark:block" />
      <Icon name="sun" className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
