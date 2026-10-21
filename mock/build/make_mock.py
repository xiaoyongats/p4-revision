"""Build the mock exam papers from the science template look + the mock paper engine.

Run from the p4 folder:
    python mock/build/make_mock.py

Each paper in mock/build/papers/*.js starts with a meta comment block:
    /*meta
    title: ...
    eyebrow: ...
    h1: ...
    lead: ...
    key: ...
    sub: short line for the home card, e.g. 1 h 45 min · 100 marks
    intro: file in parts/ shown above the questions
    quiz_lead: one line above Booklet A
    */
followed by   var CFG={...}; var TOPICS={...}; var A=[...]; var B=[...];  (see parts/engine.js)
Output: mock/NN-name.html (picked up by tools/build_app.py as the "Mock Papers" tab).
"""
import glob
import io
import os
import re

here = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(here, '..', '..'))
t = io.open(os.path.join(ROOT, 'science', 'learning-points', 'build', 'template.html'), encoding='utf-8').read()


def part(name):
    return io.open(os.path.join(here, 'parts', name), encoding='utf-8').read()


# no section chips / progress bar on a mock paper: replace with the timer bar
a = t.index('  <nav class="bar"')
b = t.index('</nav>', a) + len('</nav>')
t = t[:a] + part('timer.html').rstrip('\n') + t[b:]

# quiz markup
qs = t.index('  <!-- QUIZ -->')
qe = t.index('</section>', qs) + len('</section>')
t = t[:qs] + part('quiz.html').rstrip('\n') + t[qe:]

# scripts: drop the "I got this" progress script and the science engine, keep SAVE ANSWERS
a = t.index('<script>') + len('<script>\n')
b = t.index('/* ---------- SAVE ANSWERS')
t = t[:a] + part('engine.js') + t[b:]

css = io.open(os.path.join(ROOT, 'math', 'learning-points', 'build', 'parts', 'extra.css'), encoding='utf-8').read()
css += part('extra.css')
t = t.replace('/* quiz */', css + '/* quiz */', 1)
t = t.replace('Colour is meaning on every page: blue = water/cold, orange = food/heat, green = living/correct, brown = soil/solid, red = watch out.',
              'Mock exam paper: Booklet A (choose), Booklet B (write), timer at the top, marked by key ideas like the real exam.')

for f in sorted(glob.glob(os.path.join(here, 'papers', '[0-9]*.js'))):
    src = io.open(f, encoding='utf-8').read()
    meta = {}
    for line in re.search(r'/\*meta\n(.*?)\n\*/', src, re.S).group(1).split('\n'):
        k, v = line.split(':', 1)
        meta[k.strip()] = v.strip()
    quiz = src.split('*/', 1)[1].strip('\n')
    for inc in meta.get('include', '').split():
        # shared helpers (e.g. papers/_math.js) are pasted in front of the paper's own code
        quiz = io.open(os.path.join(here, 'papers', inc), encoding='utf-8').read().strip('\n') + '\n' + quiz
    out = t
    for k, v in {'TITLE': meta['title'], 'EYEBROW': meta['eyebrow'], 'H1': meta['h1'], 'LEAD': meta['lead'],
                 'KEY': meta['key'], 'SUB': meta['sub'], 'QUIZ_LEAD': meta['quiz_lead'],
                 'BODY': part(meta['intro']).rstrip('\n'), 'QUIZ': quiz}.items():
        out = out.replace('{{' + k + '}}', v)
    assert '{{' not in out, f
    name = os.path.splitext(os.path.basename(f))[0] + '.html'
    io.open(os.path.join(ROOT, 'mock', name), 'w', encoding='utf-8', newline='\n').write(out)
    print('built mock/' + name)
