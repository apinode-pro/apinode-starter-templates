# OpenAI-Compatible Request Debugger

Small local helper for checking how a base URL joins with common OpenAI-compatible request paths.

It does not send network requests or print secrets. It only prints the derived URLs that an app should call.

## Run

```bash
export OPENAI_BASE_URL="https://apinode.pro"
export OPENAI_MODEL="gpt-5.5"

npm install
npm start
```

## Example Output

```text
Base URL: https://apinode.pro
Model: gpt-5.5
Responses URL: https://apinode.pro/responses
Chat Completions URL: https://apinode.pro/chat/completions
Embeddings URL: https://apinode.pro/embeddings
```

If an app is calling `api.openai.com` instead of these URLs after you save custom settings, the issue is likely runtime config propagation.

