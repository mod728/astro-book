import { defineCollection, z } from "astro:content"

const blog = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        date: z.string(),
        image: z.string(),
        excerpt: z.string(),
    }),
})

export const collections = { blog }