import React from 'react'

const Footer = () => {
  return (
    <div
      className='lg:max-w-full bg-secondary text-white pt-5 px-3 md:px-5'
      style={{ marginTop: '90px' }}
    >
      <div className='flex flex-wrap mt-5 bg-opacity-5 bg-white'>
        <div className='w-full lg:w-1/3 p-4 -mx-20 lg:mx-0'>
          <div className='flex justify-center lg:justify-center lg:p-6 lg:bg-opacity-5 lg:bg-white'>
            <i className='fa fa-2x fa-map-marker-alt text-primary'></i>
            <div className='ml-3 px-1'>
              <h5 className='text-white font-bold font-roboto'>Our Office</h5>
              <p className='font-montserrat m-0'>Location, City, Country</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3 p-4 -mx-24 lg:mx-0'>
          <div className='flex justify-center lg:justify-center lg:p-6 lg:bg-opacity-5 lg:bg-white'>
            <i className='fa fa-2x fa-envelope-open text-primary'></i>
            <div className='ml-3 px-1'>
              <h5 className='text-white font-bold font-roboto'>Email Us</h5>
              <p className='font-montserrat m-0'>info@example.com</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/3 p-4 -mx-28 lg:mx-0'>
          <div className='flex justify-center lg:justify-center lg:p-6 lg:bg-opacity-5 lg:bg-white'>
            <i className='fa fa-2x fa-phone-alt text-primary'></i>
            <div className='ml-3 px-1'>
              <h5 className='text-white font-bold font-roboto'>Call Us</h5>
              <p className='font-montserrat m-0'>+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap pt-5 px-4'>
        <div className='w-full lg:w-1/4 md:w-1/2 mb-5 lg:pr-3'>
          <a href='/'>
            <h1 className='uppercase text-primary text-6xl font-bold font-roboto mt-2'>
              Justice
            </h1>
          </a>
          <p className='mt-2 font-montserrat'>
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sed kasd et
          </p>
          <div className='flex justify-start mt-4 space-x-2'>
            <a
              className='text-white flex items-center justify-center w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
              href='/'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              className='text-white flex items-center justify-center w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
              href='/'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              className='text-white flex items-center justify-center w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
              href='/'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a
              className='text-white flex items-center justify-center w-12 h-12 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
              href='/'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>

        <div className='w-full lg:w-1/4 md:w-1/2 mb-5'>
          <h4 className='font-semibold font-roboto text-primary text-2xl mb-5'>
            Popular Links
          </h4>
          <div className='flex flex-col justify-start mb-5 space-y-2'>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Home
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>About
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Services
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Attorney
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Contact
            </a>
          </div>
        </div>

        <div className='w-full lg:w-1/4 md:w-1/2 mb-5'>
          <h4 className='font-semibold font-roboto text-primary text-2xl mb-5'>
            Quick Links
          </h4>
          <div className='flex flex-col justify-start mb-5 space-y-2'>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>FAQs
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Helps
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Terms
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Privacy
            </a>
            <a href='/'>
              <i className='fa fa-angle-right mr-2'></i>Site Map
            </a>
          </div>
        </div>

        <div className='w-full lg:w-1/4 md:w-1/2 mb-5'>
          <h4 className='font-semibold text-primary mb-4 font-roboto text-2xl'>
            Newsletter
          </h4>
          <p>
            Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
            sea tempor magna tempor. Accu kasd sed ea duo ipsum.
          </p>
          <div className='w-full'>
            <div className='flex'>
              <input
                type='text'
                className='flex-grow p-3 mt-5 rounded-lg border-10'
                placeholder='Your Email'
              />
              <button className='bg-primary hover:bg-[#948056] text-black py-3 px-8 mt-5 rounded-md hover:text-white font-montserrat font-bold'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap p-4 mt-5 mx-0 bg-white bg-opacity-5'>
        <div className='w-full md:w-1/2 text-center md:text-left mb-3 md:mb-0'>
          <p className='m-0 text-white font-montserrat'>
            &copy;{' '}
            <a className='font-bold text-primary' href='/'>
              Your Site Name
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className='w-full md:w-1/2 text-center md:text-right'>
          <p className='m-0 text-white font-montserrat'>
            Designed by{' '}
            <a
              className='font-bold text-primary'
              href='https://freewebsitecode.com'
            >
              Free Website Code
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
