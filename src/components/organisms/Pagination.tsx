import React from 'react'
import Container from '../atoms/Container'
import { Link } from 'gatsby'

interface PaginationProps {
  previous: any
  next: any
}

const Pagination: React.FC<PaginationProps> = ({
  previous,
  next,
}) => {
  const PreviousButton = previous ? (
    <Link to={`information${previous.fields.slug}`}>
      <div className="text-gray-900 mx-8">
        <div className="my-4">
          <div className="lg:text-lg xl:text-lg font-semibold mb-2">
            {previous.frontmatter.title}
          </div>
          <p className="text-sm">{previous.excerpt}</p>
          <p className="text-sm text-right my-1">
            {previous.frontmatter.date}
          </p>
        </div>
      </div>
    </Link>
  ) : null

  const NextButton = next ? (
    <Link to={`information${next.fields.slug}`}>
      <div className="text-gray-900 mx-8">
        <div className="my-4">
          <div className="lg:text-lg xl:text-lg font-semibold mb-2">
            {next.frontmatter.title}
          </div>
          <p className="text-sm">{next.excerpt}</p>
          <p className="text-sm text-right my-1">
            {next.frontmatter.date}
          </p>
        </div>
      </div>
    </Link>
  ) : null

  return (
    <Container className={'bg-white'}>
      <div className="grid grid-flow-row grid-cols-2 gap-0">
        <div className="col-span-1 border-t border-b border-r border-gray-900">
          {PreviousButton}
        </div>
        <div className="col-span-1 border-t border-b border-l border-gray-900">
          {NextButton}
        </div>
      </div>
    </Container>
  )
}

export default Pagination
