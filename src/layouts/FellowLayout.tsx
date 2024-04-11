import { Box, Flex } from "@chakra-ui/react"

import StarsImage from "@/public/images/stars.jpg"

import ContentContainer from "@/components/ContentContainer"
import { Image } from "@/components/Image"
import FellowLayoutHero from "@/components/Heroes/FellowLayoutHero"
import { MARKDOWN_CONTENT_MAX_WIDTH } from "@/utils/constants"
import TableOfContents from "@/components/TableOfContents"
import { H3 } from "@/components/Headings"
import FellowCard from "@/components/FellowCard"

export const FellowLayout = ({
  children,
  frontmatter,
  tocItems,
  allFellowsFrontmatter,
}) => {
  const { index, title, fellowName, country, tags, image, description, href } =
    frontmatter

  const meetMoreFellows = [
    allFellowsFrontmatter[index - 1],
    allFellowsFrontmatter[index + 1],
  ]

  return (
    <>
      <Box pos="absolute" zIndex={-1} top={-4} left={0} right={0}>
        <Image src={StarsImage} alt="Stars" w="100%" />
      </Box>
      <ContentContainer>
        <FellowLayoutHero
          title={title}
          fellowName={fellowName}
          country={country}
          tags={tags}
          image={image}
        />
        <Flex
          px={{ base: 6, md: 16 }}
          gap={16}
          pt={4}
          pb={16}
          justifyContent="space-between"
        >
          <Box w="auto" maxW={MARKDOWN_CONTENT_MAX_WIDTH} flex="1">
            {children}
          </Box>
          <Box
            w="300px"
            display={{ base: "none", md: "block" }}
            position="sticky"
            top="20px"
            alignSelf="start"
          >
            <TableOfContents tocItems={tocItems} />
          </Box>
        </Flex>
      </ContentContainer>
      <Box py={16} bg="backgroundHighlight">
        <ContentContainer>
          <Box px={{ base: 6, md: 16 }}>
            <H3 variant="action">Meet more fellows</H3>
            <Flex gap={12} flexDir={{ base: "column", lg: "row" }}>
              <Box flex={1}>
                <FellowCard
                  title={meetMoreFellows[0].title}
                  fellowName={meetMoreFellows[0].fellowName}
                  country={meetMoreFellows[0].country}
                  tags={meetMoreFellows[0].tags}
                  image={meetMoreFellows[0].image}
                  description={meetMoreFellows[0].description}
                  href={meetMoreFellows[0].href}
                />
              </Box>
              <Box flex={1}>
                <FellowCard
                  title={meetMoreFellows[1].title}
                  fellowName={meetMoreFellows[1].fellowName}
                  country={meetMoreFellows[1].country}
                  tags={meetMoreFellows[1].tags}
                  image={meetMoreFellows[1].image}
                  description={meetMoreFellows[1].description}
                  href={meetMoreFellows[1].href}
                />
              </Box>
            </Flex>
          </Box>
        </ContentContainer>
      </Box>
    </>
  )
}
