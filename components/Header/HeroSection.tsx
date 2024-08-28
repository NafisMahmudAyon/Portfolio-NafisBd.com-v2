import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div id='home' className='min-h-screen bg-[#f1f6fb] dark:bg-[#262626] mx-auto max-w-[1440px] pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl '>
      <NavBar />
      <Hero />
    </div>
  )
}

export default HeroSection