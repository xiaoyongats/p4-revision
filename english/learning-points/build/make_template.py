"""Derive the English template from the science template (same look and answer-saving),
with the English quiz engine (choose / fill in / write).

Run from the p4 folder:  python english/learning-points/build/make_template.py
"""
import io
import os

here = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(here, '..', '..', '..'))
src = os.path.join(ROOT, 'science', 'learning-points', 'build', 'template.html')
dst = os.path.join(here, 'template.html')
t = io.open(src, encoding='utf-8').read()

# quiz markup
qs = t.index('  <!-- QUIZ -->')
qe = t.index('</section>', qs) + len('</section>')
t = t[:qs] + io.open(os.path.join(here, 'parts', 'quiz.html'), encoding='utf-8').read().rstrip('\n') + t[qe:]

# quiz engine: replace the science engine, keep the shared SAVE ANSWERS block after it
a = t.index('/* ---------- QUIZ ---------- */')
b = t.index('/* ---------- SAVE ANSWERS')
t = t[:a] + io.open(os.path.join(here, 'parts', 'engine.js'), encoding='utf-8').read() + t[b:]

# extra CSS: math answer boxes + english passage boxes
css = io.open(os.path.join(ROOT, 'math', 'learning-points', 'build', 'parts', 'extra.css'), encoding='utf-8').read()
css += io.open(os.path.join(here, 'parts', 'extra.css'), encoding='utf-8').read()
t = t.replace('/* quiz */', css + '/* quiz */', 1)
t = t.replace('Colour is meaning on every page: blue = water/cold, orange = food/heat, green = living/correct, brown = soil/solid, red = watch out.',
              'Colour is meaning on every page: blue = rule/method, orange = answer or key word, green = correct, red = watch out.')
assert t.count('{{QUIZ}}') == 1
io.open(dst, 'w', encoding='utf-8', newline='\n').write(t)
print('wrote', dst, len(t))
