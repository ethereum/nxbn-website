import { Box, Text } from "@chakra-ui/react"

const FilterButton = ({ children, ...props }) => {
  return (
    <Box
      px="18px"
      py={1.5}
      borderRadius="full"
      alignItems="center"
      justifyContent={"center"}
      border={"1px solid"}
      borderColor={"body"}
      {...props}
    >
      <Text
        mb={0}
        color="body"
        fontFamily={"button"}
        fontSize="9.5px"
        fontStyle={"normal"}
        fontWeight={700}
        lineHeight={"150%"}
        letterSpacing={"-0.105px"}
      >
        {children}
      </Text>
    </Box>
  )
}

export default FilterButton
