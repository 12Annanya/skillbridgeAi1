import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "YOUR_API_KEY",
});

try {
  const models = await ai.models.list();

  console.log(models);
} catch (e) {
  console.error(e);
}