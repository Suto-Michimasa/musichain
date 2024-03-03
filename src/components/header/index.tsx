import { Box, Button, Text } from '@chakra-ui/react'
import Language from './lang'

type Props = {
  title: string
  selectJP: boolean
  hiddenUpload?: boolean
}

const Header = (props: Props) => {
  return (
    <Box pb='15px' w='1350px' borderBottom='#ffffff solid 2px'>
      <Box ml='1273px'>
        <Language selectJP={props.selectJP} />
      </Box>
      <Box mt='52px' display='flex'>
        <Text fontSize={50} fontWeight='bold' color='white'>
          {props.title}
        </Text>
        {!props.hiddenUpload && (
          <Button
            color='#ffffff'
            background='#25C2B5'
            fontSize={25}
            w='200px'
            h='60px'
            borderRadius='15px'
            ml='auto'
          >
            upload
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default Header
