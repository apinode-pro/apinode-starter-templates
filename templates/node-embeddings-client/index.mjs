const apiKey = process.env.APINODE_API_KEY;
const baseUrl = process.env.APINODE_BASE_URL || "https://apinode.pro";
const model = process.env.APINODE_EMBEDDING_MODEL || "text-embedding-3-small";

if (!apiKey) {
  throw new Error("Set APINODE_API_KEY before running this example.");
}

const response = await fetch(`${baseUrl}/embeddings`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model,
    input: "API NODE embeddings smoke test",
  }),
});

const json = await response.json();

if (!response.ok) {
  throw new Error(`Embeddings request failed: ${response.status} ${JSON.stringify(json)}`);
}

const vector = json?.data?.[0]?.embedding;

if (!Array.isArray(vector)) {
  throw new Error("Embeddings response did not include data[0].embedding.");
}

console.log(`Embedding length: ${vector.length}`);
console.log(`First values: ${vector.slice(0, 5).join(", ")}`);

