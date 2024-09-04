import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      headingText: '#23303c',
      headingDarkText: '#fdfdfd',
      normalText: '#7f8797',
      normalDarkText: '#bababa',
      primaryColor: '#00c26c'
    },
    extend: {}
  },
  plugins: []
}
export default config
