import { Box, Image, Flex, Text, Divider } from "@chakra-ui/react"
import { H3, H5 } from "@/components/Headings"
import ButtonLink from "./Buttons/ButtonLink"

const FellowCard = ({
  title,
  description,
  image,
  fellowName,
  country,
  tags,
  slug,
}) => {
  return (
    <Flex mt={6} mb={12} gap={6} flexDir={{ base: "column", md: "row" }}>
      <Image
        src={image}
        w={40}
        h={40}
        borderRadius="250px 100px 250px 100px"
        border="2px solid #6F9D39"
      />
      <Box gap={4}>
        <Box>
          <H3 fontWeight="500" fontSize={36} m={0}>
            {fellowName}
          </H3>
          <Text fontSize="16" pb={1} fontWeight={300} lineHeight="150%" m={0} color="bodyHover">
            {country}
          </Text>
          <Divider my={4} color="action" borderTop="1px solid" />
            
        </Box>
        <Box>
          <H5 my={2} fontSize={24}>
            {title}
          </H5>
          <Flex flexWrap="wrap" mb={2} mt={4}>
            {tags.map((tag, index) => {
              return (
                <Text
                  key={index}
                  textStyle="tag"
                  color="actionHover"
                  fontFamily="heading"
                  fontSize={14}
                  letterSpacing={0.5}
                  p={1}
                  m={0}
                >
                  {tag}
                </Text>
              )
            })}
          </Flex>
          <Text textStyle="base-text" color="body">
            {description}
          </Text>
        </Box>
        <Box>
          <ButtonLink href={`/fellowship/${slug}`} variant="primary">
            Know more
          </ButtonLink>
        </Box>
      </Box>
    </Flex>
  )
}

export default FellowCard
