// pages/index.js or another component file
import dynamic from "next/dynamic"

import { Box, Center, Flex } from "@chakra-ui/react"

const GlobeComponentWithNoSSR = dynamic(
  () => import("../../components/Map/Globe"),
  {
    ssr: false, // This line is key to making sure the import is client-side only
    loading: () => <Box flex="1" />,
  }
)
import { H2 } from "@/components/Headings"
import ContentContainer from "../ContentContainer"

const HomeHero = ({ allFellowsFrontmatter }) => {
  return (
    <ContentContainer pb={36}>
      <Flex
        px={{ base: 8, md: 16 }}
        pb={8}
        pt={16}
        gap={16}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Center flex={1}>
          <H2
            fontSize={{ base: 46, md: 54, lg: 52, xl: 56 }}
            fontWeight={300}
            lineHeight={1.2}
          >
            Ethereum’s
            <Box
              as="span"
              display="block"
              color="action"
              fontWeight={500}
              fontSize={{ base: 50, md: 68, lg: 58, xl: 66 }}
            >
             next billion
            </Box>
            are here, now ➡
          </H2>
        </Center>
        <GlobeComponentWithNoSSR
          allFellowsFrontmatter={allFellowsFrontmatter}
        />
      </Flex>
    </ContentContainer>
  )
}

export default HomeHero
