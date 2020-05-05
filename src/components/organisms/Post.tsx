import React from 'react'
import Container from '../atoms/Container'

interface PostProps {
  post: any
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Container className={'bg-white'}>
      <div>
        <time dateTime={post.frontmatter.date}>
          {post.frontmatter.date}
        </time>
      </div>
      <div className="mb-4">
        <h1 className="text-3xl text-orange-400">
          {post.frontmatter.title}
        </h1>
      </div>
      <section
        className="post"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Container>
  )
}

export default Post
