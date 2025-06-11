import { Box, Grid, Text, Flex, Center } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { H3 } from "@/components/Headings"
import Link from "./Link"

const STORIES_PER_PAGE = 4

const FellowStories = ({ fellows }) => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(fellows.length / STORIES_PER_PAGE)
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE
  const endIndex = startIndex + STORIES_PER_PAGE
  const currentFellows = fellows.slice(startIndex, endIndex)

  const pageNumbers: number[] = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: number) => {
    const element = document.getElementById("fellow-stories")
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setCurrentPage(pageNumber)
  }

  return (
    <Box>
      <Grid
        gap={20}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        mb={8}
      >
        {currentFellows.map((fellow) => {
          return (
            <Box
              key={fellow.slug}
              onClick={() => router.push(`/fellowship/${fellow.slug}`)}
              cursor="pointer"
              borderRadius={12}
              border="1px solid"
              borderColor="gray.200"
              p={6}
              bg="#00000020"
              color="body"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: "#00000030",
                borderColor: "gray.500",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <H3 mb={0} color="action">{fellow.title}</H3>
              <Text
                variant="action"
                fontStyle="normal"
                fontWeight="300"
                lineHeight="150%"
                mb={fellow.publishedDate ? 2 : 4}
                mt={1}
                color="bodyHover"
              >
                By {fellow.fellowName} · {fellow.country}
              </Text>
              {fellow.publishedDate && (
                <Text
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="14px"
                  mb={4}
                  color="bodySecondary"
                >
                  Published: {fellow.publishedDate}
                </Text>
              )}
              <Text mb={4} fontSize={18}>
                {fellow.storyHook}
              </Text>
              {fellow.tags && fellow.tags.length > 0 && (
                <Flex flexWrap="wrap" mb={4} gap={2}>
                  {fellow.tags.map((tag, index) => (
                    <Text
                      key={index}
                      textStyle="tag"
                      textTransform="lowercase"
                      color="action"
                      bg="transparent"
                      fontFamily="heading"
                      fontSize={14}
                      letterSpacing={0.7}
                      mb="0.75rem"
                      px={4}
                      py={0.5}
                      mx={1}
                      border="1px solid"
                      borderRadius="4000px"
                    >
                      {tag}
                    </Text>
                  ))}
                </Flex>
              )}
              <Link
                href={`/fellowship/${fellow.slug}`}
                textStyle="link-text-action"
                mt={2}
              >
                Read more
              </Link>
            </Box>
          )
        })}
      </Grid>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Center gap={2} mt={8}>
          {pageNumbers.map((number) => (
            <Text
              key={number}
              color={number === currentPage ? "body" : "body"}
              borderBottom="2px solid"
              fontFamily={"heading"}
              fontSize={20}
              px={4}
              m={0}
              borderColor={number === currentPage ? "body" : "transparent"}
              onClick={() => paginate(number)}
              _hover={{
                cursor: "pointer",
                borderColor: "action",
                color: "action",
              }}
            >
              {number}
            </Text>
          ))}
        </Center>
      )}
    </Box>
  )
}

export default FellowStories
