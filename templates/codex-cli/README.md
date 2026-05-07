# Codex CLI Config Starter

Example `config.toml`:

```toml
model_provider = "OpenAI"
model = "gpt-5.5"
review_model = "gpt-5.5"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://apinode.pro"
wire_api = "responses"
requires_openai_auth = true
```

Store the API key in your local environment or secret manager. Do not commit it.
