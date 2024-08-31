'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "framer-motion"
import Icon from './Icon'
import { CSSIcon, ExpressIcon, FigmaIcon, GitHubIcon, GitIcon, HTMLIcon, JSIcon, MongoDBIcon, MySQLIcon, NetlifyIcon, NextJSIcon, NodeIcon, PHPIcon, PostgreSQLIcon, ReactIcon, TailwindIcon, TSIcon, VercelIcon, VSCodeIcon } from '../Icons'

import { oswald } from '@/app/fonts'

const IconSection = () => {
  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        ease: "easeInOut",
        
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls} className={`w-full pt-8 ${oswald.className}`}>
      <div className='flex items-center justify-around pb-10'>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Front End</span>
          <div className='flex gap-5 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<HTMLIcon className='w-10 aspect-square ' />} progress={60} text='HTML' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<CSSIcon className='w-10 aspect-square ' />} progress={60} text='CSS' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<JSIcon className='w-10 aspect-square ' />} progress={60} text='JS' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<TSIcon className='w-10 aspect-square ' />} progress={60} text='TS' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<PHPIcon className='w-10 aspect-square ' />} progress={60} text='PHP' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<TailwindIcon className='w-10 aspect-square ' />} progress={60} text='Tailwind' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<ReactIcon className='w-10 aspect-square ' />} progress={60} text='React' variants={iconVariants} />
            <Icon initialAnimation='top' icon={<NextJSIcon className='w-10 aspect-square ' />} progress={60} text='Next.js' variants={iconVariants} />
          </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <span className='text-primaryColor pb-5'>Back End</span>
          <div className='flex gap-5 flex-wrap'>
            <Icon initialAnimation='bottom' icon={<NodeIcon className='w-10 aspect-square ' />} progress={60} text='Node' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<ExpressIcon className='w-10 aspect-square ' />} progress={60} text='Express' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<MySQLIcon className='w-10 aspect-square ' />} progress={60} text='MySQL' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<PostgreSQLIcon className='w-10 aspect-square ' />} progress={60} text='PostgreSQL' variants={iconVariants} />
            <Icon initialAnimation='bottom' icon={<MongoDBIcon className='w-10 aspect-square ' />} progress={60} text='MongoDB' variants={iconVariants} />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center flex-col '>
        <span className='text-primaryColor pb-5'>Others</span>
        <div className='flex gap-5 flex-wrap'>
          <Icon initialAnimation='top' icon={<GitIcon className='w-10 aspect-square ' />} progress={60} text='Git' variants={iconVariants} />
          <Icon initialAnimation='top' icon={<GitHubIcon className='w-10 aspect-square ' />} progress={60} text='GitHub' variants={iconVariants} />
          <Icon initialAnimation='top' icon={<NetlifyIcon className='w-10 aspect-square ' />} progress={90} text='Netlify' variants={iconVariants} />
          <Icon initialAnimation='top' icon={<VercelIcon className='w-10 aspect-square ' />} progress={90} text='Vercel' variants={iconVariants} />
          <Icon initialAnimation='top' icon={<FigmaIcon className='w-10 aspect-square ' />} progress={90} text='VS Code' variants={iconVariants} />
          <Icon initialAnimation='top' icon={<VSCodeIcon className='w-10 aspect-square ' />} progress={90} text='Figma' variants={iconVariants} />
        </div>
      </div>
    </motion.div>
  )
}

export default IconSection