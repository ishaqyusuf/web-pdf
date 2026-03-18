# System Architecture

## Purpose
This file records the intended architecture, package boundaries, and runtime flow for `web-pdf`.

## How To Use
- Update when package ownership or cross-layer contracts change.
- Keep diagrams textual and easy to diff.
- Record architecture decisions separately in ADRs when the change is significant.

## Template

### Layered Architecture
1. Rust core engine
2. TypeScript core integration
3. Live preview rendering layer
4. Styling and utility system

### Package Boundaries
- `web-pdf-rust-core` owns parsing, validation, normalization, manifests, diagnostics
- `web-pdf` owns public components, hooks, providers, runtime switching
- `web-pdf-live` owns preview primitives and browser layout simulation
- `web-pdf-styles` owns utilities, supported-class mapping, class type generation
- `babel-plugin-web-pdf` owns aliasing and DX-oriented compile-time behavior

### Runtime Flow
1. Developer writes components with `className`
2. Style parser resolves supported utilities
3. `web-pdf` merges computed style with component props
4. App renders to HTML preview or React-PDF output
5. Advanced primitives coordinate document-level behavior

### Architectural Constraints
- Rendering must remain grounded in React-PDF capabilities
- Preview should simulate, not invent unsupported semantics
- Rust-heavy computation must fail gracefully into TypeScript fallback
- Supported utilities must be explicit and enumerable
