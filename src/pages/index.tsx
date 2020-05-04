import React from 'react'
import TopTemplate from '../components/templates/TopTemplate'
import { FETCH_POSTS } from '../queries/posts'

const IndexPage: React.FC = () => {
  const posts = FETCH_POSTS()
  return <TopTemplate posts={posts} />
}

export default IndexPage
