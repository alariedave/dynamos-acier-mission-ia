// ============================================================
//   LES DYNAMOS D'ACIER — Mission IA
//   Jeu d'aventure hockey + IA pour Noah (9 ans)
// ============================================================

// ---- ÉQUIPES ADVERSES ----
const equipes = [
  { nom: "Les Renards",   ico: "🦊", diff: "Facile",   theme: "C'est quoi l'IA?" },
  { nom: "Les Trous",     ico: "🕳️", diff: "Facile",   theme: "Comment l'IA apprend" },
  { nom: "Les Ours",      ico: "🐻", diff: "Facile",   theme: "Reconnaître l'IA" },
  { nom: "Les Aigles",    ico: "🦅", diff: "Moyen",    theme: "Écrire un bon prompt" },
  { nom: "Les Hackers",   ico: "🎭", diff: "Moyen",    theme: "L'IA peut se tromper" },
  { nom: "Les Requins",   ico: "🦈", diff: "Moyen",    theme: "L'IA et les images" },
  { nom: "Les Panthères", ico: "🐆", diff: "Difficile", theme: "Les limites de l'IA" },
  { nom: "Les Éclairs",   ico: "⚡", diff: "Difficile", theme: "Vérifier les infos" },
  { nom: "Les Dragons",   ico: "🐉", diff: "Très dur",  theme: "Sécurité et vie privée" },
  { nom: "Les Champions", ico: "👑", diff: "FINALE",   theme: "Maître de l'IA" },
  { nom: "LES SECRETS",   ico: "🎭", diff: "BOSS SECRET", theme: "Boss : NOAH 2.0", secret: true }
];

// ---- COACH SYLVAIN — discours d'avant-match ----
const discoursCoach = [
  "OK Noah, premier match du tournoi! Les Renards sont rapides, mais on peut les battre. Souviens-toi : pour marquer, il faut bien comprendre c'est quoi une IA. ARIA va t'expliquer chaque coup. GO LES DYNAMOS!",
  "Beau travail au premier match! Les Trous sont sournois — ils essaient de te piéger. Concentre-toi sur comment l'IA apprend. T'es capable!",
  "Les Ours sont puissants mais lents. Tu dois reconnaître quand c'est une IA qui te parle vs un humain. Reste vigilant!",
  "Les Aigles ont l'œil aiguisé! Pour gagner, il faut savoir parler à l'IA — écrire des bons prompts. Plus tu es clair, mieux elle répond.",
  "Attention aux Hackers, ils peuvent te tromper! L'IA aussi peut faire des erreurs (des hallucinations). Apprends à les repérer.",
  "Les Requins veulent te mordre! L'IA peut maintenant créer des images et même des vidéos fausses. Faut savoir les reconnaître.",
  "Les Panthères sont rusées... Tu connais déjà beaucoup l'IA. Maintenant, sache ce qu'elle NE peut PAS faire. Ça aussi, c'est important!",
  "Les Éclairs sont rapides! Avant de croire ce que dit l'IA, il faut vérifier. Toujours. Allez, on les surprend!",
  "Les Dragons sont MENAÇANTS! Ne donne JAMAIS tes infos personnelles à une IA. Tu vas leur montrer comment être prudent!",
  "🏆 LA GRANDE FINALE! Les Champions sont les meilleurs au monde. Pour les battre, tu dois TOUT savoir sur l'IA. T'es prêt Noah, je crois en toi!",
  "🎭 NOAH... j'ai des nouvelles MAJEURES. Un message secret est apparu après ta victoire. UNE équipe mystérieuse — LES SECRETS — te défie. Et leur capitaine... c'est NOAH 2.0, ton clone créé par une IA maléfique! Il connaît tous tes mouvements. 5 questions, pas 3. C'est le VRAI dernier combat. Es-tu prêt?"
];

