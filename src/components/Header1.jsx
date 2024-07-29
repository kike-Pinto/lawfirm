import React, { useState, useEffect } from 'react'
import MenuBar from './MenuBar'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY > 90) {
        setBg(true)
      } else {
        setBg(false)
      }
    })
  }, [])

  return (
    // <header className='w-full'>
    <header
      className={`${
        bg && 'shadow-md py-4'
      } p-0 lg:px-0 w-full fixed z-50 transition-all duration-300 bg-white`}
    >
      {/* <header
      className={`fixed top-0 pt-0 w-full z-50 transition-all duration-300 ${
        bg ? 'bg-white shadow-md py-4 h-10' : 'bg-white py-2 h-16'
      }`}
     > */}

      <div className='flex'>
        {/* Parte Izquierda Menu JUSTICE */}
        <div className='lg:w-1/4 lg:h-34 bg-secondary hidden lg:flex items-center justify-center'>
          <a
            href='/'
            className='w-100 h-100 inline-block py-[0.3125rem] mr-4 text-[1.25rem] leading-inherit whitespace-nowrap hover:no-underline focus:no-underline '
          >
            <h1 className='font-roboto text-5xl font-bold text-primary uppercase'>
              Justice
            </h1>
          </a>
        </div>

        <div className='lg:w-3/4'>
          <div className='hidden lg:flex bg-white w-full border-b p-2'>
            <div className='lg:w-7/12 text-left flex'>
              <div className='flex items-center py-6 px-6'>
                <FaEnvelope className='text-primary mr-2' />
                <span className='font-montserrat text-sm text-gray-500'>
                  info@example.com
                </span>
              </div>
              <div className='flex items-center py-2 px-6'>
                <FaPhoneAlt className='text-primary mr-2' />
                <span className='font-montserrat text-sm text-gray-500'>
                  +012 345 6789
                </span>
              </div>
            </div>

            {/* social media icons */}
            <div className='lg:w-5/12 flex items-center justify-end space-x-2 px-8'>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaFacebookF />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.twitter.com'
              >
                <FaTwitter />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.linkedin.com'
              >
                <FaLinkedinIn />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.instagram.com'
              >
                <FaInstagram />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.youtube.com'
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Botón de toggle */}
          <nav className='bg-white'>
            <div className='container mx-auto px-4 lg:px-0'>
              <div className='justify-between items-center'>
                <a href='/' className='block lg:hidden'>
                  <h1 className='text-primary text-4xl uppercase font-bold mt-6 pt-3'>
                    Justice
                  </h1>
                </a>
                <MenuBar />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
