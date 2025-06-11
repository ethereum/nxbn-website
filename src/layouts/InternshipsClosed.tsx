import { Box, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import ImageHero from "@/components/Heroes/ImageHero"

// TODO: Replace with actual internships closed hero image
import HeroImage from "@/public/images/fellowship/fellowship-hero.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What is the Ethereum Season of Internships?",
    answer: [
      "The Ethereum Season of Internships offers a coordinated collection of paid, fully remote summer internships across the Ethereum ecosystem. This initiative creates pathways for the next generation of contributors to connect with Ethereum projects and apply their diverse skills in development, research, design, marketing, finance, legal, and more.",
      "Our long-term vision is to make Ethereum an increasingly welcoming space for new talent, building a sustainable pipeline that transforms newcomers into committed long-term contributors.",
    ],
  },
  {
    question: "When will applications open again?",
    answer: [
      "The Ethereum Season of Internships typically runs during the summer months (August-October), with applications opening in late spring. Subscribe to the Ethereum Foundation blog or follow @ethereum on Twitter for announcements about the next application period.",
    ],
  },
  {
    question: "What kind of positions are typically available?",
    answer: [
      "Internship positions span various disciplines and skill sets, including:",
      "- Software development (front-end, back-end, smart contracts)",
      "- Research (cryptography, mechanism design, zero-knowledge proofs)",
      "- Design (UX/UI, graphic design, product design)",
      "- Community (documentation, education, outreach)",
      "- Operations (project management, marketing, legal)",
      "The specific positions vary based on the needs of participating host organizations.",
    ],
  },
  {
    question: "How can organizations prepare to host interns in the future?",
    answer: [
      "If you're interested in hosting interns in the future, you can:",
      "- Ensure your team has the capacity for mentorship (at least 5 full-time contributing members)",
      "- Prepare open source projects with clearly defined tasks suitable for interns",
      "- Develop learning outcomes for potential internship positions",
      "- Align your work with Ethereum's core values: decentralization, censorship resistance, open-source innovation, privacy, and security",
      "- Follow @ethereum on Twitter or subscribe to the Ethereum Foundation blog for announcements about the next host application period",
    ],
  },
]

const InternshipsClosed = () => {
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
              Season of Internships
            </H1>
            <Text maxW="500px" fontSize={18} mb={16}>
              Applications for the current season are now closed. Check back in Spring 2026 for the next round of opportunities!
            </Text>
          </Box>
        </Box>
      </ImageHero>
      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} py={16}>
          <H2 mb={8}>About the Program</H2>
          <Text fontSize={18} mb={8}>
            The Ethereum Season of Internships offers a coordinated collection of paid, fully remote summer internships across the Ethereum ecosystem. This initiative creates pathways for the next generation of contributors to connect with Ethereum projects and apply their diverse skills in development, research, design, marketing, finance, legal, and more.
          </Text>
          <Text fontSize={18} mb={16}>
            Every year, the Ethereum ecosystem welcomes thousands of builders through community events, hackathons, courses, bootcamps, and campus clubs. The Ethereum Season of Internships creates structured early-career opportunities to transform newcomers into committed long-term contributors.
          </Text>
        </Box>
        
        <ImageSplitContent
          image="/images/fellowship/fellowship-hero.jpg"
          imageBorder="round"
          imageSide="right"
        >
          <Box gap={8}>
            <H2>Program Highlights</H2>
            <Text fontSize={18} mb={4}>
              The Season of Internships program features:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>12-week paid remote internships (August-October)</Box>
              <Box as="li" mb={2}>Mentorship from experienced Ethereum contributors</Box>
              <Box as="li" mb={2}>Work on real projects with direct ecosystem impact</Box>
              <Box as="li" mb={2}>Opportunities across technical and non-technical disciplines</Box>
              <Box as="li">Connections with leading projects in the ecosystem</Box>
            </Box>
            <ButtonLink href="https://blog.ethereum.org/category/next-billion" mt={8}>
              Read Past Program Updates
            </ButtonLink>
          </Box>
        </ImageSplitContent>

        <ImageSplitContent
          image="/images/fellowship/fellowship-hero.jpg"
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Stay Connected</H2>
            <Text fontSize={18} mb={4}>
              While applications are currently closed, there are still many ways to get involved with Ethereum:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>Find good first issues on GitHub repositories</Box>
              <Box as="li" mb={2}>Join community Discord servers and discussion forums</Box>
              <Box as="li" mb={2}>Attend local Ethereum meetups and events</Box>
              <Box as="li" mb={2}>Take online courses to build relevant skills</Box>
              <Box as="li">Follow @ethereum on Twitter for program announcements</Box>
            </Box>
            <ButtonLink href="https://ethereum.org/en/community/" mt={8}>
              Join the Ethereum Community
            </ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>

      <ContentContainer mb={8}>
        <FAQ questions={FAQQuestions} />
      </ContentContainer>
    </>
  )
}

export default InternshipsClosed
