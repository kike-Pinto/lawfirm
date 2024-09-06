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
      {/* Ajusta el padding horizontal (px) para alinear en todas las pantallas */}
      {/* <div className='max-w-screen-xl mx-auto lg:px-16 lgl:px-12 xl:px-12 xxl:px-16'> */}
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-16 xxl:px-[77px] mt-32'>
        <About />
      </div>

      {/* Alineación del Appointment, ajustando el margen superior y padding lateral mt-[-100px] */}
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-16 xxl:px-[77px] mt-32'>
        <Appointment />
      </div>

      {/* Ajuste similar para el Features */}
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-[60px] xxl:px-[73px] mt-24'>
        <Features />
      </div>
    </>
  )
}

export default AboutPage
