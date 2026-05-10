const apiShape = process.env.API_SHAPE || "chat-completions";
const model = process.env.MODEL || "gpt-5.5";
const tokenBudget = Number.parseInt(process.env.TOKEN_BUDGET || "1000", 10);

function tokenLimitField(shape, modelId) {
  if (shape === "responses") {
    return "max_output_tokens";
  }
  if (shape === "anthropic-messages") {
    return "max_tokens";
  }
  if (/^(gpt-5|o1|o3|o4)/.test(modelId)) {
    return "max_completion_tokens";
  }
  return "max_tokens";
}

const field = tokenLimitField(apiShape, model);
const body = {
  model,
  [field]: tokenBudget,
};

console.log(`API shape: ${apiShape}`);
console.log(`Model: ${model}`);
console.log(`Token field: ${field}`);
console.log(JSON.stringify(body, null, 2));

