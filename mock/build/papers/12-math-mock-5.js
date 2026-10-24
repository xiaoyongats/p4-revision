/*meta
title: Math Mock Paper 5
eyebrow: P4 Math · Mock exam · Challenge
h1: Math Mock Paper 5 (Challenge)
lead: A harder paper. Look out for questions that ask what is NOT true, what is left, the quotient instead of the remainder, and answers that must keep zeros (like 7.00). The problem sums need several steps. No calculator.
key: p4m-math5
sub: Challenge · 1 h 45 min · 100 marks
intro: intro-math.html
include: _math.js
quiz_lead: Read each question twice. Check: Did I answer what was asked (quotient or remainder? before or after? how many MORE?) and did I use the right units?
*/
  var CFG={amark:2,minutes:105,base:'../math/',labA:'Section A',labB:'Sections B and C'};
  function sa(n,t,q,ans,ctx){var p={p:'',q:q,m:2};for(var k in ans)p[k]=ans[k];return {n:n,t:t,ctx:ctx,parts:[p]};}

  var A=[
    {h:'Section A: Multiple choice (30 marks)',t:'01-whole-numbers',q:'In which number is the digit 4 in the <b>thousands</b> place?',o:['14 052','40 125','21 405','52 140'],a:0,
     e:'14 052: 1 ten thousand, <b>4 thousands</b>. In 40 125 the 4 is in the ten thousands place.'},
    {t:'02-factors-multiples',q:'Which of these is <b>not</b> a common multiple of 4 and 6?',o:['12','24','30','36'],a:2,
     e:'30 is a multiple of 6 but <b>not</b> of 4 (30 ÷ 4 = 7 remainder 2).'},
    {t:'03-four-operations',q:'Round each number to the nearest hundred, then estimate 6812 + 2395.',o:['9200','9207','9100','9000'],a:0,
     e:'6812 → 6800 and 2395 → 2400. 6800 + 2400 = <b>9200</b>. (9207 is the exact answer, not the estimate.)'},
    {t:'03-four-operations',q:'38 × 25 = 38 × 100 ÷ ▢. &nbsp;What number goes in the box?',o:['4','2','5','25'],a:0,
     e:'25 = 100 ÷ 4, so 38 × 25 = 38 × 100 ÷ <b>4</b> = 950.'},
    {t:'03-four-operations',q:'When a number is divided by 8, the quotient is 23 and the remainder is 5. What is the number?',o:['189','184','179','36'],a:0,
     e:'8 × 23 + 5 = 184 + 5 = <b>189</b>.'},
    {t:'04-fractions',q:'Which fraction is between '+fr(1,2)+' and '+fr(3,4)+'?',o:[fr(2,5),fr(5,8),fr(7,8),fr(3,10)],a:1,
     e:'In eighths: '+fr(1,2)+' = '+fr(4,8)+' and '+fr(3,4)+' = '+fr(6,8)+'. <b>'+fr(5,8)+'</b> is between them.'},
    {t:'04-fractions',q:'1 − '+fr(2,9)+' − '+fr(1,3)+' = ?',o:[fr(2,9),fr(5,9),fr(7,9),fr(4,9)],a:3,
     e:fr(1,3)+' = '+fr(3,9)+'. 1 = '+fr(9,9)+'. '+fr(9,9)+' − '+fr(2,9)+' − '+fr(3,9)+' = <b>'+fr(4,9)+'</b>.'},
    {t:'04-fractions',q:'12 out of 30 pupils wear glasses. What fraction of the pupils do <b>not</b> wear glasses?',o:[fr(2,5),fr(3,5),fr(12,30),fr(1,3)],a:1,
     e:'30 − 12 = 18 do <b>not</b> wear glasses. '+fr(18,30)+' = <b>'+fr(3,5)+'</b>. ('+fr(2,5)+' is the fraction who <b>do</b>.)'},
    {t:'05-decimals',q:'0.6 is the same as _______.',o:[fr(6,100),fr(1,6),fr(6,1000),fr(3,5)],a:3,
     e:'0.6 = '+fr(6,10)+' = <b>'+fr(3,5)+'</b>.'},
    {t:'05-decimals',q:'Which of these has the greatest value?',o:['0.7','0.077','0.77','0.707'],a:2,
     e:'With 3 decimal places: 0.700, 0.077, <b>0.770</b>, 0.707.'},
    {t:'06-time',q:'A movie ended at 1.10 p.m. It lasted 1 h 55 min. At what time did it <b>start</b>?',o:['3.05 p.m.','12.15 p.m.','11.55 a.m.','11.15 a.m.'],a:3,
     e:'Count back: 1.10 p.m. − 2 h = 11.10 a.m., then add back 5 min = <b>11.15 a.m.</b> (3.05 p.m. is adding instead of subtracting.)'},
    {t:'07-angles-lines',q:'How many right angles are there in '+fr(1,2,1)+' complete turns?',o:['3','4','6','8'],a:2,
     e:'1 complete turn = 4 right angles. 1½ turns = 4 + 2 = <b>6</b> right angles.'},
    {t:'08-perimeter-area',q:'The perimeter of a rectangle is 30 cm. Its length is twice its width. What is its <b>area</b>?',o:['30 cm²','50 cm²','56 cm²','200 cm²'],a:1,
     e:'Length + width = 15 cm = 3 units, so the width is 5 cm and the length is 10 cm. Area = 10 × 5 = <b>50 cm²</b>.'},
    {t:'10-nets-solids',q:'Which solid has exactly 5 faces?',o:['a cube','a triangular prism','a cuboid','a cylinder'],a:1,
     e:'A triangular prism has 2 triangles + 3 rectangles = <b>5</b> faces. Cubes and cuboids have 6.'},
    {t:'11-data',ctx:bars([['Jan',30],['Feb',45],['Mar',25],['Apr',50]],60,10,'Savings ($)'),q:'The bar graph shows Siti&rsquo;s savings each month. In which month did her savings go up the <b>most</b> compared with the month before?',o:['February','March','April','January'],a:2,
     e:'Feb: +$15. Mar: −$20 (went down). Apr: +$25. The biggest rise is <b>April</b>. (April has the tallest bar, but the question is about the <b>increase</b>.)'}
  ];

  var B=[
    sa(16,'01-whole-numbers','What is the value of the digit 9 in 39 108?',{n:[9000],e:'9 is in the thousands place: 9 × 1000 = 9000.'}),
    sa(17,'01-whole-numbers','Round 74 549 to the nearest thousand.',{n:[75000],e:'Look at the hundreds digit: 5, so round up. 74 549 → 75 000.'}),
    sa(18,'03-four-operations','Find the value of 8 × 4307.',{n:[34456],e:'4307 × 8 = 34 456'}),
    sa(19,'03-four-operations','What is the <b>quotient</b> when 7300 is divided by 6?',{n:[1216],e:'7300 ÷ 6 = 1216 remainder 4. The quotient is 1216 (the remainder is 4).'}),
    sa(20,'02-factors-multiples','List all the factors of 45 that are <b>odd</b> numbers.',{set:[1,3,5,9,15,45],e:'Factors of 45: 1, 3, 5, 9, 15, 45. They are <b>all</b> odd, so list all six.'}),
    sa(21,'02-factors-multiples','Find the lowest common multiple of 9 and 12.',{n:[36],e:'Multiples of 12: 12, 24, 36. 36 is the first one that is also a multiple of 9.'}),
    sa(22,'04-fractions','Find '+fr(3,4,1)+' + '+fr(5,6,2)+'. Give your answer as a mixed number in its simplest form.',{w:[/^4\s+7\s*\/\s*12$/],model:fr(7,12,4),e:'1 + 2 = 3. '+fr(3,4)+' + '+fr(5,6)+' = '+fr(9,12)+' + '+fr(10,12)+' = '+fr(19,12)+' = '+fr(7,12,1)+'. 3 + '+fr(7,12,1)+' = '+fr(7,12,4)+'.'}),
    sa(23,'04-fractions','Find '+fr(4,9)+' of 63 cm.',{n:[28],u:'cm',e:'63 ÷ 9 = 7. 7 × 4 = 28 cm.'}),
    sa(24,'04-fractions','Which is greater, '+fr(5,7)+' or '+fr(7,10)+'? Write the greater fraction.',{w:[/^5\s*\/\s*7$/],model:fr(5,7),e:'Compare with the same denominator 70: '+fr(5,7)+' = '+fr(50,70)+' and '+fr(7,10)+' = '+fr(49,70)+'. So '+fr(5,7)+' is greater.'}),
    sa(25,'04-fractions','Express '+fr(36,48)+' in its simplest form.',{w:[/^3\s*\/\s*4$/],model:fr(3,4),e:'Divide the top and bottom by 12: '+fr(3,4)+'.'}),
    sa(26,'05-decimals','Find the value of 15.2 − 6.75.',{n:[8.45],e:'15.20 − 6.75 = 8.45'}),
    sa(27,'05-decimals','Find the value of 2.48 × 5.',{n:[12.4],e:'248 × 5 = 1240, so 2.48 × 5 = 12.40 = 12.4.'}),
    sa(28,'05-decimals','Find the value of 13.5 ÷ 9.',{n:[1.5],e:'135 ÷ 9 = 15, so 13.5 ÷ 9 = 1.5.'}),
    sa(29,'05-decimals','5 kg 80 g − 2.35 kg = _______ kg',{n:[2.73],u:'kg',e:'5 kg 80 g = 5.08 kg (80 g = 0.08 kg, <b>not</b> 0.8). 5.08 − 2.35 = 2.73 kg.'}),
    sa(30,'05-decimals','Round 6.995 to <b>2</b> decimal places.',{w:[/^7\.00$/],model:'7.00',e:'The thousandths digit is 5, so round up: 6.99 + 0.01 = <b>7.00</b>. Keep both zeros to show 2 decimal places.'}),
    sa(31,'06-time','A train journey started at 23 50 and lasted 45 minutes. At what time did it end? Give your answer in 24-hour clock.',{w:[/^00\s*[:.]?\s*35(\s*h(ou)?rs?)?$/],model:'00 35',e:'23 50 + 10 min = 00 00 (midnight). 35 min more → <b>00 35</b>. (Not 24 35: after midnight the clock starts again at 00.)'}),
    sa(32,'07-angles-lines','The diagram shows a straight line. Find ∠x.',{n:[38],u:'°',e:'180° − 90° − 52° = 38°.'},fan([52,90],['52°','x','90°'])),
    sa(33,'08-perimeter-area','The figure is made up of rectangles. Find its area.',{n:[114],u:'cm²',e:'Big rectangle 14 × 9 = 126 cm². Gap 4 × 3 = 12 cm². 126 − 12 = 114 cm².'},
      poly([[0,0],[14,0],[14,9],[9,9],[9,6],[5,6],[5,9],[0,9]],[[7,-0.6,'14 cm'],[-1.1,4.5,'9 cm'],[7,7.1,'4 cm'],[3.9,7.6,'3 cm']],20)),
    sa(34,'08-perimeter-area','Find the perimeter of the figure in Q33.',{n:[52],u:'cm',e:'Outside like a 14 cm × 9 cm rectangle: 46 cm. The gap adds its two 3 cm sides: 46 + 6 = 52 cm.'}),
    sa(35,'11-data','The pie chart shows how some pupils travel to school. 16 more pupils walk than take the bus. How many pupils take the MRT?',{n:[8],e:'Walk '+fr(1,2)+' − bus '+fr(1,4)+' = '+fr(1,4)+' of the pupils = 16, so there are 64 pupils. MRT = '+fr(1,8)+' of 64 = 8.'},
      pie([[0.5,'Walk'],[0.25,'Bus'],[0.125,'Car'],[0.125,'MRT']]))
  ];
  B[0].h='Section B: Short-answer questions (40 marks)';
  B.push(
    {h:'Section C: Problem sums (30 marks)',n:36,t:'12-problem-solving',ctx:'Ali and Ben had 96 marbles altogether. Ali had 3 times as many marbles as Ben.',parts:[
      {p:'(a)',q:'How many marbles did Ben have?',n:[24],m:1,e:'4 units = 96, so 1 unit = 24. Ben 24, Ali 72.'},
      {p:'(b)',q:'How many marbles must Ali give Ben so that Ben has <b>twice</b> as many marbles as Ali?',n:[40],m:3,e:'The total stays 96. After: Ali 1 unit, Ben 2 units, 3 units = 96, 1 unit = 32. Ali must end with 32, so he gives 72 − 32 = 40.'}]},
    {n:37,t:'04-fractions',ctx:'A tank was '+fr(1,4)+' full of water. After 18 ℓ of water was added, the tank was '+fr(5,8)+' full.',parts:[
      {p:'(a)',q:'How much water can the tank hold when it is full?',n:[48],m:2,u:'ℓ',e:fr(5,8)+' − '+fr(2,8)+' = '+fr(3,8)+' of the tank = 18 ℓ. 1 eighth = 6 ℓ, so the full tank = 48 ℓ.'},
      {p:'(b)',q:'How much more water is needed to fill the tank completely?',n:[18],m:2,u:'ℓ',e:'Still empty: 1 − '+fr(5,8)+' = '+fr(3,8)+' = 18 ℓ.'}]},
    {n:38,t:'12-problem-solving',ctx:'Siti had 15 notes. Some were $2 notes and the rest were $5 notes. The notes were worth $51 altogether.',parts:[
      {p:'(a)',q:'How many $5 notes did she have?',n:[7],m:3,e:'If all 15 were $2 notes: $30. Extra: $51 − $30 = $21. Each $5 note adds $3: 21 ÷ 3 = 7 notes of $5.'},
      {p:'(b)',q:'How many $2 notes did she have?',n:[8],m:1,e:'15 − 7 = 8. Check: 8 × 2 + 7 × 5 = 16 + 35 = 51.'}]},
    {n:39,t:'04-fractions',ctx:'Jun read '+fr(1,4)+' of a book on Monday and '+fr(2,3)+' of the <b>remaining</b> pages on Tuesday. He had 45 pages left to read.',parts:[
      {p:'(a)',q:'What fraction of the whole book did he read on Tuesday?',w:[/^1\s*\/\s*2$/],m:2,model:fr(1,2),e:'Remaining after Monday: '+fr(3,4)+'. Tuesday: '+fr(2,3)+' × '+fr(3,4)+' = '+fr(6,12)+' = '+fr(1,2)+'.'},
      {p:'(b)',q:'How many pages are there in the book?',n:[180],m:2,e:'Left: 1 − '+fr(1,4)+' − '+fr(1,2)+' = '+fr(1,4)+' = 45 pages. Whole book: 4 × 45 = 180.'}]},
    {n:40,t:'08-perimeter-area',ctx:'Two identical squares are placed side by side to form a rectangle. The perimeter of the rectangle is 48 cm.',parts:[
      {p:'',q:'What is the area of the rectangle?',n:[128],m:3,u:'cm²',e:'The rectangle&rsquo;s perimeter is made of 6 sides of a square: 6 sides = 48 cm, so one side = 8 cm. Rectangle 16 cm × 8 cm = 128 cm².'}]},
    {n:41,t:'06-time',ctx:'A tap fills a tank with 6 ℓ of water every 4 minutes. The tank holds 45 ℓ.',parts:[
      {p:'(a)',q:'How many minutes does it take to fill the empty tank?',n:[30],m:2,u:'min',e:'45 ÷ 6 = 7.5 lots of 4 minutes. 7.5 × 4 = 30 min. (Or: 1.5 ℓ per minute, 45 ÷ 1.5 = 30.)'},
      {p:'(b)',q:'Jun turns on the tap at 9.48 a.m. At what time will the tank be full?',w:[/^10[.:]18\s*a\.?\s*m\.?$/],m:2,model:'10.18 a.m.',e:'9.48 a.m. + 30 min = 10.18 a.m.'}]},
    {n:42,t:'12-problem-solving',ctx:'Four teams took part in a quiz. Team A scored twice as many points as Team B. Team C scored 12 points fewer than Team A. Team D scored 30 points. The four teams scored 158 points altogether.',parts:[
      {p:'(a)',q:'How many points did Team B score?',n:[28],m:3,e:'B = 1 unit, A = 2 units, C = 2 units − 12, D = 30.<br>Total: 5 units − 12 + 30 = 5 units + 18 = 158, so 5 units = 140 and 1 unit = 28.<br>Check: A 56 + B 28 + C 44 + D 30 = 158.'},
      {p:'(b)',q:'How many more points did Team A score than Team D?',n:[26],m:1,e:'A = 2 × 28 = 56. 56 − 30 = 26.'}]},
    {n:43,t:'12-problem-solving',ctx:'Some pupils are seated at tables. If 4 pupils sit at each table, 6 pupils will have no seat. If 6 pupils sit at each table, 2 tables will be empty.',parts:[
      {p:'(a)',q:'How many tables are there?',n:[9],m:2,e:'With 6 per table, 2 empty tables mean 12 seats are not used. Going from 4 to 6 per table (2 more each) seats the 6 extra pupils and leaves 12 seats spare: 6 + 12 = 18. 18 ÷ 2 = 9 tables.'},
      {p:'(b)',q:'How many pupils are there?',n:[42],m:1,e:'4 × 9 + 6 = 42. Check: 6 × 7 = 42 (7 tables used, 2 empty).'}]}
  );
