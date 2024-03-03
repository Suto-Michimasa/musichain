import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Text } from '@chakra-ui/react';


type ContributeProps = {
  path: string
  name: string
  approved: boolean
  time?: string
  border?: boolean
  setContract: (value: boolean) => void
}

const ContributeElement = (props: ContributeProps) => {
  const sleep = (waitTime: number) => new Promise(resolve => setTimeout(resolve, waitTime));

  // Approved時の処理
  const handleApprove = async () => {
    //TODO: METAMASK実装
    await sleep(2000);
    props.setContract(true)
  };

  const image = props.border ? (
    <Box
      ml='12.5px'
      w='100px'
      h='100px'
      borderRadius='50%'
      overflow='hidden'
      border='4px solid #25C3B5'
    >
      <Image src={props.path} alt='icon' width='100px' height='100px' />
    </Box>
  ) : (
    <Box ml='12.5px' w='100px' h='100px' borderRadius='50%' overflow='hidden'>
      <Image src={props.path} alt='icon' width='100px' height='100px' />
    </Box>
  )
  return (
    <Box w='125px'>
      {image}
      <Text textAlign='center' mt='20px' mb='26px'>
        {props.name}
      </Text>
      {props.approved ? (
        <Box>
          <Text textAlign='center' fontSize='25px' color='#25C3B5'>
            Approved
          </Text>
          <Text mt={6} fontSize='13px' fontWeight='medium' textAlign='center'>
            {props.time}
          </Text>
        </Box>
      ) : (
        <Box>
          <Button
            background='#25C3B5 0% 0% no-repeat padding-box'
            borderRadius='10px'
            w={130}
            py={2}
            ml={0}
            fontSize={20}
            fontWeight='bold'
            _hover={{ bg: 'rgba(237, 237, 237, 0.3) 0% 0% no-repeat padding-box' }}
            onClick={() => handleApprove()}
          >
            Approve
          </Button>
          <Text mt={5} fontSize='15px' fontWeight='medium' textAlign='center'>
            Not yet
          </Text>
        </Box>
      )}
    </Box>
  )
}

const ContractDetail = () => {
  const [contract, setContract] = useState(false);

  const downloadContract = () => {
    var alink = document.createElement('a');
    alink.download = '12edq9vba909yb2vq8c.pdf';
    alink.href = '/12edq9vba909yb2vq8c.pdf';
    alink.click();
    return false;
  };
  return (
    <Box>
      <Box display='flex'>
        <Box>
          <Text fontSize='20px'>MY MUSIC</Text>
          <Box
            w='972px'
            h='663px'
            background='#00000040 0% 0% no-repeat padding-box'
            borderRadius='15px'
            backdropFilter='blur(41px)'
            pt='25px'
            pl='37px'
          >
            <Box display='flex'>
              <Box>
                <Text fontSize='20px'>contract no #000001</Text>
                <Text fontSize='26px'>Hoge Hoge song</Text>
              </Box>
              <Box display='flex' ml='auto' mr='49.5px'>
                <Box mr='30px'>
                  <Image
                    src='/play.png'
                    alt='play'
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
            <Text mt='70px' fontSize='25px'>
              Contributers
            </Text>
            <Box mt='26px' ml='35px'>
              <Text mb='5px' ml='77px' fontSize='20px' fontWeight='normal'>
                Owner
              </Text>
              <Box display='flex'>
                <Box
                  w='606px'
                  borderBottom='#ffffff solid 2px'
                  position='absolute'
                  mt='50px'
                  ml='100px'
                ></Box>
                <Box mx='44px' >
                  <ContributeElement
                    path='/test_icon2.png'
                    name='Yuse'
                    approved={true}
                    time='2022.09.25 11:34:32'
                    border={true}
                    setContract={setContract}
                  />
                </Box>
                <Box mx='44px'>
                  <ContributeElement
                    path='/test_icon3.png'
                    name='Kira'
                    approved={true}
                    time='2022.09.25 20:10:03'
                    setContract={setContract}
                  />
                </Box>
                <Box mx='44px'>
                  <ContributeElement
                    path='/test_icon4.png'
                    name='Jodai'
                    approved={true}
                    time='2022.09.25 21:10:03'
                    setContract={setContract}
                  />
                </Box>
                <Box mx='44px'>
                  <ContributeElement
                    path='/michimasa-suto_icon.png'
                    name='Michimasa Suto'
                    approved={contract}
                    time='2022.09.26 07:49:13'
                    setContract={setContract}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {contract && (
          <Box ml='18px'>
            <Text fontSize='20px'>Document</Text>
            <Box
              w='360px'
              h='663px'
              background='#00000040 0% 0% no-repeat padding-box'
              borderRadius='15px'
              backdropFilter='blur(41px)'
              pt='19px'
              pl='43px'
            >
              <Text fontSize='20px' mb='10px'>
                Preview
              </Text>
              <Image
                src='/contract_ex.png'
                alt='contract'
                width='274px'
                height='387px'
              />
              <Text fontSize={12} textAlign='center' mr={6}>1/3</Text>
              <Button
                background='rgba(237, 237, 237, 0.3) 0% 0% no-repeat padding-box'
                borderRadius='10px'
                letterSpacing={1}
                w='274px'
                mt={4}
                py={7}
                fontSize={16}
                fontWeight='bold'
                _hover={{ bg: '#25C3B5' }}
              >
                Contract details
              </Button>
              <Button
                background='#25C3B5 0% 0% no-repeat padding-box'
                borderRadius='10px'
                letterSpacing={1}
                w='274px'
                mt={4}
                py={7}
                fontSize={16}
                fontWeight='bold'
                _hover={{ bg: 'rgba(237, 237, 237, 0.3) 0% 0% no-repeat padding-box' }}
                onClick={() => downloadContract()}
              >
                Issuance of Contracts
              </Button>
            </Box>
          </Box>

        )}
      </Box>
    </Box>
  )
}

export default ContractDetail
