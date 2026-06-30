import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent-light"
          >
            Selected Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Featured <span className="gradient-text">projects</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
            A snapshot of products and systems I&apos;ve designed and built.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden p-7"
            >
              {/* gradient glow on hover */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                    {p.category}
                  </span>
                  <FaArrowUpRightFromSquare className="text-slate-600 transition-colors group-hover:text-accent-light" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
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
