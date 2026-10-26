# Likhon Mondol — Portfolio

A production-ready developer portfolio for **Likhon Mondol**, built with the
Next.js App Router, TypeScript, and Tailwind CSS. Dark-first design with a light
theme toggle, scroll animations, a filterable project grid, and a contact form
that delivers straight to email.

**Live:** [likhon-protfolio.vercel.app](https://likhon-protfolio.vercel.app)

---

## Tech stack

| Layer      | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)            |
| Language   | TypeScript                                    |
| UI         | React 19                                      |
| Styling    | Tailwind CSS 3 + CSS variables (HSL tokens)   |
| Animation  | Framer Motion                                 |
| Icons      | lucide-react + inline brand SVGs              |
| Forms      | EmailJS (`@emailjs/browser`)                  |
| Deployment | Vercel                                        |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

### Environment variables

The contact form needs EmailJS credentials. Copy `.env.example` to `.env.local`
and fill in your own values (the ones in the example are the project defaults):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Your EmailJS template should use these variables: `from_name`, `from_email`,
`reply_to`, `subject`, `message`, `to_name`.

---

## Editing content

All copy lives in one file: **`src/data/portfolio.ts`**

| Export            | Controls                                        |
| ----------------- | ----------------------------------------------- |
| `site`            | Name, role, email, location, resume URL, site URL |
| `academics`       | Diploma + SSC details (shared by sections)      |
| `navItems`        | Navbar links and section ids                    |
| `socials`         | Social links + icons                            |
| `hero`, `stats`   | Hero copy, typewriter words, stack strip        |
| `about`           | Story, quick facts, strength pillars            |
| `education`       | Timeline items + "currently learning" panel     |
| `skills`          | Skill groups, accents, extras                   |
| `projects`        | Project cards + filter options                  |
| `contact`         | Contact links, response time, section copy      |
| `footer`, `seo`   | Footer text and metadata                        |

Icons are referenced by key from `src/components/ui/Icon.tsx` — add an icon
there first if you need a new one.

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # metadata, theme bootstrap, navbar/footer shell
│  ├─ page.tsx          # section composition (reorder sections here)
│  ├─ globals.css       # design tokens + component utilities
│  ├─ manifest.ts       # PWA manifest
│  ├─ not-found.tsx     # custom 404 page
│  ├─ robots.ts         # robots.txt
│  ├─ sitemap.ts        # sitemap.xml
│  └─ icon.svg          # favicon
├─ components/
│  ├─ layout/           # Navbar, Footer, BackToTop
│  ├─ sections/         # Hero, About, Education, Skills, Projects, Contact
│  ├─ effects/          # Background, Spotlight, ScrollProgress, TechMarquee
│  ├─ theme/            # ThemeToggle
│  └─ ui/               # Icon, Reveal, SectionHeading
└─ data/portfolio.ts    # single source of truth for content
```

Every component starts with a short header comment showing its section
number and which `portfolio.ts` export feeds it, so you can jump straight to
the file you need.

### Changing the look

- **Colours** — edit the HSL tokens at the top of `src/app/globals.css`
  (`--bg`, `--surface`, `--text`, `--accent`, …). Both themes use the same
  token names.
- **Section order** — reorder the components in `src/app/page.tsx`.
- **Buttons, cards, chips, form fields** — the shared classes `.btn`, `.card`,
  `.chip`, `.field` live in `globals.css`.
- **Fonts** — `src/app/layout.tsx` (Inter, Space Grotesk, JetBrains Mono).

Static assets live in `public/` (`resume.pdf`, `images/profile.jpg`,
`images/og.png`). Replace `images/profile.jpg` with a new portrait (4:5 works
best) and `resume.pdf` with an updated CV — the filenames stay the same.

---

## Deploying

1. Push the repository to GitHub.
2. Import it into Vercel — the Next.js preset is detected automatically.
3. Add the `NEXT_PUBLIC_EMAILJS_*` variables in the Vercel project settings.
4. Deploy.

---

## Author

**Likhon Mondol** — Full-Stack Engineer, Rangpur, Bangladesh
[GitHub](https://github.com/Likhon-25) · [LinkedIn](https://www.linkedin.com/in/likhon-mondol/) · [Email](mailto:likhonmondol327@gmail.com)
