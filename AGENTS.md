# AGENTS.md

This document describes requirements and expectations for AI coding assistance on this project (Live-Captions-Saver fork).

## Project Overview
A fork of [Zerg00s/Live-Captions-Saver](https://github.com/Zerg00s/Live-Captions-Saver), extending functionality for Teams PWA users.  
The fork begins with a **Save As (choose download location)** feature and will expand into lightweight, customizable features.

## Tech Stack
- **JavaScript (ES6+)**: Core extension logic, exports, event handlers.
- **HTML/CSS**: Popup, options, transcript viewer UI.
- **Chrome Extensions API (Manifest V3)**: Storage, downloads, permissions.
- **Optional**: Node.js for scripts/tests if added later.

## Requirements for AI Agents
1. **Code Style**
   - Follow ES6 standards.
   - Keep functions small and focused.
   - Prefer async/await over callbacks.

2. **Extension Context**
   - Target **Manifest V3** (no V2).
   - Use `chrome.scripting`, `chrome.storage`, `chrome.downloads`.
   - Must work in **Teams PWA** inside Chromium browsers.

3. **New Features Roadmap**
   - `saveAs` dialog for exports (first change).
   - Custom filename patterns and export formats.
   - Lightweight mode (disable AI/analytics features).
   - UI refinements for PWA usage.

4. **Testing**
   - Must be testable by loading unpacked extension into Chrome/Edge/Brave.
   - Console logging for debug.
   - No external server dependencies.

5. **Documentation**
   - Update `README.md` after major changes.
   - Comment code blocks for clarity.
   - Track agent-generated changes in commit messages.

## Expectations
- Suggestions must include **file and function name** for edits.
- All changes should preserve extension stability.
- Legal notice: MIT license from upstream must remain intact.
