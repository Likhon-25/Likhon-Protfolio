import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../App'

const NAV_LINKS = [
  { label: 'Home', href: '#hero', section: 'hero' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Skills', href: '#skills', section: 'skills' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Contact', href: '#contact', section: 'contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      let current = 'hero'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/10' : ''
        }`}
        style={{ height: 64, display: 'flex', alignItems: 'center',
          padding: '0 clamp(1rem, 5vw, 3rem)', justifyContent: 'space-between' }}
      >
        {/* Logo */}
        <a href="#hero" className="font-display font-extrabold text-xl grad-text no-underline" style={{ letterSpacing: '-0.02em' }}>
          Likhon Mondol
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map(link => (
            <li key={link.section}>
              <a
                href={link.href}
                className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 no-underline ${
                  active === link.section
                    ? 'text-sky-400 bg-sky-400/10'
                    : 'text-slate-400 hover:text-sky-400 hover:bg-sky-400/8'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-base transition-all duration-300 hover:scale-110"
            style={{ border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text-muted)' }}
            title="Toggle theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className="block w-5.5 h-0.5 rounded transition-all duration-300" style={{ background: 'var(--text-muted)', width: 22, height: 2 }} />
            <span className="block h-0.5 rounded transition-all duration-300" style={{ background: 'var(--text-muted)', width: menuOpen ? 14 : 22, height: 2 }} />
            <span className="block w-5.5 h-0.5 rounded transition-all duration-300" style={{ background: 'var(--text-muted)', width: 22, height: 2 }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass-nav fixed z-40 left-0 right-0 flex flex-col gap-1 p-4"
          style={{ top: 64 }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.section}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300 no-underline"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  )
}
