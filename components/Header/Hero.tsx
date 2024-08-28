'use client'
import React from 'react'
import { motion } from "framer-motion"
// import Image from 'next/image'
import ProfilePic from '../../public/profilePic.png'
import Image from 'next/image'

const Hero = () => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    ease: "easeInOut"
  }
  return (
    <div className='px-16 min-h-[600px] grid grid-cols-2 gap-6 content-center justify-self-center mt-20 '>
      <div className='grid content-center'>
        <motion.h2 className='text-headingText dark:text-headingDarkText text-2xl ' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={spring}>Hi, I&apos;m</motion.h2>
        <motion.h1 className='text-headingText dark:text-headingDarkText text-4xl font-medium ' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...spring, delay: 0.1 }}>Nafis Mahmud Ayon</motion.h1>
        <motion.p className='text-normalText dark:text-normalDarkText text-lg font-normal mt-4 text-pretty' initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...spring, delay: 0.4 }}>A passionate <span className='text-primaryColor hover:border-b-2 transition-all duration-150 ease-in-out hover:border-primaryColor'>Frontend Web Developer</span> with 4 years of experience in creating user-friendly, visually appealing websites with a strong focus on <span className='text-primaryColor hover:border-b-2 transition-all duration-150 ease-in-out hover:border-primaryColor'>UI/UX</span> design.</motion.p>
      </div>
      <div className='grid place-items-center'>
        {/* <div className='relative '> */}
        {/* <motion.img src="/public/profilePic.png" alt="NafisBD" className="w-[400px] h-auto rounded-2xl drop-shadow-lg"/> */}
        {/* <motion.img src={ProfilePic} alt="NafisBD" className="w-[400px] h-auto rounded-2xl drop-shadow-lg"/> */}
            {/* // priority
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' */}
          
          {/* <span className='bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-4 py-1 absolute top-1/2 border-2 border-primaryColor/35 -left-8 '>Hello</span> */}
        {/* </div> */}
        <motion.div
          className="w-[400px] h-auto rounded-2xl drop-shadow-lg"
          initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...spring, delay: 0.2 }}
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
      </div>
    </div>
  )
}

export default Hero