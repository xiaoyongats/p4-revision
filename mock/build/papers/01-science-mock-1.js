/*meta
title: Science Mock Paper 1
eyebrow: P4 Science · Mock exam
h1: Science Mock Paper 1
lead: A full end-of-year paper in the same format as the 2024 school papers (Rosyth, Raffles Girls', Henry Park, Nanyang, SCGS, Tao Nan). All questions are new. Covers every P4 topic plus the P3 topics that are tested.
key: p4m-sci1
*/
  function tbl(rows){return '<div class="tbl-wrap"><table class="pv">'+rows.map(function(r,i){return '<tr>'+r.map(function(c){return i?'<td>'+c+'</td>':'<th>'+c+'</th>';}).join('')+'</tr>';}).join('')+'</table></div>';}
  function gut(L){
    function lab(x,y,tx,ty,t){if(!t)return '';var left=tx<140;
      return '<line x1="'+x+'" y1="'+y+'" x2="'+tx+'" y2="'+ty+'" stroke="currentColor" stroke-width="1.5"/>'+
        '<rect x="'+(left?tx-26:tx)+'" y="'+(ty-13)+'" width="26" height="26" rx="5" fill="var(--card)" stroke="currentColor" stroke-width="1.5"/>'+
        '<text x="'+(left?tx-13:tx+13)+'" y="'+(ty+5)+'" text-anchor="middle" font-weight="800" font-size="15" fill="currentColor">'+t+'</text>';}
    return '<svg viewBox="0 0 290 300" width="270" role="img" aria-label="The human digestive system with labelled parts">'+
      '<g fill="none" stroke="var(--muted)" stroke-width="2"><circle cx="140" cy="38" r="28"/><path d="M128 66 L128 80 Q80 84 72 120 L72 292 M152 66 L152 80 Q200 84 208 120 L208 292"/></g>'+
      '<path d="M131 52 Q140 58 149 52" stroke="var(--warn)" stroke-width="3" fill="none"/>'+
      '<path d="M140 60 L140 92 Q141 112 148 126" stroke="var(--food)" stroke-width="6" fill="none" stroke-linecap="round"/>'+
      '<path d="M146 122 C158 112 192 116 192 136 C192 158 166 166 150 158 C142 152 144 138 146 122 Z" fill="var(--food-soft)" stroke="var(--food)" stroke-width="3"/>'+
      '<path d="M108 252 L108 182 L182 182 L182 238 Q182 256 150 256 L150 278" fill="none" stroke="var(--soil)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<path d="M156 160 C150 176 120 180 125 196 C130 210 170 198 168 212 C166 226 122 214 124 228 C126 240 164 232 158 246" fill="none" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round"/>'+
      lab(134,55,44,55,L[0])+lab(141,98,44,104,L[1])+lab(188,140,250,140,L[2])+lab(127,206,44,212,L[3])+lab(182,214,250,214,L[4])+'</svg>';
  }
  function shadowSet(){
    return '<svg viewBox="0 0 330 140" width="330" role="img" aria-label="A torch shines on a toy; its shadow falls on a screen">'+
      '<line x1="64" y1="66" x2="292" y2="14" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/><line x1="64" y1="66" x2="292" y2="118" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/>'+
      '<rect x="12" y="56" width="40" height="20" rx="4" fill="var(--muted)"/><path d="M52 52 L64 46 L64 86 L52 80 Z" fill="var(--muted)"/>'+
      '<circle cx="150" cy="50" r="9" fill="var(--water-soft)" stroke="var(--water)" stroke-width="2"/><path d="M138 92 L150 60 L162 92 Z" fill="var(--water-soft)" stroke="var(--water)" stroke-width="2"/>'+
      '<rect x="292" y="8" width="10" height="116" fill="var(--line)" stroke="currentColor" stroke-width="1.5"/><rect x="292" y="28" width="10" height="80" fill="currentColor" opacity=".75"/>'+
      '<g font-size="13" font-weight="700" fill="currentColor" text-anchor="middle"><text x="36" y="104">torch</text><text x="150" y="112">toy</text><text x="297" y="138">screen</text></g></svg>';
  }
  function cone(){
    return '<svg viewBox="0 0 330 130" width="330" role="img" aria-label="A cone with its tip pointing at a torch, in front of a screen">'+
      '<rect x="12" y="55" width="40" height="20" rx="4" fill="var(--muted)"/><path d="M52 51 L64 45 L64 85 L52 79 Z" fill="var(--muted)"/>'+
      '<line x1="64" y1="65" x2="292" y2="18" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/><line x1="64" y1="65" x2="292" y2="112" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/>'+
      '<path d="M140 65 L190 42 L190 88 Z" fill="var(--soil-soft)" stroke="var(--soil)" stroke-width="2"/><ellipse cx="190" cy="65" rx="7" ry="23" fill="var(--soil-soft)" stroke="var(--soil)" stroke-width="2"/>'+
      '<rect x="292" y="8" width="10" height="114" fill="var(--line)" stroke="currentColor" stroke-width="1.5"/>'+
      '<g font-size="13" font-weight="700" fill="currentColor" text-anchor="middle"><text x="36" y="102">torch</text><text x="170" y="112">cone (tip points at the torch)</text><text x="297" y="20" font-size="18">?</text></g></svg>';
  }
  function tree(){
    function box(x,y,w,t){return '<rect x="'+(x-w/2)+'" y="'+(y-13)+'" width="'+w+'" height="26" rx="6" fill="var(--card)" stroke="currentColor" stroke-width="1.5"/><text x="'+x+'" y="'+(y+5)+'">'+t+'</text>';}
    return '<svg viewBox="0 0 350 175" width="350" role="img" aria-label="Classification chart of matter into A, B and C">'+
      '<g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M175 31 L175 42 L80 42 L80 55 M175 42 L245 42 L245 55 M245 81 L245 92 L172 92 L172 105 M245 92 L292 92 L292 105 M80 81 L80 145 M172 131 L172 145 M292 131 L292 145"/></g>'+
      '<g font-size="12" font-weight="700" fill="currentColor" text-anchor="middle">'+box(175,18,70,'Matter')+box(80,68,110,'Definite shape')+box(245,68,130,'No definite shape')+
      box(172,118,104,'Definite volume')+box(292,118,112,'No definite volume')+
      box(80,158,34,'A')+box(172,158,34,'B')+box(292,158,34,'C')+'</g></svg>';
  }
  function bottle(){
    return '<svg viewBox="0 0 250 220" width="230" role="img" aria-label="A funnel sealed into the mouth of a bottle with plasticine; water stays in the funnel">'+
      '<path d="M60 212 L60 104 Q60 84 85 76 L85 62 L115 62 L115 76 Q140 84 140 104 L140 212 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>'+
      '<path d="M50 10 L150 10 L108 48 L108 96 L92 96 L92 48 Z" fill="var(--card)" stroke="currentColor" stroke-width="2.5"/>'+
      '<path d="M60 18 L140 18 L106 44 L94 44 Z" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.5"/>'+
      '<rect x="78" y="54" width="44" height="14" rx="6" fill="var(--soil-soft)" stroke="var(--soil)" stroke-width="2"/>'+
      '<g font-size="13" font-weight="700" fill="currentColor"><text x="160" y="22">funnel</text><text x="160" y="40">with water</text><text x="160" y="66">plasticine</text><text x="160" y="150">bottle</text></g>'+
      '<g stroke="currentColor" stroke-width="1"><line x1="156" y1="62" x2="124" y2="61"/><line x1="156" y1="146" x2="142" y2="146"/></g></svg>';
  }

  var A=[
    {t:'08-p3-diversity',q:'Which of the following is true of <b>all</b> living things?',
     o:['They can move from place to place.','They need air, food and water to survive.','They reproduce by laying eggs.','They make their own food.'],a:1,
     e:'Plants cannot move from place to place, many animals give birth to young alive, and only plants make their own food. Every living thing needs air, food and water.'},
    {t:'08-p3-diversity',ctx:tbl([['Group X','Group Y'],['fern','mushroom'],['moss','bread mould'],['rose plant','']]),q:'Which headings are correct for Group X and Group Y?',
     o:['X: flowering plants &nbsp;·&nbsp; Y: non-flowering plants','X: can make their own food &nbsp;·&nbsp; Y: cannot make their own food','X: reproduce by spores &nbsp;·&nbsp; Y: reproduce by seeds','X: have roots &nbsp;·&nbsp; Y: have leaves'],a:1,
     e:'Fern, moss and the rose plant are plants, so they make their own food. Mushrooms and bread mould are fungi: they cannot make food. (1) is wrong because ferns and moss do not have flowers. (3) is wrong because fungi reproduce by spores.'},
    {t:'08-p3-diversity',q:'Siti left a slice of bread in a warm, damp cupboard. After four days she saw black, fuzzy patches on it. Which statement about the black patches is correct?',
     o:['They are a type of plant.','They make their own food using sunlight.','They are fungi that feed on the bread.','They reproduce by seeds.'],a:2,
     e:'The patches are bread mould, a fungus. Fungi cannot make their own food; they feed on the bread. They reproduce by spores, not seeds.'},
    {t:'10-p3-life-cycles',q:'Which animal has a three-stage life cycle in which the young looks like the adult?',
     o:['frog','mosquito','grasshopper','beetle'],a:2,
     e:'Grasshopper: egg → nymph → adult, and the nymph looks like the adult without wings. The frog also has three stages, but a tadpole does not look like an adult frog. Mosquitoes and beetles have four stages.'},
    {t:'10-p3-life-cycles',ctx:tbl([['Animal','Number of stages','Does the young look like the adult?'],['P','4','No'],['Q','3','Yes'],['R','3','No']]),q:'Which of the following could be animals P, Q and R?',
     o:['P: mosquito &nbsp;·&nbsp; Q: cockroach &nbsp;·&nbsp; R: frog','P: frog &nbsp;·&nbsp; Q: cockroach &nbsp;·&nbsp; R: butterfly','P: beetle &nbsp;·&nbsp; Q: frog &nbsp;·&nbsp; R: cockroach','P: butterfly &nbsp;·&nbsp; Q: frog &nbsp;·&nbsp; R: chicken'],a:0,
     e:'Four stages: mosquito, butterfly, beetle. Three stages with a young that looks like the adult: cockroach, grasshopper, chicken. Three stages with a young that does not look like the adult: frog (tadpole).'},
    {t:'10-p3-life-cycles',q:'Why does removing stagnant water around our homes help to reduce the number of mosquitoes?',
     o:['Adult mosquitoes need to drink the water.','Mosquitoes lay their eggs in water, and the larvae and pupae live in water.','Mosquitoes breathe through gills in the water.','The water keeps the adult mosquitoes cool.'],a:1,
     e:'The egg, larva and pupa stages of a mosquito all happen in water. With no stagnant water, the mosquito cannot complete its life cycle.'},
    {t:'09-p3-materials',ctx:tbl([['Property','metal spoon','glass cup','rubber band'],['X','Yes','No','No'],['waterproof','Yes','Yes','Yes'],['flexible','No','No','Yes']]),q:'Which of the following best represents property X?',
     o:['waterproof','allows light to pass through','good conductor of heat','can be stretched'],a:2,
     e:'Only the metal spoon has property X. Glass lets light through, so X is not (2). Rubber can be stretched, so X is not (4). Metal is a good conductor of heat; glass and rubber are poor conductors.'},
    {t:'09-p3-materials',q:'Mei wants to make a cover for her fish tank. She wants to see the fish through the cover from the top. Which material is the most suitable?',
     o:['wood','clear plastic','aluminium','cardboard'],a:1,
     e:'Clear plastic allows most light to pass through, so she can see the fish. It is also waterproof and does not break easily. Wood, aluminium and cardboard block light.'},
    {t:'11-p3-magnets',q:'Which of these objects will be attracted by a magnet?<br>A: iron nail &nbsp; B: copper wire &nbsp; C: steel pin &nbsp; D: aluminium can &nbsp; E: nickel coin',
     o:['A and B only','A, C and E only','C and D only','A, B, C, D and E'],a:1,
     e:'Iron, steel, nickel and cobalt are magnetic. Copper and aluminium are metals but they are <b>not</b> magnetic. Not all metals are attracted by magnets.'},
    {t:'11-p3-magnets',ctx:tbl([['Rod','End 1','End 2'],['P','attracted','attracted'],['Q','attracted','repelled'],['R','nothing happened','nothing happened']]),q:'Ravi brought the north pole of a magnet near each end of three rods, P, Q and R. He recorded what happened. Which statement is correct?',
     o:['P is a magnet.','Q is a magnet.','R is made of steel.','P and Q are both magnets.'],a:1,
     e:'Only a magnet can repel another magnet. Q was repelled at one end, so Q is a magnet. P was attracted at both ends: it is a magnetic material such as iron, but not a magnet. R is non-magnetic.'},
    {t:'11-p3-magnets',q:'Which is the correct way to make a steel bar into a magnet using the stroke method?',
     o:['Stroke the bar back and forth with both poles of a magnet.','Stroke the bar many times in one direction with the same pole of a magnet.','Stroke a copper bar with a magnet many times.','Hit the bar with a hammer many times.'],a:1,
     e:'Stroke in <b>one direction</b> only, with the <b>same pole</b>, lifting the magnet away at the end of each stroke. Copper is not magnetic, so it cannot become a magnet. Hitting a magnet makes it lose its magnetism.'},
    {t:'01-plant-systems',q:'Which of the following is <b>not</b> a function of the roots of a plant?',
     o:['to hold the plant firmly in the soil','to take in water and mineral salts from the soil','to make food for the plant','to store food in some plants, such as carrots'],a:2,
     e:'Plants make food in their <b>leaves</b>, using light. Roots hold the plant, take in water and mineral salts, and in some plants store food.'},
    {t:'01-plant-systems',q:'Leon placed the stem of a white flower in a beaker of red-coloured water. After a few hours, the petals turned red. What does this show?',
     o:['The petals make red food.','Water travels up the stem through the water-carrying tubes.','Food travels down the stem through the food-carrying tubes.','The flower takes in red light.'],a:1,
     e:'The coloured water was carried up the stem to the petals by the water-carrying tubes.'},
    {t:'01-plant-systems',q:'A potted plant was left in a dark cupboard for two weeks. It was watered every day. Its leaves turned yellow and the plant became weak. Why?',
     o:['It could not take in water.','It could not make food without light.','It took in too much air.','Its roots could not hold the soil.'],a:1,
     e:'Leaves need light to make food. Without food, the plant becomes weak. It still got water, so (1) is wrong.'},
    {t:'02-human-systems',ctx:gut(['A','B','C','D','E']),q:'The diagram shows the human digestive system. In which part is digestion completed and the digested food absorbed into the blood?',
     o:['B','C','D','E'],a:2,
     e:'D is the small intestine. Digestion is completed there and digested food passes into the blood. A mouth, B gullet, C stomach, E large intestine.'},
    {t:'02-human-systems',q:'In which parts of the digestive system are digestive juices produced?',
     o:['mouth, gullet and stomach','mouth, stomach and small intestine','stomach, small intestine and large intestine','gullet and large intestine only'],a:1,
     e:'Digestive juices are produced in the mouth (saliva), stomach and small intestine. The gullet and large intestine do not digest food.'},
    {t:'02-human-systems',q:'Which statement about the human digestive system is correct?',
     o:['Digestion starts in the stomach.','The gullet digests food using digestive juices.','Water is removed from undigested food in the large intestine.','Undigested food is absorbed into the blood in the small intestine.'],a:2,
     e:'Digestion starts in the mouth. The gullet only moves food to the stomach. <b>Digested</b> food is absorbed in the small intestine; undigested food passes to the large intestine, where water is absorbed.'},
    {t:'03-matter',q:'Which of the following is <b>not</b> matter?',
     o:['air in a balloon','steam from a kettle','a shadow on the wall','sand in a bottle'],a:2,
     e:'Matter has mass and occupies space. A shadow is only a dark area where light is blocked; it has no mass. Steam is water as a gas, so it is matter.'},
    {t:'03-matter',ctx:tree(),q:'Study the chart. Which of the following shows A, B and C correctly?',
     o:['A: oxygen &nbsp;·&nbsp; B: milk &nbsp;·&nbsp; C: stone','A: stone &nbsp;·&nbsp; B: milk &nbsp;·&nbsp; C: oxygen','A: milk &nbsp;·&nbsp; B: stone &nbsp;·&nbsp; C: oxygen','A: stone &nbsp;·&nbsp; B: oxygen &nbsp;·&nbsp; C: milk'],a:1,
     e:'A has a definite shape: a solid (stone). B has no definite shape but a definite volume: a liquid (milk). C has neither: a gas (oxygen).'},
    {t:'03-matter',q:'Syringe X contains air and syringe Y contains water. Both nozzles are sealed. When Ali pushes both plungers, the plunger of X moves in a little, but the plunger of Y does not move. What does this show?',
     o:['Air has no mass.','Air can be compressed but water cannot.','Water has no definite volume.','Air has a definite volume.'],a:1,
     e:'A gas can be compressed (squashed into a smaller space), so air has no definite volume. A liquid has a definite volume and cannot be compressed.'},
    {t:'06-heat',q:'A cup of hot tea was left on a table in a room. Which statement is correct?',
     o:['The tea gains heat from the surroundings.','The tea loses heat to the surroundings until it reaches the temperature of the surroundings.','The tea loses "coldness" to the air.','The tea keeps losing heat until it is colder than the room.'],a:1,
     e:'Heat flows from a hotter place to a colder place. The tea loses heat until it is at room temperature, then it stops cooling. Coldness does not flow.'},
    {t:'04-light',q:'Which of the following give off their own light?<br>A: the Moon &nbsp; B: a burning candle &nbsp; C: a firefly &nbsp; D: a mirror',
     o:['A and B only','B and C only','A, B and C only','B, C and D only'],a:1,
     e:'The burning candle and the firefly are sources of light. The Moon and a mirror only <b>reflect</b> light; they are not light sources.'},
    {t:'04-light',q:'Ben can see a book on a table in a bright room. Which statement explains why?',
     o:['Light travels from Ben&rsquo;s eyes to the book.','Light from the lamp falls on the book and is reflected into Ben&rsquo;s eyes.','The book gives off its own light.','Light from the lamp goes straight into Ben&rsquo;s eyes only.'],a:1,
     e:'We see an object when light from a light source falls on it and is <b>reflected</b> into our eyes. Light never comes out of our eyes.'},
    {t:'05-shadows',ctx:shadowSet(),q:'Rina shone a torch on a toy and saw its shadow on the screen. What should she do to make the shadow <b>smaller</b>?',
     o:['Move the toy nearer to the torch.','Move the torch nearer to the toy.','Move the toy nearer to the screen.','Move the screen further away from the toy.'],a:2,
     e:'The nearer the object is to the light source, the bigger the shadow. Moving the toy towards the screen (away from the torch) makes the shadow smaller. Choices (1), (2) and (4) all make it bigger.'},
    {t:'05-shadows',ctx:cone(),q:'A cone is held with its pointed tip facing the torch. What is the shape of its shadow on the screen?',
     o:['triangle','circle','square','ring'],a:1,
     e:'A shadow has the outline of the side facing the light. Seen from the torch, a cone pointing straight at it looks like a circle. Side-on, it would give a triangle.'},
    {t:'05-shadows',ctx:tbl([['Sheet','Amount of light that passed through (units)'],['P','900'],['Q','20'],['R','0'],['S','450']]),q:'Four sheets of different materials were placed, one at a time, between a torch and a light sensor. Which sheet would form the darkest shadow?',
     o:['P','Q','R','S'],a:2,
     e:'R lets no light through: it is opaque, so it forms the darkest shadow. P lets the most light through and would form the faintest shadow.'},
    {t:'06-heat',q:'Which pair of materials are both good conductors of heat?',
     o:['copper and steel','wood and steel','plastic and copper','glass and rubber'],a:0,
     e:'Metals such as copper and steel are good conductors of heat. Wood, plastic, glass and rubber are poor conductors.'},
    {t:'07-effects-of-heat',q:'The metal lid of a glass jar was stuck tightly. After the lid was held under hot running water for a minute, it could be opened easily. Why?',
     o:['The glass jar contracted.','The metal lid gained heat and expanded more than the glass.','The metal lid lost heat and contracted.','The hot water made the lid lighter.'],a:1,
     e:'The metal lid gained heat and expanded, so it became looser. Metal expands more than glass when heated by the same amount.'}
  ];

  var B=[
    {n:29,t:'08-p3-diversity',ctx:'Siti placed two identical slices of bread in two boxes and left them for 4 days.'+tbl([['Slice','Where it was kept','After 4 days'],['A','warm cupboard, sprinkled with water','black fuzzy patches'],['B','refrigerator, kept dry','no change']]),parts:[
      {p:'(a)',q:'To which group of living things do the black patches belong?',w:[/fung/],model:'Fungi (it is bread mould).',e:'Mould is a fungus: it cannot make its own food and reproduces by spores.'},
      {p:'(b)',q:'Based on the results, state <b>two</b> conditions that help the mould to grow.',k:[{l:'warmth',all:[/warm|temperature|heat/]},{l:'moisture / water',all:[/water|moist|damp|wet/]}],
       model:'Warmth and moisture (water).',e:'Slice A was warm and damp; slice B was cold and dry. (Mould also needs food and air.)'}]},
    {n:30,t:'10-p3-life-cycles',ctx:'The diagram shows the life cycle of a mosquito.<div class="steps"><span class="box">egg</span><span class="to">→</span><span class="box">P</span><span class="to">→</span><span class="box">Q</span><span class="to">→</span><span class="box">adult</span><span class="to">→ back to egg</span></div>',parts:[
      {p:'(a)(i)',q:'Name stage P.',w:[/lar[vf]a/],model:'Larva'},
      {p:'(a)(ii)',q:'Name stage Q.',w:[/pupa/],model:'Pupa'},
      {p:'(b)',q:'Mosquito larvae must come up to the water surface to breathe air. Explain how spreading a thin layer of oil on the surface of a pond reduces the number of mosquitoes.',
       k:[{l:'larvae cannot reach the air',all:[/air|breathe|oxygen/]},{l:'larvae die / cannot become adults',all:[/die|dead|kill|suffocat|(not|n't|unable|cannot|fewer)[^.]*(adult|grow|develop)/]}],
       model:'The oil stops the larvae from reaching the air at the surface, so they cannot breathe. They die before they can become adults.'}]},
    {n:31,t:'01-plant-systems',ctx:'Leon placed a white flower with its stem in blue-coloured water. After 6 hours, the petals had blue streaks.',parts:[
      {p:'(a)',q:'Which part of the stem carried the coloured water to the petals?',w:[/water[- ]?carrying/,/xylem/],model:'The water-carrying tubes.'},
      {p:'(b)',q:'Leon then removed all the leaves from a potted plant. Explain how this would affect the plant after a few weeks.',
       k:[{l:'cannot make food',all:[/food/]},{l:'plant becomes weak / dies',all:[/die|dead|weak|wilt|not grow|stop(s|ped)? growing|cannot grow|can't grow|unable to grow/]}],
       model:'The leaves make food for the plant. Without leaves the plant cannot make food, so it will become weak and may die.'}]},
    {n:32,t:'01-plant-systems',ctx:'Ken set up four dishes, each with 10 green bean seeds on cotton wool.'+tbl([['Set-up','Water','Light','Temperature','Result'],['A','yes','yes','25 °C','germinated'],['B','no','yes','25 °C','did not germinate'],['C','yes','no (dark box)','25 °C','germinated'],['D','yes','yes','5 °C','did not germinate']]),parts:[
      {p:'(a)',q:'Which <b>two</b> set-ups should be compared to find out if seeds need water to germinate?',w:[/^(set-?ups? )?a\s*(and|&|,)\s*(set-?up )?b\b/,/^(set-?ups? )?b\s*(and|&|,)\s*(set-?up )?a\b/],model:'A and B',e:'Only the water is different between A and B. Everything else is kept the same (fair test).'},
      {p:'(b)',q:'What do set-ups A and C show about light and germination?',k:[{l:'seeds do not need light to germinate',all:[/(not|n't|no)\b[^.]*(need|require|necessary)[^.]*light|light[^.]*(not|n't)[^.]*(need|required|necessary|important)|without light|in (the )?dark/]}],
       model:'Seeds do not need light to germinate.',e:'C was in the dark and still germinated. (Seedlings need light later, to make food.)'},
      {p:'(c)',q:'Why did the seeds in set-up D not germinate?',k:[{l:'too cold / no warmth',all:[/cold|warm|temperature|low|5/]}],
       model:'It was too cold. Seeds need warmth to germinate.'}]},
    {n:33,t:'02-human-systems',ctx:gut(['','P','Q','R','S']),parts:[
      {p:'(a)(i)',q:'Name part P.',w:[/gullet|o?esophagus/],model:'Gullet'},
      {p:'(a)(ii)',q:'Name part S.',w:[/large intestine/],model:'Large intestine'},
      {p:'(b)',q:'State one function of part Q.',k:[{l:'digests food / mixes it with digestive juices',all:[/digest|break|juice|churn|mix|store|keep/]}],
       model:'Q is the stomach. It mixes food with digestive juices and digests (breaks down) the food. It also stores food for a few hours.'}]},
    {n:34,t:'03-matter',ctx:'Ali fixed a funnel into the mouth of an "empty" bottle and sealed the gap with plasticine. When he poured water into the funnel, the water stayed in the funnel and did not flow into the bottle.'+bottle(),parts:[
      {p:'(a)',q:'Explain why the water could not flow into the bottle.',
       k:[{l:'the bottle is full of air (air occupies space)',all:[/air/]},{l:'the air cannot escape',all:[/(cannot|can't|can not|could not|couldn't|unable|no way|not able)[^.]*(escape|get out|come out|leave|go out|out)|seal|trapped|no space|no room/]}],
       model:'The bottle was full of air, and air occupies space. The plasticine sealed the bottle, so the air could not escape to make space for the water.'},
      {p:'(b)',q:'Suggest one thing Ali could do so that the water can flow into the bottle.',k:[{l:'let the air out (hole / straw / remove plasticine)',all:[/hole|straw|tube|remove|take (out|away|off)|loosen|open|let[^.]*air/]}],
       model:'Make a small hole in the plasticine (or push a straw through it) so the air can escape.'}]},
    {n:35,t:'03-matter',ctx:'A 500 cm³ bottle contained 200 cm³ of water. The rest of the bottle was filled with air.',parts:[
      {p:'(a)',q:'What was the volume of air in the bottle? (cm³)',w:[/^300(?!\d)/],model:'300 cm³',e:'500 − 200 = 300 cm³'},
      {p:'(b)',q:'All the water was poured into an empty 1000 cm³ jug. What is the volume of water in the jug? Explain your answer.',
       k:[{l:'200 cm³',all:[/(^|\D)200(?!\d)/]},{l:'a liquid has a definite volume',all:[/definite volume|fixed volume|same volume|volume (does not|doesn't|did not|didn't|will not|won't|cannot|can't|stays|remains|is the same)|not change/]}],
       model:'200 cm³. Water is a liquid, so it has a definite volume. Its shape changes to fit the jug, but its volume stays the same.'},
      {p:'(c)',q:'After the water was poured out, what is the volume of air in the 500 cm³ bottle? (cm³)',w:[/^500(?!\d)/],model:'500 cm³',e:'A gas has no definite volume. The air spreads out to fill the whole bottle.'}]},
    {n:36,t:'04-light',ctx:'Jia looked through a small hole into a closed box with a toy inside. She could not see the toy. When her friend shone a torch through a second hole in the box, Jia could see the toy.',parts:[
      {p:'(a)',q:'Why could Jia not see the toy at first?',k:[{l:'no light in the box',all:[/(no|not|n't|without)[^.]*light|dark/]}],
       model:'It was dark in the box: there was no light to fall on the toy, so no light was reflected from it into her eyes.'},
      {p:'(b)',q:'Explain how Jia could see the toy after the torch was switched on.',
       k:[{l:'light from the torch fell on the toy',all:[/torch|light/,/toy|fell|falls|fall on|shine|shone|hit/]},{l:'the toy reflected light into her eyes',all:[/reflect/,/eye/]}],
       model:'Light from the torch fell on the toy. The toy reflected the light into Jia&rsquo;s eyes.'}]},
    {n:37,t:'05-shadows',ctx:shadowSet()+'Rina kept the torch and the screen in the same places and moved the toy. She measured the height of the shadow each time.'+tbl([['Distance of toy from torch (cm)','10','20','30','40'],['Height of shadow (cm)','40','20','14','10']]),parts:[
      {p:'(a)',q:'State the relationship between the distance of the toy from the torch and the height of the shadow.',
       k:[{l:'further from the torch → smaller shadow',all:[/(further|farther|increase|more|longer|greater|bigger|larger)[^.]*(smaller|decrease|shorter|less|lower)|(smaller|decrease|shorter|less|lower)[^.]*(further|farther|increase|more|greater)|(nearer|closer)[^.]*(bigger|larger|increase|taller|longer|greater)/]}],
       model:'The further the toy is from the torch, the shorter the shadow.'},
      {p:'(b)',q:'If the toy is placed 50 cm from the torch, will the shadow be taller or shorter than 10 cm?',w:[/short|less|small|below|lower/],model:'Shorter than 10 cm.'},
      {p:'(c)',q:'Name one variable that Rina kept the same.',k:[{l:'e.g. same toy, same torch, distance between torch and screen',all:[/toy|object|torch|screen|bright/,/^(?![\s\S]*(distance (of|from) (the )?(toy|object)|height))/]}],
       model:'The same toy (or the same torch, or the distance between the torch and the screen).',e:'The distance of the toy from the torch is the variable she <b>changed</b>, and the height of the shadow is what she <b>measured</b>.'}]},
    {n:38,t:'06-heat',ctx:'Four rods of the same size were made of different materials. A bead was stuck with wax to one end of each rod. The other ends were put into the same tank of hot water.'+tbl([['Material of rod','copper','steel','glass','wood'],['Time for bead to drop (min)','2','6','15','did not drop after 20']]),parts:[
      {p:'(a)',q:'Which material is the best conductor of heat?',w:[/copper/],model:'Copper'},
      {p:'(b)',q:'Explain why the bead on the copper rod dropped first.',
       k:[{l:'copper is the best conductor of heat',all:[/(good|best|better|fast)[^.]*conduct|conduct[^.]*(best|fast|quick)/]},{l:'the wax gained heat fastest and melted',all:[/melt/]}],
       model:'Copper is the best conductor of heat. Heat from the hot water travelled through the copper rod to the wax fastest, so that wax melted first and the bead dropped.'},
      {p:'(c)',q:'Which of these four materials is the most suitable for the handle of a frying pan? Give a reason.',
       k:[{l:'wood, because it is a poor conductor of heat',all:[/wood/,/(poor|bad|not a good|weak)[^.]*conduct|insulat|(does not|doesn't|not) conduct|heat[^.]*(slow|not)/]}],
       model:'Wood. It is a poor conductor of heat, so heat from the hot pan does not flow quickly to the hand.'}]},
    {n:39,t:'06-heat',ctx:'Two identical cups were filled with the same amount of water at 80 °C. Cup X was wrapped in a woollen cloth. Cup Y was not wrapped.'+tbl([['Cup','X (wrapped)','Y (not wrapped)'],['Temperature after 20 min','65 °C','50 °C']]),parts:[
      {p:'(a)',q:'Which cup of water lost heat faster?',w:[/^(cup )?y\b/],model:'Cup Y'},
      {p:'(b)',q:'Explain why the water in cup X stayed hot for longer.',
       k:[{l:'wool is a poor conductor of heat',all:[/(poor|bad|not a good)[^.]*conduct|insulat|trap[^.]*air/]},{l:'it slows down heat loss to the surroundings',all:[/(slow|less|reduce|prevent|stop)[^.]*heat|heat[^.]*(slow|less)/]}],
       model:'Wool is a poor conductor of heat (it also traps air, a poor conductor). It slows down the heat lost from the water to the surroundings.'},
      {p:'(c)',q:'After 3 hours, the water in both cups was at 30 °C and did not drop any further. Explain why.',
       k:[{l:'it reached the temperature of the surroundings',all:[/same[^.]*(temperature|surround|room)|room temperature|surroundings/]}],
       model:'The water had reached the temperature of the surroundings (room temperature), so it no longer lost heat.'}]},
    {n:40,t:'07-effects-of-heat',ctx:'Kumar put a dented ping-pong ball into a bowl of hot water. After a while, the dent popped out.',parts:[
      {p:'(a)',q:'Explain why the dent popped out.',
       k:[{l:'the air inside gained heat',all:[/air/,/gain|heat|hot|warm/]},{l:'the air expanded and pushed out the dent',all:[/expand/]}],
       model:'The air inside the ball gained heat from the hot water and expanded, pushing the dent out.'},
      {p:'(b)',q:'Small gaps are left between the metal rails of a railway track. Explain why.',
       k:[{l:'rails gain heat and expand on hot days',all:[/expand/]},{l:'without gaps the rails would bend',all:[/bend|buckle|crack|break|curve|push|damage|out of shape/]}],
       model:'On a hot day the rails gain heat and expand. The gaps give them room to expand, so they do not push against each other and bend.'}]},
    {n:41,t:'11-p3-magnets',ctx:'Ravi counted how many paper clips each magnet could hold.'+tbl([['Magnet','A','B','C'],['Number of paper clips','3','12','7']]),parts:[
      {p:'(a)',q:'Which magnet is the strongest?',w:[/^(magnet )?b\b/],model:'Magnet B'},
      {p:'(b)',q:'Ravi has a steel rod X. Describe how he can use a magnet to find out if rod X is a magnet.',
       k:[{l:'bring a pole of the magnet near each end of X',all:[/near|close|toward|bring|put|place|hang/]},{l:'if X repels it, X is a magnet',all:[/repel|push(es)? away/]}],
       model:'Bring one pole of the magnet near each end of rod X. If one end of X repels the magnet, X is a magnet.',e:'Being attracted does not prove it: steel is attracted to a magnet anyway. Only a magnet can repel.'}]}
  ];
