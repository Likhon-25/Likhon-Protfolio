import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import protfolioImage from "../asset/MyPicture.png"

export function About() {
  const [ref, visible] = useScrollReveal()

  const stats = [
    { num: '3+', label: 'Projects Delivered' },
    { num: 'MERN', label: 'Core Stack' },
    { num: '100%', label: 'Passion Driven' },
    { num: '∞', label: 'Learning Mindset' },
  ]

  return (
    <section id="about" style={{ padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 3rem)', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          <span style={{ width: 24, height: 1, background: '#38bdf8', display: 'block' }} />
          Who I Am
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
          About Me
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'center' }}>
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }} />
          <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #6366f1)', margin: '0 auto 1.5rem', padding: 3, boxSizing: 'border-box' }}>
          <img src={protfolioImage} alt="Likhon Mondol" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', borderRadius:'50%', display:'block' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Likhon Mondol</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>MERN Stack Developer</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginTop: '1.25rem' }}>
            {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'].map(t => (
              <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#38bdf8', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)', padding: '4px 10px', borderRadius: 999 }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['I\'m a Computer Science & Technology student with a deep passion for full-stack web development. I specialize in the MERN stack — building everything from robust REST APIs to beautiful, responsive user interfaces.',
            'I believe great software is the intersection of clean code, thoughtful architecture, and exceptional user experience. Every project I tackle, I approach with attention to detail and a drive to exceed expectations.',
            'When I\'m not coding, I\'m exploring new technologies, contributing to academic projects, and collaborating with teammates to push creative boundaries.'
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>{p}</p>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.25rem', transition: 'all 0.3s ease', cursor: 'default' }}
                whileHover={{ y: -2, borderColor: 'rgba(56,189,248,0.3)' }}
              >
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.25rem', fontWeight: 800, lineHeight: 1, background: 'var(--grad-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.25rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 500 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// =====================================================
// src/components/Skills.jsx
// =====================================================
export function Skills() {
  const [ref, visible] = useScrollReveal()

  const categories = [
    { icon: '🎨', title: 'Frontend', skills: ['React', 'Tailwind CSS', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
    { icon: '⚙️', title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'] },
    { icon: '🗃️', title: 'Database', skills: ['MongoDB', 'Mongoose', 'Schema Design', 'Aggregation'] },
    { icon: '🛠️', title: 'Tools & Design', skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel', 'Postman'] },
  ]

  return (
    <section id="skills" style={{ padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 3rem)', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          <span style={{ width: 24, height: 1, background: '#38bdf8', display: 'block' }} />
          What I Know
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>Skills & Tools</h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.7 }}>A curated set of technologies I use to build full-stack applications from concept to deployment.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -3, borderColor: 'rgba(56,189,248,0.3)' }}
            style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'default' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', marginBottom: '1rem' }}>
              {cat.icon}
            </div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{cat.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cat.skills.map(s => (
                <span key={s} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', padding: '4px 9px', borderRadius: 6, transition: 'all 0.3s ease', cursor: 'default' }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// src/components/Projects.jsx
// =====================================================
import { useState } from 'react'

const projects = [
  {
    id: 1, icon: '🍽️', title: 'Modern Hearth Restaurant',
    desc: 'A premium, fully responsive restaurant website featuring an elegant UI with dynamic menu showcasing, smooth scroll animations, and a polished booking-ready experience. Built with performance-first principles and mobile-optimized layouts that deliver restaurant ambience through the screen.',
    techs: ['React', 'Tailwind CSS'], tags: ['react', 'tailwind'],
    live: 'https://modern-hearth-resturent.vercel.app/',
    github: 'https://github.com/Likhon-25/Modern-Hearth-Resturent',
  },
  {
    id: 2, icon: '💳', title: 'Payoo Mobile Banking',
    desc: 'A fully functional mobile banking simulation web app offering core financial features — real-time balance updates, transaction history, fund transfers, and an intuitive dashboard UI. Demonstrates complex DOM manipulation and state management without a framework, showcasing raw JavaScript mastery.',
    techs: ['JavaScript', 'Tailwind CSS', 'DaisyUI'], tags: ['javascript', 'tailwind'],
    live: 'https://likhon-25.github.io/Payoo-Mobile-Bank/',
    github: 'https://github.com/Likhon-25/Payoo-Mobile-Bank',
  },
  {
    id: 3, icon: '📚', title: 'English Window',
    desc: 'An immersive vocabulary learning platform built to accelerate English proficiency through dynamic flashcards, categorized word banks, and gamified learning interactions. Features adaptive content delivery and progress tracking UI to keep learners engaged and motivated throughout their journey.',
    techs: ['JavaScript ES6', 'Tailwind CSS', 'DaisyUI'], tags: ['javascript', 'tailwind'],
    live: 'https://likhon-25.github.io/English_Janala_App/',
    github: 'https://github.com/Likhon-25/English_Janala_App',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Tailwind CSS', value: 'tailwind' },
]

export function Projects() {
  const [ref, visible] = useScrollReveal()
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" style={{ padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 3rem)', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          <span style={{ width: 24, height: 1, background: '#38bdf8', display: 'block' }} />
          What I've Built
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>Projects</h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.7 }}>A selection of real-world projects demonstrating my skills across the full stack.</p>
      </motion.div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '2.5rem 0' }}>
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem',
              padding: '6px 14px', borderRadius: 999,
              border: `1px solid ${active === f.value ? '#38bdf8' : 'var(--border)'}`,
              background: active === f.value ? 'rgba(56,189,248,0.08)' : 'transparent',
              color: active === f.value ? '#38bdf8' : 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
            style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s ease', cursor: 'default' }}
          >
            {/* Image */}
            <div style={{ height: 180, background: 'linear-gradient(135deg, var(--bg3) 0%, var(--bg2) 100%)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #38bdf8, #6366f1)', opacity: 0.08 }} />
              <span style={{ fontSize: '3rem', position: 'relative', zIndex: 1 }}>{p.icon}</span>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }} />
            </div>

            {/* Body */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{p.title}</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
                {p.techs.map(t => (
                  <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#6366f1', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', padding: '3px 8px', borderRadius: 6 }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={p.live} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', color: '#fff', background: 'linear-gradient(135deg, #38bdf8, #6366f1)', padding: '6px 14px', borderRadius: 999, border: 'none', transition: 'all 0.3s ease' }}>
                  Live Demo →
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: 999, transition: 'all 0.3s ease' }}>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// =====================================================
// src/components/Contact.jsx
// =====================================================
export function Contact() {
  const [ref, visible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.length < 2) e.name = 'At least 2 characters required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.subject.trim()) e.subject = 'This field is required.'
    if (!form.message.trim() || form.message.length < 10) e.message = 'At least 10 characters required.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setTimeout(() => { setSent(true); setForm({ name: '', email: '', subject: '', message: '' }) }, 1000)
    }
  }

  const contactItems = [
    { icon: '✉️', label: 'Email', value: 'likhonmondol327@gmail.com', href: 'mailto:likhonmondol327@gmail.com' },
    { icon: '💻', label: 'GitHub', value: 'github.com/Likhon-25', href: 'https://github.com/Likhon-25' },
    { icon: '🔗', label: 'LinkedIn', value: 'in/likhon-mondol', href: 'https://www.linkedin.com/in/likhon-mondol/' },
    { icon: '👤', label: 'Facebook', value: 'facebook.com/likhon', href: 'https://www.facebook.com/profile.php?id=100091255685543' },
  ]

  const inputStyle = (field) => ({
    width: '100%', background: 'var(--input-bg)', border: `1px solid ${errors[field] ? '#f87171' : 'var(--border)'}`,
    borderRadius: 10, padding: '0.75rem 1rem', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem', color: 'var(--text)', outline: 'none', transition: 'all 0.3s ease',
    resize: field === 'message' ? 'none' : undefined,
    height: field === 'message' ? 130 : undefined,
  })

  return (
    <section id="contact" style={{ padding: 'clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 3rem)', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          <span style={{ width: 24, height: 1, background: '#38bdf8', display: 'block' }} />
          Let's Talk
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', maxWidth: 540, lineHeight: 1.7 }}>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'start' }}>
        {/* Contact info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          {contactItems.map(item => (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: 'var(--card-bg)', backdropFilter: 'blur(16px)', border: '1px solid var(--border)', borderRadius: 10, marginBottom: 12, transition: 'all 0.3s ease', textDecoration: 'none', color: 'var(--text)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={visible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <div style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(135deg, #38bdf8, #6366f1)' }} />
            {!sent ? (
              <form onSubmit={handleSubmit} noValidate>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
                ].map(f => (
                  <div key={f.id} style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>{f.label}</label>
                    <input type={f.type} value={form[f.id]} onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))} placeholder={f.placeholder} style={inputStyle(f.id)} />
                    {errors[f.id] && <div style={{ fontSize: '0.75rem', color: '#f87171', marginTop: 4 }}>{errors[f.id]}</div>}
                  </div>
                ))}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6, fontFamily: 'JetBrains Mono, monospace' }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Tell me about your project..." style={inputStyle('message')} />
                  {errors.message && <div style={{ fontSize: '0.75rem', color: '#f87171', marginTop: 4 }}>{errors.message}</div>}
                </div>
                <button type="submit" style={{ width: '100%', padding: '0.85rem', background: 'linear-gradient(135deg, #38bdf8, #6366f1)', color: '#fff', border: 'none', borderRadius: 999, fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  Send Message ✉️
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#34d399', fontWeight: 500, fontSize: '1.05rem' }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
