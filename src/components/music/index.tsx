import { Box, Text } from '@chakra-ui/react'
import Filter from './filter'
import Recent from './recent'

type Props = {
  isContract: boolean
}

const Music = ({ isContract }: Props) => {

  return (
    <Box>
      <Text fontSize='20px'>
        {isContract ? 'MY MUSIC' : 'MUSIC'}

      </Text>
      <Box display='flex'>
        <Filter />
        <Box ml='18px'>
          <Recent isContract={isContract} />
        </Box>
      </Box>
    </Box>
  )
}

export default Music
