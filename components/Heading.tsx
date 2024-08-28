'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface HeadingProps {
  text: string
  className?: string
  variants?: object
}

const Heading: React.FC<HeadingProps> = ({ text, className="", variants }) => {
  return (
    <motion.h2 className={`${className} text-primaryColor my-6 text-2xl font-medium `} variants={variants}>{text}</motion.h2>
  )
}

export default Heading