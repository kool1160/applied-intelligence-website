# Applied Intelligence Website — Agent Instructions

## Repository Role

This repository is the production website repository for Applied Intelligence.

It owns the public-facing website, framework shell, homepage, About, Contact, Framework, AI-Connect, AI-Trace, and Agents presentation layers.

It does not own the app runtime, execution spine, AI-Connect native app module, or core ecosystem source-of-truth logic.

## Sibling Repositories

- `kool1160/applied-intelligence-app` = app runtime, execution spine, AI-Connect app work, PWA/app shell.
- `kool1160/kool1160-applied-intelligence` = master ecosystem source hub, shared bundles, specs, handoffs, and agent definitions.
- `kool1160/applied-intelligence-website` = public website and website visual shell.

## Core Identity

- Name: Applied Intelligence
- Slogan: Standardize to Optimize
- Supporting line: Applied Intelligence Framework
- Positioning: Built from the floor up.
- Ecosystem rule: One ecosystem. Separate agents. Clear roles.

## Website Design Direction

- Apple-inspired simplicity.
- Dark navy / near-black foundation.
- Blue-glass restrained glow.
- Clean top glass navigation.
- Rounded premium cards.
- Calm, structured hierarchy.
- Less clutter, more breathing room.
- No excessive neon.
- No desktop bottom dock unless explicitly requested.

## Hard Rules

1. Discovery first. Do not assume file paths.
2. Do not redesign the whole site unless explicitly requested.
3. Keep homepage work scoped to homepage-only PRs.
4. Do not generate images.
5. Do not convert images.
6. Do not resize images.
7. Do not add base64 image blobs.
8. Do not rewrite logo artwork.
9. Use existing static assets only.
10. Do not alter deployment configuration unless specifically requested.
11. Do not create conflicting agent definitions.
12. Shared source data should align with the master ecosystem repo.
13. Make small, reviewable PRs.
14. Run `npm run build` when `package.json` exists.
15. Create PRs but do not merge unless explicitly instructed.

## Source Alignment

The expected shared website source file is:

`core/bundles/applied-intelligence-website-source.json`

The website source should derive from the master Applied Intelligence source. Do not invent a conflicting source system.

## Codex Workflow

For any Codex task:

1. Inspect the repo structure first.
2. Identify the actual files to change.
3. Keep scope narrow.
4. Return files changed, summary, build result, and unresolved issues.
5. Do not merge PRs automatically.
