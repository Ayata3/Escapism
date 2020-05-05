import { graphql, useStaticQuery } from 'gatsby'

export const FETCH_SITE = (): any => {
  const { site } = useStaticQuery(graphql`
    query FetchSite {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `)
  return site
}
