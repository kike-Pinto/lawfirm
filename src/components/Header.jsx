import React, { useState } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full'>
      <div className='flex'>
        <div className='lg:w-1/4 lg:h-32 bg-secondary hidden lg:flex items-center justify-center'>
          <a
            href='index.html'
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
              <div className='flex items-center py-2 px-6'>
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

            {/* Social media icons */}
            <div className='lg:w-5/12 flex items-center justify-end space-x-2 px-8'>
              {/* rounded-full p-1 hover:bg-primary hover:text-white */}
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaFacebookF />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaTwitter />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaLinkedinIn />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaInstagram />
              </a>
              <a
                className='inline-block bg-white border border-primary text-primary rounded-md p-1 hover:bg-primary hover:text-black'
                href='www.facebook.com'
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* nav */}
          <nav className='bg-white '>
            <div className='container mx-auto px-4 lg:px-0'>
              <div className='flex justify-between items-center py-4'>
                <a href='index.html' className='block lg:hidden'>
                  <h1 className='text-primary text-4xl uppercase font-bold'>
                    Justice
                  </h1>
                </a>

                <button
                  className='focus:outline-none lg:hidden absolute top-3 right-3 p-2 border-2 border-black rounded w-[3.5rem]'
                  onClick={toggleMenu}
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
