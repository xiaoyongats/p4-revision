function frac(h){return String(h).replace(/\[\[(?:(\d+) )?([\d?]+)\/([\d?]+)\]\]/g,function(_,w,a,b){return (w||'')+'<span class="fr"><span>'+a+'</span><span>'+b+'</span></span>';});}
document.querySelectorAll('.wrap > header, .wrap > section:not(#quiz)').forEach(function(s){if(s.innerHTML.indexOf('[[')>-1)s.innerHTML=frac(s.innerHTML);});
