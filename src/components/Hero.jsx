import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowDown,
} from "react-icons/fa6";
import { personal, stats } from "../data/portfolio";
import { fadeUp, stagger } from "./motionPresets";

const socialIcons = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: personal.socials.twitter, label: "Twitter" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/30 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent-glow/25 blur-[130px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-px relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m {personal.firstName}
            <br />
            <span className="gradient-text">{personal.role}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
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
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="card p-5 text-center"
            >
              <div className="text-3xl font-extrabold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
