# Codex Provider Block Starter

Use this provider block for Codex with API NODE and the Responses API.

```toml
model_provider = "OpenAI"
model = "gpt-5.5"
model_reasoning_effort = "xhigh"

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://apinode.pro"
wire_api = "responses"
requires_openai_auth = true
```

Keep the API key outside the config file.

## Checklist

- `wire_api` is `responses` for Responses API requests.
- `base_url` is `https://apinode.pro`, not a full request path.
- The API key is loaded from your local environment or secret store.
- The model is `gpt-5.5` or another model exposed by the gateway.
