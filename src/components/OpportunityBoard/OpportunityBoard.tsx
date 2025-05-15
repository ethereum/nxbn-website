import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Spinner, Center } from '@chakra-ui/react';
import { Opportunity, OpportunityDataProvider } from '@/services/opportunities';
import OpportunityCard from './OpportunityCard';
import OpportunityFilter from './OpportunityFilter';

interface OpportunityBoardProps {
  dataProvider: OpportunityDataProvider;
}

const OpportunityBoard: React.FC<OpportunityBoardProps> = ({ dataProvider }) => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      p={8}
      bg="#FFFFFF08"
    >
      <OpportunityFilter
        opportunities={opportunities}
        onFilterChange={handleFilterChange}
      />

      {filteredOpportunities.length === 0 ? (
        <Center py={10}>
          <Text color="white">No opportunities match your filter criteria.</Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default OpportunityBoard;
