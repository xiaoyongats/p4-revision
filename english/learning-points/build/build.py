"""Build the topic pages from template.html + content/*.html.

Run from the learning-points folder:
    python build/build.py            # build every topic
    python build/build.py magnets    # build topics whose file name contains "magnets"

Each content file has three parts:
    <!--meta ... -->   title, eyebrow, h1, lead, key, tf_intro, chips (id=Label|id=Label)
    <!--body-->        the learning-point sections (ids must match the chips)
    <!--quiz-->        var MCQ=[...]; var TF=[...]; var OE=[...];
"""
import glob
import io
import os
import re
import sys

here = os.path.dirname(os.path.abspath(__file__))
tpl = io.open(os.path.join(here, 'template.html'), encoding='utf-8').read()
only = sys.argv[1:]

for f in sorted(glob.glob(os.path.join(here, 'content', '*.html'))):
    name = os.path.basename(f)
    if only and not any(o in name for o in only):
        continue
    src = io.open(f, encoding='utf-8').read()
    meta_s = re.search(r'<!--meta\n(.*?)\n-->', src, re.S).group(1)
    meta = {}
    for line in meta_s.split('\n'):
        k, v = line.split(':', 1)
        meta[k.strip()] = v.strip()
    body = src.split('<!--body-->', 1)[1].split('<!--quiz-->', 1)[0].strip('\n')
    quiz = src.split('<!--quiz-->', 1)[1].strip('\n')
    chips = '\n'.join('      <a href="#%s">%s</a>' % tuple(c.split('=', 1)) for c in meta['chips'].split('|'))
    out = tpl
    for k, v in {'TITLE': meta['title'], 'EYEBROW': meta['eyebrow'], 'H1': meta['h1'],
                 'LEAD': meta['lead'], 'KEY': meta['key'], 'TF_INTRO': meta.get('tf_intro',''),
                 'CHIPS': chips, 'BODY': body, 'QUIZ': quiz}.items():
        out = out.replace('{{' + k + '}}', v)
    assert '{{' not in out, name
    io.open(os.path.join(here, '..', name), 'w', encoding='utf-8', newline='\n').write(out)
    print('built', name)
