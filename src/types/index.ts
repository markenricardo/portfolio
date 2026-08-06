export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  image?: string;
  link?: string;
  repo?: string;
  icon?: string;
  outcome?: string;
  details?: string[];
  features?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period?: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}
