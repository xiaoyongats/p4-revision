/*meta
title: Math Mock Paper 3
eyebrow: P4 Math · Mock exam · Challenge
h1: Math Mock Paper 3 (Challenge)
lead: A harder paper. Read every question twice: watch for NOT, "how many more", a.m. and p.m., units, and "simplest form". The problem sums need more than one step. No calculator.
key: p4m-math3
sub: Challenge · 1 h 45 min · 100 marks
intro: intro-math.html
include: _math.js
quiz_lead: Underline the key words (NOT, more, left, remainder, nearest, units) on your working paper before you answer.
*/
  var CFG={amark:2,minutes:105,base:'../math/',labA:'Section A',labB:'Sections B and C'};
  function sa(n,t,q,ans,ctx){var p={p:'',q:q,m:2};for(var k in ans)p[k]=ans[k];return {n:n,t:t,ctx:ctx,parts:[p]};}

  var A=[
    {h:'Section A: Multiple choice (30 marks)',t:'02-factors-multiples',q:'Which of these is <b>not</b> a factor of 36?',o:['4','9','12','8'],a:3,
     e:'36 ÷ 8 = 4 remainder 4, so 8 is <b>not</b> a factor. 4, 9 and 12 all divide 36 exactly.'},
    {t:'01-whole-numbers',q:'What is the <b>value</b> of the digit 6 in 60 507?',o:['6','600','6000','60 000'],a:3,
     e:'6 is in the ten thousands <b>place</b>, so its <b>value</b> is 60 000. (Place = where it is; value = how much it is worth.)'},
    {t:'01-whole-numbers',q:'Round 49 960 to the nearest hundred.',o:['50 000','49 900','49 000','49 960'],a:0,
     e:'The tens digit is 6, so round the hundreds up: 499 hundreds + 1 = 500 hundreds = <b>50 000</b>.'},
    {t:'04-fractions',q:'Which fraction is <b>not</b> equal to '+fr(2,3)+'?',o:[fr(6,8),fr(10,15),fr(4,6),fr(12,18)],a:0,
     e:fr(6,8)+' = '+fr(3,4)+', not '+fr(2,3)+'. The others all simplify to '+fr(2,3)+'.'},
    {t:'01-whole-numbers',q:'7 thousands, 15 tens and 3 ones = ?',o:['7153','71 503','7513','70 153'],a:0,
     e:'15 tens = 150. 7000 + 150 + 3 = <b>7153</b>. Careful: 15 tens is not "1 and 5" in two places.'},
    {t:'03-four-operations',q:'What is the <b>remainder</b> when 1000 is divided by 7?',o:['6','2','142','4'],a:0,
     e:'7 × 142 = 994. 1000 − 994 = <b>6</b>. (142 is the quotient, not the remainder.)'},
    {t:'05-decimals',q:'0.8 + 0.25 = ?',o:['0.33','1.05','0.105','1.5'],a:1,
     e:'Line up the decimal points: 0.80 + 0.25 = <b>1.05</b>. (0.33 comes from adding 8 + 25 wrongly.)'},
    {t:'05-decimals',q:'Which is the smallest?',o:['0.09','0.1','0.089','0.9'],a:2,
     e:'Write all with 3 decimal places: 0.090, 0.100, <b>0.089</b>, 0.900.'},
    {t:'04-fractions',q:fr(3,4)+' of a number is 27. What is the number?',o:['20.25','36','9','108'],a:1,
     e:'3 quarters = 27, so 1 quarter = 9 and 4 quarters = <b>36</b>. (The number is bigger than 27, not smaller.)'},
    {t:'06-time',q:'A clock shows 10.45 p.m. What time will it show 2 h 30 min later?',o:['12.75 p.m.','1.15 p.m.','1.15 a.m.','12.15 a.m.'],a:2,
     e:'10.45 p.m. + 2 h = 12.45 a.m. (after midnight) + 30 min = <b>1.15 a.m.</b> Passing midnight changes p.m. to a.m.'},
    {t:'07-angles-lines',q:'Two angles are on a straight line. One angle is twice the size of the other. What is the <b>smaller</b> angle?',o:['45°','60°','90°','120°'],a:1,
     e:'3 units = 180°, so 1 unit = <b>60°</b> (the bigger angle is 120°).'},
    {t:'08-perimeter-area',q:'A rectangle has an area of 48 cm² and a length of 8 cm. What is its <b>perimeter</b>?',o:['14 cm','28 cm','48 cm','56 cm'],a:1,
     e:'Width = 48 ÷ 8 = 6 cm. Perimeter = 2 × (8 + 6) = <b>28 cm</b>.'},
    {t:'10-nets-solids',q:'How many <b>more</b> edges than faces does a cuboid have?',o:['2','4','6','8'],a:2,
     e:'A cuboid has 12 edges and 6 faces. 12 − 6 = <b>6</b>.'},
    {t:'09-symmetry',q:'Which letter has <b>no</b> line of symmetry?',o:['A','M','T','N'],a:3,
     e:'A, M and T each have one line of symmetry down the middle. <b>N</b> has none.'},
    {t:'12-problem-solving',q:'Ali saved $12 in Week 1. Each week, he saved $3 more than the week before. In which week did he <b>first</b> save more than $25?',o:['Week 4','Week 5','Week 6','Week 7'],a:2,
     e:'Weeks 1 to 6: $12, $15, $18, $21, $24, <b>$27</b>. Week 5 ($24) is not more than $25, so the answer is Week 6.'}
  ];

  var B=[
    sa(16,'02-factors-multiples','What is the sum of <b>all</b> the factors of 18?',{n:[39],e:'Factors of 18: 1, 2, 3, 6, 9, 18. Sum = 39.'}),
    sa(17,'02-factors-multiples','What is the greatest 4-digit number that is a multiple of both 5 and 9?',{n:[9990],e:'It must be a multiple of 45. 9999 ÷ 45 = 222 remainder 9. 222 × 45 = 9990.'}),
    sa(18,'03-four-operations','Find the value of 4 × 2508 − 3 × 2508.',{n:[2508],e:'4 groups of 2508 minus 3 groups of 2508 leaves 1 group: 2508. No long multiplication needed!'}),
    sa(19,'02-factors-multiples','I am a number between 40 and 50. I am a multiple of 3 and also a multiple of 7. What number am I?',{n:[42],e:'Multiples of 21: 21, <b>42</b>, 63. Only 42 is between 40 and 50.'}),
    sa(20,'03-four-operations','Find the value of 45 × 202.',{n:[9090],e:'45 × 200 = 9000 and 45 × 2 = 90. 9000 + 90 = 9090.'}),
    sa(21,'03-four-operations','When a number is divided by 6, the quotient is 125 and the remainder is 4. What is the number?',{n:[754],e:'Number = 6 × 125 + 4 = 750 + 4 = 754.'}),
    sa(22,'04-fractions','Find 3 − '+fr(5,8,1)+'. Give your answer as a mixed number.',{w:[/^1\s+3\s*\/\s*8$/],model:fr(3,8,1),e:'3 − 1 = 2. 2 − '+fr(5,8)+' = '+fr(3,8,1)+'.'}),
    sa(23,'04-fractions','Arrange '+fr(5,6)+', '+fr(3,4)+' and '+fr(7,12)+' from the smallest. Which fraction is in the <b>middle</b>?',{w:[/^3\s*\/\s*4$/],model:fr(3,4),e:'In twelfths: '+fr(10,12)+', '+fr(9,12)+', '+fr(7,12)+'. Order: '+fr(7,12)+', '+fr(3,4)+', '+fr(5,6)+'. The middle one is '+fr(3,4)+'.'}),
    sa(24,'04-fractions','What is '+fr(2,5)+' of 3 hours? Give your answer in minutes.',{n:[72],u:'min',e:'3 h = 180 min. 180 ÷ 5 = 36. 36 × 2 = 72 min.'}),
    sa(25,'04-fractions','How many quarters are there in '+fr(3,4,4)+'?',{n:[19],e:fr(3,4,4)+' = '+fr(19,4)+', so there are 19 quarters.'}),
    sa(26,'05-decimals','Find the value of 9.07 − 2.8.',{n:[6.27],e:'9.07 − 2.80 = 6.27 (write 2.8 as 2.80 first).'}),
    sa(27,'05-decimals','Find the value of 4.35 × 6.',{n:[26.1],e:'435 × 6 = 2610, so 4.35 × 6 = 26.10 = 26.1.'}),
    sa(28,'05-decimals','Find the value of 7.6 ÷ 8.',{n:[0.95],e:'7.6 ÷ 8 = 0.95 (76 ÷ 8 = 9.5, so 7.6 ÷ 8 = 0.95).'}),
    sa(29,'05-decimals','0.4 m + 35 cm = _______ cm',{n:[75],u:'cm',e:'0.4 m = 40 cm. 40 + 35 = 75 cm. (Not 35.4!)'}),
    sa(30,'05-decimals','Round 18.954 to <b>1</b> decimal place.',{w:[/^19\.0$/],model:'19.0',e:'The hundredths digit is 5, so round up: 18.9 + 0.1 = <b>19.0</b>. Keep the ".0": rounding to 1 decimal place must show 1 decimal place.'}),
    sa(31,'06-time','A train left at 22 40 and the journey took 3 h 35 min. At what time did it arrive? Give your answer in 24-hour clock.',{w:[/^0?2\s*[:.]?\s*15(\s*h(ou)?rs?)?$/],model:'02 15',e:'22 40 + 1 h 20 min = 00 00 (midnight). Remaining 2 h 15 min → <b>02 15</b> the next day.'}),
    sa(32,'07-angles-lines','∠ABC is a right angle and ∠x = ∠y. Find ∠x.',{n:[31],u:'°',e:'90° − 28° = 62°. ∠x and ∠y are equal: 62° ÷ 2 = 31°.'},fan([28,59],['28°','y','x'],90)),
    sa(33,'08-perimeter-area','The figure is made up of rectangles. Find its area. (You need to work out the missing lengths first.)',{n:[126],u:'cm²',e:'Missing lengths: cut-out is 15 − 9 = 6 cm wide and 10 − 6 = 4 cm tall.<br>Big rectangle 15 × 10 = 150 cm². Cut-out 6 × 4 = 24 cm². 150 − 24 = 126 cm².'},
      poly([[6,0],[15,0],[15,10],[0,10],[0,4],[6,4]],[[10.5,-0.6,'9 cm'],[16.4,5,'10 cm'],[7.5,10.9,'15 cm'],[-1.1,7,'6 cm']],20)),
    sa(34,'08-perimeter-area','Find the perimeter of the figure in Q33.',{n:[50],u:'cm',e:'Moving the cut-out sides outwards makes a 15 cm × 10 cm rectangle: 2 × (15 + 10) = 50 cm.'}),
    sa(35,'11-data','The bar graph shows the number of books borrowed from Monday to Wednesday. Altogether, 52 books were borrowed from Monday to <b>Thursday</b>. How many books were borrowed on Thursday?',{n:[13],e:'Mon to Wed: 14 + 9 + 16 = 39. Thursday: 52 − 39 = 13.'},bars([['Mon',14],['Tue',9],['Wed',16]],18,2,'Books borrowed'))
  ];
  B[0].h='Section B: Short-answer questions (40 marks)';
  B.push(
    {h:'Section C: Problem sums (30 marks)',n:36,t:'12-problem-solving',ctx:'Mrs Tan wants to give pens to her pupils. If she gives each pupil 3 pens, she will have 14 pens left. If she gives each pupil 5 pens, she will be short of 6 pens.',parts:[
      {p:'(a)',q:'How many pupils are there?',n:[10],m:2,e:'Giving 2 more pens to each pupil (5 − 3) uses up the 14 extra pens <b>and</b> the 6 she is short: 14 + 6 = 20. 20 ÷ 2 = 10 pupils.'},
      {p:'(b)',q:'How many pens does she have?',n:[44],m:2,e:'3 × 10 + 14 = 44 pens. Check: 5 × 10 − 6 = 44.'}]},
    {n:37,t:'12-problem-solving',ctx:'Ken is 9 years old and his father is 39 years old.',parts:[
      {p:'(a)',q:'How old will Ken be when his father is 3 times as old as him?',n:[15],m:2,e:'The age difference never changes: 39 − 9 = 30. When Father = 3 units and Ken = 1 unit, the difference is 2 units = 30, so 1 unit = 15. Ken will be 15.'},
      {p:'(b)',q:'In how many years&rsquo; time will that be?',n:[6],m:2,e:'15 − 9 = 6 years. Check: in 6 years, Father is 45 = 3 × 15.'}]},
    {n:38,t:'04-fractions',ctx:'Mei spent '+fr(1,3)+' of her money on a book and '+fr(1,4)+' of the <b>remaining</b> money on a bag. She had $36 left.',parts:[
      {p:'(a)',q:'What fraction of her money did she have left?',w:[/^1\s*\/\s*2$/],m:2,model:fr(1,2),e:'Remaining after the book: '+fr(2,3)+'. Bag: '+fr(1,4)+' of '+fr(2,3)+' = '+fr(1,6)+'. Left: '+fr(2,3)+' − '+fr(1,6)+' = '+fr(3,6)+' = '+fr(1,2)+'.'},
      {p:'(b)',q:'How much money did she have at first?',n:[72],m:2,u:'$',e:fr(1,2)+' of her money = $36, so all of it = $72.'}]},
    {n:39,t:'12-problem-solving',ctx:'Amy and Bala had 180 stickers altogether. After Amy gave 15 stickers to Bala, Bala had twice as many stickers as Amy.',parts:[
      {p:'(a)',q:'How many stickers did Amy have at first?',n:[75],m:2,e:'The total stays 180. After: Amy 1 unit, Bala 2 units, 3 units = 180, 1 unit = 60. Amy had 60 + 15 = 75 at first.'},
      {p:'(b)',q:'How many more stickers did Bala have than Amy at first?',n:[30],m:2,e:'Bala at first: 120 − 15 = 105. 105 − 75 = 30.'}]},
    {n:40,t:'08-perimeter-area',ctx:'A square and a rectangle have the same perimeter. The area of the square is 81 cm². The length of the rectangle is 12 cm.',parts:[
      {p:'',q:'What is the area of the rectangle?',n:[72],m:3,u:'cm²',e:'Square side = 9 cm (9 × 9 = 81). Perimeter = 4 × 9 = 36 cm.<br>Rectangle: length + width = 18 cm, so width = 6 cm. Area = 12 × 6 = 72 cm².'}]},
    {n:41,t:'12-problem-solving',ctx:'Cinema tickets cost $12 for an adult and $8 for a child. A group of 9 people paid $88 altogether.',parts:[
      {p:'(a)',q:'How many adults were in the group?',n:[4],m:3,e:'If all 9 were children: 9 × $8 = $72. Extra: $88 − $72 = $16. Each adult costs $4 more: 16 ÷ 4 = 4 adults.'},
      {p:'(b)',q:'How many children were in the group?',n:[5],m:1,e:'9 − 4 = 5. Check: 4 × 12 + 5 × 8 = 48 + 40 = 88.'}]},
    {n:42,t:'05-decimals',ctx:'A bottle contained 2 ℓ of juice. Jun poured 0.3 ℓ of juice into each of 6 cups, then drank what was left in the bottle.',parts:[
      {p:'(a)',q:'How much juice did Jun drink? Give your answer in <b>millilitres</b>.',n:[200],m:2,u:'ml',e:'6 × 0.3 ℓ = 1.8 ℓ. 2 − 1.8 = 0.2 ℓ = 200 ml.'},
      {p:'(b)',q:'Water was then added to each cup until it held 0.45 ℓ. How much water was added altogether, in litres?',n:[0.9],m:2,u:'ℓ',e:'Each cup: 0.45 − 0.3 = 0.15 ℓ. 6 × 0.15 = 0.9 ℓ.'}]},
    {n:43,t:'06-time',ctx:'Buses leave a bus stop every 25 minutes. The first bus leaves at 6.40 a.m.',parts:[
      {p:'(a)',q:'At what time does the 6th bus leave?',w:[/^8[.:]45\s*a\.?\s*m\.?$/],m:2,model:'8.45 a.m.',e:'From the 1st to the 6th bus there are <b>5</b> gaps: 5 × 25 = 125 min = 2 h 5 min. 6.40 + 2 h 5 min = 8.45 a.m.'},
      {p:'(b)',q:'How many buses leave before 9 a.m.?',n:[6],m:1,e:'6.40, 7.05, 7.30, 7.55, 8.20, 8.45 → 6 buses. The next one is at 9.10 a.m.'}]}
  );
