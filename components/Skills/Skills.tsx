import React from 'react'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import IconSection from './IconSection'

const Skills = () => {
  return (
    <div id='skills' className='grid place-items-center bg-[#f1f6fa] dark:bg-[#272727] mx-auto max-w-[1440px] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl px-16 py-36'>
      <HeadingSection text='Skills' />
      <Heading text='The skills, tools and technologies' className='mt-6 mb-0' />
      <Heading text='I am really good at' className='mb-6 mt-0' />
      <IconSection />
    </div>
  )
}

export default Skills