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
const allowedOrigins = [
  'http://localhost:5173', // Vite default local port
  'http://localhost:3000',
  process.env.FRONTEND_URL?.replace(/\/$/, '') // Remove trailing slash if present
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Remove trailing slash from origin just in case
    const normalizedOrigin = origin.replace(/\/$/, '');
    
    if (allowedOrigins.includes(normalizedOrigin) || !process.env.FRONTEND_URL) {
      // If origin is in our list, or if FRONTEND_URL isn't set yet
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
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
