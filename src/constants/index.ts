import { Github, Linkedin, Mail, FileText, ExternalLink, Award, Users, Cpu, Trophy, Star, BookOpen } from "lucide-react";

export const PROFILE = {
  name: "Vighnesh Chejara",
  headline: "Focused On Growth, Fueled By Innovation.",
  summary: "Driven engineer focused on AI, IoT, and full-stack development. Passionate about building scalable solutions, from autonomous driving tech to cognitive recovery apps. Always exploring new horizons in software innovation.",
  email: "Vighnesh2464004@gmail.com",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Inevitable07H", // Kept from existing
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vighnesh-chejara-9b425b259", // Kept from existing
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=Vighnesh2464004@gmail.com",
      icon: Mail,
    },
  ],
  resume: "https://autumn-haze-426.linkyhost.com", // Placeholder
};

export const EDUCATION = [
  {
    institution: "Ghanshaymdas Saraf College", // Placeholder as exact details weren't verifiable
    degree: "BSc in Information Technology",
    CGPA: "CGPA: 9.75",
    duration: "2023 - 2025",
  },
  {
    institution: "Durgadevi Saraf College", // Placeholder as exact details weren't verifiable
    degree: "12th Standard",
    CGPA: "Percentage: 89%",
    duration: "2022",
  },
  {
    institution: "St.Xaviers High School,Borivali(East)", // Placeholder as exact details weren't verifiable
    degree: "10th Standard",
    CGPA: "Percentage: 86.20%",
    duration: "2020",
  }
  // Add more if needed
];

export const EXPERIENCE = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Graduate Trainee",
    date: "Jan 2026 - Present.",
    description: "",
    isPlaceholder: true, // Flag to style differently
  },
  {
    company: "26ideas",
    role: "Software Developer Intern",
    date: "Apr 2024 – Jun 2024",
    description: "Developed an NLP-based Resume Parser and automated Meeting Summary Generator. Optimized internal tools to enhance UI/UX efficiency.",
    link: "https://withered-feather-76.linkyhost.com"
  },
];

export const PROJECTS = [
  {
    title: "Dr. Driving",
    description: "Advanced driver-assistance system (ADAS) focusing on vehicle safety and automation.",
    tech: ["Python", "AI", "Computer Vision"], // Inferred
    link: "https://github.com/Inevitable07H/Dr.Drivings",
    linkStatus: "Project link will be added"
  },
  {
    title: "Building My 1st Agent & Multi Agent Using Google API and ADK",
    tech: ["Python", "ADK"],
    link: "https://colab.research.google.com/drive/1rQ4nxYvzxymABOKrEIFP6KV3_skiefXV",
    linkStatus: "Project link will be added"
  },
  {
    title: "Agent Tools & Interoperability with Model Context Protocol (MCP)",
    tech: ["Python", "ADK"],
    link: "https://colab.research.google.com/drive/1QmdcbVhUX52iQiZxHTG_eWMtDMPaX8-4",
    linkStatus: "Project link will be added"
  },
  {
    title: "Context Engineering: Sessions & Memory",
    tech: ["Python", "ADK"],
    link: "https://colab.research.google.com/drive/1JqemF_YmHTJ646rSG9lYm5y3pTGHWRJh",
    linkStatus: "Project link will be added"
  },
  {
    title: "Building Up with the Agent Quality",
    tech: ["Python", "ADK"],
    link: "https://colab.research.google.com/drive/1VyewjFhdFTZeBUV5WXB-YYGRHbwYqOpw",
    linkStatus: "Project link will be added"
  },
  {
    title: "Building Multi-Agent using A2A Protocol & Deploying it.",
    tech: ["Python", "ADK"],
    link: "https://colab.research.google.com/drive/1GL8gtK3-6CM8HOAx3M8iAAlwGGQH390o",
    linkStatus: "Project link will be added"
  },
  {
    title: "Dev_Search",
    description: "A terminal-based developer tool for efficient information searching while coding.",
    tech: ["Python", "Bash", "CLI"],
    link: "https://github.com/Inevitable07H/Dev_Search",
    linkStatus: "Project link will be added"
  },
  {
    title: "WallStudio",
    description: "Upto 8K Image resolution generation within a 3D interactive space.",
    tech: ["TypeScript", "Three.js", "AI"],
    link: "https://github.com/Inevitable07H/WallStudio",
  },
  {
    title: "NexusAI",
    description: "A centralized platform for accessing and managing multiple AI models.",
    tech: ["TypeScript", "AI", "Platform"],
    link: "https://github.com/Inevitable07H/NexusAI",
  },

];

