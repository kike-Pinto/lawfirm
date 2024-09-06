import React from 'react'
import about from '../images/about.jpg'

const About = () => {
  return (
    // <div className='container mx-auto  py-28 mt-10 lg:mb-10'>
    <div className='w-full lg:w-3/8 xl:w-full mt-20 mb-24'>
      <div className='flex flex-wrap items-center'>
        {/* Imagen */}
        <div className='w-full lg:w-5/12 flex'>
          <img
            className='max-w-full h-auto rounded mdl:w-full lg:max-w-[400px] xl:max-w-[450px]'
            src={about}
            alt='About us'
          />
        </div>

        {/* Contenido textual */}
        <div className='w-full lg:w-7/12 flex flex-col mt-10 lg:mt-2 xxl:pl-5'>
          <h2 className='relative bg-white text-primary font-bold text-2xl lg:text-3xl rounded mb-8 lg:ml-[-150px] '>
            25 Years Experience
          </h2>

          <h6 className='uppercase font-semibold lg:pl-3 xl:pl-0'>
            Learn About Us
          </h6>

          <h1 className='mb-4 mt-4 pr-20 font-bold text-2xl sm:text-xl lg:text-2xl font-roboto leading-snug lg:pl-3 xl:pl-0'>
            We Provide Reliable And Effective Legal Services
          </h1>

          <p className='pr-6 text-justify font-montserrat leading-normal font-thin lgl:text-[1rem] xl:text-xl lg:pl-3 xl:pl-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quod
            deserunt laborum dolor sed dignissimos id beatae, earum,
            necessitatibus enim inventore quos iste dolores amet temporibus
            eligendi, quidem fugiat nulla!
          </p>

          {/* Botón */}
          <div className='flex lg:justify-start lg:pl-3 xl:pl-0'>
            <button className='bg-primary hover:bg-[#948056] text-black py-4 px-9 mt-6 lg:mt-4 rounded-md hover:text-white font-montserrat font-bold'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
