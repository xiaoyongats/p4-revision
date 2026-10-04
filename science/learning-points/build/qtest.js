// Self-test for a built topic page. Run in the page: eval(await (await fetch('/build/qtest.js')).text())
(function () {
  const src = [...document.scripts].map(s => s.textContent).join('\n');
  const m = src.match(/var MCQ=[\s\S]*?(?=\n\s*var letters)/);
  const D = new Function(m[0] + ';return {MCQ,TF,OE};')();
  const $ = id => document.getElementById(id);
  const score = () => $('scorenum').textContent;
  const fails = [];
  // model answers must earn every keyword
  D.OE.forEach((o, i) => o.k.forEach(g => { if (!g.all.every(r => r.test(o.model.toLowerCase()))) fails.push('OE' + i + ' model misses: ' + g.l); }));
  // MCQ answer index in range
  D.MCQ.forEach((q, i) => { if (q.a < 0 || q.a >= q.o.length) fails.push('MCQ' + i + ' bad answer index'); });
  // full marks
  D.MCQ.forEach((q, i) => $('mcq' + i + '_' + q.a).checked = true);
  D.TF.forEach((t, i) => $('tf' + i + (t.a ? 'True' : 'False')).checked = true);
  D.OE.forEach((o, i) => $('oeans' + i).value = o.model);
  $('submit').click();
  const full = score();
  // junk answers
  $('reset').click();
  D.OE.forEach((o, i) => $('oeans' + i).value = 'i do not know the answer to this question because it is hard');
  $('submit').click();
  const junk = score();
  $('reset').click();
  const chips = document.querySelectorAll('#chips a:not(.quizchip)').length;
  const secs = document.querySelectorAll('input[data-sec]').length;
  const missing = [...document.querySelectorAll('#chips a')].map(a => a.getAttribute('href')).filter(h => !document.querySelector(h));
  const W = document.documentElement.clientWidth;
  const wide = document.documentElement.scrollWidth > W + 1 ? [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > W + 1 && !e.closest('.chips,.tbl-wrap,.chart')).slice(0, 5).map(e => e.tagName + '.' + e.className) : false;
  return { W, page: document.title, full, junk, fails, chips, secs, missing, wide };
})()
