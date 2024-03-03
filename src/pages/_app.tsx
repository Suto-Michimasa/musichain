import { Box, ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../styles/theme'
import '../styles/app.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='main'>
      <ChakraProvider theme={theme}>
        <Box fontFamily='Gill Sans' fontWeight='bold' color='white'>
          <Component
            {...pageProps}
          />
        </Box>
      </ChakraProvider>
    </div >
  )
}

export default MyApp
