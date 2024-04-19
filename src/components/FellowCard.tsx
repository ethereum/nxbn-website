import { Box, Image, Flex, Text, Divider, Center } from "@chakra-ui/react"
import { H3, H5 } from "@/components/Headings"
import ButtonLink from "./Buttons/ButtonLink"

import {
  IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
  IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT,
} from "@/utils/constants"

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
    <Flex
      mt={6}
      mb={12}
      gap={6}
      flexDir={{ base: "column", md: "row" }}
      _hover={{
        img: {
          ...IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
        },
      }}
    >
      <Flex flex={1} justifyContent={{ base: "center", md: "right" }}>
        <Box
          w={40}
          h={40}
          overflow="hidden"
          borderRadius="250px 100px 250px 100px"
          border="2px solid #6F9D39"
        >
          <Image
            src={image}
            w={40}
            h={40}
            alt=""
            loading="lazy"
            {...IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT}
          />
        </Box>
      </Flex>
      <Box gap={4} flex={1}>
        <Box>
          <H3
            fontWeight="500"
            m={0}
            fontSize={{ base: "28", md: "36" }}
            textAlign={{ base: "Center", md: "left" }}
          >
            {fellowName}
          </H3>
          <Text
            fontSize="16"
            pb={1}
            textAlign={{ base: "center", md: "left" }}
            fontWeight={300}
            lineHeight="150%"
            m={0}
            color="bodyHover"
          >
            {country}
          </Text>
          <Divider
            my={4}
            color="bodyHover"
            borderTop="1px solid"
            opacity="0.5"
          />
        </Box>
        <Box>
          <H5 my={2} fontSize={{ base: "20", md: "24" }}>
            {title}
          </H5>
          <Flex flexWrap="wrap" mb={2} mt={4}>
            {tags.map((tag, index) => {
              return (
                <Text
                  key={index}
                  textStyle="tag"
                  textTransform="lowercase"
                  color="bodyHover"
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
