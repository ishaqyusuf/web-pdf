# AI Workflow

## Purpose
This file defines how AI agents should explore, modify, and document work inside `web-pdf`.

## How To Use
- Follow this workflow before and after code changes.
- Update when team operating practices change.
- Keep steps concrete and execution-oriented.

## Template

### Before Coding
- Read `brain/BRAIN.md` and `brain/SYSTEM_OVERVIEW.md`
- Review the relevant subsystem document before changing code
- Check task state in `brain/tasks/`
- Record any major new architecture choice as an ADR if needed

### During Coding
- Prefer existing patterns over introducing new abstractions
- Keep Rust and TypeScript responsibilities clearly separated
- Maintain parity between preview behavior and PDF behavior
- Avoid adding unsupported CSS semantics

### After Coding
- Update affected Brain docs
- Move task status if work completed
- Add bug memory if a defect was fixed
- Add or update feature docs for significant shipped behavior

### Definition Of Done
- Code works
- Tests or manual verification are recorded
- Brain docs reflect the current state
- Follow-up tasks are captured
