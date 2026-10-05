/* ---------- QUIZ (english) ---------- */
(function(){
{{QUIZ}}
  /* MCQ: {q,o,a,e,ctx}   FILL: {q,a:[...],e,ctx}   WRITE: {q,a:[sentences]|k:[keyword groups],model,e,m,ctx}
     ctx = optional passage/poster HTML shown above the question. */
  var letters=['1','2','3','4'];
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
  function norm(s){
    return String(s==null?'':s).toLowerCase().replace(/[‘’`]/g,"'").replace(/[“”]/g,'"')
      .replace(/\s+([,.!?;:])/g,'$1').replace(/\s+/g,' ').trim().replace(/[.!]+$/,'').trim();
  }
  function same(input,list){var a=norm(input);if(!a)return false;return list.some(function(x){return norm(x)===a;});}
  var n=0;
  function card(id,marks,item){
    n++;var c=el('div','q');c.id=id;
    if(item.ctx)c.appendChild(el('div','ctx',item.ctx));
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+n));head.appendChild(el('span','qmarks',marks+(marks>1?' marks':' mark')));c.appendChild(head);
    c.appendChild(el('div','qtext',item.q));return c;
  }
  MCQ.forEach(function(item,i){
    var c=card('mcq'+i,1,item),opts=el('div','opts');
    item.o.forEach(function(t,j){var lab=el('label','opt');var inp=document.createElement('input');inp.type='radio';inp.name='mcq'+i;inp.id='mcq'+i+'_'+j;inp.value=j;lab.appendChild(inp);lab.appendChild(el('span',null,'('+letters[j]+') '+t));opts.appendChild(lab);});
    c.appendChild(opts);document.getElementById('mcq').appendChild(c);
  });
  FILL.forEach(function(item,i){
    var c=card('fill'+i,1,item),row=el('div','ansrow');
    var inp=document.createElement('input');inp.type='text';inp.id='fillans'+i;inp.autocomplete='off';inp.spellcheck=false;inp.setAttribute('aria-label','Answer');inp.placeholder='answer';
    row.appendChild(inp);c.appendChild(row);document.getElementById('fillq').appendChild(c);
  });
  WRITE.forEach(function(item,i){
    var m=item.k?item.k.length:(item.m||1);var c=card('wr'+i,m,item);
    var ta=document.createElement('textarea');ta.id='wrans'+i;ta.spellcheck=false;ta.setAttribute('aria-label','Answer');ta.placeholder=item.start||'Write your answer here…';
    c.appendChild(ta);document.getElementById('wrq').appendChild(c);
  });
  if(!MCQ.length)document.getElementById('partA').hidden=true;
  if(!FILL.length)document.getElementById('partB').hidden=true;
  if(!WRITE.length)document.getElementById('partC').hidden=true;
  function clearFb(c){c.querySelectorAll('.feedback').forEach(function(f){f.remove();});c.classList.remove('right','wrong','partial');}
  function state(c,got,max){c.classList.add(got===max?'right':(got===0?'wrong':'partial'));}
  var wrGot=[];
  function score(){
    var sA=0,sB=0,sC=0,mC=0;
    MCQ.forEach(function(item,i){var c=document.querySelector('input[name="mcq'+i+'"]:checked');if(c&&+c.value===item.a)sA++;});
    FILL.forEach(function(item,i){if(same(document.getElementById('fillans'+i).value,item.a))sB++;});
    WRITE.forEach(function(item,i){var m=item.k?item.k.length:(item.m||1);mC+=m;sC+=wrGot[i]||0;});
    var max=MCQ.length+FILL.length+mC,total=sA+sB+sC;
    document.getElementById('scorebox').hidden=false;
    document.getElementById('scorenum').textContent=total+' / '+max;
    document.getElementById('scorefill').style.width=(total/max*100)+'%';
    document.getElementById('breakdown').innerHTML='<span>Choose: '+sA+'/'+MCQ.length+'</span><span>Fill in: '+sB+'/'+FILL.length+'</span><span>Write: '+sC+'/'+mC+'</span>';
    var pct=total/max;
    document.getElementById('scoremsg').textContent=pct>=0.9?'Excellent! You know this topic well.':pct>=0.7?'Good work. Read the explanations for the ones you missed.':pct>=0.5?'Getting there. Read the notes again, then try again.':'Go through the notes and examples, then have another go.';
    try{localStorage.setItem('{{KEY}}-best',String(Math.max(total,+(localStorage.getItem('{{KEY}}-best')||0))));localStorage.setItem('{{KEY}}-max',String(max));}catch(e){}
  }
  function check(){
    var blanks=0;
    MCQ.forEach(function(item,i){
      var c=document.getElementById('mcq'+i);clearFb(c);
      var ch=c.querySelector('input:checked');if(!ch)blanks++;
      var labels=c.querySelectorAll('.opt');labels.forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
      labels[item.a].classList.add('is-correct');var good=ch&&+ch.value===item.a;
      if(ch&&!good)labels[+ch.value].classList.add('is-picked-wrong');state(c,good?1:0,1);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct!':(ch?'Not quite.':'No answer.')+' The answer is ('+letters[item.a]+') '+item.o[item.a]+'.'));
      fb.appendChild(el('div','work',item.e));c.appendChild(fb);
    });
    FILL.forEach(function(item,i){
      var c=document.getElementById('fill'+i);clearFb(c);var v=document.getElementById('fillans'+i).value;if(!v.trim())blanks++;
      var good=same(v,item.a);state(c,good?1:0,1);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct!':(v.trim()?'Not quite.':'No answer.')+' Answer: '+item.a[0]));
      if(item.e)fb.appendChild(el('div','work',item.e));c.appendChild(fb);
    });
    WRITE.forEach(function(item,i){
      var c=document.getElementById('wr'+i);clearFb(c);var v=document.getElementById('wrans'+i).value;if(!v.trim())blanks++;
      var fb=el('div','feedback'),verdict=el('span','verdict');fb.appendChild(verdict);
      fb.appendChild(el('div','work','<b>Model answer:</b> '+(item.model||item.a[0])+(item.e?'<br>'+item.e:'')));
      var kw=el('div','kw'),m=item.k?item.k.length:(item.m||1),got;
      function paint(){c.classList.remove('right','wrong','partial');state(c,wrGot[i],m);verdict.textContent=wrGot[i]+' of '+m+(m>1?' marks':' mark');}
      if(item.k){
        var low=v.toLowerCase();var hits=item.k.map(function(g){return v.trim()!==''&&g.all.every(function(r){return r.test(low);});});
        wrGot[i]=hits.filter(Boolean).length;
        item.k.forEach(function(g,j){
          var b=el('button',null,(hits[j]?'✓ ':'✗ ')+g.l);b.type='button';b.setAttribute('aria-pressed',hits[j]?'true':'false');
          b.addEventListener('click',function(){hits[j]=!hits[j];b.setAttribute('aria-pressed',hits[j]?'true':'false');b.textContent=(hits[j]?'✓ ':'✗ ')+g.l;wrGot[i]=hits.filter(Boolean).length;paint();score();});
          kw.appendChild(b);
        });
        fb.appendChild(el('p','hint','Ideas needed (1 mark each). Green means found in your answer. If you wrote the same idea in other words, tap it.'));
      }else{
        var noCap=v.trim()!==''&&!/^\s*["“A-Z]/.test(v);
        got=same(v,item.a)&&!noCap;wrGot[i]=got?m:0;
        if(noCap)fb.appendChild(el('p','hint','<b>Start your sentence with a capital letter.</b>'));
        var b=el('button',null,got?'✓ Matches the model answer':'My answer means the same and is correct');b.type='button';b.setAttribute('aria-pressed',got?'true':'false');
        b.addEventListener('click',function(){var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on?'true':'false');wrGot[i]=on?m:0;paint();score();});
        kw.appendChild(b);
        if(!got)fb.appendChild(el('p','hint','Compare carefully: same words, same order, correct full stop and commas. Only tap the button if your sentence is really correct (ask a grown-up if unsure).'));
      }
      fb.appendChild(kw);paint();c.appendChild(fb);
    });
    document.getElementById('blanknote').textContent=blanks?('You left '+blanks+' blank.'):'';
    score();
    document.getElementById('scorebox').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  }
  function reset(){
    document.querySelectorAll('#quiz input, #quiz textarea').forEach(function(r){if(r.type==='radio')r.checked=false;else r.value='';});
    document.querySelectorAll('#quiz .q').forEach(clearFb);
    document.querySelectorAll('#quiz .opt').forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
    wrGot=[];document.getElementById('scorebox').hidden=true;document.getElementById('blanknote').textContent='';
    document.getElementById('mcq').scrollIntoView({block:'start'});
  }
  document.getElementById('submit').addEventListener('click',check);
  document.getElementById('reset').addEventListener('click',reset);
})();
