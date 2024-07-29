import React from 'react'

const Action = () => {
  return (
    <div className='w-full py-5 px-10 lg:px-28'>
      <div className='py-28 max-w-[1240px] mx-auto'>
        <div className='bg-action rounded h-[600px]'>
          <div className='flex items-center justify-center h-full'>
            <div className='text-center max-w-lg'>
              <h1 className='text-white mb-4 text-[1.8rem] lg:text-[2.5rem] p-5 lg:p-0 font-roboto font-bold'>
                Let's get started. Call us now for a Free Consultation
              </h1>
              <button className='bg-primary hover:bg-[#948056] text-black py-4 px-10 mt-5 rounded-md hover:text-white font-montserrat font-bold'>
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Action
