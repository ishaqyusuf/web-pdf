# Project Brain

## Purpose
This directory is the shared memory system for `web-pdf`. It captures product intent, architecture, engineering rules, tasks, decisions, and known issues so humans and AI agents can work with consistent context.

## How To Use
- Update the relevant file when project direction, architecture, APIs, or delivery status changes.
- Prefer editing an existing document before creating a new one.
- Keep entries concise, factual, and easy to parse.

## Template

### Current Snapshot
- Project: `web-pdf`
- Goal: Build a developer-first PDF authoring framework on top of `@react-pdf/renderer`
- Primary layers: Rust core, TypeScript core, live preview layer, strict styling layer
- Status: Brain initialized

### Documentation Map
- System: architecture, stack, operating model
- Product: vision, roadmap
- Engineering: repo structure, standards, AI rules
- Database: reserved for future persistence concerns
- API: reserved for runtime/package contracts
- Features: deep dives on individual capabilities
- Decisions: ADRs for significant technical choices
- Bugs: incident memory and prevention notes
- Tasks: backlog, in progress, done, roadmap

### Maintenance Notes
- Add new feature docs in `brain/features/`
- Add ADRs in `brain/decisions/`
- Add bug records in `brain/bugs/`
- Keep task state synchronized in `brain/tasks/`
