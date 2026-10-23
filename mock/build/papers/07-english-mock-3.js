/*meta
title: English Mock Paper 3
eyebrow: P4 English · Mock exam · Paper 2 · Challenge
h1: English Mock Paper 3 (Challenge)
lead: A harder Paper 2. Read every question carefully: some ask which answer is NOT true, some answers are almost right, and the comprehension questions need you to think beyond the words on the page.
key: p4m-eng3
sub: Paper 2 · Challenge · 1 h 15 min · 50 marks
intro: intro-english.html
quiz_lead: Watch for NOT, EXCEPT and INCORRECT in the questions. Underline them on scrap paper if it helps.
*/
  var CFG={amark:1,minutes:75,base:'../english/'};
  var TOPICS={'01-verbs-tenses':'Verbs and tenses','02-subject-verb-agreement':'Subject–verb agreement','03-pronouns-quantifiers':'Pronouns and quantifiers',
    '04-prepositions-connectors':'Prepositions and connectors','05-vocabulary':'Vocabulary','06-spelling-editing':'Spelling and editing',
    '07-synthesis':'Synthesis','08-visual-text':'Visual text','09-comprehension-cloze':'Comprehension cloze','10-comprehension':'Comprehension'};
  function passage(ps){return '<div class="passage">'+ps.map(function(p,i){return '<p><b>'+(i+1)+'</b> &nbsp;'+p+'</p>';}).join('')+'</div>';}
  var POSTER='<div class="poster"><h4>Sunshine Swimming Club</h4><p><b>Holiday Swim Camp</b></p>'+
    '<p><b>Dates:</b> 1 to 5 December (Monday to Friday) &nbsp;·&nbsp; <b>Time:</b> 9 a.m. to 12 noon</p>'+
    '<p>For children aged <b>7 to 12</b> who can already swim <b>at least 25 m</b>.</p>'+
    '<p><b>Fees:</b> Members $80 &nbsp;·&nbsp; Non-members $100<br>Sign up <b>before 15 November</b> and get <b>$10 off</b>!</p>'+
    '<ul><li>Please bring: swimsuit, goggles, towel and a water bottle.</li><li>Parents are <b>not</b> allowed on the pool deck. A waiting area is provided.</li><li>Lessons will be stopped during lightning. There will be no refund or replacement lesson.</li></ul></div>';

  var A=[
    {h:'Grammar MCQ (10 marks)',t:'02-subject-verb-agreement',q:'Neither the teacher nor the pupils _______ aware that the fire drill had started.',o:['was','were','is','has been'],a:1,
     e:'With <b>neither … nor</b>, the verb agrees with the noun <b>nearer</b> to it: "the pupils" is plural, and the story is in the past, so <b>were</b>.'},
    {t:'02-subject-verb-agreement',q:'One of the boys in my class _______ his bicycle to school every day.',o:['ride','have ridden','are riding','rides'],a:3,
     e:'The subject is "<b>One</b>" (of the boys), so the verb is singular: <b>rides</b>. Do not be fooled by "boys" just before the blank.'},
    {t:'04-prepositions-connectors',q:'I have been waiting at the bus stop _______ half an hour.',o:['for','during','since','from'],a:0,
     e:'"Half an hour" is a length of time, so use <b>for</b>. Use "since" with a starting point (since 3 p.m.).'},
    {t:'03-pronouns-quantifiers',q:'Which sentence is <b>not</b> correct?',o:['There is a few apples on the table.','There are a few apples on the table.','There is a little milk in the jug.','There are many books on the shelf.'],a:0,
     e:'"A few apples" is plural, so it must be "There <b>are</b> a few apples". The question asks for the sentence that is <b>not</b> correct.'},
    {t:'02-subject-verb-agreement',q:'Each of the girls _______ given a medal after the race.',o:['was','are','were','have been'],a:0,
     e:'"<b>Each</b>" is singular, even though "girls" comes after it: each … <b>was</b>.'},
    {t:'03-pronouns-quantifiers',q:'Hardly _______ came to the meeting because of the heavy rain.',o:['anybody','nobody','somebody','everybody'],a:0,
     e:'"Hardly" already means "almost not". So use <b>anybody</b>; "hardly nobody" is a double negative.'},
    {t:'04-prepositions-connectors',q:'Mother asked me _______ I had fed the cat.',o:['that','what','which','whether'],a:3,
     e:'This is a reported yes/no question ("Have you fed the cat?"), so use <b>whether</b> (or "if").'},
    {t:'04-prepositions-connectors',q:'You will not do well in the test _______ you revise your work.',o:['if','unless','because','so'],a:1,
     e:'<b>Unless</b> means "if … not": you will not do well if you do not revise.'},
    {t:'02-subject-verb-agreement',q:'Which word is used <b>wrongly</b> in this sentence?<br>"Each of the pupils have brought their own lunch to the picnic."',o:['Each','own','picnic','have'],a:3,
     e:'"Each" is singular, so it should be "Each of the pupils <b>has</b> brought …".'},
    {t:'01-verbs-tenses',q:'By the time the ambulance arrived, the crowd _______ away.',o:['moves','has moved','had moved','is moving'],a:2,
     e:'The crowd moved away <b>before</b> the ambulance arrived (both in the past). The earlier action takes <b>had moved</b>.'},
    {h:'Vocabulary MCQ (6 marks)',t:'05-vocabulary',q:'The detective examined the footprints _______ so that he would not miss any clues.',o:['carelessly','briefly','closely','rarely'],a:2,
     e:'To avoid missing clues, he looked very carefully: <b>closely</b>.'},
    {t:'05-vocabulary',q:'"Ali was <u>reluctant</u> to share his new toys." The underlined word means _______.',o:['eager','unwilling','proud','afraid'],a:1,
     e:'<b>Reluctant</b> = not wanting to do something: unwilling. "Eager" is the opposite.'},
    {t:'05-vocabulary',q:'The old man was so _______ that he could not walk without his stick.',o:['feeble','fearful','fragile','faithful'],a:0,
     e:'<b>Feeble</b> = physically weak. "Fragile" is for things that break easily, like glass.'},
    {t:'05-vocabulary',q:'Which word does <b>not</b> mean the same as "angry"?',o:['furious','irritated','cross','anxious'],a:3,
     e:'<b>Anxious</b> means worried. Furious, irritated and cross all describe anger.'},
    {t:'05-vocabulary',q:'Despite the long journey, the children were still full of _______.',o:['energetic','energy','energise','energetically'],a:1,
     e:'After "full of" we need a noun: <b>energy</b>.'},
    {t:'05-vocabulary',q:'The supporters _______ loudly when the home team scored the winning goal.',o:['jeered','sneered','mumbled','cheered'],a:3,
     e:'Supporters are happy when their team scores, so they <b>cheered</b>. To jeer is to shout rudely at someone.'},
    {h:'Visual Text Comprehension (4 marks)',t:'08-visual-text',ctx:POSTER,q:'Study the poster. Which of these is <b>not</b> something the children are asked to bring?',
     o:['goggles','a towel','a swimming cap','a water bottle'],a:2,
     e:'The list is: swimsuit, goggles, towel and a water bottle. A swimming cap is not on it.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Mei is <b>not</b> a member. She signs up on 10 November. How much does she pay?',
     o:['$70','$80','$90','$100'],a:2,
     e:'Non-member fee: $100. She signs up before 15 November, so she gets $10 off: <b>$90</b>.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Who can join the camp?',
     o:['Jun, aged 6, who can swim 50 m','Siti, aged 9, who can swim 10 m','Ben, aged 11, who can swim 30 m','Amy, aged 13, who can swim 100 m'],a:2,
     e:'You must be 7 to 12 <b>and</b> able to swim at least 25 m. Only Ben meets both conditions.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Which statement about the camp is <b>not</b> true?',
     o:['The camp lasts five days.','Parents may watch from the pool deck.','Money is not returned if a lesson is stopped because of lightning.','Each session lasts three hours.'],a:1,
     e:'"Parents are <b>not</b> allowed on the pool deck." The other three statements are true (9 a.m. to 12 noon is 3 hours).'}
  ];

  var B=[
    {h:'Grammar Cloze (8 marks)',n:'21–24',t:'04-prepositions-connectors',ctx:'<p>Fill in each blank with the correct word from the box. Write the <b>letter or the word</b>. Use each word <b>once only</b>. There are more words than blanks.</p>'+
      '<div class="wbank"><span>(A) although</span><span>(B) because</span><span>(C) but</span><span>(D) so</span><span>(E) unless</span><span>(F) until</span><span>(G) when</span><span>(H) while</span></div>'+
      '<div class="passage"><p>Priya wanted to join the school choir <span class="bl">(21)</span> _____ she loved singing. <span class="bl">(22)</span> _____ she was shy, she went for the audition anyway. Her hands shook <span class="bl">(23)</span> _____ she was singing, <span class="bl">(24)</span> _____ she did not stop. A week later, she found her name on the list.</p></div>',parts:[
      {p:'(21)',q:'',w:[/^\(?b\)?\s*(because)?$|^because$/],model:'(B) because',e:'Loving singing is the <b>reason</b> she wanted to join.'},
      {p:'(22)',q:'',w:[/^\(?a\)?\s*(although)?$|^although$/],model:'(A) Although',e:'Being shy and still going are opposite ideas: <b>Although</b> she was shy, …'},
      {p:'(23)',q:'',w:[/^\(?[gh]\)?\s*(when|while)?$|^(when|while)$/],model:'(H) while',e:'Her hands shook <b>while</b> (during the time) she was singing. (G) when is also accepted.'},
      {p:'(24)',q:'',w:[/^\(?c\)?\s*(but)?$|^but$/],model:'(C) but',e:'Her hands shook, <b>but</b> she did not stop: a contrast in the same sentence.'}]},
    {n:'25–28',t:'02-subject-verb-agreement',ctx:'<p>Write the correct word from the brackets. Think about what the <b>real subject</b> of each verb is.</p>'+
      '<div class="passage"><p>The number of pupils who <span class="bl">(25)</span> [ walk / walks ] to school <span class="bl">(26)</span> [ has / have ] increased this year. Many of them <span class="bl">(27)</span> [ say / says ] that walking in the morning <span class="bl">(28)</span> [ help / helps ] them to feel awake in class.</p></div>',parts:[
      {p:'(25)',q:'',w:['walk'],e:'"Pupils who walk": the subject of "walk" is "pupils" (plural).'},
      {p:'(26)',q:'',w:['has'],e:'The subject is "<b>The number</b>" (one number), not "pupils": the number … <b>has</b> increased.'},
      {p:'(27)',q:'',w:['say'],e:'"Many of them" is plural: many … <b>say</b>.'},
      {p:'(28)',q:'',w:['helps'],e:'The subject is the activity "<b>walking</b>" (one activity), so use <b>helps</b>.'}]},
    {h:'Synthesis (4 marks)',n:29,t:'07-synthesis',ctx:'<p>Rewrite the sentences as <b>one</b> sentence, using the word(s) given. The meaning must stay the same.</p>',parts:[
      {p:'',q:'The box was very heavy. Ali could not lift it. &nbsp;(Use: <b>too … to</b>)',
       s:['The box was too heavy for Ali to lift.'],
       e:'"Too … to" already means "could not", so drop "not". Also drop "it": the box was too heavy for Ali to lift (<b>not</b> "to lift it").'}]},
    {n:30,t:'07-synthesis',parts:[
      {p:'',q:'"Have you seen my keys?" Dad asked me. &nbsp;(Begin with: <b>Dad asked me</b> …)',start:'Dad asked me …',
       s:['Dad asked me if I had seen his keys.','Dad asked me whether I had seen his keys.'],
       e:'A yes/no question becomes "asked … <b>if/whether</b>". Change you → I, my → his, have seen → <b>had seen</b>. No question mark.'}]},
    {n:31,t:'07-synthesis',parts:[
      {p:'',q:'Mei can play the piano. She can also play the violin. &nbsp;(Use: <b>not only … but also</b>)',
       s:['Mei can play not only the piano but also the violin.','Mei can not only play the piano but also the violin.','Mei can not only play the piano but also play the violin.','Not only can Mei play the piano, but she can also play the violin.','Not only can Mei play the piano but she can also play the violin.'],
       e:'Drop "also" from the second sentence; it is already in "but also".'}]},
    {n:32,t:'07-synthesis',parts:[
      {p:'',q:'The girl won the spelling bee. Her brother is my classmate. &nbsp;(Use: <b>whose</b>)',
       s:['The girl whose brother is my classmate won the spelling bee.'],
       e:'"<b>Whose</b>" replaces "her" and goes right after "The girl": the girl whose brother is my classmate …'}]},
    {h:'Comprehension 1 (8 marks)',n:33,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions.</p>'+passage([
      'Every afternoon, Kai took the shortcut through the park to his grandmother&rsquo;s flat. On Tuesday, he noticed a small brown dog sitting alone under the slide. It had a red collar but no name tag, and it was shivering even though the sun was shining.',
      'Kai knelt down and held out his hand. The dog sniffed it cautiously, then licked his fingers. "You must be someone&rsquo;s pet," Kai murmured. "A stray would have run away." He shared the last of his sandwich with it, and it gobbled the bread up in seconds.',
      'Kai did not want to leave the dog alone, but his grandmother was allergic to animal fur. He searched the noticeboard at the park entrance and, among the advertisements for tuition and yoga classes, found a crumpled poster: LOST — BROWN DOG, ANSWERS TO "BISCUIT". There was a phone number at the bottom, but half of it had been torn off.',
      'Kai called out, "Biscuit!" The dog&rsquo;s ears shot up and its tail wagged wildly. Kai grinned. He could not phone the owner, but he noticed that the poster had been printed by the pet shop across the road. Carrying Biscuit in his arms, he hurried over.',
      'The shopkeeper recognised the dog at once and telephoned its owner, an elderly lady named Mrs Pereira. Ten minutes later, she rushed in with tears streaming down her face. Biscuit had squeezed through a gap in her gate three days earlier. She offered Kai a reward, but he asked only whether he could visit Biscuit sometimes.']),parts:[
      {p:'(a)',q:'Kai thought the dog was a pet and not a stray. Give <b>one</b> reason from paragraph 2 for his thinking.',
       k:[{l:'it did not run away (it sniffed / licked his hand)',all:[/run|lick|sniff|friendly|tame|came|stay/]}],
       model:'The dog did not run away from him; it sniffed and licked his fingers. ("A stray would have run away.")'},
      {p:'(b)(i)',q:'True or false? The dog was hungry.',o:['True','False'],a:0,e:'It "gobbled the bread up in seconds".'},
      {p:'(b)(ii)',q:'Which words in paragraph 2 support your answer to (b)(i)?',k:[{l:'"gobbled the bread up in seconds"',all:[/gobble|seconds/]}],model:'"it gobbled the bread up in seconds"'},
      {p:'(c)',q:'Why could Kai <b>not</b> take the dog to his grandmother&rsquo;s flat?',k:[{l:'his grandmother was allergic to animal fur',all:[/allerg/]}],
       model:'His grandmother was allergic to animal fur.'},
      {p:'(d)',q:'Which <b>two</b> statements are <b>not</b> true?<br>A: Kai found the poster at the pet shop. &nbsp;B: The phone number on the poster was incomplete. &nbsp;C: The dog responded to the name "Biscuit". &nbsp;D: The dog had been lost for a week.',
       o:['A and B','A and D','B and C','C and D'],a:1,
       e:'A is not true: the poster was on the park noticeboard (only <b>printed</b> by the pet shop). D is not true: Biscuit was lost <b>three days</b> earlier. B and C are true.'},
      {p:'(e)',q:'In paragraph 3, what does "it" in "half of <b>it</b> had been torn off" refer to?',w:[/phone ?number|telephone number|\bnumber\b/],model:'the phone number'},
      {p:'(f)',q:'Kai could not phone the owner. Explain how he still managed to return Biscuit to her.',
       k:[{l:'the poster was printed by the pet shop, so he went there',all:[/shop/]},{l:'the shopkeeper phoned the owner / recognised the dog',all:[/phone|call|recogni[sz]|knew/]}],
       model:'He noticed that the poster had been printed by the pet shop across the road, so he took Biscuit there. The shopkeeper recognised the dog and phoned the owner.'}]},
    {h:'Comprehension 2 (10 marks)',n:34,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions in full sentences.</p>'+passage([
      'Wei had been looking forward to the Science Fair for months. This year, however, Mr Lim had paired him with Darius, the quietest boy in the class. Wei groaned inwardly. Darius hardly ever spoke during lessons, and Wei was sure that he would have to do all the work himself.',
      'At their first meeting, Wei announced that they would build a volcano. "Everyone loves volcanoes," he said. Darius stared at his shoes for a long moment. Then he pulled a battered notebook out of his bag and pushed it across the table. Every page was filled with neat drawings of a water filter made from sand, charcoal and stones.',
      '"We could try this," Darius said softly. "In my grandfather&rsquo;s village, people have to boil river water before they can drink it." Wei flipped through the pages. He had to admit that the idea was far more interesting than a volcano, though he was not ready to say so aloud.',
      'For the next three weeks, the boys worked on the filter every recess. The first two attempts were disasters: the water came out even muddier than before. Wei wanted to give up and go back to the volcano, but Darius patiently rearranged the layers again and again, making notes after every test. On the third attempt, clear water trickled into the jar. Wei let out a whoop so loud that the librarian frowned at them.',
      'On the day of the fair, Wei did most of the talking while Darius demonstrated the filter. When the judges asked how they had solved the muddy-water problem, Wei paused, then turned to his partner. "Darius figured that out," he said. "I nearly made us quit." The boys did not win first prize, but they received a special award for creativity. As they packed up, Wei asked Darius if they could be partners again next year.']),parts:[
      {p:'(a)',q:'Why was Wei unhappy when he heard who his partner was? Give <b>two</b> details.',
       k:[{l:'Darius was very quiet / hardly ever spoke',all:[/quiet|hardly|(not|n't|never)[^.]*(speak|spoke|talk)/]},{l:'Wei thought he would have to do all the work himself',all:[/work/]}],
       model:'Darius was the quietest boy and hardly ever spoke, so Wei was sure he would have to do all the work himself.'},
      {p:'(b)',q:'"Wei groaned <b>inwardly</b>." What does this tell us about how Wei showed his feelings?',
       k:[{l:'he kept it to himself / did not let anyone hear',all:[/(not|n't|never)[^.]*(show|aloud|out loud|hear|say|let)|himself|inside|silent|quietly|in his (heart|mind|head)/]}],
       model:'He did not show his unhappiness or make a sound; he kept the feeling inside himself.'},
      {p:'(c)',q:'Why did Darius want to make a water filter?',k:[{l:'people in his grandfather&rsquo;s village had to boil river water before drinking it',all:[/grand|village|boil|clean|dirty|river/]}],
       model:'People in his grandfather&rsquo;s village have to boil river water before they can drink it, so a filter could help them.'},
      {p:'(d)',q:'Which group of words in paragraph 3 shows that Wei did not want to admit that Darius&rsquo;s idea was better?',w:[/not ready to say so/],model:'"he was not ready to say so aloud"'},
      {p:'(e)',q:'Put these events in the order in which they happened. Type the letters, e.g. B A D C.<br>A: Clear water trickled into the jar. &nbsp;B: The water came out muddier than before. &nbsp;C: Darius showed Wei his notebook. &nbsp;D: Wei suggested building a volcano.',
       w:[/^d\W*c\W*b\W*a$/],model:'D C B A'},
      {p:'(f)',q:'Darius "patiently rearranged the layers again and again". What does this tell us about Darius?',
       k:[{l:'he was patient / hardworking / did not give up',all:[/patient|hard ?-?working|determined|persever|never gave up|did not give up|didn't give up|not give up|careful|keep trying|kept trying/]}],
       model:'He was patient and determined: he did not give up even when the filter failed.'},
      {p:'(g)',q:'Why did the librarian frown at the boys?',k:[{l:'Wei whooped very loudly (in the library)',all:[/loud|noise|noisy|whoop|shout|scream/]}],
       model:'Wei let out a very loud whoop, which was too noisy for the library.'},
      {p:'(h)',q:'How did Wei&rsquo;s feelings about Darius change from the beginning to the end of the story? Give evidence from the passage.',
       k:[{l:'at first: unhappy / did not want him as a partner',all:[/disappoint|unhappy|upset|annoyed|not happy|did not want|didn't want|groan|sad|reluctant|did not like|didn't like/]},{l:'at the end: respected him / wanted him as a partner again',all:[/again|respect|admire|proud|credit|thank|grateful|friend|appreciat|figured/]}],
       model:'At first Wei was unhappy to be paired with Darius and thought he would be useless. By the end he respected him: he told the judges that Darius had solved the problem, and he asked to be partners again next year.'}]}
  ];
