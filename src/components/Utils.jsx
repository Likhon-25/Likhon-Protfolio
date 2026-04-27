export function Loader() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: '1.5rem',
    }}>
      <div style={{
        fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 800,
        background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #6366f1 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>LM</div>
      <div style={{ width: 200, height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
          borderRadius: 2, animation: 'loaderFill 1.6s ease both',
        }} />
      </div>
      <style>{`@keyframes loaderFill { 0%{width:0} 100%{width:100%} }`}</style>
    </div>
  )
}
export default Loader

// =====================================================
// src/components/ScrollProgress.jsx
// =====================================================
import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setWidth(total ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: 3, zIndex: 9999,
      background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
      width: `${width}%`, transition: 'width 0.1s linear',
      borderRadius: '0 2px 2px 0',
    }} />
  )
}

// =====================================================
// src/components/Background.jsx
// =====================================================
export function Background() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: '#6366f1', filter: 'blur(100px)', opacity: 0.12,
          top: -100, left: -100,
          animation: 'drift 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: '#38bdf8', filter: 'blur(100px)', opacity: 0.10,
          bottom: -80, right: -80,
          animation: 'drift 12s ease-in-out -6s infinite alternate',
        }} />
      </div>
      <style>{`@keyframes drift { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(60px,40px) scale(1.1)} }`}</style>
    </>
  )
}

// =====================================================
// src/components/Footer.jsx
// =====================================================
const FooterGithub = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 10,
      borderTop: '1px solid var(--border)',
      padding: '2.5rem clamp(1.25rem, 5vw, 3rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', background: 'linear-gradient(135deg, #38bdf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        Likhon Mondol
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
        © 2025 · Built with passion & ☕
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        {[
          { href: 'https://github.com/Likhon-25', icon: <FooterGithub /> },
          { href: 'https://www.linkedin.com/in/likhon-mondol/', icon: '🔗' },
          { href: 'mailto:likhonmondol327@gmail.com', icon: '✉️' },
        ].map((s, i) => (
          <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
            style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'none' }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}
