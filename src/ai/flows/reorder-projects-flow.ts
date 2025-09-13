// use server'

/**
 * @fileOverview Uses generative AI to reorder projects based on name, description, and technologies.
 *
 * - reorderProjects - A function that reorders projects.
 * - ReorderProjectsInput - The input type for the reorderProjects function.
 * - ReorderProjectsOutput - The return type for the reorderProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSchema = z.object({
  name: z.string().describe('The name of the project.'),
  description: z.string().describe('A detailed description of the project.'),
  technologies: z.array(z.string()).describe('An array of technologies used in the project.'),
});

export type Project = z.infer<typeof ProjectSchema>;

const ReorderProjectsInputSchema = z.object({
  projects: z.array(ProjectSchema).describe('An array of projects to reorder.'),
});
export type ReorderProjectsInput = z.infer<typeof ReorderProjectsInputSchema>;

const ReorderProjectsOutputSchema = z.array(ProjectSchema);
export type ReorderProjectsOutput = z.infer<typeof ReorderProjectsOutputSchema>;

export async function reorderProjects(input: ReorderProjectsInput): Promise<ReorderProjectsOutput> {
  return reorderProjectsFlow(input);
}

const reorderProjectsPrompt = ai.definePrompt({
  name: 'reorderProjectsPrompt',
  input: {schema: ReorderProjectsInputSchema},
  output: {schema: ReorderProjectsOutputSchema},
  prompt: `You are an expert portfolio curator. Analyze the following projects and reorder them in the most impressive and relevant order.

Projects:
{{#each projects}}
  - Name: {{this.name}}
    Description: {{this.description}}
    Technologies: {{this.technologies}}
{{/each}}

Reordered Projects:`,
});

const reorderProjectsFlow = ai.defineFlow(
  {
    name: 'reorderProjectsFlow',
    inputSchema: ReorderProjectsInputSchema,
    outputSchema: ReorderProjectsOutputSchema,
  },
  async input => {
    const {output} = await reorderProjectsPrompt(input);
    return output!;
  }
);
