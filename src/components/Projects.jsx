import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaUserTie } from "react-icons/fa6";
import { projects } from "../data/portfolio";
import { fadeUp, scaleIn, stagger, viewport } from "./motionPresets";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Selected Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Featured <span className="gradient-text">projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-fg-muted">
            Enterprise platforms I&apos;ve designed and built end to end.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="card group relative flex flex-col overflow-hidden"
            >
              {/* visual header with gradient + initial */}
              <div
                className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 grid-bg"
                />
                <span className="relative text-5xl font-black text-fg/80">
                  {p.title.charAt(0)}
                </span>
                <FaArrowUpRightFromSquare className="absolute right-4 top-4 text-fg/40 transition-colors group-hover:text-accent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                  <FaUserTie className="text-[11px]" />
                  {p.role}
                </span>
                <h3 className="mt-3 text-lg font-bold text-fg">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
