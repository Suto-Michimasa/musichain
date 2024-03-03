import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

type Props = {
  isUpload: boolean;
  setIsUpload: (value: boolean) => void
}

const MusicDetail = ({ isUpload, setIsUpload }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //待ち時間
  const sleep = (waitTime: number) => new Promise(resolve => setTimeout(resolve, waitTime));

  const handleUpload = async () => {
    inputRef.current?.click();
    //デモ動画のため、アップロード後に自動でisUploadをtrueにする
    //TODO: METAMASK実装
    await sleep(8000);
    setIsUpload(true);
  };
  return (
    <Box
      w='972px'
      h='698px'
      background='#00000040 0% 0% no-repeat padding-box'
      borderRadius='15px'
      backdropFilter='blur(41px)'
      pt='23px'
      pl='36px'
      pr='46px'
    >
      <Box display='flex'>
        <Box w='100px' h='100px' borderRadius='50%' overflow='hidden'>
          <Image
            src='/test_icon2.png'
            alt='icon'
            width='100px'
            height='100px'
          />
        </Box>
        <Box ml='42px'>
          <Text fontSize='26px'>Hoga Hoga song</Text>
          <Flex>
            <Text fontSize='20px' fontWeight='normal'>
              Kira・Inaoka
            </Text>
            {/* {isUpload && (<Text fontSize='20px' fontWeight='normal'>(・Takuya Jodai)</Text>)} */}
          </Flex>
          <Box display='flex' mt='10px'>
            <Box
              display='inline-block'
              backgroundColor='#DB2E5D'
              borderRadius='30px'
              fontSize='15px'
              fontWeight='normal'
              w='65px'
              h='25px'
              textAlign='center'
              pt='2px'
            >
              Mixed
            </Box>
            <Box
              display='inline-block'
              backgroundColor='#632EDB'
              borderRadius='30px'
              fontSize='15px'
              fontWeight='normal'
              w='65px'
              h='25px'
              textAlign='center'
              pt='2px'
              ml='10px'
            >
              Vocal
            </Box>
          </Box>
        </Box>
        <Box display='flex' ml='auto'>
          <Box mr='30px'>
            <Image src='/play.png' alt='play' width='25px' height='25px' />
          </Box>
          <Box mr='30px'>
            <Image src='/heart.png' alt='favorite' width='25px' height='25px' />
          </Box>
          <Box mr='30px'>
            <Image
              src='/download.png'
              alt='download'
              width='25px'
              height='25px'
            />
          </Box>
          <Box mr='30px'>
            <Image
              src='/git_selected.png'
              alt='git'
              width='25px'
              height='25px'
            />
          </Box>
          <Box display='flex' mt='-12px'>
            <Text fontSize='30px'>.</Text>
            <Text fontSize='30px'>.</Text>
            <Text fontSize='30px'>.</Text>
          </Box>
        </Box>
      </Box>
      <Flex justify={'flex-end'}>
        <Box>
          <Input type="file" accept=".mp3" ref={inputRef} hidden />
          <br />
          <Button
            color='#ffffff'
            background='#25C2B5'
            fontSize={25}
            w='160px'
            h='45px'
            borderRadius='15px'
            pt='6px'
            mt='-120px'
            onClick={handleUpload}
          >
            add
          </Button>
        </Box>
      </Flex>
      <Box mt={20}>
        <Box display='flex'>
          <Text fontSize='25px'>Contributers</Text>
          <Text
            ml={16}
            mt={1}
            fontSize='20px'
            fontWeight='medium'
            color='#EDEDED'
          >
            Last Update 2022.09.25
          </Text>
        </Box>
        <Box display='flex'>
          <Box>
            <Box w='70px' h='70px' borderRadius='50%' overflow='hidden'>
              <Image
                src='/test_icon3.png'
                alt='icon'
                width='70px'
                height='70px'
              />
            </Box>
            <Text ml='20px' fontSize='20px' fontWeight='normal'>
              Kira
            </Text>
          </Box>
          <Box ml='35px'>
            <Box w='70px' h='70px' borderRadius='50%' overflow='hidden'>
              <Image
                src='/test_icon4.png'
                alt='icon'
                width='70px'
                height='70px'
              />
            </Box>
            <Text ml='10px' fontSize='20px' fontWeight='normal'>
              Inaoka
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MusicDetail
