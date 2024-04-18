import { Box, Center, Image, Flex, Text } from "@chakra-ui/react"

import { Breadcrumbs } from "@/components/Breadcrumbs"
import { H1 } from "@/components/Headings"

const FellowLayoutHero = ({ title, fellowName, country, tags, image }) => {
  return (
    <Box px={{ base: 6, md: 16 }} pt={16} pb={8}>
      <Breadcrumbs />
      <Box my={2.5}>
        <H1 textStyle="fellow-title">{title}</H1>
      </Box>
      <Flex flexWrap="wrap">
        {tags.map((tag, index) => {
          return (
            <Text
              key={index}
              textStyle="tag"
              textTransform="lowercase"
              color="action"
              bg="#00000020"
              fontFamily="heading"
              fontSize={14}
              letterSpacing={0.7}
              mb="0.75rem"
              px={4}
              py={0.5}
              mx={1}
              border="1px solid"
              borderRadius="4000px"
            >
              {tag}
            </Text>
          )
        })}
      </Flex>
      <Flex mt={6} mb={12} gap={4}>
        <Image
          src={image}
          w={20}
          h={20}
          borderRadius="121.429px 68px 145.714px 68px"
          border="2px solid #6F9D39"
          alt=""
        />
        <Center>
          <Box>
            <Text
              textStyle="base-text"
              fontFamily="heading"
              fontWeight="600"
              color="body"
              fontSize={20}
              m={0}
            >
              {fellowName}
            </Text>
            <Text textStyle="base-text" fontSize="18" color="body" m={0}>
              {country}
            </Text>
          </Box>
        </Center>
      </Flex>
    </Box>
  )
}

export default FellowLayoutHero
