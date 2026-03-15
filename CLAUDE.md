# Programming Zero-to-Hero Build

## Project Overview
Building a multi-file HTML reference document: "Zero to Hero — Programming to Multi-Agent Claude Code."
21 chapters across 5 phases, with a phase gate after each phase and appendices. Structured around the 8 Levels of Agentic Engineering.
Multi-file architecture: one landing page + one HTML file per phase + shared CSS/JS.

## Key Commands
- View progress: `cat docs/PROGRESS.md`
- View decisions: `cat docs/DECISIONS.md`
- View QA status: `cat docs/QA-CHECKLIST.md`
- View pedagogy review: `cat docs/PEDAGOGY-REVIEW.md`
- View component usage: `cat docs/COMPONENT-REGISTRY.md`

## Build Rules
1. NEVER modify `reference/fuso-hmi-reference.html`
2. Build ONE chapter at a time, in order
3. Complete ALL chapters in a phase + phase gate BEFORE starting next phase
4. Update PROGRESS.md after completing each chapter
5. Log every non-obvious design decision in DECISIONS.md
6. Run BOTH the rendering QA AND the pedagogical QA against each chapter
7. Commit after each completed chapter: "ch[XX]: [title]"
8. Each phase file must be independently viewable (no broken state in isolation)
9. Every chapter must reference the TaskForge project at least once — as an example, code snippet, exercise, or conceptual explanation. This ensures the spine project compounds throughout, not only at phase gates.
10. All CSS must live ONLY in `src/css/design-system.css`. No inline styles except inside SVG diagrams. All shared JS must live in `src/js/theme.js`, `src/js/sidebar.js`, or `src/js/shared.js`. Phase files may NOT define additional global CSS or JS.
11. The sidebar navigation must be generated from a single shared HTML snippet copied identically into each phase file. The sidebar must include: all phases, all chapters, appendices, and current-chapter highlighting. No phase file may omit sidebar entries for other phases.

## Generation Scope Control

Never generate the entire project in one response. Work units are limited to:
- Infrastructure setup (Phase A)
- One chapter
- One phase gate

After completing a work unit:
1. Update PROGRESS.md
2. Run QA checklists
3. Output build status (see Status Report Format below)
4. Stop generation. Wait for confirmation before next work unit.

## File Output Format

Every generated file must be complete. Output format:

```
FILE: path/to/file
```
```language
(full file contents)
```

Partial file fragments are not allowed. Never output a file as "the same as before but with X changed." Always output the complete file.

## Failure Protocol

If any step cannot be executed:
1. Stop generation immediately.
2. Report the blocking issue with the exact error or constraint.
3. Suggest the minimal fix.
4. Wait for confirmation before continuing.

Do not attempt workarounds without confirmation. Do not skip steps.

## Dependency Policy

Only the following libraries are allowed:

**Python:** Flask, requests, pytest
**Frontend:** HTML, CSS (design-system.css only), vanilla JavaScript

No other dependencies. If another dependency appears necessary, the builder must flag it and wait for approval instead of adding it. This prevents hallucinated package names and unnecessary complexity.

## Code Style
- HTML: semantic, accessible, no frameworks
- CSS: design system custom properties only, no external frameworks
- JS: vanilla only, no build tools, no dependencies
- SVG: inline, design system classes (node-fill, node-accent, label-text, sub-text, arrow)

## Design System Lock

The file `src/css/design-system.css` is **immutable after initial extraction**. Rules:
- Never modify this file after Phase A infrastructure is complete
- Never add additional CSS files
- Never introduce CSS frameworks (Tailwind, Bootstrap, etc.)
- Never introduce JS frameworks (React, Vue, etc.)

Allowed technologies: HTML, the existing CSS design system, vanilla JavaScript. Nothing else.

## Quality Bar
- Every diagram teaches one non-obvious concept (decorative diagrams not permitted)
- Every "Try This Now" is copy-paste-ready with verification AND troubleshooting
- Every chapter has at least 1 diagram and 1 exercise
- Maximum 5 new technical terms per chapter
- No forward references (no concept used before introduced)
- Mobile responsive at 700px and 900px

## Tool References
All tool references use the two-layer pattern:
- Layer 1: Enduring concept (what the tool category does and why)
- Layer 2: Current example (specific tool, version, install command) — clearly marked, easy to update

## Context Management
- Compact with: /compact Focus on current chapter build status
- When resuming: read PROGRESS.md → DECISIONS.md → last session log → current chapter spec
