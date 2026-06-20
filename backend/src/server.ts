import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import journeysRouter from './routes/journeys';
import authRouter from './routes/auth';
import { setupDatabase } from './db/setup';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/journeys', journeysRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Start Server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Initialize database tables if they don't exist
  await setupDatabase();
});
