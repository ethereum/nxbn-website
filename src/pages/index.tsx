import { Box, Center, Flex, Image, Text } from "@chakra-ui/react"
import Parser from "rss-parser"
import { Item } from "rss-parser"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import ImageSplitContent from "@/components/ImageSplitContent"
import HomeHero from "@/components/Heroes/HomeHero"

import { getAllFellowsFrontmatter, getFellowsWithStories } from "@/utils/md"
import BlogFeed from "@/components/BlogFeed"
import WhoAreNextBillion from "@/components/WhoAreNextBillion"
import Seo from "@/components/Seo"

import { PROGRAM_YEARS, PROGRAM_YEARS_PROSE } from "@/utils/seo"
import {
  collectionPageLd,
  organizationLd,
  webSiteLd,
} from "@/utils/structuredData"

export const getStaticProps = async () => {
  const parser = new Parser({
    customFields: {
      item: ["description"],
    },
  })

  let blogs: (Item & { description?: string })[] = [];
  try {
    const feed = await parser.parseURL(
      "https://blog.ethereum.org/en/next-billion/feed.xml"
    )
    blogs = feed.items.slice(0, 4);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    // Provide fallback blog data
    blogs = [
      {
        title: "Blog post placeholder",
        link: "#",
        pubDate: new Date().toISOString(),
        content: "",
        contentSnippet: "",
        guid: "",
        isoDate: new Date().toISOString(),
        description: "Unable to fetch blog posts at this time."
      }
    ];
  }
  
  const allFellowsFrontmatter = getAllFellowsFrontmatter()
  
  // Calculate initial fellow index for homepage hero
  let initialFellowIndex = 0
  try {
    const fellowsWithStories = getFellowsWithStories()
    if (fellowsWithStories.length > 0) {
      // Pick a random fellow with a story
      const randomStoryFellow = fellowsWithStories[Math.floor(Math.random() * fellowsWithStories.length)]
      // Find this fellow's index in the full allFellowsFrontmatter array
      const fellowIndex = allFellowsFrontmatter.findIndex(fellow => fellow.slug === randomStoryFellow.slug)
      if (fellowIndex >= 0) {
        initialFellowIndex = fellowIndex
      }
    }
  } catch (error) {
    console.error("Error calculating initial fellow index:", error)
    // Fall back to index 0
  }

  return {
    props: {
      allFellowsFrontmatter,
      blogs,
      initialFellowIndex,
    },
  }
}

const HOME_DESCRIPTION =
  `From ${PROGRAM_YEARS_PROSE} the Next Billion initiative at the Ethereum Foundation backed 25 fellows across five cohorts, ` +
  "brought first-time attendees to Devcon and Devconnect as Scholars, and placed paid interns across the ecosystem. " +
  "The programs have concluded; their work is collected here."

const HomePage = ({ allFellowsFrontmatter, blogs, initialFellowIndex }) => {
  return (
    <>
      <Seo
        title={`Next Billion — Ethereum Foundation programs, ${PROGRAM_YEARS}`}
        description={HOME_DESCRIPTION}
        path="/"
        structuredData={[
          organizationLd(),
          webSiteLd(),
          collectionPageLd({
            name: `Next Billion — programs archive, ${PROGRAM_YEARS}`,
            description: HOME_DESCRIPTION,
            path: "/",
          }),
        ]}
      />
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
        <HomeHero allFellowsFrontmatter={allFellowsFrontmatter} initialFellowIndex={initialFellowIndex} />
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
                A search for stories. Stories that inspired us to focus on the
                important things, that compelled us to find balance and fairness
                in the way we go about solving our problems, and that encouraged
                us to push deeper into the mysteries of human cooperation.
              </Text>
              <Text fontSize={18} mb={16}>
                Across five cohorts, fellows received support from the
                Foundation to complete a small quest inside a big narrative. In
                return, they shared their story with the extended web3
                community, and with the world-at-large.
              </Text>
              <ButtonLink href="/fellowship">
                Meet the fellows
              </ButtonLink>
            </Box>
          </ImageSplitContent>
          <ImageSplitContent
            image={"/images/homepage/devcon_home.jpg"}
            imageBorder="left"
            imageSide="left"
          >
            <Box gap={8}>
              <H2>Devcon(nect) Scholars</H2>
              <Text fontSize={18} mb={16}>
                Devcon is a conference for developers, researchers, thinkers,
                and makers. It's the largest single gathering of Ethereum's
                global community, and it always happens in a new city. From
                Devcon Bogotá through Devconnect Buenos Aires, the scholars
                program broke down at least some barriers-to-entry for people
                taking their first steps into the infinite garden.
              </Text>
              <ButtonLink href="/scholars">
                About the program
              </ButtonLink>
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
              <ButtonLink href="https://blog.ethereum.org/category/next-billion">
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
