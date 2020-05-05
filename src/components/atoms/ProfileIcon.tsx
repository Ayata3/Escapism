import React from 'react'
import Image from './Image'

const ProfileIcon: React.FC = () => {
  return (
    <div className="float-right mt-2 mr-8">
      <Image
        filename={'profile_icon'}
        addClassName={
          'rounded-full border-2 border-gray-100 bg-blue-700 h-24 w-24 lg:h-40 xl:h-40 lg:w-40 xl:w-40'
        }
      />
    </div>
  )
}

export default ProfileIcon
