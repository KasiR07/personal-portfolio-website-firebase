'use server';

import { reorderProjects, ReorderProjectsInput } from '@/ai/flows/reorder-projects-flow';

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
