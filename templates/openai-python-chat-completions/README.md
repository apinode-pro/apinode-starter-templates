# OpenAI Python SDK Chat Completions Starter

Use this when a Python app supports only Chat Completions and needs a custom
OpenAI-compatible base URL.

```bash
python3 -m pip install -r requirements.txt
export OPENAI_API_KEY="your_api_key"
export OPENAI_BASE_URL="https://apinode.pro/v1"
export OPENAI_MODEL="gpt-5.5"
python3 main.py
```

If your client uses the Responses API, use `https://apinode.pro` without `/v1`.

Do not commit API keys.
