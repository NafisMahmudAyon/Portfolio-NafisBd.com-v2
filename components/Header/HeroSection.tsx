import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div
      id='home'
      className='mx-auto min-h-screen max-w-[1440px] bg-[#f1f6fb] pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626]'
    >
      <NavBar />
      <Hero />
    </div>
  )
}

export default HeroSection