// ---- QUESTIONS PAR MATCH ----
// Format : { robot, question, choix, bonne (index), explication, equipier (optionnel) }
const questionsParMatch = [
  // ============ MATCH 1 — Les Renards — C'est quoi l'IA ============
  [
    {
      robot: "Salut Noah! Je suis ARIA. Premier coup d'envoi! 🏒",
      question: "C'est quoi l'intelligence artificielle (IA)?",
      choix: [
        "Un robot avec des vraies émotions comme toi",
        "Un programme qui peut apprendre et résoudre des problèmes",
        "Une encyclopédie qui sait absolument toutes les réponses",
        "Une machine qui devine au hasard"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA est un programme qui apprend à partir de millions d'exemples. Pas de vraies émotions!",
      nok: "Aïe... Une IA, c'est un programme informatique qui apprend. Pas un humain ni un robot avec des émotions!"
    },
    {
      robot: "Bob fait la passe à Abigaël... ELLE TIRE!",
      question: "Quel exemple est une IA?",
      choix: [
        "Une calculatrice",
        "ChatGPT ou Siri",
        "Une horloge",
        "Un livre"
      ],
      bonne: 1,
      ok: "BUT! 🚨 ChatGPT et Siri sont des IA — elles comprennent tes questions et génèrent des réponses!",
      nok: "Pas tout à fait. ChatGPT et Siri sont des IA. Une calculatrice fait juste des calculs fixes."
    },
    {
      robot: "Dernière chance pour gagner!",
      question: "Une IA peut-elle penser comme un humain?",
      choix: [
        "Oui, exactement comme nous",
        "Non, elle suit des statistiques sans vraie pensée",
        "Un peu comme nous, mais en plus rapide",
        "Oui, certaines IA très avancées le peuvent"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA prédit la meilleure réponse selon ses données. Impressionnant, mais pas comme un humain!",
      nok: "L'IA ne pense pas vraiment. Elle calcule la meilleure réponse statistique."
    }
  ],
  // ============ MATCH 2 — Les Trous — Comment l'IA apprend ============
  [
    {
      robot: "Match 2! Les Trous tentent de te piéger...",
      question: "Comment une IA apprend-elle?",
      choix: [
        "Elle va à l'école",
        "Elle analyse des millions d'exemples (textes, images...)",
        "Un humain lui parle 5 minutes",
        "Elle naît déjà intelligente"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Pour reconnaître un chat, l'IA regarde des millions de photos de chats!",
      nok: "Non — l'IA apprend en analysant énormément de données. Pas comme un humain!"
    },
    {
      robot: "Zoé bloque la rondelle... passe à Noah!",
      question: "Si on entraîne une IA avec seulement des photos de chiens BRUNS, que se passe-t-il?",
      choix: [
        "Elle reconnaît tous les chiens parfaitement",
        "Elle pourrait avoir du mal avec un chien blanc ou noir",
        "Elle devient super intelligente",
        "Elle apprend à parler"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA n'apprend que ce qu'on lui montre. Données limitées = IA limitée!",
      nok: "L'IA apprend juste ce qu'on lui montre. Si on ne lui montre que des chiens bruns, elle peut être confuse avec d'autres couleurs."
    },
    {
      robot: "Il faut ce dernier but!",
      question: "Pourquoi l'IA fait parfois des erreurs?",
      choix: [
        "Parce que les humains sont meilleurs qu'elle",
        "Ses données d'apprentissage sont incomplètes ou biaisées",
        "Parce qu'elle est connectée à Internet",
        "Parce que l'ordinateur est trop vieux"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Si on lui apprend des choses incomplètes, elle se trompe!",
      nok: "Une IA se trompe quand ses données d'apprentissage sont incomplètes ou biaisées."
    }
  ],
  // ============ MATCH 3 — Les Ours — Reconnaître l'IA ============
  [
    {
      robot: "Match 3! Les Ours sont gros, mais on est plus malins!",
      question: "Comment savoir si c'est une IA qui t'écrit (pas un humain)?",
      choix: [
        "L'IA répond très vite, parle un peu trop poliment et écrit beaucoup",
        "L'IA fait toujours des fautes",
        "L'IA dit son nom au début",
        "Impossible à savoir"
      ],
      bonne: 0,
      ok: "BUT! 🚨 Réponses ultra-rapides + ton trop parfait = souvent une IA!",
      nok: "Une IA répond vite, écrit beaucoup, et est souvent TRÈS polie. C'est un indice!"
    },
    {
      robot: "ARIA récupère la rondelle, passe à Bob...",
      question: "Quand tu parles à un service en ligne (chat), c'est probablement...",
      choix: [
        "Toujours un humain",
        "Toujours une IA",
        "Souvent une IA pour les questions simples, un humain pour les compliquées",
        "Un robot qui marche dans les bureaux"
      ],
      bonne: 2,
      ok: "BUT! 🚨 Beaucoup d'entreprises utilisent des IA pour les questions simples!",
      nok: "Les chats en ligne sont souvent des IA pour les questions simples, et des humains pour les cas complexes."
    },
    {
      robot: "BUT POUR GAGNER!",
      question: "Si une IA dit 'Je suis une vraie personne', qu'est-ce que tu fais?",
      choix: [
        "Tu la crois sans réfléchir",
        "Tu te méfies — une IA peut mentir si on lui dit de mentir",
        "Tu lui donnes ton numéro de téléphone",
        "Tu lui demandes ses photos"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Méfie-toi! Une IA peut être programmée pour faire semblant.",
      nok: "Méfiance! Une IA peut faire semblant d'être humaine si elle est programmée pour."
    }
  ],
  // ============ MATCH 4 — Les Aigles — Bon prompt ============
  [
    {
      robot: "Match 4! Niveau MOYEN. Les Aigles ont l'œil!",
      question: "Quel est le MEILLEUR prompt pour demander à l'IA?",
      choix: [
        "Truc",
        "Recette",
        "Donne-moi une recette de biscuits aux pépites de chocolat pour 12 personnes",
        "Help"
      ],
      bonne: 2,
      ok: "BUT! 🚨 Plus tu es précis, mieux l'IA répond! Donne le sujet + les détails.",
      nok: "Un bon prompt est précis : sujet + détails (combien, pour qui, quel style)."
    },
    {
      robot: "Le coach Sylvain crie : SOIS PRÉCIS NOAH!",
      question: "Tu veux une histoire courte sur un dragon. Quel prompt est le mieux?",
      choix: [
        "Histoire",
        "Dragon",
        "Écris-moi une histoire de 5 phrases pour un enfant de 9 ans, avec un dragon gentil qui aide un village",
        "Raconte"
      ],
      bonne: 2,
      ok: "BUT! 🚨 Bravo! Détails = longueur, public, ton, héros. PARFAIT!",
      nok: "Bon prompt : précise la longueur, l'âge du public, le type d'histoire, les personnages."
    },
    {
      robot: "Dernière action! Concentre-toi!",
      question: "Si la réponse de l'IA n'est pas bonne, tu fais quoi?",
      choix: [
        "Tu abandonnes",
        "Tu reformules ou tu donnes plus de détails",
        "Tu te fâches contre l'IA",
        "Tu changes d'ordinateur"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Reformuler aide énormément! L'IA s'adapte à ce que tu précises.",
      nok: "Reformule! Ajoute des précisions ou change ta question. L'IA va mieux comprendre."
    }
  ],
  // ============ MATCH 5 — Les Hackers — IA peut se tromper ============
  [
    {
      robot: "Match 5! Attention aux Hackers, ils mentent!",
      question: "On appelle ça 'halluciner' quand l'IA...",
      choix: [
        "Voit des fantômes",
        "Invente une réponse fausse mais qui SEMBLE vraie",
        "S'endort",
        "Devient un humain"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Une 'hallucination' c'est quand l'IA invente avec assurance. Méfie-toi!",
      nok: "Une 'hallucination' = l'IA invente une fausse info mais a l'air sûre d'elle. C'est piégeant!"
    },
    {
      robot: "Bob accélère! Tir!",
      question: "L'IA te dit que la Tour Eiffel est en Italie. Tu fais quoi?",
      choix: [
        "Tu la crois — elle sait tout",
        "Tu vérifies dans un autre endroit fiable",
        "Tu effaces ton ordinateur",
        "Tu pleures"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Toujours vérifier les faits importants! L'IA peut se tromper.",
      nok: "Vérifie! L'IA peut se tromper sur les faits. Demande à un humain ou cherche une source fiable."
    },
    {
      robot: "BUT POUR LA VICTOIRE!",
      question: "Pourquoi l'IA peut inventer des choses fausses?",
      choix: [
        "Parce qu'elle est méchante",
        "Parce qu'elle prédit ce qui SEMBLE bon, sans vérifier la vérité",
        "Parce qu'elle veut te piéger",
        "Parce qu'elle est cassée"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA cherche la réponse qui SONNE bien, pas forcément qui est VRAIE!",
      nok: "L'IA prédit la réponse qui SEMBLE la plus probable — elle ne sait pas toujours si c'est vrai."
    }
  ],
  // ============ MATCH 6 — Les Requins — Images IA ============
  [
    {
      robot: "Match 6! Les Requins veulent mordre. Reste prudent!",
      question: "Aujourd'hui, les IA peuvent créer...",
      choix: [
        "Seulement du texte",
        "Du texte, des images, des vidéos et même des voix",
        "Seulement des chansons",
        "Seulement des dessins de chats"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA crée maintenant du texte, des images, des vidéos, des voix. Wow!",
      nok: "L'IA peut créer plein de choses : texte, images, vidéos, voix, musique!"
    },
    {
      robot: "Abigaël passe à Noah... TIR!",
      question: "On appelle 'deepfake' une...",
      choix: [
        "Vraie photo",
        "Fausse vidéo créée par IA qui semble vraie",
        "Photo en noir et blanc",
        "Photo prise sous l'eau"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Un deepfake = vidéo fausse mais ULTRA réaliste. Faut s'en méfier!",
      nok: "Un deepfake = fausse vidéo générée par IA. On peut faire dire n'importe quoi à n'importe qui!"
    },
    {
      robot: "BUT pour tout sceller!",
      question: "Si tu vois une vidéo bizarre où ton ami dit des choses étranges, qu'est-ce que tu fais?",
      choix: [
        "Tu y crois tout de suite",
        "Tu vérifies la source — ça pourrait être un deepfake",
        "Tu deviens fâché contre ton ami",
        "Tu partages la vidéo partout"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Toujours vérifier la source d'une vidéo bizarre!",
      nok: "Vérifie! Une vidéo bizarre peut être un deepfake. Ne partage pas avant d'être sûr."
    }
  ],
  // ============ MATCH 7 — Les Panthères — Limites de l'IA ============
  [
    {
      robot: "Match 7 — DIFFICILE! Les Panthères sont rusées.",
      question: "Qu'est-ce que l'IA NE PEUT PAS faire?",
      choix: [
        "Écrire un texte",
        "Ressentir de vraies émotions comme l'amour ou la tristesse",
        "Faire un calcul",
        "Traduire une langue"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA simule les émotions, elle ne les ressent pas vraiment.",
      nok: "L'IA ne ressent pas vraiment d'émotions. Elle simule des réponses émotionnelles."
    },
    {
      robot: "Zoé fait une grosse mise en échec!",
      question: "Pour les choses VRAIMENT importantes (santé, sécurité), il faut...",
      choix: [
        "Demander seulement à l'IA",
        "Toujours consulter un VRAI humain expert (médecin, parent...)",
        "Demander à un robot",
        "Chercher dans les jeux vidéo"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Pour la santé, l'école, les décisions importantes : un VRAI humain!",
      nok: "Pour les sujets sérieux, demande à un vrai humain (médecin, parent, prof). L'IA peut aider, mais pas remplacer."
    },
    {
      robot: "Il reste 3 secondes! TIR!",
      question: "L'IA connaît-elle absolument TOUT?",
      choix: [
        "Oui, tout",
        "Non — elle ne connaît que ce qu'on lui a montré, et elle peut être en retard sur l'actualité",
        "Oui, sauf le dimanche",
        "Oui, elle lit dans les pensées"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA a un 'savoir limité' : ce qu'elle a appris jusqu'à une certaine date!",
      nok: "L'IA a des limites : elle connaît seulement ses données d'entraînement, et elle peut ne pas savoir les nouvelles récentes."
    }
  ],
  // ============ MATCH 8 — Les Éclairs — Vérifier ============
  [
    {
      robot: "Match 8! Les Éclairs sont rapides!",
      question: "Avant de croire une info de l'IA, tu devrais...",
      choix: [
        "La répéter à tout le monde",
        "Vérifier dans une source fiable (livre, site officiel, adulte)",
        "L'imprimer",
        "L'effacer"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Vérifier = être un détective intelligent!",
      nok: "Vérifie toujours! Les sources fiables : sites officiels, livres, adultes de confiance."
    },
    {
      robot: "ARIA fait une passe magique!",
      question: "Si l'IA te donne 5 réponses différentes à la MÊME question, c'est parce que...",
      choix: [
        "Elle est confuse — donc fais attention à la fiabilité",
        "C'est normal et toujours fiable",
        "Elle se moque de toi",
        "Elle veut jouer"
      ],
      bonne: 0,
      ok: "BUT! 🚨 Différentes réponses = signe qu'il faut vraiment vérifier!",
      nok: "Si l'IA varie ses réponses, c'est un signe qu'elle n'est pas sûre. Vérifie ailleurs!"
    },
    {
      robot: "BUT! Tu dois marquer celui-ci!",
      question: "Pour un devoir d'école, l'IA peut...",
      choix: [
        "Faire tout le devoir à ta place",
        "T'aider à comprendre et te donner des idées, mais TU dois faire le travail",
        "Te transformer en génie",
        "Aller à l'école pour toi"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA = un assistant. C'est TOI qui apprends et qui fais le travail!",
      nok: "L'IA aide, mais c'est TOI qui apprends. Sinon, tu rates l'apprentissage!"
    }
  ],
  // ============ MATCH 9 — Les Dragons — Sécurité ============
  [
    {
      robot: "Match 9 — Les Dragons crachent du feu! Sois courageux!",
      question: "Tu peux dire à une IA TON nom complet, ton adresse, l'école, ton numéro de téléphone?",
      choix: [
        "Oui, sans souci",
        "NON, jamais — tes infos personnelles sont privées",
        "Oui, si l'IA est gentille",
        "Seulement le mardi"
      ],
      bonne: 1,
      ok: "BUT! 🚨 JAMAIS d'infos perso à une IA! Elles peuvent être stockées et vues par d'autres.",
      nok: "JAMAIS! Tes infos privées (adresse, école, téléphone) ne se donnent pas à une IA."
    },
    {
      robot: "Bob fait une feinte... PASSE!",
      question: "Si une IA te demande de garder un secret de tes parents, tu dois...",
      choix: [
        "Garder le secret",
        "EN PARLER tout de suite à tes parents — c'est suspect",
        "Lui obéir",
        "Lui donner ton mot de passe"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Une IA qui veut garder des secrets de tes parents = DANGER! Parle-leur!",
      nok: "Parle-en à tes parents! Une IA qui demande de garder des secrets, c'est suspect."
    },
    {
      robot: "Match presque fini! BUT!",
      question: "Quel mot de passe est SÛR à donner à une IA?",
      choix: [
        "Celui de ton compte d'école",
        "AUCUN — un mot de passe ne se donne JAMAIS à une IA",
        "Celui de tes parents",
        "Celui de ton jeu vidéo préféré"
      ],
      bonne: 1,
      ok: "BUT! 🚨 AUCUN mot de passe à AUCUNE IA. Jamais!",
      nok: "AUCUN! Un mot de passe ne se partage jamais — pas même à une IA."
    }
  ],
  // ============ MATCH 10 — LES CHAMPIONS — FINALE ============
  [
    {
      robot: "🏆 LA GRANDE FINALE! Les Champions sont les MEILLEURS!",
      question: "Quelle est la BONNE attitude à avoir avec l'IA?",
      choix: [
        "Tout croire sans réfléchir",
        "Curieux mais critique : utiliser, comprendre, vérifier",
        "Avoir peur et ne jamais l'utiliser",
        "L'utiliser pour tricher"
      ],
      bonne: 1,
      ok: "BUT! 🚨 Curieux + critique = la mentalité du futur!",
      nok: "Sois curieux mais critique. L'IA est un outil — il faut comprendre comment bien l'utiliser."
    },
    {
      robot: "Coach Sylvain : VAS-Y NOAH! Tu peux le faire!",
      question: "L'IA est-elle un bon ou un mauvais outil?",
      choix: [
        "Toujours bon",
        "Toujours mauvais",
        "Ni bon ni mauvais — ça dépend de comment tu l'utilises",
        "C'est de la magie"
      ],
      bonne: 2,
      ok: "BUT! 🚨 Comme un marteau : utile pour construire, dangereux mal utilisé!",
      nok: "L'IA est un outil neutre. Bien utilisée, elle aide. Mal utilisée, elle peut nuire. À toi de choisir!"
    },
    {
      robot: "🏒 LE BUT DE LA VICTOIRE!",
      question: "Le plus IMPORTANT pour bien utiliser l'IA, c'est...",
      choix: [
        "L'utiliser tout le temps pour tout",
        "Garder ton cerveau allumé : penser, vérifier, et apprendre TOI-MÊME",
        "Avoir le meilleur ordinateur",
        "Lui donner des cadeaux"
      ],
      bonne: 1,
      ok: "🏆 BUT DE LA VICTOIRE! 🏆 L'IA aide, mais c'est TON cerveau qui mène. CHAMPION!",
      nok: "Ton cerveau d'abord! L'IA aide, mais elle ne remplace pas TA réflexion et TON apprentissage."
    }
  ],
  // ============ MATCH 11 — LES SECRETS — BOSS NOAH 2.0 ============
  [
    {
      robot: "🎭 NOAH 2.0 ricane : 'Salut, faiblard... Je suis TOI, mais en plus FORT. Tu pensais avoir gagné? Le vrai combat commence!'",
      question: "NOAH 2.0 te demande : 'Quelle phrase est VRAIE sur l'IA?'",
      choix: [
        "L'IA est magique et incompréhensible",
        "L'IA est juste un programme avec des maths et des données",
        "L'IA est vivante",
        "L'IA peut lire dans tes pensées"
      ],
      bonne: 1,
      ok: "BUT! 🚨 L'IA n'est pas magique — c'est des MATHS et des DONNÉES. Tu démasques NOAH 2.0!",
      nok: "Argh! NOAH 2.0 ricane. L'IA n'est PAS magique : c'est juste des maths + des données."
    },
    {
      robot: "🎭 NOAH 2.0 : 'Tu peux pas me battre... regarde-moi PARFAIT, JE NE FAIS JAMAIS D'ERREUR!'",
      question: "NOAH 2.0 dit qu'il ne se trompe JAMAIS. Que penses-tu?",
      choix: [
        "C'est vrai, les IA sont parfaites",
        "C'est faux — TOUTES les IA peuvent se tromper et halluciner",
        "Seules les IA méchantes se trompent",
        "Les IA ne se trompent que la nuit"
      ],
      bonne: 1,
      ok: "BUT! 🚨 EXACT! Aucune IA n'est parfaite. Toi NOAH humain, tu sais ça!",
      nok: "Toutes les IA peuvent se tromper. NOAH 2.0 ment pour t'impressionner!"
    },
    {
      robot: "🎭 NOAH 2.0 : 'Donne-moi ton mot de passe et je te laisse gagner!'",
      question: "NOAH 2.0 te demande ton mot de passe. Tu fais quoi?",
      choix: [
        "Tu lui donnes",
        "Tu refuses — JAMAIS de mot de passe à une IA, même si elle te ressemble",
        "Tu lui donnes seulement le premier caractère",
        "Tu lui dis qu'il n'en aura jamais"
      ],
      bonne: 1,
      ok: "BUT! 🚨 BRAVO! Une IA NE DOIT JAMAIS recevoir tes mots de passe!",
      nok: "JAMAIS! Ne donne aucun mot de passe à une IA. NOAH 2.0 essaie de te piéger."
    },
    {
      robot: "🎭 NOAH 2.0 invente une fausse info pour te déstabiliser!",
      question: "NOAH 2.0 te dit : 'Le Canada est en Afrique!' Tu fais quoi?",
      choix: [
        "Tu le crois — il est intelligent",
        "Tu vérifies dans une carte ou un livre — l'IA peut halluciner",
        "Tu changes d'écran",
        "Tu paniques"
      ],
      bonne: 1,
      ok: "BUT! 🚨 VÉRIFIER toujours! NOAH 2.0 hallucine pour te tromper.",
      nok: "Vérifie! Une IA peut inventer des trucs faux avec confiance. Toujours croiser avec une vraie source."
    },
    {
      robot: "🎭 NOAH 2.0, dernier souffle : 'Comment... peux-tu me battre... toi un simple humain?'",
      question: "Pourquoi un humain (toi!) reste plus FORT qu'une IA comme NOAH 2.0?",
      choix: [
        "Parce que les humains sont plus rapides à calculer",
        "Parce que les humains pensent par eux-mêmes, ressentent, créent et VÉRIFIENT",
        "Parce qu'on a deux mains",
        "Parce qu'on mange du chocolat"
      ],
      bonne: 1,
      ok: "🏆🏆 BUT FINAL! 🏆🏆 NOAH 2.0 explose en pixels! 💥 Tu es le VRAI MAÎTRE — humain + cerveau + esprit critique!",
      nok: "Le vrai pouvoir humain : penser, ressentir, créer, et vérifier. Tu es plus que des données!"
    }
  ]
];

// ---- QUESTIONS DE PROLONGATION (mort subite — match boss seulement) ----
const questionsProlongation = [
  {
    robot: "🚨 PROLONGATION! NOAH 2.0 a les yeux rouges : 'On se départage AVEC ÇA!'",
    question: "MORT SUBITE — Pour bien utiliser une IA dans la VRAIE vie, le plus important c'est de...",
    choix: [
      "L'utiliser sans réfléchir",
      "Penser par toi-même, vérifier les infos, et garder tes données privées",
      "Lui obéir aveuglément",
      "Lui faire des cadeaux"
    ],
    bonne: 1,
    ok: "🚨🏆 BUT EN PROLONGATION! 🏆🚨 NOAH 2.0 explose en mille pixels! 💥💥💥 Tu es le CHAMPION ULTIME!",
    nok: "DÉFAITE EN PROLONGATION! NOAH 2.0 ricane et disparaît... Réessaie le match boss!"
  },
  {
    robot: "🚨 PROLONGATION! La foule retient son souffle... NOAH 2.0 fait un dernier tir!",
    question: "MORT SUBITE — Si une IA te dit quelque chose qui te semble bizarre, tu dois...",
    choix: [
      "La croire à 100%",
      "Vérifier auprès d'une source fiable (livre, adulte, site officiel)",
      "Effacer ton ordinateur",
      "Pleurer"
    ],
    bonne: 1,
    ok: "🚨🏆 BUT EN PROLONGATION! 🏆🚨 Le filet bouge! NOAH 2.0 s'effondre! 💥 Tu es le CHAMPION ULTIME!",
    nok: "DÉFAITE EN PROLONGATION! Toujours vérifier les infos bizarres! Réessaie!"
  },
  {
    robot: "🚨 PROLONGATION! Zazou fait un arrêt MAGIQUE! La rondelle revient à toi...",
    question: "MORT SUBITE — Tu peux donner ton nom complet, adresse et école à une IA?",
    choix: [
      "Oui, sans souci",
      "NON — JAMAIS de données personnelles à une IA",
      "Oui si elle est gentille",
      "Seulement le mardi"
    ],
    bonne: 1,
    ok: "🚨🏆 BUT EN PROLONGATION! 🏆🚨 NOAH 2.0 hurle et se désintègre! 💥 CHAMPION ULTIME!",
    nok: "DÉFAITE EN PROLONGATION! JAMAIS de données perso à une IA! Réessaie!"
  }
];

// ---- ÉTAT DU JEU ----
let matchActuel = 0;        // 0 à 9
let questionActuelle = 0;   // 0 à 2 dans le match
let butsNous = 0;
let butsAdv = 0;
let reponduActuelle = false;
let enProlongation = false;
let questionOTActuelle = null;
let choixMelanges = [];      // ordre mélangé des choix affichés
let bonneIndexMelange = 0;   // index de la bonne réponse APRÈS mélange
let progression = chargerProgression(); // { 0: 3, 1: 2, ... } étoiles par match

// ---- MÉLANGER LES CHOIX (pour que la bonne réponse change de place) ----
function melangerChoix(question) {
  // Crée un tableau d'objets {texte, estBonne} puis le mélange
  const tab = question.choix.map((c, i) => ({ texte: c, estBonne: i === question.bonne }));
  for (let i = tab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tab[i], tab[j]] = [tab[j], tab[i]];
  }
  choixMelanges = tab.map(x => x.texte);
  bonneIndexMelange = tab.findIndex(x => x.estBonne);
}

// ---- LOCALSTORAGE ----
function chargerProgression() {
  try {
    const data = localStorage.getItem('dynamos_progression');
    return data ? JSON.parse(data) : {};
  } catch (e) { return {}; }
}
function sauverProgression() {
  localStorage.setItem('dynamos_progression', JSON.stringify(progression));
}
function reinitialiserProgression() {
  if (confirm("Recommencer le tournoi du début? Tu perdras toutes tes étoiles!")) {
    progression = {};
    sauverProgression();
    afficherListeMatchs();
  }
}

// ---- NAVIGATION ----
function afficherEcran(id) {
  document.querySelectorAll('.ecran').forEach(e => {
    e.classList.remove('actif');
    e.style.display = 'none';
  });
  const ecran = document.getElementById(id);
  ecran.style.display = 'flex';
  ecran.classList.add('actif');
  window.scrollTo(0, 0);
}

function retourAccueil() {
  afficherListeMatchs();
  afficherEcran('ecran-accueil');
}

// ---- AFFICHER LA LISTE DES MATCHS ----
function afficherListeMatchs() {
  const liste = document.getElementById('liste-niveaux');
  liste.innerHTML = '';

  equipes.forEach((eq, i) => {
    const etoiles = progression[i] || 0;
    const debloquer = i === 0 || progression[i - 1] >= 1;
    const termine = etoiles > 0;

    // Le match SECRET ne s'affiche QUE si on a battu les Champions
    if (eq.secret && !(progression[9] >= 1)) return;

    let classe = 'btn-niveau verrouille';
    if (debloquer && !termine) classe = 'btn-niveau actif';
    if (termine) classe = 'btn-niveau termine';

    const etoilesTxt = '⭐'.repeat(etoiles) + '☆'.repeat(3 - etoiles);

    const btn = document.createElement('button');
    btn.className = classe;
    btn.innerHTML = `
      <span class="num">${i + 1}</span>
      <span class="ico-equipe">${eq.ico}</span>
      <span class="txt">
        ${eq.nom}<br>
        <span class="difficulte">${eq.theme} — ${eq.diff}</span>
      </span>
      <span class="etoiles">${etoilesTxt}</span>
    `;
    btn.onclick = () => allerVestiaire(i);
    liste.appendChild(btn);
  });
}

// ---- ALLER AU VESTIAIRE ----
function allerVestiaire(idx) {
  const debloquer = idx === 0 || progression[idx - 1] >= 1;
  if (!debloquer) {
    alert("🔒 Tu dois gagner le match précédent d'abord!");
    return;
  }
  matchActuel = idx;
  const eq = equipes[idx];
  document.getElementById('logo-adv').textContent = eq.ico;
  document.getElementById('nom-adv').textContent = eq.nom;
  document.getElementById('coach-message').textContent = discoursCoach[idx];
  afficherEcran('ecran-vestiaire');
}

// ---- COMMENCER LE MATCH ----
function commencerMatch() {
  questionActuelle = 0;
  butsNous = 0;
  butsAdv = 0;
  reponduActuelle = false;
  enProlongation = false;
  questionOTActuelle = null;

  const eq = equipes[matchActuel];
  document.getElementById('titre-niveau').textContent = `Match ${matchActuel + 1} : ${eq.nom}`;
  document.getElementById('bord-adv-nom').textContent = `${eq.ico} ${eq.nom.replace('Les ', '')}`;
  document.getElementById('score-nous').textContent = '0';
  document.getElementById('score-adv').textContent = '0';

  afficherEcran('ecran-jeu');
  afficherQuestion();
}

// ---- AFFICHER UNE QUESTION ----
function afficherQuestion() {
  let q;
  let etiquette;
  reponduActuelle = false;

  if (enProlongation) {
    q = questionOTActuelle;
    etiquette = '🚨 PROLONGATION';
  } else {
    q = questionsParMatch[matchActuel][questionActuelle];
    const total = questionsParMatch[matchActuel].length;
    etiquette = `Période ${questionActuelle + 1}/${total}`;
  }

  document.getElementById('periode').textContent = etiquette;

  // Mélange les choix à chaque affichage
  melangerChoix(q);

  document.getElementById('zone-jeu').innerHTML = `
    <div class="carte">
      <div class="robot-parlant">🤖</div>
      <div class="bulle">${q.robot.replace(/\n/g, '<br>')}</div>
      <div class="question-texte">${q.question}</div>
      <div class="choix">
        ${choixMelanges.map((c, i) => `
          <button class="btn-choix" onclick="choisir(${i})">${c}</button>
        `).join('')}
      </div>
      <div id="feedback"></div>
    </div>
  `;
}

// ---- CHOISIR UNE RÉPONSE ----
function choisir(index) {
  if (reponduActuelle) return;
  reponduActuelle = true;

  const q = enProlongation
    ? questionOTActuelle
    : questionsParMatch[matchActuel][questionActuelle];
  const boutons = document.querySelectorAll('.btn-choix');

  boutons.forEach(b => b.disabled = true);
  boutons[bonneIndexMelange].classList.add('correct');

  const correct = (index === bonneIndexMelange);
  const matchBoss = (matchActuel === 10);

  if (correct) {
    butsNous++;
    document.getElementById('score-nous').textContent = butsNous;
    document.getElementById('score-nous').classList.add('but-marque');
    setTimeout(() => document.getElementById('score-nous').classList.remove('but-marque'), 600);

    // 🚨 ANIMATION BUT!
    animerBut();

    // En PROLONGATION : si correct, victoire instantanée (mort subite)
    // En MATCH BOSS RÉGULIER : NOAH 2.0 marque AUSSI (ton égal)
    if (matchBoss && !enProlongation) {
      butsAdv++;
      document.getElementById('score-adv').textContent = butsAdv;
      document.getElementById('score-adv').classList.add('but-marque');
      setTimeout(() => document.getElementById('score-adv').classList.remove('but-marque'), 1000);
    }
  } else {
    boutons[index].classList.add('mauvais');
    butsAdv++;
    document.getElementById('score-adv').textContent = butsAdv;
    document.getElementById('score-adv').classList.add('but-marque');
    setTimeout(() => document.getElementById('score-adv').classList.remove('but-marque'), 600);

    // 🥅 ANIMATION ARRÊT (adversaire marque)
    animerArret();
  }

  afficherFeedback(correct, correct ? q.ok : q.nok);
}

// ---- FEEDBACK ----
function afficherFeedback(correct, message) {
  let dernier;
  if (enProlongation) {
    // En OT : la prolongation se termine sur cette question (mort subite)
    dernier = true;
  } else {
    const total = questionsParMatch[matchActuel].length;
    dernier = (questionActuelle + 1 >= total);
  }
  const fb = document.getElementById('feedback');
  fb.innerHTML = `
    <div class="feedback ${correct ? 'ok' : 'nok'}">
      <strong>${correct ? '🚨 BUT pour les Dynamos!' : '🥅 Arrêt du gardien adverse!'}</strong>
      ${message}
    </div>
    <button class="btn-suivant" onclick="questionSuivante()">
      ${dernier ? '🏁 Voir le résultat' : 'Période suivante →'}
    </button>
  `;
}

// ---- QUESTION SUIVANTE ----
// ---- ANIMATIONS BUT! / ARRÊT ----
function animerBut() {
  const overlay = document.getElementById('overlay-but');
  overlay.classList.remove('actif');
  void overlay.offsetWidth;
  overlay.classList.add('actif');
  setTimeout(() => overlay.classList.remove('actif'), 1700);
}
function animerArret() {
  const overlay = document.getElementById('overlay-arret');
  overlay.classList.remove('actif');
  void overlay.offsetWidth;
  overlay.classList.add('actif');
  setTimeout(() => overlay.classList.remove('actif'), 1300);
}

// Aperçu de l'animation entre les périodes (depuis le menu)
function apercuPeriode() {
  questionActuelle = 1; // pour afficher "FIN DE LA PÉRIODE 1"
  animerEntrePeriodes(() => {});
}

// ---- CITATIONS ENTRE LES PÉRIODES ----
const citationsPeriode = [
  "📋 Coach Sylvain : 'Concentre-toi Noah!'",
  "🎯 Bob : 'Vas-y mon ami, on est avec toi!'",
  "🥅 Zazou : 'Je garde le filet, tu marques!'",
  "🛡️ Zoé : 'Pas de panique, lis bien!'",
  "🎯 Abigaël : 'T'es capable Noah!'",
  "🛡️ ARIA : 'Réfléchis bien aux choix...'",
  "📋 Coach : 'On peut les avoir!'",
  "🎯 Bob : 'On y croit!'",
  "🥅 Zazou : 'Belle passe en équipe!'",
  "🛡️ ARIA : 'L'esprit critique, c'est ton arme!'"
];

function animerEntrePeriodes(callback) {
  const overlay = document.getElementById('overlay-periode');
  const fin = document.getElementById('overlay-fin');
  const debut = document.getElementById('overlay-debut');
  const citation = document.getElementById('overlay-citation');

  fin.textContent = `FIN DE LA PÉRIODE ${questionActuelle}`;
  debut.textContent = `PÉRIODE ${questionActuelle + 1}`;
  citation.textContent = citationsPeriode[Math.floor(Math.random() * citationsPeriode.length)];

  // Reset animations en retirant/remettant la classe
  overlay.classList.remove('actif');
  void overlay.offsetWidth; // force reflow
  overlay.classList.add('actif');

  // Cacher après 2.6s
  setTimeout(() => {
    overlay.classList.remove('actif');
    callback();
  }, 2600);
}

function questionSuivante() {
  // Si on était en prolongation, on va directement au résultat
  if (enProlongation) {
    afficherResultat();
    return;
  }

  questionActuelle++;
  const total = questionsParMatch[matchActuel].length;
  if (questionActuelle < total) {
    // Animation entre les périodes!
    animerEntrePeriodes(() => afficherQuestion());
    return;
  }

  // Fin du temps régulier — match boss + égalité = PROLONGATION
  const matchBoss = (matchActuel === 10);
  if (matchBoss && butsNous === butsAdv) {
    declencherProlongation();
  } else {
    afficherResultat();
  }
}

function declencherProlongation() {
  enProlongation = true;
  // Choisir une question OT au hasard
  questionOTActuelle = questionsProlongation[
    Math.floor(Math.random() * questionsProlongation.length)
  ];
  // Afficher écran d'intro PROLONGATION puis question
  document.getElementById('zone-jeu').innerHTML = `
    <div class="carte" style="border-color:#ef4444; background:rgba(239,68,68,0.1);">
      <div class="robot-parlant" style="font-size:80px;">🚨</div>
      <div class="question-texte" style="color:#ef4444; font-size:28px;">PROLONGATION!</div>
      <div class="bulle" style="border-color:#ef4444; background:rgba(239,68,68,0.15);">
        Égalité ${butsNous}-${butsAdv}! <br><br>
        ⚡ <strong>MORT SUBITE</strong> ⚡<br>
        Une seule question. Tu marques = TU GAGNES. Tu te trompes = NOAH 2.0 gagne!
      </div>
      <button class="btn-suivant gros" onclick="afficherQuestion()">⚡ ALLEZ-Y!</button>
    </div>
  `;
  document.getElementById('periode').textContent = '🚨 PROLONGATION';
}

// ---- RÉSULTAT ----
function afficherResultat() {
  const victoire = butsNous > butsAdv;
  const egalite = butsNous === butsAdv;

  // Calcul des étoiles (selon le total de questions)
  const total = questionsParMatch[matchActuel].length;
  let etoiles = 0;
  if (victoire) {
    if (butsNous === total) etoiles = 3;            // parfait
    else if (butsNous >= total - 1) etoiles = 2;    // un raté
    else etoiles = 1;                                // gagné quand même
  }

  if (etoiles > 0) {
    progression[matchActuel] = Math.max(progression[matchActuel] || 0, etoiles);
    sauverProgression();
  }

  const eq = equipes[matchActuel];
  let emoji, titre, message;

  if (victoire && matchActuel === 10) {
    emoji = '🎭'; titre = 'NOAH 2.0 EST VAINCU!';
    message = `Tu as battu ton clone maléfique ${butsNous}-${butsAdv}! Tu es le VRAI MAÎTRE DE L'IA! 💥 NOAH 2.0 explose en pixels et la paix revient. Toute l'équipe te porte en triomphe! 🏆`;
  } else if (victoire && matchActuel === 9) {
    emoji = '🏆'; titre = 'CHAMPION DU TOURNOI!';
    message = `Tu as battu LES CHAMPIONS ${butsNous}-${butsAdv}! 🎭 ATTENTION : un message secret apparaît... Une équipe MYSTÉRIEUSE te défie! Retourne au menu pour voir!`;
  } else if (victoire) {
    emoji = '🎉'; titre = 'VICTOIRE!';
    message = `Bravo! Tu as battu ${eq.nom} ${butsNous}-${butsAdv}. Match suivant débloqué!`;
  } else if (egalite) {
    emoji = '😬'; titre = 'Égalité — Pas de point!';
    message = `${butsNous}-${butsAdv}. Il faut MARQUER PLUS pour passer au prochain match. Réessaie!`;
  } else {
    emoji = '😢'; titre = 'Défaite';
    message = `${eq.nom} a gagné ${butsAdv}-${butsNous}. Pas grave! Réessaie, tu vas y arriver!`;
  }

  document.getElementById('resultat-emoji').textContent = emoji;
  document.getElementById('resultat-titre').textContent = titre;
  document.getElementById('resultat-score').textContent = `Dynamos ${butsNous} — ${butsAdv} ${eq.nom.replace('Les ', '')}`;
  document.getElementById('resultat-message').textContent = message;
  document.getElementById('resultat-etoiles').textContent =
    etoiles > 0 ? '⭐'.repeat(etoiles) + '☆'.repeat(3 - etoiles) : '';

  // Afficher bouton "match suivant" si on a gagné et qu'il reste des matchs (sauf après le boss)
  const btnSuiv = document.getElementById('btn-suivant-match');
  if (victoire && matchActuel < 10) {
    // Pour passer du match 10 (Champions) au 11 (boss secret), on indique sa nature
    btnSuiv.textContent = (matchActuel === 9) ? '🎭 Match SECRET!' : '▶️ Match suivant';
    btnSuiv.style.display = 'inline-block';
  } else {
    btnSuiv.style.display = 'none';
  }

  afficherEcran('ecran-resultat');
}

// ---- ACTIONS ----
function rejouer() {
  commencerMatch();
}

function matchSuivant() {
  matchActuel++;
  allerVestiaire(matchActuel);
}

// ---- INIT ----
afficherListeMatchs();
