import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react"

import HeaderButtons from "@/components/Nav/HeaderButtons"
import { HamburgerIcon } from "@/components/icons/Hamburger"
import { Logo } from "@/components/icons/Logo"

const Header = () => {
  return (
    <Flex
      px={16}
      py={5}
      h={20}
      bg={"rgba(2, 34, 46, 0.71)"}
      alignItems={{ base: "center", md: "normal" }}
      justifyContent="space-between"
      width="100%"
    >
      <Box
        w="158px"
        h="40px"
      >
        <ChakraLink
          href="/"
          aria-label={"home"}
          display="inline-flex"
          alignItems="center"
          textDecor="none"
        >
          <Logo />
        </ChakraLink>
      </Box>
      <HeaderButtons />
      <Box display={{ base: "block", md: "none" }}>
        <HamburgerIcon />
      </Box>
    </Flex>
  )
}

export default Header