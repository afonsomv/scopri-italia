import { QuizSet } from "@/lib/types";

/**
 * Bonus quizzes themed around Assassin's Creed Brotherhood (set in Rome, 1500–1507).
 *
 * Unlock condition: per-spot — each AC quiz unlocks when the matching standard
 * Rome quiz is completed. This gives a progressive unlock across the 3 days
 * the player spends in Rome.
 */
export const romeAcQuizzes: QuizSet[] = [
  {
    spotId: "rome-colosseo",
    slug: "rome-colosseo-ac",
    bonusTheme: "ac-rome",
    title: "Lairs of Romulus — Colosseum",
    questions: [
      {
        id: "rome-colosseo-ac-1",
        spotId: "rome-colosseo",
        question:
          "In AC Brotherhood, the 'Followers of Romulus' hide in lairs underneath ancient Roman ruins. What is the real name for the underground network beneath the Colosseum?",
        options: [
          "The Catacombs",
          "The Hypogeum",
          "The Cloaca Maxima",
          "The Mithraeum",
        ],
        correctIndex: 1,
        explanation:
          "The Hypogeum was a two-level network of tunnels and 32 animal lifts beneath the arena floor, used to stage gladiator combats and beast hunts. AC Brotherhood turns it into a Lair of Romulus — fitting, since it's exactly the kind of forgotten subterranean Rome the game loves.",
      },
      {
        id: "rome-colosseo-ac-2",
        spotId: "rome-colosseo",
        question:
          "How many spectators could the Colosseum hold at its peak in the 1st century AD?",
        options: [
          "Around 10,000",
          "Around 50,000",
          "Around 200,000",
          "Around 500,000",
        ],
        correctIndex: 1,
        explanation:
          "Estimates put it at 50,000–80,000 — bigger than most modern football stadiums. Entry was free; emperors used it as the Roman version of bread, circuses, and reality TV.",
      },
      {
        id: "rome-colosseo-ac-3",
        spotId: "rome-colosseo",
        question:
          "Which Flavian emperor inaugurated the Colosseum in 80 AD with 100 days of games?",
        options: [
          "Nero",
          "Titus",
          "Hadrian",
          "Constantine",
        ],
        correctIndex: 1,
        explanation:
          "Titus opened the Colosseum (then the Amphitheatrum Flavium) in 80 AD. His father Vespasian had started construction, deliberately on the site of Nero's hated private lake — turning a tyrant's playground into a public arena.",
      },
      {
        id: "rome-colosseo-ac-4",
        spotId: "rome-colosseo",
        question:
          "AC Brotherhood is set in the early 1500s. What was the Colosseum being used as around that time?",
        options: [
          "An active gladiator arena",
          "A quarry — its stone was systematically stripped to build palaces and churches",
          "A papal palace",
          "It was completely abandoned and fenced off",
        ],
        correctIndex: 1,
        explanation:
          "By the Renaissance the Colosseum was a glorified quarry. Its travertine was hauled off to build St. Peter's, Palazzo Venezia, Palazzo Barberini and others. Pope Benedict XIV finally consecrated it as a Christian site in 1749 to stop the looting.",
      },
      {
        id: "rome-colosseo-ac-5",
        spotId: "rome-colosseo",
        question:
          "What does the famous medieval saying 'Quamdiu stabit Coliseus, stabit et Roma…' predict?",
        options: [
          "While the Colosseum stands, Rome stands; when it falls, Rome and the world will fall too",
          "The Colosseum will outlast all Roman churches",
          "Rome cannot be ruled without the Colosseum",
          "The Colosseum will become the seat of the new emperor",
        ],
        correctIndex: 0,
        explanation:
          "Attributed to the Venerable Bede in the 8th century. The Colosseum is still standing — broadly — so we're statistically OK for now.",
      },
    ],
  },
  {
    spotId: "rome-pantheon",
    slug: "rome-pantheon-ac",
    bonusTheme: "ac-rome",
    title: "Treasure Vault — Pantheon",
    questions: [
      {
        id: "rome-pantheon-ac-1",
        spotId: "rome-pantheon",
        question:
          "In AC Brotherhood, the Pantheon hides one of the city's hardest treasure vaults. What does the name 'Pantheon' literally mean?",
        options: [
          "House of the emperor",
          "Temple of all the gods",
          "Hall of victory",
          "Place of pilgrimage",
        ],
        correctIndex: 1,
        explanation:
          "From the Greek 'pan' (all) + 'theos' (gods). It was built to honour all the Roman gods — and ironically only survived because it was rededicated as a Christian church in 609 AD.",
      },
      {
        id: "rome-pantheon-ac-2",
        spotId: "rome-pantheon",
        question:
          "What is the diameter of the Pantheon's dome — the largest unreinforced concrete dome on Earth, even today?",
        options: [
          "About 28 metres",
          "About 43 metres",
          "About 60 metres",
          "About 100 metres",
        ],
        correctIndex: 1,
        explanation:
          "Exactly 43.3 m, equal to the dome's height from the floor — the interior fits a perfect sphere. Brunelleschi studied this dome before building Florence's. Almost 1,900 years later, Roman concrete technology is still slightly mysterious.",
      },
      {
        id: "rome-pantheon-ac-3",
        spotId: "rome-pantheon",
        question:
          "Which Renaissance master is buried inside the Pantheon — sometimes used by AC fans as the perfect 'Assassin tomb' setting?",
        options: [
          "Michelangelo",
          "Raphael",
          "Leonardo da Vinci",
          "Donatello",
        ],
        correctIndex: 1,
        explanation:
          "Raphael (1483–1520) is buried here under the inscription 'Here lies that famous Raphael, by whom Nature feared to be conquered while he lived, and when he was dying, feared herself to die.'",
      },
      {
        id: "rome-pantheon-ac-4",
        spotId: "rome-pantheon",
        question:
          "Why doesn't rain ruin the Pantheon's interior, given the open oculus in the dome?",
        options: [
          "A glass cover was added in 1870",
          "The marble floor slopes gently and has 22 small drainage holes",
          "The oculus is closed automatically when it rains",
          "Rome rarely gets enough rain to matter",
        ],
        correctIndex: 1,
        explanation:
          "The 8.7 m oculus is fully open — you can absolutely get rained on inside — and the slightly convex marble floor channels water into 22 hidden drains. Almost two millennia of rainfall and it still works.",
      },
      {
        id: "rome-pantheon-ac-5",
        spotId: "rome-pantheon",
        question:
          "The bronze that originally covered the Pantheon's portico was stripped in the 1620s. What was much of it melted down for?",
        options: [
          "Cannons for Castel Sant'Angelo",
          "Bernini's baldacchino in St. Peter's Basilica (and cannons for Castel Sant'Angelo)",
          "Roof tiles for the new Vatican",
          "Statues for Piazza Navona",
        ],
        correctIndex: 1,
        explanation:
          "Pope Urban VIII (a Barberini) ordered the bronze stripped — leading Romans to coin 'Quod non fecerunt barbari, fecerunt Barberini' (what the barbarians didn't do, the Barberini did). Some of the bronze went to Bernini's baldacchino, the rest to cannons for the Castel.",
      },
    ],
  },
  {
    spotId: "rome-castel-santangelo",
    slug: "rome-castel-santangelo-ac",
    bonusTheme: "ac-rome",
    title: "Borgia Stronghold — Castel Sant'Angelo",
    questions: [
      {
        id: "rome-castel-santangelo-ac-1",
        spotId: "rome-castel-santangelo",
        question:
          "Castel Sant'Angelo is the central stronghold in AC Brotherhood. What was the building's original 2nd-century purpose?",
        options: [
          "A gladiator training school",
          "The mausoleum of Emperor Hadrian and his successors",
          "A Roman bath complex",
          "A grain warehouse",
        ],
        correctIndex: 1,
        explanation:
          "Hadrian commissioned it as his tomb, completed 139 AD just after his death. Successive emperors were also entombed here. It was later converted into a fortress, papal residence and prison.",
      },
      {
        id: "rome-castel-santangelo-ac-2",
        spotId: "rome-castel-santangelo",
        question:
          "AC2 ends with Ezio confronting Pope Alexander VI — Rodrigo Borgia. Which of Rodrigo's children is the main villain of AC Brotherhood?",
        options: [
          "Lucrezia Borgia",
          "Cesare Borgia",
          "Juan Borgia",
          "Goffredo Borgia",
        ],
        correctIndex: 1,
        explanation:
          "Cesare Borgia — soldier, cardinal, military commander — is Brotherhood's main antagonist. Historically, Cesare's ruthlessness inspired Machiavelli's 'The Prince'. He really did briefly hold most of central Italy.",
      },
      {
        id: "rome-castel-santangelo-ac-3",
        spotId: "rome-castel-santangelo",
        question:
          "There is a covered fortified passage called the Passetto di Borgo. What is its purpose? (And yes, you absolutely run along it in AC Brotherhood.)",
        options: [
          "An aqueduct from Lake Bracciano",
          "A secret elevated wall connecting the Vatican to Castel Sant'Angelo so the Pope could escape during sieges",
          "A defensive moat between two sections of the castle",
          "A processional route used only at Easter",
        ],
        correctIndex: 1,
        explanation:
          "Built in 1277, the Passetto saved Pope Alexander VI in 1494 (French invasion) and Clement VII in 1527 (Sack of Rome) — both times by literally running along the wall to the castle's safety. It's a prime AC parkour route.",
      },
      {
        id: "rome-castel-santangelo-ac-4",
        spotId: "rome-castel-santangelo",
        question:
          "Where does the name 'Sant'Angelo' come from?",
        options: [
          "A medieval angel statue dropped from the dome",
          "A vision of the Archangel Michael by Pope Gregory I in 590 AD, marking the end of a plague",
          "The first pope buried inside",
          "A relic of an angel housed in its chapel",
        ],
        correctIndex: 1,
        explanation:
          "Pope Gregory the Great saw the Archangel Michael sheathing his sword atop the building, signalling the end of a plague. A bronze statue of the angel still tops the castle today.",
      },
      {
        id: "rome-castel-santangelo-ac-5",
        spotId: "rome-castel-santangelo",
        question:
          "The Castel was famously used as a prison. Which Renaissance artist and goldsmith was imprisoned there — and broke out by climbing down a rope of bedsheets?",
        options: [
          "Michelangelo",
          "Benvenuto Cellini",
          "Caravaggio",
          "Raphael",
        ],
        correctIndex: 1,
        explanation:
          "Cellini was imprisoned in 1538 on (probably trumped-up) embezzlement charges. He really did escape using knotted bedsheets — a feat he describes with characteristic modesty in his autobiography. Pure AC behaviour.",
      },
    ],
  },
  {
    spotId: "rome-piazza-san-pietro",
    slug: "rome-piazza-san-pietro-ac",
    bonusTheme: "ac-rome",
    title: "Vatican Showdown — Piazza San Pietro",
    questions: [
      {
        id: "rome-piazza-san-pietro-ac-1",
        spotId: "rome-piazza-san-pietro",
        question:
          "Who designed the great curved colonnades that 'embrace' Piazza San Pietro?",
        options: [
          "Michelangelo",
          "Gian Lorenzo Bernini",
          "Francesco Borromini",
          "Carlo Maderno",
        ],
        correctIndex: 1,
        explanation:
          "Bernini designed the colonnades (1656–67) for Pope Alexander VII as 'the maternal arms of the Church embracing Catholics, heretics, and the curious'. 284 columns, 88 pilasters, 140 statues of saints on top.",
      },
      {
        id: "rome-piazza-san-pietro-ac-2",
        spotId: "rome-piazza-san-pietro",
        question:
          "If you stand on one of the two marble discs in Piazza San Pietro, what optical illusion happens?",
        options: [
          "All four rows of columns line up as one",
          "The sound of your voice is amplified across the square",
          "You see your shadow on the obelisk",
          "The dome of St. Peter's appears upside down",
        ],
        correctIndex: 0,
        explanation:
          "Two granite discs sit between the obelisk and each fountain. From either, the four concentric rows of columns appear perfectly aligned as a single column — Bernini's geometric flex.",
      },
      {
        id: "rome-piazza-san-pietro-ac-3",
        spotId: "rome-piazza-san-pietro",
        question:
          "The obelisk in the centre of the square is genuine ancient Egyptian. Who originally brought it to Rome?",
        options: [
          "Julius Caesar",
          "Caligula, who installed it in his circus on the Vatican Hill",
          "Constantine",
          "Augustus",
        ],
        correctIndex: 1,
        explanation:
          "Caligula brought it from Heliopolis around 37 AD for his Vatican Circus. Tradition says Saint Peter was crucified within sight of it. It was moved to its current spot in 1586 — a 4-month engineering job that's a story in itself.",
      },
      {
        id: "rome-piazza-san-pietro-ac-4",
        spotId: "rome-piazza-san-pietro",
        question:
          "AC2's final mission ends inside the Vatican with Ezio confronting Rodrigo Borgia. What was Rodrigo Borgia's papal title?",
        options: [
          "Pope Innocent VIII",
          "Pope Alexander VI",
          "Pope Julius II",
          "Pope Leo X",
        ],
        correctIndex: 1,
        explanation:
          "Rodrigo Borgia became Pope Alexander VI in 1492 — a notoriously corrupt and effective politician, and the historical figure AC2 turns into the Templar Grand Master.",
      },
      {
        id: "rome-piazza-san-pietro-ac-5",
        spotId: "rome-piazza-san-pietro",
        question:
          "Which Pope of the AC2/Brotherhood era commissioned both the new St. Peter's Basilica AND Michelangelo's Sistine Chapel ceiling?",
        options: [
          "Alexander VI (Borgia)",
          "Julius II (della Rovere)",
          "Leo X (Medici)",
          "Sixtus IV",
        ],
        correctIndex: 1,
        explanation:
          "Pope Julius II — 'Il Papa Terribile' — succeeded Alexander VI in 1503. He commissioned the new Basilica (1506), the Sistine ceiling (1508), and Raphael's Stanze. Brotherhood treats his rise as a partial Assassin victory over the Borgia.",
      },
    ],
  },
  {
    spotId: "rome-san-pietro",
    slug: "rome-san-pietro-ac",
    bonusTheme: "ac-rome",
    title: "Basilica Secrets — San Pietro",
    questions: [
      {
        id: "rome-san-pietro-ac-1",
        spotId: "rome-san-pietro",
        question:
          "The current St. Peter's Basilica replaces a much older church. Whose tomb is it built directly above?",
        options: [
          "Constantine the Great",
          "Saint Peter the Apostle",
          "Saint Paul",
          "Pope Sylvester I",
        ],
        correctIndex: 1,
        explanation:
          "St. Peter is, by tradition, buried directly beneath the high altar. Modern excavations in the 1940s found 1st-century burial remains beneath, broadly consistent with the tradition.",
      },
      {
        id: "rome-san-pietro-ac-2",
        spotId: "rome-san-pietro",
        question:
          "Michelangelo took over the design of the basilica's great dome at age 71. Who had started the project before him?",
        options: [
          "Donato Bramante",
          "Filippo Brunelleschi",
          "Andrea Palladio",
          "Gian Lorenzo Bernini",
        ],
        correctIndex: 0,
        explanation:
          "Bramante laid the first plan in 1506 under Julius II. Several architects followed (including Raphael). Michelangelo was appointed in 1547 and redesigned the dome — completed by della Porta after his death.",
      },
      {
        id: "rome-san-pietro-ac-3",
        spotId: "rome-san-pietro",
        question:
          "What is the only sculpture Michelangelo ever signed — and where in St. Peter's is it?",
        options: [
          "Moses, in a side chapel",
          "The Pietà, in the first chapel on the right",
          "The Risen Christ, behind the altar",
          "David, in the entrance hall",
        ],
        correctIndex: 1,
        explanation:
          "After overhearing the Pietà attributed to another sculptor, Michelangelo carved his name across Mary's sash in 1499. He never signed another work. The Pietà sits in the first chapel on the right as you enter.",
      },
      {
        id: "rome-san-pietro-ac-4",
        spotId: "rome-san-pietro",
        question:
          "The basilica's bronze 'baldacchino' over the altar — designed by Bernini — was partly cast from bronze stripped from which other Roman building?",
        options: [
          "The Colosseum",
          "The Pantheon",
          "Castel Sant'Angelo",
          "The Forum of Trajan",
        ],
        correctIndex: 1,
        explanation:
          "The Pantheon's portico bronze was melted down on Pope Urban VIII's orders. Hence the famous Roman dig: 'Quod non fecerunt barbari, fecerunt Barberini.'",
      },
      {
        id: "rome-san-pietro-ac-5",
        spotId: "rome-san-pietro",
        question:
          "AC2's climax has Ezio fighting in a hidden papal vault beneath the Vatican. Real Vatican excavations from 1940–49 found a Roman necropolis beneath the basilica. What kind of complex is it?",
        options: [
          "An ancient Mithraeum",
          "A pagan and early Christian cemetery from the 1st–4th centuries AD",
          "A military barracks",
          "A grain storage facility",
        ],
        correctIndex: 1,
        explanation:
          "The 'Scavi' tour today takes visitors through a real 1st-century Roman necropolis directly beneath the basilica. Pope Pius XII secretly authorised the dig during WWII — extremely on-brand for AC's hidden-history vibe.",
      },
    ],
  },
  {
    spotId: "rome-isola-tiberina",
    slug: "rome-isola-tiberina-ac",
    bonusTheme: "ac-rome",
    title: "Assassin Hideout — Isola Tiberina",
    questions: [
      {
        id: "rome-isola-tiberina-ac-1",
        spotId: "rome-isola-tiberina",
        question:
          "In AC Brotherhood, the Tiber Island serves as the Roman Assassin Guild's secret HQ. What does the island still house in real life — fitting because it's been there for 2,000+ years?",
        options: [
          "An active hospital (the Fatebenefratelli)",
          "A Roman senate chamber",
          "An imperial mint",
          "A papal summer residence",
        ],
        correctIndex: 0,
        explanation:
          "The island has been continuously associated with healing since 293 BC, when a temple to Asclepius (god of medicine) was built there. The Fatebenefratelli hospital still operates on the same site — over two millennia of medicine on one tiny island.",
      },
      {
        id: "rome-isola-tiberina-ac-2",
        spotId: "rome-isola-tiberina",
        question:
          "The island is famously shaped like…?",
        options: [
          "A horseshoe",
          "A boat or ship",
          "A crescent moon",
          "A teardrop",
        ],
        correctIndex: 1,
        explanation:
          "The Romans deliberately reinforced the island's natural shape with travertine to look like a ship — complete with an obelisk as a mast. Fragments of the carved 'prow' (with a head of Asclepius) are still visible at the southeastern tip.",
      },
      {
        id: "rome-isola-tiberina-ac-3",
        spotId: "rome-isola-tiberina",
        question:
          "Which of the two bridges connecting the island to the mainland is the oldest standing Roman bridge in Rome?",
        options: [
          "Ponte Cestio",
          "Ponte Fabricio (62 BC)",
          "Ponte Sant'Angelo",
          "Ponte Sisto",
        ],
        correctIndex: 1,
        explanation:
          "The Ponte Fabricio was built in 62 BC and still carries pedestrians today. Two stone heads of Janus (the four-faced god) on the parapet have given it the nickname 'Ponte dei Quattro Capi'.",
      },
      {
        id: "rome-isola-tiberina-ac-4",
        spotId: "rome-isola-tiberina",
        question:
          "AC Brotherhood lets you recruit Assassin novices and send them on missions across Europe. The historical Order of Assassins (Hashashin) the franchise borrows from was based where?",
        options: [
          "Sicily and southern Italy",
          "The fortress of Alamut in modern-day Iran",
          "The island of Malta",
          "The mountains of Andalusia",
        ],
        correctIndex: 1,
        explanation:
          "The Nizari Ismailis, led by Hassan-i Sabbah, controlled the mountain fortress of Alamut from 1090 until the Mongols destroyed it in 1256. Marco Polo's travelogue spread the (largely embellished) 'Hashashin' legends to Europe — the original AC1 setting.",
      },
      {
        id: "rome-isola-tiberina-ac-5",
        spotId: "rome-isola-tiberina",
        question:
          "What does Ezio's Assassin Creed motto translate to in English?",
        options: [
          "'Honour above all'",
          "'Nothing is true, everything is permitted'",
          "'Strike from the shadows'",
          "'Victory through patience'",
        ],
        correctIndex: 1,
        explanation:
          "'Nulla è reale, tutto è lecito' — 'Nothing is true, everything is permitted'. The line is borrowed from a (probably misattributed) saying credited to Hassan-i Sabbah and made famous by William S. Burroughs before the games adopted it.",
      },
    ],
  },
];
