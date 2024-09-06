import React from 'react'
import carousel2 from '../images/carousel-2.jpg'
import Practice from '../components/Practice'
import Action from '../components/Action'
import Testimonial from '../components/Testimonial'

const PracticePage = () => {
  return (
    <>
      {/* <div className='relative w-full h-full pt-32 pb-40 lg:pb-60 lg:pt-10 '> */}
      <div className='relative w-full pt-20 lg:pt-24'>
        <img
          src={carousel2}
          alt='example'
          // className='w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] transform transition-transform duration-500 hover:scale-110'
          className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-custom-gradient'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-white text-4xl lg:text-7xl uppercase font-bold font-roboto'>
              Practice
            </h3>
            <div className='flex mt-5'>
              <p className='m-0 uppercase'>
                <a href='/' className='text-white font-montserrat'>
                  Home
                </a>
              </p>
              <i class='fa fa-angle-double-right pt-1 px-3 text-white'></i>
              <p className='m-0 uppercase text-white font-montserrat'>
                Practice
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-16 xxl:px-[77px] mt-40'>
        <Practice />
      </div>

      {/* Alineación del Appointment, ajustando el margen superior y padding lateral mt-[-100px] */}
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-16 xxl:px-[77px] mt-60'>
        <Action />
      </div>

      {/* Ajuste similar para el Features */}
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-[60px] xxl:px-[73px]'>
        <Testimonial />
      </div>
    </>
  )
}

export default PracticePage
