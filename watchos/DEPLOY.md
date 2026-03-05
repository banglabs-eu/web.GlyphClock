# Deploying GlyphClock to Apple Watch

## Prerequisites

- Apple Watch running watchOS 10+ (Series 6 or later)
- Apple Watch paired with an iPhone connected to your Mac
- Xcode installed
- Apple Developer account (free account works, but the app expires after ~7 days)

## Steps

1. **Open the project in Xcode**:
   ```
   open GlyphClock.xcodeproj
   ```
   If the `.xcodeproj` is out of date, regenerate it first:
   ```
   xcodegen generate
   ```

2. **Select your Apple Watch** as the run destination in the Xcode toolbar (top center).

3. **Sign the targets** — go to each target's "Signing & Capabilities" tab and select your Apple Developer team:
   - "GlyphClock Watch App"
   - "GlyphClock WidgetExtension"

4. **Hit Run** (Cmd+R) to build and install on your watch.

## Adding the Complication to a Watch Face

1. Long-press your watch face and tap **Edit**
2. Swipe to the complications section
3. Tap a slot and scroll to find **GlyphClock**
4. Supported styles: circular, rectangular, inline, and corner

## Notes

- With a free Apple Developer account, the app expires after ~7 days and needs to be re-deployed.
- A paid Apple Developer account ($99/year) removes this limitation.
