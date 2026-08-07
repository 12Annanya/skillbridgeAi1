import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

router.post("/analyze", async (req, res) => {
    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
        });

        const { resumeText, role } = req.body;

        console.log("Received Request:");
        console.log({ role, resumeTextLength: resumeText?.length });

        const prompt = `
You are an AI Resume Analyzer.

Target Role:
${role}

Resume:
${resumeText}

Return ONLY valid JSON in this exact structure:

{
  "role": "${role}",
  "readinessPercent": 85,
  "matchedSkills": [
    {"name": "React"},
    {"name": "JavaScript"}
  ],
  "missingSkills": [
    {"name": "Node.js"},
    {"name": "MongoDB"}
  ],
  "strengths": [
    "Good React knowledge",
    "Strong JavaScript"
  ],
  "overallSummary": "Good resume with scope for backend improvement."
}
`;

        console.log("Calling Gemini...");

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
        });

        console.log("Gemini Response received");

        const text = response.text;

        console.log("Response Text:");
        console.log(text);

        const cleanText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const json = JSON.parse(cleanText);

        return res.json(json);

    } catch (err) {
        console.error("========== ERROR ==========");
        console.error(err);

        return res.status(500).json({
            error: err.message || "Something went wrong",
        });
    }
});

export default router;