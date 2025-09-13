import { config } from 'dotenv';
config();

import '@/ai/flows/reorder-projects-flow.ts';
import '@/ai/flows/get-github-projects-flow.ts';
import '@/ai/flows/generate-image-hint-flow.ts';
