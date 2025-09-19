import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(projectRoot, 'teams-captions-saver');

const manifestPath = path.join(sourceDir, 'manifest.json');

function formatList(items) {
  return items.map(item => `- ${item}`).join('\n');
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function validateManifest(manifest) {
  const errors = [];
  const warnings = [];

  if (manifest.manifest_version !== 3) {
    errors.push('manifest_version must be set to 3.');
  }

  if (!manifest.name) {
    errors.push('Extension name is missing in manifest.');
  }

  if (!manifest.version) {
    warnings.push('Extension version is missing in manifest.');
  }

  const requiredPermissions = ['downloads', 'storage'];
  const permissions = manifest.permissions ?? [];
  for (const permission of requiredPermissions) {
    if (!permissions.includes(permission)) {
      errors.push(`Required permission "${permission}" is missing.`);
    }
  }

  const hostPermissions = manifest.host_permissions ?? [];
  if (!hostPermissions.includes('https://teams.microsoft.com/*')) {
    warnings.push('Host permissions should include "https://teams.microsoft.com/*".');
  }

  const backgroundWorker = manifest.background?.service_worker;
  if (!backgroundWorker) {
    errors.push('background.service_worker is not defined.');
  } else if (!(await fileExists(path.join(sourceDir, backgroundWorker)))) {
    errors.push(`Background service worker file "${backgroundWorker}" is missing.`);
  }

  const defaultPopup = manifest.action?.default_popup;
  if (defaultPopup && !(await fileExists(path.join(sourceDir, defaultPopup)))) {
    errors.push(`Action popup file "${defaultPopup}" is missing.`);
  }

  const defaultIcon = manifest.action?.default_icon;
  if (defaultIcon && !(await fileExists(path.join(sourceDir, defaultIcon)))) {
    errors.push(`Action icon "${defaultIcon}" is missing.`);
  }

  const icons = manifest.icons ?? {};
  for (const [size, iconPath] of Object.entries(icons)) {
    if (!(await fileExists(path.join(sourceDir, iconPath)))) {
      errors.push(`Icon for size ${size}px is missing at path "${iconPath}".`);
    }
  }

  const scriptsToCheck = new Set([
    'content_script.js',
    'popup.html',
    'popup.js',
    'service_worker.js',
    'sessionManager.js',
    'viewer.html',
    'viewer.js'
  ]);

  for (const script of scriptsToCheck) {
    if (!(await fileExists(path.join(sourceDir, script)))) {
      errors.push(`Expected file "${script}" was not found in the extension directory.`);
    }
  }

  const declaredContentScripts = (manifest.content_scripts ?? []).flatMap(entry => entry.js ?? []);
  for (const script of declaredContentScripts) {
    if (!scriptsToCheck.has(script) && !(await fileExists(path.join(sourceDir, script)))) {
      warnings.push(`Content script "${script}" declared in manifest is missing.`);
    }
  }

  const webAccessibleResources = (manifest.web_accessible_resources ?? []).flatMap(entry => entry.resources ?? []);
  for (const resource of ['viewer.html', 'viewer.js', 'sessionManager.js']) {
    if (!webAccessibleResources.includes(resource)) {
      warnings.push(`Resource "${resource}" is not listed in web_accessible_resources.`);
    }
  }

  return { errors, warnings };
}

async function main() {
  let manifestRaw;
  try {
    manifestRaw = await readFile(manifestPath, 'utf8');
  } catch (error) {
    console.error(`Unable to read manifest.json: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  let manifest;
  try {
    manifest = JSON.parse(manifestRaw);
  } catch (error) {
    console.error(`manifest.json is not valid JSON: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const { errors, warnings } = await validateManifest(manifest);

  if (errors.length > 0) {
    console.error('Extension validation failed:');
    console.error(formatList(errors));
    process.exitCode = 1;
  } else {
    console.log('Extension validation passed.');
  }

  if (warnings.length > 0) {
    console.warn('\nWarnings:');
    console.warn(formatList(warnings));
  }
}

main().catch(error => {
  console.error(`Unexpected error during validation: ${error.message}`);
  process.exitCode = 1;
});
