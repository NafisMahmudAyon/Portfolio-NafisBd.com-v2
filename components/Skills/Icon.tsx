'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import ProgressBar from './Progress';

interface iconProps {
  className?: string;
  icon?: React.ReactNode;
  progress?: number;
  initialAnimation?: "top" | "bottom";
  text?: string;
}

const Icon: React.FC<iconProps> = ({ className, icon, initialAnimation = "bottom", progress, text }) => {

  const [isHovered, setIsHovered] = useState(false);
  const topInitial= {
    opacity: 0,
    y: 50,
  }
  const bottomInitial= {
    opacity: 0,
    y: -50,
  }
  const initialVariant = initialAnimation === "top" ? topInitial : bottomInitial;
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    ease: "easeInOut"
  }
  return (
    <motion.div
      className={`${className} flex flex-col relative`}
      initial={initialVariant}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...spring, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span className='font-extralight text-headingText dark:text-headingDarkText'>{text}</span>
      {isHovered && (
        <motion.div
          className="absolute -top-full left-1/2 !-translate-x-1/2 bg-primaryColor bg-opacity-30 backdrop-blur-sm px-4 py-2 flex items-start justify-center flex-col rounded-lg border border-primaryColor w-48 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ProgressBar progress={progress} text={text} />
        </motion.div>
      )}
    </motion.div>
  )
}

export default Icon