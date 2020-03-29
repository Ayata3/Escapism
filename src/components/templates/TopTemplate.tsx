import React from 'react'
import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import TopHero from '../atoms/TopHero'
import ProfileCard from '../molecules/ProfileCard'

const TopTemplate: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <TopHero />
      <ProfileCard>
        <div className="flex justify-center mt-4">
          <button className="border border-white text-white py-2 px-10">
            Show More
          </button>
        </div>
      </ProfileCard>
      {children}
      <Footer />
    </div>
  )
}

export default TopTemplate
