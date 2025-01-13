import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    text: z.string(),
    link: z.string().optional(),
    linkPreviewImage: z.string().optional(),
    author: z.string().default("Hoopy Frood"),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};
