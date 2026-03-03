import { defineCollection, z } from 'astro:content';

const sharedSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	category: z.enum(['server', 'network']),
	tags: z.array(z.string()).default([]),
	updated: z.coerce.date(),
});

const articles = defineCollection({
	type: 'content',
	schema: sharedSchema,
});

const templates = defineCollection({
	type: 'content',
	schema: sharedSchema,
});

export const collections = {
	articles,
	templates,
};
