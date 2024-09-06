'use client'
import React, { useState } from 'react'
import { poppins } from '@/app/fonts'
import ContactForm from './ContactForm'

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)
  return (
    <div className='px-4'>
      <div className='container mx-auto my-20 max-w-[800px] rounded-lg bg-[#172635] px-6 py-10 drop-shadow-md md:px-10 lg:px-14'>
        <div className='flex flex-col items-center gap-4 text-headingDarkText md:!grid md:grid-cols-5 md:place-items-center'>
          <span className='col-start-1 col-end-2 text-xl'>Get in Touch</span>
          <span
            className={`text-balance text-center text-base font-normal md:col-start-2 md:col-end-5 ${poppins.className}`}
          >
            <span className='hidden md:block'>
              Interested in working together? Just <br /> drop a message
            </span>
            <span className='md:hidden'>
              Interested in working together? Just drop a message
            </span>
          </span>
          <button
            onClick={handleOpen}
            className='cursor-design flex flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-8 py-2 text-center backdrop-blur-xl'
          >
            Contact Us
          </button>
        </div>
        {isOpen && (
          <>
            <div className='und relative mx-auto my-10'></div>
            <ContactForm />
          </>
        )}
      </div>
    </div>
  )
}

export default CallToAction
