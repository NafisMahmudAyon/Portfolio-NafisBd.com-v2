import React from 'react'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import About from './About'
import Profile from './Profile'

const AboutMe = () => {
  return (
    <div id='about' className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 bg-[#f1f6fa] dark:bg-[#272727] mx-auto max-w-[1440px] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl px-16 py-20'>
      <div className='grid place-items-center'>
        <Profile />
      </div>
      <div className='col-start-2 col-end-4'>
        {/* <HeadingSection text="About Me" />
        <Heading text="Who am I?" /> */}
        <About />
      </div>
    </div>
  )
}

export default AboutMe