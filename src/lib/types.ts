import type { LucideIcon } from "lucide-react";
import { z } from 'zod';

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
  html_url?: string;
};

export type Skill = {
  name:string;
  icon: React.ReactNode;
};

export type CategorizedSkill = {
  category: string;
  skills: Skill[];
}

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  link: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
}

export const GetGithubProjectsInputSchema = z.object({
  username: z.string().describe('The GitHub username.'),
});
export type GetGithubProjectsInput = z.infer<typeof GetGithubProjectsInputSchema>;

const GithubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  topics: z.array(z.string()),
  language: z.string().nullable(),
});

export const GetGithubProjectsOutputSchema = z.array(GithubRepoSchema);
export type GetGithubProjectsOutput = z.infer<typeof GetGithubProjectsOutputSchema>;


const ProjectSchema = z.object({
  name: z.string().describe('The name of the project.'),
  description: z.string().describe('A detailed description of the project.'),
  technologies: z.array(z.string()).describe('An array of technologies used in the project.'),
});

export type ProjectForReorder = z.infer<typeof ProjectSchema>;

export const ReorderProjectsInputSchema = z.object({
  projects: z.array(ProjectSchema).describe('An array of projects to reorder.'),
});
export type ReorderProjectsInput = z.infer<typeof ReorderProjectsInputSchema>;

export const ReorderProjectsOutputSchema = z.array(ProjectSchema);
export type ReorderProjectsOutput = z.infer<typeof ReorderProjectsOutputSchema>;
