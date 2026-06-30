import { motion } from "framer-motion";
import { skillGroups, otherSkills } from "../data/portfolio";
import { fadeUp, scaleIn, stagger, viewport } from "./motionPresets";

function SkillBar({ skill }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-fg">{skill.name}</span>
        <span className="text-xs text-fg-subtle">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2 dark:bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent via-accent-glow to-accent-cyan"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={viewport}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* subtle backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
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
            Skills &amp; Tools
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            My <span className="gradient-text">technical toolkit</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-fg-muted">
            Technologies I use to design, build and ship products end to end.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="card p-7 transition-colors hover:border-accent/40"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-glow/20 text-xl text-accent">
                  <group.icon />
                </div>
                <h3 className="text-xl font-semibold text-fg">
                  {group.title}
                </h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other capabilities */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center"
        >
          <motion.h3
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-fg-subtle"
          >
            Other Expertise
          </motion.h3>
          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap justify-center gap-3"
          >
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
