// Self-test for a built English page (served from docs/). Run in the page:
// eval(await (await fetch('/english/qtest.js')).text())  -- or paste the body.
(function () {
  const src = [...document.scripts].map(s => s.textContent).join('\n');
  const m = src.match(/\/\* ---------- QUIZ \(english\) ---------- \*\/\s*\(function\(\)\{([\s\S]*?)\n\s*\/\* MCQ:/);
  const D = new Function(m[1] + ';return {MCQ,FILL,WRITE};')();
  const $ = id => document.getElementById(id);
  const score = () => $('scorenum').textContent;
  const fails = [];
  D.MCQ.forEach((q, i) => { if (q.a < 0 || q.a >= q.o.length) fails.push('MCQ' + i + ' bad index'); });
  D.WRITE.forEach((w, i) => { if (w.k) w.k.forEach(g => { if (!g.all.every(r => r.test(w.model.toLowerCase()))) fails.push('WRITE' + i + ' model misses: ' + g.l); }); });
  D.MCQ.forEach((q, i) => $('mcq' + i + '_' + q.a).checked = true);
  D.FILL.forEach((q, i) => $('fillans' + i).value = q.a[0].toUpperCase());
  D.WRITE.forEach((w, i) => $('wrans' + i).value = w.k ? w.model : w.a[0]);
  $('submit').click(); const full = score();
  $('reset').click();
  D.FILL.forEach((q, i) => $('fillans' + i).value = 'zzz');
  D.WRITE.forEach((w, i) => $('wrans' + i).value = 'I do not know.');
  $('submit').click(); const junk = score();
  $('reset').click();
  const W = document.documentElement.clientWidth;
  const wide = document.documentElement.scrollWidth > W + 1;
  const missing = [...document.querySelectorAll('#chips a')].map(a => a.getAttribute('href')).filter(h => !document.querySelector(h));
  return { page: document.title, full, junk, fails, missing, wide, chips: document.querySelectorAll('#chips a:not(.quizchip)').length, secs: new Set([...document.querySelectorAll('input[data-sec]')].map(x => x.dataset.sec)).size };
})()
