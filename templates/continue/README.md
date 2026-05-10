# Continue.dev Starter

Use this when Continue accepts an OpenAI-compatible provider configuration.

```json
{
  "models": [
    {
      "title": "API NODE",
      "provider": "openai",
      "model": "gpt-5.5",
      "apiBase": "https://apinode.pro",
      "apiKey": "your_api_key"
    }
  ]
}
```

Keep the key in Continue settings or a local secret manager. Do not commit it.

## Verify

Ask Continue a short question, then confirm the request uses the configured provider entry.

If the client requires a `/v1` suffix for OpenAI-compatible Chat Completions, use:

```text
https://apinode.pro/v1
```

For Responses API clients, use:

```text
https://apinode.pro
```
