/*meta
title: English Mock Paper 4
eyebrow: P4 English · Mock exam · Paper 2 · Challenge
h1: English Mock Paper 4 (Challenge)
lead: A harder Paper 2. Some questions ask for the answer that is NOT true or that CANNOT be done, and some choices look almost right. Read the whole question, and check the passage or poster before you choose.
key: p4m-eng4
sub: Paper 2 · Challenge · 1 h 15 min · 50 marks
intro: intro-english.html
quiz_lead: Watch for NOT, CANNOT and EXCEPT in the questions. For the poster, check times, ages and prices carefully.
*/
  var CFG={amark:1,minutes:75,base:'../english/'};
  var TOPICS={'01-verbs-tenses':'Verbs and tenses','02-subject-verb-agreement':'Subject–verb agreement','03-pronouns-quantifiers':'Pronouns and quantifiers',
    '04-prepositions-connectors':'Prepositions and connectors','05-vocabulary':'Vocabulary','06-spelling-editing':'Spelling and editing',
    '07-synthesis':'Synthesis','08-visual-text':'Visual text','09-comprehension-cloze':'Comprehension cloze','10-comprehension':'Comprehension'};
  function passage(ps){return '<div class="passage">'+ps.map(function(p,i){return '<p><b>'+(i+1)+'</b> &nbsp;'+p+'</p>';}).join('')+'</div>';}
  var POSTER='<div class="poster"><h4>Kopi Corner</h4><p><b>Weekend Brunch Menu</b> (Saturdays and Sundays)</p>'+
    '<p>Brunch is served from <b>8 a.m. to 11.30 a.m.</b> only.</p>'+
    '<ul><li><b>Set A</b> &nbsp;Pancakes + drink &nbsp;$8.50</li><li><b>Set B</b> &nbsp;Eggs, toast + drink &nbsp;$10.00</li><li><b>Kids&rsquo; Set</b> &nbsp;Mini pancakes + juice &nbsp;$5.00 &nbsp;(for children <b>10 years old and below</b>)</li></ul>'+
    '<p>All sets come with coffee, tea or juice. Change your drink to bubble tea for <b>$1 more</b>.</p>'+
    '<p><b>Sunday Special:</b> one <b>free</b> Kids&rsquo; Set for every <b>two</b> Set B ordered.</p><p class="hint">Closed on public holidays.</p></div>';

  var A=[
    {h:'Grammar MCQ (10 marks)',t:'02-subject-verb-agreement',q:'The pair of scissors _______ on the table a moment ago.',o:['was','were','are','is'],a:0,
     e:'The subject is "<b>the pair</b>" (one pair), and "a moment ago" is in the past: <b>was</b>.'},
    {t:'02-subject-verb-agreement',q:'Neither of the twins _______ to go to the dentist.',o:['want','wants','are wanting','were wanting'],a:1,
     e:'"<b>Neither of</b>" means "not one of them", so it is singular: neither … <b>wants</b>.'},
    {t:'01-verbs-tenses',q:'By the time we reached the hall, the concert _______.',o:['starts','has started','is starting','had started'],a:3,
     e:'The concert started <b>before</b> we reached the hall. For the earlier of two past actions, use <b>had started</b>.'},
    {t:'02-subject-verb-agreement',q:'There _______ some bread and two eggs in the fridge.',o:['is','are','were','have'],a:0,
     e:'After "There", the verb agrees with the <b>first</b> noun. "Some bread" is uncountable (singular), so use <b>is</b>.'},
    {t:'03-pronouns-quantifiers',q:'Which sentence is correct?',o:['Ali and I went to the park.','Ali and me went to the park.','Me and Ali went to the park.','I and Ali went to the park.'],a:0,
     e:'Before the verb, use <b>I</b>, and put yourself <b>last</b>: Ali and I went …'},
    {t:'03-pronouns-quantifiers',q:'The headmaster gave the prizes to Sam and _______.',o:['I','myself','me','mine'],a:2,
     e:'After "to", use <b>me</b>. Test it: "gave the prizes to me", not "to I".'},
    {t:'03-pronouns-quantifiers',q:'We have _______ time left, so we must hurry or we will be late.',o:['few','a few','little','many'],a:2,
     e:'Time is uncountable, so it is "little" or "a little". <b>Little</b> (without "a") means "almost none", which is why we must hurry.'},
    {t:'04-prepositions-connectors',q:'_______ you leave now, you will miss the last bus.',o:['If','Unless','Because','Although'],a:1,
     e:'<b>Unless</b> you leave now = if you do <b>not</b> leave now, you will miss the bus.'},
    {t:'04-prepositions-connectors',q:'Lina is good _______ drawing but afraid _______ spiders.',o:['in … of','on … from','at … with','at … of'],a:3,
     e:'We say good <b>at</b> something and afraid <b>of</b> something.'},
    {t:'02-subject-verb-agreement',q:'Which word should replace the underlined word?<br>"The children <u>was</u> playing in the rain when the thunder started."',o:['is','were','are','be'],a:1,
     e:'"Children" is plural and the story is in the past: the children <b>were</b> playing.'},
    {h:'Vocabulary MCQ (6 marks)',t:'05-vocabulary',q:'Jin was so _______ that he finished the worksheet before anyone else, but it was full of careless mistakes.',o:['hasty','careful','patient','lazy'],a:0,
     e:'<b>Hasty</b> = too quick and not careful. The clue is "full of careless mistakes".'},
    {t:'05-vocabulary',q:'"After Mum cleaned it, the room was <u>spotless</u>." This means the room was _______.',o:['full of spots','very dark','very clean','untidy'],a:2,
     e:'"Spotless" = with no spots at all: <b>very clean</b>. Do not be tricked by the word "spot".'},
    {t:'05-vocabulary',q:'Which word does <b>not</b> describe a sound?',o:['rustle','clatter','screech','glimmer'],a:3,
     e:'<b>Glimmer</b> describes a faint light. Rustle, clatter and screech are all sounds.'},
    {t:'05-vocabulary',q:'The coach praised the players for their excellent _______ during the match.',o:['teammate','teamwork','teamed','teams'],a:1,
     e:'After "their excellent" we need a noun about how they played together: <b>teamwork</b>.'},
    {t:'05-vocabulary',q:'Mrs Rao was _______ when her son came home three hours late without calling her.',o:['delighted','amused','furious','grateful'],a:2,
     e:'Coming home very late without calling would make a mother very angry: <b>furious</b>.'},
    {t:'05-vocabulary',q:'Which word is the <b>opposite</b> of "generous"?',o:['kind','mean','rich','honest'],a:1,
     e:'Generous = happy to give. The opposite is <b>mean</b> (not willing to share).'},
    {h:'Visual Text Comprehension (4 marks)',t:'08-visual-text',ctx:POSTER,q:'Study the poster. At 12 noon on a Saturday, which of these can you order?',
     o:['Set A only','Set B only','the Kids&rsquo; Set only','none of the sets'],a:3,
     e:'Brunch is served from 8 a.m. to <b>11.30 a.m. only</b>. At 12 noon, none of the sets can be ordered.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. On a Sunday, Mr and Mrs Lim each order Set B, and their son (aged 8) has a Kids&rsquo; Set. How much do they pay altogether?',
     o:['$25','$30','$15','$20'],a:3,
     e:'2 × Set B = $20. The Sunday Special gives one free Kids&rsquo; Set for every two Set B, so the Kids&rsquo; Set is free. Total <b>$20</b>.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Mei, who is 11, wants to order the Kids&rsquo; Set. Why is she <b>not</b> allowed to?',
     o:['It is sold out.','It is only sold on Sundays.','She is older than 10.','She must order Set B first.'],a:2,
     e:'The Kids&rsquo; Set is for children <b>10 years old and below</b>. Mei is 11.'},
    {t:'08-visual-text',q:'Look at the poster in Q17. Ali orders Set A and changes his drink to bubble tea. How much does he pay?',
     o:['$9.50','$8.50','$10.50','$11.00'],a:0,
     e:'Set A $8.50 + $1 for bubble tea = <b>$9.50</b>.'}
  ];

  var B=[
    {h:'Grammar Cloze (8 marks)',n:'21–24',t:'03-pronouns-quantifiers',ctx:'<p>Fill in each blank with the correct word from the box. Write the <b>letter or the word</b>. Use each word <b>once only</b>. There are more words than blanks.</p>'+
      '<div class="wbank"><span>(A) himself</span><span>(B) his</span><span>(C) whose</span><span>(D) who</span><span>(E) which</span><span>(F) where</span><span>(G) them</span><span>(H) him</span></div>'+
      '<div class="passage"><p>My uncle, <span class="bl">(21)</span> _____ is a chef, taught <span class="bl">(22)</span> _____ to cook when he was only ten years old. The restaurant <span class="bl">(23)</span> _____ he owns now serves Peranakan food. Last month, a girl <span class="bl">(24)</span> _____ mother writes for a newspaper wrote a story about it.</p></div>',parts:[
      {p:'(21)',q:'',w:[/^\(?d\)?\s*(who)?$|^who$/],model:'(D) who',e:'<b>Who</b> describes a person (my uncle).'},
      {p:'(22)',q:'',w:[/^\(?a\)?\s*(himself)?$|^himself$/],model:'(A) himself',e:'He taught <b>himself</b>: he learnt on his own. "Him" would mean someone else.'},
      {p:'(23)',q:'',w:[/^\(?e\)?\s*(which)?$|^which$/],model:'(E) which',e:'<b>Which</b> describes a thing (the restaurant). "Where" does not fit, because "he owns where" makes no sense.'},
      {p:'(24)',q:'',w:[/^\(?c\)?\s*(whose)?$|^whose$/],model:'(C) whose',e:'The mother belongs to the girl: a girl <b>whose</b> mother …'}]},
    {n:'25–28',t:'01-verbs-tenses',ctx:'<p>Write the correct word(s) from the brackets. Look for time clues.</p>'+
      '<div class="passage"><p>Since last year, Siti <span class="bl">(25)</span> [ learns / learnt / has learnt ] to play the guitar. Yesterday, she <span class="bl">(26)</span> [ plays / played / has played ] in a concert for the first time. While she <span class="bl">(27)</span> [ performs / performed / was performing ], one of the strings suddenly <span class="bl">(28)</span> [ breaks / broke / broken ].</p></div>',parts:[
      {p:'(25)',q:'',w:['has learnt','has learned'],e:'"<b>Since</b> last year" (up to now) needs <b>has learnt</b>.'},
      {p:'(26)',q:'',w:['played'],e:'"Yesterday" = simple past: <b>played</b>.'},
      {p:'(27)',q:'',w:['was performing'],e:'A longer action going on (<b>was performing</b>) when a short action happened (the string broke).'},
      {p:'(28)',q:'',w:['broke'],e:'The short, sudden action in the past: <b>broke</b>. "Broken" needs has/had/was.'}]},
    {h:'Synthesis (4 marks)',n:29,t:'07-synthesis',ctx:'<p>Rewrite the sentences as <b>one</b> sentence, using the word(s) given. The meaning must stay the same.</p>',parts:[
      {p:'',q:'Tom ran very fast. He still missed the bus. &nbsp;(Begin with: <b>Despite</b> …)',start:'Despite …',
       s:['Despite running very fast, Tom missed the bus.','Despite running very fast, Tom still missed the bus.','Despite the fact that Tom ran very fast, he missed the bus.','Despite the fact that Tom ran very fast, he still missed the bus.','Despite running so fast, Tom still missed the bus.'],
       e:'After "Despite", use a <b>-ing</b> word (despite running) or "despite the fact that". Never "despite he ran".'}]},
    {n:30,t:'07-synthesis',parts:[
      {p:'',q:'"I am tired of waiting," said Mei. &nbsp;(Begin with: <b>Mei said that</b> …)',start:'Mei said that …',
       s:['Mei said that she was tired of waiting.'],
       e:'Reported speech: I → <b>she</b>, am → <b>was</b>. No speech marks.'}]},
    {n:31,t:'07-synthesis',parts:[
      {p:'',q:'Jun is 10 years old. Kai is also 10 years old. &nbsp;(Use: <b>as … as</b>)',
       s:['Jun is as old as Kai.','Kai is as old as Jun.'],
       e:'Same age = <b>as old as</b>.'}]},
    {n:32,t:'07-synthesis',parts:[
      {p:'',q:'You must wear a helmet. Otherwise you cannot ride the bicycle. &nbsp;(Begin with: <b>Unless</b> …)',start:'Unless …',
       s:['Unless you wear a helmet, you cannot ride the bicycle.','Unless you wear a helmet, you cannot ride a bicycle.'],
       e:'"Unless" means "if … not", so write "Unless you wear", <b>not</b> "Unless you do not wear".'}]},
    {h:'Comprehension 1 (8 marks)',n:33,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions.</p>'+passage([
      'Hana and Lisa had been best friends since Primary One, and they had always run in the same relay team. This year, however, Lisa had sprained her ankle a week before Sports Day. She could only sit in the stands and watch, her crutches leaning against the seat beside her.',
      'Hana&rsquo;s team was trailing in third place when the baton was passed to her. She sprinted the final hundred metres faster than she had ever run, overtaking two runners just before the finishing line. The crowd erupted. Hana&rsquo;s team had won the gold medal.',
      'Instead of celebrating with her teammates, Hana climbed into the stands and hung her medal around Lisa&rsquo;s neck. "You trained with us every day until you got hurt," she said. "This belongs to you as much as it belongs to me." Lisa did not say a word. She simply hugged Hana tightly.',
      'Later, Mr Raj, the PE teacher, noticed that Hana&rsquo;s neck was bare in the team photograph. When he heard what had happened, he smiled and went to the office. He returned with a spare medal and a certificate with Lisa&rsquo;s name on it, which he presented to her in front of the whole school.']),parts:[
      {p:'(a)',q:'Why could Lisa not run in the relay this year?',k:[{l:'she had sprained her ankle',all:[/ankle|sprain|hurt|injur|crutch/]}],model:'She had sprained her ankle a week before Sports Day.'},
      {p:'(b)',q:'Which <b>one</b> word in paragraph 2 shows that the crowd suddenly became very noisy?',w:[/\berupted?\b/],model:'erupted'},
      {p:'(c)(i)',q:'True or false? Hana&rsquo;s team was in the lead when she received the baton.',o:['True','False'],a:1,e:'They were "trailing in <b>third</b> place".'},
      {p:'(c)(ii)',q:'Which words in paragraph 2 support your answer to (c)(i)?',k:[{l:'"trailing in third place"',all:[/third|trailing/]}],model:'"trailing in third place"'},
      {p:'(d)',q:'Why did Hana feel that the medal also belonged to Lisa?',k:[{l:'Lisa had trained with the team every day until she got hurt',all:[/train|practi[sc]/]}],
       model:'Lisa had trained with the team every day until she got hurt.'},
      {p:'(e)',q:'"Lisa did not say a word." Why do you think she did not say anything?',
       k:[{l:'she was too touched / moved / happy to speak',all:[/touch|moved|emotion|happy|grateful|speechless|surprise|cry|tears|overwhelm|thankful|shock/]}],
       model:'She was so touched and grateful that she could not find any words; she hugged Hana instead.'},
      {p:'(f)',q:'Why was Hana&rsquo;s neck "bare" in the team photograph?',k:[{l:'she had given her medal to Lisa',all:[/gave|given|lisa|giving/]}],model:'She had given her medal to Lisa, so she was not wearing one.'},
      {p:'(g)',q:'Which statement is <b>not</b> true?',o:['Mr Raj gave Lisa a spare medal.','Lisa received a certificate with her name on it.','Hana received a second medal from Mr Raj.','Lisa received her medal in front of the whole school.'],a:2,
       e:'Mr Raj gave the spare medal to <b>Lisa</b>, not to Hana. The passage does not say Hana got a second medal.'}]},
    {h:'Comprehension 2 (10 marks)',n:34,t:'10-comprehension',ctx:'<p>Read the passage, then answer the questions in full sentences.</p>'+passage([
      'When Zara&rsquo;s family moved to Australia for her father&rsquo;s new job, the hardest goodbye was to Ah Ma. Ah Ma had looked after Zara every afternoon since she was a baby. "Don&rsquo;t worry, we&rsquo;ll video call every day," Zara promised, though she secretly wondered how. Ah Ma did not even know how to send a text message.',
      'During the last week before the move, Zara gave Ah Ma lessons every evening. At first, it was a disaster. Ah Ma pressed the wrong buttons, hung up on Zara by accident and once took fifteen photographs of her own thumb. "This phone is too clever for an old lady," she grumbled, pushing it away.',
      'Zara refused to give up. She drew a simple chart with large pictures, a green phone for "answer" and a red phone for "end", and stuck it to the back of Ah Ma&rsquo;s phone. She made Ah Ma practise answering calls in the kitchen while Zara called her from the bedroom. By Saturday, Ah Ma could answer a call without any help.',
      'Their first call from Australia came at seven in the morning. Ah Ma&rsquo;s face appeared on the screen, upside down. Zara laughed so hard that tears ran down her cheeks, and Ah Ma, realising her mistake, laughed too. She turned the phone the right way up and proudly showed Zara the pineapple tarts she had just baked.',
      'Now, every Sunday, Ah Ma teaches Zara a family recipe over video call. Zara props her mother&rsquo;s tablet against the flour tin and follows each step carefully. "You taught me how to use the phone," Ah Ma likes to say, "so now I teach you how to use your hands."']),parts:[
      {p:'(a)',q:'Why was saying goodbye to Ah Ma the hardest for Zara?',k:[{l:'Ah Ma had looked after her every afternoon since she was a baby',all:[/look(ed)? after|take care|took care|baby|every afternoon|close/]}],
       model:'Ah Ma had looked after her every afternoon since she was a baby, so they were very close.'},
      {p:'(b)',q:'"…though she secretly wondered how." Why did Zara wonder how they would video call?',
       k:[{l:'Ah Ma did not know how to use a phone / send a text message',all:[/text|(not|n't)[^.]*(know|use)/]}],
       model:'Ah Ma did not even know how to send a text message, so Zara was not sure she could learn to video call.'},
      {p:'(c)',q:'Give <b>two</b> things that showed the first lessons were "a disaster".',
       k:[{l:'one mistake (wrong buttons / hung up / photos of her thumb)',all:[/button|hung up|hang up|hangs up|thumb|photo/]},
          {l:'a second, different mistake',all:[/button[\s\S]*(hung|hang|thumb|photo)|(hung|hang)[\s\S]*(button|thumb|photo)|(thumb|photo)[\s\S]*(button|hung|hang)/]}],
       model:'She pressed the wrong buttons and hung up on Zara by accident. (She also took fifteen photographs of her own thumb.)'},
      {p:'(d)',q:'"This phone is too clever for an old lady." How did Ah Ma feel when she said this?',
       k:[{l:'frustrated / felt it was too difficult for her',all:[/frustrat|difficult|hard|complicated|give up|could not|couldn't|cannot|upset|annoyed|confus|discourag|fed up/]}],
       model:'She felt frustrated and thought that the phone was too difficult for her to learn.'},
      {p:'(e)',q:'Name <b>two</b> things Zara did to help Ah Ma learn.',
       k:[{l:'drew a chart with large pictures',all:[/chart|picture|drew|drawing/]},{l:'made her practise answering calls (kitchen / bedroom)',all:[/practi[sc]|kitchen|bedroom/]}],
       model:'She drew a chart with large pictures and stuck it on the phone, and she made Ah Ma practise answering calls in the kitchen.'},
      {p:'(f)',q:'Why did Zara laugh so hard during their first call?',k:[{l:'Ah Ma&rsquo;s face was upside down',all:[/upside/]}],model:'Ah Ma&rsquo;s face appeared upside down on the screen.'},
      {p:'(g)',q:'What does Ah Ma mean when she says, "so now I teach you how to use your hands"?',
       k:[{l:'now it is her turn to teach Zara (cooking / baking)',all:[/bak|cook|recipe|turn|in return|back/]}],
       model:'Zara taught her to use the phone, so now it is Ah Ma&rsquo;s turn to teach Zara something in return: cooking and baking family recipes.'},
      {p:'(h)',q:'Which word in paragraph 4 means "suddenly understanding"?',w:[/\breali[sz]ing\b/],model:'realising'}]}
  ];
