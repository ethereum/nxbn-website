// pages/index.js or another component file
import dynamic from "next/dynamic"

const GlobeComponentWithNoSSR = dynamic(
  () => import("../../components/Map/Globe"),
  {
    ssr: false, // This line is key to making sure the import is client-side only
  }
)

import { Center, Flex } from "@chakra-ui/react"

import { H3 } from "@/components/Headings"

const HomeHero = ({ allFellowsFrontmatter }) => {
  return (
    <Flex
      px={{ base: 8, md: 16 }}
      pb={8}
      pt={16}
      gap={16}
      flexDir={{ base: "column", md: "row" }}
    >
      <Center flex={1}>
        <H3>Ethereum’s next billion users are here, now →</H3>
      </Center>
      <GlobeComponentWithNoSSR allFellowsFrontmatter={allFellowsFrontmatter} />
    </Flex>
  )
}

export default HomeHero
