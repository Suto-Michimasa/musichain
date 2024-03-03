import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import MyLink from '../link'

type Props = {
  iconPath: string
  name: string
  author: string
  mixed?: boolean
  masteringed?: boolean
  melody?: boolean
  vocal?: boolean
  isContract?: boolean
}

const RecentElement = (props: Props) => {
  const tagElem = (name: string, color: string) => {
    return (
      <Box
        display='inline-block'
        backgroundColor={color}
        borderRadius='30px'
        fontSize='15px'
        fontWeight='normal'
        w='65px'
        h='25px'
        textAlign='center'
        pt='2px'
      >
        {name}
      </Box>
    )
  }
  const tags = (
    <Box display='flex'>
      <Box mr='-10px'></Box>
      {props.mixed && <Box ml='10px'>{tagElem('Mixed', '#DB2E5D')}</Box>}
      {props.masteringed && (
        <Box ml='10px'>{tagElem('Mastering', '#A6DB2E')}</Box>
      )}
      {props.melody && <Box ml='10px'>{tagElem('Melody', '#2E84DB')}</Box>}
      {props.vocal && <Box ml='10px'>{tagElem('Vocal', '#632EDB')}</Box>}
    </Box>
  )
  return (
    <Box
      w='300px'
      h='220px'
      background='#252A34 0% 0% no-repeat padding-box'
      borderRadius='15px'
      pt='25px'
      pl='24px'
    >
      <Box display='flex'>
        <Box w='70px' h='70px' borderRadius='50%' overflow='hidden' mt='10px'>
          <Image
            src={props.iconPath}
            alt='icon'
            width='70px'
            height='70px'
            layout='fixed'
          />
        </Box>
        <Box ml='16px'>
          <Text fontSize='20px'>{props.name}</Text>
          <Text fontSize='15px' fontWeight='normal'>
            {props.author}
          </Text>
          <Box display='flex' mt='10px' ml='23px'>
            <Box>
              <Image
                src='/download.png'
                alt='download'
                width='20px'
                height='20px'
              />
            </Box>
            <Box ml='30px'>
              <Image src='/play.png' alt='play' width='20px' height='20px' />
            </Box>
            <Box ml='30px'>
              <Image src='/git.png' alt='git' width='20px' height='20px' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt='15px'>{tags}</Box>
      <Box mt='13px' display='flex'>
        <MyLink href='/details'>
          <Button
            background='#585D67 0% 0% no-repeat padding-box'
            borderRadius='10px'
            w='120px'
            h='36px'
            pt='3px'
          >
            details
          </Button>
        </MyLink>
        <MyLink href='/contract-detail'>
          <Button
            background='#25C3B5 0% 0% no-repeat padding-box'
            borderRadius='10px'
            w='120px'
            h='36px'
            pt='3px'
            ml='12px'
          >
            {props.isContract ? 'contract' : 'add'}
          </Button>
        </MyLink>
      </Box>
    </Box>
  )
}

export default RecentElement
