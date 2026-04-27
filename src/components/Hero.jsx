import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import protfolioImage from "../asset/MyPicture.png";

// Social icon SVGs
const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  {
    href: "https://github.com/Likhon-25",
    icon: <GithubIcon />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/likhon-mondol/",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
  },
  { href: "mailto:likhonmondol327@gmail.com", icon: "✉️", label: "Email" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const typeRef = useRef(null);
  const words = [
    "Full-Stack Apps",
    "MERN Solutions",
    "React Interfaces",
    "REST APIs",
    "Modern UIs",
  ];
  let wordIdx = 0,
    charIdx = 0,
    deleting = false;

  useEffect(() => {
    let timer;
    const type = () => {
      if (!typeRef.current) return;
      const word = words[wordIdx];
      if (!deleting) {
        typeRef.current.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timer = setTimeout(type, 1600);
          return;
        }
      } else {
        typeRef.current.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      }
      timer = setTimeout(type, deleting ? 60 : 90);
    };
    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Content Section */}
        <div className="hero-content-area">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            className="hero-badge"
          >
            <span className="pulse-dot-icon" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-main-title"
          >
            Hi, I'm
            <br />
            <span className="grad-text">Likhon Mondol</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-typewriter"
          >
            <span>I build </span>
            <span ref={typeRef} style={{ color: "#38bdf8" }} />
            <span className="type-cursor" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-para"
          >
            A passionate MERN Stack developer who crafts web applications
            blending clean backend architecture with elegant interfaces.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="hero-btns"
          >
            <a href="#projects" className="hero-btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-social-group"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="hero-social-link"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hero-image-area"
        >
          <div className="avatar-frame">
            <div className="avatar-inner-bg" />
            <div className="avatar-img-box">
              <img src={protfolioImage} alt="Portfolio" />
            </div>
          </div>

          <div className="hero-badge-float badge-top">⚡ MERN Stack</div>
          <div className="hero-badge-float badge-bottom">🚀 3+ Projects</div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: clamp(1.25rem, 5vw, 4rem);
          padding-top: 80px;
        }

        .hero-container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column-reverse; /* Mobile: Image first */
          gap: 2.5rem;
          align-items: center;
          text-align: center; /* Mobile: Center text */
        }

        @media (min-width: 1024px) {
          .hero-container {
            display: grid;
            grid-template-columns: 1fr auto;
            text-align: left; /* Laptop: Left align */
            gap: 4rem;
          }
          .hero-content-area { order: 1; }
          .hero-image-area { order: 2; }
        }

        .hero-main-title {
          font-family: 'Syne, sans-serif';
          font-size: clamp(2.5rem, 6vw, 4.5rem); /* Font size reduced slightly */
          font-weight: 800; letter-spacing: -0.04em;
          line-height: 1.1; margin-bottom: 0.5rem;
        }

        .hero-typewriter {
          font-family: 'Syne, sans-serif';
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 600; color: #94a3b8;
          height: 2rem; display: flex; align-items: center; gap: 8px;
          margin-bottom: 1.5rem; justify-content: center;
        }
        @media (min-width: 1024px) { .hero-typewriter { justify-content: flex-start; } }

        .type-cursor {
          display: inline-block; width: 2px; height: 1.2em;
          background: #38bdf8; animation: blink 1s step-end infinite;
        }

        .hero-para {
          font-size: 1rem; color: #94a3b8;
          max-width: 500px; line-height: 1.6; margin-bottom: 2rem;
          margin-left: auto; margin-right: auto;
        }
        @media (min-width: 1024px) { .hero-para { margin-left: 0; } }

        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem; }
        @media (min-width: 1024px) { .hero-btns { justify-content: flex-start; } }

        .hero-btn-primary {
          padding: 0.7rem 1.5rem; background: linear-gradient(135deg, #38bdf8, #6366f1);
          color: #fff; border-radius: 999px; font-weight: 500; text-decoration: none; font-size: 0.85rem;
        }
        .hero-btn-secondary {
          padding: 0.7rem 1.5rem; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px; color: #fff; text-decoration: none; font-size: 0.85rem;
        }

        .hero-social-group { 
          display: flex; 
          gap: 0.75rem; 
          justify-content: center; /* Mobile: Center icons */
        }
        @media (min-width: 1024px) { .hero-social-group { justify-content: flex-start; } }

        .hero-social-link {
          width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center; color: #94a3b8;
          transition: 0.3s;
        }
        .hero-social-link:hover { border-color: #38bdf8; color: #38bdf8; }

        /* Avatar Box - Width/Height slightly reduced as requested */
        .hero-image-area { position: relative; }
        .avatar-frame {
          width: clamp(220px, 40vw, 270px); height: clamp(220px, 40vw, 270px);
          border-radius: 50%; background: linear-gradient(135deg, #38bdf8, #6366f1);
          padding: 3px; position: relative;
        }
        .avatar-inner-bg { position: absolute; inset: 5px; border-radius: 50%; background: #0f172a; }
        .avatar-img-box {
          position: absolute; inset: 5px; border-radius: 50%; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .avatar-img-box img { width: 100%; height: 100%; object-fit: cover; }

        .hero-badge-float {
          position: absolute; background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 6px 12px; font-size: 0.7rem; color: #fff;
          white-space: nowrap; backdrop-filter: blur(8px);
        }
        .badge-top { top: -5px; right: -5px; animation: float 4s ease-in-out infinite; }
        .badge-bottom { bottom: 5px; left: -15px; animation: float 4s ease-in-out -2s infinite; }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-dot { 0%,100%{transform:scale(1); opacity:1} 50%{transform:scale(1.4); opacity:0.5} }
      `}</style>
    </section>
  );
}
