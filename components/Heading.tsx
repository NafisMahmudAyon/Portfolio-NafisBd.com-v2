'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { poppins } from '@/app/fonts'

interface HeadingProps {
  text: string
  className?: string
  variants?: Variants;
}

const Heading: React.FC<HeadingProps> = ({ text, className="", variants }) => {
  return (
    <motion.h2 className={`${className} ${poppins.className} text-primaryColor my-6 text-2xl font-medium `} variants={variants}>{text}</motion.h2>
  )
}

export default Heading