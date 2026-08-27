import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// id が Gatsby の createFilePath による slug と一致するため、
// /information/<slug>/ を移行後もそのまま維持できる。
const posts = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    // frontmatter に ISO8601 形式と日付のみの形式が混在している。
    date: z.coerce.date(),
  }),
})

export const collections = { posts }
