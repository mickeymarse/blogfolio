import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Mickey'),
    // Transform string to Date object
    pubDate: z.date(),
    heroImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { blog };