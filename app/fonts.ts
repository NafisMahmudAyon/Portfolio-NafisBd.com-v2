import { Oswald, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})
export const oswald = Oswald({ subsets: ['latin'], display: 'swap' })
