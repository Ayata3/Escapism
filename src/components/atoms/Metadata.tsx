import React from 'react'
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
    <>
      <title>
        {title + ' | ' + site.siteMetadata.title}
      </title>
      <meta
        name="description"
        content={
          description || site.siteMetadata.description
        }
      />
      <meta
        name="og:title"
        content={title || site.siteMetadata.title}
      />
      <meta
        name="og:description"
        content={
          description || site.siteMetadata.description
        }
      />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata.social.twitter}
      />
      <meta
        name="twitter:title"
        content={title || site.siteMetadata.title}
      />
      <meta
        name="twitter:description"
        content={
          description || site.siteMetadata.description
        }
      />
      <meta
        name="google-site-verification"
        content="Wj-rsWIHA_2EegrJ7sDJAdyhoD2mAR4wk68w1_NPwZA"
      />
    </>
  )
}

export default Metadata
