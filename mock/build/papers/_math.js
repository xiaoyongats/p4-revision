  /* shared by the math mock papers (pasted in by make_mock.py via "include: _math.js") */
  var TOPICS={'01-whole-numbers':'Whole numbers','02-factors-multiples':'Factors and multiples','03-four-operations':'Four operations',
    '04-fractions':'Fractions','05-decimals':'Decimals','06-time':'Time','07-angles-lines':'Angles and lines','08-perimeter-area':'Perimeter and area',
    '09-symmetry':'Symmetry','10-nets-solids':'Nets and solids','11-data':'Tables and graphs','12-problem-solving':'Problem sums'};
  function tbl(rows){return '<div class="tbl-wrap"><table class="pv">'+rows.map(function(r,i){return '<tr>'+r.map(function(c){return i?'<td>'+c+'</td>':'<th>'+c+'</th>';}).join('')+'</tr>';}).join('')+'</table></div>';}
  /* fraction: fr(3,4) or mixed: fr(3,4,2) = 2 3/4 */
  function fr(a,b,w){return (w?w+'&#8202;':'')+'<span class="fr"><span>'+a+'</span><span>'+b+'</span></span>';}
  var FT='font-size="14" font-weight="700" fill="currentColor"';
  /* angles round point O on a line. rays = directions in degrees (0 = right, 180 = left), labels = one per gap from right to left.
     total 90 draws a right angle (base + upright) instead of a straight line. */
  function fan(rays,labels,total){
    total=total||180;var cx=total===90?90:170,cy=150,R=120,s='';
    function pt(d,r){var a=d*Math.PI/180;return [cx+r*Math.cos(a),cy-r*Math.sin(a)];}
    var b=[0].concat(rays,[total]);
    s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R+20)+'" y2="'+cy+'" stroke="currentColor" stroke-width="2.5"/>';
    if(total===180)s+='<line x1="'+(cx-R-20)+'" y1="'+cy+'" x2="'+cx+'" y2="'+cy+'" stroke="currentColor" stroke-width="2.5"/>';
    else s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+cx+'" y2="'+(cy-R-10)+'" stroke="currentColor" stroke-width="2.5"/><path d="M'+(cx+14)+' '+cy+' L'+(cx+14)+' '+(cy-14)+' L'+cx+' '+(cy-14)+'" fill="none" stroke="currentColor" stroke-width="1.5"/>';
    rays.forEach(function(d){var p=pt(d,R);s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+p[0]+'" y2="'+p[1]+'" stroke="var(--water)" stroke-width="2.5"/>';});
    for(var i=0;i<b.length-1;i++){
      var mid=(b[i]+b[i+1])/2,p=pt(mid,total===90&&b[i+1]-b[i]<40?62:50),a1=pt(b[i],30),a2=pt(b[i+1],30);
      s+='<path d="M'+a1[0]+' '+a1[1]+' A30 30 0 0 0 '+a2[0]+' '+a2[1]+'" fill="none" stroke="var(--food)" stroke-width="1.5"/>';
      s+='<text x="'+p[0]+'" y="'+(p[1]+5)+'" text-anchor="middle" '+FT+'>'+labels[i]+'</text>';
    }
    s+='<circle cx="'+cx+'" cy="'+cy+'" r="3" fill="currentColor"/>';
    if(total===90)s+='<text x="'+(cx-14)+'" y="'+(cy-R-2)+'" '+FT+'>A</text><text x="'+(cx-16)+'" y="'+(cy+16)+'" '+FT+'>B</text><text x="'+(cx+R+24)+'" y="'+(cy+5)+'" '+FT+'>C</text>';
    return '<svg viewBox="0 0 340 170" width="340" role="img" aria-label="Angles diagram">'+s+'</svg>';
  }
  /* rectilinear figure: pts in cm (y down), labs = [[x, y, text]] in cm; 1 cm = k px */
  function poly(pts,labs,k){
    k=k||22;var w=0,h=0;pts.forEach(function(p){w=Math.max(w,p[0]);h=Math.max(h,p[1]);});
    var s='<polygon points="'+pts.map(function(p){return (p[0]*k+40)+','+(p[1]*k+25);}).join(' ')+'" fill="var(--water-soft)" stroke="var(--water)" stroke-width="2.5"/>';
    labs.forEach(function(l){s+='<text x="'+(l[0]*k+40)+'" y="'+(l[1]*k+25+5)+'" text-anchor="middle" '+FT+'>'+l[2]+'</text>';});
    return '<svg viewBox="0 0 '+(w*k+100)+' '+(h*k+70)+'" width="'+(w*k+100)+'" role="img" aria-label="Figure made of rectangles (not drawn to scale)">'+s+'</svg><p class="hint" style="text-align:center">The figure is not drawn to scale.</p>';
  }
  /* bar graph: data = [[label, value]], top = axis max, step */
  function bars(data,top,step,ylab){
    var H=180,W=60+data.length*70,s='',y0=200;
    for(var v=0;v<=top;v+=step){var y=y0-v/top*H;s+='<line x1="50" y1="'+y+'" x2="'+(W-10)+'" y2="'+y+'" stroke="var(--line)"/><text x="44" y="'+(y+4)+'" text-anchor="end" font-size="12" fill="currentColor">'+v+'</text>';}
    data.forEach(function(d,i){var x=70+i*70,h=d[1]/top*H;s+='<rect x="'+x+'" y="'+(y0-h)+'" width="36" height="'+h+'" fill="var(--water)"/><text x="'+(x+18)+'" y="'+(y0+18)+'" text-anchor="middle" '+FT+'>'+d[0]+'</text>';});
    s+='<line x1="50" y1="'+y0+'" x2="'+(W-10)+'" y2="'+y0+'" stroke="currentColor" stroke-width="2"/><line x1="50" y1="'+y0+'" x2="50" y2="15" stroke="currentColor" stroke-width="2"/>';
    s+='<text x="12" y="110" transform="rotate(-90 12 110)" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">'+ylab+'</text>';
    return '<svg viewBox="0 0 '+W+' 225" width="'+W+'" role="img" aria-label="Bar graph">'+s+'</svg>';
  }
  /* pie chart: slices = [[fraction, label]] */
  function pie(slices){
    var cx=160,cy=110,r=90,a=-Math.PI/2,s='',cols=['var(--water-soft)','var(--food-soft)','var(--leaf-soft)','var(--sun-soft)'];
    slices.forEach(function(sl,i){
      var b=a+sl[0]*2*Math.PI,x1=cx+r*Math.cos(a),y1=cy+r*Math.sin(a),x2=cx+r*Math.cos(b),y2=cy+r*Math.sin(b),m=(a+b)/2;
      s+='<path d="M'+cx+' '+cy+' L'+x1+' '+y1+' A'+r+' '+r+' 0 '+(sl[0]>0.5?1:0)+' 1 '+x2+' '+y2+' Z" fill="'+cols[i%4]+'" stroke="currentColor" stroke-width="1.5"/>';
      var out=sl[0]<0.2,k=out?1.12:0.58,tx=cx+r*k*Math.cos(m),anc=out?(Math.cos(m)<0?'end':'start'):'middle';
      s+='<text x="'+tx+'" y="'+(cy+r*k*Math.sin(m)+5)+'" text-anchor="'+anc+'" font-size="12" font-weight="700" fill="currentColor">'+sl[1]+'</text>';
      a=b;});
    return '<svg viewBox="0 0 320 220" width="320" role="img" aria-label="Pie chart">'+s+'</svg>';
  }
