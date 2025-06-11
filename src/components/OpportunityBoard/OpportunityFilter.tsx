import React, { useState, useMemo } from 'react';
import {
  Box,
  Flex,
  Select,
  Input,
  Button,
  Text,
  Stack,
  Heading,
  Divider,
} from '@chakra-ui/react';
import { Opportunity } from '@/services/opportunities';

interface OpportunityFilterProps {
  opportunities: Opportunity[];
  onFilterChange: (filtered: Opportunity[]) => void;
}

const OpportunityFilter: React.FC<OpportunityFilterProps> = ({
  opportunities,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    hostOrg: '',
    category: '',
  });

  // Extract unique host organizations and categories for filter options
  const { hostOrgs, categories } = useMemo(() => {
    const hostOrgsSet = new Set<string>();
    const categoriesSet = new Set<string>();

    opportunities.forEach((opp) => {
      hostOrgsSet.add(opp.hostOrg);
      opp.categories.forEach((cat) => categoriesSet.add(cat));
    });

    return {
      hostOrgs: Array.from(hostOrgsSet).sort(),
      categories: Array.from(categoriesSet).sort(),
    };
  }, [opportunities]);

  // Apply filters
  const applyFilters = () => {
    const filtered = opportunities.filter((opp) => {
      // Search term filter (check title, organization name)
      const searchTermMatch =
        !filters.searchTerm ||
        opp.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        opp.hostOrg.toLowerCase().includes(filters.searchTerm.toLowerCase());

      // Host organization filter
      const hostOrgMatch = !filters.hostOrg || opp.hostOrg === filters.hostOrg;

      // Category filter
      const categoryMatch =
        !filters.category || opp.categories.includes(filters.category);

      return searchTermMatch && hostOrgMatch && categoryMatch;
    });

    onFilterChange(filtered);
  };

  // Handle filter changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      hostOrg: '',
      category: '',
    });
    onFilterChange(opportunities);
  };

  // Apply filters when filters change
  React.useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
    <Box mb={6}>
      <Heading as="h3" size="md" mb={4} color="white">
        Filter Opportunities
      </Heading>
      <Divider mb={6} borderColor="whiteAlpha.300" />
      
      <Stack spacing={6}>
        <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
          <Box flex="1">
            <Text mb={2} color="white" fontWeight="medium">
              Search
            </Text>
            <Input
              name="searchTerm"
              placeholder="Search opportunities..."
              value={filters.searchTerm}
              onChange={handleFilterChange}
              bg="#FFFFFF15"
              color="white"
              paddingLeft="12px"
              _placeholder={{ color: "whiteAlpha.500" }}
              borderColor="#FFFFFF30"
              _focus={{ 
                borderColor: '#2196F3',
                boxShadow: '0 0 0 1px #2196F3'
              }}
            />
          </Box>
          
          <Box flex="1">
            <Text mb={2} color="white" fontWeight="medium">
              Organization
            </Text>
            <Select
              name="hostOrg"
              placeholder="All organizations"
              value={filters.hostOrg}
              onChange={handleFilterChange}
              bg="#FFFFFF15"
              color="white"
              paddingLeft="12px"
              borderColor="#FFFFFF30"
              _focus={{ 
                borderColor: '#2196F3',
                boxShadow: '0 0 0 1px #2196F3'
              }}
            >
              {hostOrgs.map((org) => (
                <option key={org} value={org} style={{ color: 'black' }}>
                  {org}
                </option>
              ))}
            </Select>
          </Box>
          
          <Box flex="1">
            <Text mb={2} color="white" fontWeight="medium">
              Category
            </Text>
            <Select
              name="category"
              placeholder="All categories"
              value={filters.category}
              onChange={handleFilterChange}
              bg="#FFFFFF15"
              color="white"
              paddingLeft="12px"
              borderColor="#FFFFFF30"
              _focus={{ 
                borderColor: '#2196F3',
                boxShadow: '0 0 0 1px #2196F3'
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} style={{ color: 'black' }}>
                  {cat}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        
        <Flex justifyContent="flex-end">
          <Button 
            variant="outline" 
            size="md" 
            onClick={clearFilters}
            color="#2196F3"
            borderColor="#2196F3"
            _hover={{
              bg: "#2196F320",
            }}
          >
            Clear Filters
          </Button>
        </Flex>
      </Stack>
      <Divider mt={6} mb={6} borderColor="whiteAlpha.300" />
    </Box>
  );
};

export default OpportunityFilter;
