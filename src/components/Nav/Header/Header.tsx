import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"

import { LogoIcon } from "@/components/icons"

const Header = () => {
  const router = useRouter()

  return (
    <header>
      <Box mx={4} zIndex="sticky">
        <Flex
          px={6}
          py={3}
          h={16}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          borderRadius="60px"
          bg="rgba(0, 0, 0, 0.60)"
        >
          <Box
            onClick={() => router.push("/")}
            cursor="pointer"
            aria-label="Next Billion home"
          >
            <LogoIcon />
          </Box>
        </Flex>
      </Box>
    </header>
  )
}

export default Header
