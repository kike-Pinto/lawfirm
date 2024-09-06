import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import testimonial1 from '../images/testimonial-1.jpg'
import testimonial2 from '../images/testimonial-2.jpg'
import testimonial3 from '../images/testimonial-3.jpg'
import testimonial4 from '../images/testimonial-4.jpg'
import '../styles/estilos.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Testimonial = () => {
  return (
    // <div className=' mx-auto w-full px-10 lg:px-5 xs:p-0 testimonial-carousel'>
    <div className='w-full py-0 testimonial-carousel'>
      {/* <div className='container mx-auto py-0 mt-0 px-1'> */}
      <div className='py-28 lgl:max-w-[1240px] mx-auto'>
        <div className='text-center pb-3'>
          <h6 className='uppercase mb-2 mt-0'>Testimonial</h6>
          <h1 className='text-2xl lg:text-4xl font-roboto font-bold mb-20'>
            What Our Clients Say
          </h1>
        </div>

        <Slider {...settings}>
          <div className='w-full'>
            <div className='testimonial-text relative bg-secondary text-gray-200 text-center rounded xs:px-5 xs:py-5 sml:px-10 sml:py-10 m-3 mb-4 font-montserrat'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae cumque architecto voluptate sunt impedit.
            </div>
            <div className='flex items-center px-3 pt-6'>
              <img
                src={testimonial1}
                alt=''
                className='rounded-full w-[80px] h-[80px]'
              />
              <div className='pl-6'>
                <h5 className='text-2xl font-roboto'>Client Name</h5>
                <p className='m-0 opacity-70'>Profession</p>
              </div>
            </div>
          </div>

          <div>
            <div className='testimonial-text relative bg-secondary text-gray-200 text-center rounded xs:px-5 xs:py-5 sml:px-10 sml:py-10 m-3 mb-4 font-montserrat'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae cumque architecto voluptate sunt impedit.
            </div>
            <div className='flex items-center px-3 pt-6'>
              <img
                src={testimonial2}
                alt=''
                className='rounded-full w-[80px] h-[80px]'
              />
              <div className='pl-6'>
                <h5 className='text-2xl font-roboto'>Client Name</h5>
                <p className='m-0 opacity-70'>Profession</p>
              </div>
            </div>
          </div>

          <div>
            <div className='testimonial-text relative bg-secondary text-gray-200 text-center rounded xs:px-5 xs:py-5 sml:px-10 sml:py-10 m-3 mb-4 font-montserrat'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae cumque architecto voluptate sunt impedit.
            </div>
            <div className='flex items-center px-3 pt-6'>
              <img
                src={testimonial3}
                alt=''
                className='rounded-full w-[80px] h-[80px]'
              />
              <div className='pl-6'>
                <h5 className='text-2xl font-roboto'>Client Name</h5>
                <p className='m-0 opacity-70'>Profession</p>
              </div>
            </div>
          </div>

          <div>
            <div className='testimonial-text relative bg-secondary text-gray-200 text-center rounded xs:px-5 xs:py-5 sml:px-10 sml:py-10 m-3 mb-4 font-montserrat'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae cumque architecto voluptate sunt impedit.
            </div>
            <div className='flex items-center px-3 pt-6'>
              <img
                src={testimonial4}
                alt=''
                className='rounded-full w-[80px] h-[80px]'
              />
              <div className='pl-6'>
                <h5 className='text-2xl font-roboto'>Client Name</h5>
                <p className='m-0 opacity-70'>Profession</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
