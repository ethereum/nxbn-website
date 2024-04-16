import { Box, Flex, Text } from "@chakra-ui/react"

import FAQ, { type Question } from "@/components/FAQ"
import ImageHero from "@/components/Heroes/ImageHero"
import { H1 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FellowList from "@/components/FellowList"

import { getAllFellowsFrontmatter } from "@/utils/md"

const FAQQuestions: Question[] = [
  {
    question: "What is the Next Billion Fellowship?",
    answer: [
      "The Ethereum Next Billion Fellowship Program is focused on identifying and supporting unique and talented individuals helping to demystify Ethereum's relevance and break down barriers to entry for people and communities not currently part of the Ethereum ecosystem.",
      "Fellows will be part of a small forum for leaders who, during the course of six months, drive their own projects that address a particular enabler or blocker for Ethereum becoming a public good that acts as a foundational layer for other public goods.",
      "While there are some cohort-wide activities, it is a self-directed, self-driven program. Depending on the needs of each Fellow and their project, different support is provided, including financial support, PR opportunities, mentorship, technical advice, and access to the Ethereum Foundation network. Fellows’ work will be highlighted to showcase the impact and value of Ethereum and its community.",
    ],
  },
  {
    question: "What kinds of projects qualify?",
    answer: [
      "A Fellow candidate must have a project that is mutually cooperative with the Ethereum ecosystem. It doesn't have to directly integrate with Ethereum to qualify, but needs to be on-balance 'good' for the ecosystem and future Ethereum community.",
      "The project can be just an idea, in early stages, or already ongoing. It can be building an application, research, or an organizational program/initiative. Whatever it is, the project must enable the flourishing of regions, populations, or communities that are underrepresented in the existing Ethereum ecosystem today.",
    ],
  },
  {
    question: "I am building on an L2. Should I apply?",
    answer: [
      "Program Duration: April to October, 2024",
      "While the official duration of the fellowship is six months, we expect and hope fellows remain consistent contributors to the Ethereum community as alumni.",
    ],
  },
]

export const getStaticProps = async (context) => {
  const allFellowsFrontmatter = getAllFellowsFrontmatter()

  return {
    props: {
      allFellowsFrontmatter,
    },
  }
}

const FellowshipPage = ({ allFellowsFrontmatter }) => {
  return (
    <>
      <Box bg="linear-gradient(180deg, #011E3B 30%, #011E3B00 100%)">
        <ImageHero heroImage={'/images/fellowship/fellowship-hero.jpg'}>
          <ContentContainer >
            <Box px={{ base: 8, md: 16 }} pb={16} mt={-40}>
              <H1 variant="action">The Next Billion Fellowship</H1>
              <Box maxW={600}>
                <Text mb={16}>
                  A Fellow is a leader committed to their own project that helps
                  Ethereum become a tool of and for the next billion. Their
                  project could be a decentralized app, a piece of research, an
                  organizational initiative, or something else entirely. There
                  are no strict requirements for Next Billion Fellowship
                  projects, save one: earnesty.
                </Text>
                <Text>
                  Whatever the project, whomever the Fellow, the program seeks
                  to enable the flourishing of populations, communities, or
                  individuals under-represented in the Ethereum ecosystem today.
                  The Fellowship is neither the beginning nor the end of a
                  Fellow&apos;s journey, but it may provide the support needed
                  to encourage more ambitious, long-term goals and mindset.
                </Text>
              </Box>
            </Box>
          </ContentContainer>
        </ImageHero>
        <FellowList fellowsData={allFellowsFrontmatter} />
        <ContentContainer mb={8}>
          <FAQ questions={FAQQuestions} />
        </ContentContainer>
      </Box>
    </>
  )
}

export default FellowshipPage
