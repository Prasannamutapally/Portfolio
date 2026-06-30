import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { personal, aboutAreas } from "../data/portfolio";
import { fadeUp, stagger, viewport } from "./motionPresets";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* Left: heading + summary */}
          <div className="lg:col-span-2">
            <motion.p variants={fadeUp} className="eyebrow">
              About me
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-3">
              Owning products{" "}
              <span className="gradient-text">end to end</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 leading-relaxed text-fg-muted"
            >
              {personal.intro}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 leading-relaxed text-fg-muted"
            >
              I have close to {personal.yearsExperience} years of experience
              developing enterprise software across multiple domains, and I take
              ownership of complete products from planning to deployment.
            </motion.p>
          </div>

          {/* Right: areas of expertise */}
          <div className="lg:col-span-3">
            <motion.div variants={fadeUp} className="card p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-fg">
                I work across the entire software development lifecycle
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutAreas.map((area) => (
                  <motion.div
                    key={area}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-line/70 bg-surface-2/60 px-4 py-3 text-sm font-medium text-fg dark:border-white/5 dark:bg-white/[0.03]"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-xs text-accent">
                      <FaCheck />
                    </span>
                    {area}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
