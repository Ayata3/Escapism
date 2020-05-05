import React from 'react'
import InformationTemplate from '../components/templates/InformationTemplate'
import { FETCH_POSTS } from '../queries/posts'

const InformationPage: React.FC = () => {
  const posts = FETCH_POSTS()
  return <InformationTemplate posts={posts.edges} />
}

export default InformationPage
