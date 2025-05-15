import React from 'react';
import { Box, Text, Flex, Link, Divider } from '@chakra-ui/react';
import { Opportunity } from '@/services/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  // Format the date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Flex
      p={6}
      flexDir="column"
      borderRadius={4}
      borderWidth="1px"
      borderColor="#FFFFFF30"
      backgroundColor="#FFFFFF08"
      transition="all 0.3s ease"
      _hover={{
        bg: '#FFFFFF15',
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box>
        <Text
          fontSize="xl"
          fontWeight="500"
          color="white"
          lineHeight="tight"
          mb={2}
        >
          {opportunity.title}
        </Text>
        <Text
          fontSize="16"
          pb={1}
          fontWeight={300}
          lineHeight="150%"
          color="whiteAlpha.800"
        >
          {opportunity.hostOrg}
        </Text>
        <Divider my={4} borderColor="whiteAlpha.300" />
      </Box>
      
      <Box flex="1">
        <Text color="whiteAlpha.800" fontSize="sm" mb={4}>
          Closing: {formatDate(opportunity.date)}
        </Text>
        
        <Flex flexWrap="wrap" mb={4}>
          {opportunity.categories.map((category) => (
            <Text
              key={category}
              fontSize={14}
              letterSpacing={0.7}
              mb="0.75rem"
              px={4}
              py={0.5}
              mr={2}
              color="#2196F3"
              border="1px solid #2196F3"
              borderRadius="4000px"
            >
              {category}
            </Text>
          ))}
        </Flex>
      </Box>
      
      <Box>
        <Link
          href={opportunity.link}
          isExternal
          display="inline-block"
          px={4}
          py={2}
          borderRadius="md"
          bg="#2196F330"
          color="#2196F3"
          fontWeight="medium"
          _hover={{ 
            bg: '#2196F340',
            textDecoration: 'none'
          }}
        >
          View Opportunity →
        </Link>
      </Box>
    </Flex>
  );
};

export default OpportunityCard;
