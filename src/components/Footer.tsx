import { Box, Center, Flex, Text } from '@chakra-ui/react'

import { LogoIcon } from '@/components/icons'
import Link from '@/components/Link'

import {
  ETHEREUM_DOT_ORG_LINK,
  ETHEREUM_FOUNDATION_LINK,
  PRIVACY_POLICY_LINK,
  TERMS_OF_USE_LINK,
  COOKIE_POLICY_PAGE,
} from "@/utils/constants"

const Footer = () => {
  return (
    <Box
      id='footer'
      w="full"
    >
      <Box borderColor="action" borderBottomWidth={1} mb={2.5}/>
      <Flex
        py={2}
        justifyContent="space-between"
        px={{ base: 5, md: 16 }}
      >
        <LogoIcon  />
        <Center>
          <Flex textAlign="right" gap={{
                base:2,
              }} flexDirection={"column"}>
            <Flex 
              flexDirection={{
                base: "column",
                lg: "row"
              }}
              width="100%"
              gap={{
                base: 2,
                md: 4
              }}
            >
              <Link href={ETHEREUM_DOT_ORG_LINK}>
                Ethereum.org
              </Link>
              <Link href={ETHEREUM_FOUNDATION_LINK}>
                Ethereum.foundation
              </Link>
              <Link href={PRIVACY_POLICY_LINK}>
                Privacy Policy
              </Link>
              <Link href={TERMS_OF_USE_LINK}>
                Terms of Use
              </Link>
              <Link href={COOKIE_POLICY_PAGE}>
                Cookie Policy
              </Link>
            </Flex>
            <Text textStyle="footer-text">@ 2024 Ethereum Foundation. All rights reserved.</Text>
          </Flex>
        </Center>
      </Flex>
    </Box>
  )
}

export default Footer