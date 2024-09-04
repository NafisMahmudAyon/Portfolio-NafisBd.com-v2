'use client'
import { oswald } from '@/app/fonts'
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel
} from 'nexus-accordion'
import React, { useRef } from 'react'
import { LinkIcon, LocationIcon } from '../Icons'
import { motion, useAnimation, useInView } from 'framer-motion'

const ExperienceList = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        staggerChildren: 0.5
      }
    }
  }

  return (
    <motion.div
      className='mx-auto max-w-[760px]'
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <Accordion defaultIndex={0}>
        <AccordionItem className='mb-4 rounded-md border border-primaryColor/30 p-4'>
          <AccordionHeader
            className={`cursor-pointer gap-3 ${oswald.className} `}
            activeStyle='pb-2 border-b border-primaryColor'
            iconStyle='text-primaryColor w-4 '
          >
            <div className='flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText'>
              <span className='font-semibold'>
                FrontEnd Web Developer @ PickPlugins
              </span>
              <span>Dec 2022 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className='pt-2'>
            <div className='flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText'>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                <LocationIcon className='w-3' />
                <span>Rangpur, Bangladesh</span>
              </span>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                <LinkIcon className='h-3' />
                <span>pickplugins.com</span>
              </span>
            </div>
            <div className='py-3 text-headingText dark:text-headingDarkText'>
              Developing WordPress plugins in PickPlugins, Tech used React, PHP,
              JavaScript.{' '}
            </div>
            <div className='flex items-center gap-2 text-xs font-extralight'>
              {[
                'HTML',
                'CSS',
                'JS',
                'PHP',
                'React',
                'WordPress',
                'JSON',
                'API',
                'Tailwind'
              ].map((tag, i) => {
                return (
                  <span
                    key={i}
                    className='rounded-md bg-[#dfe8f1] px-2 py-1 text-normalText dark:bg-[#353535] dark:text-normalDarkText'
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className='mb-4 rounded-md border border-primaryColor/30 p-4'>
          <AccordionHeader
            className={`cursor-pointer gap-3 ${oswald.className} `}
            activeStyle='pb-2 border-b border-primaryColor'
            iconStyle='text-primaryColor w-4 '
          >
            <div className='flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText'>
              <span className='font-semibold'>
                Full Stack Web Developer @ Freelancer
              </span>
              <span>Dec 2020 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className='pt-2'>
            <div className='flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText'>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                <LocationIcon className='w-3' />
                <span>Worldwide</span>
              </span>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                <LinkIcon className='h-3' />
                <span>fiverr.com</span>
              </span>
            </div>
            <div className='py-3 text-headingText dark:text-headingDarkText'>
              Developed Full Stack web application, Tech used React, JavaScript,
              PHP.{' '}
            </div>
            <div className='flex items-center gap-2 text-xs font-extralight'>
              {[
                'HTML',
                'CSS',
                'JS',
                'PHP',
                'React',
                'WordPress',
                'JSON',
                'API',
                'Tailwind'
              ].map((tag, i) => {
                return (
                  <span
                    key={i}
                    className='rounded-md bg-[#dfe8f1] px-2 py-1 text-normalText dark:bg-[#353535] dark:text-normalDarkText'
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}

export default ExperienceList
