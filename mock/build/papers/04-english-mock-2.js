/*meta
title: English Mock Paper 2
eyebrow: P4 English · Mock exam · Paper 2
h1: English Mock Paper 2
lead: A second full Paper 2 (language use and comprehension) in the format of the 2025 end-of-year papers. All questions and passages are new and different from Mock Paper 1.
key: p4m-eng2
sub: Paper 2 · 1 h 15 min · 50 marks
intro: intro-english.html
quiz_lead: Choose one answer for each Booklet A question. For Booklet B, type your answers in the boxes.
*/
  var CFG={amark:1,minutes:75,base:'../english/'};
  var TOPICS={'01-verbs-tenses':'Verbs and tenses','02-subject-verb-agreement':'Subject–verb agreement','03-pronouns-quantifiers':'Pronouns and quantifiers',
    '04-prepositions-connectors':'Prepositions and connectors','05-vocabulary':'Vocabulary','06-spelling-editing':'Spelling and editing',
    '07-synthesis':'Synthesis','08-visual-text':'Visual text','09-comprehension-cloze':'Comprehension cloze','10-comprehension':'Comprehension'};
  function passage(ps){return '<div class="passage">'+ps.map(function(p,i){return '<p><b>'+(i+1)+'</b> &nbsp;'+p+'</p>';}).join('')+'</div>';}
  var POSTER='<div class="poster"><h4>Holiday Reading Challenge</h4><p>Read! Collect stamps! Win prizes!</p>'+
    '<p><b>Who:</b> Primary 1 to Primary 6 pupils<br><b>When:</b> 1 to 30 November<br><b>Where:</b> Sunny Hills Library (open 10 a.m. to 8 p.m., <b>closed on Mondays</b>)</p>'+
    '<ul><li>Borrow books from Sunny Hills Library.</li><li>For every book you finish, get a stamp on your Reading Card at the counter.</li></ul>'+
    '<p><b>Prizes</b><br>5 stamps: a bookmark &nbsp;·&nbsp; 10 stamps: a storybook &nbsp;·&nbsp; 15 stamps: a $20 bookshop voucher</p>'+
    '<p class="hint">Only books borrowed from Sunny Hills Library count.</p></div>';

  var A=[
    {h:'Grammar MCQ (10 marks)',t:'01-verbs-tenses',q:'My brother usually _______ his homework before dinner.',o:['do','does','did','doing'],a:1,
     e:'"Usually" shows a habit, and "my brother" is one person, so use <b>does</b>.'},
    {t:'01-verbs-tenses',q:'While I _______ my shoelaces, the bus drove past.',o:['tie','am tying','ties','was tying'],a:3,
     e:'One action was going on (tying) when another happened in the past (the bus drove past): use the past continuous, <b>was tying</b>.'},
    {t:'01-verbs-tenses',q:'The children _______ to the zoo last Friday.',o:['went','go','goes','have gone'],a:0,
     e:'"Last Friday" is in the past, so use the simple past: <b>went</b>.'},
    {t:'02-subject-verb-agreement',q:'The flowers in the vase _______ very fresh.',o:['is','was','look','looks'],a:2,
     e:'The subject is "the flowers" (plural), not "the vase". Flowers <b>look</b>.'},
    {t:'02-subject-verb-agreement',q:'Everybody in the class _______ excited about the school camp.',o:['are','were','is','have'],a:2,
     e:'"Everybody" is singular, so use <b>is</b>.'},
    {t:'02-subject-verb-agreement',q:'My grandparents _______ living in Malaysia now.',o:['are','is','was','has'],a:0,
     e:'"Grandparents" is plural and "now" is the present: <b>are</b>.'},
    {t:'03-pronouns-quantifiers',q:'Grandma gave Jia and _______ a box of mooncakes.',o:['I','mine','my','me'],a:3,
     e:'After the verb ("gave"), use <b>me</b>. Test it: "Grandma gave me a box", not "gave I".'},
    {t:'03-pronouns-quantifiers',q:'The cat licked _______ paws after its meal.',o:['it&rsquo;s','its','their','his'],a:1,
     e:'<b>Its</b> (no apostrophe) means "belonging to it". <b>It&rsquo;s</b> means "it is".'},
    {t:'03-pronouns-quantifiers',q:'How _______ sugar do you need for the cake?',o:['much','many','few','lot'],a:0,
     e:'Sugar cannot be counted, so ask "how <b>much</b>". Use "how many" for things we can count (how many eggs).'},
    {t:'04-prepositions-connectors',q:'Ali was very tired, _______ he finished his homework before going to bed.',o:['because','so','but','or'],a:2,
     e:'Being tired and still finishing his homework are opposite ideas, so use <b>but</b>.'},
    {h:'Vocabulary MCQ (6 marks)',t:'05-vocabulary',q:'The library is a _______ place, so please lower your voice.',o:['noisy','busy','crowded','quiet'],a:3,
     e:'We lower our voices to keep a place <b>quiet</b>.'},
    {t:'05-vocabulary',q:'Leon was _______ to see his best friend again after a month apart.',o:['annoyed','delighted','nervous','jealous'],a:1,
     e:'Seeing a best friend after a long time makes you very happy: <b>delighted</b>.'},
    {t:'05-vocabulary',q:'The magician&rsquo;s trick was so _______ that the audience gasped.',o:['boring','ordinary','amazing','simple'],a:2,
     e:'People gasp when something is surprising: <b>amazing</b>.'},
    {t:'05-vocabulary',q:'The cook _______ the soup to see if it needed more salt.',o:['tasted','wasted','tested','toasted'],a:0,
     e:'We <b>taste</b> food with our tongue to check its flavour. Careful with look-alike words.'},
    {t:'05-vocabulary',q:'Mr Tan always arrives on time for every meeting. He is very _______.',o:['lazy','forgetful','rude','punctual'],a:3,
     e:'<b>Punctual</b> means always on time.'},
    {t:'05-vocabulary',q:'The puppy _______ its tail happily when it saw its owner.',o:['shook','wagged','waved','swung'],a:1,
     e:'A dog <b>wags</b> its tail. We wave our hands.'},
    {h:'Visual Text Comprehension (4 marks)',t:'08-visual-text',ctx:POSTER,q:'Study the poster. What is the main purpose of the poster?',
     o:['to sell books to children','to tell people that the library is closed on Mondays','to encourage children to read more during the holidays','to advertise a bookshop'],a:2,
     e:'The poster invites pupils to read books in November and win prizes. The Monday closing is only a small detail.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Mei finished 12 books from the library. What is the best prize she can get?',
     o:['a storybook','a bookmark','a $20 bookshop voucher','nothing'],a:0,
     e:'12 stamps is more than 10 but less than 15, so the best prize she can get is the <b>storybook</b>.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Which of these books will <b>not</b> earn a stamp?',
     o:['a comic borrowed from Sunny Hills Library','a storybook borrowed on a Saturday','a picture book borrowed from Sunny Hills Library','a book Jun bought from a bookshop'],a:3,
     e:'"Only books borrowed from Sunny Hills Library count." A book bought from a bookshop does not count.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. On which day can Ravi <b>not</b> collect a stamp at the counter?',
     o:['Sunday','Monday','Saturday','Wednesday'],a:1,
     e:'The library is <b>closed on Mondays</b>.'}
  ];

  var B=[
    {h:'Grammar Cloze (8 marks)',n:'21–24',t:'04-prepositions-connectors',ctx:'<p>Fill in each blank with the correct word from the box. Write the <b>letter or the word</b>. Use each word once only.</p>'+
      '<div class="wbank"><span>(A) across</span><span>(B) at</span><span>(C) for</span><span>(D) in</span><span>(E) under</span><span>(F) with</span></div>'+
      '<div class="passage"><p>Kumar woke up early <span class="bl">(21)</span> _____ the morning to go fishing <span class="bl">(22)</span> _____ his father. They walked <span class="bl">(23)</span> _____ the bridge to reach the jetty. They waited <span class="bl">(24)</span> _____ two hours before they finally caught a fish.</p></div>',parts:[
      {p:'(21)',q:'',w:[/^\(?d\)?\s*(in)?$|^in$/],model:'(D) in',e:'We say <b>in</b> the morning (but <b>at</b> night).'},
      {p:'(22)',q:'',w:[/^\(?f\)?\s*(with)?$|^with$/],model:'(F) with',e:'He went fishing together <b>with</b> his father.'},
      {p:'(23)',q:'',w:[/^\(?a\)?\s*(across)?$|^across$/],model:'(A) across',e:'They walked from one side of the bridge to the other: <b>across</b>.'},
      {p:'(24)',q:'',w:[/^\(?c\)?\s*(for)?$|^for$/],model:'(C) for',e:'Use <b>for</b> with a length of time: for two hours.'}]},
    {n:'25–28',t:'01-verbs-tenses',ctx:'<p>Write the correct word from the brackets.</p>'+
      '<div class="passage"><p>Last December, my family <span class="bl">(25)</span> [ fly / flew / flown ] to Japan for a holiday. It <span class="bl">(26)</span> [ is / was ] very cold there. Every morning, we <span class="bl">(27)</span> [ drink / drank ] hot chocolate to keep warm. Now I <span class="bl">(28)</span> [ want / wanted / wants ] to go back again!</p></div>',parts:[
      {p:'(25)',q:'',w:['flew'],e:'"Last December" = past: <b>flew</b>. "Flown" needs has/have.'},
      {p:'(26)',q:'',w:['was'],e:'The story is in the past: it <b>was</b> cold.'},
      {p:'(27)',q:'',w:['drank'],e:'Still part of the holiday in the past: <b>drank</b>.'},
      {p:'(28)',q:'',w:['want'],e:'"Now" = present tense, and with "I" we use <b>want</b> (not "wants").'}]},
    {h:'Synthesis (4 marks)',n:29,t:'07-synthesis',ctx:'<p>Rewrite the sentences as <b>one</b> sentence, using the word(s) given. The meaning must stay the same.</p>',parts:[
      {p:'',q:'Sara was feeling unwell. She still went to school. &nbsp;(Begin with: <b>Although</b> …)',start:'Although …',
       s:['Although Sara was feeling unwell, she went to school.','Although Sara was feeling unwell, she still went to school.','Although she was feeling unwell, Sara went to school.','Although she was feeling unwell, Sara still went to school.','Although Sara was unwell, she went to school.','Although Sara was unwell, she still went to school.'],
       e:'Do not use "but" together with "although". Put a comma after the "Although …" part.'}]},
    {n:30,t:'07-synthesis',parts:[
      {p:'',q:'The cake was delicious. My mother baked the cake. &nbsp;(Use: <b>which</b>)',
       s:['The cake which my mother baked was delicious.','The cake, which my mother baked, was delicious.','The cake which was baked by my mother was delicious.'],
       e:'"Which my mother baked" goes straight after "The cake", and the second "the cake" is dropped.'}]},
    {n:31,t:'07-synthesis',parts:[
      {p:'',q:'Ben did not finish his homework. Ben did not tidy his room. &nbsp;(Use: <b>neither … nor</b>)',
       s:['Ben neither finished his homework nor tidied his room.'],
       e:'Neither … nor already means "not", so remove "did not": Ben <b>neither</b> finished … <b>nor</b> tidied …'}]},
    {n:32,t:'07-synthesis',parts:[
      {p:'',q:'"Please close the window," the teacher said to Ali. &nbsp;(Begin with: <b>The teacher asked Ali</b> …)',start:'The teacher asked Ali …',
       s:['The teacher asked Ali to close the window.'],
       e:'A polite request becomes "asked … <b>to</b> + verb". Drop "please" and the speech marks.'}]},
    {h:'Comprehension 1 (8 marks)',n:33,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions.</p>'+passage([
      'Hui Min had practised her lines for the class play every evening for two weeks. She was playing the wise old owl, and she knew every word by heart.',
      'On the day of the performance, the school hall was packed with parents. When Hui Min peeped out from behind the curtain, her heart began to pound and her hands turned cold. "What if I forget my lines?" she whispered to her friend, Aisha.',
      'Aisha squeezed her hand. "Just look at the clock at the back of the hall and pretend it is our classroom," she said. "You have done this a hundred times."',
      'When it was her turn, Hui Min stepped onto the stage. For a moment, her mind went blank. Then she remembered Aisha&rsquo;s advice. She fixed her eyes on the clock, took a deep breath and began to speak. Her voice grew louder and stronger with every line.',
      'At the end of the play, the audience clapped and cheered. Mrs Wong, her form teacher, said that Hui Min was the best owl she had ever seen. Hui Min grinned at Aisha. She could not wait for the next school play.']),parts:[
      {p:'(a)',q:'True or false? Hui Min practised her lines for two weeks.',o:['True','False'],a:0,e:'"every evening for two weeks"'},
      {p:'(b)',q:'True or false? There were not many people in the hall.',o:['True','False'],a:1,e:'The hall was "<b>packed</b>" with parents: it was full.'},
      {p:'(c)',q:'True or false? Aisha gave Hui Min some advice.',o:['True','False'],a:0,e:'Aisha told her to look at the clock and pretend it was their classroom.'},
      {p:'(d)',q:'Hui Min&rsquo;s heart pounded because she was _______.',o:['excited about her costume','afraid that she would forget her lines','angry with Aisha'],a:1,e:'"What if I forget my lines?"'},
      {p:'(e)',q:'What advice did Aisha give Hui Min?',k:[{l:'look at the clock / pretend the hall is their classroom',all:[/clock|classroom|pretend/]}],
       model:'She told Hui Min to look at the clock at the back of the hall and pretend it was their classroom.'},
      {p:'(f)',q:'Give <b>two</b> things Hui Min did to calm herself before she began to speak.',
       k:[{l:'fixed her eyes on the clock',all:[/clock|eyes|look|stare/]},{l:'took a deep breath',all:[/breath/]}],
       model:'She fixed her eyes on the clock and took a deep breath.'},
      {p:'(g)',q:'How do you know that Hui Min enjoyed acting in the end?',k:[{l:'she could not wait for the next school play',all:[/next|again|wait|grin/]}],
       model:'She could not wait for the next school play.'}]},
    {h:'Comprehension 2 (10 marks)',n:34,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions in full sentences.</p>'+passage([
      'One evening, there was a blackout in Block 25. The lifts stopped, the fans went still and the whole corridor was dark. Ethan, who lived on the twelfth floor with his grandmother, rushed to find a torch.',
      'Ethan remembered that Mr Teo, their elderly neighbour, lived alone. Mr Teo used a walking stick and could not see well in the dark. "We should check on him," said Grandma. Ethan took the torch and knocked on Mr Teo&rsquo;s door.',
      'Mr Teo opened the door slowly. He had been trying to find his medicine, which he had to take after dinner, but he could not read the labels without light. Ethan shone the torch on the bottles so that Mr Teo could find the right one.',
      'Soon, other neighbours came out of their flats. Mrs Rahman brought a box of candles, and the Lim twins carried bottles of water up the stairs for the elderly residents who could not climb down. The corridor, usually so quiet, was filled with chatter and laughter.',
      'Two hours later, the lights came back on. Mr Teo thanked Ethan again and again. That weekend, he invited Ethan and Grandma over for tea and taught Ethan how to play Chinese chess. From then on, Ethan visited him every Saturday.']),parts:[
      {p:'(a)',q:'Name <b>two</b> things that stopped working during the blackout.',
       k:[{l:'one thing (lifts / fans / lights)',all:[/lift|fan|light/]},{l:'a second thing',all:[/(lift|fan|light)[\s\S]*(lift|fan|light)/]}],
       model:'The lifts and the fans stopped working (the lights went out too).'},
      {p:'(b)',q:'Give <b>two</b> reasons why Grandma wanted to check on Mr Teo. (paragraph 2)',
       k:[{l:'he lived alone',all:[/alone|by himself|on his own/]},{l:'he could not see well in the dark / used a walking stick',all:[/see|walking stick|dark|elderly|old/]}],
       model:'Mr Teo lived alone, and he could not see well in the dark (he used a walking stick).'},
      {p:'(c)',q:'What problem did Mr Teo have when Ethan arrived?',k:[{l:'he could not find / read the labels of his medicine',all:[/medicine/]}],
       model:'He could not find his medicine because he could not read the labels without light.'},
      {p:'(d)',q:'How did Ethan help Mr Teo?',k:[{l:'he shone the torch on the bottles',all:[/torch|light|shone|shine/]}],
       model:'He shone the torch on the bottles so that Mr Teo could find the right medicine.'},
      {p:'(e)',q:'Why did the Lim twins carry bottles of water up the stairs?',k:[{l:'the lifts were not working / the elderly could not climb down',all:[/lift|climb|stairs|could not|couldn't|old|elderly/]}],
       model:'The lifts were not working, and the elderly residents could not climb down the stairs to get water.'},
      {p:'(f)',q:'Find <b>one</b> word in paragraph 4 which shows that people were talking and having fun.',w:[/\b(chatter|laughter)\b/],model:'chatter',e:'<b>Laughter</b> is also correct.'},
      {p:'(g)',q:'How did the friendship between Ethan and Mr Teo change after the blackout? Give <b>two</b> details.',
       k:[{l:'they became friends / closer',all:[/friend|close|closer|know each other/]},{l:'Ethan visited every Saturday / they played chess / had tea',all:[/saturday|visit|chess|tea/]}],
       model:'They became good friends. Mr Teo invited Ethan for tea and taught him Chinese chess, and Ethan visited him every Saturday.'}]}
  ];
