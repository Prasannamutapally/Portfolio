import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { achievements, education } from "../data/portfolio";
import { fadeUp, scaleIn, stagger, viewport } from "./motionPresets";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent-glow/10 blur-[130px]"
      />
      <div className="container-px relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Milestones
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            Achievements &amp; <span className="gradient-text">recognition</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.text}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="card flex items-start gap-4 p-6 transition-colors hover:border-accent/40"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-glow/20 text-lg text-accent">
                <item.icon />
              </div>
              <p className="text-sm leading-relaxed text-fg">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-fg-subtle"
          >
            Education
          </motion.h3>
          <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-3">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="card flex flex-col p-6 transition-colors hover:border-accent/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-cyan/20 text-xl text-accent">
                  <FaGraduationCap />
                </div>
                <h4 className="mt-4 text-base font-semibold text-fg">
                  {edu.degree}
                </h4>
                <p className="mt-1 flex-1 text-sm text-fg-muted">
                  {edu.institution}
                </p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  {edu.score}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
