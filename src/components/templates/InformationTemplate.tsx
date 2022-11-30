import React from 'react'

import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import InformationHero from '../atoms/InformationHero'
import Information from '../organisms/Infomation'

interface InformationTemplateProps {
  posts: any
}

const InformationTemplate: React.FC<InformationTemplateProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <InformationHero />
      <Information posts={posts} />
      <Footer />
    </div>
  )
}

export default InformationTemplate
