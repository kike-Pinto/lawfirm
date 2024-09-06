import React from 'react'
import feature from '../images/feature.jpg'

const Features = () => {
  return (
    // <div className='relative w-full overflow-hidden p-9 lg:px-14'>
    <div className='relative overflow-hidden py-0'>
      {/* <div className='w-full px-5 py-5'> */}
      {/* <div className='mx-auto lg:px-64 lg:pr-80 w-full '> */}
      <div className='rounded mx-auto py-10 lg:max-w-[1280px] w-full'>
        <div className='relative flex flex-wrap lg:flex-nowrap'>
          <div className='w-full lg:w-1/2 min-h-[630px] rounded-lg overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={feature}
              alt='Feature'
            />
          </div>

          {/* <div className='absolute mx-[480px] lg:w-1/2 pt-5 lg:pt-12 lg:pb-5 lg:pl-10 lg:pr-48'> */}
          {/* <div className='absolute inset-0 mx-[700px] flex items-center justify-center lg:w-1/2 pt-12 lg:pr-52 lg:pb-10'> */}
          <div className='w-full lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-end lg:ml-[40%] lg:max-w-[65%] lg:pb-12 pt-10 lg:pt-10'>
            <div className='bg-white rounded lg:p-12'>
              <h6 className='uppercase text-lg font-bold'>Our Features</h6>
              <h1 className='mb-2 mt-3 text-4xl font-bold font-roboto'>
                Why Choose Us
              </h1>

              <div className='flex mb-2'>
                <div className='flex items-center justify-center'>
                  <div
                    className='flex items-center justify-center bg-primary'
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                    }}
                  >
                    <h5
                      style={{ margin: 0, fontSize: '1.25rem', color: 'black' }}
                    >
                      01
                    </h5>
                  </div>
                </div>
                <div className='ml-4 py-1'>
                  <h5 className='text-xl font-semibold mt-5 font-roboto'>
                    Best Law Practices
                  </h5>
                  <p className='mt-2 text-base font-montserrat opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    labore officia, amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>

              <div className='flex mb-2'>
                <div className='flex items-center justify-center'>
                  <div
                    className='flex items-center justify-center bg-primary'
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                    }}
                  >
                    <h5
                      style={{ margin: 0, fontSize: '1.25rem', color: 'black' }}
                    >
                      02
                    </h5>
                  </div>
                </div>
                <div className='ml-4'>
                  <h5 className='text-xl font-semibold mt-5 font-roboto'>
                    Effiency & Trust
                  </h5>
                  <p className='mt-2 text-base font-montserrat opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, quasi possimus.
                  </p>
                </div>
              </div>

              <div className='flex mb-2'>
                <div className='flex items-center justify-center'>
                  <div
                    className='flex items-center justify-center bg-primary'
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                    }}
                  >
                    <h5
                      style={{ margin: 0, fontSize: '1.25rem', color: 'black' }}
                    >
                      03
                    </h5>
                  </div>
                </div>
                <div className='ml-4'>
                  <h5 className='text-xl font-semibold mt-5 font-roboto'>
                    Results You Reserve
                  </h5>
                  <p className='mt-2 text-base font-montserrat opacity-70'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    nam nobis nulla, amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
