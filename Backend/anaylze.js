import express from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = express.Router();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

router.post("/analyze", async (req, res) => {
  const { resumeText, resumeFileBase64, role } = req.body;

  try {
    const content = [];

    if (resumeFileBase64) {
      content.push({
        type: "document",
        source: { type: "base64", media_type: "application/pdf", data: resumeFileBase64 },
      });
    }

    content.push({
      type: "text",
      text: `You are a technical interview readiness analyzer.

Target role: "${role}"
${resumeText ? `Resume text:\n${resumeText}` : "Resume attached as PDF above."}

Analyze the resume against skills typically required for this role at real companies.

Return ONLY valid JSON (no markdown, no preamble) matching exactly:

{
  "role": string,
  "totalRequiredSkills": number,
  "readinessPercent": number,
  "matchedSkills": [{ "name": string }],
  "missingSkills": [{ "name": string, "hours": number }],
  "totalPrepHours": number,
  "studyPlan": [
    {
      "phase": string,
      "weeks": number,
      "hours": number,
      "topics": [
        { "skill": string, "subtopics": [string], "askedBy": [string] }
      ]
    }
  ]
}

Rules:
- hours: realistic, 5-40h per skill.
- studyPlan: 3-5 phases (Foundation, Core Concepts, Applied Projects, Interview Prep).
- askedBy: 2-4 real companies known to test that topic for this role.
- subtopics: specific, e.g. "Machine Learning" -> ["Gradient Descent","Overfitting & Regularization"].`,
    });

    const response = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 4000,
      messages: [{ role: "user", content }],
    });

    const raw = response.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .replace(/```json|```/g, "")
      .trim();

    res.json(JSON.parse(raw));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analysis failed" });
  }
});

export default router;