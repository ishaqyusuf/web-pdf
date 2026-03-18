# Coding Standards

## Purpose
This file records implementation standards for writing maintainable code in `web-pdf`.

## How To Use
- Update when the team settles on stronger conventions.
- Keep rules specific to this project's architecture and goals.
- Reference this before major refactors or new package work.

## Template

### General Standards
- Prefer small, explicit modules over opaque helper piles
- Keep APIs developer-friendly but runtime behavior strict
- Document non-obvious cross-runtime logic
- Avoid introducing behavior that cannot be represented in React-PDF

### Rust Standards
- Keep parser rules data-driven where practical
- Separate tokenization, validation, normalization, and serialization concerns
- Design bindings for predictable JSON-compatible outputs

### TypeScript Standards
- Keep public types stable and readable
- Make runtime fallback logic explicit
- Preserve parity between preview and PDF component contracts
- Fail loudly in development and gracefully in production where appropriate
