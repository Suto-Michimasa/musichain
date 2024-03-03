import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      mint: '#25C3B5',
      red: '#DB2E5D',
      green: '#A6DB2E',
      blue: '#2E84DB',
      purple: '#632EDB',
    },
    fonts: {
      size15: '15px',
      size16: '16px',
      size17: '17px',
      size20: '20px',
      size21: '21px',
      size22: '22px',
      size24: '24px',
      size25: '25px',
      size50: '50px',
    },
  },
})

export default theme
