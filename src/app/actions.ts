'use server';

import { reorderProjects } from '@/ai/flows/reorder-projects-flow';
import { getGithubProjects } from '@/ai/flows/get-github-projects-flow';
import { personalData } from '@/lib/data';
import { ReorderProjectsInput } from '@/lib/types';

export async function reorderProjectsAction(input: ReorderProjectsInput) {
  try {
    const reorderedProjects = await reorderProjects(input);
    return reorderedProjects;
  } catch (error) {
    console.error("Error reordering projects with AI:", error);
    // In case of an error, return the original projects to avoid breaking the UI
    return input.projects;
  }
}

export async function getGithubProjectsAction() {
  try {
    const githubUrl = personalData.contact.github;
    const username = githubUrl.split('/').pop();
    if (!username) {
      throw new Error('GitHub username could not be determined from the provided URL.');
    }
    const projects = await getGithubProjects({ username });
    return projects;
  } catch (error) {
    console.error("Error fetching projects from GitHub:", error);
    return [];
  }
}
