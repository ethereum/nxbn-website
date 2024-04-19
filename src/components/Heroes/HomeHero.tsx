// pages/index.js or another component file
import dynamic from "next/dynamic"

import { Box, Center, Flex, Heading } from "@chakra-ui/react"

const GlobeComponentWithNoSSR = dynamic(
  () => import("../../components/Map/Globe"),
  {
    ssr: false, // This line is key to making sure the import is client-side only
    loading: () => <Box flex="1" />,
  }
)
import { H1 } from "@/components/Headings"
import ContentContainer from "../ContentContainer"

const HomeHero = ({ allFellowsFrontmatter }) => {
  return (
    <ContentContainer>
      <Flex
        px={{ base: 8, md: 16 }}
        pb={8}
        pt={{ base: 32, md: 32, lg: 32, xl: 100 }}
        gap={{ base: 0, md: 2, lg: 6, xl: 16 }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Center flex={1}>
          <Heading
            as={H1}
            fontSize={{ base: 38, sm:50, md: 60, lg: 64, xl: 80 }}
            fontWeight={400}
            lineHeight={{ base: "1.1", md:"1.5", lg: "1.2" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Ethereum’s
            <Box
              as="span"
              display={{ base: "block", md:"inline", lg: "block" }}
              
              color="action"
              px ={{ base: "4", lg: "0" }}
              fontWeight={800}
             
            >
              next billion
            </Box>
            are here, now
          </Heading>
        </Center>
        <GlobeComponentWithNoSSR
          allFellowsFrontmatter={allFellowsFrontmatter}
        />
      </Flex>
    </ContentContainer>
  )
}

export default HomeHero
