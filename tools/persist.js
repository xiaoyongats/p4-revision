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
