#!/usr/bin/env python3
"""Build the Frequent Chant web app from this vault and the Greekquent web shell.

usage: python3 tools/build_web.py GREEKQUENT_SHELL OUT
Runs the psaltiki plugin unchanged in the shell's Obsidian stand-in. Own storage (psq:), own cache, private hosting.
"""
import hashlib, json, os, re, shutil, sys
shell, out = sys.argv[1:3]
src = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLUG = '.obsidian/plugins/psaltiki'
if os.path.exists(out): shutil.rmtree(out)
os.makedirs(out)
notes, static = {}, []
for root, dirs, files in os.walk(src):
    dirs[:] = [d for d in dirs if not d.startswith('.') or d == '.obsidian']
    if os.path.relpath(root, src).startswith('tools'): continue
    for f in files:
        p = os.path.relpath(os.path.join(root, f), src).replace(os.sep, '/')
        if p.startswith('.obsidian/') and not p.startswith(PLUG + '/'): continue
        if p.endswith('.md'): notes[p] = open(os.path.join(root, f), encoding='utf-8').read(); continue
        if p.startswith('.') and not p.startswith('.obsidian/'): continue
        static.append(p); d = os.path.join(out, 'vault', p); os.makedirs(os.path.dirname(d), exist_ok=True); shutil.copy2(os.path.join(root, f), d)
# Scores and recordings stay out of git (copied from the free Margaziotis PDF). When they are missing,
# link each score to its page of the monastery's PDF, which carries the recordings.
PDF = 'https://music.samonastery.org/Margaziotis.pdf'
have = {p.rsplit('/', 1)[-1] for p in static}
def emb(m):
    name = m.group(1)
    if name in have: return m.group(0)
    pg = re.match(r'WB p(\d+)\.png$', name)
    if pg: n = int(pg.group(1)); return f'[Open the score, page {n} of the workbook PDF]({PDF}#page={n})'
    if re.match(r'WB .*\.mp3$', name): return '*Play it from the speaker icon on the score page in the PDF.*'
    return m.group(0)
for k in notes:
    if k.startswith('Workbook/'): notes[k] = re.sub(r'!\[\[([^\]|]+)(?:\|[^\]]*)?\]\]', emb, notes[k])
