export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

export type Project = {
  title: string;
  fullName: string;
  category: string;
  description: string;
  contributions: readonly string[];
  tags: readonly string[];
  featured?: boolean;
};

export const resumeData = {
  personal: {
    name: "Adam Hafidz",
    fullName: "Muhammad Adam Hafidz",
    initials: "AH",
    role: "Frontend Software Engineer",
    location: "Kuala Lumpur, Malaysia",
    email: "hafidzadam777@gmail.com",
    phone: "012-734 7727",
    phoneHref: "+60127347727",
    resume: "/resume-adam-hafidz-se.pdf",
    intro:
      "Passionate about delivering clean, maintainable, and high-performance frontend solutions.",
    about: [
      "I am a Frontend Software Engineer who turns complex requirements into clear, user-focused web applications with React, Next.js, TypeScript, and Tailwind CSS.",
      "At GovTech Malaysia, I contribute to public-facing services used across government, translating Figma designs into reusable MYDS-compliant interfaces and integrating them with production APIs.",
      "My background in computational physics gives me a structured, analytical approach to debugging and problem solving. I care about clean code, accessible systems, and products that work well for everyone.",
    ],
    socials: {
      github: "https://github.com/adamhafidz19",
      linkedin: "https://www.linkedin.com/in/adam-hafidz/",
    },
  },
  highlights: [
    { value: "6+", label: "Government platforms" },
    { value: "3", label: "Engineering roles" },
    { value: "3.94", label: "University CGPA" },
    { value: "MYDS", label: "Design system" },
  ],
  experience: [
    {
      company: "GovTech Malaysia",
      role: "Software Engineer",
      type: "Full-time",
      period: "Aug 2025 - Present",
      summary:
        "Building and maintaining public-facing government platforms across design systems, frontend applications, APIs, and cloud delivery.",
      highlights: [
        "Developed responsive and accessible interfaces for MYDS, RDMKD, Sekolahku, i-PPA, MyFaSA, and GovSuite DMS from Figma specifications.",
        "Built reusable components aligned with the Malaysian Government Design System and government digital standards.",
        "Integrated REST APIs and contributed to MVC standardization, automated API testing, technical spikes, and integration testing.",
        "Resolved cross-stack defects and collaborated through Scrum ceremonies, code reviews, Git workflows, testing, and AWS deployments.",
      ],
      technologies: ["TypeScript", "React", "Next.js", "Fastify", "ElysiaJS", "Laravel", "MongoDB", "Docker", "AWS"],
    },
    {
      company: "Hallucinations Digital",
      role: "Freelance Frontend Developer",
      type: "Freelance",
      period: "Jun 2026 - Present",
      summary:
        "Developing the Super Admin experience for Guardina Web in collaboration with product designers and backend engineers.",
      highlights: [
        "Built reusable user, partnership, and news management interfaces from Figma designs.",
        "Integrated REST APIs for CRUD workflows, filtering, data visualization, and administration.",
        "Delivered responsive dashboard features for content, user, partnership, and analytics management.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
    },
    {
      company: "Avialite Sdn Bhd",
      role: "Embedded Software Engineer",
      type: "Full-time",
      period: "Jan 2025 - Jul 2025",
      summary:
        "Supported research and development for dependable microcontroller-based aviation lighting products.",
      highlights: [
        "Developed and tested embedded C/C++ firmware with a focus on correctness and reliability.",
        "Worked with hardware engineers to integrate firmware, debug prototypes, and validate system behavior.",
        "Fixed defects and improved existing firmware structure and performance.",
      ],
      technologies: ["C", "C++", "STM32CubeIDE", "Embedded systems"],
    },
  ] satisfies Experience[],
  education: [
    {
      institution: "International Islamic University Malaysia (IIUM)",
      qualification: "B.Sc. Physics - Computational Physics (Honours)",
      period: "Oct 2020 - Aug 2024",
      cgpa: "3.94 / 4.00",
      achievements: [
        "Best Student (Overall), Kulliyyah of Science",
        "Final Year Project: Development and Application of High-Resolution CNN in UAV Detection",
      ],
    },
    {
      institution: "Centre for Foundation Studies, IIUM",
      qualification: "Foundation in Physical Science",
      period: "Jun 2019 - Jul 2020",
      cgpa: "3.98 / 4.00",
      achievements: [],
    },
  ],
  skillGroups: [
    {
      group: "Frontend engineering",
      description: "Interfaces, component systems, and responsive experiences",
      items: ["TypeScript", "JavaScript", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Accessibility"],
    },
    {
      group: "Backend & data",
      description: "API integration and supporting application services",
      items: ["REST APIs", "Fastify", "ElysiaJS", "Laravel", "Node.js (basic)", "PHP (basic)", "MongoDB", "MySQL"],
    },
    {
      group: "Delivery & tools",
      description: "The workflow behind stable production software",
      items: ["Git", "GitHub", "Docker", "Postman", "AWS (basic)", "Proxmox VE", "Jira", "Figma", "Linux"],
    },
    {
      group: "Systems & languages",
      description: "Foundations from embedded systems and scientific work",
      items: ["C", "C++", "Python (basic)", "Arduino IDE", "STM32CubeIDE", "Embedded systems"],
    },
    {
      group: "Standards & practice",
      description: "Consistent systems built around users and requirements",
      items: ["MYDS", "Design systems", "Figma handoff", "Agile / Scrum", "API testing", "Integration testing", "BRS alignment"],
    },
  ],
  projects: [
    {
      title: "GovSuite DMS",
      fullName: "Government Document Management System",
      category: "Backend & integration",
      description:
        "A document platform supporting structured storage, discovery, integrations, and processing workflows across government teams.",
      contributions: [
        "Developed RESTful APIs and MongoDB models for documents, folders, search, and system integrations.",
        "Improved search and data retrieval while connecting services with frontend applications, RabbitMQ, and processing systems.",
      ],
      tags: ["MongoDB", "REST APIs", "RabbitMQ", "System integration"],
      featured: true,
    },
    {
      title: "MYDS",
      fullName: "Malaysia Government Design System",
      category: "Design system",
      description:
        "A shared foundation for accessible, consistent, and recognizably Malaysian government digital services.",
      contributions: [
        "Developed and enhanced reusable UI components aligned with MYDS standards.",
        "Standardized components against SPLaSK policies and documented patterns for internal adoption.",
      ],
      tags: ["React", "Tailwind CSS", "Accessibility", "Documentation"],
      featured: true,
    },
    {
      title: "RDMKD",
      fullName: "Repositori Data dan Maklumat Kementerian Digital",
      category: "Frontend engineering",
      description:
        "A digital ministry repository with interfaces aligned to formal business requirements and MYDS standards.",
      contributions: [
        "Resolved UI and functional issues against Figma designs and Business Requirement Specifications.",
        "Refined responsive layouts, component consistency, and interaction behavior.",
      ],
      tags: ["React", "MYDS", "Figma", "Quality assurance"],
    },
    {
      title: "Sekolahku",
      fullName: "National School Information System",
      category: "Full-stack platform",
      description:
        "A scalable school information experience built on a decoupled frontend, API, and headless content architecture.",
      contributions: [
        "Implemented API-driven React interfaces from Figma specifications.",
        "Fixed functional and interface defects to strengthen user flows and system reliability.",
      ],
      tags: ["React", "Fastify", "Headless CMS", "REST APIs"],
    },
    {
      title: "MyFaSA",
      fullName: "Public Sector Facility Booking System",
      category: "Administrative platform",
      description:
        "A public-sector platform for facility bookings, approvals, user information, and administrative operations.",
      contributions: [
        "Built responsive Laravel Blade dashboard pages and components from Figma designs.",
        "Connected views to controllers and collaborated on facility approval workflows.",
      ],
      tags: ["Laravel", "Blade", "Responsive UI", "Admin workflows"],
    },
  ] satisfies Project[],
  // credentials: [
  //   {
  //     year: "2025",
  //     type: "Certification",
  //     title: "IoT System Design & Development",
  //     organization: "Udemy",
  //     description: "Completed a comprehensive course covering the design and development of end-to-end IoT systems.",
  //   },
  //   {
  //     year: "2024",
  //     type: "Certification",
  //     title: "CompTIA Security+",
  //     organization: "CompTIA",
  //     description: "Validated foundational knowledge across security operations, threats, architecture, and risk management.",
  //   },
  //   {
  //     year: "2024",
  //     type: "Academic distinction",
  //     title: "Best Student (Overall)",
  //     organization: "Kulliyyah of Science, IIUM",
  //     description: "Recognized for outstanding overall academic achievement in the graduating cohort.",
  //   },
  //   {
  //     year: "2024",
  //     type: "Research project",
  //     title: "High-Resolution CNN for UAV Detection",
  //     organization: "International Islamic University Malaysia",
  //     description: "Developed and applied a high-resolution convolutional neural network for UAV detection.",
  //   },
  // ],
} as const;
