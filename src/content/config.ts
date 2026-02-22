import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// This ensures your markdown frontmatter is correct
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});


const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		status: z.enum(['active', 'archived', 'completed']).default('completed'),
	}),
});

export const collections = { blog, projects };
