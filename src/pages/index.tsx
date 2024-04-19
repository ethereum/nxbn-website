import { Box, Center, Flex, Image, Text } from "@chakra-ui/react"
import Parser from "rss-parser"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import ImageSplitContent from "@/components/ImageSplitContent"
import HomeHero from "@/components/Heroes/HomeHero"

import { getAllFellowsFrontmatter } from "@/utils/md"
import BlogFeed from "@/components/BlogFeed"
import WhoAreNextBillion from "@/components/WhoAreNextBillion"

export const getStaticProps = async () => {
  const parser = new Parser({
    customFields: {
      item: ["description"],
    },
  })

  const feed = await parser.parseURL(
    "https://blog.ethereum.org/en/next-billion/feed.xml"
  )
  const allFellowsFrontmatter = getAllFellowsFrontmatter()

  return {
    props: {
      allFellowsFrontmatter,
      blogs: feed.items.slice(0, 4),
    },
  }
}

const HomePage = ({ allFellowsFrontmatter, blogs }) => {
  return (
    <>
      <Box pos="relative" top="-64px" mb="-64px">
        <Box
          pos="absolute"
          zIndex={-1}
          top={0}
          left={0}
          right={0}
          bg="#0E6899"
          h={"100%"}
        >
          <Image
            src={"/images/homepage/home-stars.jpg"}
            alt="Stars"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="bottom"
          />
        </Box>
        <HomeHero allFellowsFrontmatter={allFellowsFrontmatter} />
      </Box>
      <Box bg="linear-gradient(180deg, #0E6899 0%, #057db3 100%)">
        <ContentContainer>
          <ImageSplitContent
            image={"/images/homepage/fellow_home.jpg"}
            imageBorder="right"
            imageSide="right"
          >
            <Box gap={8}>
              <H2>The Next Billion Fellowship</H2>
              <Text fontSize={18}>
                A search for stories. Stories that inspire us to focus on the
                important things, that compel us to find balance and fairness in the way we go
                about solving our problems, and that encourage us to push deeper into the mysteries of
                human cooperation.
              </Text>
              <Text fontSize={18} mb={16}>
                Fellows receive support from the Foundation to complete a small quest inside a big narrative. In return, fellows are asked to share their story with the extended web3 community, or with the world-at-large.
              </Text>
              <ButtonLink href="/about">About the program</ButtonLink>
            </Box>
          </ImageSplitContent>
          <ImageSplitContent
            image={"/images/homepage/devcon_home.jpg"}
            imageBorder="left"
            imageSide="left"
          >
            <Box gap={8}>
              <H2>Devcon SEA Scholars</H2>
              <Text fontSize={18} mb={16}>
              Devcon is a conference for developers, researchers, thinkers, and makers. 
              It's the largest single gathering of Ethereum's global community, 
              and it always happens in a new city. 
              The scholars program aims to break down at least some barriers-to-entry for people taking their first steps into the infinite garden. 

              </Text>
              <ButtonLink href="/scholars">Learn more</ButtonLink>
            </Box>
          </ImageSplitContent>
        </ContentContainer>
      </Box>
      <WhoAreNextBillion />
      <Box bg="linear-gradient(180deg, #022B35 0%, #006EA3 50%, #056589 100%)">
        <ContentContainer mb={8}>
          <Box px={{ base: 8, md: 16 }} gap={8}>
            <H2 variant="action" pt={16}>
              Our blog updates
            </H2>
            <BlogFeed blogs={blogs} />
            <Flex justify="center" my="64px">
              <ButtonLink href="https://blog.ethereum.org/">
                See all posts
              </ButtonLink>
            </Flex>
          </Box>
        </ContentContainer>
      </Box>
    </>
  )
}

export default HomePage
