import React from 'react'
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon
} from '../Icons'
import { poppins } from '@/app/fonts'

const FooterMenu = () => {
  return (
    <div
      className={`flex flex-col items-center gap-4 font-light lg:flex-row lg:gap-8 ${poppins.className}`}
    >
      <div className='flex flex-col items-center lg:flex-row lg:gap-3'>
        <a href='tel:+8801733235762'>+880 173 323 5762</a>
        <a href='mailto:nafismahmudayon@gmail.com'>nafismahmudayon@gmail.com</a>
      </div>
      <ul className='flex items-center gap-2'>
        <li>
          <FacebookIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
        <li>
          <TwitterIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
        <li>
          <LinkedInIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
        <li>
          <GithubIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
        <li>
          <WhatsAppIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
        <li>
          <TelegramIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
