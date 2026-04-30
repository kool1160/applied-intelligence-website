# Cloudflare Preview Deployment Workflow

Purpose: keep the Applied Intelligence website safe by reviewing preview builds before anything goes live.

## Required Cloudflare behavior

- Production branch: `main`
- Non-production branch builds: ON
- Direct production auto-deploy from unreviewed work: OFF when available in Cloudflare settings
- Work branches should produce preview builds only
- Live production deploy happens only after an approved PR is merged into `main`

## Repo workflow

1. Create a new branch for every change.
2. Do not push Codex or manual edits directly to `main`.
3. Open a pull request from the work branch into `main`.
4. Review the Cloudflare preview URL.
5. Merge only when the preview is approved.

## Branch naming

Recommended examples:

- `preview/home-polish`
- `preview/mobile-showcase`
- `preview/glass-chrome-refinement`
- `fix/icon-assets`

## Applied Intelligence rule

The website is the public-facing framework shell. The app is the operating interface.

Use preview first. Merge only after review.
