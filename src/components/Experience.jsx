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
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent-light"
          >
            Career
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Work <span className="gradient-text">experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
            5 years building products for enterprise and consumer clients.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-glow to-transparent sm:left-1/2"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-10"
          >
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:ml-auto sm:pl-12"
                    : "sm:mr-auto sm:pr-12 sm:text-right"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-2 top-1.5 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-accent ring-4 ring-ink-900 sm:left-0 ${
                    i % 2 === 0 ? "sm:-left-0" : "sm:left-full"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <div className="card p-6 text-left">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-light">
                    <FaBriefcase className="text-[10px]" />
                    {job.period} · {job.duration}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-semibold text-accent-light">
                    {job.company}
                    {job.client && (
                      <span className="text-slate-400">
                        {" "}
                        — {job.client}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                    <FaLocationDot className="text-xs" />
                    {job.location}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {job.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <FaCheck className="mt-1 shrink-0 text-xs text-accent-cyan" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
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
