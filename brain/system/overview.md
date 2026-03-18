# System Overview

## Purpose
This file tracks the current shape of the system, the major layers, and what each layer owns.

## How To Use
- Update when responsibilities move between packages or layers.
- Keep descriptions at subsystem level, not implementation detail level.
- Link to feature docs or ADRs for deeper context.

## Template

### System Summary
`web-pdf` is a multi-layer framework that lets developers build documents with familiar React and web-like primitives, preview them in the browser, and render them as production PDFs.

### Layers
- Rust core engine: parsing, validation, normalization, diagnostics, manifest generation
- TypeScript core: public API, React integration, runtime loading, style merging
- Live preview: HTML-backed simulation of PDF primitives and layout
- Styling system: strict utilities, `cn()`, `classNameToStyle()`, theme tokens

### Primary Design Goals
- Speed
- Accuracy
- Scalability
- Type safety
- Predictable developer experience
