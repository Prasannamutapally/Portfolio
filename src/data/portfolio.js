import {
  SiReact,
  SiDotnet,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiExpo,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  FaServer,
  FaMobileScreenButton,
  FaDatabase,
  FaCloud,
} from "react-icons/fa6";

// ──────────────────────────────────────────────────────────────────────────
// Single source of truth for the whole site. Edit values here and every
// section updates automatically.
// ──────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Pavan Kumar",
  firstName: "Pavan",
  role: "Full Stack & Mobile Developer",
  tagline: "React.js · ASP.NET · React Native",
  location: "India",
  email: "pavan.dev@example.com",
  phone: "+91 90000 00000",
  yearsExperience: 5,
  summary:
    "Full Stack Developer with 5 years of experience building scalable web platforms with React.js and ASP.NET, and cross-platform mobile apps with React Native. I turn complex requirements into clean, performant products — from enterprise dashboards for global clients to consumer mobile apps shipped to thousands of users.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
  resumeUrl: "#",
};

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Enterprise Clients", value: "10+" },
  { label: "Tech Stacks", value: "15+" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React.js", icon: SiReact, level: 95 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "Redux", icon: SiRedux, level: 88 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS3", icon: SiCss, level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet, level: 92 },
      { name: "C#", icon: SiDotnet, level: 90 },
      { name: "Node.js", icon: SiNodedotjs, level: 82 },
      { name: "REST APIs", icon: FaServer, level: 93 },
      { name: "GraphQL", icon: SiGraphql, level: 75 },
    ],
  },
  {
    title: "Mobile",
    icon: FaMobileScreenButton,
    skills: [
      { name: "React Native", icon: SiReact, level: 90 },
      { name: "Expo", icon: SiExpo, level: 85 },
    ],
  },
  {
    title: "Data & DevOps",
    icon: FaDatabase,
    skills: [
      { name: "SQL Server", icon: FaDatabase, level: 88 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 78 },
      { name: "Azure", icon: FaCloud, level: 80 },
      { name: "Docker", icon: SiDocker, level: 75 },
      { name: "Git", icon: SiGit, level: 92 },
    ],
  },
];

export const experience = [
  {
    company: "Accenture",
    client: "Microsoft (Client)",
    role: "Senior Full Stack Developer",
    period: "2023 — Present",
    duration: "3 years",
    location: "India",
    description:
      "Delivered enterprise web applications for a Microsoft engagement, building responsive React.js front-ends backed by ASP.NET Core services deployed on Azure.",
    achievements: [
      "Architected and shipped React.js + ASP.NET Core dashboards used by global Microsoft teams.",
      "Improved page load performance by ~40% through code-splitting, memoization and API optimization.",
      "Designed reusable component libraries and design-system primitives adopted across multiple squads.",
      "Built secure REST APIs with role-based access control and integrated Azure AD authentication.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "Azure",
      "SQL Server",
    ],
  },
  {
    company: "Mindme Mobile",
    client: null,
    role: "React Native Developer",
    period: "2021 — 2023",
    duration: "2 years",
    location: "India",
    description:
      "Developed cross-platform mobile applications with React Native, owning features end-to-end from UI to API integration and store releases.",
    achievements: [
      "Built and shipped React Native apps to both the App Store and Google Play.",
      "Implemented offline-first sync, push notifications and smooth 60fps animations.",
      "Integrated native modules and third-party SDKs for payments, maps and analytics.",
      "Reduced crash rate to under 1% through testing, monitoring and performance profiling.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux", "Node.js"],
  },
];

export const projects = [
  {
    title: "Enterprise Analytics Dashboard",
    category: "Web · Full Stack",
    description:
      "A real-time analytics platform with interactive charts, role-based access and exportable reports, built for a large enterprise client.",
    tech: ["React.js", "ASP.NET Core", "SQL Server", "Azure"],
    accent: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Cross-Platform Delivery App",
    category: "Mobile · React Native",
    description:
      "A consumer delivery app with live order tracking, push notifications and in-app payments, shipped to iOS and Android.",
    tech: ["React Native", "Expo", "Redux", "Node.js"],
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Component Design System",
    category: "Web · Frontend",
    description:
      "A reusable, accessible component library with theming, documentation and full keyboard and screen-reader support.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Storybook"],
    accent: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Identity & Access Service",
    category: "Backend · API",
    description:
      "A secure authentication and authorization microservice with Azure AD integration, JWT tokens and audit logging.",
    tech: ["ASP.NET Core", "C#", "Azure AD", "PostgreSQL"],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
