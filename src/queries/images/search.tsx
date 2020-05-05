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
              sizes {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  return images
}
