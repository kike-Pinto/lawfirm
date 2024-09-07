import React from 'react'
import About from '../components/About'
import Practice from '../components/Practice'
import Attorneys from '../components/Attorneys'
import Carousel from '../components/Carousel'
import Appointment from '../components/Appointment'
import Features from '../components/Features'
import '../index.css'
import Action from '../components/Action'
import Testimonial from '../components/Testimonial'

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16 mt-40'>
        <About />
      </div>
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16 mt-40'>
        <Practice />
      </div>
      <div className='py-24 max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16 mt-40'>
        <Appointment />
      </div>
      <div className='mb-16 max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16'>
        <Features />
      </div>
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16'>
        <Action />
      </div>
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16'>
        <Attorneys />
      </div>
      <div className='max-w-screen-xl mx-auto px-4 lg:px-8 xl:px-12 xxl:px-16 mt-0'>
        <Testimonial />
      </div>
    </>
  )
}

export default HomePage
