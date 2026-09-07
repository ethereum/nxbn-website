import { Box, Flex, Text } from "@chakra-ui/react"

import FAQ, { type Question } from "@/components/FAQ"
import ImageHero from "@/components/Heroes/ImageHero"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FellowList from "@/components/FellowList"
import FellowStories from "@/components/FellowStories"

import { getAllFellowsFrontmatter, getFellowsWithStories } from "@/utils/md"

import HeroImage from "@/public/images/fellowship/fellowship-hero.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What kinds of projects qualified?",
    answer: [
      "A Fellow needed a project that was mutually cooperative with the Ethereum ecosystem. It didn't have to directly integrate with Ethereum to qualify, but it needed to be on-balance 'good' for the ecosystem and the future Ethereum community.",
      "Proposals that had not yet begun were considered, but rarely selected. The fellowship was not meant to sit at the beginning or the end of a journey.",
      "Projects ranged from software to research to organizational programs and initiatives. Whatever the shape, the project had to enable the flourishing of regions, populations, or communities underrepresented in the Ethereum ecosystem.",
    ],
  },
  {
    question: "What support did the Next Billion Fellowship offer?",
    answer: [
      "In a word: Bespoke.",
      "Different people needed different things, and the Foundation was able to offer some things better than others. Fellows who needed technical or design support, for example, could ask for mentorship or guidance from a domain expert. Stipends helped fellows carve out time from a busy schedule, and in rare cases grants were considered. Business plans, pitch decks, and cap tables can tell a gripping story, but the fellowship was not an incubator or accelerator, and was never a means to secure investment.",
    ],
  },
  {
    question: "What was expected from a Next Billion Fellow?",
    answer: [
      "Fellows were independent, passionate, and deliberate. Six months was not enough time to accomplish anything huge, but it was enough time to figure out how to tell a good story.",
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
                  A Fellow was a leader committed to their own project that
                  helped Ethereum become a tool of and for the next billion
                  users. Their project might be a decentralized app, a piece of
                  research, an organizational initiative, or something else
                  entirely. There were no strict requirements for Next Billion
                  Fellowship projects, save one: earnesty.
                </Text>
                <Text fontSize={18}>
                  Whatever the project, whoever the Fellow, the program sought
                  to enable the flourishing of populations, communities, and
                  individuals under-represented in the Ethereum ecosystem. The
                  Fellowship was neither the beginning nor the end of a
                  Fellow&apos;s journey, but it provided the support needed to
                  encourage more ambitious, long-term goals and mindset.
                </Text>
                <Text fontSize={18}>
                  The program ran from 2021 to 2025 across five cohorts. The
                  fellows and their projects are collected below.
                </Text>
              </Box>
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
