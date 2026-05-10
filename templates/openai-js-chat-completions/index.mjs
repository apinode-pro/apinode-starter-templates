import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = process.env.OPENAI_BASE_URL || "https://apinode.pro/v1";
const model = process.env.OPENAI_MODEL || "gpt-5.5";

if (!apiKey) {
  throw new Error("Set OPENAI_API_KEY before running this starter.");
}

const client = new OpenAI({ apiKey, baseURL });

const response = await client.chat.completions.create({
  model,
  messages: [
    {
      role: "user",
      content: "Say hello from a custom OpenAI-compatible base URL.",
    },
  ],
});

console.log(response.choices[0]?.message?.content ?? "");
