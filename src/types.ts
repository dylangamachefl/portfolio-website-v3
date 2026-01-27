

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  sourceUrl?: string;
  color: string;
  imageUrl?: string;
}

export interface Interest {
  id: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  iconPath: string;
  color?: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
