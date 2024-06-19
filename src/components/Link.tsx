import NextLink from "next/link"
import { Icon, Link as ChakraLink, VisuallyHidden } from "@chakra-ui/react"
import { RxExternalLink } from "react-icons/rx"

import { isExternal } from "@/utils/url"

const Link = ({ children, href, ...props }) => {
  const isExternalValue = isExternal(href)

  return (
    <ChakraLink
      display="inline-flex"
      isExternal={isExternalValue}
      href={href}
      as={NextLink}
      textStyle="link-text"
      {...props}
    >
      {children}
      {isExternalValue && (
        <>
          <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
          <Icon
            as={RxExternalLink}
            boxSize="6"
            p="1"
            verticalAlign="middle"
            me="-1"
          />
        </>
      )}
    </ChakraLink>
  )
}

export default Link
