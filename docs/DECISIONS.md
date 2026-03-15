# Design Decisions Log

### D001: Sidebar links use relative paths for cross-phase, anchors for same-phase
- **Context:** Spec requires identical sidebar across all files. Chapters within the current phase need `#chXX` anchors; chapters in other phases need `phase-N.html#chXX`.
- **Alternatives:** (a) All absolute paths (breaks local file:// serving), (b) JavaScript-based routing (adds complexity)
- **Rationale:** Simplest approach that works both with a local server and file:// protocol.
- **Reversible:** Y

### D002: Hero SVG uses terminal window silhouette instead of truck
- **Context:** Spec says "no truck SVGs, no Mitsubishi logos" and suggests "terminal/code SVG silhouette."
- **Alternatives:** Code bracket SVG, keyboard SVG
- **Rationale:** Terminal window with cursor is the most recognizable developer symbol and aligns with the curriculum starting from terminal basics.
- **Reversible:** Y

### D003: CSS extracted with adaptations, not verbatim copy
- **Context:** FUSO CSS had `.hero-truck` class and no `.phase-card` styles needed for the landing page.
- **Alternatives:** Verbatim copy + separate override file (violates single-CSS rule)
- **Rationale:** Renamed to `.hero-art`, added `.phase-card` and `.anim-cursor`. All additions are for programming context. FUSO reference file untouched.
- **Reversible:** Y

### D004: localStorage key changed from `fuso-hmi-theme` to `zth-theme`
- **Context:** Different project, shouldn't share theme preference with the FUSO reference.
- **Alternatives:** Same key (simpler), per-file key (unnecessary)
- **Rationale:** Distinct project identity. Simple rename.
- **Reversible:** Y
