# API NODE Starter Templates

Fork-ready starter templates for testing API NODE with OpenAI-compatible tools, SDKs, and CI workflows.

Default values:

```text
Base URL: https://apinode.pro
Model:    gpt-5.5
API:      OpenAI Responses API
```

## Templates

- [Node.js Responses API](templates/node-responses)
- [Python Responses API](templates/python-responses)
- [Go Responses API](templates/go-responses)
- [Deno Responses API](templates/deno-responses)
- [GitHub Actions smoke test](templates/github-actions)
- [Codex CLI config](templates/codex-cli)
- [Cursor setup note](templates/cursor)
- [Aider setup note](templates/aider)

## Quickstart

```bash
export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_MODEL="gpt-5.5"
```

Pick the closest template and copy it into your project.

## Safety

- Do not commit API keys.
- Use GitHub Actions secrets for CI.
- Use server-side code for API calls.
- Keep browser-side demos behind a backend proxy.

## More Examples

See the larger examples and guide library:

https://github.com/apinode-pro/openai-compatible-ai-gateway-examples
