import { Box, Text } from '@chakra-ui/react'

type Props = {
  selectJP: boolean
}

const Language = (props: Props) => {
  const JPcolor = props.selectJP ? '#25C3B5' : 'white'
  const ENcolor = props.selectJP ? 'white' : '#25C3B5'
  return (
    <Box display='flex' w='75px'>
      <Text fontSize={20} fontWeight='bold' color={JPcolor}>
        JP
      </Text>
      <Text fontSize={20} fontWeight='bold' color='white'>
        &nbsp;/&nbsp;
      </Text>
      <Text fontSize={20} fontWeight='bold' color={ENcolor}>
        EN
      </Text>
    </Box>
  )
}

export default Language
