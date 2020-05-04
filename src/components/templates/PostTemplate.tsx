import React from 'react'

import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import InformationHero from '../atoms/InformationHero'
import { graphql } from 'gatsby'

const PostTemplate: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <InformationHero />
      <Footer />
    </div>
  )
}

export default PostTemplate

// TODO: queriesに移動できるようにする
export const fetchPost = graphql`
  query FetchPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        description
        title
      }
    }
  }
`
