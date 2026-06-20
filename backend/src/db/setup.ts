import { sql } from './index';

export async function setupDatabase() {
  console.log('Setting up the database...');
  
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Database setup: Table "users" is ready.');

    await sql`
      CREATE TABLE IF NOT EXISTS journeys (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        destination VARCHAR(255) NOT NULL,
        duration INTEGER NOT NULL,
        budget VARCHAR(50) NOT NULL,
        companions VARCHAR(50) NOT NULL,
        itinerary_json JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Database setup: Table "journeys" is ready.');
  } catch (error) {
    console.error('Error setting up the database:', error);
  }
}

// Run setup if called directly
if (require.main === module) {
  setupDatabase().then(() => process.exit(0));
}
