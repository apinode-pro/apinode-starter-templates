# OpenAI-Compatible Endpoint Normalizer

Use this tiny helper when an app lets users enter a custom OpenAI-compatible
base URL.

## What It Solves

Users often paste:

```text
https://provider.example.com/v1
```

Chat Completions requests usually need:

```text
https://provider.example.com/v1/chat/completions
```

This template accepts both the base URL and full endpoint forms.

## Run

```bash
node normalize-openai-endpoint.mjs
```

Expected output:

```text
https://provider.example.com/v1/chat/completions
https://provider.example.com/v1/chat/completions
```

