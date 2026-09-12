# Better CaptionKeep

**by Señor Farris** — Keep the words. Stay in the conversation.

![Better CaptionKeep by Señor Farris — Scribble, our listening transcript mascot](branding/scribble-concept.png)

[Privacy policy](PRIVACY.md) · [Report an issue](https://github.com/Mr-GraphnStaff/better-captionkeep/issues) · [MIT license](LICENSE)

Save live captions from Microsoft Teams in Microsoft Edge, including the Teams PWA. Export TXT or Markdown, choose a save location, revisit saved sessions, and select a synchronized interface theme. Scribble is our listening transcript mascot.

## Interface previews

Screenshots below show the current packaged HTML and styling rendered in Microsoft Edge, with extension scripts disabled and no meeting connected. They illustrate the interface, not a live capture test. The banner above is approved mascot concept artwork.

| Capture and settings | Transcript viewer |
| --- | --- |
| <img src="branding/screenshots/popup.png" alt="Better CaptionKeep popup and settings preview" width="320"> | <img src="branding/screenshots/viewer.png" alt="Better CaptionKeep transcript viewer empty-state preview" width="600"> |

## What it does

- Capture displayed Teams captions and speaker information.
- Export TXT or Markdown with a choice of save location.
- Reopen saved sessions and use speaker aliases.
- Optionally include attendee information or hand a transcript to an AI provider.
- Choose CaptionKeep, Light, Midnight, or Follow system appearance across every extension page.
- Work in a branded transcript viewer with a sticky search, speaker-filter, copy, save, and history toolbar.

AI handoffs prepare a local, editable prompt for review before you choose whether to copy or share it. For managed ChatGPT or Claude accounts, first open the approved enterprise workspace and copy its URL into **Settings → Enterprise destinations**. Better CaptionKeep accepts only official HTTPS provider domains, never places transcript text in a provider URL, and asks you to confirm the active workspace before pasting. Preferences, including enterprise destinations and the selected theme, may use browser sync; see the [privacy policy](PRIVACY.md) for the full data-handling details.

## Themes

Open the extension popup and select **Settings → Appearance → Theme**. The selection applies immediately to the popup, transcript viewer, export page, and AI handoff page. CaptionKeep preserves the original cream-and-teal appearance; Follow system responds to the operating-system light or dark preference.

## Install for local testing

Version 4.6 is published on Microsoft Edge Add-ons. These steps load the in-development 4.7 extension directly for testing.

### Mid-feature Chrome and Edge checkpoint

Run `npm run build:targets` to create four ignored test artifacts:

- `dist/chrome-unpacked` and `dist/better_captionkeep_chrome_test-4.7.0.zip`
- `dist/edge-unpacked` and `dist/better_captionkeep_edge_test-4.7.0.zip`

The unpacked folders each contain the effective browser-labeled `manifest.json`. They use separate extension identities and local storage from the published Edge 4.6 extension, so testing does not update or overwrite the Store installation.

For Chrome, open `chrome://extensions`; for Edge, open `edge://extensions`. Enable Developer mode, choose **Load unpacked**, and select the corresponding folder above. Remove the unpacked test extension when the checkpoint is finished.

1. Open Microsoft Edge and visit `edge://extensions`.
2. Enable Developer mode.
3. Choose **Load unpacked** and select the `teams-captions-saver` directory in this repository. Extract a built ZIP first if testing a package.
4. Open Microsoft Teams in Edge and enable live captions during a meeting.

After the project folder move, reload the extension from its new location if needed.

## Development

Use Node.js 18 or newer, then run `npm install`.

- `npm run lint`: validate the extension manifest and assets.
- `npm run build`: build a ZIP in `dist/`.
- Test capture, TXT/Markdown export, Save As, saved sessions, and Teams PWA behavior in Edge before publication.

Browser API identifiers such as `chrome.storage` remain unchanged because Edge implements those Chromium extension APIs. Internal source paths remain stable.

## Publication status

Target store: **Microsoft Edge Add-ons only**. Version 4.6 is live. Version 4.7 is in development and must complete live Teams testing and release review before a separate Store submission.

## Attribution and license

An independent fork of [Live-Captions-Saver](https://github.com/Zerg00s/Live-Captions-Saver) by Denis Molodtsov, under the MIT license. Original copyright and permission notices are preserved in LICENSE and included in the packaged extension.

Not affiliated with or endorsed by Microsoft.
