import { Box, Center, Image, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import PreviousEditions from "@/components/PreviousEditions"
import ImageHero from "@/components/Heroes/ImageHero"

import HeroImage from "@/public/images/scholars/scholars-hero-open.jpg"

const FAQQuestions: Question[] = [
  {
    question: "Who can apply for a scholarship?",
    answer: [
      "Everyone may apply for a partial or full scholarship to Devcon (or Devconnect). While all applications are welcome, scholarships are awarded based on a variety of considerations, especially credible and earnest need; those planning to attend devcon(nect) with or without a scholarship need not apply",
    ],
  },
  {
    question: "What kinds of scholarships are offered?",
    answer: [
      "There are three main types of support: Access, Transport, and Room/board",
      "Access scholarships are a full ticket to the devcon main event, and participating side-events",
      "Transport scholarships are for round-trip air travel to Bangkok, Thailand",
      "Room/board scholarships cover accommodation, meals, and (limited) expenses during the days of the main devcon event.",
    ],
  },
]

const ScholarOpen = () => {
  return (
    <>
      <ImageHero heroImage={HeroImage}>
        <Box w="100%" bg="linear-gradient(180deg, #16393D 30%, #16393D 100%)">
          <Center
            gap={4}
            flexDir="column"
            px={{ base: 8, md: 16 }}
            textAlign="center"
          >
            <Center
              flexDir="column"
              mt={{ base: "-100px", md: "-200px", lg: "-300px" }}
            >
              <Image
                src={"/images/scholars/eth-glyph.png"}
                alt=""
                w={{ base: "100px", md: "150px" }}
              />
              <H2 textAlign="center" fontSize={{ base: 44, md: 56 }} m={0}>
                Devcon SEA Scholars
              </H2>
            </Center>
            <Box maxW="650px">
              <Text fontSize={{ base: 18, md: 24 }}>
                The Ethereum conference for developers, thinkers, and makers.
                November 9-17th in Bangkok, Thailand.
              </Text>
            </Box>
            <Box>
              <ButtonLink href="/" fontSize={24} variant="primary">
                Applications closed
              </ButtonLink>
            </Box>
            <Box>
              <Text fontSize={16} mb={2} mt={8}>
                Learn more about Devcon
              </Text>
              <ButtonLink
                fontSize={14}
                href="https://devcon.org/en/"
                variant="secondary"
              >
                Devcon website
              </ButtonLink>
            </Box>
          </Center>
        </Box>
      </ImageHero>

      <Box
        bg="linear-gradient(180deg, #16393D 30%, #16393D00 100%)"
        pt={{ base: "100px", md: "250px" }}
      >
        <ContentContainer>
          <Box px={{ base: 8, md: 16 }} gap={8}>
            <H1 variant="action">Devcon(nect) Scholars Program</H1>
            <Box
              gap={16}
              flexDir={{ base: "column", md: "row" }}
              display="flex"
            >
              <Box>
                <Text fontSize={18}>
                  Devcon and Devconnect are events that act as centers of
                  gravity in the Ethereum ecosystem. They are global gatherings
                  that create space and time for community. Places and moments
                  to share, learn, discuss, meet, explore, and live in.
                </Text>
                <Text fontSize={18}>
                  Physical events are always somewhere in a new city, country,
                  or region. That means no matter where a Devcon(nect) is held
                  it will always be difficult for folks living elsewhere.
                </Text>
              </Box>
              <Text fontSize={18}>
                Sometimes human flourishing happens just by showing up. As
                organizers of Devcon and Devconnect, we can at least create that
                opportunity for a small group each year. The devcon(nect)
                scholars program supports travel, room & board, a ticket to
                devcon, and special programming.
              </Text>
            </Box>
          </Box>
        </ContentContainer>
      </Box>

      <ContentContainer py={24}>
        <ImageSplitContent
          image={"/images/scholars/artifact.jpg"}
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>For Artificers</H2>
            <Text fontSize={18}>
              All scholars are responsible for creating a learning artifact: a
              little something that captures the impact attending Devcon or
              Devconnect had. Artifacts are usually created with words, images,
              and code in some combination. It could be a lesson learned, a new
              project, or just reflections -- the value of the artifact is in
              the act of creating it and sharing with others.
            </Text>
            <ButtonLink href="https://www.notion.so/efdn/Devcon-SEA-Scholars-Program-Learning-Artifact-Database-18fd989555418092b50af037356c6181/" variant="enabled">
              DevconSEA Artifacts Archive
            </ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>

      <Box py={16} bg="backgroundHighlight">
        <ContentContainer>
          <PreviousEditions />
        </ContentContainer>
      </Box>
      <ContentContainer>
        <FAQ questions={FAQQuestions} />
      </ContentContainer>
    </>
  )
}

export default ScholarOpen
