# Python Embeddings Client Template

Minimal Python client for testing an OpenAI-compatible embeddings endpoint without any third-party dependencies.

## Run

```bash
export EMBEDDINGS_BASE_URL="https://example.com/v1"
export EMBEDDINGS_API_KEY="your_key"
export EMBEDDINGS_MODEL="embedding-model-name"

python3 main.py
```

For local endpoints that do not require a key:

```bash
export EMBEDDINGS_API_KEY="not-needed"
```

## What It Checks

- HTTP status is 2xx.
- Response has a `data` array.
- Each item has an `embedding` array.
- Embeddings are returned in input order when `index` is present.
