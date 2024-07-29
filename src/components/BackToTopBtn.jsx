import React, { useEffect, useState } from 'react'

// import react scroll
import { animateScroll as scroll } from 'react-scroll'

// import icon
import { FaChevronUp } from 'react-icons/fa'

const BackToTopBtn = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  })

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        style={{ backgroundColor: '#B49C73', color: 'white' }}
        className='flex justify-center items-center w-12 h-12 fixed z-10 right-8 bottom-16 lg:bottom-12 rounded-sm cursor-pointer text-sm transition-all duration-300 hover:bg-black hover:text-black border-2 border-primary'
      >
        <FaChevronUp />
      </button>
    )
  )
}

export default BackToTopBtn
