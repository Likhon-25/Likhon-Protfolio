# Likhon Mondol — Portfolio Website

A premium, production-ready developer portfolio built with React + Vite, Tailwind CSS, Framer Motion, and React Router.

---

## ✨ Features

- **Dark / Light mode toggle** (default: dark)
- **Glassmorphism design** — blur + transparency cards
- **Sky Blue & Indigo gradient** accent palette
- **Fully responsive** — mobile, tablet, desktop
- **Hero typewriter effect** (vanilla JS, no extra lib needed)
- **Framer Motion scroll-reveal animations** on every section
- **Smooth scrolling** & sticky glassmorphic navbar
- **Active nav highlight** driven by scroll position
- **Dynamic project filter** by tech tag
- **Contact form** with live validation
- **Scroll progress indicator** at top of page
- **Loading animation** on first paint
- **Floating avatar badges** with CSS keyframe animation

---

## 📁 Folder Structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← ReactDOM entry
    ├── App.jsx               ← ThemeContext + routing root
    ├── index.css             ← Global CSS vars, Tailwind directives
    │
    ├── assets/               ← Images, fonts, icons (add your own)
    │
    ├── data/
    │   └── portfolio.js      ← All content: projects, skills, personal info
    │
    ├── hooks/
    │   └── useScrollReveal.js ← IntersectionObserver hook → [ref, visible]
    │
    ├── layouts/
    │   └── Layout.jsx        ← Navbar + Outlet + Footer wrapper
    │
    ├── pages/
    │   └── Home.jsx          ← Assembles Hero + About + Skills + Projects + Contact
    │
    └── components/
        ├── Navbar.jsx        ← Sticky glassmorphic nav, hamburger, theme toggle
        ├── Hero.jsx          ← Hero section with typewriter + floating avatar
        ├── Sections.jsx      ← About, Skills, Projects, Contact (named exports)
        └── Utils.jsx         ← Loader, ScrollProgress, Background, Footer (named exports)
```

---

## 🚀 Quick Start

### 1. Clone or copy this folder

```bash
# If using git
git init
git add .
```

### 2. Install dependencies

```bash
npm install
```

This installs:
- `react` + `react-dom` + `react-router-dom`
- `framer-motion`
- `tailwindcss` + `autoprefixer` + `postcss`
- `vite` + `@vitejs/plugin-react`

### 3. Run development server

```bash
npm run dev
```

Open → **http://localhost:5173**

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/` — ready to deploy on Vercel, Netlify, or GitHub Pages.

---

## 🌐 Deploy to Vercel (recommended, free)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at **vercel.com** and it auto-deploys on every push.

---

## 🎨 Customisation

### Update personal info
Edit **`src/data/portfolio.js`** — all content (name, links, projects, skills) lives here.

### Change accent colors
In **`src/index.css`**, update the CSS variables:
```css
--sky: #38bdf8;      /* primary accent */
--indigo: #6366f1;   /* secondary accent */
```

### Add your real profile photo
In **`src/components/Hero.jsx`** and **`src/components/Sections.jsx`**, replace the `LM` fallback divs with:
```jsx
<img src="/your-photo.jpg" alt="Likhon Mondol" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
```
Place the image in `public/` so Vite serves it at `/your-photo.jpg`.

### Add more projects
Add a new object to the `projects` array in `src/data/portfolio.js` following the existing shape.

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Framework   | React 18 + Vite 5                   |
| Routing     | React Router v6                     |
| Styling     | Tailwind CSS v3 + custom CSS vars   |
| Animation   | Framer Motion v11                   |
| Fonts       | Syne (display) · DM Sans (body) · JetBrains Mono |
| Deploy      | Vercel (recommended)                |

---

## 📄 File Quick-Reference

| File | Purpose |
|------|---------|
| `src/App.jsx` | ThemeContext provider, route tree, loader gate |
| `src/index.css` | CSS variables for dark/light, Tailwind directives, global base |
| `src/data/portfolio.js` | **Edit this** to update all portfolio content |
| `src/hooks/useScrollReveal.js` | Returns `[ref, isVisible]` using IntersectionObserver |
| `src/components/Navbar.jsx` | Glassmorphic sticky nav with scroll-active highlights |
| `src/components/Hero.jsx` | Full-height hero with typewriter, floating avatar, CTAs |
| `src/components/Sections.jsx` | About · Skills · Projects (with filter) · Contact (with validation) |
| `src/components/Utils.jsx` | Loader · ScrollProgress bar · Background blobs · Footer |
| `src/layouts/Layout.jsx` | Wraps pages with nav + footer + background |
| `src/pages/Home.jsx` | Composes all sections into the single-page portfolio |

---

Built with ❤️ by Likhon Mondol
