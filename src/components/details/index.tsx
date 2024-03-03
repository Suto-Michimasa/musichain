import { useState } from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import MusicDetail from './musicDetail'
import Image from 'next/image'

const Music = () => {
  const [isUpload, setIsUpload] = useState(false)
  return (
    <Box display='flex'>
      <Box>
        <Text fontSize={20} mb={3}>MUSIC</Text>
        <MusicDetail isUpload={isUpload} setIsUpload={setIsUpload} />
      </Box>
      <Box ml='18px'>
        <Text fontSize={20} mb={3}>HISTORY</Text>
        <Box
          w='360px'
          h='698px'
          background='#00000040 0% 0% no-repeat padding-box'
          borderRadius='15px'
          backdropFilter='blur(41px)'
          pt='30px'
          pl='20px'
        >
          <Flex>
            <Box>
              <Box mt={1}>
                <Image src='/line-history.png' alt='icon' width='18px' height='78px' />
              </Box>
              <Box>
                <Image src='/line-history.png' alt='icon' width='18px' height='78px' />
              </Box>
              {isUpload && (
                <Box>
                  <Image src='/line-history.png' alt='icon' width='18px' height='78px' />
                </Box>
              )}
            </Box>
            <Box ml={5} width='240px'>
              <Text fontSize={20}>Kira</Text>
              <Text mt={10} fontSize={20}>Inaoka</Text>
              {isUpload && (
                <Text mt={10} fontSize={20}>Takuya Jodai</Text>
              )}
            </Box>
            <Box width={32}>
              <Text fontSize={18} fontWeight='normal'>2022.09.12</Text>
              <Text mt={10} fontSize={18} fontWeight='normal'>2022.09.25</Text>
              {isUpload && (
                <Text mt={12} fontSize={18} fontWeight='normal'>2022.10.03</Text>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Music
