import { poppins } from '@/app/fonts'
import React from 'react'

const Logo = () => {
  return (
    <h1
      className={`text-xl font-semibold tracking-wide text-headingText dark:text-headingDarkText ${poppins.className}`}
    >
      <a href='#home'>
        <span className='text-primaryColor'>N</span>afis
        <span className='text-primaryColor'>BD</span>
      </a>
    </h1>
  )
}

export default Logo
