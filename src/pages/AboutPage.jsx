import React from 'react'
import About from '../components/About'
import Appointment from '../components/Appointment'
import Features from '../components/Features'
import '../index.css'

const AboutPage = () => {
  return (
    <>
      <div className='w-full bg-action'>
        <div className='flex flex-col items-center justify-center min-h-[700px]'>
          <h3 className='text-white text-6xl uppercase font-bold font-roboto pt-28'>
            About
          </h3>
          <div className='flex mt-5'>
            <p className='m-0 uppercase'>
              <a href='/' className='text-white'>
                Home
              </a>
            </p>
            <i class='fa fa-angle-double-right pt-1 px-3 text-white'></i>
            <p className='m-0 uppercase text-white'>About</p>
          </div>
        </div>
      </div>
      <About />
      <div className='mt-[-100px]'>
        <Appointment />
      </div>

      <Features />
    </>
  )
}

export default AboutPage
