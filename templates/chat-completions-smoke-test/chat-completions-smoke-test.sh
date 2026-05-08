#!/usr/bin/env bash
set -euo pipefail

: "${OPENAI_COMPAT_BASE_URL:?Set OPENAI_COMPAT_BASE_URL}"
: "${OPENAI_COMPAT_API_KEY:?Set OPENAI_COMPAT_API_KEY}"
: "${OPENAI_COMPAT_MODEL:?Set OPENAI_COMPAT_MODEL}"

base="${OPENAI_COMPAT_BASE_URL%/}"
status="$(
  curl -sS -o /tmp/openai-compatible-chat-smoke-response.json -w "%{http_code}" \
    "$base/chat/completions" \
    -H "Authorization: Bearer $OPENAI_COMPAT_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"$OPENAI_COMPAT_MODEL\",\"messages\":[{\"role\":\"user\",\"content\":\"Reply with OK\"}]}"
)"

echo "HTTP $status"

case "$status" in
  2*) ;;
  *)
    echo "Response body:"
    sed -n '1,80p' /tmp/openai-compatible-chat-smoke-response.json
    exit 1
    ;;
esac
