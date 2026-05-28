import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    date: z.string(),
    excerpt: z.string(),
    featured: z.boolean().optional().default(false),
    image: z.string().optional(),
    products: z
      .array(
        z.object({
          name: z.string(),
          image: z.string(),
          price: z.string().optional(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { articles };
