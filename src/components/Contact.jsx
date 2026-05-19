// =====================================================
// src/components/Contact.jsx
// EmailJS integration — messages go directly to Gmail
// =====================================================
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ─────────────────────────────────────────────────────
// 🔑 YOUR EMAILJS KEYS — replace with your own values
// ─────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_y18s5cs"; // ← তোমার Service ID
const EMAILJS_TEMPLATE_ID = "template_8u7mqcp"; // ← তোমার Template ID
const EMAILJS_PUBLIC_KEY = "825NtdNYES_jsBLEY"; // ← তোমার Public Key
// ─────────────────────────────────────────────────────

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: "likhonmondol327@gmail.com",
    href: "mailto:likhonmondol327@gmail.com",
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "github.com/Likhon-25",
    href: "https://github.com/Likhon-25",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "in/likhon-mondol",
    href: "https://www.linkedin.com/in/likhon-mondol/",
  },
  {
    icon: "👤",
    label: "Facebook",
    value: "facebook.com/likhon",
    href: "https://www.facebook.com/profile.php?id=100091255685543",
  },
];

// Send icon SVG
const SendIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// Spinner icon
const SpinnerIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path
      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      style={{
        animation: "spin-icon 1s linear infinite",
        transformOrigin: "center",
      }}
    />
  </svg>
);

export function Contact() {
  const [ref, visible] = useScrollReveal();
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // ── Validation ────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2)
      e.name = "অন্তত ২ অক্ষর দাও।";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email দাও।";
    if (!form.subject.trim()) e.subject = "Subject লাগবে।";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "অন্তত ১০ অক্ষর লাখো।";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Submit → EmailJS ──────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // EmailJS templateParams must match your template variables
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_name: "Likhon", // তোমার নাম template এ দেখাবে
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // ── Live field validation on blur ─────────────────
  const handleBlur = (field) => {
    validate();
  };

  // ── Styles ────────────────────────────────────────
  const inputStyle = (field) => ({
    width: "100%",
    background: "var(--input-bg)",
    border: `1px solid ${errors[field] ? "#f87171" : "var(--border)"}`,
    borderRadius: 10,
    padding: "0.75rem 1rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    color: "var(--text)",
    outline: "none",
    transition: "all 0.3s ease",
    resize: "none",
  });

  // ── Section label ─────────────────────────────────
  const SectionLabel = ({ children }) => (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "0.75rem",
        color: "#38bdf8",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}
    >
      <span
        style={{
          width: 24,
          height: 1,
          background: "#38bdf8",
          display: "block",
        }}
      />
      {children}
    </div>
  );

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(5rem, 10vh, 8rem) clamp(1.25rem, 5vw, 3rem)",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <SectionLabel>Let's Talk</SectionLabel>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--text-muted)",
            maxWidth: 540,
            lineHeight: 1.7,
          }}
        >
          একটা project আছে? Collaborate করতে চাও? Message করো — সরাসরি আমার
          Gmail এ চলে আসবে। ✉️
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          marginTop: "3rem",
          alignItems: "start",
        }}
      >
        {/* ── Left: contact links ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: 16,
                background: "var(--card-bg)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                marginBottom: 12,
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "var(--text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    marginBottom: 2,
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  {item.value}
                </div>
              </div>
            </a>
          ))}

          {/* Info card */}
          <div
            style={{
              background: "rgba(56,189,248,0.05)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: 12,
              padding: "1rem 1.25rem",
              marginTop: 8,
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: "#38bdf8",
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              📬 Direct to Gmail
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text-dim)",
                lineHeight: 1.6,
              }}
            >
              Form submit করলে message সরাসরি{" "}
              <span style={{ color: "var(--text-muted)" }}>
                likhonmondol327@gmail.com
              </span>{" "}
              এ চলে যাবে।
            </div>
          </div>
        </motion.div>

        {/* ── Right: form ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            style={{
              background: "var(--card-bg)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top gradient bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(135deg, #38bdf8, #6366f1)",
              }}
            />

            {/* ── SUCCESS state ── */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "2.5rem 1rem",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#34d399",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message Sent!
                </div>
                <div
                  style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
                >
                  তোমার message আমার Gmail এ পৌঁছে গেছে। শীঘ্রই reply করব! 🚀
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.6rem 1.5rem",
                    background: "transparent",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: 999,
                    color: "#38bdf8",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  আরো Message পাঠাও
                </button>
              </motion.div>
            )}

            {/* ── ERROR state ── */}
            {status === "error" && (
              <div
                style={{
                  background: "rgba(248,113,113,0.08)",
                  border: "1px solid rgba(248,113,113,0.25)",
                  borderRadius: 10,
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  fontSize: "0.85rem",
                  color: "#f87171",
                }}
              >
                ⚠️ কিছু একটা সমস্যা হয়েছে। একটু পরে আবার try করো অথবা সরাসরি
                email করো।
              </div>
            )}

            {/* ── FORM ── */}
            {status !== "success" && (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    onBlur={() => handleBlur("name")}
                    placeholder="Your full name"
                    style={inputStyle("name")}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#38bdf8";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(56,189,248,0.1)";
                    }}
                    onBlur2={(e) => {
                      e.target.style.borderColor = errors.name
                        ? "#f87171"
                        : "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.name && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginTop: 4,
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    onBlur={() => handleBlur("email")}
                    placeholder="your@email.com"
                    style={inputStyle("email")}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#38bdf8";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(56,189,248,0.1)";
                    }}
                  />
                  {errors.email && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginTop: 4,
                      }}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    onBlur={() => handleBlur("subject")}
                    placeholder="What's this about?"
                    style={inputStyle("subject")}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#38bdf8";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(56,189,248,0.1)";
                    }}
                  />
                  {errors.subject && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginTop: 4,
                      }}
                    >
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    style={{ ...inputStyle("message"), height: 130 }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#38bdf8";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(56,189,248,0.1)";
                    }}
                  />
                  {errors.message && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#f87171",
                        marginTop: 4,
                      }}
                    >
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background:
                      status === "sending"
                        ? "rgba(99,102,241,0.5)"
                        : "linear-gradient(135deg, #38bdf8, #6366f1)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 999,
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(99,102,241,0.35)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <SpinnerIcon />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-icon {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
