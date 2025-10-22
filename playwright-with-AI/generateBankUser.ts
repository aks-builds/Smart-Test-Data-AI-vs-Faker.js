import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateBankUser() {
  const prompt = `Generate a realistic but synthetic bank customer profile in strict JSON format with fields: firstName, lastName, address, city, state, zipCode, phone, ssn, username, password. Randomly choose any valid locale (e.g., en_US, hi_IN, fr_FR, ja_JP, es_MX, etc.) and make sure all details (names, address, phone, ID formats) match that locale's conventions. Ensure the output is unique each time, avoid generic names like John/Jane Doe, produce realistic but non-identifiable data (no real addresses or SSNs), use complex passwords. Respond with only the raw JSON.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    max_completion_tokens: 400,
  });

  // Parse the JSON from the AI's response
  const content = response.choices[0].message.content?.trim() || '{}';
  return JSON.parse(content);
}