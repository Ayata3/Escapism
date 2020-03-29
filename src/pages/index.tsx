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

const IndexPage: React.FC<IndexPageProps> = props => {
  return (
    <TopTemplate>
      <div className="flex">
        Hello, My website{' '}
        {props.data.site.siteMetadata.siteName}
      </div>
    </TopTemplate>
  )
}

export default IndexPage
