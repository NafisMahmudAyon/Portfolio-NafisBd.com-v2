import { Oswald, Poppins } from "next/font/google";

export const poppins = Poppins({ weight: ['200', '400', '500', '600'], subsets: ["latin"], display: 'swap' });
export const oswald = Oswald({ subsets: ["latin"], display: 'swap' });