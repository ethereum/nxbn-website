import { Box, Text } from "@chakra-ui/react"

/**
 * Site-wide notice that the Next Billion programs have ended.
 *
 * This site is kept as a record of the fellowship, scholars, and internship
 * programs, so every page carries the same one-line statement at the top.
 */
const ArchiveNotice = () => {
  return (
    <Box
      as="aside"
      role="note"
      w="100%"
      bg="backgroundHighlight"
      borderBottom="1px solid"
      borderColor="rgba(240, 247, 255, 0.15)"
      px={4}
      py={2}
    >
      <Text
        color="body"
        fontSize={{ base: "xs", md: "sm" }}
        textAlign="center"
        letterSpacing="0.02em"
        m={0}
      >
        The Next Billion programs have concluded
      </Text>
    </Box>
  )
}

export default ArchiveNotice
