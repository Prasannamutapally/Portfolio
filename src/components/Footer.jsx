import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa6";
import { personal, navLinks } from "../data/portfolio";

const socials = [
  { icon: FaGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personal.socials.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/80 py-10 dark:border-white/10">
      <div className="container-px flex flex-col items-center gap-6">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-fg"
        >
          {personal.firstName}
          <span className="gradient-text">.</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-fg-muted transition-all hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-fg-subtle">
          © {year} {personal.name}. Built with
          <FaHeart className="text-accent" aria-hidden="true" />
          using React.
        </p>
      </div>
    </footer>
  );
}
