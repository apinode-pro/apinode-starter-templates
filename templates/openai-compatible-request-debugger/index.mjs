const baseUrl = process.env.OPENAI_BASE_URL || "https://apinode.pro";
const model = process.env.OPENAI_MODEL || "gpt-5.5";

function joinUrl(base, path) {
  const normalizedBase = base.replace(/\/+$/, "");
  const normalizedPath = path.replace(/^\/+/, "");
  return `${normalizedBase}/${normalizedPath}`;
}

const urls = {
  responses: joinUrl(baseUrl, "responses"),
  chatCompletions: joinUrl(baseUrl, "chat/completions"),
  embeddings: joinUrl(baseUrl, "embeddings"),
};

console.log(`Base URL: ${baseUrl}`);
console.log(`Model: ${model}`);
console.log(`Responses URL: ${urls.responses}`);
console.log(`Chat Completions URL: ${urls.chatCompletions}`);
console.log(`Embeddings URL: ${urls.embeddings}`);

