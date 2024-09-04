'use client'
import React, { useState } from 'react';
// import ContactForm from './ContactForm';

const CTAButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className=''>
      <button onClick={handleOpen} className="backdrop-blur-xl text-center bg-primaryColor bg-opacity-10 px-8 py-2 flex items-center justify-center flex-col rounded-lg border border-primaryColor cursor-design">Contact Us</button>
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.5)] flex justify-center items-center ">
          <div className="popup-content">
            <button onClick={handleClose} className="close-button">X</button>
            {/* <ContactForm handleClose={handleClose} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CTAButton;
