import React from 'react'
import { HeadFC } from 'gatsby'
import TopTemplate from '../components/templates/TopTemplate'
import { FETCH_POSTS } from '../queries/posts'
import Metadata from '../components/atoms/Metadata'

const IndexPage: React.FC = () => {
  const posts = FETCH_POSTS()
  const latestPost = posts.edges.slice(0, 3)
  return <TopTemplate posts={latestPost} />
}

export default IndexPage

export const Head: HeadFC = () => (
  <Metadata title={'Top'} description={undefined} />
)
