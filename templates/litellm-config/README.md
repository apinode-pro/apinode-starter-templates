# LiteLLM Config Starter

Use this as a minimal LiteLLM config for an OpenAI-compatible gateway.

```yaml
model_list:
  - model_name: apinode-gpt-5-5
    litellm_params:
      model: openai/gpt-5.5
      api_base: https://apinode.pro
      api_key: os.environ/APINODE_API_KEY
```

Run:

```bash
export APINODE_API_KEY="your_api_key"
litellm --config config.yaml
```

Keep the key in the environment. Do not commit it.