# Obsidian-only help on the web
notes['Home.md'] = re.sub(r"> \[!tip\] Don't see buttons below\?\n(>.*\n)+\n", '', notes['Home.md'])
js = open(os.path.join(src, PLUG, 'main.js'), encoding='utf-8').read()
blob = json.dumps({'notes': notes, 'static': sorted(static)}, ensure_ascii=False, separators=(',', ':'))
hh = hashlib.sha256((blob + js).encode())
for x in sorted(os.listdir(shell)): hh.update(x.encode()); hh.update(open(os.path.join(shell, x), 'rb').read())
ver = 'psq-' + hh.hexdigest()[:8]
open(os.path.join(out, 'notes.json'), 'w', encoding='utf-8').write(blob)
json.dump({'version': ver}, open(os.path.join(out, 'version.json'), 'w'))
os.makedirs(os.path.join(out, 'lib'))
EXTRA = r"""
// ---------- Settings (Frequent Chant) ----------
class PluginSettingTab { constructor(app, plugin) { this.app = app; this.plugin = plugin; this.containerEl = createDiv(); } display() {} hide() {} }
class Setting {
  constructor(el) { this.settingEl = el.createDiv('setting-item'); const i = this.settingEl.createDiv('setting-item-info'); this.nameEl = i.createDiv('setting-item-name'); this.descEl = i.createDiv('setting-item-description'); this.controlEl = this.settingEl.createDiv('setting-item-control'); }
  setName(t) { this.nameEl.setText(t); return this; } setDesc(t) { this.descEl.setText(t); return this; }
  addText(cb) { const i = this.controlEl.createEl('input', { type: 'text' }); const c = { inputEl: i, setValue(v) { i.value = v; return c; }, getValue() { return i.value; }, setPlaceholder(p) { i.placeholder = p; return c; }, onChange(f) { i.addEventListener('input', () => f(i.value)); return c; } }; cb(c); return this; }
  addButton(cb) { const b = this.controlEl.createEl('button'); const c = { buttonEl: b, setButtonText(t) { b.textContent = t; return c; }, setCta() { b.classList.add('mod-cta'); return c; }, setWarning() { b.classList.add('mod-warning'); return c; }, onClick(f) { b.onclick = f; return c; } }; cb(c); return this; }
}
"""
def fix(t, f):
    t = t.replace('Greekquent™ and Frequent™', '@@TM@@')
    t = t.replace('Greekquent Beginner', 'Frequent Chant').replace('Greekquent', 'Frequent Chant').replace('@@TM@@', 'Greekquent™ and Frequent™')
    t = t.replace("'gqw:", "'psq:").replace("'gqw-", "'psq-").replace('greekquent-beginner-', 'frequent-chant-')
    t = t.replace('greekquent-student-layout', 'psaltiki').replace('Θα τα πούμε.', 'Ψαλτική')
    t = t.replace('can clear your colors and φόρα after a week away', 'can clear your progress after a week away')
    t = t.replace("Greek through the most frequent words, five a day, with games and real scenes.", 'Byzantine music reading, fifteen minutes a day: drone, tuner, review and a 48-week plan.')
    if f == 'shim.js':
        t = t.replace('// ---------- Plugin base ----------', EXTRA + '\n// ---------- Plugin base ----------')
        t = t.replace('const obsidian = { Plugin,', 'const obsidian = { PluginSettingTab, Setting, Plugin,')
        t = t.replace('addSettingTab() {}', 'addSettingTab(t) { G.settingTab = t; }')
    if f == 'app.js':
        # A More button: Home, Settings, and the backup pair.
        t = t.replace("  const nav = $('#gq-nav');", """  G.ribbon.push({ icon: 'more-horizontal', title: 'More', el: createDiv(), cb: () => {
    const M = new (window.GQW_obs.Menu)();
    M.addItem(i => i.setTitle('Home').onClick(() => G.app.workspace.openLinkText('Home', '', false)));
    M.addItem(i => i.setTitle('Settings').onClick(() => { const st = G.settingTab; if (!st) return; const m = new (G.ModalClass)(G.app); m.titleEl.setText('Settings'); st.containerEl = m.contentEl; st.display(); m.open(); }));
    M.addItem(i => i.setTitle('Save a copy of my work').onClick(() => G.backup()));
    M.addItem(i => i.setTitle('Restore my work').onClick(() => G.restore()));
    if (!G.home) M.addItem(i => i.setTitle('Put it on my home screen').onClick(() => installHelp()));
    M.show(); } });
  const nav = $('#gq-nav');""")
    if f == 'index.html':
        t = t.replace('__V__', ver).replace('<head>', '<head>\n<meta name="robots" content="noindex, nofollow">', 1)
    if f == 'sw.js': t = t.replace("'frequent-chant-v1'", "'frequent-chant-" + ver + "'")
    return t
for f in os.listdir(shell):
    s = os.path.join(shell, f)
    if f in ('js-yaml.min.js', 'marked.umd.js'): shutil.copy2(s, os.path.join(out, 'lib', f)); continue
    if f.startswith('icon'): continue
    if not f.endswith(('.html', '.js', '.css', '.webmanifest')): shutil.copy2(s, os.path.join(out, f)); continue
    open(os.path.join(out, f), 'w', encoding='utf-8').write(fix(open(s, encoding='utf-8').read(), f))
for f in os.listdir(os.path.join(src, 'tools', 'icons')): shutil.copy2(os.path.join(src, 'tools', 'icons', f), os.path.join(out, f))
print('frequent-chant:', len(notes), 'notes, version', ver)
