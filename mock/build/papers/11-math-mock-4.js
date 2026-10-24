/*meta
title: Math Mock Paper 4
eyebrow: P4 Math · Mock exam · Challenge
h1: Math Mock Paper 4 (Challenge)
lead: A harder paper. Several questions have a trap: a missing digit to find, a NOT, a change of units, or a step that is easy to skip. The problem sums need careful bar models. No calculator.
key: p4m-math4
sub: Challenge · 1 h 45 min · 100 marks
intro: intro-math.html
include: _math.js
quiz_lead: Before answering, ask yourself: what exactly is the question asking for? Units? The remainder? How many MORE?
*/
  var CFG={amark:2,minutes:105,base:'../math/',labA:'Section A',labB:'Sections B and C'};
  function sa(n,t,q,ans,ctx){var p={p:'',q:q,m:2};for(var k in ans)p[k]=ans[k];return {n:n,t:t,ctx:ctx,parts:[p]};}

  var A=[
    {h:'Section A: Multiple choice (30 marks)',t:'02-factors-multiples',q:'Which of these numbers is <b>not</b> a multiple of 6?',o:['64','54','42','72'],a:0,
     e:'64 ÷ 6 = 10 remainder 4, so 64 is <b>not</b> a multiple of 6. (42 = 6 × 7, 54 = 6 × 9, 72 = 6 × 12.)'},
    {t:'01-whole-numbers',q:'What is 10 000 less than 103 520?',o:['93 520','102 520','103 420','3520'],a:0,
     e:'Take 1 away from the ten thousands: 10 ten thousands → 9 ten thousands. 103 520 − 10 000 = <b>93 520</b>.'},
    {t:'01-whole-numbers',q:'When the number 4▢725 is rounded to the nearest thousand, the answer is 47 000. What is the missing digit?',o:['5','7','8','6'],a:3,
     e:'The hundreds digit is 7, so the number rounds <b>up</b>. 4<b>6</b> 725 rounds up to 47 000. (47 725 would round to 48 000.)'},
    {t:'02-factors-multiples',q:'How many common factors do 16 and 24 have?',o:['4','5','3','8'],a:0,
     e:'Common factors: 1, 2, 4, 8. That is <b>4</b> common factors (8 is the greatest one, not the number of them).'},
    {t:'03-four-operations',q:'Which of these is equal to 5 × 99?',o:['500 − 99','5 × 100 + 1','495 + 5','500 − 5'],a:3,
     e:'5 × 99 = 5 × 100 − 5 × 1 = <b>500 − 5</b> = 495.'},
    {t:'04-fractions',q:'Which of these is <b>not</b> equal to '+fr(1,2,1)+'?',o:[fr(3,2),fr(11,2),fr(6,4),fr(15,10)],a:1,
     e:fr(11,2)+' = '+fr(1,2,5)+', not '+fr(1,2,1)+'. Do not just write the digits side by side!'},
    {t:'04-fractions',q:fr(2,5)+' + '+fr(3,10)+' = ?',o:[fr(5,15),fr(5,10),fr(7,10),fr(1,3)],a:2,
     e:fr(2,5)+' = '+fr(4,10)+'. '+fr(4,10)+' + '+fr(3,10)+' = <b>'+fr(7,10)+'</b>. Never add the bottom numbers.'},
    {t:'04-fractions',q:'Ravi ate '+fr(3,8)+' of a pizza and Sam ate '+fr(1,4)+' of the same pizza. What fraction of the pizza was <b>left</b>?',o:[fr(5,8),fr(3,8),fr(1,2),fr(2,3)],a:1,
     e:'Eaten: '+fr(3,8)+' + '+fr(2,8)+' = '+fr(5,8)+'. Left: 1 − '+fr(5,8)+' = <b>'+fr(3,8)+'</b>. ('+fr(5,8)+' is what was eaten.)'},
    {t:'05-decimals',q:'Which digit is in the <b>tenths</b> place of 306.927?',o:['0','9','2','7'],a:1,
     e:'After the decimal point: <b>9</b> tenths, 2 hundredths, 7 thousandths. (0 is in the <b>tens</b> place.)'},
    {t:'05-decimals',q:'3 kg 5 g = _______ kg',o:['3.5','3.05','3.005','3.0005'],a:2,
     e:'1 kg = 1000 g, so 5 g = 0.005 kg. 3 kg 5 g = <b>3.005 kg</b>.'},
    {t:'06-time',q:'Which time is 20 minutes <b>before</b> midnight?',o:['00 20','12.20 a.m.','11.40 a.m.','23 40'],a:3,
     e:'Midnight is 00 00 (24 00). 20 minutes before it is <b>23 40</b>, which is 11.40 <b>p.m.</b>'},
    {t:'07-angles-lines',q:'Jun is facing west. He makes a '+fr(3,4)+' turn <b>anticlockwise</b>. Which direction is he facing now?',o:['north','south','east','west'],a:0,
     e:'Anticlockwise from west: south (¼), east (½), <b>north</b> (¾).'},
    {t:'08-perimeter-area',q:'A square of side 6 cm is cut off from one corner of a rectangle that is 10 cm by 8 cm. What happens to the perimeter of the shape?',
     o:['It decreases by 24 cm.','It stays the same.','It increases by 12 cm.','It decreases by 12 cm.'],a:1,
     e:'Cutting off a corner removes two 6 cm sides but adds two new 6 cm sides. The perimeter stays at 36 cm. (The <b>area</b> decreases.)'},
    {t:'09-symmetry',q:'Which shape has <b>exactly</b> 2 lines of symmetry?',o:['a square','an equilateral triangle','a rectangle that is not a square','a circle'],a:2,
     e:'A rectangle (not a square) has 2 lines. A square has 4, an equilateral triangle 3, a circle has many.'},
    {t:'11-data',ctx:pie([[0.5,'Rice'],[0.25,'Noodles'],[0.25,'Bread']]),q:'The pie chart shows the favourite lunch of some pupils. 30 more pupils chose rice than noodles. How many pupils took part in the survey?',o:['60','90','120','240'],a:2,
     e:'Rice '+fr(1,2)+' − noodles '+fr(1,4)+' = '+fr(1,4)+' of the pupils = 30. All the pupils = 4 × 30 = <b>120</b>.'}
  ];

  var B=[
    sa(16,'01-whole-numbers','Write the number: 7 ten thousands, 18 hundreds and 6 ones.',{n:[71806],e:'70 000 + 1800 + 6 = 71 806. (18 hundreds = 1800.)'}),
    sa(17,'01-whole-numbers','Using each of the digits 3, 0, 8 and 5 once, find the difference between the greatest and the smallest 4-digit numbers that can be formed.',{n:[5472],e:'Greatest: 8530. Smallest: 3058 (a 4-digit number cannot start with 0). 8530 − 3058 = 5472.'}),
    sa(18,'03-four-operations','Find the value of 6097 × 7.',{n:[42679],e:'6097 × 7 = 42 679'}),
    sa(19,'03-four-operations','Find the value of 9000 ÷ 8.',{n:[1125],e:'9000 ÷ 8 = 1125. Check: 1125 × 8 = 9000.'}),
    sa(20,'02-factors-multiples','List <b>all</b> the multiples of 7 that are between 40 and 70.',{set:[42,49,56,63],e:'7 × 6 = 42, 49, 56, 7 × 9 = 63. (70 is not <b>between</b> 40 and 70.)'}),
    sa(21,'02-factors-multiples','What is the smallest number that must be added to 250 to make it a multiple of 9?',{n:[2],e:'9 × 27 = 243 and 9 × 28 = 252. 252 − 250 = 2.'}),
    sa(22,'04-fractions','Find '+fr(1,6,2)+' − '+fr(3,4)+'. Give your answer as a mixed number in its simplest form.',{w:[/^1\s+5\s*\/\s*12$/],model:fr(5,12,1),e:fr(1,6,2)+' = '+fr(26,12)+' and '+fr(3,4)+' = '+fr(9,12)+'. '+fr(26,12)+' − '+fr(9,12)+' = '+fr(17,12)+' = '+fr(5,12,1)+'.'}),
    sa(23,'04-fractions','What fraction of $2 is 40 cents? Give your answer in its simplest form.',{w:[/^1\s*\/\s*5$/],model:fr(1,5),e:'Use the same units: $2 = 200 cents. '+fr(40,200)+' = '+fr(1,5)+'.'}),
    sa(24,'04-fractions',fr(5,6)+' of a number is 40. What is '+fr(1,3)+' of the number?',{n:[16],e:'5 sixths = 40, so 1 sixth = 8 and the number is 48. '+fr(1,3)+' of 48 = 16.'}),
    sa(25,'04-fractions','Express '+fr(3,8,7)+' as an improper fraction.',{w:[/^59\s*\/\s*8$/],model:fr(59,8),e:'7 × 8 = 56. 56 + 3 = 59. '+fr(59,8)+'.'}),
    sa(26,'05-decimals','Find the value of 12 − 3.47.',{n:[8.53],e:'12.00 − 3.47 = 8.53'}),
    sa(27,'05-decimals','Find the value of 0.125 × 8.',{n:[1],e:'125 × 8 = 1000, so 0.125 × 8 = 1.000 = 1.'}),
    sa(28,'05-decimals','Express '+fr(4,25,2)+' as a decimal.',{n:[2.16],e:fr(4,25)+' = '+fr(16,100)+' = 0.16. So '+fr(4,25,2)+' = 2.16.'}),
    sa(29,'05-decimals','3 ℓ 45 ml = _______ ℓ',{n:[3.045],u:'ℓ',e:'1 ℓ = 1000 ml, so 45 ml = 0.045 ℓ. 3 ℓ 45 ml = 3.045 ℓ. (Not 3.45!)'}),
    sa(30,'05-decimals','Mrs Lim bought 2.4 kg of beef at $15 per kg. How much did she pay?',{n:[36],u:'$',e:'2.4 × 15 = 24 × 15 ÷ 10 = 360 ÷ 10 = $36.'}),
    sa(31,'06-time','How many minutes are there from 11.50 a.m. to 2.05 p.m.?',{n:[135],u:'min',e:'11.50 → 12.00: 10 min. 12.00 → 2.00: 120 min. 2.00 → 2.05: 5 min. Total 135 min.'}),
    sa(32,'07-angles-lines','The diagram shows a straight line. Find ∠x.',{n:[35],u:'°',e:'40° + x + 3x = 180°. So 4x = 140° and x = 35°.'},fan([40,75],['40°','x','3x'])),
    sa(33,'08-perimeter-area','The figure is made up of rectangles. Find its area.',{n:[76],u:'cm²',e:'Big rectangle 12 × 8 = 96 cm². Gap 4 × 5 = 20 cm². 96 − 20 = 76 cm².'},
      poly([[0,0],[4,0],[4,5],[8,5],[8,0],[12,0],[12,8],[0,8]],[[6,8.9,'12 cm'],[-1.1,4,'8 cm'],[6,4.3,'4 cm'],[9.1,2.5,'5 cm']])),
    sa(34,'08-perimeter-area','Find the perimeter of the figure in Q33.',{n:[50],u:'cm',e:'The outside is like a 12 cm × 8 cm rectangle: 40 cm. The gap adds its two 5 cm sides: 40 + 10 = 50 cm.'}),
    sa(35,'11-data','The bar graph shows the number of apples, pears and mangoes sold. The number of oranges sold was half the total number of apples and mangoes sold. How many oranges were sold?',{n:[22],e:'Apples + mangoes = 24 + 20 = 44. Half of 44 = 22.'},bars([['Apples',24],['Pears',16],['Mangoes',20]],28,4,'Number sold'))
  ];
  B[0].h='Section B: Short-answer questions (40 marks)';
  B.push(
    {h:'Section C: Problem sums (30 marks)',n:36,t:'03-four-operations',ctx:'A shop sells pencils at 3 for $2. Mrs Ng bought 27 pencils.',parts:[
      {p:'(a)',q:'How much did she pay?',n:[18],m:2,u:'$',e:'27 ÷ 3 = 9 sets. 9 × $2 = $18.'},
      {p:'(b)',q:'She paid with a $50 note. What is the greatest number of extra pencils she could buy with her change?',n:[48],m:2,e:'Change: $50 − $18 = $32. $32 ÷ $2 = 16 sets. 16 × 3 = 48 pencils.'}]},
    {n:37,t:'12-problem-solving',ctx:'Container P had 3 times as much water as Container Q. After 450 ml of water was poured from P into Q, both containers had the same amount of water.',parts:[
      {p:'(a)',q:'How much water was in Container Q at first? (ml)',n:[450],m:2,u:'ml',e:'P 3 units, Q 1 unit. The difference is 2 units. Pouring half the difference (1 unit) makes them equal, so 1 unit = 450 ml.'},
      {p:'(b)',q:'How much water was there altogether? Give your answer in <b>litres</b>.',n:[1.8],m:2,u:'ℓ',e:'4 units = 4 × 450 = 1800 ml = 1.8 ℓ.'}]},
    {n:38,t:'04-fractions',ctx:'A ribbon was cut into 3 pieces. The 1st piece was '+fr(2,5)+' of the ribbon. The 2nd piece was '+fr(1,2)+' of the <b>remaining</b> ribbon. The 3rd piece was 1.5 m long.',parts:[
      {p:'(a)',q:'What fraction of the whole ribbon was the 3rd piece?',w:[/^3\s*\/\s*10$/],m:2,model:fr(3,10),e:'Remaining after the 1st piece: '+fr(3,5)+'. The 2nd piece is half of it ('+fr(3,10)+'), so the 3rd piece is the other half: '+fr(3,10)+'.'},
      {p:'(b)',q:'How long was the ribbon at first?',n:[5],m:2,u:'m',e:'3 tenths = 1.5 m, so 1 tenth = 0.5 m. 10 tenths = 5 m.'}]},
    {n:39,t:'08-perimeter-area',ctx:'A rectangular garden is 18 m long and 12 m wide. A path 2 m wide runs all the way round the <b>inside</b> edge of the garden. The rest of the garden is grass.',parts:[
      {p:'(a)',q:'What is the area of the grass?',n:[112],m:2,u:'m²',e:'The path takes 2 m from <b>each</b> side: grass is (18 − 4) m by (12 − 4) m = 14 m × 8 m = 112 m².'},
      {p:'(b)',q:'What is the area of the path?',n:[104],m:2,u:'m²',e:'Garden 18 × 12 = 216 m². Path = 216 − 112 = 104 m².'}]},
    {n:40,t:'12-problem-solving',ctx:'Ali has $5 more than Ben. Ben has $3 more than Chen. The three boys have $56 altogether.',parts:[
      {p:'',q:'How much money does Ali have?',n:[23],m:3,u:'$',e:'Chen = 1 unit. Ben = 1 unit + $3. Ali = 1 unit + $8.<br>3 units + $11 = $56, so 3 units = $45 and 1 unit = $15.<br>Ali = $15 + $8 = $23. (Check: 15 + 18 + 23 = 56.)'}]},
    {n:41,t:'06-time',ctx:'At a school, each lesson lasts 35 minutes, with a 5-minute break between lessons. The first lesson starts at 7.30 a.m.',parts:[
      {p:'(a)',q:'At what time does the 4th lesson end?',w:[/^10[.:]05\s*a\.?\s*m\.?$/],m:2,model:'10.05 a.m.',e:'4 lessons = 140 min. Breaks <b>between</b> 4 lessons: only 3, so 15 min. 155 min = 2 h 35 min. 7.30 + 2 h 35 min = 10.05 a.m.'},
      {p:'(b)',q:'After the 4th lesson there is a 30-minute recess, then 2 more lessons with a break between them. At what time does school end?',w:[/^11[.:]50\s*a\.?\s*m\.?$/],m:2,model:'11.50 a.m.',e:'10.05 + 30 min = 10.35. Lesson 35 min → 11.10. Break 5 min → 11.15. Lesson 35 min → 11.50 a.m.'}]},
    {n:42,t:'04-fractions',ctx:'In a class, '+fr(1,2)+' of the pupils chose blue as their favourite colour, '+fr(1,3)+' chose red, and the remaining 6 pupils chose green.',parts:[
      {p:'(a)',q:'How many pupils are there in the class?',n:[36],m:2,e:fr(1,2)+' + '+fr(1,3)+' = '+fr(5,6)+'. Green = '+fr(1,6)+' = 6 pupils, so the class has 6 × 6 = 36 pupils.'},
      {p:'(b)',q:'How many more pupils chose blue than red?',n:[6],m:2,e:'Blue 18, red 12. 18 − 12 = 6.'}]},
    {n:43,t:'12-problem-solving',ctx:'Squares are arranged in a pattern. Figure 1 has 1 square, Figure 2 is a 2 by 2 square made of 4 small squares, Figure 3 is a 3 by 3 square made of 9 small squares, and so on.',parts:[
      {p:'(a)',q:'How many small squares are there in Figure 7?',n:[49],m:1,e:'7 × 7 = 49'},
      {p:'(b)',q:'Which is the <b>first</b> figure to have more than 200 small squares?',n:[15],m:2,model:'Figure 15',e:'14 × 14 = 196 (not more than 200). 15 × 15 = 225. So Figure 15.'}]}
  );
