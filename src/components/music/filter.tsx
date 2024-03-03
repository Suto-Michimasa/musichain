import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Order from './order'
import Tag from './tag'

const Filter = () => {
  const [order, setOrder] = useState(0)
  return (
    <Box
      w='340px'
      h='500px'
      background='#00000065 0% 0% no-repeat padding-box'
      borderRadius='15px'
      opacity={1}
      backdropFilter='blur(41px)'
      pt='24px'
      px='30px'
      pb='27px'
    >
      <Text fontSize='25px'>Filter</Text>
      <Box>
        <Text
          fontWeight='medium'
          borderBottom='1px solid #ffffff'
          mt='10px'
          mb='20px'
        >
          Tag
        </Text>
        <Box>
          <Box display='flex' mb='15px'>
            <Box>
              <Tag name='Mixing' color='#DB2E5D' />
            </Box>
            <Box ml='10px'>
              <Tag name='Mastering' color='#A6DB2E' />
            </Box>
          </Box>
          <Box display='flex'>
            <Box>
              <Tag name='Melody' color='#2E84DB' />
            </Box>
            <Box ml='10px'>
              <Tag name='Vocal' color='#632EDB' />
            </Box>
            <Box ml='10px'>
              <Box
                background='#24BFB1 0% 0% no-repeat padding-box'
                borderRadius='30px'
                fontSize='24px'
                w='33px'
                h='34px'
                textAlign='center'
                pt='4px'
              >
                +
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt='49px'>
        <Text
          fontWeight='medium'
          borderBottom='1px solid #ffffff'
          mt='10px'
          mb='20px'
        >
          Order
        </Text>
        <Box w='280px'>
          <Box display='flex'>
            <Box onClick={() => setOrder(0)}>
              <Order selected={order === 0} name='Recent' />
            </Box>
            <Box ml='10px' onClick={() => setOrder(1)}>
              <Order selected={order === 1} name='Popular' />
            </Box>
          </Box>
          <Box mt='10px' display='flex'>
            <Box onClick={() => setOrder(2)}>
              <Order selected={order === 2} name='Update' />
            </Box>
            <Box ml='10px' onClick={() => setOrder(3)}>
              <Order selected={order === 3} name='Recomend' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt='30px'>
        <Button
          backgroundColor='#585D67'
          fontSize='21px'
          fontWeight='medium'
          w='160px'
          h='52px'
          borderRadius='15px'
          ml='60px'
        >
          Clear Filters
        </Button>
      </Box>
    </Box>
  )
}

export default Filter
