'use client'
import React, { useState } from 'react'
import { poppins } from '@/app/fonts'
import ContactForm from './ContactForm';

const CallToAction = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div className='max-w-[800px] mt-20 mx-auto px-14 py-10 bg-[#172635] rounded-lg drop-shadow-md '>
      <div className=' text-headingDarkText grid grid-cols-5 place-items-center  '>
        <span className='col-start-1 col-end-2 text-xl'>Get in Touch</span>
        <span className={`col-start-2 col-end-5 font-normal text-base text-pretty text-center ${poppins.className}`}>Interested in working together? Just <br /> drop a message</span>
        <button onClick={handleOpen} className="backdrop-blur-xl text-center bg-primaryColor bg-opacity-10 px-8 py-2 flex items-center justify-center flex-col rounded-lg border border-primaryColor cursor-design">Contact Us</button>
      </div>

      {isOpen && (
        <>
          <div className='relative my-10 mx-auto und'></div>
          <ContactForm />
        </>

      )}
    </div>
  )
}

export default CallToAction