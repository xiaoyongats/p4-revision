"""One-off: derive the math template from the science template (same look, numeric-answer quiz engine).

Run from the p4 folder:  python math/learning-points/build/make_template.py
"""
import io
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
src = os.path.join(ROOT, 'science', 'learning-points', 'build', 'template.html')
dst = os.path.join(ROOT, 'math', 'learning-points', 'build', 'template.html')
here = os.path.dirname(os.path.abspath(__file__))

t = io.open(src, encoding='utf-8').read()

# 1. swap the quiz section markup
qs = t.index('  <!-- QUIZ -->')
qe = t.index('</section>', qs) + len('</section>')
quiz_html = io.open(os.path.join(here, 'parts', 'quiz.html'), encoding='utf-8').read().rstrip('\n')
t = t[:qs] + quiz_html + t[qe:]

# 2. swap the quiz engine (science has {{QUIZ}} just before the engine block)
qp = t.index('/* ---------- QUIZ ---------- */')
ee = t.index('</script>', qp)
engine = io.open(os.path.join(here, 'parts', 'engine.js'), encoding='utf-8').read()
t = t[:qp] + engine + t[ee:]

# 3. extra CSS for answer boxes, worked examples and bar models
css = io.open(os.path.join(here, 'parts', 'extra.css'), encoding='utf-8').read()
t = t.replace('/* quiz */', css + '/* quiz */', 1)
t = t.replace('Colour is meaning on every page: blue = water/cold, orange = food/heat, green = living/correct, brown = soil/solid, red = watch out.',
              'Colour is meaning on every page: blue = method/working, orange = answer, green = correct, red = watch out.')

# 4. fraction shorthand: [[7/12]] or [[1 2/9]] becomes a stacked fraction (runs before the progress script binds)
CONVERTER = io.open(os.path.join(here, 'parts', 'frac.js'), encoding='utf-8').read()
t = t.replace('<script>\n', '<script>\n' + CONVERTER, 1)

assert t.count('{{QUIZ}}') == 1, t.count('{{QUIZ}}')
io.open(dst, 'w', encoding='utf-8', newline='\n').write(t)
print('wrote', dst, len(t))
