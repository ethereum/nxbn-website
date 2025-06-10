import { Opportunity, OpportunityDataProvider } from './types';

/**
 * JSON file implementation of the OpportunityDataProvider
 * This provider fetches opportunities from a JSON file or API endpoint
 */
export class JsonOpportunityProvider implements OpportunityDataProvider {
  private jsonUrl: string;

  constructor(jsonUrl: string) {
    this.jsonUrl = jsonUrl;
  }

  async getOpportunities(): Promise<Opportunity[]> {
    try {
      const response = await fetch(this.jsonUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch opportunities: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      return data as Opportunity[];
    } catch (error) {
      console.error('Error fetching opportunities from JSON source:', error);
      throw error;
    }
  }
}

// Export a factory function to create JSON providers
export const createJsonProvider = (jsonUrl: string): OpportunityDataProvider => {
  return new JsonOpportunityProvider(jsonUrl);
};
