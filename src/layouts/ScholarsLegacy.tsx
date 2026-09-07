import { Box, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import PreviousEditions from "@/components/PreviousEditions"
import ImageHero from "@/components/Heroes/ImageHero"

import HeroImage from "@/public/images/devconnect-arg-hero.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What was the Devcon(nect) Scholars Program?",
    answer: [
      "The Devcon(nect) Scholars Program broke down barriers to entry for people taking their first steps into the Ethereum ecosystem. By providing support for travel, accommodations, and conference access, the program enabled participants from around the world to attend Ethereum's flagship events and become part of the global community.",
      "Physical events like Devcon and Devconnect act as centers of gravity in the Ethereum ecosystem. They create space and time for community—places and moments to share, learn, discuss, meet, explore, and live in. The Scholars program made those opportunities reachable for a broader range of participants.",
    ],
  },
  {
    question: "Who could apply for a scholarship?",
    answer: [
      "Anyone could apply for a partial or full scholarship to a Devcon or Devconnect event. Scholarships were awarded on a variety of considerations, especially credible and earnest need. People who were going to attend with or without a scholarship were asked not to apply.",
    ],
  },
  {
    question: "What kinds of scholarships were offered?",
    answer: [
      "There were three main types of support: Access, Transport, and Room/board",
      "Access scholarships provided a full ticket to the main event and participating side-events",
      "Transport scholarships covered round-trip air travel to the event location",
      "Room/board scholarships covered accommodation, meals, and (limited) expenses during the days of the main event",
    ],
  },
  {
    question: "What was Destino Devconnect?",
    answer: [
      "Destino Devconnect was a local grant round supporting Argentinian builders in bringing their country onchain ahead of Devconnect 2025 in Buenos Aires.",
      "Separate from the Scholars program, it provided up to $1,000 in sponsorship for local events and initiatives, connections to speakers, visibility on the Devconnect calendar, and direct support from the Devconnect team.",
    ],
  },
]

const ScholarsLegacy = () => {
  return (
    <>
      <ImageHero heroImage={HeroImage}>
        <Box
          w="100%"
          bg="linear-gradient(180deg, #001121 0%, #056589 100%)"
          pt="-200px"
          mt="-10%"
          zIndex={1}
        >
          <Box px={{ base: 8, md: 16 }}>
            <H1 variant="action" maxW="650px">
              Devcon(nect) Scholars Program
            </H1>
            <Text maxW="500px" fontSize={18} mb={16}>
              From Devcon Bogotá in 2022 through Devconnect Buenos Aires in
              2025, the Scholars program brought hundreds of first-time
              participants to Ethereum&apos;s flagship events. This page records
              how it worked and what the scholars made.
            </Text>
          </Box>
        </Box>
      </ImageHero>
      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} py={16}>
          <H2 mb={8}>About the Program</H2>
          <Text fontSize={18} mb={8}>
            Devcon and Devconnect are events that act as centers of gravity in
            the Ethereum ecosystem. They are global gatherings that create space
            and time for community—places and moments to share, learn, discuss,
            meet, explore, and live in.
          </Text>
          <Text fontSize={18} mb={16}>
            Physical events are always somewhere in a new city, country, or
            region. That means no matter where they are held, it will always be
            difficult for folks living elsewhere. The Scholars program supported
            travel, room &amp; board, a ticket to the event, and special
            programming for participants from around the world.
          </Text>
        </Box>

        <ImageSplitContent
          image="/images/scholars/artifact.jpg"
          imageBorder="round"
          imageSide="right"
        >
          <Box gap={8}>
            <H2>Learning Artifacts</H2>
            <Text fontSize={18} mb={4}>
              Every scholar was responsible for creating a learning artifact: a
              little something that captured the impact attending the event had.
              Artifacts were usually made with words, images, and code in some
              combination. A lesson learned, a new project, or just
              reflections—the value of the artifact was in the act of creating
              it and sharing it with others.
            </Text>
            <Text fontSize={18} mb={4}>
              These artifacts remain a record of what the scholars took away,
              and they extend the impact of the program well beyond the events
              themselves.
            </Text>
            <ButtonLink href="https://www.notion.so/efdn/Devcon-SEA-Scholars-Program-Learning-Artifact-Database-18fd989555418092b50af037356c6181/">
              Browse Scholar Artifacts
            </ButtonLink>
          </Box>
        </ImageSplitContent>

        <ImageSplitContent
          image="/images/scholars/scholars-hero-closed.jpg"
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>The Final Edition: Devconnect Buenos Aires</H2>
            <Text fontSize={18} mb={4}>
              The last cohort of scholars attended Devconnect in Buenos Aires,
              Argentina, from November 17th to the 22nd, 2025. That edition
              featured:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>
                The Ethereum World&apos;s Fair – a showcase of Ethereum apps and
                innovations
              </Box>
              <Box as="li" mb={2}>
                Decentralized events hosted by the broader ecosystem
              </Box>
              <Box as="li" mb={2}>
                A week-long coworking space with Community Hubs
              </Box>
              <Box as="li">An ecosystem-wide push to bring Argentina onchain</Box>
            </Box>
            <ButtonLink href="https://devconnect.org" mt={8}>
              Devconnect
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

export default ScholarsLegacy
