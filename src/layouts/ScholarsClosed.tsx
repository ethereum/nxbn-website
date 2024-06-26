import { Box, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import PreviousEditions from "@/components/PreviousEditions"
import ImageHero from "@/components/Heroes/ImageHero"

import HeroImage from "@/public/images/scholars/scholars-hero-closed.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What is the Next Billion Fellowship?",
    answer: [
      "The Ethereum Next Billion Fellowship Program is focused on identifying and supporting unique and talented individuals helping to demystify Ethereum's relevance and break down barriers to entry for people and communities not currently part of the Ethereum ecosystem.",
      "Fellows will be part of a small forum for leaders who, during the course of six months, drive their own projects that address a particular enabler or blocker for Ethereum becoming a public good that acts as a foundational layer for other public goods.",
      "While there are some cohort-wide activities, it is a self-directed, self-driven program. Depending on the needs of each Fellow and their project, different support is provided, including financial support, PR opportunities, mentorship, technical advice, and access to the Ethereum Foundation network. Fellows&apos work will be highlighted to showcase the impact and value of Ethereum and its community.",
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
              Devcon SEA Scholars Program
            </H1>
            <Text maxW="500px">
              Money doesn&apost solve everything, but it can pay for flights,
              hotels, and visa costs.
            </Text>
          </Box>
        </Box>
      </ImageHero>
      <ContentContainer>
        <ImageSplitContent
          image={"/images/temp.png"}
          imageBorder="round"
          imageSide="right"
        >
          <Box gap={8}>
            <H2>Title</H2>
            <Text>
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
              Pellentesque mattis convallis nisi eu and I ain&apost stoppin
              until the swear jar&aposs full. Ut rhoncus velit at mauris
              interdum, fringilla dictum neque rutrum. Curabitur mattis odio at
              erat viverra lobortis. Poppin&apos bottles on the ice, tristique
              suscipit mauris elementum tempus. Quisque ut felis vitae elit
              tempor interdum viverra a est. Drop it like it&aposs hot, at
              pretium quam. In nec scelerisque purus. Nam dignissim lacus ipsum,
              a ullamcorper nulla pretium non. Aliquam sed enim faucibus,
              pulvinar felis at, vulputate augue.
            </Text>
            <ButtonLink href="/">Text</ButtonLink>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={"/images/temp.png"}
          imageBorder="round"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Title</H2>
            <Text>
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
              Pellentesque mattis convallis nisi eu and I ain’t stoppin until
              the swear jar’s full. Ut rhoncus velit at mauris interdum,
              fringilla dictum neque rutrum. Curabitur mattis odio at erat
              viverra lobortis. Poppin’ bottles on the ice, tristique suscipit
              mauris elementum tempus. Quisque ut felis vitae elit tempor
              interdum viverra a est. Drop it like it’s hot, at pretium quam. In
              nec scelerisque purus. Nam dignissim lacus ipsum, a ullamcorper
              nulla pretium non. Aliquam sed enim faucibus, pulvinar felis at,
              vulputate augue.
            </Text>
            <ButtonLink href="/">Text</ButtonLink>
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
