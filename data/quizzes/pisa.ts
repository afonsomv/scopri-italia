import { QuizSet } from "@/lib/types";

export const pisaQuizzes: QuizSet[] = [
  {
    spotId: "pisa-torre",
    questions: [
      {
        id: "pisa-torre-1",
        spotId: "pisa-torre",
        question: "How long did it take to build the Leaning Tower of Pisa?",
        options: ["50 years", "Nearly 200 years", "25 years", "500 years"],
        correctIndex: 1,
        explanation:
          "Construction started in 1173 and wasn't completed until 1372 — nearly 200 years, partly because Pisa kept going to war.",
      },
      {
        id: "pisa-torre-2",
        spotId: "pisa-torre",
        question: "When did the tower start leaning?",
        options: [
          "After an earthquake in 1300",
          "During construction of the 2nd floor (1178)",
          "It was designed to lean",
          "After WWII bombing",
        ],
        correctIndex: 1,
        explanation:
          "The lean began during construction of the second floor in 1178, when the soft clay soil on one side started to give way.",
      },
      {
        id: "pisa-torre-3",
        spotId: "pisa-torre",
        question:
          "What did Mussolini do to try to fix the tower?",
        options: [
          "Added steel cables",
          "Poured concrete into the base",
          "Removed stones from the heavy side",
          "Nothing — he liked the lean",
        ],
        correctIndex: 1,
        explanation:
          "Mussolini ordered concrete to be poured into the foundation in 1934 — but it actually made the lean worse!",
      },
      {
        id: "pisa-torre-4",
        spotId: "pisa-torre",
        question: "What did Galileo allegedly do at this tower?",
        options: [
          "Lived in the top floor",
          "Dropped two balls to test gravity",
          "Built a telescope on top",
          "Carved his name on the wall",
        ],
        correctIndex: 1,
        explanation:
          "Legend says Galileo dropped two balls of different masses from the tower in 1589 to prove they would hit the ground at the same time.",
      },
    ],
  },
  {
    spotId: "pisa-duomo",
    questions: [
      {
        id: "pisa-duomo-1",
        spotId: "pisa-duomo",
        question: "Why was the Duomo di Pisa built?",
        options: [
          "To house the Pope",
          "To celebrate a naval victory over the Saracens",
          "As a university",
          "To compete with Florence's cathedral",
        ],
        correctIndex: 1,
        explanation:
          "The cathedral was built starting in 1063 to celebrate Pisa's naval victory in Palermo. The loot from the raid helped fund it.",
      },
      {
        id: "pisa-duomo-2",
        spotId: "pisa-duomo",
        question:
          "What scientific idea did the Duomo's hanging lamp supposedly inspire?",
        options: [
          "The theory of relativity",
          "Galileo's pendulum theory",
          "Newton's laws of motion",
          "The heliocentric model",
        ],
        correctIndex: 1,
        explanation:
          "A swinging lamp (the 'Lamp of Galileo') allegedly inspired young Galileo to develop his theory about pendulum motion.",
      },
      {
        id: "pisa-duomo-3",
        spotId: "pisa-duomo",
        question: "Where did the facade's columns originally come from?",
        options: [
          "Carrara marble quarries",
          "Ancient Roman ruins",
          "Egyptian temples",
          "They were carved fresh",
        ],
        correctIndex: 1,
        explanation:
          "The Pisans recycled columns from ancient Roman ruins — they literally raided archaeological sites for building materials.",
      },
    ],
  },
  {
    spotId: "pisa-battistero",
    questions: [
      {
        id: "pisa-battistero-1",
        spotId: "pisa-battistero",
        question: "What makes the Baptistery's interior acoustically special?",
        options: [
          "Hidden speakers in the walls",
          "A single voice reverberates into a full chord",
          "The echo lasts 30 seconds",
          "Sound is completely absorbed",
        ],
        correctIndex: 1,
        explanation:
          "The bare interior creates a 5-second natural reverb, so a single voice singing a few notes produces a haunting chord effect.",
      },
      {
        id: "pisa-battistero-2",
        spotId: "pisa-battistero",
        question: "Why does the Baptistery look different at the top and bottom?",
        options: [
          "The top was damaged and rebuilt",
          "Different architectural styles — Romanesque base, Gothic top",
          "Two different materials were used",
          "The bottom is older and weathered",
        ],
        correctIndex: 1,
        explanation:
          "Started in 1152 in Romanesque style, the upper section was completed over 200 years later in Gothic style, creating a unique two-tone look.",
      },
      {
        id: "pisa-battistero-3",
        spotId: "pisa-battistero",
        question: "What record does this Baptistery hold?",
        options: [
          "Oldest in Italy",
          "Tallest in Europe",
          "Largest baptistery dome in the world",
          "Most visited in Tuscany",
        ],
        correctIndex: 2,
        explanation:
          "The Baptistery of Pisa has the largest baptistery dome in the world.",
      },
    ],
  },
  {
    spotId: "pisa-camposanto",
    questions: [
      {
        id: "pisa-camposanto-1",
        spotId: "pisa-camposanto",
        question:
          "According to legend, where did the soil in the Camposanto come from?",
        options: [
          "Mount Vesuvius",
          "Golgotha in Jerusalem",
          "The banks of the Nile",
          "The Vatican gardens",
        ],
        correctIndex: 1,
        explanation:
          "Legend says Archbishop Ubaldo brought shiploads of sacred soil from Golgotha (the hill where Christ was crucified) during the Third Crusade.",
      },
      {
        id: "pisa-camposanto-2",
        spotId: "pisa-camposanto",
        question: "What supposedly happened to bodies buried in this soil?",
        options: [
          "They were preserved forever",
          "They decomposed in just 24 hours",
          "They turned to gold",
          "They produced flowers",
        ],
        correctIndex: 1,
        explanation:
          "The 'holy soil' was believed to decompose a body in just 24 hours — hence the name Campo Santo (Holy Field).",
      },
      {
        id: "pisa-camposanto-3",
        spotId: "pisa-camposanto",
        question: "What caused major damage to the frescoes in 1944?",
        options: [
          "An earthquake",
          "Allied bombing melted the lead roof onto them",
          "A flood from the Arno",
          "Vandalism during liberation",
        ],
        correctIndex: 1,
        explanation:
          "Allied bombing in 1944 set the lead roof ablaze. The molten lead dripped onto the frescoes below, causing devastating damage that is still being restored.",
      },
    ],
  },
  {
    spotId: "pisa-cavalieri",
    questions: [
      {
        id: "pisa-cavalieri-1",
        spotId: "pisa-cavalieri",
        question:
          "Which famous physicist studied at the university in Piazza dei Cavalieri?",
        options: [
          "Albert Einstein",
          "Enrico Fermi",
          "Nikola Tesla",
          "Niels Bohr",
        ],
        correctIndex: 1,
        explanation:
          "Enrico Fermi, who created the first nuclear reactor, studied at the Scuola Normale Superiore housed in the Palazzo della Carovana.",
      },
      {
        id: "pisa-cavalieri-2",
        spotId: "pisa-cavalieri",
        question:
          "What horrible fate did Count Ugolino suffer in the tower here?",
        options: [
          "He was beheaded",
          "He was starved to death with his sons",
          "He was thrown from the top",
          "He was poisoned",
        ],
        correctIndex: 1,
        explanation:
          "In 1289, Count Ugolino della Gherardesca and his sons/grandsons were locked in the tower and starved to death. Dante immortalized his story in the Inferno.",
      },
      {
        id: "pisa-cavalieri-3",
        spotId: "pisa-cavalieri",
        question: "Who created the Knights of St. Stephen, based here?",
        options: [
          "Pope Julius II",
          "Cosimo I de' Medici",
          "Leonardo da Vinci",
          "Charlemagne",
        ],
        correctIndex: 1,
        explanation:
          "Cosimo I de' Medici founded the Knights of St. Stephen in 1562 as a military order to fight Ottoman pirates in the Mediterranean.",
      },
    ],
  },
  {
    spotId: "pisa-spina",
    questions: [
      {
        id: "pisa-spina-1",
        spotId: "pisa-spina",
        question: "What relic was this church built to house?",
        options: [
          "A piece of the True Cross",
          "A thorn from Christ's crown of thorns",
          "A bone of St. Peter",
          "The Holy Grail",
        ],
        correctIndex: 1,
        explanation:
          "'Spina' means 'thorn' in Italian — the church was built to house a thorn from Christ's crown of thorns, brought back from the Crusades.",
      },
      {
        id: "pisa-spina-2",
        spotId: "pisa-spina",
        question: "What remarkable thing happened to this church in 1871?",
        options: [
          "It was destroyed by fire",
          "It was moved brick by brick to higher ground",
          "It sank into the river",
          "It was converted to a mosque",
        ],
        correctIndex: 1,
        explanation:
          "To protect it from Arno floods, the entire church was dismantled and rebuilt on higher ground — stone by stone.",
      },
    ],
  },
];
