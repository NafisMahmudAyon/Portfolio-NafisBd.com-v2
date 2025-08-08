// import { AspectUITheme } from 'aspect-ui/AspectUITheme'

// const colorsPalette = {
//   ...colors,
//   headingText: '#23303c',
//   headingDarkText: '#fdfdfd',
//   normalText: '#7f8797',
//   normalDarkText: '#bababa',
//   primaryColor: '#00c26c'
// }
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        headingText: '#23303c',
        headingDarkText: '#fdfdfd',
        normalText: '#7f8797',
        normalDarkText: '#bababa',
        primaryColor: '#00c26c'
      }
    }
  },
  plugins: []
}
// export default AspectUITheme(config)
export default config
