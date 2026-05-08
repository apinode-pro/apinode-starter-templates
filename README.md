# API NODE Starter Templates

Fork-ready starter templates for testing API NODE with OpenAI-compatible tools, SDKs, and CI workflows.

Default values:

```text
Base URL: https://apinode.pro
Model:    gpt-5.5
API:      OpenAI Responses API
```

## Templates

### I want to verify the API in 2 minutes

- [Local smoke test](templates/local-smoke-test)
- [Node.js Responses API](templates/node-responses)
- [Python Responses API](templates/python-responses)
- [Go Responses API](templates/go-responses)
- [Deno Responses API](templates/deno-responses)
- [Chat Completions smoke test](templates/chat-completions-smoke-test)
- [Embeddings smoke test](templates/embeddings-smoke-test)

### I want to connect a coding agent

- [Codex CLI config](templates/codex-cli)
- [Cursor setup note](templates/cursor)
- [Aider setup note](templates/aider)

### I want to test from CI

- [GitHub Actions smoke test](templates/github-actions)

## Quickstart

```bash
export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_MODEL="gpt-5.5"
```

Pick the closest template and copy it into your project.

If you are viewing this on GitHub, use **Use this template** to create a new repository with the same starter files.

## Safety

- Do not commit API keys.
- Use GitHub Actions secrets for CI.
- Use server-side code for API calls.
- Keep browser-side demos behind a backend proxy.

## More Examples

See the larger examples and guide library:

https://github.com/apinode-pro/openai-compatible-ai-gateway-examples
