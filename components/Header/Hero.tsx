'use client'
import React from 'react'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import ProfilePic from '../../public/profilePic.png'
import Image from 'next/image'

const Hero = () => {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
    ease: 'easeInOut'
  }
  return (
    <div className='mt-20 grid min-h-[600px] grid-cols-2 content-center gap-6 justify-self-center px-16'>
      <div className='grid content-center'>
        <motion.h2
          className='text-2xl text-headingText dark:text-headingDarkText'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={spring}
        >
          Hi, I&apos;m
        </motion.h2>
        <motion.h1
          className='text-4xl font-medium text-headingText dark:text-headingDarkText'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          Nafis Mahmud Ayon
        </motion.h1>
        <motion.p
          className='mt-4 text-pretty text-lg font-normal text-normalText dark:text-normalDarkText'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.4 }}
        >
          A passionate{' '}
          <span className='text-primaryColor transition-all duration-150 ease-in-out hover:border-b-2 hover:border-primaryColor'>
            Frontend Web Developer
          </span>{' '}
          with 4 years of experience in creating user-friendly, visually
          appealing websites with a strong focus on{' '}
          <span className='text-primaryColor transition-all duration-150 ease-in-out hover:border-b-2 hover:border-primaryColor'>
            UI/UX
          </span>{' '}
          design.
        </motion.p>
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
          className='h-auto w-[400px] rounded-2xl border border-primaryColor/25 drop-shadow-lg'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={ProfilePic}
            alt='NafisBD'
            layout='responsive'
            width={400}
            height={400}
            className='rounded-2xl'
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
