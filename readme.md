# MS Teams Live Captions Saver (SaveAs Fork)

> **Note:** This project is a fork of [Zerg00s/Live-Captions-Saver](https://github.com/Zerg00s/Live-Captions-Saver) by Denis Molodtsov.  
> Original project is licensed under MIT.  
> This fork begins with adding **Save As support** (choose download location) and will expand with additional features and simplifications tailored for Teams PWA.

---

The MS Teams Live Captions Saver (SaveAs Fork) builds on the original extension, adding new functionality and customizations.  

## Current Enhancements
- `saveAs` option → lets users choose where transcripts are saved instead of forcing the default Downloads folder.
- Save behavior controls with optional custom download folder support.
- Streamlined popup optimized for Microsoft Teams PWA with touch-friendly actions.
- Lean export workflow focused on TXT and Markdown with simplified copy options.
- Enhanced filename variables and timestamp preferences, including relative timers for meetings.

## Planned Enhancements
- Quick filters for session history (search by meeting title or date).
- Optional transcript trimming for long-running meetings.
- Additional visual themes for light/dark PWA environments.

## Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) **18.x or newer** (required by the tooling in this fork)
- npm **9.x or newer** (bundled with recent Node releases)

### Install Tooling
```bash
npm install
```

### Common Tasks
- `npm run lint` → Runs a lightweight manifest and asset check to confirm required files are present
- `npm run start` → Launches the extension in a Chromium browser via `web-ext run`. Use `CHROMIUM_BIN=/path/to/browser npm run start` if automatic detection fails.
- `npm run build` → Creates a production-ready ZIP in `dist/` using `web-ext build`

### Manual Loading for Local Testing
You can still load the unpacked extension directly:
1. Run `npm run build` **or** use the `teams-captions-saver/` folder.
2. Open the extensions page in your browser (`chrome://extensions`, `edge://extensions`, or `brave://extensions`).
3. Enable **Developer mode**.
4. Choose **Load unpacked** and point to the `teams-captions-saver/` directory or select the generated ZIP in `dist/`.


![](IMG/logo.png)


# MS Teams Live Captions Saver Browser Extension v4.5

The MS Teams Live Captions Saver is a streamlined Chrome extension that captures and exports live captions from Microsoft Teams meetings. This fork focuses on lightweight, PWA-friendly workflows so you can save transcripts quickly without extra overhead.

## Key Features

- **Real-time Caption Capture** — Automatically captures live captions during Teams meetings.
- **Lean Export Formats** — Save as TXT or Markdown with Save As support and custom sub-folders.
- **Speaker Identification & Aliasing** — Track who said what with customizable speaker names.
- **Optional Attendee Tracking** — Monitor meeting participants with join/leave timestamps.
- **Auto-Save on Meeting End** — Never lose your transcripts with automatic saving.
- **AI Hand-off Automation** — Optionally launch ChatGPT, Claude, or Gemini with a ready-to-use summary prompt when a meeting ends.
- **Custom Filename Patterns** — Use variables like `{date}`, `{time}`, `{datetime}`, `{title}`, `{format}`, `{attendees}`.
- **Flexible Timestamp Formats** — Choose between 12-hour, 24-hour, or relative meeting timers.
- **Session History & Viewer** — Reopen, export, or delete past meetings directly from the popup.

## Install from the Chrome Store

[MS Teams Live Captions Saver - Chrome Web Store](https://chromewebstore.google.com/detail/ms-teams-live-captions-sa/ffjfmokaelmhincapcajcnaoelgmpoih)

## Quick Start

### Using the Extension

1. **Navigate to Microsoft Teams** in your browser: https://teams.microsoft.com
2. **Join a meeting**
3. **The extension will automatically enable live captions** (if auto-start is enabled)
4. **Capture is automatic** - The extension starts recording once captions appear
5. **Save your transcript** using the extension popup when ready

![Extension Popup - Active Capture](IMG/Extension%20Popup%203.png)

*The extension actively capturing captions with speaker aliases enabled*

### Extension Interface

![Extension Settings](IMG/Extension%20Popup%201.png)

*Comprehensive settings panel with automation options*

The extension popup provides:
- **Real-time status** showing capture progress and attendee count
- **Quick export buttons** with dropdown format selection
- **Speaker alias management** for correcting names
- **Auto-save configuration** with customizable settings
- **Lean settings** for timestamp style, auto-save behavior, and filename patterns

## Transcript Viewer

Click "View Transcript" to open the interactive viewer with:

![Transcript Viewer](IMG/View%20Transcript.png)

*Interactive transcript viewer with analytics dashboard*

- **Meeting Analytics** - Total messages, words, and speaker count
- **Speaker Participation Graph** - Visual representation of contribution
- **Search & Filter** - Find specific content or speakers
- **Real-time Updates** - See new captions as they arrive

## Advanced Settings

![Advanced Settings](IMG/Extension%20Popup%202.png)

*Lean meeting automation and timestamp controls*

### Meeting Features
- **Auto-start Live Captions** - Automatically enables Teams captions when joining
- **Track Meeting Attendees** - Records participant join/leave times
- **Timestamp Format Options** - Customize time display format
- **Filename Pattern Variables** - Create dynamic file names

### Lean Controls
- **Relative Timers** - Track how long a discussion has been running with zero-based timestamps.
- **Save Behavior** - Choose between Save As prompts or background auto-save to preset folders.
- **PWA-Friendly Layout** - Buttons sized for touch and narrow popup widths.

## Standalone Console Script

For environments where browser extensions cannot be installed:

![Standalone Script](IMG/Standalone%20Script.png)

*Console script v2.0 with attendee tracking and speaker aliases*

### Features:
- Attendee tracking with join/leave times
- Speaker aliasing system
- Enhanced duplicate prevention
- Multiple export formats
- Auto-enable captions
- Draggable UI panel

### Usage:
1. Open Developer Console (F12) in Teams meeting
2. Paste the script from `Standalone-scripts/teams-caption-saver-console.js`
3. Press Enter to run

## Export Formats

### Standard Formats
- **TXT** - Plain text with timestamps
- **Markdown** - Formatted with speaker sections ready for notes

Lean exports honor the timestamp style you choose (12-hour, 24-hour, or relative) and support filename variables such as `{date}`, `{time}`, `{datetime}`, `{title}`, `{format}`, and `{attendees}`.

## Manual Installation (Developer Mode)

1. Download the `teams-captions-saver` folder
2. Open Chrome/Edge/Brave and navigate to extensions:
   - `chrome://extensions/` - Chrome
   - `edge://extensions/` - Edge
   - `brave://extensions/` - Brave
3. Enable **Developer mode** (top right toggle)
4. Click **"Load unpacked"**
5. Select the `teams-captions-saver` directory

## Contributing

We welcome contributions! To get started:

1. Fork the repository
2. Load the extension in developer mode
3. Make your changes to the `teams-captions-saver` directory
4. Test in a Teams meeting
5. Submit a pull request

### Development Setup
- No build system required - pure JavaScript/HTML/CSS
- Test with actual Teams meetings (captions must be enabled)
- Update version in `manifest.json` for releases

## Requirements

- Chrome, Edge, or Brave browser
- Microsoft Teams web version (teams.microsoft.com)
- Live captions must be enabled in Teams meeting
- Extension works only during active meetings

## Privacy & Legal

### Important Notice
This extension captures and saves live captions from meetings, which may include sensitive information. Before using:

- **Obtain consent** from all meeting participants
- **Comply with local laws** regarding recording and transcription
- **Follow your organization's policies** on meeting documentation
- **Respect privacy** and confidentiality requirements

### Data Handling
- All processing happens locally in your browser
- No data is sent to external servers
- Transcripts are saved to your local device only
- No telemetry or usage tracking

## Troubleshooting

### Common Issues

**Captions not capturing:**
- Ensure live captions are enabled in Teams (More → Turn on live captions)
- Refresh the Teams page after installing the extension
- Check that you're in an active meeting

**Extension not appearing:**
- Verify installation in browser extensions page
- Check permissions for teams.microsoft.com
- Try reloading the extension

**Export not working:**
- Check browser download settings
- Verify sufficient disk space
- Look for errors in browser console (F12)

**Attendee tracking issues:**
- Enable "Track Attendees" in settings
- Ensure roster panel is accessible
- Note: Only shows current participants

## License

This project is provided "as is" without warranty. Users are responsible for compliance with all applicable laws and regulations. See LICENSE file for details.



## Acknowledgments

- Special thanks to all contributors and users providing feedback

### Publish New Extension Version to the Chrome Web Store

- Navigate to [Chrome Developer Dashboard.](https://chrome.google.com/webstore/devconsole)
- Click the Add new item button.

- Click Choose file > your zip file > Upload. If your item's manifest and ZIP file are valid, you can edit your item on the next page.

## Support

For issues, feature requests, or questions:
- Open an issue on [GitHub](https://github.com/Zerg00s/Live-Captions-Saver/issues)
- Check existing issues for solutions
- Provide detailed reproduction steps for bugs

---

**Version:** 4.5  
**Last Updated:** August 2025  
**Compatibility:** Chrome/Edge/Brave with Manifest V3