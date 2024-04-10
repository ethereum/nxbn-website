import { useState } from "react"
import { Box, Center, Divider, Flex, Grid, Text } from "@chakra-ui/react"

import ContentContainer from "@/components/ContentContainer"
import FellowCard from "@/components/FellowCard"
import FilterButton from "@/components/Buttons/FilterButton"
import { H2, H6 } from "@/components/Headings"

import { FELLOW_LIST_PAGINATION_LIMIT } from "@/utils/constants"

const FellowList = ({ fellowsData }) => {
  const [paginationIndex, setPaginationIndex] = useState(1)

  const indexOfLastItem = paginationIndex * FELLOW_LIST_PAGINATION_LIMIT
  const indexOfFirstItem = indexOfLastItem - FELLOW_LIST_PAGINATION_LIMIT
  const currentItems = fellowsData.slice(indexOfFirstItem, indexOfLastItem)

  const pageNumbers: number[] = []
  for (
    let i = 1;
    i <= Math.ceil(fellowsData.length / FELLOW_LIST_PAGINATION_LIMIT);
    i++
  ) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: number) => setPaginationIndex(pageNumber)

  return (
    <ContentContainer>
      <Box px={{ base: 6, md: 16 }}>
        <H2 variant="action" mb={8}>
          Fellows, past and present
        </H2>
        <Center
          flexDir={{ base: "column", md: "row" }}
          justifyContent="left"
          alignItems={{ base: "left", md: "center" }}
          gap={3.5}
        >
          <H6 mb={0}>Filter list</H6>
          <Flex gap={3.5}>
            <FilterButton>Year</FilterButton>
            <FilterButton>Region</FilterButton>
            <FilterButton>Area</FilterButton>
          </Flex>
        </Center>
        <Divider my={12} color="action" borderTop="1px solid" />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={24}
        >
          {currentItems.map((fellow, index) => (
            <Box key={index}>
              <FellowCard
                title={fellow.title}
                fellowName={fellow.fellowName}
                country={fellow.country}
                tags={fellow.tags}
                image={fellow.image}
                description={fellow.description}
                href={fellow.href}
              />
            </Box>
          ))}
        </Grid>
      </Box>
      <Divider color="action" borderTop="1px solid" mb={4} />
      <Center gap={2}>
        {pageNumbers.map((number) => (
          <Text
            key={number}
            color={number === paginationIndex ? "action" : "body"}
            borderBottom="1px solid"
            borderColor={number === paginationIndex ? "action" : "transparent"}
            onClick={() => paginate(number)}
            _hover={{ cursor: "pointer", borderColor: "body" }}
          >
            {number}
          </Text>
        ))}
      </Center>
    </ContentContainer>
  )
}

export default FellowList
