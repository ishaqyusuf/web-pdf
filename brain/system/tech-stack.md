# Tech Stack

## Purpose
This file tracks the main technologies used by `web-pdf` and why they are in the stack.

## How To Use
- Update when dependencies or build tools materially change.
- Note the role of each technology, not every minor package.
- Keep this file aligned with architecture docs.

## Template

### Core Technologies
- Rust: high-performance parsing, validation, style compilation
- TypeScript: public API, runtime integration, fallback parser
- React: component model for authoring and preview
- `@react-pdf/renderer`: PDF rendering engine

### Rust Tooling
- `napi-rs`: Node bindings
- `wasm-bindgen` or `wasm-pack`: browser/WASM distribution
- `serde` and `serde_json`: structured data interchange
- `once_cell`: caching and initialization helpers

### JavaScript Tooling
- `tsup`: TypeScript package builds
- `pnpm`: workspace package management
- `turborepo` optional: task orchestration and caching

### Testing And Quality
- Unit tests for parser and style conversion
- Snapshot tests for style output
- Integration tests for PDF rendering
- Benchmarks for Rust versus TypeScript performance
