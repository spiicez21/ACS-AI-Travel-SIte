![ACS AI Travel Site Banner](Assets/Github%20Banner.png)

# Backend Documentation

The backend service for the ACS AI Travel Site handles API requests, database interactions, and AI-driven itinerary generation.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (via `@neondatabase/serverless`)
- **AI Integration**: Cohere AI (`cohere-ai`)
- **Environment Management**: dotenv

## API Endpoints

- `GET /health`: Health check endpoint. Returns `{ status: 'OK' }`.
- `API /api/journeys`: Routes related to creating, fetching, and managing travel itineraries and plans.

## Core Services & Architecture

- `src/server.ts`: The entry point for the Express application. Sets up middleware, routing, and database connection.
- `src/routes/`: Express routers defining API endpoints.
- `src/services/`: Business logic, AI integration, and core application flows.
- `src/db/`: Database connection setup and query helpers for the Neon serverless PostgreSQL database.

## Available Scripts

In the `backend` directory, you can run:

- `npm run dev`: Starts the server using `nodemon` and `ts-node` for live-reloading during development.
- `npm run build`: Compiles the TypeScript source code into standard JavaScript in the `dist/` directory.
- `npm run start`: Runs the compiled production code.

## Environment Variables

Make sure to define the following in your `.env` file based on `.env.example`:

- `PORT`: (Optional) The port the server should listen on.
- `DATABASE_URL`: Connection string for the Neon serverless PostgreSQL database.
- `COHERE_API_KEY`: API key for Cohere AI to generate itineraries.
