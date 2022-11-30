import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ProfileIcon: React.FC = () => {
  return (
    <div className="float-right mt-2 mr-8">
      <StaticImage
        src="./../../images/profile_icon.jpg"
        className="rounded-full border-2 border-gray-100 bg-blue-700 h-24 w-24 lg:h-40 xl:h-40 lg:w-40 xl:w-40"
        alt="プロフィール画像"
      />
    </div>
  )
}

export default ProfileIcon
