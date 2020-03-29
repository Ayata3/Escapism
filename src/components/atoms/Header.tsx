import React from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => {
  return (
    <nav className="p-2">
      <Link to={'/'}>
        <div className="flex justify-center">
          <p className="text-3xl">Escapism</p>
          <p className="text-xs ml-2 pt-5">
            / 現実逃避跡地
          </p>
        </div>
      </Link>
    </nav>
  )
}

export default Header
