import { poppins } from '@/app/fonts'
import Link from 'next/link'
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  WhatsAppIcon
} from '../Icons'

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
          <Link href="https://www.facebook.com/ayon.nafis.mahmud">
            <FacebookIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        {/* <li>
          <TwitterIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li> */}
        <li>
          <Link href="https://www.linkedin.com/in/nafis-mahmud-ayon/">
            <LinkedInIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/NafisMahmudAyon">
            <GithubIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/+8801733235762">
            <WhatsAppIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        {/* <li>
          <TelegramIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li> */}
      </ul>
    </div>
  )
}

export default FooterMenu
