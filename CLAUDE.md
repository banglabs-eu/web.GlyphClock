# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GlyphClock is a static web app that displays a custom timezone-free time system. The 24-hour day (1440 minutes from UTC midnight) is divided into 16 blocks of 90 minutes, each with a unique emoji. Each block has 3 sub-periods of 30 minutes, shown by displaying one, two, or three copies of the glyph.

Emoji sequence: 🥐→🦋→🌷→☂️→🌵→🎈→👓→⚓→🦚→🤖→⭐→☁️→🌲→🪁→🪑→♻

## Tech Stack

Pure static site — vanilla JavaScript, HTML5, CSS3. No npm, no build step, no dependencies. Both JS files use IIFEs with `'use strict'`.

## On Conversation Start

Run `git pull origin main` at the start of every conversation to sync with remote before making changes.

## Local Development

Open any HTML file directly in a browser, or use any static server (e.g. `python3 -m http.server`). No build step needed.

## Deployment

GitHub Pages, custom domain `glyphclock.bang-labs.eu` pinned via the `CNAME` file (same
pattern as other Bang Labs static sites). Deploys automatically on push to `main` — no
workflow file needed, GitHub's built-in Pages build handles it. Confirmed via response
headers (`server: GitHub.com`).

Two `azure-static-web-apps-*.yml` workflows previously existed in `.github/workflows/`
from an earlier Azure Static Web Apps setup that was never actually wired to the live
domain — they ran on every push and failed silently for months. Removed; GitHub Pages
was always the real deploy path.

To deploy: `git push origin main`

## Architecture

- **index.html** — Single page: GlyphClock explanation, live clock display, credits Bang Labs as creator
- **scripts.js** — Application logic (IIFE): time calculation, dark mode, nav bar, clock-only fade
- **i18n.js** — Internationalization (IIFE): 24 EU languages, browser autodetection, translation via `data-i18n` attributes
- **css/styles.css** — Layout, dark mode, nav bar, language switcher dropdown, clock-only fade transitions
- **glyphclock-widget.js** — Embeddable widget (IIFE). Injects its own CSS and a fixed bottom-right glyph clock into any page via a single `<script>` tag. Self-contained — no dependencies on the rest of this repo.

## Key Patterns (cross-file)

**Script load order matters**: `scripts.js` before `i18n.js` — i18n appends the language switcher to `.nav-actions`, which is created by scripts.js.

**Dark mode applies `.dark` on `<html>` (documentElement), not `<body>`**. The inline `<script>` in `<head>` applies the dark class before first paint to prevent flash.

**`data-page` attribute on `<body>`** drives i18n behavior: resolves `title.*` and `meta.description.*` translation keys.

**Adding translations**: Each i18n key in the `T` object requires entries for all 24 languages. HTML elements use `data-i18n="key"` and are translated via `innerHTML`.

**Clock-only mode**: After 11s of inactivity, non-clock elements in `.about` fade out via `.clock-only` class. Mouse/touch/scroll restores them and resets the timer.
