import { CohereClient } from 'cohere-ai';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.COHERE_API_KEY) {
  throw new Error("COHERE_API_KEY is not set in the environment variables.");
}

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function generateItinerary(
  destination: string,
  duration: number,
  budget: string,
  companions: string
) {
  const prompt = `
You are an expert luxury travel planner. Create a ${duration}-day itinerary for a trip to ${destination}.
The budget is ${budget}. The trip is for ${companions}.

Please return STRICTLY a JSON object containing the itinerary, budgetBreakdown, and optimizations. Do not include any markdown formatting. Only return the raw JSON object.
Format example:
{
  "itinerary": [
    {
      "day": 1,
      "theme": "Arrival and Exploration",
      "activities": [
        {
          "time": "Morning",
          "description": "Arrive at the hotel and settle in.",
          "location": "Hotel Name"
        }
      ]
    }
  ],
  "budgetBreakdown": {
    "flights": { "total": 1500, "items": [{ "name": "Round trip flights", "cost": 1500 }] },
    "hotels": { "total": 1200, "items": [{ "name": "Luxury Hotel 3 nights", "cost": 1200 }] },
    "foodAndExperiences": { "total": 800, "items": [{ "name": "Fine dining", "cost": 800 }] }
  },
  "optimizations": [
    "Booking flights on Tuesday saves 15%."
  ]
}
`;

  try {
    const response = await cohere.chat({
      message: prompt,
      model: 'command-r-plus-08-2024', // Recommended model for chat and generation
      temperature: 0.7,
    });

    const text = response.text;
    
    // Extract JSON object from the response (in case the model wraps it in markdown)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse JSON object from Cohere response');
    }

    const generatedData = JSON.parse(jsonMatch[0]);
    return generatedData;
  } catch (error) {
    console.error("Cohere AI generation error:", error);
    throw new Error("Failed to generate itinerary");
  }
}
