/**
 * Interface defining the structure of an internship opportunity
 */
export interface Opportunity {
  id: string;
  title: string;
  hostOrg: string;
  link: string;
  date: string;
  categories: string[];
}

/**
 * Interface for data providers
 * This allows us to swap between different data sources (JSON file, Notion, etc.)
 */
export interface OpportunityDataProvider {
  getOpportunities(): Promise<Opportunity[]>;
}
