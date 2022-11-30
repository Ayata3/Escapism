import React from 'react'
import InformationTemplate from '../components/templates/InformationTemplate'
import { FETCH_POSTS } from '../queries/posts'
import Metadata from '../components/atoms/Metadata'
import { HeadFC } from 'gatsby'

const InformationPage: React.FC = () => {
  const posts = FETCH_POSTS()
  return <InformationTemplate posts={posts.edges} />
}

export default InformationPage

export const Head: HeadFC = () => (
  <Metadata
    title={'Information'}
    description={
      'サークル「現実逃避跡地」のインフォメーションです。'
    }
  />
)
