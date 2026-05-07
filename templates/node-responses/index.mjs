const baseURL = process.env.APINODE_BASE_URL || "https://apinode.pro";
const model = process.env.APINODE_MODEL || "gpt-5.5";

if (!process.env.APINODE_API_KEY) {
  throw new Error("APINODE_API_KEY is required");
}

const response = await fetch(`${baseURL}/responses`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.APINODE_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model,
    input: "Say hello from Node.js and API NODE.",
  }),
});

if (!response.ok) {
  throw new Error(`API request failed: ${response.status} ${await response.text()}`);
}

const body = await response.json();
console.log(body.output_text || JSON.stringify(body, null, 2));
