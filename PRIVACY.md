# Better CaptionKeep Privacy Policy

Effective date: September 9, 2026

Better CaptionKeep, by Señor Farris, is an independent Microsoft Edge extension for capturing, reviewing, and exporting live captions from Microsoft Teams. This policy describes the Better CaptionKeep fork, including its optional AI handoff features.

## Information the extension handles

The extension reads displayed Teams captions, speaker names, meeting titles, and timestamps. When attendee tracking is enabled, it also reads participant names, roles, and observed join/leave information. Meeting text may contain personal or sensitive information depending on what participants say. The extension reads captions from the Teams page; it does not record microphone audio or video.

It also handles user preferences, such as capture settings, export format, filename patterns, save locations, and selected AI providers. Optional provider organization identifiers and temporary speaker aliases are handled when entered by the user.

## Storage and use

Meeting information is used to capture and display transcripts, maintain saved sessions, and create exports. Saved transcripts and meeting information are stored in the extension's local browser storage. Temporary speaker aliases use browser session storage. Preferences use the browser's extension sync storage and may be synchronized by Microsoft according to the user's Edge account and sync settings.

Exported files are saved to a location controlled by the user and browser. A selected folder may itself be synchronized or backed up by other software. Copying a transcript places it on the system clipboard, which may be accessible to other applications or clipboard synchronization features.

The extension does not operate a developer-hosted transcript collection service. Its code does not include advertising or analytics reporting to the developer. Diagnostic browser-console messages may contain meeting titles or participant details; review and redact logs before sharing them.

## Optional AI handoffs

If the user enables automatic AI summaries and selects providers, the extension can open provider websites with a prompt containing meeting transcript information after a meeting ends. Supported destinations include ChatGPT (OpenAI), Claude and Claude Console (Anthropic), and Gemini (Google).

The prompt is placed in the destination URL's query parameters. Opening that URL transmits the included text to the selected provider, even before the user submits anything further on its website. URLs may also appear in browser history and provider or network logs. Provider terms and privacy policies govern their handling and retention of this information.

AI handoffs are optional. Keep the automatic AI summary setting disabled if you do not want transcript information sent this way. Disabling it does not delete information already sent. Browser-synchronized preferences may carry an enabled setting to another installation.

## Sharing and limited use

The developer does not sell user data, use it for advertising, or use it to determine creditworthiness or for lending. The extension uses meeting data only to provide its meeting-caption capture, review, export, and optional summary functions. Transfers occur through user-directed exports, clipboard actions, browser preference synchronization, and enabled AI handoffs as described above.

The use of user data is limited to providing or improving the extension's single purpose in accordance with the Microsoft Edge Add-ons Developer Policies. This policy does not authorize unrelated use or sale of meeting information.

## Retention and controls

Saved-session history is managed in local browser storage. The current implementation limits session history to ten sessions and may remove older sessions when limits are reached. This limit does not mean all temporary or recovery data is immediately removed.

Users can delete individual saved sessions or use Clear All in session history. These controls do not delete exported files, clipboard contents, browser history, synchronized preferences, or data already transmitted to AI providers. Manage those copies through the applicable browser, operating-system, storage-service, or provider controls. Uninstalling the extension removes its local extension storage through the browser; separately manage synchronized settings and copies outside the extension.

## Meeting participation and security

Use the extension in accordance with applicable meeting rules and participant permissions. Enable only the features you need and avoid sending confidential meeting information to third-party services unless authorized. Local storage and exports are not protected by a separate encryption system supplied by this extension; protect your browser profile and device appropriately.

## Contact and changes

For privacy questions, contact the maintainer through [the project's GitHub issues](https://github.com/Mr-GraphnStaff/better-captionkeep/issues). Issues are public: do not include transcripts, personal information, or other sensitive content. Ask for a suitable private contact method if your question requires sharing confidential details.

This policy will be updated when relevant practices change. The effective date above identifies the current version; changes are visible in the repository history.

Better CaptionKeep is an independent fork of Live-Captions-Saver by Denis Molodtsov. It is not affiliated with or endorsed by Microsoft or the AI providers named above. This policy supersedes the inherited privacy statement for the Better CaptionKeep fork.
