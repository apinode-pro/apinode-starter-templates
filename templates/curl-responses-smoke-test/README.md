# curl Responses API Smoke Test

Minimal copy-paste test for an OpenAI-compatible Responses API endpoint.

## Run

```bash
export APINODE_API_KEY="your_api_key"
export APINODE_BASE_URL="https://apinode.pro"
export APINODE_MODEL="gpt-5.5"

./responses-smoke-test.sh
```

## Expected Result

The script prints the raw JSON response. A working response should include usable text output.

If the request fails:

- Confirm the key is set in `APINODE_API_KEY`.
- Confirm the base URL does not include a trailing `/responses`.
- Confirm the model exists on the selected endpoint.

