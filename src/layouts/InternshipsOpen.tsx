import { Box, Center, Image, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import ImageHero from "@/components/Heroes/ImageHero"
import { OpportunityBoard } from "@/components/OpportunityBoard"
import { mockProvider } from "@/services/opportunities"

// TODO: Replace with actual internships hero image
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
    question: "Who can apply for an internship?",
    answer: [
      "Internships are open to all, especially early-career professionals and students. Whether you're a self-taught developer, a researcher, a designer exploring decentralized tools, or someone with skills in marketing, legal, or other areas, there are opportunities for various backgrounds and skill sets.",
    ],
  },
  {
    question: "What is the structure of the internships?",
    answer: [
      "Duration: 12 weeks (August - October 2025)",
      "Eligibility: Open to all, especially early-career professionals and students",
      "Host Organizations: Various teams throughout the Ethereum ecosystem",
      "Compensation: Paid opportunities with rates determined by hosts (small financial support available for nonprofit hosts)",
      "Flexibility: Both full-time and part-time positions available",
    ],
  },
  {
    question: "How do I become a host organization?",
    answer: [
      "To qualify as a host, your team must:",
      "- Be an active contributor to the Ethereum ecosystem (L2s, infrastructure, research, tooling, applications, etc.)",
      "- Demonstrate alignment with Ethereum's core values: decentralization, censorship resistance, open-source innovation, privacy, and security",
      "- Maintain open source projects for interns to work on",
      "- Provide clearly defined projects or tasks with specific learning outcomes",
      "- Have at least 5 full-time contributing members, with one or more willing mentors",
      "- Not be a current participant in the Ethereum Protocol Fellowship (EPF)",
      "Applications to become a host organization close on May 28, 2025.",
    ],
  },
]

const InternshipsOpen = () => {
  return (
    <>
      <Box bg="linear-gradient(180deg, #011E3B 30%, #011E3B00 100%)">
        <ImageHero heroImage={HeroImage}>
          <ContentContainer>
            <Box px={{ base: 8, md: 16 }} pb={16} mt={-40}>
              <H1 variant="action">
                Season of Internships
              </H1>
              <Box maxW={800}>
                <Text mb={8} fontSize={18}>
                  Get hands-on experience contributing to Ethereum! Land a paid, remote internship and make meaningful contributions this summer. Spend 12 weeks working with mentors, contributing to real projects, and applying your skills in development, research, design, marketing, legal, and more!
                </Text>
                <Text fontSize={18} mb={16}>
                  Every year, the Ethereum ecosystem welcomes thousands of builders through community events, hackathons, courses, bootcamps, and campus clubs. The Ethereum Season of Internships creates structured early-career opportunities to transform newcomers into committed long-term contributors.
                </Text>
                <ButtonLink href="https://ethereum.org/internships" mb={4}>
                  Apply for an Internship
                </ButtonLink>
                <ButtonLink href="https://ethereum.org/internships/host" variant="secondary">
                  Become a Host Organization
                </ButtonLink>
              </Box>
            </Box>
          </ContentContainer>
        </ImageHero>

        <ContentContainer>
          <Box px={{ base: 8, md: 16 }} py={16}>
            <Box 
              display="flex" 
              flexDir={{ base: "column", md: "row" }}
              gap={8}
              mb={16}
            >
              <Box 
                bg="#FFD54F30" 
                p={8} 
                borderRadius="md"
                border="1px solid #FFD54F"
                boxShadow="0 2px 10px rgba(255, 213, 79, 0.2)"
                flex={1}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 20px rgba(255, 213, 79, 0.3)",
                  bg: "#FFD54F35"
                }}
              >
                <Box borderLeft="3px solid #FFD54F" pl={4} mb={2}>
                  <H2 fontSize="2xl" mb={4}>What is SOI?</H2>
                </Box>
                <Text fontWeight="medium" color="white">
                  The Ethereum Season of Internships offers a coordinated collection of paid, fully remote summer internships across the Ethereum ecosystem.
                </Text>
                <Text mt={4} color="white">
                  This initiative creates pathways for the next generation of contributors to connect with Ethereum projects and apply their diverse skills.
                </Text>
              </Box>
              
              <Box 
                bg="#4CAF5030" 
                p={8} 
                borderRadius="md"
                border="1px solid #4CAF50"
                boxShadow="0 2px 10px rgba(75, 181, 122, 0.2)"
                flex={1}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 20px rgba(75, 181, 122, 0.3)",
                  bg: "#4CAF5035"
                }}
              >
                <Box borderLeft="3px solid #4CAF50" pl={4} mb={2}>
                  <H2 fontSize="2xl" mb={4}>How It Works</H2>
                </Box>
                <Text mb={2} fontWeight="medium" color="white">Over the course of 12 weeks, selected interns will:</Text>
                <Box as="ul" pl={4} color="white">
                  <Box as="li" mb={2}>Work closely with Ethereum project teams and mentors to contribute to real open source tools, protocols, or community initiatives</Box>
                  <Box as="li" mb={2}>Tackle meaningful issues and contribute directly to active ecosystem projects</Box>
                  <Box as="li" mb={2}>Receive paid financial support throughout the internship</Box>
                  <Box as="li">Build lasting connections with host organizations</Box>
                </Box>
              </Box>
              
              <Box 
                bg="#2196F330" 
                p={8} 
                borderRadius="md"
                border="1px solid #2196F3"
                boxShadow="0 2px 10px rgba(33, 150, 243, 0.2)"
                flex={1}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 20px rgba(33, 150, 243, 0.3)",
                  bg: "#2196F335"
                }}
              >
                <Box borderLeft="3px solid #2196F3" pl={4} mb={2}>
                  <H2 fontSize="2xl" mb={4}>Who Should Apply</H2>
                </Box>
                <Text mb={2} fontWeight="medium" color="white">Internships are open to all, especially:</Text>
                <Box as="ul" pl={4} color="white">
                  <Box as="li" mb={2}>Early career professionals and students</Box>
                  <Box as="li" mb={2}>Self-taught developers or researchers</Box>
                  <Box as="li" mb={2}>Designers exploring decentralized tools</Box>
                  <Box as="li">Anyone passionate about contributing to the Ethereum ecosystem</Box>
                </Box>
              </Box>
            </Box>

            <Box mb={16}>
              <H2 mb={8}>Opportunity Board</H2>
              <OpportunityBoard dataProvider={mockProvider} />
            </Box>
          </Box>
        </ContentContainer>

        <ImageSplitContent
          image="/images/fellowship/fellowship-hero.jpg"
          imageBorder="left"
          imageSide="left"
        >
          <Box gap={8}>
            <H2>Host an Intern this Summer</H2>
            <Text fontSize={18} mb={4}>
              Hosting teams can connect with passionate talents (i.e., potential future hires!) and experiment with more lightweight ways to involve new contributors in their projects.
            </Text>
            <Text fontSize={18} mb={8}>
              By joining forces, we can increase the visibility of internship opportunities and attract even more people to the Ethereum ecosystem.
            </Text>
            <ButtonLink href="https://ethereum.org/internships/host">
              Apply to Host by May 28, 2025
            </ButtonLink>
          </Box>
        </ImageSplitContent>

        <ContentContainer mb={8}>
          <FAQ questions={FAQQuestions} />
        </ContentContainer>
      </Box>
    </>
  )
}

export default InternshipsOpen
