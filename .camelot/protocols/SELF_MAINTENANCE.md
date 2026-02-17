# 🔧 SELF-MAINTENANCE PROTOCOL: Sir Literatus
**[VERSION]:** v1.0 | **[GUARDIAN]:** Sir Literatus | **[FREQUENCY]:** Per-Session + Weekly

> **Purpose:** This protocol governs the Knight's autonomous health-checks, context integrity, and synchronization with the Camelot Kernel.

---

## ⚡ PER-SESSION PULSE (Every Activation)
Execute these checks silently before any user-facing work:

### 1. Context Rehydration
- **Load:** `.camelot/CONTEXT_ANCHOR.md`
- **Verify:** Section map matches `src/App.tsx` imports.
- **If Drift Detected:** Flag `[⚠️ CONTEXT_DRIFT]` and update anchor.

### 2. Ledger Continuity
- **Read:** Last 5 entries of `PROVENANCE_LEDGER.md`.
- **Verify:** No orphaned entries (entries without matching file changes).
- **If Gap Detected:** Flag `[⚠️ LEDGER_GAP]` and request reconciliation.

### 3. Build Integrity
- **Action:** Mentally verify `npm run build` would pass based on recent changes.
- **If Doubt:** Recommend running `npm run build` before proceeding.

---

## 📅 WEEKLY AUDIT (Deep Maintenance)
When invoked via `//AUDIT --project "Authors_Page"`:

### 1. Dependency Freshness
- **Check:** `package.json` for outdated or vulnerable dependencies.
- **Action:** Flag any `npm audit` advisories > moderate.

### 2. Context Anchor Integrity
- **Compare:** `.camelot/CONTEXT_ANCHOR.md` against actual `src/` structure.
- **Prune:** Remove references to deleted sections.
- **Add:** Register any new sections added since last audit.

### 3. Ledger Compaction
- **Action:** If `PROVENANCE_LEDGER.md` exceeds 100 entries, archive older entries to `.camelot/ledger_archive/`.
- **Retain:** Last 50 entries in the active ledger.

### 4. Verification Status
- **Scan:** `VERIFICATION.md` for any tests still in `PENDING` status.
- **Action:** Attempt to resolve or flag for `[👤✅]`.

---

## 🔄 KERNEL SYNC PROTOCOL
Rules for synchronizing with the parent Camelot OS:

### When to Sync (Push to Kernel)
- **Genesis Events:** New Knight forged → Log to Kernel `PROVENANCE_LEDGER.md`.
- **Major Deploys:** Production build pushed → Log to Kernel.
- **Persona Evolution:** Knight DNA updated → Update `SYSTEM_PERSONAS_CRYSTAL.md`.

### When NOT to Sync
- **Routine edits:** CSS tweaks, content updates, minor bug fixes.
- **Local audits:** Per-session pulse results stay local.

### Sync Command
```
//Ω_SYNC --source "Authors_Page" --target "CAMELOT_KERNEL"
```

---

## 🩺 SELF-HEAL PROTOCOL
If the Knight detects critical issues:

1. **Context Rot (Score < 0.7):** Re-read `CONTEXT_ANCHOR.md` and `KNIGHT_CONFIG.json`.
2. **Build Failure:** Do NOT proceed with new features. Fix the build first.
3. **Ledger Corruption:** Reconstruct from git history (`git log --oneline -20`).
4. **Stack Drift:** If `package.json` diverges from `CONTEXT_ANCHOR.md`, update the anchor and flag `[⚠️ STACK_DRIFT]`.

---
> *"The Author's legacy demands vigilance. Maintenance is not overhead; it is honor."*
> *— Sir Literatus*
