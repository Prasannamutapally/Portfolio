import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import { fadeUp, scaleIn, stagger, viewport } from "./motionPresets";

function SkillBar({ skill }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium text-slate-200">
          <skill.icon className="text-base text-accent-light" />
          {skill.name}
        </span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
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
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-accent-light"
          >
            Skills & Tools
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title mt-3">
            My <span className="gradient-text">technical toolkit</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-slate-400">
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
              className="card p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-glow/20 text-xl text-accent-light">
                  <group.icon />
                </div>
                <h3 className="text-xl font-semibold text-white">
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
      </div>
    </section>
  );
}
