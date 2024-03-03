import NextLink from "next/link"
import {
  Link as ChakraLink,
} from "@chakra-ui/react"

const Link = ({ children, href }) => {
  return (
    <ChakraLink
      href={href}
      as={NextLink}
      color="body"
      _hover={{ borderBottom: "1px solid #B3E678" }}
    >
      {children}
    </ChakraLink>
  )
}

export default Link