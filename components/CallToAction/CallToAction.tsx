'use client'
import React, { useState } from 'react'
import { poppins } from '@/app/fonts'
import ContactForm from './ContactForm'

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)
  return (
    <div className='container mx-auto mt-20 max-w-[800px] rounded-lg bg-[#172635] px-14 py-10 drop-shadow-md'>
      <div className='grid grid-cols-5 place-items-center text-headingDarkText'>
        <span className='col-start-1 col-end-2 text-xl'>Get in Touch</span>
        <span
          className={`col-start-2 col-end-5 text-pretty text-center text-base font-normal ${poppins.className}`}
        >
          Interested in working together? Just <br /> drop a message
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
  )
}

export default CallToAction
