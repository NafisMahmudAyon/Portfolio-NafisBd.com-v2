'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ContactButton: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.location.href = '#contact'
  }

  return (
    <motion.button
      className='rounded-lg bg-primaryColor px-3 py-1 text-headingDarkText'
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      Contact Me
    </motion.button>
  )
}

export default ContactButton
