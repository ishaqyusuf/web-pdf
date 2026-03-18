# Repo Structure

## Purpose
This file describes how the repository should be organized as packages and tooling are added.

## How To Use
- Update when folders are added or package ownership shifts.
- Keep it focused on intentional structure, not accidental state.
- Link deep package details to feature docs or package READMEs later.

## Template

### Expected Structure
```text
packages/
  web-pdf/
  web-pdf-live/
  web-pdf-styles/
  web-pdf-rust-core/
  babel-plugin-web-pdf/
brain/
```

### Structure Rules
- Public runtime APIs belong in `web-pdf`
- Preview-only rendering logic belongs in `web-pdf-live`
- Styling compilation and utility definitions belong in `web-pdf-styles`
- Performance-sensitive parsing belongs in `web-pdf-rust-core`
- Build-time DX behavior belongs in `babel-plugin-web-pdf`
