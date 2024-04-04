import { Box, Image, Flex, Text } from "@chakra-ui/react"
import { H3, H4, H5 } from "@/components/Headings"
import ButtonLink from "./Buttons/ButtonLink"

const FellowCard = ({
  title,
  description,
  image,
  fellowName,
  country,
  tags,
  href,
}) => {
  return (
    <Flex mt={6} mb={12} gap={7} flexDir={{ base: "column", md: "row" }}>
      <Image
        src={image}
        w={28}
        h={28}
        borderRadius="121.429px 68px 145.714px 68px"
        border="0.971px solid #6F9D39"
      />
      <Box gap={4}>
        <Box>
          <H3 fontWeight="500" m={0}>
            {fellowName}
          </H3>
          <Text fontSize="14" fontWeight={300} lineHeight="150%" m={0}>
            {country}
          </Text>
          <Flex>
            {tags.map((tag) => {
              return (
                <Text
                  key={tag}
                  textStyle="tag"
                  color="actionHover"
                  fontSize={10}
                  p={1}
                >
                  {tag}
                </Text>
              )
            })}
          </Flex>
        </Box>
        <Box>
          <H5 mb={2}>{title}</H5>
          <Text textStyle="base-text" color="body">
            {description}
          </Text>
        </Box>
        <Box>
          <ButtonLink href={`/fellow/${href}`} variant="primary">
            Know more
          </ButtonLink>
        </Box>
      </Box>
    </Flex>
  )
}

export default FellowCard
