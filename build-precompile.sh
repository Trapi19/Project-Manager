#!/usr/bin/env bash

# Archivos de entrada y salida
SRC="./app.src.jsx"
OUT="./app.bundle.js"

echo "Construyendo aplicacion con soporte de Login..."

# Ejecutamos esbuild marcando React como externo
npx esbuild "$SRC" \
  --bundle \
  --outfile="$OUT" \
  --format=iife \
  --global-name=ProjectManagerApp \
  --loader:.jsx=jsx \
  --external:react \
  --external:react-dom \
  --define:process.env.NODE_ENV='"production"'

echo "Construccion finalizada con exito."