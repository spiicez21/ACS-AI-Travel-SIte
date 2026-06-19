![ACS AI Travel Site Banner](Assets/Github%20Banner.png)

# Frontend Documentation

The frontend of the ACS AI Travel Site is built with modern web technologies focusing on performance, responsiveness, and rich user experiences.

## Tech Stack

- **Framework**: React 19 via Vite
- **Styling**: TailwindCSS 4
- **Routing**: React Router DOM
- **Maps**: Leaflet and React Leaflet
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Utilities**: date-fns

## Key Features & Pages

- **Home (`/`)**: Landing page introducing the AI travel planner.
- **Explore Destinations (`/destinations`)**: Browse available travel locations.
- **Destination Details (`/destination/:id`)**: View specific destination information.
- **Plan Your Journey (`/plan`)**: Input preferences for AI itinerary generation.
- **Your Itinerary (`/itinerary`)**: Detailed daily schedule.
- **Trip Summary (`/summary`)**: High-level overview of the planned trip.
- **Budget Breakdown (`/budget`)**: Interactive charts using Recharts to visualize trip costs.

## Available Scripts

In the `frontend` directory, you can run:

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Runs ESLint to identify and fix code style issues.
- `npm run preview`: Previews the production build locally.

## Development Guidelines

1. **Components**: Keep components modular and reusable in the `src/components/` directory.
2. **Pages**: Full page layouts and route entry points belong in `src/pages/`.
3. **Styling**: Use Tailwind utility classes directly in the components. Avoid custom CSS unless absolutely necessary.
