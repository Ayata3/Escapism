import { graphql, useStaticQuery } from 'gatsby'

export const FETCH_IMAGES = (): any => {
  const { images } = useStaticQuery(graphql`
    query FetchImages {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 92, height: 92) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return images
}
