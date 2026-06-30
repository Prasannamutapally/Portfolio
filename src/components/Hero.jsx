import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowDown,
  FaDownload,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa6";
import { personal, stats } from "../data/portfolio";
import { fadeUp, stagger } from "./motionPresets";

const socialIcons = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personal.socials.linkedin, label: "LinkedIn" },
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
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/20 blur-[120px] dark:bg-accent/30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent-glow/20 blur-[130px] dark:bg-accent-glow/25"
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
            className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface/60 px-4 py-1.5 text-sm text-fg-muted backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            {personal.role} · {personal.location.split(",")[0]}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {personal.name}.
            <span className="mt-3 block bg-gradient-to-r from-accent via-accent-glow to-accent-cyan bg-clip-text text-transparent">
              Senior Full Stack Web Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-xl font-semibold text-fg sm:text-2xl"
          >
            {personal.headline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href={personal.resumeUrl}
              download
              className="btn-primary"
            >
              <FaDownload />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              <FaEnvelope />
              Contact Me
            </a>
            <a href="#projects" className="btn-ghost">
              <FaFolderOpen />
              View Projects
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
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
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
              <div className="text-2xl font-extrabold gradient-text sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-fg-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-fg-subtle"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
