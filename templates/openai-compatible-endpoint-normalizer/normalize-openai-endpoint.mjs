export function normalizeChatCompletionsEndpoint(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new TypeError("endpoint must be a non-empty string");
  }

  const trimmed = input.trim();
  const withoutTrailingSlash = trimmed.replace(/\/+$/, "");

  if (withoutTrailingSlash.endsWith("/v1")) {
    return `${withoutTrailingSlash}/chat/completions`;
  }

  return trimmed;
}

const examples = [
  "https://provider.example.com/v1",
  "https://provider.example.com/v1/chat/completions",
];

for (const example of examples) {
  console.log(normalizeChatCompletionsEndpoint(example));
}

