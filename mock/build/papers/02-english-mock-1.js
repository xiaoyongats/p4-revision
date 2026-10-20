/*meta
title: English Mock Paper 1
eyebrow: P4 English · Mock exam · Paper 2
h1: English Mock Paper 1
lead: A full Paper 2 (language use and comprehension) in the same format as the 2025 end-of-year papers (ACS, Henry Park, Nanyang, Ai Tong, Catholic High, Nan Hua). All questions and passages are new.
key: p4m-eng1
sub: Paper 2 · 1 h 15 min · 50 marks
intro: intro-english.html
quiz_lead: Choose one answer for each Booklet A question. For Booklet B, type your answers in the boxes.
*/
  var CFG={amark:1,minutes:75,base:'../english/'};
  var TOPICS={'01-verbs-tenses':'Verbs and tenses','02-subject-verb-agreement':'Subject–verb agreement','03-pronouns-quantifiers':'Pronouns and quantifiers',
    '04-prepositions-connectors':'Prepositions and connectors','05-vocabulary':'Vocabulary','06-spelling-editing':'Spelling and editing',
    '07-synthesis':'Synthesis','08-visual-text':'Visual text','09-comprehension-cloze':'Comprehension cloze','10-comprehension':'Comprehension'};
  function passage(ps){return '<div class="passage">'+ps.map(function(p,i){return '<p><b>'+(i+1)+'</b> &nbsp;'+p+'</p>';}).join('')+'</div>';}
  var POSTER='<div class="poster"><h4>Junior Science Carnival</h4><p>Build it! Test it! Explore it!</p>'+
    '<p><b>Date:</b> Saturday, 14 November &nbsp;·&nbsp; <b>Time:</b> 9 a.m. to 4 p.m.<br><b>Venue:</b> Maple Community Centre, Hall 2</p>'+
    '<ul><li>Make your own slime (9 a.m. to 11 a.m.)</li><li>Rocket launch show at the field (2 p.m.)</li><li>Magic of Magnets workshop: <b>for ages 8 to 12 only</b>. Sign up at the counter.</li></ul>'+
    '<p>Entry: <b>$5</b> per child. Adults enter free.<br>Bring this poster to get a <b>free</b> science kit (while stocks last)!</p>'+
    '<p class="hint">Organised by Bright Sparks Learning Centre</p></div>';

  var A=[
    {h:'Grammar MCQ (10 marks)',t:'01-verbs-tenses',q:'"Look! The cat _______ up the tree," shouted Ben.',o:['climb','climbs','is climbing','climbed'],a:2,
     e:'"Look!" tells us it is happening right now, so use the present continuous: <b>is climbing</b>.'},
    {t:'01-verbs-tenses',q:'Yesterday, Ravi _______ his finger while he was slicing an apple.',o:['cut','cuts','is cutting','has cut'],a:0,
     e:'"Yesterday" means simple past. The past tense of cut is <b>cut</b>.'},
    {t:'02-subject-verb-agreement',q:'Each of the pupils _______ a name tag for the learning journey.',o:['have','has','are having','were having'],a:1,
     e:'"Each" is singular, so use the singular verb <b>has</b>.'},
    {t:'02-subject-verb-agreement',q:'The box of crayons _______ on the top shelf.',o:['is','are','were','have'],a:0,
     e:'The subject is "the <b>box</b>" (one box), not "crayons". One box <b>is</b>.'},
    {t:'02-subject-verb-agreement',q:'Mrs Lim and her daughter _______ baking cookies when the doorbell rang.',o:['was','were','is','are'],a:1,
     e:'Two people (Mrs Lim <b>and</b> her daughter) = plural. The doorbell rang in the past, so use <b>were</b>.'},
    {t:'03-pronouns-quantifiers',q:'Sam and _______ went to the library after school.',o:['me','I','my','mine'],a:1,
     e:'Before the verb ("went"), use <b>I</b>. Test it: "I went to the library", not "Me went".'},
    {t:'03-pronouns-quantifiers',q:'There is only a _______ milk left in the bottle, so we need to buy more.',o:['few','little','many','lot'],a:1,
     e:'Milk cannot be counted, so use <b>a little</b>. "A few" is for things we can count (a few eggs).'},
    {t:'03-pronouns-quantifiers',q:'"_______ shoes over there belong to my brother," said Ali, pointing to the door.',o:['This','That','These','Those'],a:3,
     e:'"Over there" = far away, and "shoes" is plural, so use <b>Those</b>.'},
    {t:'04-prepositions-connectors',q:'The children were not allowed to play outside _______ it was raining heavily.',o:['because','although','but','so'],a:0,
     e:'The rain is the <b>reason</b> they could not play outside, so use <b>because</b>.'},
    {t:'04-prepositions-connectors',q:'We have lived in this flat _______ 2019.',o:['for','since','from','at'],a:1,
     e:'Use <b>since</b> with a starting point in time (since 2019, since Monday). Use "for" with a length of time (for six years).'},
    {h:'Vocabulary MCQ (6 marks)',t:'05-vocabulary',q:'The _______ boy shared his sweets with everyone in the class.',o:['selfish','generous','greedy','careless'],a:1,
     e:'Someone who shares freely is <b>generous</b>. Selfish and greedy mean the opposite.'},
    {t:'05-vocabulary',q:'Mei was _______ when she could not find her way home in the dark.',o:['frightened','delighted','proud','bored'],a:0,
     e:'Being lost in the dark is scary, so she was <b>frightened</b>.'},
    {t:'05-vocabulary',q:'The firemen _______ the kitten that was stuck on the roof.',o:['refused','rescued','removed','reminded'],a:1,
     e:'To <b>rescue</b> means to save someone from danger.'},
    {t:'05-vocabulary',q:'After running for an hour, Jun was so _______ that he fell asleep on the sofa.',o:['excited','energetic','exhausted','curious'],a:2,
     e:'<b>Exhausted</b> means very tired. The clue is "fell asleep".'},
    {t:'05-vocabulary',q:'The teacher reminded us to _______ the instructions carefully during the experiment.',o:['follow','chase','lead','carry'],a:0,
     e:'We <b>follow</b> instructions: we do what they say.'},
    {t:'05-vocabulary',q:'The old wooden bridge was so _______ that nobody was allowed to walk on it.',o:['sturdy','unsafe','gentle','polite'],a:1,
     e:'Nobody was allowed on it, so it was <b>unsafe</b>. "Sturdy" means strong, the opposite.'},
    {h:'Visual Text Comprehension (4 marks)',t:'08-visual-text',ctx:POSTER,q:'Study the poster. What is the main purpose of the poster?',
     o:['to sell science kits','to invite children to a science event','to advertise the classes of a learning centre','to teach children how to make slime'],a:1,
     e:'The poster gives the date, time, venue and activities of the carnival: it invites children to come. The science kit and slime are only small parts of it.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Jun is 7 years old. Which activity can he <b>not</b> take part in?',
     o:['making slime','watching the rocket launch show','the Magic of Magnets workshop','none of the above'],a:2,
     e:'The workshop is "for ages 8 to 12 only". Jun is 7, so he is too young.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Mrs Tan goes to the carnival with her two children. How much does she pay for entry altogether?',
     o:['$5','$10','$15','nothing'],a:1,
     e:'Each child pays $5, and adults enter free: 2 × $5 = <b>$10</b>.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. How can a child get a free science kit?',
     o:['by paying $5 at the entrance','by bringing the poster to the carnival','by signing up at the counter','by watching the rocket launch show'],a:1,
     e:'"Bring this poster to get a free science kit." Note "while stocks last": the kits may run out, so come early.'}
  ];

  var B=[
    {h:'Grammar Cloze (8 marks)',n:'21–24',t:'03-pronouns-quantifiers',ctx:'<p>Fill in each blank with the correct word from the box. Write the <b>letter or the word</b>. Use each word once only.</p>'+
      '<div class="wbank"><span>(A) a</span><span>(B) an</span><span>(C) any</span><span>(D) some</span><span>(E) their</span><span>(F) them</span></div>'+
      '<div class="passage"><p>Last Sunday, Aunty Rose took the twins to the zoo. On the way, she bought <span class="bl">(21)</span> _____ umbrella because the sky was cloudy. At the zoo, the twins wanted to feed the goats, but they did not have <span class="bl">(22)</span> _____ food with them. A kind zookeeper gave <span class="bl">(23)</span> _____ a small bag of leaves. The twins thanked him and fed the goats with <span class="bl">(24)</span> _____ own hands.</p></div>',parts:[
      {p:'(21)',q:'',w:[/^\(?b\)?\s*(an)?$|^an$/],model:'(B) an',e:'"Umbrella" starts with a vowel sound, so use <b>an</b>.'},
      {p:'(22)',q:'',w:[/^\(?c\)?\s*(any)?$|^any$/],model:'(C) any',e:'Use <b>any</b> in negative sentences: "did not have any food".'},
      {p:'(23)',q:'',w:[/^\(?f\)?\s*(them)?$|^them$/],model:'(F) them',e:'The zookeeper gave the leaves to the twins: <b>them</b> (after the verb).'},
      {p:'(24)',q:'',w:[/^\(?e\)?\s*(their)?$|^their$/],model:'(E) their',e:'The hands belong to the twins: <b>their</b> own hands.'}]},
    {n:'25–28',t:'02-subject-verb-agreement',ctx:'<p>Write the correct word from the brackets.</p>'+
      '<div class="passage"><p>Every evening, my grandfather <span class="bl">(25)</span> [ take / takes ] a walk in the park near our block. He and his best friend usually <span class="bl">(26)</span> [ walk / walks ] around the pond together. Yesterday, they <span class="bl">(27)</span> [ see / saw / seen ] a family of otters swimming there. "There <span class="bl">(28)</span> [ is / are ] so many of them!" Grandpa told me excitedly.</p></div>',parts:[
      {p:'(25)',q:'',w:['takes'],e:'"My grandfather" is one person and "every evening" is a habit: <b>takes</b>.'},
      {p:'(26)',q:'',w:['walk'],e:'"He and his best friend" = two people, so use the plural verb <b>walk</b>.'},
      {p:'(27)',q:'',w:['saw'],e:'"Yesterday" = past tense: <b>saw</b>. "Seen" needs has/have.'},
      {p:'(28)',q:'',w:['are'],e:'"So many of them" is plural: there <b>are</b>.'}]},
    {h:'Synthesis (4 marks)',n:29,t:'07-synthesis',ctx:'<p>Rewrite the sentences as <b>one</b> sentence, using the word(s) given. The meaning must stay the same.</p>',parts:[
      {p:'',q:'Mother cooked dinner. Then she washed the dishes. &nbsp;(Begin with: <b>After</b> …)',start:'After …',
       s:['After Mother cooked dinner, she washed the dishes.','After Mother had cooked dinner, she washed the dishes.','After cooking dinner, Mother washed the dishes.','After she cooked dinner, Mother washed the dishes.','After she had cooked dinner, Mother washed the dishes.'],
       e:'Put a comma after the "After …" part.'}]},
    {n:30,t:'07-synthesis',parts:[
      {p:'',q:'The boy is my cousin. The boy is wearing a red cap. &nbsp;(Use: <b>who</b>)',
       s:['The boy who is wearing a red cap is my cousin.','The boy, who is wearing a red cap, is my cousin.'],
       e:'"Who is wearing a red cap" goes straight after "The boy", the person it describes.'}]},
    {n:31,t:'07-synthesis',parts:[
      {p:'',q:'The rain was very heavy. We could not go out to play. &nbsp;(Use: <b>so … that</b>)',
       s:['The rain was so heavy that we could not go out to play.','The rain was so heavy that we could not go outside to play.'],
       e:'Drop "very" and put <b>so</b> in front of the describing word: so heavy that …'}]},
    {n:32,t:'07-synthesis',parts:[
      {p:'',q:'"I will bring my storybook tomorrow," Lina told her friend. &nbsp;(Begin with: <b>Lina told her friend that</b> …)',start:'Lina told her friend that …',
       s:['Lina told her friend that she would bring her storybook the next day.','Lina told her friend that she would bring her storybook the following day.','Lina told her friend that she would bring her storybook the day after.'],
       e:'Reported speech: I → she, my → her, will → <b>would</b>, tomorrow → <b>the next day</b>. No speech marks.'}]},
    {h:'Comprehension 1 (8 marks)',n:33,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions.</p>'+passage([
      'Arif was walking home from school when he noticed a brown wallet lying beside a bench at the void deck. He picked it up and looked around, but nobody was there. Inside, he found some money, a library card and a photograph of an old man smiling with a little girl.',
      'Arif&rsquo;s friend Leon, who was walking with him, grinned. "Finders keepers! We can buy ice cream with that money," he said. Arif shook his head firmly. "It isn&rsquo;t ours. The owner must be very worried," he replied.',
      'The boys showed the wallet to the security guard at the condominium next door, but the guard did not recognise the man in the photograph. Then Arif remembered the name on the library card: Mr Goh Ah Seng. "Let&rsquo;s ask Mrs Lee at the provision shop. She knows everyone in the neighbourhood," he said.',
      'Mrs Lee looked at the photograph and chuckled. "That is Mr Goh from Block 12. He buys his newspaper here every morning." Before the boys could leave, an old man hurried into the shop. He was searching his pockets anxiously, and his face was pale.',
      'When Arif held up the wallet, Mr Goh&rsquo;s eyes filled with tears. "The money is not important," he said softly, "but that photograph is the only one I have of my granddaughter before she moved overseas." He tried to give the boys some money as a reward, but Arif politely refused. Leon looked down at his shoes, feeling ashamed of what he had said earlier.']),parts:[
      {p:'(a)',q:'True or false? (paragraphs 1 and 2) Arif found the wallet on his way to school.',o:['True','False'],a:1,e:'He was walking <b>home from</b> school.'},
      {p:'(b)',q:'True or false? Leon wanted to use the money in the wallet.',o:['True','False'],a:0,e:'"We can buy ice cream with that money."'},
      {p:'(c)',q:'True or false? There was a photograph inside the wallet.',o:['True','False'],a:0,e:'"a photograph of an old man smiling with a little girl"'},
      {p:'(d)',q:'Arif suggested asking Mrs Lee because she _______.',o:['owned the condominium','knew everyone in the neighbourhood','was Mr Goh&rsquo;s granddaughter'],a:1,e:'"She knows everyone in the neighbourhood."'},
      {p:'(e)',q:'Give <b>two</b> signs in paragraph 4 which show that Mr Goh was worried.',
       k:[{l:'he was searching his pockets anxiously',all:[/search|pocket|looking for/]},{l:'his face was pale',all:[/pale/]}],
       model:'He was searching his pockets anxiously, and his face was pale.'},
      {p:'(f)',q:'Why was the photograph so important to Mr Goh?',
       k:[{l:'it was the only photo of his granddaughter (before she moved overseas)',all:[/grand ?-?daughter/,/only|overseas|moved|away/]}],
       model:'It was the only photograph he had of his granddaughter before she moved overseas.'},
      {p:'(g)',q:'Why did Leon feel ashamed at the end?',
       k:[{l:'he had wanted to keep / spend the money',all:[/keep|spend|buy|ice cream|money|finders/]}],
       model:'He had wanted to keep the money and spend it on ice cream, but Arif returned the wallet and even refused a reward.'}]},
    {h:'Comprehension 2 (10 marks)',n:34,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions in full sentences.</p>'+passage([
      'When the pupils of 4 Hibiscus were told that they would take care of the empty plot of land behind the canteen, most of them groaned. The soil was hard and dry, and weeds grew everywhere. Only Priya looked excited. Her grandmother had a small vegetable garden, and Priya had spent many happy weekends helping her.',
      'Their teacher, Mr Rahman, divided the class into three groups. The first group pulled out the weeds. The second group mixed compost into the soil to make it rich and soft. The third group, led by Priya, planted seedlings of kangkong, chilli and long beans in neat rows.',
      'For the first week, everything went well. Then, during the school holidays, nobody remembered to water the plants. When the pupils returned, many of the seedlings had wilted, and the leaves of the chilli plants had turned brown. Some of the pupils wanted to give up. "Gardens are too much trouble," grumbled Darren.',
      'Priya did not agree. She suggested that the class draw up a watering roster so that two pupils would be in charge each day. She also asked the school caretaker, Uncle Bala, if he could water the plants during the holidays. He gladly agreed.',
      'Three months later, the garden was green and full of life. The class harvested so much kangkong that the canteen vendor cooked it for the whole school. Even Darren, who had complained the loudest, proudly told everyone that he had helped to grow it.']),parts:[
      {p:'(a)',q:'Give <b>two</b> reasons why most of the pupils groaned. (paragraph 1)',
       k:[{l:'the soil was hard and dry',all:[/hard|dry/]},{l:'there were weeds everywhere',all:[/weed/]}],
       model:'The soil was hard and dry, and weeds grew everywhere.'},
      {p:'(b)',q:'Why did Priya look excited?',
       k:[{l:'she had enjoyed helping in her grandmother&rsquo;s garden',all:[/grand ?mother|grandma|helped|helping/]}],
       model:'She had spent many happy weekends helping in her grandmother&rsquo;s vegetable garden, so she enjoyed gardening.'},
      {p:'(c)(i)',q:'What did the <b>first</b> group do?',k:[{l:'pulled out the weeds',all:[/weed/]}],model:'They pulled out the weeds.'},
      {p:'(c)(ii)',q:'What did the <b>third</b> group do?',k:[{l:'planted the seedlings',all:[/plant|seedling/]}],model:'They planted seedlings of kangkong, chilli and long beans in neat rows.'},
      {p:'(d)',q:'What happened to the plants during the school holidays, and why?',
       k:[{l:'the seedlings wilted / leaves turned brown',all:[/wilt|brown|die|dying|dead|dried/]},{l:'nobody watered them',all:[/water/]}],
       model:'Many of the seedlings wilted and the chilli leaves turned brown, because nobody remembered to water them.'},
      {p:'(e)',q:'Name <b>two</b> things Priya did to solve the problem.',
       k:[{l:'suggested a watering roster',all:[/roster|turns?|schedule|timetable|two pupils|each day/]},{l:'asked Uncle Bala to water during the holidays',all:[/bala|caretaker/]}],
       model:'She suggested a watering roster with two pupils in charge each day, and she asked Uncle Bala, the caretaker, to water the plants during the holidays.'},
      {p:'(f)',q:'Which word in paragraph 3 means "complained in an unhappy voice"?',w:['grumbled'],model:'grumbled'}]}
  ];
