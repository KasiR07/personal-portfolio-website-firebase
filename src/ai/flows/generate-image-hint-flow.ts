'use server';
/**
 * @fileOverview A flow to generate a concise image hint for a project.
 * 
 * - generateImageHint - Generates a one or two-word hint for an image.
 * - GenerateImageHintInput - The input type for the generateImageHint function.
 * - GenerateImageHintOutput - The return type for the generateImageHint function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { GenerateImageHintInputSchema, GenerateImageHintOutputSchema, GenerateImageHintInput, GenerateImageHintOutput } from '@/lib/types';

const generateImageHintFlow = ai.defineFlow(
  {
    name: 'generateImageHintFlow',
    inputSchema: GenerateImageHintInputSchema,
    outputSchema: GenerateImageHintOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `Based on the project name, description, and technologies, provide a concise one or two-word hint (e.g., "data visualization", "machine learning", "mobile app") that can be used to find a relevant background image.

Project Details:
- Name: ${input.name}
- Description: ${input.description}
- Technologies: ${input.technologies.join(', ')}

Hint:`,
      model: 'googleai/gemini-2.5-flash',
      output: {
        format: 'text',
      },
    });
    return output as string;
  }
);

export async function generateImageHint(input: GenerateImageHintInput): Promise<GenerateImageHintOutput> {
  return generateImageHintFlow(input);
}
