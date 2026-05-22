# AGENTS.md

Guidance for AI agents and developers working on `promptfoo/code-scan-action`.

## Repository Purpose

This is a release-only mirror for the Promptfoo Code Scan GitHub Action. The action metadata lives in `action.yml`, and the published runtime bundle is checked in under `dist/`.

Do not make normal feature or implementation changes directly in this repository. Source changes should happen in the main Promptfoo repository under `promptfoo/code-scan-action`, then be released into this repo through the project's release process.

## What You Can Safely Change Here

- Documentation updates in `README.md`, `AGENTS.md`, or `CLAUDE.md`.
- Metadata-only fixes in `action.yml` when they are clearly release/repo maintenance changes.

Avoid editing generated bundles in `dist/` unless you are intentionally performing a release sync from the upstream source tree.

## Validation

For docs-only changes, no build or test command is required.

For `action.yml` metadata changes:

```bash
git diff --check
sed -n '1,260p' action.yml
```

If generated bundle files are updated as part of a release sync, verify that the corresponding upstream source change and release procedure in `promptfoo/promptfoo` were followed before opening a PR here.

## Git Workflow

- Do not push directly to `main`; create a branch and open a PR.
- Prefer Conventional Commit PR titles and commit subjects for maintenance changes (`docs:`, `chore:`, `fix:`).
- Keep PR descriptions explicit about whether the change is docs-only, metadata-only, or a release artifact sync.
