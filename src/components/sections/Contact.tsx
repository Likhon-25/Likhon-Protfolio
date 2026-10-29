"use client";

import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

/* ── EmailJS credentials ──────────────────────────────────────────────
   The public key is safe to ship in the browser. Override per
   environment with NEXT_PUBLIC_EMAILJS_* variables (see .env.example).
   ──────────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_y18s5cs";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_8u7mqcp";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "825NtdNYES_jsBLEY";

type Fields = "name" | "email" | "subject" | "message";
type FormState = Record<Fields, string>;
type Status = "idle" | "sending" | "success" | "error";

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

const fieldLabels: Record<Fields, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const fieldPlaceholders: Record<Fields, string> = {
  name: "Your full name",
  email: "your@email.com",
  subject: "What's this about?",
  message: "Tell me about your project or idea...",
};

function validateField(field: Fields, value: string): string | undefined {
  const trimmed = value.trim();

  if (field === "name" && trimmed.length < 2) {
    return "Please enter your name.";
  }
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Please enter a valid email address.";
  }
  if (field === "subject" && trimmed.length < 3) {
    return "Please add a short subject.";
  }
  if (field === "message" && trimmed.length < 10) {
    return "Please write at least 10 characters.";
  }

  return undefined;
}

/**
 * CONTACT — 05
 * Contact links on the left, validated EmailJS form on the right.
 * Content edit: src/data/portfolio.ts → contact
 */
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: Fields, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));

    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: validateField(field, value) }));
    }
    if (status === "error") setStatus("idle");
  };

  const blur = (field: Fields) => {
    setErrors((previous) => ({
      ...previous,
      [field]: validateField(field, form[field]),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<Fields, string>> = {};
    (Object.keys(form) as Fields[]).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) nextErrors[field] = error;
    });

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = (Object.keys(nextErrors) as Fields[])[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          to_name: site.firstName,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(emptyForm);
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-shell section-pad scroll-mt-24">
      <SectionHeading
        index="05"
        kicker={contact.kicker}
        title={contact.title}
        description={contact.description}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        {/* Contact links */}
        <Reveal delay={0.05}>
          <div className="flex h-full flex-col gap-3">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card group flex items-center gap-3.5 p-4"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface2/70 text-muted ring-1 ring-line/10 transition duration-300 group-hover:text-accent group-hover:ring-accent/25">
                  <Icon name={link.icon} className="h-4 w-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[9.5px] uppercase tracking-[0.16em] text-dim">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block truncate text-[13.5px] font-medium text-main">
                    {link.value}
                  </span>
                </span>

                <Icon
                  name="arrowUpRight"
                  className="h-4 w-4 shrink-0 text-dim transition duration-300 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            ))}

            <div className="mt-1 rounded-2xl border border-accent/15 bg-accent/[0.045] p-4">
              <p className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                <Icon name="clock" className="h-3 w-3" />
                {contact.responseTime}
              </p>
              <p className="mt-2 text-[12.5px] leading-5 text-muted">
                {contact.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="card relative overflow-hidden p-5 sm:p-7">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 opacity-70"
            />

            <AnimatePresence mode="wait" initial={false}>
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/25">
                    <Icon name="check" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-main">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-xs text-[13.5px] leading-6 text-muted">
                    Thanks for reaching out — your message is in my inbox and
                    I&apos;ll reply as soon as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn btn-ghost mt-6 !px-4 !py-2 text-xs"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={false}
                  className="relative"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      field="name"
                      type="text"
                      autoComplete="name"
                      form={form}
                      errors={errors}
                      disabled={status === "sending"}
                      onChange={update}
                      onBlur={blur}
                    />
                    <Field
                      field="email"
                      type="email"
                      autoComplete="email"
                      form={form}
                      errors={errors}
                      disabled={status === "sending"}
                      onChange={update}
                      onBlur={blur}
                    />
                  </div>

                  <div className="mt-4">
                    <Field
                      field="subject"
                      type="text"
                      form={form}
                      errors={errors}
                      disabled={status === "sending"}
                      onChange={update}
                      onBlur={blur}
                    />
                  </div>

                  <div className="mt-4">
                    <Field
                      field="message"
                      textarea
                      form={form}
                      errors={errors}
                      disabled={status === "sending"}
                      onChange={update}
                      onBlur={blur}
                    />
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-4 rounded-xl border border-red-400/25 bg-red-400/[0.08] px-3.5 py-2.5 text-[12.5px] leading-5 text-red-400"
                    >
                      The message couldn&apos;t be sent. Please try again, or
                      email me directly at{" "}
                      <a href={`mailto:${site.email}`} className="underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  )}

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-dim">
                      Goes straight to my inbox
                    </p>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "sending" ? (
                        <>
                          <Icon name="loader" className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon name="send" />
                          Send message
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   One labelled input / textarea
   ───────────────────────────────────────────────────────────────────── */
function Field({
  field,
  type = "text",
  textarea = false,
  autoComplete,
  form,
  errors,
  disabled,
  onChange,
  onBlur,
}: {
  field: Fields;
  type?: string;
  textarea?: boolean;
  autoComplete?: string;
  form: FormState;
  errors: Partial<Record<Fields, string>>;
  disabled: boolean;
  onChange: (field: Fields, value: string) => void;
  onBlur: (field: Fields) => void;
}) {
  const id = `contact-${field}`;
  const error = errors[field];
  const errorId = `${id}-error`;

  const shared = {
    id,
    name: field,
    value: form[field],
    disabled,
    placeholder: fieldPlaceholders[field],
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => onChange(field, event.target.value),
    onBlur: () => onBlur(field),
    className: `field ${error ? "field-error" : ""}`,
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-dim"
      >
        {fieldLabels[field]}
        <span aria-hidden="true" className="ml-1 text-accent">
          *
        </span>
      </label>

      {textarea ? (
        <textarea
          {...shared}
          rows={5}
          style={{ height: 132, resize: "none" }}
        />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            id={errorId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden text-[11.5px] text-red-400"
          >
            <span className="mt-1 block">{error}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
