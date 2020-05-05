import React from 'react'

import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import InformationHero from '../atoms/InformationHero'
import Information from '../organisms/Infomation'
import Metadata from '../atoms/Metadata'

interface InformationTemplateProps {
  posts: any
}

const InformationTemplate: React.FC<InformationTemplateProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Metadata
        title={'Information'}
        description={
          'サークル「現実逃避跡地」のインフォメーションです。'
        }
      />
      <Header />
      <InformationHero />
      <Information posts={posts} />
      <Footer />
    </div>
  )
}

export default InformationTemplate
