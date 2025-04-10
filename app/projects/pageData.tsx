'use client'
import Footer from '@/components/Footer/Footer'
import { GithubIcon, LinkIcon } from '@/components/Icons'
import PageTitle from '@/components/PageTitle'
import data from '@/public/project-data.json'
import { Breadcrumb, BreadcrumbItem } from 'aspect-ui/Breadcrumb'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { poppins } from '../fonts'

const PageData = () => {
  // const [getData, setGetData] = useState<Project[]>(data)
  // console.log(getData)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

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
  // useEffect(() => {
  //   fetchProjects()
  // }, [])

  // async function fetchProjects() {
  //   const { data } = await supabase.from('projects').select('*')
  //   if (data) {
  //     setGetData(data as Project[])
  //   }
  // }
  return (
    <main className='w-full overflow-hidden'>
      <div
        id='home'
        className='mx-auto mt-4 w-full rounded-t-3xl background bg-[#f1f6fb] pb-12 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] lg:max-w-[1440px]'
      >
        {/* <NavBar /> */}
        <PageTitle title='Projects' className="text-wrap pt-10 px-3 flex justify-center w-full text-2xl" />
        
      </div>
      <div className='mx-auto mb-4 max-w-[1440px] rounded-b-3xl bg-[#f1f6fa] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#272727]'>
        <div className='px-4 md:px-8 lg:px-16'>
          {/* <div className='mx-auto mb-4 max-w-[1440px] rounded-b-3xl bg-[#f1f6fa] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#272727]'> */}
          <Breadcrumb className='py-10' separatorClassName='text-' >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Projects</BreadcrumbItem></Breadcrumb>
          <div className='grid grid-cols-1 grid-rows-[repeat(5_,_auto)] gap-6 mb-4 md:mb-6 lg:mb-10 sm:grid-cols-2 lg:grid-cols-3'>
            {data.map(project => (
              <motion.div
                key={project.id}
                variants={childVariants}
                className='relative row-span-5 grid grid-rows-subgrid gap-0 overflow-hidden rounded-lg border border-normalText/25 bg-[#ecf4fd] drop-shadow-lg dark:bg-[#272727] group'
              >
                <div className='overflow-hidden'>
                  <Image
                    src={
                      project.project_images.length === 0
                        ? project.slug === 'aspect-ui'
                          ? '/aspect-ui.png'
                          : 'https://via.placeholder.com/600x400'
                        : project.project_images[0]
                    }
                    width={600}
                    height={400}
                    alt={project.title}
                    className='aspect-[3/2] grid-rows-subgrid w-full object-contain group-hover:scale-110 transition-transform duration-200 ease-in-out'
                  />
                </div>
                <a href={project.redirect ? project.redirect_url : `/projects/${project.slug}`} className='absolute inset-0'></a>
                <h4
                  className={`px-4 pt-4 text-lg grid-rows-subgrid font-bold text-headingText dark:text-headingDarkText h-max ${poppins.className}`}
                >
                  {project.title}
                </h4>
                <p
                  className={`px-4 py-4 text-sm font-light text-normalText dark:text-normalDarkText ${poppins.className}`}
                >
                  {project.short_description}
                </p>
                <div
                  className={`flex gap-2 px-4 text-xs font-extralight grid-rows-subgrid text-normalText dark:text-normalDarkText ${poppins.className}`}
                >
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className='rounded-md bg-[#dfe8f1] grid-rows-subgrid h-max px-2 py-1 text-normalText dark:bg-[#353535] dark:text-normalDarkText'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between px-4 pb-4 pt-4 text-xs font-extralight text-headingText dark:text-headingDarkText'>
                  <a href={project.project_url} target='_blank' className='flex relative z-50 items-center gap-1'>
                    <LinkIcon className='h-3' />
                    Live Preview
                  </a>
                  {project.github_repo && <a
                    href={project.github_repo || '#'} target='_blank'
                    className='flex items-center relative z-50 gap-2'
                  >
                    <GithubIcon className='w-5 text-normalText dark:text-normalDarkText' />{' '}
                    View Code
                  </a>}
                </div>
              </motion.div>
            ))}
          </div>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default PageData