import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikel = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    author: z.string(),
  }),
});

export const collections = { artikel };
