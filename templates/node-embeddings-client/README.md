# Node.js Embeddings Client

Minimal Node.js client for testing an OpenAI-compatible embeddings endpoint.

## Run

```bash
npm install

export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_EMBEDDING_MODEL="text-embedding-3-small"

npm start
```

## Notes

- Keep the API key server-side.
- Use a separate embeddings model when your chat model does not support embeddings.
- Match your vector store dimension to the embedding model output dimension.

