#!/usr/bin/env node
// One-time migration tool: reads the old client-side i18n.js translation
// table and emits Hugo content files (JSON front matter, one per language
// per page) plus hugo.toml's [languages.*] blocks. Not shipped/run in
// production — a dev-time conversion aid for the Hugo migration.
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = path.resolve(__dirname, '..');
// i18n.js was removed as part of the Hugo migration (superseded by
// content/<lang>/*.md); this script reads a copy checked out from history.
const OLD_I18N_PATH = process.env.OLD_I18N_PATH || path.join(REPO_ROOT, 'i18n.js');

function extractBalanced(source, startMarker) {
  const start = source.indexOf(startMarker);
  if (start === -1) throw new Error(`marker not found: ${startMarker}`);
  const braceStart = source.indexOf(startMarker.trim().endsWith('[') ? '[' : '{', start);
  const openChar = source[braceStart];
  const closeChar = openChar === '[' ? ']' : '}';
  let depth = 0;
  let i = braceStart;
  for (; i < source.length; i++) {
    if (source[i] === openChar) depth++;
    else if (source[i] === closeChar) {
      depth--;
      if (depth === 0) { i++; break; }
    }
  }
  return source.slice(braceStart, i);
}

const src = fs.readFileSync(OLD_I18N_PATH, 'utf8');
const langsSrc = extractBalanced(src, 'var LANGS = [');
const tSrc = extractBalanced(src, 'var T = {');

const LANGS = vm.runInNewContext(`(${langsSrc})`);
const T = vm.runInNewContext(`(${tSrc})`);

console.log(`Loaded ${LANGS.length} languages, ${Object.keys(T).length} keys.`);

function val(key, lang) {
  const entry = T[key];
  if (!entry) throw new Error(`missing key: ${key}`);
  return entry[lang] !== undefined ? entry[lang] : entry.en;
}

const PRIVACY_SECTIONS = [
  'overview', 'collection', 'analytics', 'network', 'storage', 'children', 'changes', 'contact',
];

function writeJsonFile(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

const CONTENT_DIR = path.join(REPO_ROOT, 'content');

for (const [code] of LANGS) {
  // Home page
  writeJsonFile(path.join(CONTENT_DIR, code, '_index.md'), {
    layout: 'index',
    title: val('title.index', code),
    description: val('meta.description.index', code),
    heading: val('title.about', code),
    about_desc: val('about.desc', code),
    why_link: val('about.why', code),
    footer: val('about.creator', code),
    focus_add: val('focus.add', code),
    focus_placeholder: val('focus.placeholder', code),
  });

  // Why page
  writeJsonFile(path.join(CONTENT_DIR, code, 'why.md'), {
    layout: 'why',
    title: val('title.why', code),
    description: val('meta.description.why', code),
    heading: val('why.heading', code),
    paragraphs: [1, 2, 3, 4, 5, 6].map((n) => val(`why.p${n}`, code)),
    refs_heading: val('why.refs.heading', code),
    refs_intro: val('why.refs.intro', code),
    refs_lineswith: val('why.refs.lineswith', code),
    refs_list: val('why.refs.list', code),
    refs_closing: val('why.refs.closing', code),
    footer: val('why.footer', code),
  });

  // Privacy page
  writeJsonFile(path.join(CONTENT_DIR, code, 'privacy.md'), {
    layout: 'privacy',
    title: val('title.privacy', code),
    description: val('meta.description.privacy', code),
    heading: val('privacy.title', code),
    updated: val('privacy.updated', code),
    sections: PRIVACY_SECTIONS.map((s) => ({
      heading: val(`privacy.${s}.heading`, code),
      text: val(`privacy.${s}.text`, code),
    })),
    footer: val('privacy.footer', code),
  });
}

// hugo.toml [languages.*] blocks (weight = original LANGS order, en first)
const ordered = [...LANGS].sort((a, b) => (a[0] === 'en' ? -1 : b[0] === 'en' ? 1 : 0));
let toml = '';
ordered.forEach(([code, name], i) => {
  toml += `[languages.${code}]\n  languageName = "${name}"\n  weight = ${i + 1}\n\n`;
});
const tomlPath = '/tmp/hugo-languages.toml.partial';
fs.writeFileSync(tomlPath, toml, 'utf8');

console.log(`Wrote content for ${LANGS.length} languages to ${CONTENT_DIR}`);
console.log(`Wrote ${tomlPath} (reference only — hugo.toml's [languages.*] blocks already exist)`);
