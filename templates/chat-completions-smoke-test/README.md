# Chat Completions Smoke Test Template

Use this template when an app supports OpenAI-compatible Chat Completions rather than the Responses API.

API NODE's main examples use the Responses API, but many third-party apps still expect `/chat/completions`.

## Run

```bash
export OPENAI_COMPAT_BASE_URL="https://example.com/v1"
export OPENAI_COMPAT_API_KEY="your_key"
export OPENAI_COMPAT_MODEL="your_model"

./chat-completions-smoke-test.sh
```

Expected output:

```text
HTTP 200
```

## Notes

- Keep the base URL separate from `/chat/completions`.
- Use the model identifier expected by the endpoint.
- Do not commit API keys.
