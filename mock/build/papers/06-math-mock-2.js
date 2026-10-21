/*meta
title: Math Mock Paper 2
eyebrow: P4 Math · Mock exam
h1: Math Mock Paper 2
lead: A second full end-of-year paper in the format of the 2025 school papers. All questions are new and different from Mock Paper 1. Covers all 12 P4 topics. No calculator.
key: p4m-math2
sub: 1 h 45 min · 100 marks
intro: intro-math.html
include: _math.js
quiz_lead: Section A: choose one answer. Sections B and C: work on paper, then type your answer in the box.
*/
  var CFG={amark:2,minutes:105,base:'../math/',labA:'Section A',labB:'Sections B and C'};
  function plus(){
    var k=26,pts=[[2,0],[4,0],[4,2],[6,2],[6,4],[4,4],[4,6],[2,6],[2,4],[0,4],[0,2],[2,2]];
    return '<svg viewBox="0 0 200 200" width="180" role="img" aria-label="A plus-sign shaped figure"><polygon points="'+pts.map(function(p){return (p[0]*k+22)+','+(p[1]*k+22);}).join(' ')+'" fill="var(--sun-soft)" stroke="var(--food)" stroke-width="2.5"/></svg>';
  }

  var A=[
    {h:'Section A: Multiple choice (30 marks)',t:'01-whole-numbers',q:'Which number is 1000 more than 59 470?',o:['59 570','60 470','69 470','59 480'],a:1,
     e:'Add 1 to the thousands digit: 59 thousands + 1 thousand = 60 thousands, so <b>60 470</b>.'},
    {t:'01-whole-numbers',q:'What is the value of the digit 7 in 73 815?',o:['7','700','7000','70 000'],a:3,
     e:'7 is in the ten thousands place: 7 × 10 000 = <b>70 000</b>.'},
    {t:'02-factors-multiples',q:'Which number is a multiple of both 4 and 6?',o:['10','16','36','18'],a:2,
     e:'36 = 4 × 9 and 36 = 6 × 6. 16 is not a multiple of 6, and 10 and 18 are not multiples of 4.'},
    {t:'03-four-operations',q:'Estimate the value of 4893 × 6 by first rounding 4893 to the nearest thousand.',o:['30 000','24 000','29 358','36 000'],a:0,
     e:'4893 rounds to 5000. 5000 × 6 = <b>30 000</b>. (29 358 is the exact answer, not the estimate.)'},
    {t:'04-fractions',q:'Find '+fr(1,2)+' + '+fr(1,3)+'.',o:[fr(2,5),fr(1,6),fr(2,6),fr(5,6)],a:3,
     e:fr(1,2)+' = '+fr(3,6)+' and '+fr(1,3)+' = '+fr(2,6)+'. '+fr(3,6)+' + '+fr(2,6)+' = <b>'+fr(5,6)+'</b>. Never add the bottom numbers.'},
    {t:'04-fractions',q:'Which fraction is the greatest?',o:[fr(5,8),fr(3,4),fr(2,3),fr(7,12)],a:1,
     e:'Change to 24ths: '+fr(5,8)+' = '+fr(15,24)+', '+fr(3,4)+' = '+fr(18,24)+', '+fr(2,3)+' = '+fr(16,24)+', '+fr(7,12)+' = '+fr(14,24)+'. The greatest is <b>'+fr(3,4)+'</b>.'},
    {t:'04-fractions',q:'Express '+fr(7,4)+' as a mixed number.',o:[fr(1,4,1),fr(1,7,4),fr(3,4,1),fr(1,4,3)],a:2,
     e:'7 ÷ 4 = 1 remainder 3, so '+fr(7,4)+' = <b>'+fr(3,4,1)+'</b>.'},
    {t:'05-decimals',q:'In 25.638, the digit 3 is in the _______ place.',o:['tenths','tens','thousandths','hundredths'],a:3,
     e:'25.638: 6 is in the tenths place, <b>3 in the hundredths</b>, 8 in the thousandths.'},
    {t:'05-decimals',q:'4 kg 50 g = _______ kg',o:['4.5','4.05','4.005','40.5'],a:1,
     e:'50 g = '+fr(50,1000)+' kg = 0.05 kg. So 4 kg 50 g = <b>4.05 kg</b>.'},
    {t:'05-decimals',q:'Which number becomes 2.9 when rounded to 1 decimal place?',o:['2.85','2.84','2.96','3.01'],a:0,
     e:'2.85 → the hundredths digit is 5, so round up to <b>2.9</b>. 2.84 → 2.8, 2.96 → 3.0, 3.01 → 3.0.'},
    {t:'06-time',q:'What is 1845 in 12-hour clock time?',o:['6.45 a.m.','8.45 p.m.','6.45 p.m.','18.45 p.m.'],a:2,
     e:'18 h − 12 h = 6, and it is after noon: <b>6.45 p.m.</b>'},
    {t:'07-angles-lines',q:'Jun faced north. He turned clockwise through '+fr(3,4)+' of a full turn. Which direction did he face?',o:['east','south','west','north-east'],a:2,
     e:fr(3,4)+' turn = 3 right angles clockwise: north → east → south → <b>west</b>.'},
    {t:'08-perimeter-area',q:'A rectangle is 12 cm long and 7 cm wide. What is its perimeter?',o:['19 cm','38 cm','84 cm','26 cm'],a:1,
     e:'Perimeter = 2 × (12 + 7) = <b>38 cm</b>. (84 cm² is the area.)'},
    {t:'08-perimeter-area',q:'Square P has sides of 5 cm. Rectangle Q is 10 cm by 3 cm. Which statement is correct?',
     o:['P has a bigger area than Q.','P and Q have the same perimeter.','P and Q have the same area.','Q has a bigger area and a bigger perimeter than P.'],a:3,
     e:'P: area 25 cm², perimeter 20 cm. Q: area 30 cm², perimeter 26 cm. Q is bigger in both.'},
    {t:'11-data',ctx:tbl([['Day','Mon','Tue','Wed','Thu'],['Rainfall (mm)','12','18','7','15']]),q:'The table shows the rainfall over four days. On which day was there 11 mm more rain than on Wednesday?',o:['Monday','Thursday','Tuesday','none of them'],a:2,
     e:'Wednesday: 7 mm. 7 + 11 = 18 mm, which is <b>Tuesday</b>.'}
  ];

  function sa(n,t,q,ans,ctx){var p={p:'',q:q,m:2};for(var k in ans)p[k]=ans[k];return {n:n,t:t,ctx:ctx,parts:[p]};}
  var B=[
    sa(16,'01-whole-numbers','Write eighty thousand, three hundred and five in numerals.',{n:[80305],e:'8 ten thousands, 0 thousands, 3 hundreds, 0 tens, 5 ones = 80 305.'}),
    sa(17,'03-four-operations','Find the value of 2706 × 8.',{n:[21648],e:'2706 × 8 = 21 648'}),
    sa(18,'03-four-operations','Find the value of 6125 ÷ 5.',{n:[1225],e:'6125 ÷ 5 = 1225. Check: 1225 × 5 = 6125.'}),
    sa(19,'02-factors-multiples','Find the sum of the first four multiples of 9.',{n:[90],e:'9 + 18 + 27 + 36 = 90'}),
    sa(20,'02-factors-multiples','List <b>all</b> the common factors of 12 and 30.',{set:[1,2,3,6],e:'Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Common: 1, 2, 3, 6.'}),
    sa(21,'04-fractions','Find '+fr(7,8)+' − '+fr(1,4)+'. Give your answer in its simplest form.',{w:[/^5\s*\/\s*8$/],model:fr(5,8),e:fr(1,4)+' = '+fr(2,8)+'. '+fr(7,8)+' − '+fr(2,8)+' = '+fr(5,8)+'.'}),
    sa(22,'04-fractions','Find '+fr(2,3)+' of 18.',{n:[12],e:'18 ÷ 3 = 6. 6 × 2 = 12.'}),
    sa(23,'04-fractions','Express 45 out of 60 as a fraction in its simplest form.',{w:[/^3\s*\/\s*4$/],model:fr(3,4),e:fr(45,60)+'. Divide the top and bottom by 15: '+fr(3,4)+'.'}),
    sa(24,'04-fractions','Find '+fr(2,3,1)+' + '+fr(1,6,2)+'.',{w:[/^3\s+5\s*\/\s*6$/],model:fr(5,6,3),e:'1 + 2 = 3. '+fr(2,3)+' + '+fr(1,6)+' = '+fr(4,6)+' + '+fr(1,6)+' = '+fr(5,6)+'. Answer: '+fr(5,6,3)+'.'}),
    sa(25,'05-decimals','Arrange in order, beginning with the smallest: &nbsp;0.5, &nbsp;0.405, &nbsp;0.45',{w:[/^\s*0?\.405\D+0?\.45\D+0?\.5(?!\d)/],model:'0.405, 0.45, 0.5',e:'Write them with 3 decimal places: 0.500, 0.405, 0.450. Smallest first: 0.405, 0.45, 0.5.'}),
    sa(26,'05-decimals','Find the value of 9.6 ÷ 4.',{n:[2.4],e:'96 ÷ 4 = 24, so 9.6 ÷ 4 = 2.4.'}),
    sa(27,'05-decimals','Find the value of 3.2 × 7.',{n:[22.4],e:'32 × 7 = 224, so 3.2 × 7 = 22.4.'}),
    sa(28,'05-decimals','3 m 8 cm = _______ m',{n:[3.08],u:'m',e:'8 cm = 0.08 m (100 cm = 1 m). 3 m 8 cm = 3.08 m. (Not 3.8!)'}),
    sa(29,'06-time','2 h 25 min = _______ min',{n:[145],u:'min',e:'2 h = 120 min. 120 + 25 = 145 min.'}),
    sa(30,'06-time','How many minutes are there from 10.35 a.m. to 1.10 p.m.?',{n:[155],u:'min',e:'10.35 → 12.35 is 2 h (120 min). 12.35 → 1.10 is 35 min. 120 + 35 = 155 min.'}),
    sa(31,'07-angles-lines','The diagram shows a straight line. Find ∠y.',{n:[68],u:'°',e:'Angles on a straight line add up to 180°. 180° − 65° − 47° = 68°.'},fan([65,133],['65°','y','47°'])),
    sa(32,'08-perimeter-area','A square has an area of 64 cm². What is its perimeter?',{n:[32],u:'cm',e:'8 × 8 = 64, so each side is 8 cm. Perimeter = 4 × 8 = 32 cm.'}),
    sa(33,'08-perimeter-area','The figure is made up of two rectangles. Find its area.',{n:[60],u:'cm²',e:'Top: 10 × 4 = 40 cm². Bottom: 4 × 5 = 20 cm². Total 60 cm².'},
      poly([[0,0],[10,0],[10,4],[7,4],[7,9],[3,9],[3,4],[0,4]],[[5,-0.5,'10 cm'],[-0.9,2,'4 cm'],[5,9.8,'4 cm'],[8,6.5,'5 cm']])),
    sa(34,'09-symmetry','How many lines of symmetry does this figure have?',{n:[4],e:'Lines: one up and down, one across, and two along the diagonals. 4 lines.'},plus()),
    sa(35,'11-data','The table shows the number of cars sold by a shop. How many cars were sold in the four months altogether?',{n:[176],e:'45 + 38 + 52 + 41 = 176'},tbl([['Month','Jan','Feb','Mar','Apr'],['Cars sold','45','38','52','41']]))
  ];
  B[0].h='Section B: Short-answer questions (40 marks)';
  B.push(
    {h:'Section C: Problem sums (30 marks)',n:36,t:'04-fractions',ctx:'A shop had 2450 eggs. '+fr(1,5)+' of them were cracked and thrown away. The rest were packed into trays of 30.',parts:[
      {p:'(a)',q:'How many full trays of eggs were there?',n:[65],m:2,e:'Cracked: 2450 ÷ 5 = 490. Left: 2450 − 490 = 1960. 1960 ÷ 30 = 65 remainder 10, so 65 full trays.'},
      {p:'(b)',q:'How many eggs were left over that could not fill a tray?',n:[10],m:2,e:'1960 − 65 × 30 = 1960 − 1950 = 10'}]},
    {n:37,t:'12-problem-solving',ctx:'Jia had 3 times as many stamps as Kai. After Jia gave Kai 40 stamps, they had the same number of stamps.',parts:[
      {p:'(a)',q:'How many stamps did Kai have at first?',n:[40],m:2,e:'Bar model: Kai 1 unit, Jia 3 units. The difference is 2 units. To make them equal, Jia gives half the difference: 1 unit = 40. Kai had 40.'},
      {p:'(b)',q:'How many stamps did they have altogether?',n:[160],m:2,e:'4 units = 4 × 40 = 160. (Jia 120, Kai 40.)'}]},
    {n:38,t:'05-decimals',ctx:'A ribbon was 6.4 m long. Mrs Tan cut 5 pieces from it. Each piece was 0.85 m long.',parts:[
      {p:'(a)',q:'What was the total length of the 5 pieces?',n:[4.25],m:2,u:'m',e:'5 × 0.85 m = 4.25 m'},
      {p:'(b)',q:'How much ribbon was left? Give your answer in centimetres.',n:[215],m:2,u:'cm',e:'6.4 − 4.25 = 2.15 m = 215 cm'}]},
    {n:39,t:'04-fractions',ctx:'A tank can hold 240 litres of water. It is '+fr(3,4)+' full. Then '+fr(2,5)+' of the water in the tank is used.',parts:[
      {p:'(a)',q:'How much water was in the tank at first?',n:[180],m:1,u:'litres',e:fr(3,4)+' × 240 = 180 litres'},
      {p:'(b)',q:'How much water is left in the tank?',n:[108],m:3,u:'litres',e:'Used: '+fr(2,5)+' × 180 = 72 litres. Left: 180 − 72 = 108 litres.'}]},
    {n:40,t:'06-time',ctx:'Mr Tan works from 8.15 a.m. to 5.30 p.m. every day. He has a 1-hour lunch break.',parts:[
      {p:'(a)',q:'How long does he work each day? (h and min)',w:[/^8\s*(h|hr|hrs|hours?)\s*(and\s*)?15\s*(min|mins|minutes?)?$/],m:2,model:'8 h 15 min',e:'8.15 a.m. → 5.15 p.m. is 9 h. 5.15 → 5.30 is 15 min. 9 h 15 min − 1 h = 8 h 15 min.'},
      {p:'(b)',q:'How long does he work in 4 days? (h and min)',w:[/^33\s*(h|hr|hrs|hours?)(\s*(and\s*)?0\s*(min|mins|minutes?)?)?$/],m:1,model:'33 h',e:'4 × 8 h = 32 h. 4 × 15 min = 60 min = 1 h. Total 33 h.'}]},
    {n:41,t:'08-perimeter-area',ctx:'A wall is 5 m long and 3 m high. It has a door 2 m high and 1 m wide. The wall, except the door, is to be painted. One tin of paint covers 4 m².',parts:[
      {p:'(a)',q:'What is the area to be painted?',n:[13],m:2,u:'m²',e:'Wall: 5 × 3 = 15 m². Door: 2 × 1 = 2 m². 15 − 2 = 13 m².'},
      {p:'(b)',q:'What is the smallest number of tins of paint needed?',n:[4],m:2,e:'13 ÷ 4 = 3 remainder 1. 3 tins are not enough, so 4 tins are needed.'}]},
    {n:42,t:'11-data',ctx:'48 pupils chose their favourite sport.'+tbl([['Sport','Football','Swimming','Badminton','Running'],['Number of pupils','20','12','7','?']]),parts:[
      {p:'(a)',q:'How many pupils chose running?',n:[9],m:1,e:'48 − 20 − 12 − 7 = 9'},
      {p:'(b)',q:'What fraction of the pupils chose swimming? Give your answer in its simplest form.',w:[/^1\s*\/\s*4$/],m:1,model:fr(1,4),e:fr(12,48)+' = '+fr(1,4)},
      {p:'(c)',q:'How many more pupils chose football than running?',n:[11],m:2,e:'20 − 9 = 11'}]},
    {n:43,t:'12-problem-solving',ctx:'The sum of two numbers is 95. The difference between them is 23.',parts:[
      {p:'(a)',q:'What is the bigger number?',n:[59],m:2,e:'Bar model: big = small + 23. 2 × small = 95 − 23 = 72, so small = 36. Big = 36 + 23 = 59.'},
      {p:'(b)',q:'What is the smaller number?',n:[36],m:1,e:'95 − 59 = 36'}]}
  );
