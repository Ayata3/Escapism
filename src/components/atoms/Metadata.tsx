import React from 'react'
import { Helmet } from 'react-helmet'
import { FETCH_SITE } from '../../queries/site'

interface MetadataProps {
  title: string | undefined
  description: string | undefined
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
}) => {
  const site = FETCH_SITE()

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            description || site.siteMetadata.description,
        },
        {
          name: 'og:title',
          content: title || site.siteMetadata.title,
        },
        {
          name: 'og:description',
          content:
            description || site.siteMetadata.description,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title || site.siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content:
            description || site.siteMetadata.description,
        },
      ]}
    />
  )
}

export default Metadata
