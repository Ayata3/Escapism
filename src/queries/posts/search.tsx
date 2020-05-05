import { graphql, useStaticQuery } from 'gatsby'

export const FETCH_POSTS = (): any => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query FetchPosts {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 40)
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
