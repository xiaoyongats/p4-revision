/* ---------- QUIZ (math) ---------- */
(function(){
{{QUIZ}}
  var letters=['1','2','3','4'];
  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=frac(html);return e;}
  /* Answer matching: same text (extra spaces ignored), or the same numeric value unless the item says exact. */
  function clean(s,u){
    s=String(s==null?'':s).toLowerCase().replace(/[−–]/g,'-').replace(/,/g,'').replace(/\$/g,'').replace(/°|degrees?/g,'').trim();
    (u||'').split('|').filter(Boolean).forEach(function(x){x=x.toLowerCase();if(s.length>x.length&&s.slice(-x.length)===x)s=s.slice(0,-x.length).trim();});
    return s.replace(/\s+/g,' ').trim();
  }
  function val(s){
    var m;
    if((m=s.match(/^(-?\d*\.?\d+)$/)))return parseFloat(m[1]);
    if((m=s.match(/^(\d+) (\d+)\/(\d+)$/)))return +m[1]+(+m[2])/(+m[3]);
    if((m=s.match(/^(\d+)\/(\d+)$/)))return (+m[1])/(+m[2]);
    return null;
  }
  function ok(input,item){
    var u=(item.unit||'')+'|'+(item.u||'');
    var a=clean(input,u);if(!a)return false;
    return item.a.some(function(acc){
      var b=clean(acc,u);
      if(a===b)return true;
      if(!/\//.test(b)&&a.replace(/ /g,'')===b.replace(/ /g,''))return true;
      if(item.exact)return false;
      var x=val(a),y=val(b);return x!=null&&y!=null&&Math.abs(x-y)<1e-9;
    });
  }
  function answerInput(id,unit,pre){
    var w=el('div','ansrow');
    if(pre)w.appendChild(el('span','unit',pre));
    var inp=document.createElement('input');inp.type='text';inp.id=id;inp.autocomplete='off';inp.setAttribute('aria-label','Answer');inp.placeholder='answer';
    w.appendChild(inp);if(unit)w.appendChild(el('span','unit',unit));return w;
  }
  function show(item){return (item.pre||'')+item.a[0]+(item.unit?' '+item.unit:'');}
  var n=0;
  MCQ.forEach(function(item,i){
    n++;var card=el('div','q');card.id='mcq'+i;
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+n));head.appendChild(el('span','qmarks','1 mark'));card.appendChild(head);
    card.appendChild(el('div','qtext',item.q));
    var opts=el('div','opts');
    item.o.forEach(function(t,j){var lab=el('label','opt');var inp=document.createElement('input');inp.type='radio';inp.name='mcq'+i;inp.id='mcq'+i+'_'+j;inp.value=j;lab.appendChild(inp);lab.appendChild(el('span',null,'('+letters[j]+') '+t));opts.appendChild(lab);});
    card.appendChild(opts);document.getElementById('mcq').appendChild(card);
  });
  SA.forEach(function(item,i){
    n++;var card=el('div','q');card.id='sa'+i;
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+n));head.appendChild(el('span','qmarks','1 mark'));card.appendChild(head);
    card.appendChild(el('div','qtext',item.q));
    card.appendChild(answerInput('saans'+i,item.unit,item.pre));
    document.getElementById('saq').appendChild(card);
  });
  PS.forEach(function(item,i){
    n++;var card=el('div','q');card.id='ps'+i;var tot=item.parts.reduce(function(s,p){return s+(p.m||1);},0);
    var head=el('div','qhead');head.appendChild(el('span','qnum','Q'+n));head.appendChild(el('span','qmarks',tot+' marks'));card.appendChild(head);
    card.appendChild(el('div','qtext',item.q));
    item.parts.forEach(function(p,j){
      var row=el('div','psrow');row.id='ps'+i+'_'+j;
      if(p.p)row.appendChild(el('div','qtext',p.p));
      row.appendChild(answerInput('psans'+i+'_'+j,p.unit,p.pre));card.appendChild(row);
    });
    document.getElementById('psq').appendChild(card);
  });
  function clearFb(card){card.querySelectorAll('.feedback').forEach(function(f){f.remove();});card.classList.remove('right','wrong','partial');}
  function state(card,got,max){card.classList.add(got===max?'right':(got===0?'wrong':'partial'));}
  function check(){
    var blanks=0,sA=0,sB=0,sC=0,mC=0;
    MCQ.forEach(function(item,i){
      var card=document.getElementById('mcq'+i);clearFb(card);
      var c=card.querySelector('input:checked');if(!c)blanks++;
      var labels=card.querySelectorAll('.opt');labels.forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
      labels[item.a].classList.add('is-correct');
      var good=c&&+c.value===item.a;if(good)sA++;
      if(c&&!good)labels[+c.value].classList.add('is-picked-wrong');
      state(card,good?1:0,1);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct!':(c?'Not quite.':'No answer.')+' The answer is ('+letters[item.a]+') '+item.o[item.a]+'.'));
      fb.appendChild(el('div','work',item.e));card.appendChild(fb);
    });
    SA.forEach(function(item,i){
      var card=document.getElementById('sa'+i);clearFb(card);
      var v=document.getElementById('saans'+i).value;if(!v.trim())blanks++;
      var good=ok(v,item);if(good)sB++;state(card,good?1:0,1);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict',good?'Correct!':(v.trim()?'Not quite.':'No answer.')+' Answer: '+show(item)));
      fb.appendChild(el('div','work',item.e));card.appendChild(fb);
    });
    PS.forEach(function(item,i){
      var card=document.getElementById('ps'+i);clearFb(card);var got=0,max=0;
      item.parts.forEach(function(p,j){
        var row=document.getElementById('ps'+i+'_'+j);row.classList.remove('is-right','is-wrong');
        var v=document.getElementById('psans'+i+'_'+j).value;if(!v.trim())blanks++;
        var m=p.m||1;max+=m;var good=ok(v,p);if(good)got+=m;
        row.classList.add(good?'is-right':'is-wrong');
        row.appendChild(el('div','feedback mini-fb','<span class="verdict">'+(good?'✓ ':'✗ ')+'Answer: '+show(p)+'</span>'));
      });
      sC+=got;mC+=max;state(card,got,max);
      var fb=el('div','feedback');fb.appendChild(el('span','verdict','Worked solution'));fb.appendChild(el('div','work',item.sol));card.appendChild(fb);
    });
    var max=MCQ.length+SA.length+mC,total=sA+sB+sC;
    document.getElementById('scorebox').hidden=false;
    document.getElementById('scorenum').textContent=total+' / '+max;
    document.getElementById('scorefill').style.width=(total/max*100)+'%';
    document.getElementById('breakdown').innerHTML='<span>Choose: '+sA+'/'+MCQ.length+'</span><span>Short answers: '+sB+'/'+SA.length+'</span><span>Problem sums: '+sC+'/'+mC+'</span>';
    var pct=total/max;
    document.getElementById('scoremsg').textContent=pct>=0.9?'Excellent! You know this topic well.':pct>=0.7?'Good work. Study the worked solutions for the ones you missed.':pct>=0.5?'Getting there. Read the notes again, then try again.':'Go through the notes and worked examples, then have another go.';
    document.getElementById('blanknote').textContent=blanks?('You left '+blanks+' blank.'):'';
    try{localStorage.setItem('{{KEY}}-best',String(Math.max(total,+(localStorage.getItem('{{KEY}}-best')||0))));localStorage.setItem('{{KEY}}-max',String(max));}catch(e){}
    document.getElementById('scorebox').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
  }
  function reset(){
    document.querySelectorAll('#quiz input').forEach(function(r){if(r.type==='radio')r.checked=false;else r.value='';});
    document.querySelectorAll('#quiz .q').forEach(clearFb);
    document.querySelectorAll('#quiz .opt').forEach(function(o){o.classList.remove('is-correct','is-picked-wrong');});
    document.querySelectorAll('#quiz .psrow').forEach(function(r){r.classList.remove('is-right','is-wrong');});
    document.getElementById('scorebox').hidden=true;document.getElementById('blanknote').textContent='';
    document.getElementById('mcq').scrollIntoView({block:'start'});
  }
  document.getElementById('submit').addEventListener('click',check);
  document.getElementById('reset').addEventListener('click',reset);
})();
/* ---------- SAVE ANSWERS (shared by science + math) ----------
   Keeps every quiz answer in localStorage so it survives closing the page.
   Saved: radio choices, typed answers, whether answers were checked, keyword taps. */
