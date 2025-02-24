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
import Link from 'next/link'

const ExperienceList = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const experiences = [
    {
      title: 'React Developer',
      company: 'PickPlugins',
      period: 'Nov 2024 - Present',
      location: 'Rangpur, Bangladesh',
      website: 'pickplugins.com',
      description: 'Developing React based Website in PickPlugins, Tech used React, JavaScript, TypeScript, Next.js.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'Next JS', 'TS', 'WordPress', 'JSON', 'API', 'Tailwind']
    },
    {
      title: 'Plugin Developer',
      company: 'PickPlugins',
      period: 'May 2023 - Nov 2024',
      location: 'Rangpur, Bangladesh',
      website: 'pickplugins.com',
      description: 'Developing WordPress plugins in PickPlugins, Tech used React, PHP, JavaScript.',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'React', 'WordPress', 'JSON', 'API', 'Tailwind']
    },
    {
      title: 'FrontEnd Web Developer',
      company: 'PickPlugins',
      period: 'Dec 2022 - May 2023',
      location: 'Rangpur, Bangladesh',
      website: 'pickplugins.com',
      description: 'Developing WordPress plugins in PickPlugins, Tech used React, PHP, JavaScript.',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'React', 'WordPress', 'JSON', 'API', 'Tailwind']
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Freelancer',
      period: 'Dec 2020 - Present',
      location: 'Worldwide',
      website: 'fiverr.com',
      description: 'Developed Full Stack web application, Tech used React, JavaScript, PHP.',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'React', 'WordPress', 'JSON', 'API', 'Tailwind']
    }
  ]

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
      className='mx-auto max-w-[760px] px-4'
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <Accordion defaultIndex={0}>
        {experiences.map((experience, index) => (
          <AccordionItem key={index} className='mb-4 rounded-md border border-primaryColor/30 p-4'>
            <AccordionHeader
              className={`cursor-pointer gap-3 ${oswald.className} `}
              activeStyle='pb-2 border-b border-primaryColor'
              iconStyle='text-primaryColor w-4 '
            >
              <div className='flex flex-1 flex-col items-start text-headingText dark:text-headingDarkText md:flex-row md:items-center md:justify-between'>
                <span className='font-semibold'>
                  {experience.title}{' '}
                  <span className='text-primaryColor'>@</span> {experience.company}
                </span>
                <span className='font-light'>{experience.period}</span>
              </div>
            </AccordionHeader>
            <AccordionPanel className='pt-2'>
              <div className='flex items-center gap-8 text-sm text-normalText dark:text-normalDarkText'>
                <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                  <LocationIcon className='w-3' />
                  <span>{experience.location}</span>
                </span>
                <span className='flex items-center gap-1 text-headingText dark:text-headingDarkText'>
                  <LinkIcon className='h-3' />
                  <Link href={experience.website}>{experience.website}</Link>
                </span>
              </div>
              <div className='py-3 font-normal text-headingText dark:text-headingDarkText'>
                {experience.description}
              </div>
              <div className='flex items-center gap-2 overflow-auto text-xs font-extralight'>
                {experience.technologies.map((tag, i) => (
                  <span
                    key={i}
                    className='rounded-md bg-[#dfe8f1] px-2 py-1 text-normalText dark:bg-[#353535] dark:text-normalDarkText'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

export default ExperienceList
