# Applied Intelligence Website — Handoff

## Purpose

This document defines how the Applied Intelligence website should be understood and modified.

## Scope

This repository controls:
- Homepage
- Framework page
- AI-Connect / AI-Trace pages (website versions)
- Agents overview
- About / Contact

It does NOT control:
- App runtime
- Execution spine
- AI-Connect native app module

## Structure Rule

The website is a presentation layer only.

It should reflect the Applied Intelligence ecosystem but not reimplement logic owned by other agents or repos.

## Source Rule

Shared ecosystem data should come from the master repo:

kool1160/kool1160-applied-intelligence

Expected website bundle:

core/bundles/applied-intelligence-website-source.json

## Workflow

1. Discover structure
2. Identify homepage entry
3. Apply scoped changes
4. Build and verify
5. Create PR
6. Wait for approval

## Design Direction

- Clean
- Structured
- Minimal
- Premium
- Calm

## Anti-Patterns

- Overloading the homepage
- Adding unnecessary sections
- Introducing conflicting data sources
- Rewriting entire layouts without direction

## Goal

The website should feel like a clear, high-level system overview, not a dense application interface.