(function(){
  var K='{{KEY}}-answers',quiz=document.getElementById('quiz');if(!quiz)return;
  function load(){try{return JSON.parse(localStorage.getItem(K)||'null');}catch(e){return null;}}
  function store(s){try{localStorage.setItem(K,JSON.stringify(s));}catch(e){}}
  var state=load()||{v:{},checked:false,kw:null},restoring=false;
  function collect(){
    var v={};
    quiz.querySelectorAll('input[type=radio]:checked').forEach(function(r){v[r.name]=r.value;});
    quiz.querySelectorAll('input[type=text],textarea').forEach(function(t){if(t.value)v['#'+t.id]=t.value;});
    state.v=v;
  }
  function kwState(){return [].map.call(quiz.querySelectorAll('.kw button'),function(b){return b.getAttribute('aria-pressed')==='true';});}
  function save(){if(restoring)return;collect();store(state);}
  quiz.addEventListener('input',save);
  quiz.addEventListener('change',save);
  quiz.addEventListener('click',function(e){
    if(restoring)return;
    var b=e.target.closest('button');if(!b)return;
    if(b.id==='submit'){state.checked=true;collect();state.kw=kwState();store(state);}
    else if(b.id==='reset'){state={v:{},checked:false,kw:null};try{localStorage.removeItem(K);}catch(err){}}
    else if(b.closest('.kw')){state.kw=kwState();store(state);}
  });
  /* restore */
  var v=state.v||{},any=false;
  Object.keys(v).forEach(function(k){
    if(k.charAt(0)==='#'){var t=document.getElementById(k.slice(1));if(t){t.value=v[k];any=true;}}
    else{var r=quiz.querySelector('input[type=radio][name="'+k+'"][value="'+v[k]+'"]');if(r){r.checked=true;any=true;}}
  });
  if(state.checked&&any){
    restoring=true;
    var orig=Element.prototype.scrollIntoView;Element.prototype.scrollIntoView=function(){};
    try{
      document.getElementById('submit').click();
      if(state.kw){var bs=quiz.querySelectorAll('.kw button');state.kw.forEach(function(p,i){var b=bs[i];if(b&&(b.getAttribute('aria-pressed')==='true')!==p)b.click();});}
    }finally{Element.prototype.scrollIntoView=orig;restoring=false;}
  }
  if(any){
    var note=document.createElement('p');note.className='hint';
    note.textContent=state.checked?'Your saved answers and results are shown below. Press "Try again" to start fresh.':'Your saved answers are filled in below.';
    var lead=quiz.querySelector('.lead');if(lead)lead.after(note);
  }
})();
