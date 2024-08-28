'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProfilePic from '../../public/profilePic.png'

const Profile = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    ease: "easeInOut"
  }
  return (
    <div className='relative'>
      <motion.div
        className="w-[260px] aspect-square rounded-full overflow-hidden drop-shadow-lg mx-auto border border-primaryColor "
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...spring, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={ProfilePic}
          alt="NafisBD"
          layout="responsive"
          width={400}
          height={400}
          className="rounded-2xl"
          priority
        />
      </motion.div>
      <motion.div className='absolute -bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-xl w-[260px] text-center bg-primaryColor bg-opacity-10 px-4 py-2 flex items-center justify-center flex-col rounded-lg border border-primaryColor ' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...spring, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
      <span className='text-headingText dark:text-headingDarkText'>Nafis Mahmud Ayon</span>
      <ul className='flex gap-2'><li>fb</li>
      <li>tw</li>
      <li>ln</li>
      <li>git</li>
      <li>te</li></ul>
      </motion.div>
    </div>
  )
}

export default Profile