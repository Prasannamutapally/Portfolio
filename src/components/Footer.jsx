import { personal, navLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px flex flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
          {personal.firstName}
          <span className="gradient-text">.</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
