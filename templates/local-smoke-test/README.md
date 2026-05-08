# Local Smoke Test Template

Use this template to verify an OpenAI-compatible endpoint from a terminal before adding it to an app.

Default API NODE values:

```text
Base URL: https://apinode.pro
Model:    gpt-5.5
API:      OpenAI Responses API
```

## Run

```bash
export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_MODEL="gpt-5.5"

./smoke-test.sh
```

Expected output:

```text
HTTP 200
```

The script fails if the endpoint returns a non-2xx status.

## Adapt to Another OpenAI-Compatible Endpoint

```bash
export APINODE_BASE_URL="https://example-compatible-endpoint"
export APINODE_MODEL="your-model"
export APINODE_API_KEY="your-key"
```

Keep real keys out of committed files.
