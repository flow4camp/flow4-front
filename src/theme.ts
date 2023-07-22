import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
    ziha_charcoal: '#323232',
    ziha_green:'#CDF082',
    ziha_green_gray: '#C3DB90',
    ziha_purple: '#B1A6D2',
    ziha_purple_gray: 'B9B3CA'
}

const theme = extendTheme({ colors })

export default theme;