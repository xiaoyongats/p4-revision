/*meta
title: Science Mock Paper 2
eyebrow: P4 Science · Mock exam
h1: Science Mock Paper 2
lead: A second full end-of-year paper in the same format as the 2024 school papers. All questions are new and different from Mock Paper 1. Covers every P4 topic plus the P3 topics that are tested.
key: p4m-sci2
sub: 1 h 45 min · 100 marks
intro: intro-science.html
quiz_lead: Choose one answer for each Booklet A question. For Booklet B, write your answers in the boxes.
*/
  var CFG={amark:2,minutes:105,base:'../science/'};
  var TOPICS={'01-plant-systems':'Plant systems','02-human-systems':'Human digestive system','03-matter':'Matter','04-light':'Light',
    '05-shadows':'Shadows','06-heat':'Heat','07-effects-of-heat':'Effects of heat','08-p3-diversity':'Diversity (P3)',
    '09-p3-materials':'Materials (P3)','10-p3-life-cycles':'Life cycles (P3)','11-p3-magnets':'Magnets (P3)'};
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

  var A=[
    {t:'08-p3-diversity',q:'Which of the following is a <b>non-living</b> thing?',
     o:['a bean seed','a mushroom','a pebble','a hen&rsquo;s egg that will hatch'],a:2,
     e:'A seed can grow into a plant and an egg can hatch into a chick, so both are living. A mushroom is a fungus. A pebble cannot grow, reproduce or respond.'},
    {t:'08-p3-diversity',q:'A cat, a whale and a bat are in the same group. Which characteristic do they share?',
     o:['They have feathers.','They live on land.','They give birth to young alive and feed them with milk.','They can fly.'],a:2,
     e:'All three are <b>mammals</b>. A whale lives in water and a bat can fly, but both give birth to young alive and feed them with milk.'},
    {t:'08-p3-diversity',q:'Which statement about bacteria is correct?',
     o:['All bacteria are harmful.','Bacteria are a kind of fungus.','Bacteria are a kind of plant.','Bacteria can only be seen with a microscope.'],a:3,
     e:'Bacteria are too small to see with our eyes. Some are harmful, but many are useful (for example, in making yoghurt). They are neither plants nor fungi.'},
    {t:'10-p3-life-cycles',q:'In which stage of its life cycle does a butterfly eat the most leaves?',
     o:['egg','caterpillar (larva)','pupa','adult'],a:1,
     e:'The caterpillar eats leaves all the time and grows quickly. The pupa does not feed, and the adult butterfly sips nectar instead.'},
    {t:'10-p3-life-cycles',q:'Which shows the life cycle of a frog in the correct order?',
     o:['egg → tadpole → froglet → adult','egg → froglet → tadpole → adult','tadpole → egg → froglet → adult','egg → larva → pupa → adult'],a:0,
     e:'Frog: egg → tadpole (lives in water, has gills) → froglet (tadpole with legs) → adult frog. Larva and pupa are insect stages.'},
    {t:'10-p3-life-cycles',q:'Which of these animals have a life cycle with <b>three</b> stages?<br>A: chicken &nbsp; B: beetle &nbsp; C: cockroach &nbsp; D: mosquito',
     o:['A and B only','A and C only','B and D only','C and D only'],a:1,
     e:'Chicken: egg → chick → adult. Cockroach: egg → nymph → adult. Beetles and mosquitoes have four stages (egg, larva, pupa, adult).'},
    {t:'09-p3-materials',q:'Why is rubber used to make the soles of shoes?',
     o:['It is transparent.','It is a good conductor of heat.','It is attracted by magnets.','It is waterproof and gives a good grip.'],a:3,
     e:'Rubber does not let water through, and it grips the floor so we do not slip. It is flexible too.'},
    {t:'09-p3-materials',ctx:tbl([['Material','A','B','C','D'],['Number of drops before the sheet tore','2','9','5','15']]),
     q:'Ken dropped the same weight from the same height onto sheets of materials A, B, C and D of the same size. He counted how many drops it took to tear each sheet. Which material is the strongest?',
     o:['A','B','C','D'],a:3,
     e:'The more drops a sheet can take before tearing, the stronger it is. D needed 15 drops.'},
    {t:'11-p3-magnets',q:'Two ring magnets, X and Y, are put on a pencil. Magnet Y stays floating above magnet X without touching it. Why?',
     o:['The pencil holds Y up.','The poles facing each other are unlike poles, so they attract.','The poles facing each other are like poles, so they repel.','Y is not a magnet.'],a:2,
     e:'Like poles (N and N, or S and S) <b>repel</b>. The pushing force holds Y up. If the poles attracted, Y would stick to X.'},
    {t:'11-p3-magnets',q:'Which of the following can be used to separate iron filings from sand?',
     o:['a magnet','water','a piece of filter paper','a copper plate'],a:0,
     e:'Iron is magnetic, so a magnet pulls out the iron filings and leaves the sand behind.'},
    {t:'11-p3-magnets',q:'Which of these will make a magnet lose its magnetism?',
     o:['storing it with a keeper','keeping it in a wooden box','using it to pick up pins','dropping or heating it many times'],a:3,
     e:'Dropping, hitting or heating a magnet makes it weaker. Keepers help a magnet keep its magnetism.'},
    {t:'01-plant-systems',q:'Which part of a plant carries the food made in the leaves to other parts of the plant?',
     o:['the water-carrying tubes','the food-carrying tubes','the roots','the flowers'],a:1,
     e:'Food made in the leaves is carried by the <b>food-carrying tubes</b> to all parts of the plant. The water-carrying tubes carry water up from the roots.'},
    {t:'01-plant-systems',q:'A ring of the outer layer of a tree trunk, which contains the food-carrying tubes, was removed. After a few weeks, a swelling formed just <b>above</b> the ring. Why?',
     o:['Food from the leaves could not move down past the ring, so it collected there.','Water collected above the ring.','New roots grew above the ring.','The leaves fell and piled up above the ring.'],a:0,
     e:'The food-carrying tubes were cut. Food moving down from the leaves was stopped at the ring and collected above it, causing the swelling.'},
    {t:'01-plant-systems',q:'Which are functions of the stem?<br>A: holds the plant upright &nbsp; B: carries water and food &nbsp; C: takes in water from the soil &nbsp; D: makes seeds',
     o:['A and B only','A and C only','B and D only','A, B, C and D'],a:0,
     e:'The stem holds the plant up (so leaves get light) and carries water and food. The roots take in water from the soil, and the flowers make seeds.'},
    {t:'02-human-systems',ctx:gut(['B','A','D','E','C']),q:'The diagram shows the human digestive system. Which part absorbs water from the undigested food?',
     o:['A','C','D','E'],a:1,
     e:'C is the large intestine: it absorbs water from undigested food. B mouth, A gullet, D stomach, E small intestine.'},
    {t:'02-human-systems',q:'Which shows the correct path of food through the digestive system?',
     o:['mouth → gullet → stomach → small intestine → large intestine','mouth → stomach → gullet → small intestine → large intestine','mouth → gullet → stomach → large intestine → small intestine','mouth → gullet → small intestine → stomach → large intestine'],a:0,
     e:'Food goes mouth → gullet → stomach → small intestine → large intestine.'},
    {t:'02-human-systems',q:'Which of the following is <b>not</b> part of the human digestive system?',
     o:['gullet','stomach','lungs','small intestine'],a:2,
     e:'The lungs are part of the respiratory system (breathing), not the digestive system.'},
    {t:'03-matter',q:'Which of the following has a definite volume but no definite shape?',
     o:['a stone','orange juice','air','an ice cube'],a:1,
     e:'Orange juice is a liquid: it takes the shape of its container but its volume does not change. Stones and ice are solids; air is a gas.'},
    {t:'03-matter',q:'An empty, flat ball had a mass of 400 g. After air was pumped into it, its mass was 410 g. What does this show?',
     o:['Air has mass.','Air has no mass.','Air has a definite shape.','The ball became bigger.'],a:0,
     e:'The mass went up by 10 g because of the air pumped in, so air has mass.'},
    {t:'03-matter',q:'Mei stuck a piece of tissue paper at the bottom of an empty cup. She turned the cup upside down and pushed it straight down into a tank of water. The tissue paper stayed dry. Why?',
     o:['The tissue paper is waterproof.','Water cannot go into cups.','The water was too cold.','The air in the cup occupied the space, so the water could not fill the cup.'],a:3,
     e:'The "empty" cup was full of air. Air occupies space and was trapped, so the water could not rise up to the tissue.'},
    {t:'06-heat',q:'Which statement about heat and temperature is correct?',
     o:['Temperature is measured in grams.','Heat flows from a cooler object to a hotter object.','When an object gains heat, its temperature usually rises.','A thermometer measures the amount of heat in an object.'],a:2,
     e:'Gaining heat usually makes the temperature rise. Temperature is measured in °C with a thermometer; it tells how hot something is, not how much heat it has. Heat flows from hotter to cooler.'},
    {t:'06-heat',q:'Why are the handles of cooking pots often made of plastic or wood?',
     o:['They are good conductors of heat.','They are poor conductors of heat.','They are magnetic.','They are transparent.'],a:1,
     e:'Plastic and wood are poor conductors of heat, so heat from the pot does not flow quickly to our hands.'},
    {t:'06-heat',q:'Two identical ice cubes were put in the same room, one on a metal tray and one on a wooden tray. Which melted first, and why?',
     o:['The one on the wooden tray, because wood is a good conductor of heat.','The one on the metal tray, because metal is cold.','The one on the metal tray, because metal conducts heat from the surroundings to the ice faster.','Both melted at the same time.'],a:2,
     e:'Metal is a good conductor of heat. Heat from the surroundings flowed through the metal tray into the ice faster, so that ice melted first. (Metal only <b>feels</b> cold because it conducts heat away from our hand quickly.)'},
    {t:'07-effects-of-heat',q:'A bottle filled with coloured water has a straw through its stopper. When the bottle is put into a basin of hot water, the water level in the straw rises. Why?',
     o:['The straw gains heat and contracts.','The coloured water loses heat and contracts.','Hot water from the basin enters the bottle.','The coloured water gains heat and expands.'],a:3,
     e:'The water in the bottle gains heat and expands, so it needs more space and rises up the straw. This is how a thermometer works.'},
    {t:'07-effects-of-heat',q:'Which of these changes happens when a substance <b>loses</b> heat?',
     o:['ice melting into water','water boiling into steam','water freezing into ice','butter softening in the sun'],a:2,
     e:'Freezing happens when water loses heat. Melting, boiling and softening all happen when a substance gains heat.'},
    {t:'04-light',q:'Which of these materials allows the most light to pass through?',
     o:['frosted glass','clear glass','wood','tracing paper'],a:1,
     e:'Clear glass is transparent: it lets most light through. Frosted glass and tracing paper let some light through (translucent). Wood blocks light (opaque).'},
    {t:'05-shadows',q:'Daniel stood in the school field on a sunny day. At which time would his shadow be the shortest?',
     o:['8 a.m.','12 noon','4 p.m.','6 p.m.'],a:1,
     e:'At noon the Sun is highest in the sky, so shadows are the shortest. In the morning and evening the Sun is low, so shadows are long.'},
    {t:'05-shadows',q:'Why is a shadow formed when a torch shines on a wooden block?',
     o:['The block blocks the light, and light travels in a straight line.','Light bends around the block.','The block gives off dark light.','The wall absorbs the light.'],a:0,
     e:'Light travels in straight lines. The opaque block stops the light, so a dark area (the shadow) forms behind it.'}
  ];

  var B=[
    {n:29,t:'08-p3-diversity',ctx:'Study the key, which is used to identify four animals: a cat, a sparrow, a guppy and a crocodile.'+
      '<div class="passage"><p><b>1</b> &nbsp;Has feathers? &nbsp;Yes → <b>P</b> &nbsp;·&nbsp; No → go to 2</p><p><b>2</b> &nbsp;Lives only in water? &nbsp;Yes → <b>Q</b> &nbsp;·&nbsp; No → go to 3</p><p><b>3</b> &nbsp;Has fur? &nbsp;Yes → <b>R</b> &nbsp;·&nbsp; No → <b>S</b></p></div>',parts:[
      {p:'(a)(i)',q:'Which animal is P?',w:[/sparrow/],model:'Sparrow'},
      {p:'(a)(ii)',q:'Which animal is S?',w:[/crocodile/],model:'Crocodile',e:'The crocodile has no feathers, does not live only in water, and has no fur (it has scales).'},
      {p:'(b)',q:'State one other body part that P has but the other three animals do not have.',k:[{l:'wings / a beak',all:[/wing|beak/]}],model:'Wings (or a beak).'}]},
    {n:30,t:'10-p3-life-cycles',ctx:'The table shows how long a beetle spends in each stage of its life cycle.'+tbl([['Stage','egg','larva','pupa','adult'],['Number of days','5','15','8','30']]),parts:[
      {p:'(a)',q:'How many days does the beetle take to grow from an egg into an adult?',w:[/^28(?!\d)/],model:'28 days',e:'5 + 15 + 8 = 28 days. The adult stage is not counted, because it is already an adult.'},
      {p:'(b)',q:'Farmers worry most about the larva stage. Suggest why.',k:[{l:'the larva eats a lot (of the crops / plants)',all:[/eat|feed|food|crop|plant|leaves|leaf/]}],
       model:'The larva feeds a lot (on leaves and crops) so that it can grow, so it damages the farmers&rsquo; crops.'},
      {p:'(c)',q:'Name one other animal that has the same number of stages in its life cycle as the beetle.',w:[/butterfly|mosquito|moth|housefly|\bfly\b|bee|ant|ladybird|ladybug/],model:'Butterfly (or mosquito, moth, housefly)',e:'The beetle has four stages: egg, larva, pupa, adult.'},
      {p:'(d)',q:'In which stage does the beetle not eat or move about?',w:[/pupa/],model:'Pupa'}]},
    {n:31,t:'01-plant-systems',ctx:'Two identical potted plants, X and Y, were placed side by side. Plant X was watered every day. Plant Y was not watered. After 5 days, plant X was still upright, but the leaves and stem of plant Y were drooping.',parts:[
      {p:'(a)',q:'What was the variable that was changed in this experiment?',k:[{l:'whether the plant was watered',all:[/water/]}],model:'Whether the plant was watered (the amount of water given).'},
      {p:'(b)',q:'Explain why plant Y drooped.',
       k:[{l:'the roots could not take in (enough) water',all:[/water/]},{l:'so the stem and leaves could not stay firm / upright',all:[/firm|upright|stiff|support|droop|wilt|limp|soft|weak|cannot stand|can't stand|fall|bend/]}],
       model:'Plant Y did not get water, so its roots could not take in water. Without enough water, the stem and leaves could not stay firm and upright, so they drooped.'}]},
    {n:32,t:'01-plant-systems',ctx:'Ravi measured the mass of the seed leaves of a germinating green bean seed.'+tbl([['Day','0','3','6','9'],['Mass of seed leaves (g)','1.0','0.8','0.5','0.2']]),parts:[
      {p:'(a)',q:'Why did the mass of the seed leaves decrease?',k:[{l:'the stored food was used by the young plant to grow',all:[/food/,/use|used|using/]}],
       model:'The seed leaves store food. The young plant used up the food to grow, so the seed leaves became lighter.'},
      {p:'(b)',q:'Name the <b>three</b> conditions that seeds need to germinate.',
       k:[{l:'water',all:[/water|moist/]},{l:'air',all:[/\bair\b|oxygen/]},{l:'warmth',all:[/warm|temperature|heat/]}],
       model:'Water, air and warmth.',e:'Seeds do <b>not</b> need light or soil to germinate.'}]},
    {n:33,t:'02-human-systems',ctx:'Ben chewed a plain cracker for two minutes without swallowing. He noticed that it started to taste sweet.',parts:[
      {p:'(a)',q:'Name the digestive juice in the mouth.',w:[/saliva/],model:'Saliva'},
      {p:'(b)',q:'Explain why the cracker started to taste sweet.',k:[{l:'saliva digested / broke down the food (starch) into simpler substances (sugar)',all:[/saliva|digest|break|broke|broken/]}],
       model:'The saliva digested the cracker: it broke down the starch into simpler substances (sugar), which taste sweet.'},
      {p:'(c)',q:'In which part of the digestive system is digestion completed?',w:[/small intestine/],model:'Small intestine'},
      {p:'(d)',q:'How does the digested food get to the rest of the body?',k:[{l:'it is absorbed into the blood (and carried around the body)',all:[/blood/]}],
       model:'The digested food is absorbed into the blood in the small intestine, and the blood carries it to all parts of the body.'}]},
    {n:34,t:'03-matter',ctx:'Mei pushed a balloon into an empty plastic bottle and stretched its mouth over the mouth of the bottle. When she tried to blow up the balloon, it hardly grew bigger. Then she made a small hole at the bottom of the bottle and could blow up the balloon easily.',parts:[
      {p:'(a)',q:'Why could the balloon not be blown up at first?',
       k:[{l:'the bottle was filled with air (air occupies space)',all:[/air/]},{l:'the air could not escape / had no space to go',all:[/(cannot|can't|can not|could not|couldn't|unable|no way|not able|nowhere)[^.]*(escape|get out|come out|leave|go|out)|trapped|no space|no room|seal/]}],
       model:'The bottle was full of air, and air occupies space. The air was trapped and could not escape, so there was no space for the balloon to grow.'},
      {p:'(b)',q:'Explain why the balloon could be blown up after the hole was made.',k:[{l:'the air in the bottle could escape through the hole',all:[/hole/,/air|escape|out/]}],
       model:'The air in the bottle could escape through the hole, making space for the balloon to grow.'}]},
    {n:35,t:'03-matter',ctx:tbl([['Substance','Definite shape?','Definite volume?'],['W','Yes','Yes'],['X','No','Yes'],['Y','No','No']]),parts:[
      {p:'(a)',q:'In which state is substance X?',w:[/liquid/],model:'Liquid'},
      {p:'(b)',q:'Give one example of substance Y.',w:[/air|oxygen|steam|water vapou?r|\bgas|carbon dioxide|nitrogen|helium/],model:'Air (any gas, e.g. oxygen, steam)'},
      {p:'(c)',q:'Some of substance Y was pumped into an empty 2-litre container and the container was closed. What is the volume of Y in the container?',w:[/^2(?!\d)|two/],model:'2 litres',e:'A gas has no definite volume: it spreads out to fill the whole container.'}]},
    {n:36,t:'04-light',ctx:'Jun looked at a lit candle through a straight pipe and could see the flame. When he looked through a bent pipe, he could not see the flame.',parts:[
      {p:'(a)',q:'Explain how Jun could see the flame through the straight pipe.',
       k:[{l:'light from the flame travelled in a straight line (through the pipe) into his eyes',all:[/light/,/eye/]}],
       model:'Light from the candle flame travelled in a straight line through the pipe into his eyes.'},
      {p:'(b)',q:'Why could he not see the flame through the bent pipe?',k:[{l:'light travels in straight lines and cannot bend round the corner',all:[/straight|cannot bend|can't bend|not bend|blocked|block/]}],
       model:'Light travels in straight lines. It cannot bend around the corner of the pipe, so it could not reach his eyes.'},
      {p:'(c)',q:'Suggest what Jun could put inside the bent pipe so that he can see the flame.',w:[/mirror/],model:'A mirror (at the bend)',e:'A mirror reflects the light around the corner, like a periscope.'}]},
    {n:37,t:'05-shadows',ctx:'Siti measured the length of the shadow of a flagpole at different times on a sunny day.'+tbl([['Time','8 a.m.','10 a.m.','12 noon','2 p.m.','4 p.m.'],['Length of shadow (cm)','150','80','20','75','140']]),parts:[
      {p:'(a)',q:'At what time was the shadow the shortest?',w:[/12|noon/],model:'12 noon'},
      {p:'(b)',q:'Explain why the length of the shadow changed during the day.',
       k:[{l:'the position of the Sun in the sky changed',all:[/sun/,/position|move|moving|moved|change|higher|lower|high|low|rise|set/]},{l:'the higher the Sun, the shorter the shadow',all:[/high|above|overhead|top/]}],
       model:'The position of the Sun in the sky changes during the day. When the Sun is higher in the sky (at noon), the shadow is shorter; when it is low, the shadow is longer.'},
      {p:'(c)',q:'At 8 a.m. the shadow pointed to the west. In which direction did it point at 4 p.m.?',w:[/east/],model:'East',e:'In the morning the Sun is in the east, so the shadow points west. In the afternoon the Sun is in the west, so the shadow points east.'}]},
    {n:38,t:'06-heat',ctx:'Identical ice cubes were placed in three identical-sized cups made of materials P, Q and R. The cups were kept in the same room.'+tbl([['Cup made of','P','Q','R'],['Time for the ice to melt completely (min)','20','45','90']]),parts:[
      {p:'(a)',q:'Which material is the poorest conductor of heat?',w:[/^r\b|^(material |cup )r\b/],model:'R'},
      {p:'(b)',q:'Explain why the ice in cup R took the longest time to melt.',
       k:[{l:'R is a poor conductor of heat',all:[/(poor|bad|not a good|worst|weak)[^.]*conduct|insulat/]},{l:'the ice gained heat from the surroundings most slowly',all:[/slow|less heat|longer|least/]}],
       model:'R is the poorest conductor of heat, so heat from the surroundings flowed through the cup into the ice most slowly. The ice gained heat slowly and took the longest to melt.'},
      {p:'(c)',q:'Which material, P, Q or R, is best for making a cooler box to keep drinks cold? Give a reason.',
       k:[{l:'R, because it is a poor conductor of heat',all:[/\br\b/,/(poor|bad|not a good|worst)[^.]*conduct|insulat|slow|keeps? (the )?(drinks? )?cold/]}],
       model:'R. It is a poor conductor of heat, so it slows down the heat flowing from the surroundings to the drinks.'}]},
    {n:39,t:'06-heat',ctx:'A beaker of hot water was left on a table. Its temperature was recorded every 5 minutes.'+tbl([['Time (min)','0','5','10','15','20','25','30','35'],['Temperature (°C)','90','70','55','45','36','30','28','28']]),parts:[
      {p:'(a)',q:'What was most likely the temperature of the room?',w:[/^28(?!\d)/],model:'28 °C',e:'The water stopped cooling at 28 °C, the temperature of the surroundings.'},
      {p:'(b)',q:'If the beaker had been wrapped in a thick cloth, would the temperature after 10 minutes be higher or lower than 55 °C? Explain why.',
       k:[{l:'higher',all:[/higher|more|hotter|warmer|above/]},{l:'the cloth is a poor conductor and slows down heat loss',all:[/(poor|bad|not a good)[^.]*conduct|insulat|trap|slow|less heat|lose (heat )?(more )?slowly/]}],
       model:'Higher. The cloth is a poor conductor of heat, so it slows down the heat lost from the water to the surroundings.'}]},
    {n:40,t:'07-effects-of-heat',ctx:'A metal ball could just pass through a metal ring. After the ball was heated over a flame, it could no longer pass through the ring.',parts:[
      {p:'(a)',q:'Explain why the ball could not pass through the ring after it was heated.',
       k:[{l:'the ball gained heat',all:[/gain|heat|hot/]},{l:'the ball expanded (became bigger)',all:[/expand|bigger|larger/]}],
       model:'The ball gained heat and expanded, so it became bigger than the hole in the ring.'},
      {p:'(b)',q:'Electrical cables are hung loosely between poles, not pulled tight. Explain why.',
       k:[{l:'cables contract when cold, so tight cables may snap',all:[/contract|shrink|shorter/]}],
       model:'On a cool night the cables lose heat and contract (become shorter). If they were tight, they could snap.'}]},
    {n:41,t:'11-p3-magnets',ctx:'Amy stroked a steel nail with a magnet and counted how many paper clips the nail could then pick up.'+tbl([['Number of strokes','10','20','30','40'],['Number of paper clips picked up','2','5','9','9']]),parts:[
      {p:'(a)',q:'Based on the results, what is the relationship between the number of strokes and the strength of the nail as a magnet?',
       k:[{l:'more strokes → stronger magnet (more clips), up to 30 strokes',all:[/(more|increase)[^.]*(stronger|more|increase)/]}],
       model:'The more times the nail was stroked, the stronger it became (it picked up more paper clips), until 30 strokes.'},
      {p:'(b)',q:'Amy then dropped the nail on the floor many times. It could now pick up only 1 paper clip. Why?',
       k:[{l:'dropping made it lose (some of) its magnetism',all:[/lose|lost|weak|less magnet|magnetism/]}],
       model:'Dropping the nail made it lose most of its magnetism, so it became a weaker magnet.'},
      {p:'(c)',q:'Suggest what Amy can do to make the nail a strong magnet again.',
       k:[{l:'stroke it again (many times, in one direction, with the same pole)',all:[/stroke|rub/]}],
       model:'Stroke the nail with the magnet again many times, in one direction and with the same pole.'}]}
  ];
