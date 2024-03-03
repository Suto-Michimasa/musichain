import { Box } from '@chakra-ui/react'

type Props = {
  name: string
  selected?: boolean
}

const DawElement = (props: Props) => {
  const elem = props.selected ? (
    <Box
      background='#00000065 0% 0% no-repeat padding-box'
      borderRadius='15px'
      opacity={1}
      backdropFilter='blur(41px)'
      pt='14px'
      pb='13px'
      w='200px'
      h='65px'
      fontSize='25px'
      fontWeight='semibold'
      letterSpacing={0}
      textAlign='center'
      mr='30px'
      border='4px solid #25C3B5'
    >
      {props.name}
    </Box>
  ) : (
    <Box
      background='#00000065 0% 0% no-repeat padding-box'
      borderRadius='15px'
      opacity={1}
      backdropFilter='blur(41px)'
      pt='18px'
      pb='13px'
      w='200px'
      h='65px'
      fontSize='25px'
      letterSpacing={0}
      fontWeight="semibold"
      textAlign='center'
      mr='30px'
    >
      {props.name}
    </Box>
  )
  return <Box fontWeight='medium'>{elem}</Box>
}

export default DawElement
