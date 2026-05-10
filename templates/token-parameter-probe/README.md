# Token Parameter Probe

Small helper for choosing the token-limit field to send for a model and API shape.

It does not make a network request. It prints the request-body fragment so you can verify adapter logic.

## Run

```bash
npm install

API_SHAPE=chat-completions MODEL=gpt-5.5 npm start
API_SHAPE=chat-completions MODEL=gpt-4o npm start
API_SHAPE=responses MODEL=gpt-5.5 npm start
API_SHAPE=anthropic-messages MODEL=claude-sonnet-4-5 npm start
```

## Output

The script prints the selected field and a minimal JSON body fragment.

