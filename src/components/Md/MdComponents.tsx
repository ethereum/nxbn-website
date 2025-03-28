import {
  Box,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react"

import { H1, H2, H3, H4, H5, H6 } from "@/components/Headings"
import Link from "@/components/Link"
import MarkdownImage from "@/components/Md/MarkdownImage"

const Header1 = (props) => {
  return (
    <Heading
      as="h1"
      textStyle="h1"
      fontSize={{ base: "32", md: "48" }}
      wordBreak="break-word"
      variant="action"
      {...props}
    />
  )
}

const Header2 = (props) => {
  return <H2 variant="action" {...props} mt={32} />
}

const Header3 = (props) => {
  return <H3 variant="action" {...props} mt={24} />
}

const Header4 = (props) => {
  return <H4 variant="action" {...props} mt={16} />
}

const Header5 = (props) => {
  return <H5 variant="action" {...props} mt={12} />
}

const Header6 = (props) => {
  return <H6 variant="action" {...props} mt={8} />
}

const Paragraph = (props) => {
  return <Text textStyle="base-text" mb={4} {...props} />
}

const ListItemStyled = (props) => {
  return <ListItem textStyle="base-text" {...props} />
}

export const HR = () => (
  <Divider
    mt={8}
    mb={4}
    display="inline-block"
    position="inherit"
    height="1px"
    bg="action"
  />
)

// All base html element components
const BlockQuote = (props) => {
  return (
    <Box
      borderLeft="4px solid"
      borderColor="action"
      pl={4}
      my={4}
      color="gray.700"
      {...props}
    />
  )
}

export const htmlElements = {
  a: Link,
  div: Box,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  p: Paragraph,
  img: MarkdownImage,
  li: ListItemStyled,
  ol: OrderedList,
  ul: UnorderedList,
  hr: HR,
  blockquote: BlockQuote,
}

/**
 * All base markdown components as default export
 */
const MdComponents = {
  ...htmlElements,
}

export default MdComponents
