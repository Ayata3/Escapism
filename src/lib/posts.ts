import {
  getCollection,
  type CollectionEntry,
} from 'astro:content'

export type Post = CollectionEntry<'posts'>

/** 記事一覧とページネーションが必要とする値だけを持つ。 */
export interface PostSummary {
  slug: string
  path: string
  title: string
  date: string
  excerpt: string
}

/** Gatsby の date(formatString: "YYYY/MM/DD") に相当する。 */
export const formatDate = (date: Date): string => {
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  const d = String(date.getUTCDate()).padStart(2, '0')
  return `${y}/${m}/${d}`
}

/**
 * Gatsby の excerpt(pruneLength: 40, truncate: true) に相当する。
 * Markdown記法と生HTMLを落としたうえで、単語境界を考慮せず切り詰める。
 * Gatsby は lodash の truncate を使っており、pruneLength に省略記号を
 * 含めるため、本文は pruneLength - 1 文字までとする。
 */
export const excerpt = (
  body: string,
  pruneLength = 40
): string => {
  const text = body
    .replace(/<[^>]*>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}(?:#{1,6}|>|[-*+])\s+/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\\([.,!?])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

  return text.length > pruneLength
    ? `${text.slice(0, pruneLength - 1)}…`
    : text
}

export const toSummary = (entry: Post): PostSummary => ({
  slug: entry.id,
  path: `/information/${entry.id}/`,
  title: entry.data.title,
  date: formatDate(entry.data.date),
  excerpt: excerpt(entry.body ?? ''),
})

/** Gatsby の allMarkdownRemark(sort: {frontmatter: {date: DESC}}) に相当する。 */
export const getSortedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection('posts')
  return posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )
}
