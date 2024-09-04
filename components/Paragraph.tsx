'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { poppins } from '@/app/fonts'

interface ParagraphProps {
  text: string
  className?: string
  variants?: Variants
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = '',
  variants
}) => {
  return (
    <motion.h2
      className={`${className} ${poppins.className} text-ba my-3 text-base font-medium text-normalText dark:text-normalDarkText`}
      variants={variants}
    >
      {text}
    </motion.h2>
  )
}

export default Paragraph
