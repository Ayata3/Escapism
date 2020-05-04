import React from 'react'
import { Link } from 'gatsby'

import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import TopHero from '../atoms/TopHero'
import ProfileCard from '../organisms/ProfileCard'
import Information from '../organisms/Infomation'

interface TopTemplateProps {
  posts: any
}

const TopTemplate: React.FC<TopTemplateProps> = ({
  posts,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <TopHero />
      <ProfileCard>
        <div className="flex justify-center mt-4">
          <Link to={'/profile'}>
            <button className="border border-white text-white py-2 px-10">
              Show More
            </button>
          </Link>
        </div>
      </ProfileCard>
      <Information posts={posts}>
        <div className="flex justify-center mt-4">
          <button className="border border-gray-900 text-gray-900 py-2 px-10">
            一覧を見る
          </button>
        </div>
      </Information>
      <Footer />
    </div>
  )
}

export default TopTemplate
