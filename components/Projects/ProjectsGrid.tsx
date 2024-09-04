'use client'
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { supabase } from '@/components/createClient'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { poppins } from '@/app/fonts'
import { GithubIcon, LinkIcon } from '../Icons'

interface Project {
  id: number
  created_at: string
  title: string
  short_description: string
  project_type: string[]
  project_status: string
  date_started: string
  date_complete: string
  tech_use: string[]
  project_url: string
  role: string
  client_name?: string | null
  client_feedback?: string | null
  key_features: {
    desc: string
    title: string
  }[]
  challenges_faced?: string | null
  lessons_learned?: string | null
  team_size: number
  collaborators?: string[] | null
  project_images: string[]
  project_videos?: string[] | null
  documentation_links?: string | null
  github_repo?: string | null
  downable_resources?: string | null
  updated_at: string
  tags: string[]
  views_count: number
  likes: number
  comments?: string | null
  description: string[]
}

const ProjectsGrid: React.FC = () => {
  const [getData, setGetData] = useState<Project[]>([])
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger delay of 0.1s
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
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*')
    if (data) {
      setGetData(data as Project[])
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      className={`px-16 pb-20 ${poppins.className}`}
    >
      <div className='grid grid-cols-1 grid-rows-[repeat(5_,_auto)] gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {getData.slice(0, 3).map(project => (
          <motion.div
            key={project.id}
            variants={childVariants}
            className='row-span-5 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg border border-normalText/25 bg-[#ecf4fd] drop-shadow-lg dark:bg-[#272727]'
          >
            <img
              src={
                project.project_images.length === 0
                  ? 'https://via.placeholder.com/600x400'
                  : project.project_images[0]
              }
              alt={project.title}
              className='aspect-[3/2] w-full object-cover'
            />

            <h4
              className={`px-4 pt-4 text-lg font-bold text-headingText dark:text-headingDarkText ${poppins.className}`}
            >
              {project.title}
            </h4>
            <p
              className={`px-4 py-4 text-sm font-light text-normalText dark:text-normalDarkText ${poppins.className}`}
            >
              {project.short_description}
            </p>
            <div
              className={`flex gap-2 px-4 text-xs font-extralight text-normalText dark:text-normalDarkText ${poppins.className}`}
            >
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className='rounded-md bg-[#dfe8f1] px-2 py-1 text-normalText dark:bg-[#353535] dark:text-normalDarkText'
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex justify-between px-4 pb-4 pt-4 text-xs font-extralight text-headingText dark:text-headingDarkText'>
              <a href={project.project_url} className='flex items-center gap-1'>
                <LinkIcon className='h-3' />
                Live Preview
              </a>
              <a
                href={project.github_repo || '#'}
                className='flex items-center gap-2'
              >
                <GithubIcon className='w-5 text-normalText dark:text-normalDarkText' />{' '}
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center pt-10'>
        <span className='flex w-[260px] flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-4 py-2 text-center text-primaryColor backdrop-blur-xl'>
          See More Projects
        </span>
      </div>
    </motion.div>
  )
}

export default ProjectsGrid
