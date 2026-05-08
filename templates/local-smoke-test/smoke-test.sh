#!/usr/bin/env bash
set -euo pipefail

: "${APINODE_API_KEY:?Set APINODE_API_KEY}"
: "${APINODE_BASE_URL:=https://apinode.pro}"
: "${APINODE_MODEL:=gpt-5.5}"

status="$(
  curl -sS -o /tmp/apinode-smoke-response.json -w "%{http_code}" \
    "$APINODE_BASE_URL/responses" \
    -H "Authorization: Bearer $APINODE_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"$APINODE_MODEL\",\"input\":\"Reply with OK\"}"
)"

echo "HTTP $status"

case "$status" in
  2*) ;;
  *)
    echo "Response body:"
    sed -n '1,80p' /tmp/apinode-smoke-response.json
    exit 1
    ;;
esac
