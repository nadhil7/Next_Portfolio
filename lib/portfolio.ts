export const siteUrl = "https://nadhil.in";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mohammed-nadhil-k-n/",
  github: "https://github.com/nadhil7",
  instagram: "https://www.instagram.com/nadhilkn_/",
};

export const experience = {
  company: "Xerocare Private Limited",
  role: "Software Developer",
  period: "October 2025 – September 2026",
  arrangement: "Remote",
  team: "Two-developer team",
  leadership: "Lead Developer",
  summary:
    "Worked as a Software Developer at Xerocare Private Limited, helping build the company's ERP/CRM software from scratch. As the lead developer in a two-developer team, I worked closely with my co-developer, management, and employees to understand business workflows and translate them into practical software features.",
};

export const skills = {
  frontend: ["React.js", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "Microservices Architecture", "JWT Authentication"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM"],
  infrastructure: [
    "AWS EC2",
    "AWS S3",
    "Supabase",
    "Cloudflare",
    "Nginx",
    "Git",
    "GitHub",
    "Postman",
    "Swagger",
    "RabbitMQ",
  ],
};

export const projects = [
  {
    slug: "xerocare",
    title: "Xerocare — ERP/CRM Platform",
    date: "October 2025 – September 2026",
    status: "Completed",
    link: "/projects/xerocare",
    techStack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "AWS",
      "Cloudflare",
      "Microservices Architecture",
    ],
    description: [
      "Helped build a modular ERP/CRM platform from scratch for printer-industry operations as part of a two-developer team.",
      "Led the development work across business workflow analysis, frontend and backend implementation, application architecture, database design, testing, debugging, and deployment.",
      "Contributed across CRM, sales, inventory, procurement, service management, contracts, and billing workflows without claiming independent ownership of every module.",
    ],
  },
  {
    slug: "instaviz",
    title: "InstaViz",
    date: "November 2025",
    status: "Completed",
    techStack: ["Next.js", "Node.js", "Mongo DB", "TypeScript", "MCP", "Vercel", "AWS(EC2)", "Supabase", "R2", "Gemini APIs", "JWT"],
    description: [
      "Built an AI-powered data visualization tool capable of transforming CSV data into dynamic charts and accurate insights with 100% consistency across datasets.",
      "Used two Gemini models—one dedicated to chart generation and another lightweight model for conversational responses—optimizing performance and token usage.",
      "Implemented an MCP server for CSV data aggregation, cutting redundant Gemini API requests and reducing token usage by 50%.",
      "Implemented JWT authentication with access and refresh tokens for secure and scalable user authorization.",
      "Integrated Google OAuth login, reducing login friction by 60%, and implemented Stripe payments to enable secure, reliable transactions.",
      "Built an admin dashboard with real-time analytics, including user active-time tracking and device-based login insights.",
      "Built device-level session tracking that displays logged-in devices and supports remote logout.",
    ],
  },
  {
    slug: "letsellr",
    title: "Letsellr",
    date: "October 2025",
    status: "Live",
    externalLink: "https://letsellr.in/",
    techStack: ["Next.js", "Node.js", "TypeScript", "Mongo DB", "AWS (EC2,S3)", "Shadcn Ui"],
    description: [
      "Built a full-stack property management platform enabling listing, tracking, and management of properties — improving client–contractor communication and operational efficiency.",
      "Implemented AWS S3 signed URL uploads for image storage, reducing backend payload size by 80% and improving upload performance by 60%.",
      "Delivered the project end-to-end as a freelance assignment — from UI/UX design to backend and infrastructure — demonstrating full-cycle development ability.",
    ],
  },
] as const;

export const developmentApproach = [
  "Understand business requirements.",
  "Analyze existing workflows.",
  "Identify required software features.",
  "Design application architecture.",
  "Design the database structure.",
  "Develop frontend functionality.",
  "Develop backend functionality.",
  "Integrate application modules.",
  "Test and validate functionality.",
  "Debug and fix issues.",
  "Deploy and maintain the application.",
];

export const professionalResponsibilities = [
  "Led a two-developer team in developing the company's ERP/CRM software from scratch.",
  "Collaborated directly with management and employees to understand business workflows and requirements.",
  "Translated business requirements into software features and application workflows.",
  "Designed and contributed to application architecture and database structure.",
  "Developed frontend and backend functionality.",
  "Contributed across CRM, sales, inventory, procurement, service management, contracts, and billing modules.",
  "Worked on integrating business modules and application workflows.",
  "Implemented and maintained backend APIs.",
  "Participated in testing, debugging, and bug fixing.",
  "Worked on application deployment and production-related development tasks.",
  "Collaborated with the co-developer to deliver required features.",
];
