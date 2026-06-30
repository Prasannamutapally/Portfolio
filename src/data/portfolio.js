import {
  FaCode,
  FaServer,
  FaDatabase,
  FaScrewdriverWrench,
  FaLayerGroup,
  FaMobileScreenButton,
  FaTrophy,
  FaArrowTrendUp,
  FaCubes,
  FaUserGear,
  FaGaugeHigh,
  FaUniversalAccess,
} from "react-icons/fa6";

// ──────────────────────────────────────────────────────────────────────────
// Single source of truth for the whole site. Edit values here and every
// section updates automatically.
// ──────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Prasanna Mutapally",
  firstName: "Prasanna",
  role: "Full Stack Developer",
  headline:
    "Building Scalable Web & Mobile Applications with Modern Technologies",
  tagline: "React.js · React Native · ASP.NET Core · Node.js · MongoDB",
  location: "Hyderabad, Telangana, India",
  address: "2-111/B, Gummiryal, Nizamabad, Telangana, India",
  email: "prasannamutapally@gmail.com",
  phone: "+91 7013414780",
  yearsExperience: 5,
  intro:
    "I am a Full Stack Developer with nearly 5 years of professional experience building enterprise-grade web and mobile applications. I specialize in React.js, React Native, ASP.NET Core, Node.js, Express.js, MongoDB, and modern JavaScript ecosystems. I enjoy designing scalable architectures, developing high-performance applications, creating intuitive user experiences, and solving complex business problems.",
  socials: {
    github: "https://github.com/Prasannamutapally",
    linkedin: "https://www.linkedin.com/",
  },
  // Drop a file named resume.pdf into the /public folder to enable the download.
  resumeUrl: "./resume.pdf",
};

export const stats = [
  { label: "Years Experience", value: "5" },
  { label: "Enterprise Apps", value: "10+" },
  { label: "Major Clients", value: "Microsoft" },
  { label: "Promotions", value: "1" },
];

export const aboutAreas = [
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "API Development",
  "Database Design",
  "System Architecture",
  "Performance Optimization",
  "Accessibility",
  "UI/UX Improvements",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      { name: "React.js", level: 95 },
      { name: "React Native", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Bootstrap", level: 88 },
      { name: "Fluent UI", level: 85 },
      { name: "Redux", level: 90 },
      { name: "Context API", level: 90 },
      { name: "MobX", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "ASP.NET Core", level: 88 },
      { name: "REST APIs", level: 93 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [{ name: "MongoDB", level: 90 }],
  },
  {
    title: "Tools",
    icon: FaScrewdriverWrench,
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "Azure DevOps", level: 85 },
      { name: "CI/CD", level: 85 },
      { name: "Postman", level: 90 },
    ],
  },
];

// Capabilities shown as tags in the skills section
export const otherSkills = [
  "Accessibility",
  "Performance Optimization",
  "Responsive Design",
  "API Integration",
  "State Management",
  "Authentication",
  "Enterprise Architecture",
];

