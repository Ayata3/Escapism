import { graphql, useStaticQuery } from 'gatsby'

export const FETCH_POSTS = (): any => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query FetchPosts {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
      ) {
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 40, truncate: true)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY/MM/DD")
              title
            }
          }
        }
      }
    }
  `)
  return allMarkdownRemark
}
