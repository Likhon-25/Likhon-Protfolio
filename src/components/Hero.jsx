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
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(1.25rem, 5vw, 4rem)",
        paddingTop: 100,
        overflow: "hidden",
      }}
    >
      <div className="container-hero">
        {/* Avatar - Mobile এ উপরে দেখাবে, বড় স্ক্রিনে ডানে */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="avatar-container"
        >
          <div className="spinning-ring">
            <div className="ring-inner-bg" />
            <div className="image-wrapper">
              <img src={protfolioImage} alt="Likhon Mondol" />
            </div>
          </div>

          <div className="float-badge top">⚡ MERN Stack Dev</div>
          <div className="float-badge bottom">🚀 3+ Projects Built</div>
        </motion.div>

        {/* Content */}
        <div className="hero-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            className="badge"
          >
            <span className="dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
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
            className="typewriter-container"
          >
            <span>I build </span>
            <span ref={typeRef} style={{ color: "#38bdf8" }} />
            <span className="cursor" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-desc"
          >
            A passionate MERN Stack developer who crafts scalable,
            high-performance web applications — blending clean backend
            architecture with elegant, user-first interfaces.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className="cta-group"
          >
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="social-group"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="social-link"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .container-hero {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr; /* মোবাইল এ এক কলাম */
          gap: 3rem;
          align-items: center;
          text-align: center; /* মোবাইল এ টেক্সট সেন্টারে */
        }

        @media (min-width: 1024px) {
          .container-hero {
            grid-template-columns: 1.2fr 0.8fr; /* ল্যাপটপে কন্টেন্ট ডানে ছবি */
            text-align: left;
          }
          .avatar-container { order: 2; } /* ছবি ডানে যাবে */
          .hero-content { order: 1; }
        }

        .avatar-container {
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .spinning-ring {
          width: clamp(220px, 40vw, 320px);
          height: clamp(220px, 40vw, 320px);
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          padding: 3px;
          position: relative;
        }

        .ring-inner-bg {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background: #0f172a; /* আপনার ওয়েবসাইটের ব্যাকগ্রাউন্ড কালার দিন */
          z-index: 0;
        }

        .image-wrapper {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .float-badge {
          position: absolute;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 500;
          white-space: nowrap;
          z-index: 2;
        }

        .float-badge.top { top: 0; right: 0; animation: float 4s ease-in-out infinite; }
        .float-badge.bottom { bottom: 0; left: 0; animation: float 4s ease-in-out -2s infinite; }

        .hero-title {
          font-family: 'Syne', sans-serif;
          fontSize: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-desc {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        @media (min-width: 1024px) {
          .hero-desc { margin: 0 0 2.5rem 0; }
        }

        /* Utils */
        .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.2); border-radius: 99px; padding: 5px 14px; font-size: 0.75rem; color: #38bdf8; margin-bottom: 1.5rem; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: #38bdf8; animation: pulse-dot 2s infinite; }
        .typewriter-container { display: flex; align-items: center; justify-content: center; gap: 8px; font-size: clamp(1rem, 2vw, 1.5rem); font-weight: 600; color: #94a3b8; margin-bottom: 1.5rem; min-height: 1.6em; }
        @media (min-width: 1024px) { .typewriter-container { justify-content: flex-start; } }
        .cursor { display: inline-block; width: 2px; height: 1.2em; background: #38bdf8; animation: blink 1s step-end infinite; }
        .cta-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2rem; }
        @media (min-width: 1024px) { .cta-group { justify-content: flex-start; } }
        .social-group { display: flex; gap: 1rem; justify-content: center; }
        @media (min-width: 1024px) { .social-group { justify-content: flex-start; } }
        
        .btn-primary { padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; border-radius: 99px; text-decoration: none; font-weight: 500; transition: 0.3s; }
        .btn-secondary { padding: 0.75rem 1.5rem; border: 1px solid #334155; color: white; border-radius: 99px; text-decoration: none; transition: 0.3s; }
        .social-link { width: 40px; height: 40px; border: 1px solid #334155; border-radius: 50%; display: flex; items-center: center; justify-content: center; color: #94a3b8; text-decoration: none; transition: 0.3s; }
        .social-link:hover { border-color: #38bdf8; color: #38bdf8; transform: translateY(-3px); }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-dot { 0%,100%{transform:scale(1); opacity:1} 50%{transform:scale(1.5); opacity:0.5} }
      `}</style>
    </section>
  );
}
