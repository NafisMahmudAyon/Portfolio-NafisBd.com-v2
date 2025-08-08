import Cursor from '@/components/Cursor'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import { oswald } from './fonts'
import './globals.css'
import PageLoader from '@/components/PageLoader'
import {NavbarWrapper} from '@/components/NavbarWrapper'
import { BackToTop } from '@/components/aspect-ui'


export const metadata: Metadata = {
  title: 'Nafis Mahmud Ayon | Portfolio',
  description: 'I am a passionate and versatile software developer with expertise in both frontend and backend technologies. With a strong focus on creating intuitive user experiences, I specialize in building dynamic web applications using modern JavaScript frameworks. My skill set includes proficiency in HTML, CSS, JavaScript, React, Next.js, and Node.js, enabling me to deliver high-quality solutions for a wide range of projects.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={` ${oswald.className} bg-[#f1f6fb] dark:bg-[#262626] relative max-h-screen overflow-y-scroll`}>
        <PageLoader />
        <Cursor />
        <NavbarWrapper />
        {children}
        <BackToTop className="p-2 border border-primaryColor bg-primaryColor bg-opacity-10
text-primaryColor backdrop-blur-xl">
          <ChevronUpIcon className='w-6' />
        </BackToTop>
      </body>
    </html>
  )
}