export const experience = [
  {
    company: "MindMe Mobile",
    client: null,
    role: "Senior Full Stack Developer",
    period: "Aug 2024 — Jun 2026",
    location: "India",
    current: true,
    description:
      "Designed and developed scalable web and mobile applications end to end, owning architecture, delivery and mentorship.",
    achievements: [
      "Designed and developed scalable web and mobile applications using React.js, React Native, ASP.NET Core, Node.js and MongoDB.",
      "Built secure REST APIs and scalable microservices.",
      "Designed efficient MongoDB schemas with indexing and query optimization for large datasets.",
      "Implemented advanced state management using Redux, Context API and MobX.",
      "Developed enterprise modules: Checkout Systems, Subscription Management, Payment Gateway Integrations and AI-Powered Media Libraries.",
      "Migrated a 1,400+ file legacy JavaScript codebase to TypeScript and modernized state management from Redux to MobX (57 domain stores), improving type safety and reducing boilerplate.",
      "Implemented real-time messaging and conversation features using SignalR, including live updates and connection lifecycle management.",
      "Developed drag-and-drop builders for mobile pages, email/SMS templates and web forms using react-dnd and Draft.js rich-text editing.",
      "Integrated Stripe for billing and payments, plus HubSpot, Intercom and Appcues for analytics and customer engagement.",
      "Built data-heavy dashboards with interactive charts (Chart.js, Recharts) and geographic maps (d3-geo, react-simple-maps), including Excel export via ExcelJS.",
      "Improved software quality through CI/CD pipelines, automated testing and code reviews.",
      "Mentored junior developers and promoted best engineering practices.",
      "Focused on scalability, maintainability, performance and accessibility across all projects.",
    ],
    tech: [
      "React.js",
      "React Native",
      "TypeScript",
      "ASP.NET Core",
      "Node.js",
      "MongoDB",
      "MobX",
      "SignalR",
      "Stripe",
      "Chart.js",
    ],
  },
  {
    company: "Accenture",
    client: "Microsoft · MindMe Mobile",
    role: "Application Development Analyst",
    badge: "Promoted",
    period: "Aug 2022 — Aug 2024",
    location: "India",
    current: false,
    description:
      "Promoted to Analyst, delivering interactive web and cross-platform mobile applications for enterprise clients.",
    achievements: [
      "Developed interactive web applications using React.js, Redux, Bootstrap and Fluent UI.",
      "Built cross-platform mobile applications using React Native.",
      "Designed and implemented backend services using Node.js and Express.js.",
      "Worked extensively with MongoDB for schema design, query optimization and large-scale data management.",
      "Integrated third-party APIs and enterprise services.",
      "Performed end-to-end testing and quality assurance.",
      "Improved application accessibility, responsiveness and overall user experience.",
      "Delivered scalable production-ready enterprise applications.",
    ],
    tech: [
      "React.js",
      "React Native",
      "Redux",
      "Fluent UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    company: "Accenture",
    client: "Microsoft",
    role: "Application Development Associate",
    period: "Aug 2021 — Aug 2022",
    location: "India",
    current: false,
    description:
      "Joined as an Associate, building enterprise product features and improving accessibility and UX.",
    achievements: [
      "Developed new application features for enterprise products.",
      "Fixed accessibility issues to improve compliance and usability.",
      "Enhanced UI/UX across multiple modules.",
      "Built backend APIs using Express.js.",
      "Collaborated with cross-functional teams to deliver production-ready solutions.",
      "Participated in Agile development processes.",
    ],
    tech: ["React.js", "Express.js", "JavaScript", "Accessibility", "Agile"],
  },
];

export const projects = [
  {
    title: "Reviews Application",
    role: "Lead Full Stack Developer",
    description:
      "Designed and developed the complete Reviews platform independently — frontend, backend APIs, database architecture, business logic, authentication and deployment-ready features.",
    tech: ["React.js", "ASP.NET Core", "MongoDB", "REST APIs"],
    accent: "from-indigo-500/25 to-purple-500/25",
  },
  {
    title: "Media Library System",
    role: "Full Stack Developer",
    description:
      "Built a complete enterprise media library platform from scratch with advanced search, AI-powered media management, scalable backend services and optimized database architecture.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    accent: "from-cyan-500/25 to-blue-500/25",
  },
  {
    title: "Fundraiser Platform",
    role: "Lead Full Stack Developer",
    description:
      "Developed the entire fundraising application independently — backend architecture, payment workflows, subscription features, API integrations, user management and a responsive frontend.",
    tech: ["React", "ASP.NET Core", "MongoDB"],
    accent: "from-fuchsia-500/25 to-pink-500/25",
  },
];

export const achievements = [
  {
    icon: FaArrowTrendUp,
    text: "Nearly 5 years of enterprise software development experience.",
  },
  {
    icon: FaTrophy,
    text: "Promoted from Application Development Associate to Application Development Analyst at Accenture.",
  },
  {
    icon: FaCubes,
    text: "Built multiple enterprise-grade applications from scratch.",
  },
  {
    icon: FaUserGear,
    text: "Independently delivered complete production applications.",
  },
  {
    icon: FaLayerGroup,
    text: "Strong expertise in both frontend and backend development.",
  },
  {
    icon: FaMobileScreenButton,
    text: "Experience across web, mobile, APIs, databases and cloud-ready architectures.",
  },
  {
    icon: FaGaugeHigh,
    text: "Strong focus on accessibility, scalability, maintainability and performance.",
  },
  {
    icon: FaUniversalAccess,
    text: "Accessibility-first mindset improving compliance and usability across products.",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "JNTUH College of Engineering, Jagtial",
    score: "8.2 CGPA",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Kshatriya Junior College, Armoor",
    score: "984 / 1000",
  },
  {
    degree: "SSC",
    institution: "Ushajyothi Gurukul High School, Armoor",
    score: "9.0 GPA",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
