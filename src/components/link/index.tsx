import React from 'react'
import NextLink from 'next/link'
import { Link as ChakraUILink } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
  href: string
}

const MyLink = (props: Props) => {
  return (
    <NextLink href={props.href} passHref>
      <ChakraUILink>{props.children}</ChakraUILink>
    </NextLink>
  )
}

export default MyLink
