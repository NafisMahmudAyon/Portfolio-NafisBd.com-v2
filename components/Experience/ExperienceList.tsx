'use client'
import { oswald } from '@/app/fonts'
import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from 'nexus-accordion'
import React, { useRef } from 'react'
import { LinkIcon, LocationIcon } from '../Icons'
import { motion, useAnimation, useInView } from 'framer-motion'


const ExperienceList = () => {

  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div className='max-w-[760px] mx-auto' ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}>
      <Accordion defaultIndex={0}>
        <AccordionItem className='p-4 border mb-4 rounded-md '>
          <AccordionHeader className={`gap-3 cursor-pointer ${oswald.className} `} activeStyle='pb-2 border-b' iconStyle='text-primaryColor w-4 '>
            <div className='flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText'>
              <span className='font-semibold'>FrontEnd Web Developer @ PickPlugins</span>
              <span>Dec 2022 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className='pt-2'>
            <div className='flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText'>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'><LocationIcon className='w-3' /><span>Rangpur, Bangladesh</span></span>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'><LinkIcon className='h-3' /><span>pickplugins.com</span></span>
            </div>
            <div className='text-headingText dark:text-headingDarkText py-3 '>Developing WordPress plugins in PickPlugins, Tech used React, PHP, JavaScript.  </div>
            <div className='flex items-center gap-2 text-xs font-extralight'>
              {["HTML", "CSS", "JS", "PHP", "React", "WordPress", "JSON", 'API', "Tailwind"].map((tag, i)=>{
                return (
                  <span key={i} className="px-2 py-1 text-normalText dark:text-normalDarkText bg-[#dfe8f1] dark:bg-[#353535] rounded-md">{tag}</span>
                )
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className='p-4 border mb-4 rounded-md '>
          <AccordionHeader className={`gap-3 cursor-pointer ${oswald.className} `} activeStyle='pb-2 border-b' iconStyle='text-primaryColor w-4 '>
            <div className='flex flex-1 items-center justify-between text-headingText dark:text-headingDarkText'>
              <span className='font-semibold'>Full Stack Web Developer @ Freelancer</span>
              <span>Dec 2020 - Present</span>
            </div>
          </AccordionHeader>
          <AccordionPanel className='pt-2'>
            <div className='flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText'>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'><LocationIcon className='w-3' /><span>Worldwide</span></span>
              <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'><LinkIcon className='h-3' /><span>fiverr.com</span></span>
            </div>
            <div className='text-headingText dark:text-headingDarkText py-3 '>Developed Full Stack web application, Tech used React, JavaScript, PHP.  </div>
            <div className='flex items-center gap-2 text-xs font-extralight'>
              {["HTML", "CSS", "JS", "PHP", "React", "WordPress", "JSON", 'API', "Tailwind"].map((tag, i)=>{
                return (
                  <span key={i} className="px-2 py-1 text-normalText dark:text-normalDarkText bg-[#dfe8f1] dark:bg-[#353535] rounded-md">{tag}</span>
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