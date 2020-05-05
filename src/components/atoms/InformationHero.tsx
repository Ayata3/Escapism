import React from 'react'

const InformationHero: React.FC = () => {
  return (
    <div className="bg-gray-400 relative flex">
      <h1 className="absolute w-full self-center text-center sm:text-xl md:text-3xl lg:text-5xl xl:text-5xl">
        Information
      </h1>
      <img className="object-cover h-32 w-full" />
    </div>
  )
}

export default InformationHero
