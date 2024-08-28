'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface HeadingSectionProps {
  text: string
  variants?: object
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ text, variants }) => {
  return (
    <motion.h3 className='text-base px-4 py-2 bg-[#e0e6eb] dark:bg-[#2a2a2a] backdrop-blur-sm backdrop-filter drop-shadow-md inline-block rounded text-headingText dark:text-headingDarkText leading-none ' variants={variants}>{text}</motion.h3>
  )
}

export default HeadingSection