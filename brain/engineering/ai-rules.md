# AI Rules

## Purpose
This file defines project-specific rules AI agents should follow when modifying `web-pdf`.

## How To Use
- Review before making code changes.
- Update when repeated mistakes or new conventions appear.
- Keep the rules short and enforceable.

## Template

### Required Behaviors
- Read relevant Brain docs before large changes
- Preserve architecture boundaries between Rust, TypeScript, preview, and styling layers
- Update docs when architecture or workflow meaningfully changes
- Capture major design choices as ADRs

### Guardrails
- Do not treat unsupported CSS as supported
- Do not couple preview-only logic into PDF-only runtime paths
- Do not hide fallback behavior behind unclear abstractions
- Do not add undocumented package responsibilities
