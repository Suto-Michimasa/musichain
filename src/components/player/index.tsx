import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
  iconPath: string
  icon2Path: string
  name: string
  author: string
  time: number
}

const Player = (props: Props) => {
  const [sliderValue, setSliderValue] = useState(0)
  return (
    <Box
      w='1516px'
      h='112px'
      background='#222A31F7'
      display='flex'
      borderRadius='15px'
    >
      <Box>
        <Box
          w='70px'
          h='70px'
          borderRadius='50%'
          overflow='hidden'
          position='absolute'
          top='11px'
          left='66px'
        >
          <Image src={props.icon2Path} alt='icon' width='70px' height='70px' />
        </Box>
        <Box
          w='70px'
          h='70px'
          borderRadius='50%'
          overflow='hidden'
          position='absolute'
          top='21px'
          left='55px'
        >
          <Image src={props.iconPath} alt='icon' width='70px' height='70px' />
        </Box>
      </Box>
      <Box position='absolute' top='30px' left='155px'>
        <Text fontSize='20px'>{props.name}</Text>
        <Text fontSize='17px' fontWeight='normal'>
          {props.author}
        </Text>
      </Box>
      <Box display='flex' position='absolute' top='25px' left='661px'>
        <Box>
          <Image src='/play3.png' alt='prev' width='25px' height='25px' />
        </Box>
        <Box ml='60px'>
          <Image src='/play.png' alt='play' width='25px' height='25px' />
        </Box>
        <Box ml='60px'>
          <Image src='/play2.png' alt='next' width='25px' height='25px' />
        </Box>
      </Box>
      <Box w='670px' h='20px' position='absolute' top='69px' left='424px'>
        <Box display='flex'>
          <Text>
            {Math.floor((props.time * 0.01 * sliderValue) / 60)}:
            {(props.time * 0.01 * sliderValue) % 60}
          </Text>
          <Slider
            mx='15px'
            w='580px'
            aria-label='music-slider'
            defaultValue={0}
            onChange={(val) => setSliderValue(val)}
          >
            <SliderTrack>
              <SliderFilledTrack bg='#25C3B5' />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text>
            {Math.floor(props.time / 60)}:{props.time % 60}
          </Text>
        </Box>
      </Box>
      <Box display='flex' position='absolute' top='44px' left='1201px'>
        <Box mr='20px'>
          <Image src='/git.png' alt='git' width='25px' height='25px' />
        </Box>
        <Box mr='20px'>
          <Image src='/download.png' alt='git' width='25px' height='25px' />
        </Box>
        <Box mr='20px'>
          <Image src='/volume.png' alt='git' width='25px' height='25px' />
        </Box>
        <Box mt='5px'>
          <Slider w='130px' aria-label='music-slider' defaultValue={25}>
            <SliderTrack>
              <SliderFilledTrack bg='#25C3B5' />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default Player
