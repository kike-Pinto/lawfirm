import React from 'react'
import team1 from '../images/team-1.jpg'
import team2 from '../images/team-2.jpg'
import team3 from '../images/team-3.jpg'
import team4 from '../images/team-4.jpg'
import team5 from '../images/team-5.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import '../styles/estilos.css'

const Attorneys = () => {
  return (
    <div className='w-full py-0'>
      {/* <div className='container mx-auto py-5'> */}
      <div className='py-28 lgl:max-w-[1240px] mx-auto'>
        <div className='text-center pb-3 mb-5'>
          <h6 className='uppercase'>Our Attorneys</h6>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
            Meet Our Attorneys
          </h1>
        </div>
        <div className='flex flex-wrap justify-center'>
          {/* <div className='w-full text-center mt-1 lgl:w-[1300px] lg:px-16 h-[500px]'> */}
          <div className='w-full text-center mt-1 h-[500px] lgl:-px-20'>
            <div className='bg-primary rounded h-[206px] custom1'>
              {/* <div className='relative mt-[-97px] px-7.5'> */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                fadeEffect={{ crossFade: true }}
                speed={2000}
                className='w-full custom-swiper3'
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div className='custom-container text-center bg-white rounded overflow-hidden mt-24 pt-8 w-full max-w-[280px] mx-auto'>
                    <h5 className='text-2xl mb-2 px-4 font-bold font-roboto'>
                      Attorney Name
                    </h5>
                    <p className='mb-3 px-4'>Practice Area</p>
                    <div className='relative'>
                      <img src={team1} alt='' className='w-full' />
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
                        {/* text-white flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-colors */}
                        <div className='space-x-4 flex mt-40'>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='custom-container text-center bg-white rounded overflow-hidden mt-24 pt-8 w-full sm:max-w-[280px] mx-auto'>
                    <h5 className='text-2xl mb-2 px-4 font-bold font-roboto'>
                      Attorney Name
                    </h5>
                    <p className='mb-3 px-4'>Practice Area</p>
                    <div className='relative'>
                      <img src={team2} alt='' className='w-full' />
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
                        {/* text-white flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-colors */}
                        <div className='space-x-4 flex mt-40'>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='custom-container text-center bg-white rounded overflow-hidden mt-24 pt-8 w-full  sm:max-w-[280px] mx-auto'>
                    <h5 className='text-2xl mb-2 px-4 font-bold font-roboto'>
                      Attorney Name
                    </h5>
                    <p className='mb-3 px-4'>Practice Area</p>
                    <div className='relative'>
                      <img src={team3} alt='' className='w-full' />
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
                        {/* text-white flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-colors */}
                        <div className='space-x-4 flex mt-40'>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='custom-container text-center bg-white rounded overflow-hidden mt-24 pt-8 w-full sm:max-w-[280px] mx-auto'>
                    <h5 className='text-2xl mb-2 px-4 font-bold font-roboto'>
                      Attorney Name
                    </h5>
                    <p className='mb-3 px-4'>Practice Area</p>
                    <div className='relative'>
                      <img src={team4} alt='' className='w-full' />
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
                        {/* text-white flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-colors */}
                        <div className='space-x-4 flex mt-40'>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='custom-container text-center bg-white rounded overflow-hidden mt-24 pt-8 w-full sm:max-w-[280px] mx-auto'>
                    <h5 className='text-2xl mb-2 px-4 font-bold font-roboto'>
                      Attorney Name
                    </h5>
                    <p className='mb-3 px-4'>Practice Area</p>
                    <div className='relative'>
                      <img src={team5} alt='' className='w-full' />
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
                        {/* text-white flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-colors */}
                        <div className='space-x-4 flex mt-40'>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-twitter'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-facebook-f'></i>
                          </a>
                          <a
                            href='/'
                            className='text-white flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition-colors rounded-lg'
                          >
                            <i class='fab fa-linkedin-in'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attorneys
