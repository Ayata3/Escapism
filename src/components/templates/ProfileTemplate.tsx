import React from 'react'
import Header from '../atoms/Header'
import Footer from '../atoms/Footer'
import ProfileCard from '../organisms/ProfileCard'
import History from '../organisms/History'
import Metadata from '../atoms/Metadata'

const ProfileTemplate: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Metadata
        title={'Profile'}
        description={
          'サークル「現実逃避跡地」で活動している多口綾汰のプロフィールです。'
        }
      />
      <Header />
      <ProfileCard />
      <History />
      {children}
      <Footer />
    </div>
  )
}

export default ProfileTemplate
