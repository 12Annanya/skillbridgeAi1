import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.js";

dotenv.config();

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api", analyzeRoute);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});