import React from 'react'
import Section from '../atoms/Section'
import Container from '../atoms/Container'
import BottomBorderBox from '../atoms/BottomBorderBox'
import { Link } from 'gatsby'

interface InformationProps {
  posts: any
}

const Information: React.FC<InformationProps> = ({
  posts,
  children,
}) => {
  return (
    <Container className={'bg-white'}>
      <Section
        sectionName={'Information'}
        sectionSubName={'インフォメーション'}
        className={'text-orange-400'}
      />
      {posts.map((post: any) => {
        return (
          <div
            className="text-gray-900 mx-8"
            key={post.node.fields.slug}
          >
            <div className="my-4">
              <Link
                to={`information${post.node.fields.slug}`}
              >
                <BottomBorderBox>
                  <p className="lg:text-lg xl:text-lg font-semibold mb-2">
                    {post.node.frontmatter.title}
                  </p>
                  <p className="text-sm">
                    {post.node.excerpt}
                  </p>
                  <p className="text-sm text-right my-1">
                    {post.node.frontmatter.date}
                  </p>
                </BottomBorderBox>
              </Link>
            </div>
          </div>
        )
      })}
      {children}
    </Container>
  )
}

export default Information
