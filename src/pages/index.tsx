import { graphql } from 'gatsby'
import React from 'react'

import TopTemplate from '../components/templates/TopTemplate'

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

const IndexPage: React.FC<IndexPageProps> = () => {
  return <TopTemplate />
}

export default IndexPage
