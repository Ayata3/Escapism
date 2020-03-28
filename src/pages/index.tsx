import { graphql } from 'gatsby'
import React from 'react'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

const IndexPage: React.FC<IndexPageProps> = props => {
  return (
    <div>
      Hello, My website{' '}
      {props.data.site.siteMetadata.siteName}
    </div>
  )
}

export default IndexPage
