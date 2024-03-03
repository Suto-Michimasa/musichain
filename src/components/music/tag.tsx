import { Box } from '@chakra-ui/react'

type Props = {
  name: string
  color: string
}

const Tag = (props: Props) => {
  return (
    <Box
      display='inline-block'
      backgroundColor={props.color}
      borderRadius='30px'
      fontSize='24px'
      px='18px'
      pt='4px'
      fontWeight='normal'
      h='34px'
    >
      {props.name}
    </Box>
  )
}

export default Tag
