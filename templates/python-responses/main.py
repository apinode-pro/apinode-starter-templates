import os
from openai import OpenAI


client = OpenAI(
    api_key=os.environ["APINODE_API_KEY"],
    base_url=os.getenv("APINODE_BASE_URL", "https://apinode.pro"),
)

response = client.responses.create(
    model=os.getenv("APINODE_MODEL", "gpt-5.5"),
    input="Say hello from Python and API NODE.",
)

print(response.output_text)
