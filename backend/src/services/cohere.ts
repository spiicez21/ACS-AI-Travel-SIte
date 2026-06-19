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

Please return the itinerary STRICTLY as a JSON array where each item represents a day. Do not include any markdown formatting like \`\`\`json. Only return the raw JSON array.
Format example:
[
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
]
`;

  try {
    const response = await cohere.chat({
      message: prompt,
      model: 'command-r-plus-08-2024', // Recommended model for chat and generation
      temperature: 0.7,
    });

    const text = response.text;
    
    // Attempt to parse JSON
    // Sometimes the model wraps it in \`\`\`json ... \`\`\`
    const cleanText = text.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
    
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Cohere AI generation error:", error);
    throw new Error("Failed to generate itinerary");
  }
}
