import type { LucideIcon } from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
};

export type PersonalData = {
  name: string;
  role: string;
  intro: string;
  about: string;
  avatar: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export type Experience = {
  company: string;
  company_link: string;
  role: string;
  duration: string;
  description: string;
  location: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
};

export type Skill = {
  name:string;
  icon: React.ReactNode;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  link: string;
};
