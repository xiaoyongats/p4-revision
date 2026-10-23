/*meta
title: English Mock Paper 5
eyebrow: P4 English · Mock exam · Paper 2 · Challenge
h1: English Mock Paper 5 (Challenge)
lead: A harder Paper 2 with a comprehension cloze (fill in your own word). Watch for questions that ask what is NOT allowed or which statement is TRUE, and work out prices carefully on the poster.
key: p4m-eng5
sub: Paper 2 · Challenge · 1 h 15 min · 50 marks
intro: intro-english.html
quiz_lead: Watch for NOT, TRUE and EXCEPT in the questions. In the comprehension cloze, write only ONE word in each blank.
*/
  var CFG={amark:1,minutes:75,base:'../english/'};
  var TOPICS={'01-verbs-tenses':'Verbs and tenses','02-subject-verb-agreement':'Subject–verb agreement','03-pronouns-quantifiers':'Pronouns and quantifiers',
    '04-prepositions-connectors':'Prepositions and connectors','05-vocabulary':'Vocabulary','06-spelling-editing':'Spelling and editing',
    '07-synthesis':'Synthesis','08-visual-text':'Visual text','09-comprehension-cloze':'Comprehension cloze','10-comprehension':'Comprehension'};
  function passage(ps){return '<div class="passage">'+ps.map(function(p,i){return '<p><b>'+(i+1)+'</b> &nbsp;'+p+'</p>';}).join('')+'</div>';}
  var POSTER='<div class="poster"><h4>Riverside Bird Park</h4><p>Open daily, 8.30 a.m. to 6 p.m. (<b>last entry 5 p.m.</b>)</p>'+
    '<p><b>Tickets:</b> Adult $30 &nbsp;·&nbsp; Child (3 to 12 years) $20 &nbsp;·&nbsp; Senior (60 years and above) $15 &nbsp;·&nbsp; Below 3 years: <b>free</b></p>'+
    '<ul><li>Parrot Show: 10 a.m. and 3 p.m. at the Amphitheatre</li><li>Penguin Feeding: 11.30 a.m. at Penguin Cove <b>(closed for repairs until 30 November)</b></li>'+
    '<li>Tram ride around the park: $3 per person. Not suitable for children <b>below 4</b>.</li></ul>'+
    '<p>Please do <b>not</b> feed the birds, <b>except</b> at the Lory Loft, where nectar cups are sold.</p></div>';

  var A=[
    {h:'Grammar MCQ (10 marks)',t:'02-subject-verb-agreement',q:'Everyone except the twins _______ the answer to the riddle.',o:['knows','know','are knowing','have known'],a:0,
     e:'The subject is "<b>Everyone</b>" (singular). "Except the twins" does not change it: everyone … <b>knows</b>.'},
    {t:'02-subject-verb-agreement',q:'The news about the floods _______ very worrying.',o:['was','are','were','have been'],a:0,
     e:'"<b>News</b>" is always singular, even though it ends in -s: the news <b>was</b>.'},
    {t:'01-verbs-tenses',q:'My father _______ in the same company for ten years now.',o:['works','worked','is working','has worked'],a:3,
     e:'"For ten years <b>now</b>": it started in the past and is still true, so use <b>has worked</b>.'},
    {t:'06-spelling-editing',q:'Which sentence uses commas correctly?',o:['I bought apples, oranges, and, pears.','I bought apples, oranges and pears.','I bought, apples oranges and pears.','I bought apples oranges, and pears.'],a:1,
     e:'Put commas between items in a list, but not before "and" and not after "bought".'},
    {t:'03-pronouns-quantifiers',q:'There were _______ people at the beach that we could hardly find a place to sit.',o:['so much','such many','so many','too many'],a:2,
     e:'People can be counted, so use "many", and the pattern is <b>so many … that</b>. "Too many … that" is wrong.'},
    {t:'02-subject-verb-agreement',q:'Neither Ali nor I _______ going to the party tonight.',o:['am','is','are','were'],a:0,
     e:'With <b>neither … nor</b>, the verb agrees with the nearer subject, "I": I <b>am</b>.'},
    {t:'03-pronouns-quantifiers',q:'"Whose water bottle is this?" &nbsp;"I think it is _______."',o:['her','her&rsquo;s','she','hers'],a:3,
     e:'<b>Hers</b> stands alone (it is hers). There is no apostrophe in "hers".'},
    {t:'04-prepositions-connectors',q:'The cat hid _______ the sofa _______ the thunderstorm.',o:['under … during','under … while','in … while','on … since'],a:0,
     e:'Under the sofa (position). <b>During</b> + a noun (during the storm). "While" needs a verb (while it was raining).'},
    {t:'01-verbs-tenses',q:'Which underlined word is <b>not</b> a verb?<br>"The <u>tired</u> children <u>ate</u> their lunch and <u>slept</u>."',o:['ate','tired','slept','all three are verbs'],a:1,
     e:'Here "tired" describes the children (an adjective). "Ate" and "slept" are the actions (verbs).'},
    {t:'04-prepositions-connectors',q:'I would rather walk _______ take the crowded bus.',o:['then','to','than','from'],a:2,
     e:'"Would rather … <b>than</b>" compares two choices. "Then" is about time.'},
    {h:'Vocabulary MCQ (6 marks)',t:'05-vocabulary',q:'The instructions were so _______ that nobody knew what to do.',o:['clear','simple','helpful','confusing'],a:3,
     e:'"Nobody knew what to do", so the instructions were <b>confusing</b>.'},
    {t:'05-vocabulary',q:'"Ben was <u>all ears</u> when his grandfather told the story." This means Ben _______.',o:['had big ears','was listening carefully','could not hear well','was making noise'],a:1,
     e:'"All ears" is an idiom meaning <b>listening very carefully</b>.'},
    {t:'06-spelling-editing',q:'Which word is spelt correctly?',o:['begining','beggining','beginning','beginnig'],a:2,
     e:'begin + n + ing = <b>beginning</b> (double n).'},
    {t:'05-vocabulary',q:'The firefighters acted _______ and saved everyone in the building.',o:['bravely','brave','bravery','braver'],a:0,
     e:'We need a word that describes <b>how</b> they acted: <b>bravely</b>.'},
    {t:'05-vocabulary',q:'Which word is closest in meaning to "enormous"?',o:['tiny','heavy','gigantic','noisy'],a:2,
     e:'Enormous = very big = <b>gigantic</b>. "Heavy" is about weight, not size.'},
    {t:'05-vocabulary',q:'The baby was _______ by the loud clap of thunder and began to cry.',o:['soothed','comforted','delighted','startled'],a:3,
     e:'A sudden loud noise gives you a fright: <b>startled</b>.'},
    {h:'Visual Text Comprehension (4 marks)',t:'08-visual-text',ctx:POSTER,q:'Study the poster. Which of these is <b>not</b> allowed?',
     o:['Feeding the lories at the Lory Loft','Watching the Parrot Show at 3 p.m.','Feeding the flamingos at the lake','Entering the park at 4.45 p.m.'],a:2,
     e:'Feeding birds is not allowed, <b>except</b> at the Lory Loft. 4.45 p.m. is before the last entry at 5 p.m., so that is allowed.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. The Tan family visits on 20 November: two adults, their grandmother (aged 65) and two children aged 8 and 2. How much do their tickets cost altogether?',
     o:['$115','$95','$85','$105'],a:1,
     e:'Adults 2 × $30 = $60. Grandmother (senior) $15. Child aged 8: $20. Child aged 2: free. $60 + $15 + $20 = <b>$95</b>.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Why can the Tan family <b>not</b> watch the Penguin Feeding on 20 November?',
     o:['It starts too early.','Penguin Cove is closed for repairs.','It is only for adults.','The tickets are sold out.'],a:1,
     e:'Penguin Cove is closed for repairs <b>until 30 November</b>, and 20 November is before that.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Which member of the Tan family should <b>not</b> take the tram ride?',
     o:['the grandmother','the 8-year-old','the father','the 2-year-old'],a:3,
     e:'The tram is not suitable for children <b>below 4</b>. The 2-year-old is too young.'}
  ];

  var B=[
    {h:'Grammar Cloze (4 marks)',n:'21–24',t:'03-pronouns-quantifiers',ctx:'<p>Fill in each blank with the correct word(s) from the box. Write the <b>letter or the word(s)</b>. Use each once only. There are more choices than blanks.</p>'+
      '<div class="wbank"><span>(A) a few</span><span>(B) a little</span><span>(C) few</span><span>(D) little</span><span>(E) many</span><span>(F) much</span><span>(G) any</span><span>(H) some</span></div>'+
      '<div class="passage"><p>We had very <span class="bl">(21)</span> _____ milk left, so Mum sent me to the shop. There were only <span class="bl">(22)</span> _____ cartons on the shelf, just three of them! I bought two, but there was not <span class="bl">(23)</span> _____ time left before dinner, so I rushed home. Only then did I realise that I had not bought <span class="bl">(24)</span> _____ bread.</p></div>',parts:[
      {p:'(21)',q:'',w:[/^\(?d\)?\s*(little)?$|^little$/],model:'(D) little',e:'Milk is uncountable, and "very little" means almost none (that is why she was sent to the shop).'},
      {p:'(22)',q:'',w:[/^\(?a\)?\s*(a few)?$|^a few$/],model:'(A) a few',e:'Cartons can be counted, and "only a few … just three". "Only few" is not correct English.'},
      {p:'(23)',q:'',w:[/^\(?f\)?\s*(much)?$|^much$/],model:'(F) much',e:'Time is uncountable. In a "not" sentence, use <b>much</b>: not much time.'},
      {p:'(24)',q:'',w:[/^\(?g\)?\s*(any)?$|^any$/],model:'(G) any',e:'Use <b>any</b> in a "not" sentence: had not bought any bread.'}]},
    {h:'Comprehension Cloze (4 marks)',n:'25–28',t:'09-comprehension-cloze',ctx:'<p>Fill in each blank with <b>one</b> suitable word. There is no word box.</p>'+
      '<div class="passage"><p>Ants are amazing creatures. Although they are tiny, they can carry objects many times heavier than <span class="bl">(25)</span> _____ own bodies. Ants live in large groups <span class="bl">(26)</span> _____ colonies. Every ant has a job to do. Some ants look <span class="bl">(27)</span> _____ food, while others take care of the eggs. When an ant finds food, it leaves a scent trail <span class="bl">(28)</span> _____ that the other ants can follow it back to the nest.</p></div>',parts:[
      {p:'(25)',q:'',w:['their'],e:'The bodies belong to the ants: <b>their</b> own bodies.'},
      {p:'(26)',q:'',w:['called','named'],e:'Large groups <b>called</b> colonies.'},
      {p:'(27)',q:'',w:['for'],e:'To <b>look for</b> = to search.'},
      {p:'(28)',q:'',w:['so'],e:'"<b>so</b> that" shows the purpose of the trail.'}]},
    {h:'Synthesis (4 marks)',n:29,t:'07-synthesis',ctx:'<p>Rewrite the sentences as <b>one</b> sentence, using the word(s) given. The meaning must stay the same.</p>',parts:[
      {p:'',q:'The film was boring. We stayed until the end. &nbsp;(Use: <b>although</b>)',
       s:['Although the film was boring, we stayed until the end.','We stayed until the end although the film was boring.','We stayed until the end, although the film was boring.'],
       e:'"Although" can start the sentence (add a comma) or join the middle.'}]},
    {n:30,t:'07-synthesis',parts:[
      {p:'',q:'"Where do you live?" the policeman asked the boy. &nbsp;(Begin with: <b>The policeman asked the boy</b> …)',start:'The policeman asked the boy …',
       s:['The policeman asked the boy where he lived.'],
       e:'In a reported question the order changes: where <b>he lived</b> (not "where did he live"). you → he, live → lived. No question mark.'}]},
    {n:31,t:'07-synthesis',parts:[
      {p:'',q:'Sam is taller than Raj. Raj is taller than Ken. &nbsp;(Begin with: <b>Ken is the</b> …)',start:'Ken is the …',
       s:['Ken is the shortest of the three.','Ken is the shortest of the three boys.','Ken is the shortest.','Ken is the shortest among the three.','Ken is the shortest among the three boys.','Ken is the shortest of them all.'],
       e:'Sam is the tallest and Ken is the <b>shortest</b>. Read the starting words carefully.'}]},
    {n:32,t:'07-synthesis',parts:[
      {p:'',q:'The dog barked loudly. This woke up the baby. &nbsp;(Begin with: <b>The dog&rsquo;s</b> …)',start:'The dog&rsquo;s …',
       s:['The dog\'s loud barking woke up the baby.','The dog\'s loud barking woke the baby up.','The dog\'s loud barking woke the baby.'],
       e:'Turn "barked loudly" into a noun phrase: the dog&rsquo;s <b>loud barking</b> woke up the baby.'}]},
    {h:'Comprehension 1 (8 marks)',n:33,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions.</p>'+passage([
      'Aaron was practising football tricks in the living room, even though his mother had told him many times not to play ball indoors. As he tried to balance the ball on his foot, it slipped and struck the tall blue vase on the cabinet. The vase wobbled, toppled over and shattered on the floor.',
      'Aaron froze. The vase had belonged to his great-grandmother and had travelled all the way from China on a ship eighty years ago. Just then, he heard the front door open. His younger sister, Bella, had come home from her ballet class.',
      'When their mother saw the broken pieces that evening, she asked who was responsible. Bella, who had been in the living room for only a minute, looked at Aaron. Aaron stared at the floor. "The cat must have knocked it over," he mumbled at last. Their cat, Mochi, was asleep on the sofa, as usual.',
      'That night, Aaron could not sleep. He kept picturing his mother&rsquo;s sad face as she swept up the pieces. At midnight, he crept to her room and knocked softly. Before he could change his mind, he told her everything.',
      'His mother was quiet for a long time. Then she said, "I am disappointed about the vase, but I am proud that you told me the truth. Things can be repaired. Trust is much harder to mend." The next weekend, Aaron used his savings to buy a tube of special glue, and together they spent hours fitting the pieces back. The vase still has thin cracks, but Aaron says that is what makes it special.']),parts:[
      {p:'(a)',q:'Which words in paragraph 1 show that Aaron knew he should not play football indoors?',k:[{l:'"his mother had told him many times not to play ball indoors"',all:[/many times|not to play/]}],
       model:'"his mother had told him many times not to play ball indoors"'},
      {p:'(b)',q:'Give <b>two</b> reasons why the vase was so precious.',
       k:[{l:'it belonged to his great-grandmother',all:[/great|grandmother|grand-mother/]},{l:'it came all the way from China on a ship 80 years ago',all:[/china|ship|eighty|80|old/]}],
       model:'It had belonged to his great-grandmother, and it had travelled all the way from China on a ship eighty years ago.'},
      {p:'(c)',q:'Why did Bella look at Aaron when their mother asked who was responsible?',
       k:[{l:'she guessed Aaron did it (she was out at ballet; he was the only one home)',all:[/knew|thought|suspect|guess|aaron (did|broke|was)|ballet|only one|not (at )?home|was out|was not there|wasn't there|not in/]}],
       model:'She had been out at her ballet class, so she guessed that Aaron, who was at home, had broken the vase.'},
      {p:'(d)',q:'How do we know that Aaron&rsquo;s excuse about Mochi was probably <b>not</b> true?',k:[{l:'Mochi was asleep on the sofa, as usual (always sleeping)',all:[/asleep|sleep/]}],
       model:'Mochi was asleep on the sofa "as usual", so the cat is always sleeping and was unlikely to have knocked the vase over.'},
      {p:'(e)',q:'Which statement is <b>true</b>?',o:['Aaron confessed as soon as his mother came home.','Aaron confessed in the middle of the night.','Bella broke the vase.','Mother made Aaron pay for a new vase.'],a:1,
       e:'He told her everything "at midnight". He did <b>not</b> confess when she came home; he blamed the cat.'},
      {p:'(f)',q:'What did Mother mean when she said, "Trust is much harder to mend"?',
       k:[{l:'after a lie, it is hard to believe someone again',all:[/believe|trust|lie|lying|liar|truth|honest/]}],
       model:'A broken vase can be glued, but if someone lies, it is very hard to believe them again. Being honest matters more than the vase.'},
      {p:'(g)',q:'Why do you think Aaron says the cracks make the vase special?',
       k:[{l:'they remind him that he told the truth / fixed it together with his mother',all:[/remind|together|mother|truth|honest|lesson|learn/]}],
       model:'The cracks remind him that he told the truth and that he fixed the vase together with his mother.'}]},
    {h:'Comprehension 2 (10 marks)',n:34,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions in full sentences.</p>'+passage([
      'For the school&rsquo;s Charity Day, every Primary 4 class had to run a stall. Siew Ling&rsquo;s class, 4 Orchid, decided to sell handmade bookmarks. Their target was to raise $300 for the children&rsquo;s hospital, which was $100 more than what last year&rsquo;s 4 Orchid had collected.',
      'The class spent two weeks making 250 bookmarks from pressed flowers and recycled card. Farid wanted to sell them at $1 each. "Nobody will pay more than a dollar for a bookmark," he argued. "If we sell all of them at $1, we will not even reach our target," Siew Ling pointed out. In the end, the class agreed on $2 each.',
      'On Charity Day, sales were slow at first. The stall was tucked away in a corner behind the canteen, and most pupils walked straight past it to the popular ice-cream stall. By ten o&rsquo;clock, 4 Orchid had sold only twelve bookmarks. Farid looked at Siew Ling as if to say, "I told you so."',
      'Siew Ling refused to be discouraged. She took a handful of bookmarks and stood beside the ice-cream stall, where the queue was the longest. "Something to read while you wait?" she asked cheerfully, explaining that every bookmark would help a sick child. Before long, Farid joined her, and so did the rest of the class.',
      'By the end of the day, only nine bookmarks were left. The class had raised far more than their target. Their form teacher let them decide what to do with the leftover bookmarks. Without hesitation, the class chose to send them to the children&rsquo;s hospital, together with the money.']),parts:[
      {p:'(a)',q:'How much money did last year&rsquo;s 4 Orchid collect?',w:[/(^|\D)200(?!\d)/],model:'$200',e:'The target of $300 was $100 <b>more</b> than last year: $300 − $100 = $200.'},
      {p:'(b)',q:'Why did Siew Ling <b>not</b> want to sell the bookmarks at $1 each?',
       k:[{l:'250 bookmarks at $1 = $250, less than the $300 target',all:[/target|250|not enough|less|reach|300/]}],
       model:'Even if they sold all 250 bookmarks at $1, they would only collect $250, which is less than their $300 target.'},
      {p:'(c)(i)',q:'True or false? Farid agreed with Siew Ling about the price from the start.',o:['True','False'],a:1,e:'Farid wanted $1; he "argued" with Siew Ling.'},
      {p:'(c)(ii)',q:'Which word in paragraph 2 supports your answer to (c)(i)?',w:[/\bargued?\b/],model:'argued'},
      {p:'(d)',q:'Give <b>two</b> reasons why sales were slow at first.',
       k:[{l:'the stall was tucked away in a corner behind the canteen',all:[/corner|behind|hidden|tucked/]},{l:'most pupils walked past to the ice-cream stall',all:[/ice|walked past|walked straight|went past/]}],
       model:'The stall was tucked away in a corner behind the canteen, and most pupils walked straight past it to the ice-cream stall.'},
      {p:'(e)',q:'Farid looked at Siew Ling "as if to say, &lsquo;I told you so.&rsquo;" What was Farid thinking?',
       k:[{l:'he thought he had been right: the price was too high / nobody would buy',all:[/right|price|expensive|too high|nobody|no one|\$2|dollar|told (her|you)|correct/]}],
       model:'He was thinking that he had been right: $2 was too expensive and nobody wanted to buy the bookmarks.'},
      {p:'(f)',q:'Why did Siew Ling choose to stand beside the ice-cream stall?',k:[{l:'the queue there was the longest (many people waiting)',all:[/queue|line|many people|crowd|waiting|most people|lots of people/]}],
       model:'The queue there was the longest, so many people were waiting and had time to look at the bookmarks.'},
      {p:'(g)',q:'How many bookmarks did 4 Orchid sell altogether?',w:[/(^|\D)241(?!\d)/],model:'241',e:'250 made − 9 left = <b>241</b> sold.'},
      {p:'(h)',q:'Which group of words in paragraph 5 shows that the class decided very quickly?',w:[/without hesitation/],model:'"Without hesitation"'}]}
  ];
