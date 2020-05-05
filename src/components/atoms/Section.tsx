import React from 'react'

interface SectionProps {
  sectionName: string
  sectionSubName: string
  className: string
}

const Section: React.FC<SectionProps> = props => {
  return (
    <div className="flex">
      <h2 className={`text-3xl ${props.className}`}>
        {props.sectionName}
      </h2>
      <p className={`text-xs ml-2 pt-5 ${props.className}`}>
        / {props.sectionSubName}
      </p>
    </div>
  )
}

export default Section
