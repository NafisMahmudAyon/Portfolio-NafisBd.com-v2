'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress?: number;
  text?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress = 0, text }) => {
  const barAnimation = {
    width: `${progress}%`,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 1,
      ease: "easeInOut",
    }
  };

  return (
    <>
      <p className="text-headingText dark:text-headingDarkText ">{text}</p>
      <div className="relative w-full h-3 border-primaryColor border rounded-full mt-2">
        <motion.div
          className="h-full bg-primaryColor rounded-full"
          style={{ width: '0%' }} // Initial state
          animate={barAnimation}
        />
        <motion.div
          className="absolute bottom-4  "
          style={{ left: `${progress}%`, translateX: "-50%" }} // Position the label based on progress
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative bg-black text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
            {Math.round(progress)}%
            <div className="absolute bottom-[-3px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProgressBar;
