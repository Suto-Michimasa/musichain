import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  name: string
  selected?: boolean
  iconPath: string
  selectedIconPath: string
}

const NaviElement = (props: Props) => {
  const color = props.selected ? '#25C3B5' : 'white'
  const iconPath = props.selected ? props.selectedIconPath : props.iconPath
  return (
    <Box mb={50} display='flex'>
      <Image
        src={iconPath}
        alt='navi icon'
        width={28}
        height={28}
        layout='fixed'
      />
      <Text fontSize={22} color={color} mt='2px' ml='20px'>
        {props.name}
      </Text>
    </Box>
  )
}

export default NaviElement
