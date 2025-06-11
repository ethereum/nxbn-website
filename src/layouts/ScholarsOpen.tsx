import { Box, Center, Image, Text } from "@chakra-ui/react"

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
    question: "Who can apply for the Devconnect ARG Scholars Program?",
    answer: [
      "To be eligible, applicants must have never attended Devcon before, have never attended Devconnect before, and be able and willing to dedicate approximately three hours per week over the course of three months to attend online sessions, complete assignments, and actively engage in learning, collaboration, and shared creation.",
      "We're selecting 100 Scholars across five categories: (1) Ethereum Community Organizers, (2) Legal & Public Sector Professionals, (3) Journalists, (4) Artists, and (5) Developers & Other Builders of any kind.",
    ],
  },
  {
    question: "What support is provided to Scholars?",
    answer: [
      "Financial support: Based on individual needs, Scholars are provided financial support for accommodation, flight, visa application, per diem, and/or ticket to Devconnect. The level of financial needs will not influence the selection process.",
      "Pre-Devconnect community & programming: Online sessions where Scholars meet each other, learn together, co-create, and prepare for their experience at Devconnect.",
      "Devconnect week: Spending an amazing Devconnect week in Buenos Aires, Argentina.",
      "Post-Devconnect: Each Scholar will create a Learning Artifact - a free-format creation that expresses their learning and experience in the medium of their choice.",
    ],
  },
]

const ScholarOpen = () => {
  return (
    <>
      <Box
        position="relative"
        height={{ base: "100vh", md: "100vh" }}
        minHeight="600px"
        backgroundImage={`url(${HeroImage.src})`}
        backgroundSize="cover"
        backgroundPosition="center bottom"
        mt={-16}
      >
        <Box 
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(180deg, rgba(22, 57, 61, 0.7) 0%, rgba(22, 57, 61, 0.5) 40%, rgba(22, 57, 61, 0.8) 85%, #16393D 100%)"
        >
          <Center
            height="100%"
            gap={6}
            flexDir="column"
            px={{ base: 8, md: 16 }}
            textAlign="center"
            justifyContent="center"
          >
            <Center
              flexDir="column"
            >
              <Image
                src={"/images/devconnect-arg-logo.png"}
                alt="Devconnect ARG"
                w={{ base: "150px", md: "200px" }}
              />
              <Box 
                bg="rgba(0, 0, 0, 0.3)" 
                px={6} 
                py={4} 
                borderRadius="12px"
                backdropFilter="blur(10px)"
                maxW="650px"
              >
                <H2 textAlign="center" fontSize={{ base: 44, md: 56 }} m={0}>
                  Devconnect ARG Scholars
                </H2>
                <Text fontSize={{ base: 18, md: 24 }} mt={4}>
                  Welcoming leaders expanding Ethereum's reach by connecting it to new communities, industries, and ideas.
                  November 17-22 2025 in Buenos Aires, Argentina.
                </Text>
              </Box>
            </Center>
            <Box>
              <ButtonLink href="https://devconnectargscholars.paperform.co/" fontSize={24} variant="primary">
                Apply Now - Deadline June 30th
              </ButtonLink>
            </Box>
            <Box>
              <Text fontSize={16} mb={2} mt={8}>
                Learn more about Devconnect
              </Text>
              <ButtonLink
                fontSize={14}
                href="https://devconnect.org/"
                variant="secondary"
              >
                Devconnect website
              </ButtonLink>
            </Box>
          </Center>
        </Box>
      </Box>

      <Box
        bg="#16393D"
        pt={{ base: 16, md: 20 }}
        pb={{ base: 16, md: 20 }}
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
              After Devconnect, each Scholar will create a Learning Artifact - a free-format creation that expresses their learning and experience in the medium of their choice. Artifacts are usually created with words, images, and code in some combination. It could be a lesson learned, a new project, or just reflections -- the value of the artifact is in the act of creating it and sharing with others.
            </Text>
            <ButtonLink href="https://www.notion.so/efdn/Devcon-SEA-Scholars-Program-Learning-Artifact-Database-18fd989555418092b50af037356c6181/" variant="enabled">
              Previous Scholars Artifacts
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
