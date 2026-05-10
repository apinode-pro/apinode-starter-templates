import os

from openai import OpenAI


api_key = os.environ.get("OPENAI_API_KEY")
base_url = os.environ.get("OPENAI_BASE_URL", "https://apinode.pro/v1")
model = os.environ.get("OPENAI_MODEL", "gpt-5.5")

if not api_key:
    raise RuntimeError("Set OPENAI_API_KEY before running this starter.")

client = OpenAI(api_key=api_key, base_url=base_url)

response = client.chat.completions.create(
    model=model,
    messages=[
        {
            "role": "user",
            "content": "Say hello from a custom OpenAI-compatible base URL.",
        }
    ],
)

print(response.choices[0].message.content or "")
