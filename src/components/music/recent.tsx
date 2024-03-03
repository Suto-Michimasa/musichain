import { Box, Text } from '@chakra-ui/react'
import RecentElement from './recentElement'

type Props = {
  isContract: boolean
}

const Recent = ({ isContract }: Props) => {
  return (
    <Box
      w='990px'
      background='#00000065 0% 0% no-repeat padding-box'
      borderRadius='15px'
      opacity={1}
      backdropFilter='blur(41px)'
      pt='21px'
      pl='30px'
      pr='30px'
      pb='21px'
    >
      <Text fontSize='25px'>Recent</Text>
      <Box>
        <Box display='flex'>
          <Box>
            <RecentElement
              iconPath='/test_icon2.png'
              name='Hoge Hoge Song'
              author='Kira・Yuse'
              mixed
              vocal
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon3.png'
              name='Fuga Fuga Song'
              author='Jodai・Inaoka'
              mixed
              melody
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon4.png'
              name='Test Song'
              author='Jodai・Yuse'
              melody
              masteringed
              isContract={isContract}
            />
          </Box>
        </Box>
        <Box display='flex' mt='20px'>
          <Box>
            <RecentElement
              iconPath='/test_icon2.png'
              name='Fuga Fuga Song'
              author='Jodai・Inaoka'
              mixed
              melody
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon3.png'
              name='Hoge Hoge Song'
              author='Kira・Yuse'
              mixed
              vocal
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon4.png'
              name='Test Song'
              author='Jodai・Yuse'
              melody
              masteringed
              isContract={isContract}
            />
          </Box>
        </Box>
        <Box display='flex' mt='20px'>
          <Box>
            <RecentElement
              iconPath='/test_icon2.png'
              name='Test Song'
              author='Jodai・Yuse'
              melody
              masteringed
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon3.png'
              name='Hoge Hoge Song'
              author='Kira・Yuse'
              mixed
              vocal
              isContract={isContract}
            />
          </Box>
          <Box ml='15px'>
            <RecentElement
              iconPath='/test_icon4.png'
              name='Fuga Fuga Song'
              author='Jodai・Inaoka'
              mixed
              melody
              isContract={isContract}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Recent
