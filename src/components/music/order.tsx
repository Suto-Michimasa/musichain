import { Box } from '@chakra-ui/react'

type Props = {
  name: string
  selected?: boolean
}

const Order = (props: Props) => {
  const elem = props.selected ? (
    <Box
      background='#00000040 0% 0% no-repeat padding-box'
      border='3px solid #25C3B5'
      borderRadius='10px'
      backdropFilter='blur(41px)'
      textAlign='center'
      w='135px'
      h='42px'
      pt='7px'
    >
      {props.name}
    </Box>
  ) : (
    <Box
      background='#00000040 0% 0% no-repeat padding-box'
      borderRadius='10px'
      backdropFilter='blur(41px)'
      textAlign='center'
      w='135px'
      h='42px'
      pt='10px'
    >
      {props.name}
    </Box>
  )
  return (
    <Box fontSize='20px' fontWeight='medium'>
      {elem}
    </Box>
  )
}

export default Order
