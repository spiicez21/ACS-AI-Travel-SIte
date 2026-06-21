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
  'https://acs-thisai.netlify.app', // Explicitly add the live frontend URL
  process.env.FRONTEND_URL?.replace(/\/$/, '') // Also keep env var just in case
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const normalizedOrigin = origin.replace(/\/$/, '');
    
    if (allowedOrigins.includes(normalizedOrigin) || !process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked request from origin: ${origin}`);
      callback(null, false); // Don't throw an Error, just pass false so it blocks gracefully
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
