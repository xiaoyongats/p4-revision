/* ---------- QUIZ (mock paper) ---------- */
(function(){
{{QUIZ}}
  /* Each paper file sets:
     CFG = {amark: marks per Booklet A question, minutes, base: topic folder for revise links}
     TOPICS = {file: 'Topic name'}
     A (Booklet A MCQ): {q,o,a,e,t,ctx,h}
     B (Booklet B): {n,ctx,t,h,parts:[part]}
       part = {p,q,model,e} plus ONE of
         w: [regex | 'word']        short answer, 1 mark (strings compared ignoring case and end punctuation)
         k: [{l,all:[regex]}]       key ideas, 1 mark each, every regex in a group must match
         s: ['sentence', ...]       a full sentence, 1 mark, must match one model and start with a capital
         o: ['choice', ...], a      tick one choice, 1 mark
         n: [number, ...]           a number answer; units, $ and commas are ignored; "3 1/2" and "7/2" work
         set: [numbers]             a list of numbers in any order (e.g. all the factors of 12)
       m = marks for a w / s / n / set part (default 1); u = unit shown after the box
     CFG.labA / CFG.labB = names of the two parts (default Booklet A / Booklet B)
     t = topic file (for "revise" links), h = section heading shown before the question */
  var letters=['1','2','3','4'];
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function norm(s){
    return String(s==null?'':s).toLowerCase().replace(/[‘’`]/g,"'").replace(/[“”]/g,'"')
      .replace(/\s+([,.!?;:])/g,'$1').replace(/\s+/g,' ').trim().replace(/[.!]+$/,'').trim();
  }
  function pm(p){return p.k?p.k.length:(p.m||1);}
  function num(s){
    s=String(s).replace(/(\d)[ ,](?=\d{3}(?!\d))/g,'$1').replace(/\$/g,'');
    var m=s.match(/(-?\d+(?:\.\d+)?)(?:\s+(\d+)\s*\/\s*(\d+)|\s*\/\s*(\d+))?/);if(!m)return NaN;
    if(m[2])return +m[1]+m[2]/m[3];if(m[4])return m[1]/m[4];return +m[1];
  }
  function nums(s){return (String(s).replace(/(\d),(?=\d{3}(?!\d))/g,'$1').match(/\d+(?:\.\d+)?/g)||[]).map(Number);}
  function sameSet(a,b){a=a.slice().sort(function(x,y){return x-y;});b=b.slice().sort(function(x,y){return x-y;});return a.length===b.length&&a.every(function(x,i){return Math.abs(x-b[i])<1e-9;});}
  var LA=CFG.labA||'Booklet A',LB=CFG.labB||'Booklet B';
  document.getElementById('hA').textContent=LA;document.getElementById('hB').textContent=LB;
  function mk(n){return n+(n>1?' marks':' mark');}
  function revLink(t){return t&&TOPICS[t]?' <a class="revlink" href="'+CFG.base+t+'.html">Revise: '+TOPICS[t]+' →</a>':'';}
  var maxA=A.length*CFG.amark,maxB=0;B.forEach(function(q){q.parts.forEach(function(p){maxB+=pm(p);});});
  document.getElementById('infoA').textContent=A.length+' questions · '+mk(maxA);
  document.getElementById('infoB').textContent=mk(maxB);
  function heading(item,box){if(item.h)box.appendChild(el('h3','sech',item.h));}
  A.forEach(function(item,i){
    var box=document.getElementById('mcq');heading(item,box);
    var c=el('div','q');c.id='mcq'+i;
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+(i+1)));head.appendChild(el('span','qmarks',mk(CFG.amark)));c.appendChild(head);
    if(item.ctx)c.appendChild(el('div','ctx',item.ctx));
    c.appendChild(el('div','qtext',item.q));
    var opts=el('div','opts');
    item.o.forEach(function(t,j){var lab=el('label','opt');var inp=document.createElement('input');inp.type='radio';inp.name='mcq'+i;inp.id='mcq'+i+'_'+j;inp.value=j;lab.appendChild(inp);lab.appendChild(el('span',null,'('+letters[j]+') '+t));opts.appendChild(lab);});
    c.appendChild(opts);box.appendChild(c);
  });
  B.forEach(function(qq,i){
    var box=document.getElementById('oeq');heading(qq,box);
    var c=el('div','q');c.id='bq'+i;var m=0;qq.parts.forEach(function(p){m+=pm(p);});
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+qq.n));head.appendChild(el('span','qmarks',mk(m)));c.appendChild(head);
    if(qq.ctx)c.appendChild(el('div','ctx',qq.ctx));
    qq.parts.forEach(function(p,j){
      var row=el('div','bpart');row.id='bp'+i+'_'+j;
      var qh=el('div','qhead');qh.appendChild(el('span','pq',(p.p?'<b>'+p.p+'</b> ':'')+p.q));qh.appendChild(el('span','pm','['+pm(p)+']'));row.appendChild(qh);
      var inp;
      if(p.o){
        inp=el('div','opts');
        p.o.forEach(function(t,n){var lab=el('label','opt');var r=document.createElement('input');r.type='radio';r.name='bo'+i+'_'+j;r.value=n;lab.appendChild(r);lab.appendChild(el('span',null,t));inp.appendChild(lab);});
      }else{
        if(p.w||p.n||p.set){inp=document.createElement('input');inp.type='text';inp.autocomplete='off';inp.placeholder='answer';}
        else{inp=document.createElement('textarea');inp.placeholder=p.start||'Write your answer here…';}
        inp.spellcheck=false;inp.id='ba'+i+'_'+j;inp.setAttribute('aria-label','Answer to '+qq.n+(p.p||''));
      }
      if(p.u){var ar=el('div','ansrow');if(p.u==='$'){ar.appendChild(el('span','unit','$'));ar.appendChild(inp);}else{ar.appendChild(inp);ar.appendChild(el('span','unit',p.u));}row.appendChild(ar);}
      else row.appendChild(inp);
      c.appendChild(row);
    });
    box.appendChild(c);
  });
  function clearFb(c){c.querySelectorAll('.feedback,.revhint').forEach(function(f){f.remove();});c.classList.remove('right','wrong','partial');c.querySelectorAll('.bpart').forEach(function(r){r.classList.remove('is-right','is-wrong','is-partial');});c.querySelectorAll('.opt').forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});}
  function state(c,got,max){c.classList.remove('right','wrong','partial');c.classList.add(got===max?'right':(got===0?'wrong':'partial'));}
  var got={};  /* 'i_j' -> marks for Booklet B parts */
  function score(){
    var sA=0,sB=0,lost={};
    A.forEach(function(item,i){var c=document.querySelector('input[name="mcq'+i+'"]:checked');if(c&&+c.value===item.a)sA+=CFG.amark;else lost[item.t]=(lost[item.t]||0)+CFG.amark;});
    B.forEach(function(qq,i){qq.parts.forEach(function(p,j){var g=got[i+'_'+j]||0;sB+=g;if(g<pm(p))lost[qq.t]=(lost[qq.t]||0)+pm(p)-g;});});
    var max=maxA+maxB,total=sA+sB,pct=total/max;
    document.getElementById('scorebox').hidden=false;
    document.getElementById('scorenum').textContent=total+' / '+max;
    document.getElementById('scorefill').style.width=(pct*100)+'%';
    document.getElementById('breakdown').innerHTML='<span>'+LA+': '+sA+'/'+maxA+'</span><span>'+LB+': '+sB+'/'+maxB+'</span>'+(timeUsed()?'<span>Time used: '+timeUsed()+'</span>':'');
    document.getElementById('scoremsg').textContent=pct>=0.85?'Excellent! You are ready for the exam. Read the explanations for the few you missed.':pct>=0.7?'Good work. Go through every red question and the topics below.':pct>=0.5?'Getting there. Revise the topics below, then try the paper again.':'Revise the topics below one by one, then try the paper again.';
    var keys=Object.keys(lost).filter(function(t){return TOPICS[t];}).sort(function(a,b){return lost[b]-lost[a];});
    var rv=document.getElementById('revise');rv.innerHTML='';
    if(keys.length){
      rv.appendChild(el('b',null,'Marks lost by topic (revise the top ones first):'));
      var ul=el('ul');keys.forEach(function(t){ul.appendChild(el('li',null,'<a class="revlink" href="'+CFG.base+t+'.html">'+TOPICS[t]+'</a>: '+mk(lost[t])));});rv.appendChild(ul);
    }
    try{localStorage.setItem('{{KEY}}-best',String(Math.max(total,+(localStorage.getItem('{{KEY}}-best')||0))));localStorage.setItem('{{KEY}}-max',String(max));localStorage.setItem('{{KEY}}-last',String(total));}catch(e){}
  }
  function check(){
    var blanks=0;
    A.forEach(function(item,i){
      var c=document.getElementById('mcq'+i);clearFb(c);
      var ch=c.querySelector('input:checked');if(!ch)blanks++;
      var labels=c.querySelectorAll('.opt');
      labels[item.a].classList.add('is-correct');var good=ch&&+ch.value===item.a;
      if(ch&&!good)labels[+ch.value].classList.add('is-picked-wrong');state(c,good?CFG.amark:0,CFG.amark);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct! '+mk(CFG.amark):(ch?'Not quite.':'No answer.')+' The answer is ('+letters[item.a]+').'));
      fb.appendChild(el('div','work',item.e+revLink(item.t)));c.appendChild(fb);
    });
    B.forEach(function(qq,i){
      var c=document.getElementById('bq'+i);clearFb(c);
      var paintQ=function(){var s=0,mx=0;qq.parts.forEach(function(p,j){s+=got[i+'_'+j]||0;mx+=pm(p);});state(c,s,mx);};
      qq.parts.forEach(function(p,j){
        var row=document.getElementById('bp'+i+'_'+j),m=pm(p),id=i+'_'+j,v,low;
        if(p.o){var ch=row.querySelector('input:checked');v=ch?ch.value:'';}
        else v=document.getElementById('ba'+i+'_'+j).value;
        low=v.trim().toLowerCase();
        if(!v.trim())blanks++;
        var fb=el('div','feedback'),verdict=el('span','verdict');fb.appendChild(verdict);
        var model=p.o?p.o[p.a]:(p.model||(p.s&&p.s[0])||(p.n&&(p.u==='$'?'$'+p.n[0].toFixed(p.n[0]%1?2:0):p.n[0]+(p.u?' '+p.u:'')))||(p.set&&p.set.join(', '))||(typeof p.w[0]==='string'?p.w[0]:''));
        fb.appendChild(el('div','work','<b>Answer:</b> '+model+(p.e?'<br>'+p.e:'')));
        var kw=el('div','kw');
        function paint(){row.classList.remove('is-right','is-wrong','is-partial');row.classList.add(got[id]===m?'is-right':got[id]===0?'is-wrong':'is-partial');verdict.textContent=got[id]+' of '+mk(m);paintQ();}
        function selfMark(ok,yes,no){
          var b=el('button',null,ok?yes:no);b.type='button';b.setAttribute('aria-pressed',ok?'true':'false');
          b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');got[id]=on?m:0;paint();score();});
          kw.appendChild(b);
        }
        if(p.o){
          var labs=row.querySelectorAll('.opt');labs[p.a].classList.add('is-correct');
          got[id]=v!==''&&+v===p.a?1:0;if(v!==''&&!got[id])labs[+v].classList.add('is-picked-wrong');
        }else if(p.k){
          var hits=p.k.map(function(g){return low!==''&&g.all.every(function(r){return r.test(low);});});
          got[id]=hits.filter(Boolean).length;
          p.k.forEach(function(g,n){
            var b=el('button',null,(hits[n]?'✓ ':'✗ ')+g.l);b.type='button';b.setAttribute('aria-pressed',hits[n]?'true':'false');
            b.addEventListener('click',function(){hits[n]=!hits[n];b.setAttribute('aria-pressed',hits[n]?'true':'false');b.textContent=(hits[n]?'✓ ':'✗ ')+g.l;got[id]=hits.filter(Boolean).length;paint();score();});
            kw.appendChild(b);
          });
          fb.appendChild(el('p','hint','Key ideas (1 mark each). Green = found in your answer. If you wrote the same idea in other words, tap it.'));
        }else if(p.s){
          var noCap=v.trim()!==''&&!/^\s*["“A-Z]/.test(v);
          var ok=low!==''&&!noCap&&p.s.some(function(x){return norm(x)===norm(v);});got[id]=ok?m:0;
          if(noCap)fb.appendChild(el('p','hint','<b>Start your sentence with a capital letter.</b>'));
          if(!ok)fb.appendChild(el('p','hint','Compare carefully: same meaning, correct tense, full stop and commas. Only tap the button if your sentence is really correct (ask a grown-up if unsure).'));
          selfMark(ok,'✓ Matches the answer','My sentence means the same and is correct');
        }else if(p.n||p.set){
          var ok3=low!==''&&(p.set?sameSet(nums(v),p.set):p.n.some(function(x){return Math.abs(num(v)-x)<1e-9;}));got[id]=ok3?m:0;
          if(!ok3&&m>1)fb.appendChild(el('p','hint','In the real exam you may still get a method mark if your working was right. Check your working against the answer above.'));
          selfMark(ok3,'✓ Correct','My answer is also correct');
        }else{
          var ok2=low!==''&&p.w.some(function(r){return typeof r==='string'?norm(r)===norm(v):r.test(low);});got[id]=ok2?m:0;
          selfMark(ok2,'✓ Correct','My answer is also correct');
        }
        if(!p.o)fb.appendChild(kw);
        row.appendChild(fb);paint();
      });
      if(qq.t)c.appendChild(el('p','hint revhint',revLink(qq.t).trim()));
    });
    document.getElementById('blanknote').textContent=blanks?('You left '+blanks+' blank.'):'';
    stopTimer();score();
    document.getElementById('scorebox').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  }
  function reset(){
    document.querySelectorAll('#quiz input, #quiz textarea').forEach(function(r){if(r.type==='radio')r.checked=false;else r.value='';});
    document.querySelectorAll('#quiz .q').forEach(clearFb);
    got={};document.getElementById('scorebox').hidden=true;document.getElementById('blanknote').textContent='';
    try{localStorage.removeItem(TK);}catch(e){}
    T={};tick();
    window.scrollTo({top:0});
  }
  document.getElementById('submit').addEventListener('click',check);
  document.getElementById('reset').addEventListener('click',reset);

  /* ---------- TIMER: start time kept in localStorage ---------- */
  var TK='{{KEY}}-timer',LIMIT=CFG.minutes*60*1000,T={},iv=null;
  try{T=JSON.parse(localStorage.getItem(TK)||'{}')||{};}catch(e){T={};}
  function fmt(ms){var s=Math.max(0,Math.round(ms/1000)),h=Math.floor(s/3600),m=Math.floor(s%3600/60);s=s%60;return h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;}
  function timeUsed(){if(!T.start)return '';var used=(T.end||Date.now())-T.start;var mins=Math.round(used/60000);return mins>=60?Math.floor(mins/60)+' h '+(mins%60)+' min':mins+' min';}
  function saveT(){try{localStorage.setItem(TK,JSON.stringify(T));}catch(e){}}
  function tick(){
    var bar=document.getElementById('timerbar'),num=document.getElementById('tnum'),lab=document.getElementById('tlabel'),btn=document.getElementById('tstart'),fill=document.getElementById('tfill');
    bar.classList.remove('low','up');
    if(!T.start){num.textContent=fmt(LIMIT);lab.textContent='Time';fill.style.width='0%';btn.hidden=false;if(iv){clearInterval(iv);iv=null;}return;}
    btn.hidden=true;
    var used=(T.end||Date.now())-T.start,left=LIMIT-used;
    fill.style.width=Math.min(100,used/LIMIT*100)+'%';
    if(T.end){lab.textContent='Finished in';num.textContent=fmt(used);if(iv){clearInterval(iv);iv=null;}return;}
    if(left<=0){lab.textContent="Time's up!";num.textContent='0:00:00';bar.classList.add('up');return;}
    lab.textContent='Time left';num.textContent=fmt(left);if(left<10*60*1000)bar.classList.add('low');
  }
  function startTimer(){if(!T.start){T={start:Date.now()};saveT();}if(!iv)iv=setInterval(tick,1000);tick();}
  function stopTimer(){if(T.start&&!T.end){T.end=Date.now();saveT();}tick();}
  document.getElementById('tstart').addEventListener('click',startTimer);
  /* answering also starts the clock */
  document.getElementById('quiz').addEventListener('change',function(){if(!T.start)startTimer();});
  if(T.start&&!T.end)startTimer();else tick();
})();
