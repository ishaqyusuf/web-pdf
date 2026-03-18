# System Overview

## Purpose
This file gives a fast orientation to how `web-pdf` is organized and how the major layers interact.

## How To Use
- Read this first when onboarding.
- Update when layers, package boundaries, or runtime strategy changes.
- Keep it high-level and link deeper detail to subsystem files.

## Template

### Mission
`web-pdf` makes PDF authoring feel like building web UI while staying faithful to `@react-pdf/renderer` capabilities.

### Core Philosophy
- React-PDF is the rendering engine
- `web-pdf` is the developer experience layer
- Rust is the computation engine
- TypeScript is the interface layer

### Major Layers
1. Rust core engine
2. TypeScript core package
3. Live preview package
4. Styling system package

### Runtime Strategy
1. Native Rust in Node
2. WASM Rust in the browser
3. TypeScript fallback

### Primary Outcomes
- Fast browser preview during development
- Shared component API across preview and PDF output
- Strictly supported utilities with validation
- Extensible advanced document primitives
