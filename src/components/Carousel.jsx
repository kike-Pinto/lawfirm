import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/styles.css'
import carousel1 from '../images/carousel-1.jpg'
import carousel2 from '../images/carousel-2.jpg'

const Carousel = () => {
  return (
    <div>
      <div className='w-full mt-[-13px]'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          speed={2000}
          className='cursor-pointer w-full custom-swiper'
        >
          <SwiperSlide>
            <div className='relative w-full min-h-screen'>
              <img
                src={carousel1}
                alt='Slice 1'
                className='absolute inset-0 w-full h-full object-cover brightness-75'
              />
              <div className='relative z-10 p-4 md:p-8 text-center'>
                {/* <div className='relative z-10 p-3 max-w-3xl text-center'> */}
                <h2
                  className='text-white uppercase mb-8 font-roboto text-2xl'
                  style={{ letterSpacing: '3px', marginTop: '250px' }}
                >
                  Best Law Agency
                </h2>

                <h1
                  className='text-5xl md:text-6xl lg:text-8xl text-white mb-4 font-bold font-roboto'
                  style={{ letterSpacing: '2px', lineHeight: '1.2' }}
                >
                  Our Fighting Is For
                  <br />
                  Your Justice
                </h1>
                <button className='bg-primary hover:bg-[#948056] text-black py-4 px-9 mt-10 lg:mt-5 rounded-md hover:text-white font-montserrat font-bold'>
                  Get An Appointment
                </button>
              </div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-full min-h-screen'>
              <img
                src={carousel2}
                alt='Slide 2'
                className='absolute inset-0 w-full h-full object-cover brightness-75'
              />
              <div className='relative z-10 p-4 md:p-8 text-center'>
                <h4
                  className='text-white uppercase mb-8 font-roboto text-2xl'
                  style={{ letterSpacing: '3px', marginTop: '250px' }}
                >
                  Results Your Deserve
                </h4>
                <h1
                  className='text-5xl md:text-6xl lg:text-8xl text-white mb-4 font-bold font-roboto'
                  style={{ letterSpacing: '2px', lineHeight: '1.2' }}
                >
                  We Prepared To Oppose
                  <br />
                  For You
                </h1>
                <button className='bg-primary hover:bg-[#948056] text-black py-4 px-10 lg:mt-5 mt-10 rounded-md hover:text-white font-montserrat font-bold'>
                  Call Us Now
                </button>
              </div>
              <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel
