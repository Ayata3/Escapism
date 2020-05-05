import React from 'react'
import Header from '../components/atoms/Header'
import Footer from '../components/atoms/Footer'

const errorpage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="bg-gray-400 relative flex h-64 w-full">
        <div className="absolute w-full self-center text-center">
          <p className="sm:text-xl md:text-3xl lg:text-5xl xl:text-5xl">
            404
          </p>
          <p>Page not found :(</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default errorpage
