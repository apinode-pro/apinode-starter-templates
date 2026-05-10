# OpenAI JavaScript SDK Chat Completions Starter

Use this when a JavaScript app supports only Chat Completions and needs a
custom OpenAI-compatible base URL.

```bash
npm install
export OPENAI_API_KEY="your_api_key"
export OPENAI_BASE_URL="https://apinode.pro/v1"
export OPENAI_MODEL="gpt-5.5"
node index.mjs
```

If your client uses the Responses API, use `https://apinode.pro` without `/v1`.

Do not commit API keys.
