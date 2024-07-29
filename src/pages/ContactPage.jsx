import React, { useState } from 'react'

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formState.name) newErrors.name = 'Please enter your name'
    if (!formState.email) newErrors.email = 'Please enter your email'
    if (!formState.subject) newErrors.subject = 'Please enter a subject'
    if (!formState.message) newErrors.message = 'Please enter your message'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit form
      console.log('Form Submitted:', formState)
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <div className='py-5 bg-gray-100'>
      <div className='container mx-auto py-5 px-20 mt-48'>
        <div className='text-center pb-2'>
          <h6 className='uppercase text-gray-800 tracking-widest p-4'>
            Contact Us
          </h6>
          <h1 className='text-3xl lg:text-5xl mb-8 mt-2 font-roboto'>
            Contact For Any Query
          </h1>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 mb-5 mt-10 lg:mb-0'>
            <div className='bg-white p-8 shadow-lg rounded-lg'>
              <form
                name='sentMessage'
                id='contactForm'
                noValidate
                onSubmit={handleSubmit}
              >
                <div className='flex flex-wrap mb-4'>
                  <div className='w-full sm:w-1/2 px-2 mb-4 sm:mb-0'>
                    <input
                      type='text'
                      className='w-full p-4 border rounded'
                      id='name'
                      placeholder='Your Name'
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.name && (
                      <p className='text-red-500 text-xs mt-1'>{errors.name}</p>
                    )}
                  </div>
                  <div className='w-full sm:w-1/2 px-2'>
                    <input
                      type='email'
                      className='w-full p-4 border rounded'
                      id='email'
                      placeholder='Your Email'
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && (
                      <p className='text-red-500 text-xs mt-1'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className='mb-4 px-2'>
                  <input
                    type='text'
                    className='w-full p-4 border rounded'
                    id='subject'
                    placeholder='Subject'
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.subject && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className='mb-4 px-2'>
                  <textarea
                    className='w-full p-4 border rounded'
                    rows='6'
                    id='message'
                    placeholder='Message'
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className='mb-4 px-2'>
                  <button
                    type='submit'
                    className='bg-primary hover:bg-[#948056] text-black w-full py-4 px-10 lg:mt-5 mt-10 rounded-md hover:text-white font-montserrat font-bold'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className='w-full lg:w-1/2 px-5 pt-10'
            style={{ minHeight: '300px' }}
          >
            <div className='relative h-full rounded overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.485545322069!2d-71.53017659111617!3d-32.77310235247221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689c1befd47a3c1%3A0x75892826fefd39c9!2sCondominio%20Costa%20del%20Mar!5e0!3m2!1sen!2scl!4v1722099556974!5m2!1sen!2scl'
                width='600'
                height='500'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
                title='Quintero - Quinta Region, Chile'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
