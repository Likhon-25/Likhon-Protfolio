import Icon from "@/components/ui/Icon";
import { footer, navItems, site, socials } from "@/data/portfolio";

/**
 * FOOTER
 * Identity + quick nav + socials on top, legal line at the bottom.
 * Content edit: src/data/portfolio.ts → footer / site / navItems / socials
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line/10 bg-page/60">
      <div className="section-shell py-12 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Identity */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label={`${site.name} — back to top`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-display text-[13px] font-bold tracking-tight text-white shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:scale-105">
                {site.initials}
              </span>
              <span className="leading-tight">
                <span className="block font-display text-sm font-semibold text-main">
                  {site.name}
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
                  {site.role}
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-[13.5px] leading-6 text-muted">
              {footer.blurb}
            </p>

            <div className="mt-5 flex items-center gap-2">
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
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-accent"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-dim">
                      /
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[13px] text-muted transition hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.resumeUrl}
                  download="Likhon_Mondol_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-accent"
                >
                  <Icon name="download" className="h-3.5 w-3.5" />
                  Resume
                </a>
              </li>
              <li className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                <Icon name="pin" className="h-3.5 w-3.5 text-dim" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mt-10" />

        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
            © {year} {site.name}. All rights reserved.
          </p>

          <p className="text-[11.5px] text-dim">{footer.builtWith}</p>

          <a
            href="#home"
            className="link-arrow text-xs"
            aria-label="Back to top"
          >
            Back to top
            <Icon name="arrowUp" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
