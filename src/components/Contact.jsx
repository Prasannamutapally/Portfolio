import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { personal } from "../data/portfolio";
import { fadeUp, stagger, viewport } from "./motionPresets";

const contactItems = [
  { icon: FaEnvelope, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FaPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: FaLocationDot, label: "Location", value: personal.location, href: null },
];

const socials = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: personal.socials.twitter, label: "Twitter" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="card relative overflow-hidden p-8 sm:p-14 text-center"
        >
          {/* glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]"
          />

          <div className="relative">
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-widest text-accent-light"
            >
              Get in touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-3">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl text-slate-400"
            >
              Have a project in mind or a role to fill? I&apos;m open to new
              opportunities and always happy to chat.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <a href={`mailto:${personal.email}`} className="btn-primary">
                <FaEnvelope />
                Say hello
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              {contactItems.map((c) => {
                const Inner = (
                  <div className="card flex flex-col items-center gap-2 p-5 transition-colors hover:border-accent-light/40">
                    <c.icon className="text-xl text-accent-light" />
                    <span className="text-xs uppercase tracking-wider text-slate-500">
                      {c.label}
                    </span>
                    <span className="text-sm font-medium text-white break-all">
                      {c.value}
                    </span>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href}>
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent-light hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
