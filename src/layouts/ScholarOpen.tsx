import { Box, Text } from '@chakra-ui/react'

import ButtonLink from '@/components/Buttons/ButtonLink'
import {
  H1,
  H2,
} from "@/components/Headings"
import ContentContainer from '@/components/ContentContainer'
import FAQ, { type Question } from '@/components/FAQ'
import ImageSplitContent from '@/components/ImageSplitContent'
import PreviousEditions from '@/components/PreviousEditions'

import TempImage from '@/public/images/temp.png'

const FAQQuestions: Question[] = [
  {
    question: 'What is the Next Billion Fellowship?',
    answer: ['The Ethereum Next Billion Fellowship Program is focused on identifying and supporting unique and talented individuals helping to demystify Ethereum\'s relevance and break down barriers to entry for people and communities not currently part of the Ethereum ecosystem.', 'Fellows will be part of a small forum for leaders who, during the course of six months, drive their own projects that address a particular enabler or blocker for Ethereum becoming a public good that acts as a foundational layer for other public goods.', 'While there are some cohort-wide activities, it is a self-directed, self-driven program. Depending on the needs of each Fellow and their project, different support is provided, including financial support, PR opportunities, mentorship, technical advice, and access to the Ethereum Foundation network. Fellows’ work will be highlighted to showcase the impact and value of Ethereum and its community.']
  },
  {
    question: 'What kinds of projects qualify?',
    answer: ['A Fellow candidate must have a project that is mutually cooperative with the Ethereum ecosystem. It doesn\'t have to directly integrate with Ethereum to qualify, but needs to be on-balance \'good\' for the ecosystem and future Ethereum community.', "The project can be just an idea, in early stages, or already ongoing. It can be building an application, research, or an organizational program/initiative. Whatever it is, the project must enable the flourishing of regions, populations, or communities that are underrepresented in the existing Ethereum ecosystem today."]
  },
  {
    question: 'I am building on an L2. Should I apply?',
    answer: ['Program Duration: April to October, 2024',  "While the official duration of the fellowship is six months, we expect and hope fellows remain consistent contributors to the Ethereum community as alumni."]
  }
]

const ScholarOpen = () => {
  return (
    <>
      <Box>
        <H1>ScholarPage Open</H1>
      </Box>

      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} gap={8}>
          <H1 variant="action">Devcon(nect) Scholars</H1>
          <Box maxW="515px">
            <Text>
              Devcon and Devconnect are events that act as centers of gravity in the Ethereum ecosystem. They are global gatherings that create space and time for community. Places and moments to share, learn, discuss, meet, explore, and live in.
            </Text>
            <Text>
              Physical events are always somewhere in a new city, country, or region. That means no matter where a Devcon(nect) is held it will always be difficult for folks living elsewhere in a different city, country, or region. 
            </Text>
            <Text>
              Sometimes human flourishing happens just by showing up. As organizers of Devcon and Devconnect, we can at least create that opportunity for a small group each year. This scholarship provides travel, room & board, a ticket to devcon, and special programming.
            </Text>
          </Box>
        </Box>
      </ContentContainer>

      <ContentContainer>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='right'
        >
          <Box gap={8}>
            <H2>Something to hang a memory on</H2>
            <Text>
            All scholars are responsible for creating a story artifact: a little something that captures the impact attending Devcon or Devconnect had. Artifacts are usually created with words, images, and code in some combination. It could be a lesson learned, a new project, or just reflections -- the value of the artifact is in the act of creating it and sharing with others.  
            </Text>
            <ButtonLink href='/'>Coming Soon: Artifacts Archive</ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>

      <ContentContainer>
        <FAQ questions={FAQQuestions} />
      </ContentContainer>

      <Box
        py={16}
        bg="backgroundHighlight"
      >
        <ContentContainer>
          <PreviousEditions />
        </ContentContainer>
      </Box>
    </>
  )
}

export default ScholarOpen