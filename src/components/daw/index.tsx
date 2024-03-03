import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import DawElement from './dawElement'

const Daw = () => {
  const [daw, setDaw] = useState(0)
  return (
    <Box>
      <Text fontSize='20px'>DAW</Text>
      <Box display='flex' mt='10px'>
        <Box onClick={() => setDaw(0)}>
          <DawElement selected={daw === 0} name='Logic Pro X' />
        </Box>
        <Box onClick={() => setDaw(1)}>
          <DawElement selected={daw === 1} name='Studio One 4' />
        </Box>
        <Box onClick={() => setDaw(2)}>
          <DawElement selected={daw === 2} name='FL STUDIO 20' />
        </Box>
        <Box onClick={() => setDaw(3)}>
          <DawElement selected={daw === 3} name='CUBASE 10' />
        </Box>
        <Box onClick={() => setDaw(4)}>
          <DawElement selected={daw === 4} name='Live 10' />
        </Box>
        <Box onClick={() => setDaw(5)}>
          <DawElement selected={daw === 5} name='ABILITY Pro' />
        </Box>
      </Box>
    </Box>
  )
}

export default Daw
