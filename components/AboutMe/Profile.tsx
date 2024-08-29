'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ProfilePic from '../../public/profilePic.png'
import { FacebookIcon, GithubIcon, LinkedInIcon, TelegramIcon, TwitterIcon, WhatsAppIcon } from '../Icons'

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
      <motion.div className='absolute -bottom-10 left-1/2 backdrop-blur-xl w-[260px] text-center bg-primaryColor bg-opacity-10 px-4 py-2 flex items-center justify-center flex-col rounded-lg border border-primaryColor '
        initial={{ x: -300, opacity: 0 }} 
        animate={{ x: "-50%", opacity: 1 }} 
        transition={{ ...spring, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        >
        <span className='text-headingText dark:text-headingDarkText pb-1'>Nafis Mahmud Ayon</span>
        <ul className='flex gap-2 items-center'>
          <li><FacebookIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          <li><TwitterIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          <li><LinkedInIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          <li><GithubIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          <li><WhatsAppIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          <li><TelegramIcon className='w-6 aspect-square text-headingText dark:text-headingDarkText' /></li>
          </ul>
      </motion.div>
    </div>
  )
}

export default Profile