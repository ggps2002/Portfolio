import { Project, Experience, Skill, Testimonial } from "./types";

export const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Excalidraw Notebook",
    description: "A multipage notebook with Excalidraw integration and dashboard features to manage drawings and diagrams.",
    imageUrl: "assets/excalidraw.png",
    category: "Personal Project",
    technologies: ["Next", "TypeScript", "Tailwind CSS", "Appwrite"],
    github: "https://github.com/ggps2002/Collabboard",
    demo: "https://collabboard.vercel.app/"
  },
  {
    id: 2,
    title: "AI Job Search Assistant",
    description: "An AI-powered job search platform for Azure AI Hackathon that enables users to find and save LinkedIn jobs with AI recommendations.",
    imageUrl: "assets/resume.png",
    category: "Hackathon",
    technologies: ["Next.js", "Azure AI", "Tailwind CSS", "API Integration", "Neon PostgreSQL"],
    github: "https://github.com/ggps2002/ai-resume-analyzer",
    demo: "https://ai-resume-analyzer-omega.vercel.app"
  },
  {
    id: 3,
    title: "Biblio",
    description: "A book summary platform where users can save and share summaries of books they've read.",
    imageUrl: "assets/biblio.png",
    category: "Personal Project",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PostgreSQL"],
    github: "https://github.com/ggps2002/BookManager",
    demo: "https://mellifluous-kringle-12e9db.netlify.app"
  },
  {
    id: 4,
    title: "AWS Navigation Helper",
    description: "A Chrome extension that helps users navigate AWS console by highlighting important buttons and providing concise steps.",
    imageUrl: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Chrome Extension",
    technologies: ["JavaScript", "Chrome API", "HTML/CSS"],
    github: "https://github.com/ggps2002/AWS-AI-Assistant-Chrome-Extension",
    // demo: "https://github.com/johndoe/aws-nav-helper/releases"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Web Developer",
    company: "Startup",
    year: "2024",
    description: "Developed and designed a compelling landing page that increased conversion rate by 24%.",
    achievements: [
      "Designed and developed a beautiful and descriptive landing page for the startup",
      "Implemented responsive design ensuring optimal experience across devices",
      "Collaborated effectively with cross-functional teams to deliver on schedule"
    ],
    technologies: ["React", "Tailwind CSS", "Next.js", "Figma", "Framer Motion"]
  },
  // {
  //   id: 2,
  //   role: "Freelance Web Developer",
  //   company: "Self-employed",
  //   year: "2022",
  //   description: "Worked on various client projects, developing websites and web applications with a focus on clean design and optimal user experience.",
  //   achievements: [
  //     "Built multiple client websites with responsive designs",
  //     "Implemented performance optimizations resulting in improved load times",
  //     "Maintained strong client relationships with clear communication"
  //   ],
  //   technologies: ["JavaScript", "HTML/CSS", "React", "WordPress"]
  // }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Esohe",
    role: "Product Manager",
    company: "Eventure",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial: "Pradipto's work on our company landing page exceeded all expectations. The design is not only beautiful but also highly functional and has significantly improved our conversion rates. His attention to detail and ability to translate our vision into reality was impressive.",
    // screenshotUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Kavic Blessing",
    role: "Web Developer",
    company: "Eventure",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial: "I had the pleasure of working with Pradipto on several projects. His code is clean, well-structured, and demonstrates a deep understanding of modern web development practices. He's excellent at problem-solving and always delivers high-quality work on time.",
    // screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  // {
  //   id: 3,
  //   name: "Emma Rodriguez",
  //   role: "UI/UX Designer",
  //   company: "DesignHub",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  //   testimonial: "Collaborating with John was an absolute joy. He has a great eye for design and brings technical expertise that complements the design process. The micro-interactions and animations he added to our project really elevated the user experience.",
  //   screenshotUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  // }
];

export const skills: Skill[] = [
  {
    category: "Front-end Development",
    items: [
      { name: "React / Next.js", level: "Advanced", percentage: 90, colorClass: "bg-primary" },
      { name: "JavaScript / TypeScript", level: "Advanced", percentage: 85, colorClass: "bg-primary" },
      { name: "HTML / CSS", level: "Advanced", percentage: 95, colorClass: "bg-primary" },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90, colorClass: "bg-primary" }
    ]
  },
  {
    category: "Back-end Development",
    items: [
      { name: "Node.js / Express", level: "Advanced", percentage: 95, colorClass: "bg-indigo-600 dark:bg-indigo-500" },
      { name: "MongoDB", level: "Intermediate", percentage: 70, colorClass: "bg-indigo-600 dark:bg-indigo-500" },
      { name: "RESTful APIs", level: "Advanced", percentage: 85, colorClass: "bg-indigo-600 dark:bg-indigo-500" },
      { name: "Firebase", level: "Intermediate", percentage: 80, colorClass: "bg-indigo-600 dark:bg-indigo-500" },
      { name: "FastAPI", level: "Intermediate", percentage: 80, colorClass: "bg-indigo-600 dark:bg-indigo-500" },
    ]
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", level: "Intermediate", percentage: 75, colorClass: "bg-pink-600 dark:bg-pink-500" },
      { name: "Figma", level: "Intermediate", percentage: 70, colorClass: "bg-pink-600 dark:bg-pink-500" },
      { name: "Responsive Design", level: "Advanced", percentage: 95, colorClass: "bg-pink-600 dark:bg-pink-500" },
      { name: "Animation", level: "Intermediate", percentage: 75, colorClass: "bg-pink-600 dark:bg-pink-500" }
    ]
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git / GitHub", level: "Advanced", percentage: 90, colorClass: "bg-green-600 dark:bg-green-500" },
      { name: "VS Code", level: "Advanced", percentage: 95, colorClass: "bg-green-600 dark:bg-green-500" },
      { name: "Vercel / Netlify", level: "Advanced", percentage: 85, colorClass: "bg-green-600 dark:bg-green-500" },
      { name: "CI/CD", level: "Intermediate", percentage: 70, colorClass: "bg-green-600 dark:bg-green-500" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", level: "Advanced", percentage: 90, colorClass: "bg-amber-600 dark:bg-amber-500" },
      { name: "Problem Solving", level: "Advanced", percentage: 95, colorClass: "bg-amber-600 dark:bg-amber-500" },
      { name: "Teamwork", level: "Advanced", percentage: 90, colorClass: "bg-amber-600 dark:bg-amber-500" },
      { name: "Time Management", level: "Advanced", percentage: 85, colorClass: "bg-amber-600 dark:bg-amber-500" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", level: "Beginner", percentage: 56, colorClass: "bg-purple-600 dark:bg-purple-500" },
      { name: "Azure", level: "Beginner", percentage: 50, colorClass: "bg-purple-600 dark:bg-purple-500" },
      { name: "Docker", level: "Intermediate", percentage: 65, colorClass: "bg-purple-600 dark:bg-purple-500" },
      { name: "Serverless", level: "Intermediate", percentage: 60, colorClass: "bg-purple-600 dark:bg-purple-500" }
    ]
  }
];
