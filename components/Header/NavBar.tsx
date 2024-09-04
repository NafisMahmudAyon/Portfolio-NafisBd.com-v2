import React from 'react'
import DarkMode from './DarkMode'
import NavItem from './NavItem'
import ContactButton from './ContactButton'

const NavBar = () => {
  return (
    <div className='mx-auto flex w-[90%] items-center gap-6 rounded-lg border border-normalText/25 px-4 py-3 dark:border-normalDarkText/25'>
      <h1 className='text-xl font-semibold tracking-wide text-headingText dark:text-headingDarkText'>
        <a href='#home'>
          <span className='text-primaryColor'>N</span>afis
          <span className='text-primaryColor'>BD</span>
        </a>
      </h1>
      <nav className='flex-1'>
        <ul className='flex items-center justify-center gap-3 text-normalText dark:text-normalDarkText'>
          <NavItem text='Home' href='#home' active={true} />
          <NavItem text='About' href='#about' />
          <NavItem text='Skills' href='#skills' />
          <NavItem text='Projects' href='#projects' />
          <NavItem text='Experience' href='#experience' />
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
