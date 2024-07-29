import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, activeLink, setActiveLink, children }) => {
  const handleClick = () => {
    setActiveLink(children)
  }
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`text-roboto hover:text-primary flex ${
        activeLink === children ? 'text-primary' : ''
      }`}
    >
      {children}
    </Link>
  )
}

export default NavLink
