# AI Prompt Rules

## Purpose
This file captures prompt constraints and response expectations for AI collaborators working on `web-pdf`.

## How To Use
- Reference before asking AI to plan, code, review, or document.
- Update when project-specific conventions become important.
- Keep rules brief and actionable.

## Template

### Project Constraints
- Respect `@react-pdf/renderer` limitations
- Do not model unsupported CSS as if it works
- Preserve runtime fallback order: native Rust, WASM Rust, TypeScript
- Keep DX improvements aligned with rendering accuracy

### Preferred Agent Behavior
- Inspect repository context before implementing
- Make minimal, composable changes
- Keep package boundaries explicit
- Update Brain docs with meaningful architecture or workflow changes

### Output Expectations
- Summarize user-visible impact
- Call out risks and assumptions
- Mention verification status
- Reference touched files when helpful
