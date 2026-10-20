/* ---------- QUIZ (mock paper) ---------- */
(function(){
{{QUIZ}}
  /* A (Booklet A, 2 marks each): {q,o,a,e,t,ctx}
     B (Booklet B): {n,ctx,t,parts:[{p,q,w:[regex]|k:[{l,all:[regex]}],model,e}]}
       w = short answer (1 mark), right if any regex matches the trimmed, lower-case answer
       k = key ideas (1 mark each), every regex in a group must match
     t = topic file in ../science/ for the "revise this" links */
  var TOPICS={'01-plant-systems':'Plant systems','02-human-systems':'Human digestive system','03-matter':'Matter','04-light':'Light',
    '05-shadows':'Shadows','06-heat':'Heat','07-effects-of-heat':'Effects of heat','08-p3-diversity':'Diversity (P3)',
    '09-p3-materials':'Materials (P3)','10-p3-life-cycles':'Life cycles (P3)','11-p3-magnets':'Magnets (P3)'};
  var letters=['1','2','3','4'];
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function pm(p){return p.k?p.k.length:1;}
  function revLink(t){return t&&TOPICS[t]?' <a class="revlink" href="../science/'+t+'.html">Revise: '+TOPICS[t]+' →</a>':'';}
  var maxA=A.length*2,maxB=0;B.forEach(function(q){q.parts.forEach(function(p){maxB+=pm(p);});});
  A.forEach(function(item,i){
    var c=el('div','q');c.id='mcq'+i;
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+(i+1)));head.appendChild(el('span','qmarks','2 marks'));c.appendChild(head);
    if(item.ctx)c.appendChild(el('div','ctx',item.ctx));
    c.appendChild(el('div','qtext',item.q));
    var opts=el('div','opts');
    item.o.forEach(function(t,j){var lab=el('label','opt');var inp=document.createElement('input');inp.type='radio';inp.name='mcq'+i;inp.id='mcq'+i+'_'+j;inp.value=j;lab.appendChild(inp);lab.appendChild(el('span',null,'('+letters[j]+') '+t));opts.appendChild(lab);});
    c.appendChild(opts);document.getElementById('mcq').appendChild(c);
  });
  B.forEach(function(qq,i){
    var c=el('div','q');c.id='bq'+i;var m=0;qq.parts.forEach(function(p){m+=pm(p);});
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+qq.n));head.appendChild(el('span','qmarks',m+' marks'));c.appendChild(head);
    if(qq.ctx)c.appendChild(el('div','ctx',qq.ctx));
    qq.parts.forEach(function(p,j){
      var row=el('div','bpart');row.id='bp'+i+'_'+j;
      var qh=el('div','qhead');qh.appendChild(el('span','pq',(p.p?'<b>'+p.p+'</b> ':'')+p.q));qh.appendChild(el('span','pm','['+pm(p)+']'));row.appendChild(qh);
      var inp;
      if(p.w){inp=document.createElement('input');inp.type='text';inp.autocomplete='off';inp.spellcheck=false;inp.placeholder='answer';}
      else{inp=document.createElement('textarea');inp.spellcheck=false;inp.placeholder='Write your answer here…';}
      inp.id='ba'+i+'_'+j;inp.setAttribute('aria-label','Answer to '+qq.n+(p.p||''));
      row.appendChild(inp);c.appendChild(row);
    });
    document.getElementById('oeq').appendChild(c);
  });
  function clearFb(c){c.querySelectorAll('.feedback,.revhint').forEach(function(f){f.remove();});c.classList.remove('right','wrong','partial');c.querySelectorAll('.bpart').forEach(function(r){r.classList.remove('is-right','is-wrong','is-partial');});}
  function state(c,got,max){c.classList.remove('right','wrong','partial');c.classList.add(got===max?'right':(got===0?'wrong':'partial'));}
  var got={};  /* 'i_j' -> marks for Booklet B parts */
  function score(){
    var sA=0,sB=0,lost={};
    A.forEach(function(item,i){var c=document.querySelector('input[name="mcq'+i+'"]:checked');if(c&&+c.value===item.a)sA+=2;else lost[item.t]=(lost[item.t]||0)+2;});
    B.forEach(function(qq,i){qq.parts.forEach(function(p,j){var g=got[i+'_'+j]||0;sB+=g;if(g<pm(p))lost[qq.t]=(lost[qq.t]||0)+pm(p)-g;});});
    var max=maxA+maxB,total=sA+sB,pct=total/max;
    document.getElementById('scorebox').hidden=false;
    document.getElementById('scorenum').textContent=total+' / '+max;
    document.getElementById('scorefill').style.width=(pct*100)+'%';
    document.getElementById('breakdown').innerHTML='<span>Booklet A: '+sA+'/'+maxA+'</span><span>Booklet B: '+sB+'/'+maxB+'</span>'+(timeUsed()?'<span>Time used: '+timeUsed()+'</span>':'');
    document.getElementById('scoremsg').textContent=pct>=0.85?'Excellent! You are ready for the exam. Read the explanations for the few you missed.':pct>=0.7?'Good work. Go through every red question and the topics below.':pct>=0.5?'Getting there. Revise the topics below, then try the paper again.':'Revise the topics below one by one, then try the paper again.';
    var keys=Object.keys(lost).filter(function(t){return TOPICS[t];}).sort(function(a,b){return lost[b]-lost[a];});
    var rv=document.getElementById('revise');rv.innerHTML='';
    if(keys.length){
      rv.appendChild(el('b',null,'Marks lost by topic (revise the top ones first):'));
      var ul=el('ul');keys.forEach(function(t){ul.appendChild(el('li',null,'<a class="revlink" href="../science/'+t+'.html">'+TOPICS[t]+'</a>: '+lost[t]+' mark'+(lost[t]>1?'s':'')));});rv.appendChild(ul);
    }
    try{localStorage.setItem('{{KEY}}-best',String(Math.max(total,+(localStorage.getItem('{{KEY}}-best')||0))));localStorage.setItem('{{KEY}}-max',String(max));localStorage.setItem('{{KEY}}-last',String(total));}catch(e){}
  }
  function check(){
    var blanks=0;
    A.forEach(function(item,i){
      var c=document.getElementById('mcq'+i);clearFb(c);
      var ch=c.querySelector('input:checked');if(!ch)blanks++;
      var labels=c.querySelectorAll('.opt');labels.forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
      labels[item.a].classList.add('is-correct');var good=ch&&+ch.value===item.a;
      if(ch&&!good)labels[+ch.value].classList.add('is-picked-wrong');state(c,good?2:0,2);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct! 2 marks':(ch?'Not quite.':'No answer.')+' The answer is ('+letters[item.a]+').'));
      fb.appendChild(el('div','work',item.e+revLink(item.t)));c.appendChild(fb);
    });
    B.forEach(function(qq,i){
      var c=document.getElementById('bq'+i);clearFb(c);var qGot=0,qMax=0;
      var paintQ=function(){var s=0,mx=0;qq.parts.forEach(function(p,j){s+=got[i+'_'+j]||0;mx+=pm(p);});state(c,s,mx);};
      qq.parts.forEach(function(p,j){
        var row=document.getElementById('bp'+i+'_'+j),v=document.getElementById('ba'+i+'_'+j).value,low=v.trim().toLowerCase(),m=pm(p),id=i+'_'+j;
        if(!v.trim())blanks++;
        var fb=el('div','feedback'),verdict=el('span','verdict');fb.appendChild(verdict);
        fb.appendChild(el('div','work','<b>Answer:</b> '+p.model+(p.e?'<br>'+p.e:'')));
        var kw=el('div','kw');
        function paint(){row.classList.remove('is-right','is-wrong','is-partial');row.classList.add(got[id]===m?'is-right':got[id]===0?'is-wrong':'is-partial');verdict.textContent=got[id]+' of '+m+(m>1?' marks':' mark');paintQ();}
        if(p.k){
          var hits=p.k.map(function(g){return low!==''&&g.all.every(function(r){return r.test(low);});});
          got[id]=hits.filter(Boolean).length;
          p.k.forEach(function(g,n){
            var b=el('button',null,(hits[n]?'✓ ':'✗ ')+g.l);b.type='button';b.setAttribute('aria-pressed',hits[n]?'true':'false');
            b.addEventListener('click',function(){hits[n]=!hits[n];b.setAttribute('aria-pressed',hits[n]?'true':'false');b.textContent=(hits[n]?'✓ ':'✗ ')+g.l;got[id]=hits.filter(Boolean).length;paint();score();});
            kw.appendChild(b);
          });
          fb.appendChild(el('p','hint','Key ideas (1 mark each). Green = found in your answer. If you wrote the same idea in other words, tap it.'));
        }else{
          var ok=low!==''&&p.w.some(function(r){return r.test(low);});got[id]=ok?1:0;
          var b=el('button',null,ok?'✓ Correct':'My answer is also correct');b.type='button';b.setAttribute('aria-pressed',ok?'true':'false');
          b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');got[id]=on?1:0;paint();score();});
          kw.appendChild(b);
        }
        fb.appendChild(kw);row.appendChild(fb);paint();
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
    document.querySelectorAll('#quiz .opt').forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
    got={};document.getElementById('scorebox').hidden=true;document.getElementById('blanknote').textContent='';
    try{localStorage.removeItem(TK);}catch(e){}
    T={};tick();
    window.scrollTo({top:0});
  }
  document.getElementById('submit').addEventListener('click',check);
  document.getElementById('reset').addEventListener('click',reset);

  /* ---------- TIMER: 1 h 45 min, start time kept in localStorage ---------- */
  var TK='{{KEY}}-timer',LIMIT=105*60*1000,T={},iv=null;
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
  /* typing an answer also starts the clock */
  document.getElementById('quiz').addEventListener('change',function(){if(!T.start)startTimer();});
  if(T.start&&!T.end)startTimer();else tick();
})();
