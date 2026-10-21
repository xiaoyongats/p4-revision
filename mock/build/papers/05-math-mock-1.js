/*meta
title: Math Mock Paper 1
eyebrow: P4 Math · Mock exam
h1: Math Mock Paper 1
lead: A full end-of-year paper in the format of the 2025 school papers (ACS, Henry Park, Catholic High, Nanyang, Rosyth, Tao Nan). All questions are new. Covers all 12 P4 topics. No calculator.
key: p4m-math1
sub: 1 h 45 min · 100 marks
intro: intro-math.html
include: _math.js
quiz_lead: Section A: choose one answer. Sections B and C: work on paper, then type your answer in the box.
*/
  var CFG={amark:2,minutes:105,base:'../math/',labA:'Section A',labB:'Sections B and C'};

  var A=[
    {h:'Section A: Multiple choice (30 marks)',t:'01-whole-numbers',q:'In 48 205, the digit 8 is in the _______ place.',o:['tens','hundreds','thousands','ten thousands'],a:2,
     e:'48 205 = 4 ten thousands, <b>8 thousands</b>, 2 hundreds, 0 tens, 5 ones.'},
    {t:'01-whole-numbers',q:'Round 36 482 to the nearest thousand.',o:['36 000','36 500','37 000','36 480'],a:0,
     e:'Look at the hundreds digit: 4 is less than 5, so round down to <b>36 000</b>.'},
    {t:'02-factors-multiples',q:'Which of these is a common factor of 18 and 24?',o:['4','6','9','12'],a:1,
     e:'Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. <b>6</b> is in both lists.'},
    {t:'02-factors-multiples',q:'What is the 3rd multiple of 7?',o:['3','10','37','21'],a:3,
     e:'Multiples of 7: 7, 14, <b>21</b>, … The 3rd multiple is 3 × 7 = 21.'},
    {t:'01-whole-numbers',q:'6 × 1000 + 4 × 10 + 5 = ?',o:['6045','6405','6450','60 045'],a:0,
     e:'6 thousands, 0 hundreds, 4 tens, 5 ones = <b>6045</b>.'},
    {t:'04-fractions',q:'Which fraction is equal to '+fr(3,4)+'?',o:[fr(4,3),fr(6,9),fr(3,8),fr(9,12)],a:3,
     e:'Multiply the top and bottom by 3: '+fr(3,4)+' = '+fr(9,12)+'.'},
    {t:'04-fractions',q:'Express '+fr(3,5,2)+' as an improper fraction.',o:[fr(5,13),fr(6,5),fr(13,5),fr(11,5)],a:2,
     e:'2 wholes = '+fr(10,5)+'. '+fr(10,5)+' + '+fr(3,5)+' = <b>'+fr(13,5)+'</b>.'},
    {t:'05-decimals',q:'Which fraction is equal to 0.07?',o:[fr(7,10),fr(7,100),fr(7,1000),fr(70,10)],a:1,
     e:'0.07 = 7 hundredths = '+fr(7,100)+'.'},
    {t:'05-decimals',q:'Round 3.468 to 2 decimal places.',o:['3.46','3.5','3.4','3.47'],a:3,
     e:'Look at the 3rd decimal place: 8 is 5 or more, so round up the hundredths: <b>3.47</b>.'},
    {t:'06-time',q:'A lesson started at 10.50 a.m. and lasted 2 h 35 min. When did it end?',o:['12.25 p.m.','1.15 p.m.','1.25 p.m.','12.85 p.m.'],a:2,
     e:'10.50 a.m. + 2 h = 12.50 p.m. 12.50 p.m. + 35 min = <b>1.25 p.m.</b> (There is no "12.85": 60 minutes make an hour.)'},
    {t:'07-angles-lines',ctx:fan([52],['x','128°']),q:'The diagram shows a straight line. Find ∠x.',o:['38°','52°','62°','128°'],a:1,
     e:'Angles on a straight line add up to 180°. 180° − 128° = <b>52°</b>.'},
    {t:'09-symmetry',q:'Which letter has exactly <b>one</b> line of symmetry?',o:['H','S','A','X'],a:2,
     e:'A has one line of symmetry (straight down the middle). H and X have two. S has none.'},
    {t:'10-nets-solids',q:'How many faces, edges and vertices does a cube have?',o:['6 faces, 12 edges, 8 vertices','6 faces, 8 edges, 12 vertices','8 faces, 12 edges, 6 vertices','4 faces, 6 edges, 4 vertices'],a:0,
     e:'A cube has 6 square faces, 12 edges and 8 corners (vertices).'},
    {t:'08-perimeter-area',q:'A square has a perimeter of 36 cm. What is its area?',o:['9 cm²','36 cm²','144 cm²','81 cm²'],a:3,
     e:'Side = 36 ÷ 4 = 9 cm. Area = 9 × 9 = <b>81 cm²</b>.'},
    {t:'11-data',ctx:pie([[0.5,'Football'],[0.25,'Swimming'],[0.125,'Badminton'],[0.125,'Running']]),q:'The pie chart shows the favourite sports of 40 pupils. How many pupils chose swimming?',o:['4','10','20','30'],a:1,
     e:'Swimming is '+fr(1,4)+' of the pie. '+fr(1,4)+' of 40 = 40 ÷ 4 = <b>10</b>.'}
  ];

  function sa(n,t,q,ans,ctx){var p={p:'',q:q,m:2};for(var k in ans)p[k]=ans[k];return {n:n,t:t,ctx:ctx,parts:[p]};}
  var B=[
    sa(16,'01-whole-numbers','Write 40 609 in words.',{w:[/^forty[- ]thousand,?\s*six hundred,?\s*(and\s+)?nine$/],model:'forty thousand, six hundred and nine',e:'40 609 = 40 thousands + 6 hundreds + 9 ones. There are no tens.'}),
    sa(17,'03-four-operations','Find the value of 3408 × 6.',{n:[20448],e:'3408 × 6 = 20 448'}),
    sa(18,'03-four-operations','Find the value of 7524 ÷ 9.',{n:[836],e:'7524 ÷ 9 = 836. Check: 836 × 9 = 7524.'}),
    sa(19,'03-four-operations','What is the remainder when 2315 is divided by 7?',{n:[5],e:'2315 ÷ 7 = 330 remainder <b>5</b> (330 × 7 = 2310).'}),
    sa(20,'02-factors-multiples','List <b>all</b> the factors of 28.',{set:[1,2,4,7,14,28],e:'Factor pairs: 1 × 28, 2 × 14, 4 × 7. Factors: 1, 2, 4, 7, 14, 28.'}),
    sa(21,'02-factors-multiples','Find the lowest common multiple of 6 and 8.',{n:[24],e:'Multiples of 8: 8, 16, <b>24</b>. 24 is also a multiple of 6.'}),
    sa(22,'04-fractions','Find '+fr(3,4)+' + '+fr(5,8)+'. Give your answer as a mixed number in its simplest form.',{w:[/^1\s+3\s*\/\s*8$/],model:fr(3,8,1),e:fr(3,4)+' = '+fr(6,8)+'. '+fr(6,8)+' + '+fr(5,8)+' = '+fr(11,8)+' = '+fr(3,8,1)+'.'}),
    sa(23,'04-fractions','Find 5 − '+fr(2,3,2)+'.',{w:[/^2\s+1\s*\/\s*3$/],model:fr(1,3,2),e:'5 − 2 = 3. 3 − '+fr(2,3)+' = '+fr(1,3,2)+'.'}),
    sa(24,'04-fractions','What fraction of 1 hour is 20 minutes? Give your answer in its simplest form.',{w:[/^1\s*\/\s*3$/],model:fr(1,3),e:'1 hour = 60 minutes. '+fr(20,60)+' = '+fr(1,3)+'.'}),
    sa(25,'04-fractions','Find '+fr(3,5)+' of 45 kg.',{n:[27],u:'kg',e:'45 ÷ 5 = 9 (one fifth). 9 × 3 = 27 kg.'}),
    sa(26,'05-decimals','Find the value of 12.6 − 4.85.',{n:[7.75],e:'12.60 − 4.85 = 7.75 (write 12.6 as 12.60 first).'}),
    sa(27,'05-decimals','Find the value of 0.36 × 8.',{n:[2.88],e:'36 × 8 = 288, so 0.36 × 8 = 2.88.'}),
    sa(28,'05-decimals','Express '+fr(3,4,2)+' as a decimal.',{n:[2.75],e:fr(3,4)+' = 0.75, so '+fr(3,4,2)+' = 2.75.'}),
    sa(29,'05-decimals','4.05 km = _______ m',{n:[4050],u:'m',e:'1 km = 1000 m. 4.05 × 1000 = 4050 m.'}),
    sa(30,'06-time','A movie started at 7.45 p.m. and lasted 1 h 50 min. At what time did it end?',{w:[/^9[.:]35\s*p\.?\s*m\.?$/],model:'9.35 p.m.',e:'7.45 p.m. + 1 h = 8.45 p.m. + 50 min = 9.35 p.m. Remember to write <b>p.m.</b>'}),
    sa(31,'07-angles-lines','∠ABC is a right angle. Find ∠x.',{n:[56],u:'°',e:'A right angle is 90°. 90° − 34° = 56°.'},fan([34],['34°','x'],90)),
    sa(32,'08-perimeter-area','The figure is made up of rectangles. Find its area.',{n:[81],u:'cm²',e:'Big rectangle 12 × 8 = 96 cm². Cut-out corner 5 × 3 = 15 cm². 96 − 15 = 81 cm².'},
      poly([[0,0],[7,0],[7,3],[12,3],[12,8],[0,8]],[[6,8.9,'12 cm'],[-1,4,'8 cm'],[10,2.6,'5 cm'],[7.95,1.1,'3 cm']])),
    sa(33,'08-perimeter-area','Find the perimeter of the figure in Q32.',{n:[40],u:'cm',e:'Moving the two sides of the cut corner outwards makes a 12 cm × 8 cm rectangle, so the perimeter is the same: 2 × (12 + 8) = 40 cm.'}),
    sa(34,'09-symmetry','How many lines of symmetry does a square have?',{n:[4],e:'2 lines join the middles of opposite sides and 2 join opposite corners: 4 lines.'}),
    sa(35,'11-data','The bar graph shows the number of books read by four pupils. How many more books did Chen read than Devi?',{n:[10],e:'Chen 15, Devi 5. 15 − 5 = 10.'},bars([['Ali',12],['Bala',8],['Chen',15],['Devi',5]],16,2,'Number of books'))
  ];
  B[0].h='Section B: Short-answer questions (40 marks)';
  B.push(
    {h:'Section C: Problem sums (30 marks)',n:36,t:'03-four-operations',ctx:'A baker made 1248 buns. He packed them into boxes of 6. He sold every box for $4.',parts:[
      {p:'(a)',q:'How many boxes of buns were there?',n:[208],m:1,e:'1248 ÷ 6 = 208 boxes'},
      {p:'(b)',q:'How much money did he collect?',n:[832],m:2,u:'$',e:'208 × $4 = $832'}]},
    {n:37,t:'04-fractions',ctx:'Mrs Lee had 60 stickers. She gave '+fr(1,4)+' of them to her son and '+fr(2,5)+' of the remaining stickers to her daughter.',parts:[
      {p:'(a)',q:'How many stickers did she give to her daughter?',n:[18],m:2,e:'Son: '+fr(1,4)+' × 60 = 15. Remaining: 60 − 15 = 45. Daughter: '+fr(2,5)+' × 45 = 18.'},
      {p:'(b)',q:'How many stickers did she have left?',n:[27],m:2,e:'45 − 18 = 27'}]},
    {n:38,t:'12-problem-solving',ctx:'Ali and Ben had 420 marbles altogether. Ali had 60 more marbles than Ben.',parts:[
      {p:'(a)',q:'How many marbles did Ben have?',n:[180],m:2,e:'Bar model: Ben = 1 unit, Ali = 1 unit + 60.<br>2 units = 420 − 60 = 360. 1 unit = 180. Ben had 180 (Ali had 240).'},
      {p:'(b)',q:'Ali then gave some marbles to Ben so that they had the same number. How many marbles did Ali give to Ben?',n:[30],m:2,e:'Each should have 420 ÷ 2 = 210. Ali gives 240 − 210 = 30. (Half of the difference: 60 ÷ 2 = 30.)'}]},
    {n:39,t:'05-decimals',ctx:'A pen costs $1.85 and a notebook costs $2.40. Mei bought 4 pens and 3 notebooks. She paid with a $20 note.',parts:[
      {p:'(a)',q:'How much did the 4 pens cost?',n:[7.4],m:1,u:'$',e:'4 × $1.85 = $7.40'},
      {p:'(b)',q:'How much change did she get?',n:[5.4],m:3,u:'$',e:'3 notebooks: 3 × $2.40 = $7.20.<br>Total: $7.40 + $7.20 = $14.60.<br>Change: $20 − $14.60 = $5.40.'}]},
    {n:40,t:'08-perimeter-area',ctx:'A rectangular field is 24 m long and 15 m wide. A square flower bed of side 6 m is in the field.',parts:[
      {p:'(a)',q:'What is the area of the field that is <b>not</b> covered by the flower bed?',n:[324],m:2,u:'m²',e:'Field: 24 × 15 = 360 m². Flower bed: 6 × 6 = 36 m². 360 − 36 = 324 m².'},
      {p:'(b)',q:'A fence is put up around the field. The fence costs $5 per metre. How much does the fence cost?',n:[390],m:2,u:'$',e:'Perimeter: 2 × (24 + 15) = 78 m. Cost: 78 × $5 = $390.'}]},
    {n:41,t:'06-time',ctx:'A train left a station at 9.40 a.m. and reached its last stop at 2.15 p.m. the same day.',parts:[
      {p:'(a)',q:'How long was the journey? (h and min)',w:[/^4\s*(h|hr|hrs|hours?)\s*(and\s*)?35\s*(min|mins|minutes?)?$/],m:2,model:'4 h 35 min',e:'9.40 a.m. → 1.40 p.m. is 4 h. 1.40 p.m. → 2.15 p.m. is 35 min. Total 4 h 35 min.'},
      {p:'(b)',q:'On the way, the train stopped 3 times, for 15 minutes each time. For how many minutes was the train moving?',n:[230],m:2,u:'min',e:'4 h 35 min = 275 min. Stops: 3 × 15 = 45 min. 275 − 45 = 230 min.'}]},
    {n:42,t:'04-fractions',ctx:'There are 36 pupils in a class. '+fr(1,3)+' of them walk to school, '+fr(1,4)+' of them take the bus, and the rest come by car.',parts:[
      {p:'(a)',q:'What fraction of the pupils come by car?',w:[/^5\s*\/\s*12$/],m:2,model:fr(5,12),e:fr(1,3)+' + '+fr(1,4)+' = '+fr(4,12)+' + '+fr(3,12)+' = '+fr(7,12)+'. 1 − '+fr(7,12)+' = '+fr(5,12)+'.'},
      {p:'(b)',q:'How many more pupils walk than take the bus?',n:[3],m:2,e:'Walk: 36 ÷ 3 = 12. Bus: 36 ÷ 4 = 9. 12 − 9 = 3.'}]},
    {n:43,t:'12-problem-solving',ctx:'Rani used sticks to make a pattern of squares in a row.'+tbl([['Figure','1','2','3','4'],['Number of squares','1','2','3','4'],['Number of sticks','4','7','10','13']]),parts:[
      {p:'(a)',q:'How many sticks are needed for Figure 6?',n:[19],m:1,e:'Each new square adds 3 sticks. Figure 6: 4 + 5 × 3 = 19.'},
      {p:'(b)',q:'Which figure uses 61 sticks?',n:[20],m:2,model:'Figure 20',e:'Sticks = 1 + 3 × (figure number). 61 − 1 = 60. 60 ÷ 3 = 20. Figure 20.'}]}
  );
