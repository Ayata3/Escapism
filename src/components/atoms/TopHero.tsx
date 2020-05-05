import React from 'react'

const TopHero: React.FC = () => {
  return (
    <div className="bg-gray-400 relative flex">
      <h1 className="absolute w-full self-center text-center sm:text-xl md:text-3xl lg:text-5xl xl:text-5xl">
        現実逃避跡地
      </h1>
      <img className="object-cover h-64 w-full" />
    </div>
  )
}

export default TopHero
