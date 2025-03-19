import { Box, Flex, Image, Divider } from "@chakra-ui/react"
import { MDXRemote } from "next-mdx-remote"

import ContentContainer from "@/components/ContentContainer"
import FellowLayoutHero from "@/components/Heroes/FellowLayoutHero"
import { MARKDOWN_CONTENT_MAX_WIDTH } from "@/utils/constants"
import TableOfContents from "@/components/TableOfContents"
import { H3 } from "@/components/Headings"
import FellowCard from "@/components/FellowCard"
import MdComponents from "@/components/Md/MdComponents"

export const FellowLayout = ({
  children,
  frontmatter,
  tocItems,
  allFellowsFrontmatter,
}) => {
  const { index, title, fellowName, country, tags, image, bio, bioSource } = frontmatter

  const meetMoreFellows = [
    allFellowsFrontmatter[
      index === 0 ? allFellowsFrontmatter.length - 1 : index - 1
    ],
    allFellowsFrontmatter[
      index === allFellowsFrontmatter.length - 1 ? 0 : index + 1
    ],
  ]

  return (
    <>
      <Box pos="absolute" zIndex={-1} top={-4} left={0} right={0}>
        <Image src={"/images/fellow-stars.png"} alt="Stars" w="100%" />
      </Box>
      <ContentContainer
        pb={"100px"}
      >
        <FellowLayoutHero
          title={title}
          fellowName={fellowName}
          country={country}
          tags={tags}
          image={image}
        />
        {/* Bio section */}
        {bioSource && (
          <Box
            px={{ base: 6, md: 16 }}
            pt={4}
            pb={6}
            className="fellow-bio"
          >
            <Box 
              sx={{ 
                "h2:first-of-type": { mt: 0 },
                "p, li": { fontSize: "sm" },
                "h2, h3, h4, h5, h6": { fontSize: "md", mb: 2 }
              }}
              bg="#00000020"
              p={6}
              borderRadius="md"
              color="body"
            >
              <MDXRemote {...bioSource} components={MdComponents as any} />
            </Box>
            <Divider mt={8} mb={0} borderColor="divider" />
          </Box>
        )}
        
        {/* Main content section */}
        <Flex
          px={{ base: 6, md: 16 }}
          gap={16}
          pt={bioSource ? 8 : 4}
          pb={16}
          justifyContent="space-between"
          className="fellow-story"
        >
          <Box
            w="auto"
            maxW={MARKDOWN_CONTENT_MAX_WIDTH}
            flex="1"
            sx={{ "h2:first-of-type": { mt: 0 } }}
          >
            {children}
          </Box>
          <Box
            w="300px"
            display={{ base: "none", md: "none" }}
            position="sticky"
            top="100px"
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
                  slug={meetMoreFellows[0].slug}
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
                  slug={meetMoreFellows[1].slug}
                />
              </Box>
            </Flex>
          </Box>
        </ContentContainer>
      </Box>
    </>
  )
}
