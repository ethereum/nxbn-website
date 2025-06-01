import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react"
import ContentContainer from "@/components/ContentContainer"
import { H2, H4 } from "@/components/Headings"
import Link from "@/components/Link"

import {
  IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
  IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT,
} from "@/utils/constants"

const previousEditions = [
  {
    name: "Devcon SEA 2024",
    location: "Bangkok, Thailand",
    description:
      "Devcon Southeast Asia brought together the Ethereum community in Bangkok from November 12-15, 2024. The event featured talks, workshops, and networking opportunities, with a special focus on expanding Ethereum's reach across Southeast Asia.",
    image: "/images/devcon_sea_2024.png",
    url: "https://archive.devcon.org/watch/?event=devcon-7&sort=eventId&order=desc",
  },
  {
    name: "Devconnect 2023",
    location: "Istanbul, Turkey",
    description:
      "The vibrant metropolis of Istanbul hosted Devconnect from November 13-19. Over 3500 Ethereum enthusiasts gathered at the Devconnect Cowork in the Istanbul Congress Center, while many more attended independent events throughout Istanbul.",
    image: "/images/devconnect_2023.png",
    url: "https://devconnect.org/istanbul",
  },
  {
    name: "Devcon 2022",
    location: "Bogotá, Colombia",
    description:
      "After a three-year-long pause, we emerged from the pandemic stronger than before and reunited in Bogotá for the largest and some would say, “best Devcon yet.”",
    image: "/images/devcon_2022.png",
    url: "https://archive.devcon.org/archive/watch/?order=desc&sort=eventId",
  },
  {
    name: "Devconnect 2022",
    location: "Amsterdam, Netherlands",
    description:
      "For eight days, the city of Amsterdam was filled with bicycles bearing the Devconnect flag, as the Ethereum community came together to coordinate a variety of independent events and workshops.",
    image: "/images/devconnect_2022.png",
    url: "https://devconnect.org/amsterdam",
  },
]

const cityFontStyle = {
  fontFamily: "body",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "150%",
}

const PreviousEditions = () => {
  return (
    <>
      <ContentContainer>
        <Box px={{ base: 6, md: 16 }}>
          <H2 variant="action" mb={16}>
            Previous Editions
          </H2>
          <Box>
            {previousEditions.map((edition, index) => (
              <Box key={index}>
                <Flex
                  gap={8}
                  flexDir={{ base: "column", lg: "row" }}
                  _hover={{
                    img: {
                      ...IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
                    },
                  }}
                >
                  <Center flex={1} overflow="hidden" borderRadius="16px">
                    <Image
                      src={edition.image}
                      alt={edition.name}
                      w="100%"
                      loading="lazy"
                      {...IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT}
                    />
                  </Center>

                  <Center flexDir="column" alignItems="normal" flex={1}>
                    <H4 variant="action" mb={1}>
                      {edition.name}
                    </H4>
                    <Text {...cityFontStyle} mb={3.5}>
                      {edition.location}
                    </Text>
                    <Text mb={8}>{edition.description}</Text>
                    <Box>
                      <Link href={edition.url} textStyle="link-text-action">
                        Check out {edition.name}
                      </Link>
                    </Box>
                  </Center>
                </Flex>
                {index < previousEditions.length - 1 && (
                  <Divider my={12} color="#035A7A" borderTop="1px solid" />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </ContentContainer>
    </>
  )
}

export default PreviousEditions
