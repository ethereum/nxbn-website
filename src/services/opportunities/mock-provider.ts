import { Opportunity, OpportunityDataProvider } from './types';
import mockData from '@/data/mock-opportunities.json';

/**
 * Mock implementation of the OpportunityDataProvider
 * Uses local JSON file for data
 */
export class MockOpportunityProvider implements OpportunityDataProvider {
  async getOpportunities(): Promise<Opportunity[]> {
    // In a real implementation, we might fetch from an API or database
    // For now, we use the local mock data
    return Promise.resolve(mockData as Opportunity[]);
  }
}

// Export a singleton instance
const mockProvider = new MockOpportunityProvider();
export default mockProvider;
