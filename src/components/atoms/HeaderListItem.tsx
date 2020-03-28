import React from 'react'

interface HeaderListItemProps {
  text: string
  href: string
}

const HeaderListItem: React.FC<HeaderListItemProps> = props => {
  return (
    <a
      href={props.href}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
    >
      {props.text}
    </a>
  )
}

export default HeaderListItem
