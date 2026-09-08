import { Box, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import ImageHero from "@/components/Heroes/ImageHero"

import Seo from "@/components/Seo"

import { breadcrumbLd, collectionPageLd, faqLd } from "@/utils/structuredData"

import HeroImage from "@/public/images/fellowship/fellowship-hero.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What was the Ethereum Season of Internships?",
    answer: [
      "The Ethereum Season of Internships was a coordinated collection of paid, fully remote summer internships across the Ethereum ecosystem. It created pathways for a new generation of contributors to connect with Ethereum projects and put their skills to work in development, research, design, marketing, finance, legal, and more.",
      "The aim was to make Ethereum a more welcoming space for new talent, and to build a route that carried newcomers toward becoming long-term contributors.",
    ],
  },
  {
    question: "What kinds of positions were available?",
    answer: [
      "Internship positions spanned a range of disciplines and skill sets, including:",
      "- Software development (front-end, back-end, smart contracts)",
      "- Research (cryptography, mechanism design, zero-knowledge proofs)",
      "- Design (UX/UI, graphic design, product design)",
      "- Community (documentation, education, outreach)",
      "- Operations (project management, marketing, legal)",
      "The specific positions varied with the needs of the participating host organizations.",
    ],
  },
  {
    question: "How did host organizations take part?",
    answer: [
      "Hosts were teams already contributing to the Ethereum ecosystem who had the capacity to mentor. In practice that meant:",
      "- A team with room for mentorship (at least 5 full-time contributing members)",
      "- Open source projects with clearly defined tasks suitable for an intern",
      "- Defined learning outcomes for each position",
      "- Work aligned with Ethereum's core values: decentralization, censorship resistance, open-source innovation, privacy, and security",
    ],
  },
]

const INTERNSHIPS_DESCRIPTION =
  "The Ethereum Season of Internships placed paid, fully remote interns with teams across the Ethereum ecosystem " +
  "in 12-week summer placements spanning development, research, design, community and operations. " +
  "The program has concluded; this page records how it worked."

const InternshipsLegacy = () => {
  return (
    <>
      <Seo
        title="Ethereum Season of Internships — program archive"
        description={INTERNSHIPS_DESCRIPTION}
        path="/internships"
        structuredData={[
          collectionPageLd({
            name: "Ethereum Season of Internships",
            description: INTERNSHIPS_DESCRIPTION,
            path: "/internships",
          }),
          faqLd(FAQQuestions),
          breadcrumbLd([
            { name: "Next Billion", path: "/" },
            { name: "Internships", path: "/internships" },
          ]),
        ]}
      />
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
              The Ethereum Season of Internships placed paid, remote interns
              with teams across the ecosystem. The program has concluded; this
              page records how it worked.
            </Text>
          </Box>
        </Box>
      </ImageHero>
      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} py={16}>
          <H2 mb={8}>About the Program</H2>
          <Text fontSize={18} mb={8}>
            The Ethereum Season of Internships was a coordinated collection of
            paid, fully remote summer internships across the Ethereum ecosystem.
            It created pathways for a new generation of contributors to connect
            with Ethereum projects and put their skills to work in development,
            research, design, marketing, finance, legal, and more.
          </Text>
          <Text fontSize={18} mb={16}>
            Every year, the Ethereum ecosystem welcomes thousands of builders
            through community events, hackathons, courses, bootcamps, and campus
            clubs. The Season of Internships added a structured early-career
            step, so that arriving in the ecosystem could turn into staying in
            it.
          </Text>
        </Box>

        <ImageSplitContent
          image="/images/fellowship/fellowship-hero.jpg"
          imageBorder="round"
          imageSide="right"
        >
          <Box gap={8}>
            <H2>How It Worked</H2>
            <Text fontSize={18} mb={4}>
              Each season of the program featured:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>
                12-week paid remote internships (August–October)
              </Box>
              <Box as="li" mb={2}>
                Mentorship from experienced Ethereum contributors
              </Box>
              <Box as="li" mb={2}>
                Work on real projects with direct ecosystem impact
              </Box>
              <Box as="li" mb={2}>
                Opportunities across technical and non-technical disciplines
              </Box>
              <Box as="li">
                Connections with leading projects in the ecosystem
              </Box>
            </Box>
            <ButtonLink
              href="https://blog.ethereum.org/category/next-billion"
              mt={8}
            >
              Read Program Updates
            </ButtonLink>
          </Box>
        </ImageSplitContent>

        <ImageSplitContent
          image="/images/fellowship/fellowship-hero.jpg"
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Where to Go From Here</H2>
            <Text fontSize={18} mb={4}>
              The program has ended, but the ecosystem it pointed people toward
              is still very much open:
            </Text>
            <Box as="ul" pl={4}>
              <Box as="li" mb={2}>
                Find good first issues on GitHub repositories
              </Box>
              <Box as="li" mb={2}>
                Join community Discord servers and discussion forums
              </Box>
              <Box as="li" mb={2}>
                Attend local Ethereum meetups and events
              </Box>
              <Box as="li">Take online courses to build relevant skills</Box>
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

export default InternshipsLegacy
