import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div
      id='home'
      className='!bg-red-500 mx-auto mt-4 w-full rounded-t-3xl bg-[#f1f6fb] pb-16 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] md:min-h-screen lg:max-w-[1440px]'
    >
      <NavBar />
      <Hero />
    </div>
  )
}

export default HeroSection
