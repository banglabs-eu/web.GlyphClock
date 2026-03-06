# GlyphClock
A simple site that always shows the GlyphClock time.

## How it works

The 24-hour day (1440 minutes from UTC midnight) is divided into 16 blocks of 90 minutes, each represented by a unique glyph:

🥐 🦋 🌷 ☂️ 🌵 🎈 👓 ⚓ 🦚 🤖 ⭐ ☁️ 🌲 🪁 🪑 ♻

Each block has 3 sub-periods of 30 minutes. The passage of time within a block is shown by repeating the glyph:

- **First 30 min** — one glyph (large)
- **Middle 30 min** — two glyphs side-by-side (medium)
- **Last 30 min** — three glyphs in a triangle: one on top, two below (smaller)

The glyphs scale down as the count increases so they fit within a consistent display area.

## Add to your website

Drop one script tag before `</body>` — no dependencies, no config:

```html
<script src="https://glyphclock.bang-labs.eu/glyphclock-widget.js"></script>
```

This adds a fixed glyph clock to the bottom-right corner of your page. It links back to [glyphclock.bang-labs.eu](https://glyphclock.bang-labs.eu), updates every 30 minutes, and carries its own styles — nothing to configure.

Or self-host by copying `glyphclock-widget.js` into your project.

## Test mode

Click the 🤖 in the bottom glyph row to enter test mode. Use the left/right arrow keys (or the on-screen buttons) to step through all 48 time phases. Press Escape or click 🤖 again to exit.
