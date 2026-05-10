# Cline / Roo Code Starter

Use this when Cline or Roo Code is configured through an OpenAI-compatible provider mode.

```text
Provider: OpenAI-compatible
Base URL: https://apinode.pro
API key:  your_api_key
Model:    gpt-5.5
```

If the provider mode expects a Chat Completions `/v1` base URL, use:

```text
https://apinode.pro/v1
```

## Verify

Send a short prompt and confirm the selected provider is the custom OpenAI-compatible entry.

## Troubleshooting

| Problem | Check |
| --- | --- |
| 404 or route not found | Whether the client expects the base URL with or without `/v1` |
| Model not found | The model value is `gpt-5.5` or another model exposed by the gateway |
| Unauthorized | The API key was pasted into the client settings and not committed to code |
