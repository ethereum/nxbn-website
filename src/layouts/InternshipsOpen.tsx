import { Box, Center, Image, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import { H1, H2 } from "@/components/Headings"
import ContentContainer from "@/components/ContentContainer"
import FAQ, { type Question } from "@/components/FAQ"
import ImageSplitContent from "@/components/ImageSplitContent"
import ImageHero from "@/components/Heroes/ImageHero"
import { OpportunityBoard } from "@/components/OpportunityBoard"
import { createJsonProvider } from "@/services/opportunities"

import HeroImage from "@/public/images/internships/internships-hero.jpg"

const FAQQuestions: Question[] = [
  {
    question: "What is the Ethereum Season of Internships?",
    answer: [
      "The Ethereum Season of Internships offers a coordinated collection of paid, fully remote summer internships across the Ethereum ecosystem. This initiative creates pathways for the next generation of contributors to connect with Ethereum projects and apply their diverse skills in development, research, design, marketing, operations, and more.",
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
      "Host organization applications are now closed. The internship application period runs from June 12–29, 2025.",
      "For future hosting opportunities, qualified teams must:",
      "- Be an active contributor to the Ethereum ecosystem (L2s, infrastructure, research, tooling, applications, etc.)",
      "- Demonstrate alignment with Ethereum's core values: decentralization, censorship resistance, open-source innovation, privacy, and security",
      "- Maintain open source projects for interns to work on",
      "- Provide clearly defined projects or tasks with specific learning outcomes",
      "- Have at least 5 full-time contributing members, with one or more willing mentors",
      "- Not be a current participant in the Ethereum Protocol Fellowship (EPF)",
    ],
  },
]

const InternshipsOpen = () => {
  return (
    <>
      <Box bg="linear-gradient(180deg, #011E3B 30%, #011E3B00 100%)">
        <Box position="relative">
          <Box mt={-16}>
            <Box
              height={{ base: "500px", md: "600px", lg: "700px", xl: "900px" }}
              backgroundImage={`url(${HeroImage.src})`}
              backgroundSize="cover"
              backgroundPosition="center bottom"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "20%",
                background: "linear-gradient(to bottom, rgba(1, 30, 59, 0) 0%, rgba(1, 30, 59, 1) 100%)",
                pointerEvents: "none",
              }}
            />
          </Box>
          <ContentContainer>
            <Box px={{ base: 8, md: 16 }} pb={16} mt={-40} position="relative" zIndex={2}>
              <H1 variant="action">
                Season of Internships
              </H1>
              <Box maxW={800}>
                <Text mb={8} fontSize={18}>
                  The Ethereum Season of Internships is a collection of paid, fully remote summer internships offered across the Ethereum ecosystem. It is designed to help establish more paths for the next generation of contributors to connect with Ethereum projects and apply their skills – whether in development, research, design, marketing, operations or more.
                </Text>
                <Text fontSize={18} mb={16}>
                  Teams from across the Ethereum ecosystem have stepped up to create meaningful learning opportunities that can help new builders level-up to become long-term contributors. If you've been looking for a way to become a more active participant in the Ethereum ecosystem, this is your moment!
                </Text>
                <ButtonLink 
                  href="#opportunities-board" 
                  mb={4}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('opportunities-board')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  Apply for an Internship
                </ButtonLink>
                <ButtonLink href="https://ethereum-season-of-internships-hostorg-waitlist.paperform.co/" variant="secondary">
                  Join Host Organization Waitlist
                </ButtonLink>
              </Box>
            </Box>
          </ContentContainer>
        </Box>

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
                  <H2 fontSize="2xl" mb={4}>How to Apply</H2>
                </Box>
                <Text mb={2} fontWeight="medium" color="white">From June 12–29, internship applications are open. Here's how to get started:</Text>
                <Box as="ul" pl={4} color="white">
                  <Box as="li" mb={2}>Choose the projects you're excited about - internships span development, research, community building, operations, and marketing</Box>
                  <Box as="li" mb={2}>Follow the application instructions in each listing - each host team manages their own selection process</Box>
                  <Box as="li">(Optional but encouraged) Start engaging with projects you're interested in - Early engagement helps you understand the project’s goals and gives the team a chance to see your initiative in action</Box>
                </Box>
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

            <Box id="opportunities-board" mb={16}>
              <H2 mb={8}>Opportunities Board</H2>
              <OpportunityBoard dataProvider={createJsonProvider('/data/internships-2025.json')} />
            </Box>
          </Box>
        </ContentContainer>

        <ImageSplitContent
          image="/images/internships/internships-hero.jpg"
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
            <ButtonLink href="https://ethereum-season-of-internships-hostorg-waitlist.paperform.co/">
              Join Host Organization Waitlist
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
