export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
  colorClass: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  testimonial: string;
  screenshotUrl?: string;
}
