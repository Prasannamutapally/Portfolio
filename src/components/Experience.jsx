import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot, FaCheck } from "react-icons/fa6";
import { experience } from "../data/portfolio";
import { fadeUp, stagger, viewport } from "./motionPresets";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Career
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Professional <span className="gradient-text">experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-fg-muted">
            Nearly 5 years building enterprise products across web and mobile.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-glow to-transparent"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-8"
          >
            {experience.map((job) => (
              <motion.div key={job.role + job.period} variants={fadeUp} className="relative pl-12">
                {/* node */}
                <span className="absolute left-4 top-2 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-accent ring-4 ring-bg">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <div className="card p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                      <FaBriefcase className="text-[10px]" />
                      {job.period}
                    </span>
                    {job.badge && (
                      <span className="rounded-full bg-accent-cyan/15 px-3 py-1 text-xs font-semibold text-accent-cyan">
                        {job.badge}
                      </span>
                    )}
                    {job.current && (
                      <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-500">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-fg">{job.role}</h3>
                  <p className="mt-1 font-semibold text-accent">
                    {job.company}
                    {job.client && (
                      <span className="text-fg-muted"> · {job.client}</span>
                    )}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-fg-subtle">
                    <FaLocationDot className="text-xs" />
                    {job.location}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                    {job.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-fg"
                      >
                        <FaCheck className="mt-1 shrink-0 text-xs text-accent-cyan" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
