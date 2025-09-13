'use server';
/**
 * @fileOverview A flow to fetch public repositories for a given GitHub username.
 *
 * - getGithubProjects - Fetches public repositories from GitHub.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { GetGithubProjectsInputSchema, GetGithubProjectsOutputSchema, GetGithubProjectsInput, GetGithubProjectsOutput } from '@/lib/types';


const fetchGithubRepos = ai.defineTool(
  {
    name: 'fetchGithubRepos',
    description: 'Fetches public repositories for a given GitHub username.',
    inputSchema: GetGithubProjectsInputSchema,
    outputSchema: GetGithubProjectsOutputSchema,
  },
  async (input) => {
    const response = await fetch(`https://api.github.com/users/${input.username}/repos?sort=updated&direction=desc`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repos for ${input.username}. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      topics: repo.topics || [],
      language: repo.language,
    }));
  }
);

const getGithubProjectsFlow = ai.defineFlow(
  {
    name: 'getGithubProjectsFlow',
    inputSchema: GetGithubProjectsInputSchema,
    outputSchema: GetGithubProjectsOutputSchema,
  },
  async (input) => {
    return await fetchGithubRepos(input);
  }
);

export async function getGithubProjects(input: GetGithubProjectsInput): Promise<GetGithubProjectsOutput> {
  return getGithubProjectsFlow(input);
}
