import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// posts/<YYYY-MM-DD>/index.md というディレクトリ構成のため、
// エントリのidはディレクトリ名（例: '2017-08-18'）になる。
// これは Gatsby が createFilePath で生成していた slug と一致し、
// /information/<slug>/ というURLをそのまま維持できる。
const posts = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    // frontmatter の date は '2017-08-18T22:00:00.000Z' 形式と
    // '2017-08-20' 形式が混在しているため coerce で吸収する。
    date: z.coerce.date(),
  }),
})

export const collections = { posts }
