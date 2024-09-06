import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/estilos.css'

const Practice = () => {
  return (
    // <div className='container mx-auto mb-52 lg:mb-36 px-4 lg:px-8'>
    // <div className='container mx-auto mb-28'>
    <div className='w-full lg:w-3/8 xl:w-full mb-28'>
      {/* flex flex-col lg:flex-row w-full */}
      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 lgl:px-4'>
          <h6 className='mb-3 mt-3 uppercase font-roboto font-bold lg:text-[1rem]'>
            Our Practice
          </h6>
          <h1 className='mb-4 font-roboto text-4xl lg:text-[1.3rem] leading-tight'>
            Our Practice Areas
          </h1>
          <p className='text-justify mb-8 font-montserrat opacity-50 text-base lg:text-[0.8rem] lgl:text-[0.8rem] xl:text-base lgl:leading-5'>
            Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem
            ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed
            sed diam. Ea et erat ut sed diam sea ipsum.
          </p>
          <button className='bg-primary hover:bg-[#948056] text-black sm:p-4 xl:text-[1.2rem] lgl:text-[0.8rem] mb-4 py-3 lgl:px-7 xl:px-4 mt-4 rounded-md hover:text-white font-montserrat font-bold'>
            More Services
          </button>
        </div>

        <div className='w-full mt-4 lg:w-2/3 lg:pt-0 lg:pl-8'>
          <div className='bg-primary h-64 rounded-lg lg:h-60 p-6'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              slidesPerView={1}
              spaceBetween={20}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              fadeEffect={{ crossFade: true }}
              speed={2000}
              className='w-full custom-swiper2'
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 mt-28 '>
                  <div className='flex items-center justify-center w-24 h-24 bg-secondary text-primary rounded-full mt-4 mb-4'>
                    <i className='fa fa-2x fa-landmark'></i>
                  </div>
                  <h5 className='font-roboto text-xl lg:text-2xl mb-4 mt-4'>
                    Civil Law
                  </h5>
                  <p className='lg:text-[0.8rem] xl:text-[0.8rem] font-montserrat text-center opacity-50'>
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 mt-28'>
                  <div className='flex items-center justify-center w-24 h-24 bg-secondary text-primary rounded-full mt-4 mb-4'>
                    <i className='fa fa-2x fa-users'></i>
                  </div>
                  <h5 className='font-roboto text-xl lg:text-2xl mb-4 mt-4'>
                    Family Law
                  </h5>
                  <p className='lg:text-[0.8rem] xl:text-[0.8rem] font-montserrat text-center opacity-50'>
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 mt-28'>
                  <div className='flex items-center justify-center w-24 h-24 bg-secondary text-primary rounded-full mt-4 mb-4'>
                    <i className='fa fa-2x fa-hand-holding-usd'></i>
                  </div>
                  <h5 className='font-roboto text-xl lg:text-2xl mb-4 mt-4'>
                    Business Law
                  </h5>
                  <p className='lg:text-[0.8rem] xl:text-[0.8rem] font-montserrat text-center opacity-50'>
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 mt-28'>
                  <div className='flex items-center justify-center w-24 h-24 bg-secondary text-primary rounded-full mt-4 mb-4'>
                    <i className='fa fa-2x fa-gavel'></i>
                  </div>
                  <h5 className='font-roboto text-xl lg:text-2xl mb-4 mt-4'>
                    Criminal Law
                  </h5>
                  <p className='lg:text-[0.8rem] xl:text-[0.8rem] font-montserrat text-center opacity-50'>
                    Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita
                    sit duo dolor stet at at. Tempor dolor sit ipsum
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice
