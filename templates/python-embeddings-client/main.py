import json
import os
import sys
import urllib.error
import urllib.request


BASE_URL = os.environ.get("EMBEDDINGS_BASE_URL", "").rstrip("/")
API_KEY = os.environ.get("EMBEDDINGS_API_KEY", "")
MODEL = os.environ.get("EMBEDDINGS_MODEL", "")


def require_env() -> None:
    missing = [
        name
        for name, value in {
            "EMBEDDINGS_BASE_URL": BASE_URL,
            "EMBEDDINGS_API_KEY": API_KEY,
            "EMBEDDINGS_MODEL": MODEL,
        }.items()
        if not value
    ]
    if missing:
        raise SystemExit(f"Missing environment variables: {', '.join(missing)}")


def main() -> None:
    require_env()
    payload = {
        "model": MODEL,
        "input": ["hello", "world"],
        "encoding_format": "float",
    }
    body = json.dumps(payload).encode("utf-8")
    request = urllib.request.Request(
        f"{BASE_URL}/embeddings",
        data=body,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        sys.stderr.write(exc.read().decode("utf-8")[:1000])
        raise SystemExit(exc.code) from exc

    items = data.get("data")
    if not isinstance(items, list) or not items:
        raise SystemExit("Response did not include a non-empty data array")

    for expected_index, item in enumerate(items):
        embedding = item.get("embedding") if isinstance(item, dict) else None
        if not isinstance(embedding, list) or not embedding:
            raise SystemExit(f"Missing embedding at item {expected_index}")
        if item.get("index", expected_index) != expected_index:
            raise SystemExit("Embedding response order did not match input order")

    print(f"OK embeddings={len(items)} dimensions={len(items[0]['embedding'])}")


if __name__ == "__main__":
    main()
