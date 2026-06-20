import * as dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();

async function run() {
  try {
    console.log('Connecting to:', process.env.DATABASE_URL?.substring(0, 20) + '...');
    const sql = neon(process.env.DATABASE_URL!);
    
    // Add user_id column if it doesn't exist
    await sql`ALTER TABLE journeys ADD COLUMN IF NOT EXISTS user_id INTEGER REFERENCES users(id)`;
    console.log('Successfully altered journeys table');
    
  } catch (e) {
    console.error('Error:', e);
  }
}

run().then(() => process.exit(0));
