import React from 'react'
import { graphql, HeadFC } from 'gatsby'

import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import InformationHero from '../atoms/InformationHero'
import Post from '../organisms/Post'
import Pagination from '../organisms/Pagination'
import Metadata from '../atoms/Metadata'

interface PostTemplateProps {
  data: any
  pageContext: any
}

const PostTemplate: React.FC<PostTemplateProps> = ({
  data,
  pageContext,
}) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <InformationHero />
      <Post post={post} />
      <Pagination previous={previous} next={next} />
      <Footer />
    </div>
  )
}

export default PostTemplate

export const Head: HeadFC<PostTemplateProps> = ({
  data,
  pageContext,
}) => {
  const post = data.markdownRemark

  return (
    <Metadata
      title={post.frontmatter.title}
      description={post.excerpt}
    />
  )
}

// TODO: queriesに移動できるようにする
export const fetchPost = graphql`
  query FetchPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 40)
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
      }
    }
  }
`
