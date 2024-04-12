import { Box, Text } from "@chakra-ui/react"
import Parser from "rss-parser"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import { Image } from "@/components/Image"
import ImageSplitContent from "@/components/ImageSplitContent"
import HomeHero from "@/components/Heroes/HomeHero"

import DevHome from "@/public/images/homepage/devcon_home.jpg"
import FellowHome from "@/public/images/homepage/fellow_home.jpg"
import { getAllFellowsFrontmatter } from "@/utils/md"
import BlogFeed from "@/components/BlogFeed"
import WhoAreNextBillion from "@/components/WhoAreNextBillion"

import StarsImage from "@/public/images/stars.jpg"

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
      blogs: feed.items,
    },
  }
}

const HomePage = ({ allFellowsFrontmatter, blogs }) => {
  return (
    <>
      <Box pos="absolute" zIndex={-1} top={-4} left={0} right={0}>
        <Image src={StarsImage} alt="Stars" w="100%" />
      </Box>
      <HomeHero allFellowsFrontmatter={allFellowsFrontmatter} />
      <ContentContainer mb={16}>
        <ImageSplitContent
          image={FellowHome}
          imageBorder="right"
          imageSide="right"
        >
          <Box gap={8} >
            <H2>The Next Billion Fellowship</H2>
            <Text fontSize={18}>
              The Next Billion Fellowship at the Ethereum Foundation is a search
              for stories. Stories that inspire us to focus on the important
              things, to find balance and fairness in the way we go about
              solving our problems, to push deeper into the mysteries of human
              cooperation.
            </Text>
            <Text fontSize={18} mb={16}>
              During the course of 6 months, Fellows receive support to drive
              their own projects, and tell their own stories of Ethereum-enabled
              public goods destined to help billions coordinate and thrive.
            </Text>
            <ButtonLink href="/about">About the program</ButtonLink>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={DevHome}
          imageBorder="left"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Devcon SEA Scholars</H2>
            <Text fontSize={18} mb={16}>
              Devcon is the Ethereum conference for developers, researchers,
              thinkers, and makers. Every year, the devcon scholars program
              provides dozens of full scholarships to connect, learn, and build
              together with the Ethereum community, wherever it is in the world.
            </Text>
            <ButtonLink href="/scholars">Learn more</ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>
      <WhoAreNextBillion />
      <ContentContainer mb={8}>
        <Box px={{ base: 8, md: 16 }} gap={8}>
          <H2 variant="action" pt={16}>Our blog updates</H2>
          <BlogFeed blogs={blogs} />
        </Box>
      </ContentContainer>
    </>
  )
}

export default HomePage
