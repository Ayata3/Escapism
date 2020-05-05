import React from 'react'
import TopTemplate from '../components/templates/TopTemplate'
import { FETCH_POSTS } from '../queries/posts'

const IndexPage: React.FC = () => {
  const posts = FETCH_POSTS()
  const latestPost = posts.edges.slice(0, 3)
  return <TopTemplate posts={latestPost} />
}

export default IndexPage
