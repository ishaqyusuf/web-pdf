# Project Index

## Purpose
This file is the quick index of repository structure so collaborators can understand where major code and documentation areas live.

## How To Use
- Update when packages, apps, services, or major folders are added, removed, or renamed.
- Keep paths short and descriptive.
- Use this as the first stop for codebase navigation.

## Template

### Repository Root
- `brain/`: shared project memory and operational docs
- `packages/`: planned home for publishable packages

### Planned Packages
- `packages/web-pdf/`: public React and TypeScript API
- `packages/web-pdf-live/`: browser preview and HTML simulation layer
- `packages/web-pdf-styles/`: class utilities, tokens, validation helpers
- `packages/web-pdf-rust-core/`: Rust parser, validator, compiler bindings
- `packages/babel-plugin-web-pdf/`: build-time aliasing and DX tooling

### Planned Supporting Tooling
- `pnpm-workspace.yaml`: workspace definition
- `turbo.json`: optional task orchestration
- package build configs: `tsup`, `napi-rs`, `wasm-pack`

### Notes
- Repository code structure is still in bootstrap stage.
- Update this file as soon as packages are created.
