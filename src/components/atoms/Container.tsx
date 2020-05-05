import React from 'react'

interface ContainerProps {
  className: string
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <div
      className={`py-8 px-6 md:px-32 lg:px-48 xl:px-64 ${props.className}`}
    >
      <div className="container mx-auto lg:px-8 xl:px-24">
        {props.children}
      </div>
    </div>
  )
}

export default Container
