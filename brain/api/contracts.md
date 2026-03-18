# API Contracts

## Purpose
This file describes important public contracts between packages, runtimes, and consumers.

## How To Use
- Update when package exports or binding payload formats change.
- Keep contracts explicit and version-aware when needed.
- Link ADRs when contract changes are architectural.

## Template

### Runtime Contracts
- Parser input key: `className + dir`
- Parser outputs: style object, validation errors, supported class registry
- Runtime loading order: native Rust, WASM Rust, TypeScript fallback

### Component Contract Goals
- Shared component API across preview and PDF modes
- Strictly supported `className` semantics
- Advanced primitives with predictable document-level behavior

### Open Contract Areas
- Rust binding payload shape
- manifest generation format
- strict mode type-enforcement strategy
