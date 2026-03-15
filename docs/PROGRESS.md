# Build Progress Tracker

## Status Key
- [ ] Not started
- [~] In progress
- [?] In QA review (rendering + pedagogy)
- [x] Complete
- [!] Needs revision

## Overall Status
- **Current phase:** Phase A Infrastructure COMPLETE
- **Current chapter:** Ready for Phase B, Chapter 01
- **Last updated:** 2026-03-15

---

## Infrastructure
| Component | Status | Notes |
|-----------|--------|-------|
| Project scaffold created | [x] | |
| design-system.css extracted from FUSO ref | [x] | Adapted: removed truck-specific, added phase-card, cursor-blink anim |
| theme.js extracted | [x] | localStorage key: zth-theme |
| sidebar.js extracted | [x] | IntersectionObserver scroll tracking |
| shared.js (copy buttons) | [x] | |
| SVG arrow markers (global defs) — include in each phase file | [x] | arrowhead + arrowhead-muted in all files |
| index.html (landing page with hero + phase links) | [x] | Terminal SVG hero art, 5 phase cards + appendices |
| Empty phase-1.html through phase-5.html + appendices.html | [x] | All with correct section IDs |
| Sidebar in each file (all phases linked, current highlighted) | [x] | Local chapters use #anchors, other phases use relative links |
| TaskForge v0.1 source code written | [x] | Runs: python3 src/assets/taskforge-v01.py |

## Chapters
| # | Phase | Title | Status | Diagrams | Exercise | Pedagogy QA | Notes |
|---|-------|-------|--------|----------|----------|-------------|-------|
| 01 | 1 | What Programming Actually Is | [ ] | 0/2 | [ ] | [ ] | Abstraction Stack + Language Landscape |
| 02 | 1 | How Computers Execute Code | [ ] | 0/2 | [ ] | [ ] | Memory Viz + Error Types |
| 03 | 1 | Setting Up Your Environment | [ ] | 0/1 | [ ] | [ ] | Terminal Anatomy diagram |
| 04 | 1 | Reading Code Before Writing It | [ ] | 0/1 | [ ] | [ ] | Code reading .pe exercises |
| -- | 1 | Phase 1 Gate + TaskForge Checkpoint | [ ] | -- | -- | [ ] | Reader receives TaskForge v0.1 |
| 05 | 2 | Functions, Logic, and Control Flow | [ ] | 0/2 | [ ] | [ ] | Control Flow + Loop Execution |
| 06 | 2 | Data Structures | [ ] | 0/1 | [ ] | [ ] | Data Structure Viz |
| 07 | 2 | Files, Modules, Standard Library | [ ] | 0/1 | [ ] | [ ] | File Format Comparison |
| 08 | 2 | Error Handling, Debugging, Testing | [ ] | 0/1 | [ ] | [ ] | Test-first pipeline |
| -- | 2 | Phase 2 Gate + TaskForge Checkpoint | [ ] | -- | -- | [ ] | Reader extends TaskForge |
| 09 | 3 | The Terminal and Shell Scripting | [ ] | 0/1 | [ ] | [ ] | Pipe Composition |
| 10 | 3 | Version Control with Git | [ ] | 0/1 | [ ] | [ ] | Git Branching Model |
| 11 | 3 | APIs, HTTP, and Software Communication | [ ] | 0/1 | [ ] | [ ] | HTTP Request/Response flow |
| 12 | 3 | Project Architecture | [ ] | 0/1 | [ ] | [ ] | Project Anatomy tree |
| -- | 3 | Phase 3 Gate + TaskForge Checkpoint | [ ] | -- | -- | [ ] | Reader gives TaskForge structure |
| 13 | 4 | Evaluating and Directing AI Code (BRIDGE) | [ ] | 0/1 | [ ] | [ ] | AI Evaluation Pipeline |
| 14 | 4 | Levels 1 & 2 — Tab Complete and Agent IDE | [ ] | 0/1 | [ ] | [ ] | 8 Levels Progression |
| 15 | 4 | Level 3 — Context Engineering | [ ] | 0/1 | [ ] | [ ] | Context Window Budget |
| 16 | 4 | Level 4 — Compounding Engineering | [ ] | 0/1 | [ ] | [ ] | Compounding Loop |
| 17 | 4 | Level 5 — MCP, Skills, and Capabilities | [ ] | 0/1 | [ ] | [ ] | Skill Fan-Out |
| -- | 4 | Phase 4 Gate + TaskForge Checkpoint | [ ] | -- | -- | [ ] | Reader uses Claude Code on TaskForge |
| 18 | 5 | Level 6 — Harness Engineering | [ ] | 0/1 | [ ] | [ ] | Harness/Backpressure |
| 19 | 5 | Level 7 — Background Agents | [ ] | 0/1 | [ ] | [ ] | Dispatch Architecture |
| 20 | 5 | Level 8 — Autonomous Agent Teams | [ ] | 0/2 | [ ] | [ ] | Team diagram + Decision Tree |
| 21 | 5 | The Multiplayer Effect and What Comes Next | [ ] | 0/1 | [ ] | [ ] | Team Maturity Matrix |
| -- | 5 | Phase 5 Gate + TaskForge Checkpoint | [ ] | -- | -- | [ ] | Reader dispatches agents on TaskForge |

## Appendices
| Name | Status | Notes |
|------|--------|-------|
| Glossary | [ ] | 6 groups |
| Prompt Library | [ ] | All prompts collected |
| Self-Assessment Quiz | [ ] | "What level are you?" |

## Session Log
### Session 1 — 2026-03-15
- **Started:** Project scaffold + infrastructure (Phase A)
- **Completed:** Full infrastructure — scaffold, CSS, JS, all HTML shells, TaskForge v0.1, sidebar nav
- **Blocked on:** Nothing
- **Next:** Chapter 01 — What Programming Actually Is
