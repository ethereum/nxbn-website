import { Box, Text } from "@chakra-ui/react"

import ImageHero from "@/components/Heroes/ImageHero"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import ImageSplitContent from "@/components/ImageSplitContent"

import HeroImage from '@/public/images/about/about-hero.jpg'

const AboutPage = () => {
  return (
    <>
      <ImageHero heroImage={HeroImage}>
        <Box
          w="100%"
          bg="linear-gradient(180deg, #101214 50%, #101214 100%)"
          pt="10px"
        >
          <ContentContainer>
            <Box px={{ base: 8, md: 16 }}>
              <H1 variant="action" mt="-100px">
                Time for coordination
              </H1>
              <Box maxW="815px" pb={20}>
                <Text fontSize={18}>
                  Ethereum’s next billion users are part of a generation of
                  humans that, for better or worse, will inherit the earth over
                  the next 100 years.
                </Text>
                <Text fontSize={18}>
                  Through initiatives that take a long-term and holistic
                  approach to human development and coordination, our mission is
                  to lay groundwork for the next billion problem solvers.
                </Text>
                <Text fontSize={18}>There will be</Text>
              </Box>
            </Box>
          </ContentContainer>
        </Box>
      </ImageHero>

      <Box w="100%" bg="linear-gradient(180deg, #101214 0%, #10121400 50%)">
        <ContentContainer position="relative">
          <ImageSplitContent
            image={"/images/about/stories.jpg"}
            imageBorder="round"
            imageSide="right"
          >
            <Box gap={8}>
              <H2>Stories over narrative</H2>
              <Text fontSize={18}>
                Protocols like Ethereum are often explained in the context of
                Big Narratives about human ingenuity, collaboration, and
                society. But it’s hard to imagine a future in those heroic
                terms.
              </Text>
              <Text fontSize={18}>
                It’s the small stories that provide perspective into the soul of
                that protocol, and allow us to see what human coordination might
                look like someday.
              </Text>
            </Box>
          </ImageSplitContent>
          <ImageSplitContent
            image={"/images/about/exploration.jpg"}
            imageBorder="round"
            imageSide="left"
          >
            <Box>
              <H2>Earnest Exploration</H2>
              <Text fontSize={18}>
                Much good can come from the meeting of worlds. Different
                perspectives provide new insights; new contexts create different
                designs.
              </Text>
              <Text fontSize={18}>
                Small World(s) initiatives reflect Ethereum’s culture of mutual
                discovery, exchange, learning, and teaching.
              </Text>
            </Box>
          </ImageSplitContent>
          <ImageSplitContent
            image={"/images/about/representation.jpg"}
            imageBorder="round"
            imageSide="right"
          >
            <Box>
              <H2>Representation</H2>
              <Text fontSize={18}>
                Resilience is built from diversity. From core protocol to end
                user, Ethereum’s community should grow and evolve to better
                reflect the diversity of the world-at-large. Mechanisms that
                help achieve this outcome are paramount to human flourishing.
              </Text>
            </Box>
          </ImageSplitContent>
        </ContentContainer>
      </Box>
    </>
  )
}

export default AboutPage
