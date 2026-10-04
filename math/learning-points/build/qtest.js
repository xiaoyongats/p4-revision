// Self-test for a built math page. Run in the page: eval(await (await fetch('/math/learning-points/build/qtest.js')).text())
(function () {
  const src = [...document.scripts].map(s => s.textContent).join('\n');
  const m = src.match(/\/\* ---------- QUIZ \(math\) ---------- \*\/\s*\(function\(\)\{([\s\S]*?)\n\s*var letters/);
  const D = new Function(m[1] + ';return {MCQ,SA,PS};')();
  const $ = id => document.getElementById(id);
  const score = () => $('scorenum').textContent;
  const fails = [];
  D.MCQ.forEach((q, i) => { if (q.a < 0 || q.a >= q.o.length) fails.push('MCQ' + i + ' bad index'); });
  const fill = f => {
    D.MCQ.forEach((q, i) => $('mcq' + i + '_' + q.a).checked = true);
    D.SA.forEach((q, i) => $('saans' + i).value = f(q));
    D.PS.forEach((q, i) => q.parts.forEach((p, j) => $('psans' + i + '_' + j).value = f(p)));
  };
  fill(q => q.a[0]); $('submit').click(); const full = score();
  // answers typed with their unit / $ sign should still count
  $('reset').click(); fill(q => (q.pre || '') + q.a[0] + (q.unit ? ' ' + q.unit : '')); $('submit').click(); const withUnits = score();
  $('reset').click();
  D.SA.forEach((q, i) => $('saans' + i).value = '999999');
  D.PS.forEach((q, i) => q.parts.forEach((p, j) => $('psans' + i + '_' + j).value = '999999'));
  $('submit').click(); const junk = score();
  $('reset').click();
  const W = document.documentElement.clientWidth;
  const wide = document.documentElement.scrollWidth > W + 1 ? [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > W + 1 && !e.closest('.chips,.tbl-wrap,.chart,.bm')).slice(0, 5).map(e => e.tagName + '.' + e.className) : false;
  const missing = [...document.querySelectorAll('#chips a')].map(a => a.getAttribute('href')).filter(h => !document.querySelector(h));
  const leftover = document.querySelector('.wrap').innerText.includes('[[');
  return { W, page: document.title, full, withUnits, junk, fails, missing, wide, leftover, chips: document.querySelectorAll('#chips a:not(.quizchip)').length, secs: document.querySelectorAll('input[data-sec]').length };
})()
