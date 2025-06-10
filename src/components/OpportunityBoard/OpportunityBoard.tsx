import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Spinner, Center } from '@chakra-ui/react';
import { Opportunity, OpportunityDataProvider } from '@/services/opportunities';
import OpportunityCard from './OpportunityCard';
import OpportunityFilter from './OpportunityFilter';

const OPPORTUNITIES_PAGINATION_LIMIT = 6;

interface OpportunityBoardProps {
  dataProvider: OpportunityDataProvider;
}

const OpportunityBoard: React.FC<OpportunityBoardProps> = ({ dataProvider }) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [paginationIndex, setPaginationIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  // Load opportunities on component mount
  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        setLoading(true);
        const data = await dataProvider.getOpportunities();
        
        // Sort by date (most recent closing date first)
        const sortedData = [...data].sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        
        setOpportunities(sortedData);
        setFilteredOpportunities(sortedData);
        setError(null);
      } catch (err) {
        console.error('Failed to load opportunities:', err);
        setError('Failed to load opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, [dataProvider]);

  // Handler for filter changes
  const handleFilterChange = (filtered: Opportunity[]) => {
    setFilteredOpportunities(filtered);
    setPaginationIndex(1); // Reset to first page when filters change
  };

  // Calculate pagination items
  const indexOfLastItem = paginationIndex * OPPORTUNITIES_PAGINATION_LIMIT;
  const indexOfFirstItem = indexOfLastItem - OPPORTUNITIES_PAGINATION_LIMIT;
  const currentItems = filteredOpportunities.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate page numbers
  const pageNumbers: number[] = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredOpportunities.length / OPPORTUNITIES_PAGINATION_LIMIT);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    if (pageNumber === paginationIndex || isTransitioning) return;
    
    // Determine slide direction
    const direction = pageNumber > paginationIndex ? 'right' : 'left';
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    // After a brief delay, change the page and reset transition
    setTimeout(() => {
      setPaginationIndex(pageNumber);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 150);
    }, 150);
    
    // Smooth scroll to top
    const element = document.getElementById('opportunities-board');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  if (loading) {
    return (
      <Box
        borderWidth="1px"
        borderColor="#FFFFFF30"
        borderRadius="md"
        p={8}
        bg="#FFFFFF08"
      >
        <Center py={10}>
          <Spinner size="xl" color="blue.400" thickness="4px" />
        </Center>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        borderWidth="1px"
        borderColor="#FFFFFF30"
        borderRadius="md"
        p={8}
        bg="#FFFFFF08"
      >
        <Center py={10}>
          <Text color="red.400">{error}</Text>
        </Center>
      </Box>
    );
  }

  return (
    <Box
      borderWidth="1px"
      borderColor="#FFFFFF30"
      borderRadius="md"
      bg="#FFFFFF08"
    >
      <Box p={8}>
        <OpportunityFilter
          opportunities={opportunities}
          onFilterChange={handleFilterChange}
        />

        {filteredOpportunities.length === 0 ? (
          <Center py={10}>
            <Text color="white">No opportunities match your filter criteria.</Text>
          </Center>
        ) : (
          <Box 
            overflow="hidden" 
            position="relative"
          >
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={6}
              transform={
                isTransitioning 
                  ? slideDirection === 'right' 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)'
                  : 'translateX(0)'
              }
              opacity={isTransitioning ? 0.3 : 1}
              transition="all 0.3s ease-in-out"
            >
              {currentItems.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>

      {/* Pagination Controls */}
      {pageNumbers.length > 1 && (
        <Center
          gap={2}
          bg="#FFFFFF08"
          borderTop="1px solid"
          borderColor="#FFFFFF30"
          py={4}
        >
          {pageNumbers.map((number) => (
            <Text
              key={number}
              color={number === paginationIndex ? "white" : "#FFFFFF80"}
              borderBottom="2px solid"
              fontFamily="heading"
              fontSize={20}
              px={4}
              m={0}
              borderColor={number === paginationIndex ? "white" : "transparent"}
              onClick={() => paginate(number)}
              _hover={{
                cursor: "pointer",
                borderColor: "#FFFFFF80",
                color: "white",
              }}
            >
              {number}
            </Text>
          ))}
        </Center>
      )}
    </Box>
  );
};

export default OpportunityBoard;
