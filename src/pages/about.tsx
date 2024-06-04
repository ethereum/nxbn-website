import { Box, Text } from "@chakra-ui/react"

import ImageHero from "@/components/Heroes/ImageHero"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import ImageSplitContent from "@/components/ImageSplitContent"

import HeroImage from "@/public/images/about/about-hero.jpg"

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
                  In 100 years, there might be 10 billion human people living in
                  the world. On the scale of billions, what is the right frame
                  of time to live in?
                </Text>
                <Text fontSize={18}>
                  Should we orient our purpose to the here and now, to immediate
                  crises and the individual stories of elegant, pragmatic
                  solutions? Or maybe we ought to look long, toward the
                  narratives that change worlds, towards new mechanisms and ways
                  of encoding the trust structures that sustain communities,
                  societies, and civilizations.
                </Text>
                <Text fontSize={18}>
                  The Ethereum Foundation exists to nurture and support a
                  protocol designed to treat all humans equally; the{" "}
                  <b>next billion</b> initiative at the Foundation is a *frame
                  of reference* for long-term thinking about that protocol's
                  relationship to humans and, by extension, humanity.
                </Text>
                <Text fontSize={18}>
                  We think that operating at the scale of humans is the way to
                  engage with the challenges and opportunities existing at the
                  scale of humanity. Even a 10,000 year journey begins with a
                  few ordinary steps. Through fellowships, scholarships, events,
                  and other programs that create space for creative exchange and
                  the assembly of new memes, we support the protocol for human
                  coordination.
                </Text>
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
                big Narratives about human ingenuity, collaboration, and
                society. But it’s hard to imagine a future in those heroic
                terms.
              </Text>
              <Text fontSize={18}>
                It’s the small stories that provide perspective into the soul of
                that protocol, and allow us to see what human coordination might
                look like someday. Heroes don't need to move a mountain to share
                it; a stone is enough.
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
                Small, open-world, "finite game" initiatives reflect Ethereum’s
                culture of mutual discovery, exchange, learning, and teaching.
                We do our best to support the creation of space for
                collaboration, experimentation, and play.
              </Text>
            </Box>
          </ImageSplitContent>
          <ImageSplitContent
            image={"/images/about/representation.jpg"}
            imageBorder="round"
            imageSide="right"
          >
            <Box>
              <H2>Resilience through Diversity</H2>
              <Text fontSize={18}>
                From core protocol to end user, Ethereum’s community should grow
                and evolve to better reflect the world-at-large.
              </Text>
            </Box>
          </ImageSplitContent>
        </ContentContainer>
      </Box>
    </>
  )
}

export default AboutPage
