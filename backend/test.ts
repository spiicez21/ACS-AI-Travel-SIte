import { generateItinerary } from './src/services/cohere';

async function test() {
  try {
    const res = await generateItinerary("Kyoto", 3, "$5000", "Couple");
    console.log("Success:", JSON.stringify(res).substring(0, 100));
  } catch (err) {
    console.error("Test Error:", err);
  }
}
test();
