import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import NavLink from './NavLink'

const MenuBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobilDropdownOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home') // Estado para el enlace activo

  // funcion para alternar el estado del dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  // funcion para alternar el estado del menu movil
  const toggleMobilMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setMobilDropdownOpen(false) // cierra el dropdown del menu movil al abrir/cerrar el menu movil
  }

  // funcion para alternar el estado del dropdown movil
  const toggleMobileDropdown = () => {
    setMobilDropdownOpen(!mobileDropdownOpen)
  }

  // funcion para manejar el click en los enlaces del menu
  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <nav className='bg-white p-4'>
      <div className='max-w-7xl px-4'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          {/* Menu para pantallas grandes */}
          <div className='hidden lg:flex space-x-6 items-center'>
            <NavLink
              to='/'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              About
            </NavLink>
            <NavLink
              to='/practice'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Practice
            </NavLink>
            <NavLink
              to='/attorneys'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Attorneys
            </NavLink>

            <div className='relative'>
              <button
                onClick={toggleDropdown}
                className='text-roboto flex items-center hover:text-primary'
              >
                Dropdown <HiChevronDown className='ml-1' />
              </button>
              {dropdownOpen && (
                <div className='absolute left-0 mt-2 bg-white text-roboto shadow-lg rounded-md w-48 z-10 space-y-2 border-2 p-2'>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 1
                  </NavLink>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 2
                  </NavLink>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 3
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to='/contact'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Contact
            </NavLink>
          </div>
          <div className='lg:hidden ml-auto'>
            {/* icono de hamburgesa para el menu movil */}
            <button
              onClick={toggleMobilMenu}
              className='ml-auto text-black focus:outline-none lg:hidden absolute top-9 right-3 p-2 border-2 rounded-md focus:ring-2 focus:ring-black'
            >
              <svg
                className='w-9 h-7 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex items-center justify-end ml-auto lg:ml-0 lg:mr-0 mb-2'>
            <button className='bg-primary text-[#37373f] font-bold px-6 py-3 rounded-md hover:text-white mr-3'>
              Get A Quote
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={`${
            mobileMenuOpen
              ? 'max-h-screen opacity-100 transition-max-height duration-1000 ease-in-out'
              : 'max-h-0 opacity-0 transition-max-height duration-1000 ease-in-out'
          } overflow-hidden lg:hidden`}
        >
          <div className='flex flex-col space-y-5 mt-2 mb-5'>
            <NavLink
              to='/'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              About
            </NavLink>
            <NavLink
              to='/practice'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Practice
            </NavLink>
            <NavLink
              to='/attorneys'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Attorneys
            </NavLink>
            <div className='relative'>
              <button
                onClick={toggleMobileDropdown}
                className='text-roboto flex items-center hover:text-primary'
              >
                Dropdown <HiChevronDown className='ml-1' />
              </button>
              {mobileDropdownOpen && (
                <div className='mt-2 bg-white text-roboto shadow-lg rounded-md w-full z-10 space-y-2 border-2 p-2'>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 1
                  </NavLink>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 2
                  </NavLink>
                  <NavLink
                    to='/'
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  >
                    Option 3
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              href='/contact'
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MenuBar
