import React from 'react'
import about from '../images/about.jpg'
// py-20 px-20
const About = () => {
  return (
    <div className='container mx-auto py-28 mt-20 px-5 mb-28 lg:px-36'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-5/12'>
          <img
            className='max-w-full h-auto rounded'
            src={about}
            alt='About us'
          />
        </div>
        <div className='w-full lg:w-7/12 mt-4 lg:mt-0'>
          <h2 className='relative text-center bg-white text-primary font-bold text-3xl rounded p-5 mt-12 mb-8 hidden lg:block w-80 lg:ml-[-150px] sm:ml-[-20px] md:ml-[-50px]'>
            25 Years Experience
          </h2>
          <h6 className='uppercase font-semibold lg:pl-6 sm:pl-4 md:pl-48'>
            Learn About Us
          </h6>
          <h1 className='mb-4 mt-4 lg:pl-6 sm:pl-4 pr-20 font-bold text-2.5xl lg:text-4xl font-roboto lg:leading-tight'>
            We Provide Reliable And Effective Legal Services
          </h1>
          <p className='lg:pl-6 sm:pl-4 pr-6 text-justify font-montserrat font-thin leading-normal lg:leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quod
            deserunt laborum dolor sed dignissimos id beatae, earum,
            necessitatibus enim inventore quos iste dolores amet temporibus
            eligendi, quidem fugiat nulla!
          </p>
          <button className='bg-primary hover:bg-[#948056] text-black lg:ml-6 sm:ml-4 py-4 px-9 mt-10 rounded-md hover:text-white font-montserrat font-bold'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
