# vite-bug-repro-asset-import-meta-url

This repository contains 2 packages that demonstrate a bug in Vite.

## test-wasm-library

This is a test NPM package that contains a WebAssembly module.

The WebAssembly module exports a single function `fac(n: number): number` that calculates the factorial of `n`.

## test-asset-import-meta-url

This is a test Vite project that imports `test-wasm-library`.

## Reproduction steps

1. Under directory `test-wasm-library`, run `npm pack`.
2. Under directory `test-asset-import-meta-url`,
   - run `npm install`.
   - run `npm run dev`, and open the browser.