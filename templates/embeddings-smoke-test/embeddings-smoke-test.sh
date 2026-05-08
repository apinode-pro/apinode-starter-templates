#!/usr/bin/env bash
set -euo pipefail

: "${EMBEDDINGS_BASE_URL:?Set EMBEDDINGS_BASE_URL}"
: "${EMBEDDINGS_API_KEY:?Set EMBEDDINGS_API_KEY}"
: "${EMBEDDINGS_MODEL:?Set EMBEDDINGS_MODEL}"

base="${EMBEDDINGS_BASE_URL%/}"
status="$(
  curl -sS -o /tmp/openai-compatible-embeddings-smoke-response.json -w "%{http_code}" \
    "$base/embeddings" \
    -H "Authorization: Bearer $EMBEDDINGS_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"$EMBEDDINGS_MODEL\",\"input\":[\"hello\",\"world\"]}"
)"

echo "HTTP $status"

case "$status" in
  2*) ;;
  *)
    echo "Response body:"
    sed -n '1,80p' /tmp/openai-compatible-embeddings-smoke-response.json
    exit 1
    ;;
esac
