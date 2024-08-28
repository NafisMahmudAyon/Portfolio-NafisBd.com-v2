import React from 'react'
import DarkMode from './DarkMode'
import NavItem from './NavItem'
import ContactButton from './ContactButton'

const NavBar = () => {
  return (
    <div className='border border-normalText/25 dark:border-normalDarkText/25 w-[90%] mx-auto px-4 py-3 rounded-lg flex items-center gap-6 '>
      <h1 className='text-xl font-semibold text-headingText dark:text-headingDarkText tracking-wide '><a href="#home"><span className='text-primaryColor'>N</span>afis<span className='text-primaryColor'>BD</span></a></h1>
      <nav className='flex-1'>
        <ul className='flex items-center justify-center gap-3 text-normalText dark:text-normalDarkText'>
          <NavItem
            text="Home"
            href="#home"
            active={true}
          />
          <NavItem
            text="About"
            href="#about"
          />
          <NavItem
            text="Skills"
            href="#skills"
          />
          <NavItem
            text="Work"
            href="#work"
          />
          <NavItem
            text="Experience"
            href="#experience"
          />
        </ul>
      </nav>
      <span className='flex items-center gap-3'>
        <DarkMode />
        <ContactButton />
      </span>
    </div>
  )
}

export default NavBar