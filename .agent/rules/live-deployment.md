# Live Website Deployment Rule

For any website, content, itinerary, or package changes requested by the user:
1. **Always deploy changes directly to the live website immediately**:
   - Push content overrides directly via `POST https://www.sobhavitravel.com/api/content-overrides` with `{ pin: 'Sobhavi@2027', routePath, updates }`.
   - Sync site config / blog updates to the universal GitHub Gist cloud storage (`f283d92f3a86e50b21a9f40304180407`).
2. **Keep local files synchronized**:
   - Update `data/content_overrides.json`.
   - Update corresponding source files (`src/lib/siteConfig.json`, `src/app/...`, `src/lib/data.ts`).
