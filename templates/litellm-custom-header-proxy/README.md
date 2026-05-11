# LiteLLM Custom Header Proxy Template

Use this template when an application accepts an OpenAI-compatible base URL but
cannot send the exact header your LiteLLM deployment expects.

## Environment

```bash
export OPENAI_BASE_URL="https://litellm.example.com/v1"
export OPENAI_API_KEY="placeholder"
export OPENAI_MODEL="gpt-5.5"
export LITELLM_API_KEY="redacted"
```

The application should keep using `OPENAI_BASE_URL` and `OPENAI_API_KEY`. A proxy
or request adapter can translate `OPENAI_API_KEY` into the required upstream
header:

```text
x-litellm-api-key: ${LITELLM_API_KEY}
```

## Smoke Test

```bash
curl "$OPENAI_BASE_URL/models" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "x-litellm-api-key: $LITELLM_API_KEY"
```

Expected result:

- HTTP `200`.
- The configured model alias appears in the response.
- No raw secret is printed in logs or screenshots.

## PR-Friendly Docs Text

```text
For LiteLLM deployments that require a custom auth header, keep the base URL
OpenAI-compatible and inject the deployment-specific header through the app
client or an internal proxy. Do not commit real keys.
```