export const SKILLS = {
  technical: [
    "Python", "Java", "C++", "React.js", "Next.js", "Three.js", "IoT Development", "NLP", "Vibe Coding."
  ],
  tools: [
    "Git", "VS Code", "Docker", "Figma", "Linux", "ADK(Agent Development Kit by Google.)"
  ],
  soft: [
    "Leadership", "Communication", "Team Management", "Problem Solving"
  ]
};

export const VOLUNTEER = [
  {
    organization: "Technowizz",
    roles: [
      {
        title: "Event Lead – Technowizz 7.0",
        date: "August 2024",
        impact: "Managed the event end-to-end, coordinating teams and logistics."
      },
      {
        title: "Project Developer – Technowizz 6.0",
        date: "September 2023",
        impact: "Contributed to technical project development and execution."
      }
    ],
    logo: "/logos/technowizz.png" // User will upload
  },
  {
    organization: "Rotaract",
    roles: [
      {
        title: "Digital Communication Director",
        date: "2023–2024",
        impact: "Spearheaded digital communication strategies to increase outreach."
      },
      {
        title: "Chairman – Digital Media",
        date: "2024–2025",
        impact: "Led digital media initiatives and content creation teams."
      }
    ],
    logo: "/logos/rotaract.jpeg" // User will upload
  },
  {
    organization: "GSCC",
    roles: [
      {
        title: "Inter Aavishkar Research Competition.",
        date: "2024",
        impact: "Lead the whole Aavishkar Student Team to help organize, cooperate and maintain the flow, to make sure that event runs smoothly."
      },

    ],

  }
];

export const AWARDS = [
  {
    title: "Best Student in Self Finance Course",
    date: "January 2025",
    organization: "Ghanshaymdas Saraf College",
    image: "/awards/best_student1.jpeg",
    image1: "/awards/best_student2.jpeg",
    image2: "/awards/best_student3.jpeg",
  }
];

export const CERTIFICATIONS = [
  {
    name: "Mumbai Hacks 2025",
    organization: "HCL Tech",
    year: "2025",
    link: "https://quiet-silence-634.linkyhost.com/",
    linkText: "View Certificate"
  },
  {
    name: "SOLID Prinicples Every Developers Must Know.",
    organization: "Scaler",
    year: "2025",
    link: "https://falling-dawn-130.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Deloitte Data Analytics Job Simulation",
    organization: "Forage",
    year: "2025",
    link: "https://blue-glitter-677.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Deloitte Technology Job Simulation",
    organization: "Forage",
    year: "2025",
    link: "https://morning-hill-536.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in MYSQL.",
    organization: "MBTB",
    year: "2024",
    link: "https://muddy-wave-40.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in Python.",
    organization: "MBTB",
    year: "2023",
    link: "https://frosty-breeze-220.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in Java Advance.",
    organization: "MBTB",
    year: "2023",
    link: "https://throbbing-wind-931.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in Java Core.",
    organization: "MBTB",
    year: "2023",
    link: "https://icy-sky-717.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in C++.",
    organization: "MBTB",
    year: "2023",
    link: "https://throbbing-firefly-360.linkyhost.com",
    linkText: "View Certificate"
  },
  {
    name: "Programming in C.",
    organization: "MBTB",
    year: "2023",
    link: "https://bitter-forest-33.linkyhost.com",
    linkText: "View Certificate"
  },
  // Add more
];
