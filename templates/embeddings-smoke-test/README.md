# Embeddings Smoke Test Template

Use this template to verify an OpenAI-compatible embeddings endpoint before connecting it to a RAG app or retriever.

## Run

```bash
export EMBEDDINGS_BASE_URL="https://example.com/openai/v1"
export EMBEDDINGS_API_KEY="your_key"
export EMBEDDINGS_MODEL="embedding-model-name"

./embeddings-smoke-test.sh
```

Expected output:

```text
HTTP 200
```

## Notes

- The script calls `$EMBEDDINGS_BASE_URL/embeddings`.
- Keep private documents out of smoke tests.
- Do not commit API keys.
