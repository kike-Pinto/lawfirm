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
      <About />
      <div className='lg:px-36'>
        <Practice />
      </div>
      <div className='py-24'>
        <Appointment />
      </div>
      <div className='mb-16'>
        <Features />
      </div>

      <Action />
      <Attorneys />
      <Testimonial />
    </>
  )
}

export default HomePage
