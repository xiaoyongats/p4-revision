"""Build the static revision web app into docs/ (no server needed).

Run from the p4 folder:
    python tools/build_app.py

It takes the topic pages already built in science/learning-points/ and
math/learning-points/, turns each into a full standalone HTML page with
"All topics" / previous / next navigation, and writes docs/index.html
(home page with progress read from the browser's localStorage).

Open docs/index.html directly, or publish docs/ with GitHub Pages
(Settings → Pages → Deploy from a branch → folder /docs).
"""
import glob
import html
import io
import json
import os
import re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'docs')

SUBJECTS = [
    {'id': 'science', 'name': 'Science', 'src': 'science/learning-points',
     'blurb': 'P4 topics plus the P3 topics that are tested in the P4 exam.'},
    {'id': 'math', 'name': 'Math', 'src': 'math/learning-points',
     'blurb': 'Numbers, fractions, decimals, measurement, geometry, data and problem sums.'},
]

HEAD = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
'''

NAV_CSS = '''<style>
.appnav{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-block:14px 0;font-weight:800;font-size:.95rem}
.appnav a{color:var(--water);text-decoration:none}
.appnav a:hover,.appnav a:focus-visible{text-decoration:underline}
.appnav .subj{color:var(--muted);font-size:.8rem;letter-spacing:.12em;text-transform:uppercase}
.pager{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-block:24px 8px}
.pager a{display:grid;gap:2px;text-decoration:none;color:var(--fg);background:var(--card);border:2px solid var(--line);border-radius:14px;padding:12px 14px;min-width:0}
.pager a:hover,.pager a:focus-visible{border-color:var(--water);outline:none}
.pager a.next{text-align:right;grid-column:2}
.pager small{color:var(--muted);font-weight:800;font-size:.8rem}
.pager b{font-family:var(--font-display);font-size:1.05rem}
</style>
'''


def topic_info(path):
    src = io.open(path, encoding='utf-8').read()
    title = re.search(r'<title>(.*?)</title>', src).group(1)
    h1 = re.search(r'<h1>(.*?)</h1>', src).group(1)
    eyebrow = re.search(r'<span class="eyebrow">(.*?)</span>', src).group(1)
    key = re.search(r"var KEY='(.*?)-done'", src).group(1)
    sections = len(set(re.findall(r'data-sec="([^"]+)"', src)))
    return {'file': os.path.basename(path), 'title': title, 'h1': h1, 'eyebrow': eyebrow,
            'key': key, 'sections': sections, 'src': src}


def wrap_page(t, subject, prev_t, next_t):
    src = t['src']
    cut = src.index('</style>') + len('</style>')
    head, body = src[:cut], src[cut:]
    # drop the page's own meta lines (HEAD already has them)
    head = re.sub(r'<meta charset="utf-8">\n?|<meta name="viewport"[^>]*>\n?', '', head)
    nav = ('\n  <nav class="appnav" aria-label="App">'
           '<a href="../index.html#%s">← All topics</a><span class="subj">%s</span></nav>'
           % (subject['id'], subject['name']))
    body = body.replace('<div class="wrap">', '<div class="wrap">' + nav, 1)
    links = ''
    if prev_t:
        links += '<a class="prev" href="%s"><small>← Previous</small><b>%s</b></a>' % (prev_t['file'], html.escape(prev_t['h1']))
    if next_t:
        links += '<a class="next" href="%s"><small>Next →</small><b>%s</b></a>' % (next_t['file'], html.escape(next_t['h1']))
    pager = '\n<div class="wrap"><nav class="pager" aria-label="Topics">%s</nav></div>\n' % links
    i = body.rindex('<script>')
    body = body[:i] + pager + body[i:]
    return HEAD + head + '\n' + NAV_CSS + '</head>\n<body>\n' + body.strip('\n') + '\n</body>\n</html>\n'


def main():
    data = []
    for s in SUBJECTS:
        files = sorted(glob.glob(os.path.join(ROOT, s['src'], '[0-9][0-9]-*.html')))
        topics = [topic_info(f) for f in files]
        outdir = os.path.join(OUT, s['id'])
        os.makedirs(outdir, exist_ok=True)
        for old in glob.glob(os.path.join(outdir, '*.html')):
            os.remove(old)
        for i, t in enumerate(topics):
            page = wrap_page(t, s, topics[i - 1] if i else None, topics[i + 1] if i + 1 < len(topics) else None)
            io.open(os.path.join(outdir, t['file']), 'w', encoding='utf-8', newline='\n').write(page)
        data.append({'id': s['id'], 'name': s['name'], 'blurb': s['blurb'],
                     'topics': [{k: t[k] for k in ('file', 'h1', 'eyebrow', 'key', 'sections')} for t in topics]})
        print('%s: %d topics' % (s['id'], len(topics)))
    home = io.open(os.path.join(ROOT, 'tools', 'home.html'), encoding='utf-8').read()
    home = home.replace('/*DATA*/null', json.dumps(data, ensure_ascii=False))
    io.open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8', newline='\n').write(home)
    io.open(os.path.join(OUT, '.nojekyll'), 'w').write('')
    print('wrote docs/index.html')


if __name__ == '__main__':
    main()
