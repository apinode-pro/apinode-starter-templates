#!/usr/bin/env bash
set -euo pipefail

: "${APINODE_API_KEY:?Set APINODE_API_KEY}"

APINODE_BASE_URL="${APINODE_BASE_URL:-https://apinode.pro}"
APINODE_MODEL="${APINODE_MODEL:-gpt-5.5}"

curl "$APINODE_BASE_URL/responses" \
  -H "Authorization: Bearer $APINODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"$APINODE_MODEL\",\"input\":\"Reply with a short API NODE smoke test sentence.\"}"

