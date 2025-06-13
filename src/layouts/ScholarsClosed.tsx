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
    question: "What is the Devcon(nect) Scholars Program?",
    answer: [
      "The Devcon(nect) Scholars Program aims to break down barriers to entry for people taking their first steps into the Ethereum ecosystem. By providing support for travel, accommodations, and conference access, the program enables diverse participants from around the world to attend Ethereum's flagship events and become part of the global community.",
      "Physical events like Devcon and Devconnect act as centers of gravity in the Ethereum ecosystem. They create space and time for community—places and moments to share, learn, discuss, meet, explore, and live in. The Scholars program ensures these opportunities are accessible to a broader range of participants.",
    ],
  },
  {
    question: "Who can apply for a scholarship?",
    answer: [
      "Everyone may apply for a partial or full scholarship to Devcon or Devconnect events. While all applications are welcome, scholarships are awarded based on a variety of considerations, especially credible and earnest need. Those planning to attend these events with or without a scholarship need not apply.",
    ],
  },
  {
    question: "What kinds of scholarships are offered?",
    answer: [
      "There are three main types of support: Access, Transport, and Room/board",
      "Access scholarships provide a full ticket to the main event and participating side-events",
      "Transport scholarships cover round-trip air travel to the event location",
      "Room/board scholarships cover accommodation, meals, and (limited) expenses during the days of the main event",
    ],
  },
  {
    question: "When will applications open again?",
    answer: [
      "The next Devconnect will be held in Buenos Aires, Argentina, from November 17th to the 22nd, 2025. Scholars applications typically open several months before the event.",
      "Follow @ethereum on Twitter, subscribe to the Ethereum Foundation blog, or check the official Devconnect website at https://devconnect.org/ for announcements about the next application period.",
    ],
  },
  {
    question: "What is Destino Devconnect?",
    answer: [
      "Destino Devconnect is a local grant round to support Argentinian builders in bringing their country onchain ahead of Devconnect 2025 in Buenos Aires.",
      "While separate from the Scholars program, it's another initiative to foster community engagement and Ethereum adoption globally. It provides up to $1,000 in sponsorship for local events and initiatives, connections to speakers, visibility on the Devconnect calendar, and direct support from the Devconnect team.",
    ],
  },
]

const ScholarClosed = () => {
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
              Applications for the current Scholars program are now closed. Check back for announcements about the next Devconnect, happening November 17-22, 2025 in Buenos Aires!
            </Text>
          </Box>
        </Box>
      </ImageHero>
      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} py={16}>
          <H2 mb={8}>About the Program</H2>
          <Text fontSize={18} mb={8}>
            Devcon and Devconnect are events that act as centers of gravity in the Ethereum ecosystem. They are global gatherings that create space and time for community—places and moments to share, learn, discuss, meet, explore, and live in. 
          </Text>
          <Text fontSize={18} mb={16}>
            Physical events are always somewhere in a new city, country, or region. That means no matter where they are held, it will always be difficult for folks living elsewhere. The Scholars program supports travel, room & board, a ticket to the event, and special programming for participants from around the world.
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
              All scholars are responsible for creating a learning artifact: a little something that captures the impact attending the event had. Artifacts are usually created with words, images, and code in some combination. It could be a lesson learned, a new project, or just reflections—the value of the artifact is in the act of creating it and sharing with others.
            </Text>
            <Text fontSize={18} mb={4}>
              These artifacts serve as valuable resources for the community and help extend the impact of the Scholars program beyond the event itself.
            </Text>
            <ButtonLink href="https://www.notion.so/efdn/Devcon-SEA-Scholars-Program-Learning-Artifact-Database-18fd989555418092b50af037356c6181/">
              Browse Past Scholar Artifacts
            </ButtonLink>
          </Box>
        </ImageSplitContent>
        
        <ImageSplitContent
          image="/images/scholars/scholars-hero-closed.jpg"
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Coming Next: Devconnect Argentina</H2>
            <Text fontSize={18} mb={4}>
              The next Devconnect will be held in Buenos Aires, Argentina, from November 17th to the 22nd, 2025. It will feature:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>The Ethereum World's Fair – a showcase of Ethereum apps and innovations</Box>
              <Box as="li" mb={2}>Decentralized events hosted by the broader ecosystem</Box>
              <Box as="li" mb={2}>A week-long coworking space with Community Hubs</Box>
              <Box as="li">An ecosystem-wide push to bring Argentina onchain</Box>
            </Box>
            <ButtonLink href="https://devconnect.org" mt={8}>
              Learn About Devconnect 2025
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

export default ScholarClosed
