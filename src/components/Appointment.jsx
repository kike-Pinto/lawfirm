import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import '../styles/estilos.css' // Archivo CSS personalizado para estilos

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [time, setTime] = useState('10:00')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleDateChange = (date) => {
    setStartDate(date)
    setIsCalendarOpen(false)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className='relative overflow-hidden py-20 lg:py-5 mb-0'>
      <div className='bg-appointment rounded mx-auto px-5 py-20 lg:max-w-[1250px] w-full'>
        <div className='flex h-100 items-center justify-center'>
          <div className='w-[500px]'>
            <div
              className='rounded p-5 my-5'
              style={{ background: 'rgba(55, 55, 63, .7)' }}
            >
              <h1 className='text-center text-white mb-8 mt-8 sml:text-3xl font-semibold font-roboto'>
                Get An Appointment
              </h1>
              <form onSubmit={handleSubmit} className='relative p-4'>
                <div className='mb-4'>
                  <input
                    type='text'
                    className='border-0 p-4 rounded-md w-full text-xs md:text-base'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type='email'
                    className='border-0 p-4 rounded-md w-full text-xs md:text-base'
                    placeholder='Your Email'
                    required
                  />
                </div>

                <div className='flex mb-4 flex-col sm:flex-row'>
                  <div className='w-full sm:w-1/2 pr-0 sm:pr-2 relative'>
                    <input
                      type='text'
                      value={format(startDate, 'dd/MM/yyyy', { locale: es })}
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      readOnly
                      className='p-4 mb-3 rounded cursor-pointer custom-datepicker w-full text-xs md:text-base'
                      placeholder={format(new Date(), 'dd/MM/yyyy', {
                        locale: es,
                      })}
                    />
                    {isCalendarOpen && (
                      <div className='absolute top-full mt-2 z-50'>
                        <Calendar
                          onChange={handleDateChange}
                          value={startDate}
                          locale='es-ES'
                          className='custom-calendar text-xs md:text-base'
                          minDate={new Date()}
                        />
                      </div>
                    )}
                  </div>
                  <div className='w-full sm:w-1/2 pl-0 sm:pl-2'>
                    <input
                      type='time'
                      value={time}
                      onChange={handleTimeChange}
                      className='custom-time-input border-0 p-4 rounded-md w-full text-xs md:text-base'
                    />
                  </div>
                </div>

                <div className='mb-4'>
                  <select className='custom-select border-0 lg:-mt-3 px-4 py-4 mb-1 rounded-md w-full text-xs md:text-base'>
                    <option disabled selected>
                      Select A Service
                    </option>
                    <option value='1'>Service 1</option>
                    <option value='2'>Service 2</option>
                    <option value='3'>Service 3</option>
                  </select>
                </div>
                <div>
                  <button
                    className='bg-primary hover:bg-[#948056] text-black py-4 px-9 rounded-md hover:text-white font-montserrat font-bold w-full text-xs md:text-base'
                    type='submit'
                  >
                    Get An Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
