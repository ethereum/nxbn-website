import { Box, Flex, Text } from "@chakra-ui/react"

import FAQ, { type Question } from "@/components/FAQ"
import ImageHero from "@/components/Heroes/ImageHero"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FellowList from "@/components/FellowList"
import FellowStories from "@/components/FellowStories"

import { getAllFellowsFrontmatter, getFellowsWithStories } from "@/utils/md"

import HeroImage from "@/public/images/fellowship/fellowship-hero.jpg"
import ButtonLink from "@/components/Buttons/ButtonLink"

const FAQQuestions: Question[] = [
  {
    question: "What kinds of projects qualify?",
    answer: [
      "A Fellow candidate must have a project that is mutually cooperative with the Ethereum ecosystem. It doesn't have to directly integrate with Ethereum to qualify, but needs to be on-balance 'good' for the ecosystem and future Ethereum community.",
      "Proposals that have not yet begun will be considered, but not likely selected. This fellowship is not meant to be at the beginning or end of a journey.",
      "Projects can be building an application, research, or an organizational program/initiative. Whatever it is, the project must enable the flourishing of regions, populations, or communities that are underrepresented in the existing Ethereum ecosystem today.",
    ],
  },
  {
    question: "What support does the Next Billion Fellowship offer?",
    answer: [
      "In a word: Bespoke.",
      "Different people need different things, and the Foundation is able to offer some things better than others. Fellows that need technical or design support, for example, might ask for mentorship or guidance from a domain expert. Stipends are available to help fellows carve out time from a busy schedule, and in rare cases grants will be considered. Business plans, pitch decks, and cap tables can tell a gripping story, but this fellowship is not an incubator or accellerator, and should not be treated as a means to secure investment.",
    ],
  },
  {
    question: "What is expected from a Next Billion Fellow?",
    answer: [
      "Fellows must be independent, passionate, and deliberate. Six months is not enought time to accomplish anything huge, but it should be enough time to figure out how to tell a good story.",
    ],
  },
]

export const getStaticProps = async (context) => {
  const allFellowsFrontmatter = getAllFellowsFrontmatter()
  const fellowsWithStories = getFellowsWithStories()

  return {
    props: {
      allFellowsFrontmatter,
      fellowStories: fellowsWithStories,
    },
  }
}

const FellowshipPage = ({ allFellowsFrontmatter, fellowStories }) => {
  return (
    <>
      <Box bg="linear-gradient(180deg, #011E3B 30%, #011E3B00 100%)">
        <ImageHero heroImage={HeroImage}>
          <ContentContainer>
            <Box px={{ base: 8, md: 16 }} pb={16} mt={-40}>
              <H1 variant="action">
                The Next Billion <br></br>Fellowship
              </H1>
              <Box maxW={800}>
                <Text mb={16} fontSize={18}>
                  A Fellow is a leader committed to their own project that helps
                  Ethereum become a tool of and for the next billion users. Their
                  project could be a decentralized app, a piece of research, an
                  organizational initiative, or something else entirely. There
                  are no strict requirements for Next Billion Fellowship
                  projects, save one: earnesty.
                </Text>
                <Text fontSize={18}>
                  Whatever the project, whomever the Fellow, the program seeks
                  to enable the flourishing of populations, communities, or
                  individuals under-represented in the Ethereum ecosystem today.
                  The Fellowship is neither the beginning nor the end of a
                  Fellow&apos;s journey, but it may provide the support needed
                  to encourage more ambitious, long-term goals and mindset.
                </Text>
              </Box>
              <ButtonLink href="#" variant="disabled">Applications are closed</ButtonLink>
            </Box>
          </ContentContainer>
        </ImageHero>

        {/* Fellow Stories Section */}
        {fellowStories && fellowStories.length > 0 && (
          <ContentContainer id="fellow-stories" mb={16}>
            <Box px={{ base: 8, md: 16 }}>
              <H2 variant="action" mb={12}>
                Fellow Stories
              </H2>
              <FellowStories fellows={fellowStories} />
            </Box>
          </ContentContainer>
        )}

        <FellowList fellowsData={allFellowsFrontmatter} />
        <ContentContainer mb={8}>
          <FAQ questions={FAQQuestions} />
        </ContentContainer>
      </Box>
    </>
  )
}

export default FellowshipPage
