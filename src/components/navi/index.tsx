import { Box, Text } from '@chakra-ui/react'
import NaviElement from './naviElement'
import Image from 'next/image'
import MyLink from '../link'

type Props = {
  name: string
  iconPath: string
  select?: number
}

const Navi = (props: Props) => {
  return (
    <Box
      w='364px'
      h='100%'
      pt='50px'
      pl='38px'
      pb='102px'
      boxSizing='border-box'
      background='#00000040 0% 0% no-repeat padding-box'
      opacity={1}
      backdropFilter='blur(41px)'
    >
      <MyLink href='/'>
        <Image
          src='/logo_white.svg'
          alt='logo'
          width={288}
          height={74}
          layout='fixed'
        />
      </MyLink>
      <Box pt='116px' pl='70px'>
        <MyLink href='/'>
          <NaviElement
            name='Home'
            selected={props.select === 0}
            iconPath='/house.png'
            selectedIconPath='/house_selected.png'
          />
        </MyLink>
        <NaviElement
          name='Artists'
          selected={props.select === 1}
          iconPath='/music.png'
          selectedIconPath='/music_selected.png'
        />
        <NaviElement
          name='Voting'
          selected={props.select === 2}
          iconPath='/vote.png'
          selectedIconPath='/vote_selected.png'
        />
        <MyLink href='/contract'>
          <NaviElement
            name='Contract'
            selected={props.select === 3}
            iconPath='/signature.png'
            selectedIconPath='/signature_selected.png'
          />
        </MyLink>
      </Box>
      <Box position='absolute' ml={3} bottom={10} display='flex'>
        <Box w='62px' h='62px' borderRadius='50%' overflow='hidden'>
          <Image
            src={props.iconPath}
            alt='icon'
            width={62}
            height={62}
            layout='fixed'
          />
        </Box>
        <Text color='white' fontSize={22} fontWeight='bold' mt={19} ml={30}>
          {props.name}
        </Text>
      </Box>
    </Box>
  )
}

export default Navi
