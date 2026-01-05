#!/usr/bin/env bash
set -euo pipefail

# Build: compile JSX (app.src.jsx) -> plain JS (app.bundle.js) using TypeScript compiler.

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$ROOT_DIR/app.src.jsx"
TMP="$ROOT_DIR/.tmp_app.tsx"
SHIM="$ROOT_DIR/jsx-shim.d.ts"
OUT_DIR="$ROOT_DIR/.tmp_out"

cat > "$SHIM" <<'DTS'
declare namespace JSX { interface IntrinsicElements { [elemName: string]: any; } }
DTS

# Disable TS checks, we only want JSX -> JS transpile
{ echo "// @ts-nocheck"; cat "$SRC"; } > "$TMP"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

# Use classic React JSX transform so output uses React.createElement (works with React UMD globals)

tsc "$TMP" \
  --jsx react \
  --jsxFactory React.createElement \
  --jsxFragmentFactory React.Fragment \
  --target ES2018 \
  --module none \
  --outDir "$OUT_DIR"

# Output file name from TS is based on TMP base name
mv "$OUT_DIR/.tmp_app.js" "$ROOT_DIR/app.bundle.js"
rm -rf "$OUT_DIR" "$TMP"

echo "Built: $ROOT_DIR/app.bundle.js"
