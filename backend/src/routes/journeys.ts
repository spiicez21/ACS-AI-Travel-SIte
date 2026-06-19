import { Router } from 'express';
import { generateItinerary } from '../services/cohere';
import { sql } from '../db';

const router = Router();

router.post('/generate', async (req, res) => {
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
    const result = await sql`
      INSERT INTO journeys (destination, duration, budget, companions, itinerary_json)
      VALUES (${destination}, ${duration}, ${budget}, ${travelStyles}, ${JSON.stringify(generatedData)})
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
