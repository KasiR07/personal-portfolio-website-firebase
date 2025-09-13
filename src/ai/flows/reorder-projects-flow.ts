'use server'

/**
 * @fileOverview Uses generative AI to reorder projects based on name, description, and technologies.
 *
 * - reorderProjects - A function that reorders projects.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { ReorderProjectsInputSchema, ReorderProjectsOutputSchema, ReorderProjectsInput, ReorderProjectsOutput } from '@/lib/types';


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
