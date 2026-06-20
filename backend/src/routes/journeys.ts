import { Router, Request, Response, NextFunction } from 'express';
import { generateItinerary } from '../services/cohere';
import { sql } from '../db';
import { authenticateToken, optionalAuthenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/generate', optionalAuthenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { destination, duration, budget, styles } = req.body;

    if (!destination || !duration || !budget) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Convert styles array to string, fallback if missing
    const travelStyles = styles ? styles.join(', ') : 'General Explorer';

    // 1. Generate itinerary using Cohere
    const generatedData = await generateItinerary(destination, duration, budget.toString(), travelStyles);

    // 2. Save to Neon database
    const userId = req.user?.userId || null;
    const result = await sql`
      INSERT INTO journeys (user_id, destination, duration, budget, companions, itinerary_json)
      VALUES (${userId}, ${destination}, ${duration}, ${budget}, ${travelStyles}, ${JSON.stringify(generatedData)})
      RETURNING id
    `;

    const journeyId = result[0].id;

    // 3. Return the generated itinerary and ID
    res.json({
      id: journeyId,
      destination,
      duration,
      budget,
      styles: travelStyles,
      ...generatedData
    });

  } catch (error) {
    console.error('Error in /generate route:', error);
    res.status(500).json({ error: 'An error occurred while generating the journey.' });
  }
});

// Endpoint to fetch history for logged-in user
router.get('/history', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const result = await sql`
      SELECT * FROM journeys 
      WHERE user_id = ${userId} 
      ORDER BY created_at DESC
    `;
    
    res.json(result);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch journey history' });
  }
});

// Endpoint to fetch a saved journey
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql`SELECT * FROM journeys WHERE id = ${id}`;
    
    if (result.length === 0) {
      return res.status(404).json({ error: 'Journey not found' });
    }
    
    res.json(result[0]);
  } catch (error) {
    console.error('Error fetching journey:', error);
    res.status(500).json({ error: 'Failed to fetch journey' });
  }
});

export default router;
