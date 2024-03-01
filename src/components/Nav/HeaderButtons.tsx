import { Center, Flex, Text } from '@chakra-ui/react'

import Link from '@/components/Link'

import {
  ABOUT_PAGE,
  BLOG_PAGE,
  FELLOWSHIP_PAGE,
  SCHOLAR_PAGE
} from '@/utils/constants'

const HeaderButtons = () => {
  return (
    <Center>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}       display={{base: "none", md: "flex"}}>
        <Link href={FELLOWSHIP_PAGE}><Text>Fellowship</Text></Link>
        <Link href={SCHOLAR_PAGE}><Text>Scholar</Text></Link>
        <Link href={ABOUT_PAGE}><Text>About</Text></Link>
        <Link href={BLOG_PAGE}><Text>Blog</Text></Link>
      </Flex>
    </Center>
  )
}

export default HeaderButtons