const id = new URL(location.href).searchParams.get('id');
const promptBox = document.getElementById('prompt');
const statusBox = document.getElementById('status');
const providersBox = document.getElementById('providers');

document.getElementById('copy').onclick = async () => {
    try {
        await navigator.clipboard.writeText(promptBox.value);
        statusBox.textContent = 'Copied. Paste only into a workspace authorized for this meeting.';
    } catch (error) {
        statusBox.textContent = `Copy failed: ${error.message}`;
    }
};

document.getElementById('discard').onclick = async () => {
    await chrome.storage.local.remove(id);
    promptBox.value = '';
    statusBox.textContent = 'Handoff discarded.';
};

function renderProvider(providerKey, settings) {
    const destination = CaptionKeepDestinations.resolve(providerKey, settings);
    if (!destination) return;

    const card = document.createElement('article');
    card.className = 'provider-card';
    const heading = document.createElement('h3');
    heading.textContent = destination.name;
    const detail = document.createElement('p');
    if (destination.configured) {
        detail.textContent = `Saved enterprise destination · ${new URL(destination.url).hostname}`;
    } else if (destination.requiresWorkspaceConfirmation) {
        detail.textContent = 'No enterprise destination saved · choose the correct workspace after opening';
    } else {
        detail.textContent = new URL(destination.url).hostname;
    }

    const link = document.createElement('a');
    link.className = 'provider-link';
    link.textContent = destination.configured ? 'Open saved workspace' : `Open ${destination.name}`;
    link.href = destination.url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.addEventListener('click', () => {
        statusBox.textContent = `Opened ${destination.name}. Confirm the active workspace before pasting.`;
    });
    card.append(heading, detail, link);
    providersBox.append(card);
}

(async () => {
    try {
        if (!id?.startsWith('handoff_')) throw new Error('No handoff selected');
        const data = (await chrome.storage.local.get(id))[id];
        if (!data) throw new Error('This handoff is no longer available');
        const scrubbed = CaptionKeepPrivacyScrubber.scrub(data.prompt);
        promptBox.value = scrubbed.text;
        statusBox.textContent = scrubbed.replacements.length
            ? `Scrubby masked ${scrubbed.replacements.length} sensitive detail${scrubbed.replacements.length === 1 ? '' : 's'} locally. Review the cleaned copy before sharing.`
            : 'Scrubby found no supported sensitive-data patterns. Review the cleaned copy before sharing.';
        const settings = await chrome.storage.sync.get(['chatgptWorkspaceUrl', 'claudeWorkspaceUrl', 'claudeConsoleUrl']);
        for (const provider of data.providers) renderProvider(provider, settings);
        // Page memory holds the editable prompt; remove the temporary durable copy after loading.
        await chrome.storage.local.remove(id);
    } catch (error) {
        statusBox.textContent = error.message;
    }
})();
