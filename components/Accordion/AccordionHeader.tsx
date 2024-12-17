'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useAccordion } from './AccordionContext'

interface AccordionHeaderProps {
  children: React.ReactNode
  className?: string
  activeStyle?: string
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className = '',
  activeStyle = ''
}) => {
  const { isActive, index, onChangeIndex } = useAccordion()

  return (
    <motion.div
      className={`${className} ${isActive ? activeStyle : ''}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  )
}
