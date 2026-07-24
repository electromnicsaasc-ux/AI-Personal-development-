import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize GoogleGenAI
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY is not set in environment.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "dummy-key",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// --- API ROUTES ---

// 1. Analyze Personality
app.post("/api/gemini/analyze-personality", async (req, res) => {
  try {
    const { categoryScores, userProfile } = req.body;
    const ai = getAIClient();

    const prompt = `You are a world-class educational psychologist and AI career/personality mentor. 
Analyze these user responses or category scores: ${JSON.stringify(categoryScores)}. 
User context: ${JSON.stringify(userProfile || {})}.

Generate a comprehensive, uplifting, highly motivating personality report. 
Return JSON matching this exact structure:
{
  "archetype": "Leader" | "Analyst" | "Explorer" | "Creative Thinker" | "Helper" | "Visionary" | "Motivator" | "Planner" | "Problem Solver",
  "tagline": "string summarizing core identity",
  "summary": "2-3 paragraphs of inspiring, detailed analysis of their personality",
  "scores": [
    {"name": "Leadership", "score": number 0-100, "color": "#3B82F6"},
    {"name": "Communication", "score": number 0-100, "color": "#10B981"},
    {"name": "Confidence", "score": number 0-100, "color": "#F59E0B"},
    {"name": "Creativity", "score": number 0-100, "color": "#8B5CF6"},
    {"name": "Emotional Intelligence", "score": number 0-100, "color": "#EC4899"},
    {"name": "Discipline", "score": number 0-100, "color": "#06B6D4"},
    {"name": "Patience", "score": number 0-100, "color": "#14B8A6"},
    {"name": "Decision Making", "score": number 0-100, "color": "#6366F1"},
    {"name": "Social Skills", "score": number 0-100, "color": "#F97316"},
    {"name": "Time Management", "score": number 0-100, "color": "#84CC16"}
  ],
  "strengths": {
    "naturalTalents": ["string1", "string2", "string3"],
    "positiveHabits": ["string1", "string2", "string3"],
    "hiddenAbilities": ["string1", "string2", "string3"]
  },
  "growthAreas": {
    "badHabitsToTransform": ["string1", "string2"],
    "limitingBeliefsToOvercome": ["string1", "string2"],
    "skillsNeedingImprovement": ["string1", "string2"]
  }
}
Never use discouraging or harsh tone. Always frame weaknesses as positive growth opportunities!`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const resultText = response.text || "{}";
    const data = JSON.parse(resultText);
    res.json(data);
  } catch (err: any) {
    console.error("Error analyzing personality:", err);
    res.status(500).json({ error: "Failed to generate report using AI", details: err.message });
  }
});

// 2. Mentor Chatbot
app.post("/api/gemini/chat-mentor", async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    const ai = getAIClient();

    const systemInstruction = `You are Mentor Alex, a warm, wise, compassionate, and inspiring AI Life Coach & Mentor for school/college students and young adults.
Your mission is to help them build confidence, overcome fear/nervousness, improve study discipline, choose career paths, and develop emotional intelligence.
Always speak with enthusiasm, warmth, clarity, and practical action steps.
Never give diagnostic mental health diagnoses. Always offer encouraging self-improvement tips and positive affirmations.`;

    const formattedMessages = messages.map((m: any) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        { role: "user", parts: [{ text: `User Profile Context: ${JSON.stringify(userContext || {})}` }] },
        ...formattedMessages,
      ],
      config: {
        systemInstruction,
      },
    });

    res.json({ reply: response.text || "I am right here with you! Believe in yourself and take one step at a time." });
  } catch (err: any) {
    console.error("Error in Mentor Chat:", err);
    res.status(500).json({ error: "Failed to process chat message", details: err.message });
  }
});

// 3. Daily Motivation Generator
app.post("/api/gemini/daily-motivation", async (req, res) => {
  try {
    const { goal } = req.body;
    const ai = getAIClient();

    const prompt = `Generate an inspiring Daily Growth Packet for a student focused on "${goal || 'General Excellence'}".
Return JSON format:
{
  "quote": "Inspiring quote text",
  "author": "Speaker or Leader name",
  "challenge": "Actionable 10-minute challenge for today",
  "storyTitle": "Short title of real success story",
  "storyContent": "3-4 sentence uplifting story of someone who overcame odds",
  "successHabit": "1 specific high-performer habit to practice today",
  "missionText": "Today's core mission statement"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Error generating daily motivation:", err);
    res.status(500).json({ error: "Failed to generate daily motivation", details: err.message });
  }
});

// 4. Communication Coach Feedback
app.post("/api/gemini/communication-coaching", async (req, res) => {
  try {
    const { mode, userSpeech } = req.body; // mode: 'self-intro' | 'interview' | 'presentation'
    const ai = getAIClient();

    const prompt = `You are an expert Voice & Public Speaking Coach.
Analyze this student speech submission for mode "${mode}":
"${userSpeech}"

Provide actionable coaching feedback in JSON:
{
  "confidenceScore": number (0-100),
  "clarityScore": number (0-100),
  "strengths": ["what they did great"],
  "improvements": ["how to polish"],
  "improvedSample": "An enhanced, high-impact version of their speech",
  "powerVocabulary": ["3 vocabulary words to incorporate"]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (err: any) {
    console.error("Error in communication coaching:", err);
    res.status(500).json({ error: "Failed to generate coaching feedback", details: err.message });
  }
});

// --- VITE & STATIC FILES ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PersonaAI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
