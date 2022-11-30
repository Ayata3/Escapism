import React from 'react'
import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import ProfileCard from '../organisms/ProfileCard'
import History from '../organisms/History'

const ProfileTemplate: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <ProfileCard />
      <History />
      {children}
      <Footer />
    </div>
  )
}

export default ProfileTemplate
