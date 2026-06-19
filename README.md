![ACS AI Travel Site Banner](docs/Assets/Github%20Banner.png)

# ACS AI Travel Site

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Cohere](https://img.shields.io/badge/Cohere-AI-%233959A4.svg?style=for-the-badge)

Welcome to the ACS AI Travel Site repository. This project is a comprehensive AI-powered travel planning application that helps users explore destinations, generate custom itineraries, and view budget breakdowns.

## Project Structure

This project is a monorepo consisting of two main parts:

- **Frontend**: A React application built with Vite, TailwindCSS, React Router, Recharts, and React Leaflet.
- **Backend**: A Node.js/Express application powered by TypeScript, connecting to a Neon serverless PostgreSQL database and utilizing Cohere AI for intelligent itinerary generation.

## AI Integration with Cohere

This project leverages **Cohere AI** to provide an intelligent, dynamic travel planning experience. The backend integrates with Cohere's advanced language models to:
- **Generate Itineraries:** Create highly customized daily travel plans based on specific user preferences.
- **Provide Recommendations:** Suggest destinations and activities intelligently.
- **Budgeting & Summaries:** Process complex travel data to estimate realistic budget breakdowns and comprehensive trip summaries.

By utilizing Cohere, the travel site dynamically adapts to every user's needs, offering a personalized and smart travel guide.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository.
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running Locally

**Backend:**
1. Navigate to the `backend` directory.
2. Copy `.env.example` to `.env` and fill in your database and Cohere AI credentials.
3. Start the development server:
   ```bash
   npm run dev
   ```

**Frontend:**
1. Navigate to the `frontend` directory.
2. Start the Vite development server:
   ```bash
   npm run dev
   ```

## Documentation

Detailed documentation for each part of the system can be found in the `docs/` folder:

- [Frontend Documentation](docs/frontend.md)
- [Backend Documentation](docs/backend.md)
