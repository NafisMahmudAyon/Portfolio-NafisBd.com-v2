import { Oswald, Poppins, Share_Tech_Mono } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})
export const oswald = Oswald({ subsets: ['latin'], display: 'swap' })
export const code = Share_Tech_Mono({
  weight: ['400'],
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap'
})
