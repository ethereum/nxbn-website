# Opportunity Board Implementation

This directory contains the implementation of the Opportunity Board feature for the Ethereum Season of Internships page.

## Architecture

The feature is designed with flexibility in mind, allowing for different data sources to be used:

- `types.ts` - Defines the core interfaces for opportunities and data providers
- `mock-provider.ts` - Uses local mock data for development and testing
- `json-provider.ts` - Can fetch opportunity data from an external JSON source
- `notion-provider.ts` - Placeholder implementation for fetching from a Notion database

## Current Setup

The current implementation uses the `MockOpportunityProvider` which loads data from `src/data/mock-opportunities.json`.

## UI Components

The UI components are located in `src/components/OpportunityBoard/`:

- `OpportunityBoard.tsx` - Main container component
- `OpportunityCard.tsx` - Displays individual opportunities
- `OpportunityFilter.tsx` - Handles filtering and searching

## Switching Data Sources

### Using JSON Provider

To switch to using an external JSON source:

```typescript
import { createJsonProvider } from '@/services/opportunities';

// In your component
const jsonProvider = createJsonProvider('/api/opportunities.json');
<OpportunityBoard dataProvider={jsonProvider} />
```

### Using Notion Provider

To use the Notion provider (once implemented):

1. Get a Notion API key from [Notion Integrations](https://www.notion.so/my-integrations)
2. Create a Notion database with the following properties:
   - `title` (Title)
   - `hostOrg` (Select)
   - `link` (URL)
   - `date` (Date)
   - `categories` (Multi-select)
3. Share the database with your integration
4. Update the `notion-provider.ts` implementation
5. Use it in your component:

```typescript
import { createNotionProvider } from '@/services/opportunities';

// In your component
const notionProvider = createNotionProvider('your-api-key', 'your-database-id');
<OpportunityBoard dataProvider={notionProvider} />
```

## Next Steps

1. Complete the Notion provider implementation
2. Consider adding pagination for large datasets
3. Add more advanced filtering options if needed
4. Implement a caching layer for better performance
