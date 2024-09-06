'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const About = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Only trigger once
  //   threshold: 0.1, // Trigger when 10% of the component is in view
  // });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1
      }
    }
  }
  const childVariant2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  const paraVariant1 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.3
      }
    }
  }
  const paraVariant2 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.4
      }
    }
  }
  const paraVariant3 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.5
      }
    }
  }

  return (
    <motion.div
      ref={ref} // Ref to the container to observe when it enters the viewport
      className='container'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingSection
        text='About Me'
        className='hidden md:inline-block'
        variants={childVariants}
      />
      <Heading
        text='Who am I?'
        className='text-center md:text-left'
        variants={childVariant2}
      />
      <Paragraph
        className='text-pretty text-left md:text-left'
        text="I'm Nafis Mahmud Ayon, a passionate Frontend Web Developer with 4 years of experience in building responsive, high-quality websites that prioritize user experience. My expertise lies in crafting visually appealing and intuitive interfaces with a strong emphasis on UI/UX design. I enjoy turning complex problems into simple, beautiful, and engaging solutions."
        variants={paraVariant1}
      />
      <Paragraph
        className='text-pretty text-left md:text-left'
        text="I thrive on the challenge of staying up-to-date with the latest technologies and best practices in the industry, ensuring that every project I work on is not only functional but also cutting-edge. Whether it's creating a mobile-first design, optimizing performance, or ensuring cross-browser compatibility, I'm committed to delivering the best possible outcome for every client."
        variants={paraVariant2}
      />
      <Paragraph
        className='text-pretty text-left md:text-left'
        text=" When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community."
        variants={paraVariant3}
      />
    </motion.div>
  )
}

export default About
