import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import protfolioImage from "../asset/MyPicture.png"

// Social icon SVGs
const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const socials = [
  { href: 'https://github.com/Likhon-25', icon: <GithubIcon />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/likhon-mondol/', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'mailto:likhonmondol327@gmail.com', icon: '✉️', label: 'Email' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  // Typewriter
  const typeRef = useRef(null)
  const words = ['Full-Stack Apps', 'MERN Solutions', 'React Interfaces', 'REST APIs', 'Modern UIs']
  let wordIdx = 0, charIdx = 0, deleting = false

  useEffect(() => {
    let timer
    const type = () => {
      if (!typeRef.current) return
      const word = words[wordIdx]
      if (!deleting) {
        typeRef.current.textContent = word.slice(0, ++charIdx)
        if (charIdx === word.length) { deleting = true; timer = setTimeout(type, 1600); return }
      } else {
        typeRef.current.textContent = word.slice(0, --charIdx)
        if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length }
      }
      timer = setTimeout(type, deleting ? 60 : 90)
    }
    timer = setTimeout(type, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(1.25rem, 5vw, 4rem)',
        paddingTop: 80,
      }}
    >
      {/*
        =====================================================
        hero-wrapper:
          ≥1024px → grid (1fr auto) — ORIGINAL design untouched
          <1024px  → single column, avatar on top centered
        =====================================================
      */}
      <div className="hero-wrapper">

        {/* ── LEFT: Content ── */}
        <div className="hero-content">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.2)',
              borderRadius: 999, padding: '5px 14px',
              fontSize: '0.78rem', color: '#38bdf8',
              fontFamily: 'JetBrains Mono, monospace',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#38bdf8',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: '0.5rem',
            }}
          >
            Hi, I'm<br />
            <span className="grad-text">Likhon Mondol</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              height: '2.2rem',
              display: 'flex', alignItems: 'center', gap: 8,
              marginBottom: '1.5rem',
            }}
          >
            <span>I build </span>
            <span ref={typeRef} style={{ color: '#38bdf8' }} />
            <span style={{
              display: 'inline-block', width: 2, height: '1.3em',
              background: '#38bdf8', borderRadius: 1,
              animation: 'blink 1s step-end infinite',
            }} />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '1.0625rem', color: 'var(--text-muted)',
              maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem',
            }}
          >
            A passionate MERN Stack developer who crafts scalable, high-performance web applications — blending clean backend architecture with elegant, user-first interfaces. From API design to pixel-perfect UI, I turn ideas into seamless digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hero-ctas"
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.75rem 1.75rem',
              background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
              color: '#fff', border: 'none', borderRadius: 999,
              fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
              textDecoration: 'none', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 30px rgba(99,102,241,0.3)' }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
            >
              View Projects →
            </a>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.75rem 1.75rem',
              background: 'transparent', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: 999,
              fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
              textDecoration: 'none', transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#38bdf8'; e.target.style.color = '#38bdf8' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
            >
              Get In Touch
            </a>

            {/* ── Download Resume ── */}
            <a
              href="/resume.pdf"
              download="Likhon_Mondol_Resume.pdf"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.75rem 1.75rem',
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid rgba(99,102,241,0.4)',
                borderRadius: 999,
                fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
                e.currentTarget.style.borderColor = '#6366f1'
                e.currentTarget.style.color = '#818cf8'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(99,102,241,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Download SVG icon */}
              <svg
                width="15" height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-socials"
            style={{ display: 'flex', gap: '0.75rem' }}
          >
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                title={s.label}
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1rem',
                  transition: 'all 0.3s ease', backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#38bdf8'
                  e.currentTarget.style.color = '#38bdf8'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.background = 'rgba(56,189,248,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hero-avatar"
          style={{ position: 'relative' }}
        >
          {/* Ring */}
          <div className="hero-ring" style={{
            width: 300, height: 300, borderRadius: '50%',
            background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
            padding: 3, position: 'relative',
            // animation: 'spin 10s linear infinite',
          }}>
            <div style={{
              position: 'absolute', inset: 6, borderRadius: '50%',
              background: 'var(--bg)', zIndex: 0,
            }} />
            <div style={{
              position: 'absolute', inset: 6, borderRadius: '50%',
              overflow: 'hidden', zIndex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
            }}>
              <img
                src={protfolioImage}
                alt="Likhon Mondol"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Float badge top */}
          <div style={{
            position: 'absolute', top: -10, right: -20,
            background: 'var(--surface)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border)',
            borderRadius: 12, padding: '8px 14px',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 500, whiteSpace: 'nowrap',
            animation: 'float 4s ease-in-out infinite', zIndex: 2,
          }}>
            ⚡ MERN Stack Dev
          </div>

          {/* Float badge bottom */}
          <div style={{
            position: 'absolute', bottom: 10, left: -30,
            background: 'var(--surface)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border)',
            borderRadius: 12, padding: '8px 14px',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '0.78rem', fontWeight: 500, whiteSpace: 'nowrap',
            animation: 'float 4s ease-in-out -2s infinite', zIndex: 2,
          }}>
            🚀 3+ Projects Built
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ── Keyframes (unchanged) ── */
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin     { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-dot{ 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }

        /* ── Desktop ≥1024px: ORIGINAL layout, nothing changed ── */
        .hero-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
        }
        .hero-content { text-align: left; }

        /* ── Tablet & Mobile <1024px ── */
        @media (max-width: 1023px) {
          .hero-wrapper {
            grid-template-columns: 1fr;    /* single column */
            justify-items: center;
          }
          /* Avatar moves to the top */
          .hero-avatar { order: -1; }

          /* Shrink ring on tablet */
          .hero-ring {
            width: 240px !important;
            height: 240px !important;
          }

          /* Center all content */
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }
          .hero-ctas   { justify-content: center !important; }
          .hero-socials{ justify-content: center !important; }

          /* Keep typewriter row centered */
          .hero-content > div[style*="2.2rem"] {
            justify-content: center;
          }

          /* Tuck badges in so they don't overflow */
          .hero-avatar > div:nth-child(2) { right: -8px !important; }
          .hero-avatar > div:nth-child(3) { left:  -8px !important; }
        }

        /* ── Small phones <480px ── */
        @media (max-width: 479px) {
          .hero-ring {
            width: 190px !important;
            height: 190px !important;
          }
          /* Stack CTA buttons vertically, full width */
          .hero-ctas {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100%;
          }
          .hero-ctas a { justify-content: center; }
        }
      `}</style>
    </section>
  )
}