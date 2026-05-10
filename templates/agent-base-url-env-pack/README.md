# Agent Base URL Env Pack

Copy this when a coding agent or SDK accepts OpenAI-compatible environment
variables.

```bash
export OPENAI_API_KEY="your_api_key"
export OPENAI_BASE_URL="https://apinode.pro"
export OPENAI_MODEL="gpt-5.5"
```

For Chat Completions-only clients, use:

```bash
export OPENAI_BASE_URL="https://apinode.pro/v1"
```

## Verify

Run a short prompt:

```text
Reply with the word ready.
```

Then confirm the selected provider is the custom OpenAI-compatible provider and
the final request URL does not include duplicate `/v1/v1`.
