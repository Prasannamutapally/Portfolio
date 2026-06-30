import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaCircleCheck,
} from "react-icons/fa6";
import { personal } from "../data/portfolio";
import { fadeUp, stagger, viewport } from "./motionPresets";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: personal.location,
    href: null,
  },
];

const socials = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personal.socials.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static site: hand off to the user's email client with prefilled content.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Get in touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-fg-muted">
            Have a project in mind or a role to fill? I&apos;m open to new
            opportunities and always happy to chat.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left: contact details */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-4 lg:col-span-2"
          >
            {contactItems.map((c) => {
              const Inner = (
                <div className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/40">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-glow/20 text-lg text-accent">
                    <c.icon />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-fg-subtle">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium text-fg">
                      {c.value}
                    </div>
                  </div>
                </div>
              );
              return (
                <motion.div key={c.label} variants={fadeUp}>
                  {c.href ? <a href={c.href}>{Inner}</a> : Inner}
                </motion.div>
              );
            })}

            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="card space-y-5 p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-fg"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/5"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-fg"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/5"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-fg"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role..."
                className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/5"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                <FaPaperPlane />
                Send Message
              </button>
              {sent && (
                <span className="inline-flex items-center gap-2 text-sm text-emerald-500">
                  <FaCircleCheck />
                  Opening your email client...
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
