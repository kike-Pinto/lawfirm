import React, { useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative inline-block text-left w-full'>
      <div>
        <button
          type='button'
          className='hover:text-primary text-[#37373f] text-[17px] font-bold font-roboto outline-none ml-4'
          id='menu-button'
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup='true'
        >
          Dropdown
          <span className='ml-2'>&#9662;</span>{' '}
          {/* Triángulo al lado del texto */}
        </button>
      </div>

      {isOpen && (
        <div
          className='right-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          style={{ top: '100%' }}
        >
          <div className='py-1' role='none'>
            <a
              href='/'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Option 1
            </a>
            <a
              href='/'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Option 2
            </a>
            <a
              href='/'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
