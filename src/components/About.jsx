import { motion } from "framer-motion";
import { FaCode, FaMobileScreenButton, FaServer } from "react-icons/fa6";
import { personal } from "../data/portfolio";
import { fadeUp, stagger, viewport } from "./motionPresets";

const highlights = [
  {
    icon: FaCode,
    title: "Frontend Engineering",
    text: "Pixel-perfect, accessible React.js interfaces with smooth interactions and clean state management.",
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    text: "Robust ASP.NET Core services, secure REST APIs and well-modeled data layers on Azure & SQL.",
  },
  {
    icon: FaMobileScreenButton,
    title: "Mobile Apps",
    text: "Cross-platform React Native apps shipped to the App Store and Google Play with native polish.",
  },
];

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
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-widest text-accent-light"
            >
              About me
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title mt-3">
              Building across the <span className="gradient-text">full stack</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 leading-relaxed text-slate-400"
            >
              {personal.summary}
            </motion.p>

            <motion.dl
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-4 text-sm"
            >
              <div>
                <dt className="text-slate-500">Experience</dt>
                <dd className="mt-1 font-semibold text-white">
                  {personal.yearsExperience}+ years
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Location</dt>
                <dd className="mt-1 font-semibold text-white">
                  {personal.location}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Focus</dt>
                <dd className="mt-1 font-semibold text-white">Web & Mobile</dd>
              </div>
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="mt-1 font-semibold text-white break-all">
                  {personal.email}
                </dd>
              </div>
            </motion.dl>
          </div>

          {/* Right: highlight cards */}
          <div className="grid gap-5 sm:grid-cols-1 lg:col-span-3">
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="card group flex items-start gap-5 p-6 transition-colors hover:border-accent-light/40"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-glow/20 text-xl text-accent-light">
                  <h.icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {h.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
