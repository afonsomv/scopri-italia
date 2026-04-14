import { QuizSet } from "@/lib/types";

/**
 * Bonus quizzes themed around Assassin's Creed II — most of which is set in
 * Renaissance Florence. Questions blend real history and game lore, since AC2
 * sticks closer to the historical record than most people remember.
 *
 * Unlock condition: per-spot — each AC quiz unlocks when its matching standard quiz is complete.
 */
export const florenceAcQuizzes: QuizSet[] = [
  {
    spotId: "florence-duomo",
    slug: "florence-duomo-ac",
    bonusTheme: "ac-florence",
    title: "Pazzi Conspiracy — Duomo",
    questions: [
      {
        id: "florence-duomo-ac-1",
        spotId: "florence-duomo",
        question:
          "On 26 April 1478, two Medici brothers were attacked during High Mass at the Duomo. Who was killed and who escaped? (In AC2, Ezio arrives just in time to witness the attack.)",
        options: [
          "Lorenzo killed, Giuliano escaped",
          "Giuliano killed, Lorenzo escaped wounded",
          "Both brothers were killed at the altar",
          "Both escaped without injury",
        ],
        correctIndex: 1,
        explanation:
          "Giuliano de' Medici was stabbed 19 times and died on the cathedral floor. His brother Lorenzo (later 'Il Magnifico') was wounded but escaped into the sacristy and barred the doors.",
      },
      {
        id: "florence-duomo-ac-2",
        spotId: "florence-duomo",
        question:
          "Which family — bankers and rivals of the Medici — orchestrated the conspiracy and gave it its name?",
        options: [
          "The Borgia",
          "The Pazzi",
          "The Albizzi",
          "The Strozzi",
        ],
        correctIndex: 1,
        explanation:
          "The Pazzi family, with the backing of Pope Sixtus IV's nephew, plotted the assassination. After the failed coup, dozens of conspirators were hanged from the windows of the Palazzo Vecchio — a scene Ezio retraces in AC2.",
      },
      {
        id: "florence-duomo-ac-3",
        spotId: "florence-duomo",
        question:
          "In AC2, climbing tall structures to 'synchronise' the map is a core mechanic. Which feature of Brunelleschi's dome makes it particularly suited to climbing in real life?",
        options: [
          "Its smooth marble surface",
          "Its inner stairway between the two shells, originally built for maintenance",
          "Its external rope ladder, still in use",
          "It has no climbing feature",
        ],
        correctIndex: 1,
        explanation:
          "Brunelleschi's dome is a double shell with a stairway running between the two layers — built so workers could maintain it. Today, visitors climb 463 steps to the lantern; in AC2, Ezio takes the considerably less subtle route up the outside.",
      },
      {
        id: "florence-duomo-ac-4",
        spotId: "florence-duomo",
        question:
          "Leonardo da Vinci is Ezio's friend and ally throughout AC2. What real Florentine workshop did the historical Leonardo apprentice in?",
        options: [
          "The workshop of Andrea del Verrocchio",
          "The Medici sculpture garden",
          "The studio of Sandro Botticelli",
          "The workshop of Domenico Ghirlandaio",
        ],
        correctIndex: 0,
        explanation:
          "Leonardo entered Verrocchio's bottega around 1466 at age 14. The legend goes that when Leonardo painted an angel into Verrocchio's 'Baptism of Christ', the master gave up painting in despair.",
      },
      {
        id: "florence-duomo-ac-5",
        spotId: "florence-duomo",
        question:
          "AC2 begins with Ezio's father and brothers being publicly executed. The historical figure who pardoned the Pazzi conspirators' families and rebuilt Florentine power afterwards was…?",
        options: [
          "Cosimo de' Medici 'the Elder'",
          "Lorenzo de' Medici 'Il Magnifico'",
          "Pope Sixtus IV",
          "Cesare Borgia",
        ],
        correctIndex: 1,
        explanation:
          "Lorenzo de' Medici, who survived the Pazzi attack, used the conspiracy to consolidate Medici power for the next 14 years. He was Ezio's patron in AC2 and a real-life patron of Botticelli, Michelangelo and Leonardo.",
      },
    ],
  },
  {
    spotId: "florence-signoria",
    slug: "florence-signoria-ac",
    bonusTheme: "ac-florence",
    title: "Bonfire of the Vanities — Signoria",
    questions: [
      {
        id: "florence-signoria-ac-1",
        spotId: "florence-signoria",
        question:
          "The AC2 DLC 'Bonfire of the Vanities' is set in 1497, when a Dominican friar took over Florence. Who was he?",
        options: [
          "Tomás de Torquemada",
          "Girolamo Savonarola",
          "Niccolò Machiavelli",
          "Antonino Pierozzi",
        ],
        correctIndex: 1,
        explanation:
          "Savonarola — fiery, apocalyptic, and briefly the de facto ruler of Florence — organised the Falò delle Vanità where Florentines burned books, art and luxuries deemed sinful. A year later he was burned in the same square.",
      },
      {
        id: "florence-signoria-ac-2",
        spotId: "florence-signoria",
        question:
          "Where exactly was Savonarola executed in 1498? You can find a marble plaque marking the spot today.",
        options: [
          "Inside the Duomo",
          "In Piazza della Signoria, in front of the Palazzo Vecchio",
          "On Ponte Vecchio",
          "At the Bargello prison",
        ],
        correctIndex: 1,
        explanation:
          "Savonarola was hanged and burned on the same spot where his Bonfires had taken place. A round bronze plaque in the piazza marks the exact location — a piece of dark history that closes the AC2 DLC.",
      },
      {
        id: "florence-signoria-ac-3",
        spotId: "florence-signoria",
        question:
          "What was thrown into the Bonfire of the Vanities?",
        options: [
          "Only weapons confiscated from criminals",
          "Books, paintings, mirrors, cosmetics, musical instruments and luxury clothing",
          "Only religious icons judged heretical",
          "Plague-contaminated objects",
        ],
        correctIndex: 1,
        explanation:
          "Savonarola's followers — including, reportedly, Sandro Botticelli — burned anything deemed an occasion of sin. Some say Botticelli even threw his own paintings on the fire.",
      },
      {
        id: "florence-signoria-ac-4",
        spotId: "florence-signoria",
        question:
          "The Palazzo Vecchio served as the seat of the Signoria. After the Pazzi Conspiracy, what happened to the conspirators here? (AC2 has Ezio re-enacting these events.)",
        options: [
          "They were exiled peacefully",
          "They were hanged from the palace's windows for the city to see",
          "They were forgiven by the Pope",
          "They were imprisoned for life in the basement",
        ],
        correctIndex: 1,
        explanation:
          "Within hours of the failed assassination, the conspirators — including Archbishop Salviati — were hanged from the upper windows of the Palazzo Vecchio. Botticelli was paid to paint the hanged men on the palace facade as a warning.",
      },
      {
        id: "florence-signoria-ac-5",
        spotId: "florence-signoria",
        question:
          "Which sculpture in the Loggia dei Lanzi shows the Greek hero holding the head of Medusa, and was made by an artist who also wrote a wild autobiography?",
        options: [
          "Donatello's Judith and Holofernes",
          "Cellini's Perseus with the Head of Medusa",
          "Giambologna's Rape of the Sabine Women",
          "Bandinelli's Hercules and Cacus",
        ],
        correctIndex: 1,
        explanation:
          "Benvenuto Cellini's bronze Perseus (1554) was a Medici commission designed to terrify rivals. Cellini's autobiography — full of duels, prison breaks and brawls — is one of the great Renaissance reads, and frankly very Assassin's Creed in tone.",
      },
    ],
  },
  {
    spotId: "florence-ponte-vecchio",
    slug: "florence-ponte-vecchio-ac",
    bonusTheme: "ac-florence",
    title: "Rooftops & Escapes — Ponte Vecchio",
    questions: [
      {
        id: "florence-ponte-vecchio-ac-1",
        spotId: "florence-ponte-vecchio",
        question:
          "The Vasari Corridor lets the Medici cross the Arno without touching the street. In AC2's world, how would an Assassin most likely use such a corridor?",
        options: [
          "As a defensive killbox",
          "As a hidden rooftop route to tail or escape a target",
          "As a public viewing gallery",
          "As a dead drop for letters",
        ],
        correctIndex: 1,
        explanation:
          "The corridor is exactly the kind of elevated, unseen passage AC's parkour world is built around. Vasari built it in 1565 in just five months for Cosimo I — official reason: ducal safety.",
      },
      {
        id: "florence-ponte-vecchio-ac-2",
        spotId: "florence-ponte-vecchio",
        question:
          "AC2's Florence is famous for rooftop chases. What architectural feature of the city's medieval houses made real-life rooftop travel almost plausible?",
        options: [
          "Wide flat roofs designed as gardens",
          "Sporti — wooden overhangs that closed gaps between facing buildings",
          "Public walkways built between rooftops",
          "Ladders permanently attached to every facade",
        ],
        correctIndex: 1,
        explanation:
          "Medieval Florentines added sporti — projecting wooden upper storeys — to gain extra living space, narrowing the streets above to gaps a determined Assassin could leap. Most were torn down in the 19th century.",
      },
      {
        id: "florence-ponte-vecchio-ac-3",
        spotId: "florence-ponte-vecchio",
        question:
          "In AC2, Ezio's father is a Florentine banker. What was the dominant Florentine currency that financed the Renaissance — and that the Pazzi/Medici fought over?",
        options: [
          "The lira",
          "The fiorino (florin) — gold coin minted in Florence from 1252",
          "The ducato",
          "The scudo",
        ],
        correctIndex: 1,
        explanation:
          "The fiorino d'oro was the dominant European trade coin for centuries. Florentine banking — and the rivalry between Medici and Pazzi — was built on it.",
      },
      {
        id: "florence-ponte-vecchio-ac-4",
        spotId: "florence-ponte-vecchio",
        question:
          "Ezio's signature weapon is the Hidden Blade, repaired by Leonardo. In AC lore, where on the body is it traditionally worn?",
        options: [
          "Concealed in the boot",
          "Concealed inside the bracer on the forearm",
          "Behind the belt buckle",
          "Hidden in a hat",
        ],
        correctIndex: 1,
        explanation:
          "The Hidden Blade is a wrist-mounted device extending from a forearm bracer. The series originally required Assassins to remove their ring finger to make the mechanism work — Ezio was spared that ritual.",
      },
      {
        id: "florence-ponte-vecchio-ac-5",
        spotId: "florence-ponte-vecchio",
        question:
          "Leonardo da Vinci really did sketch a flying machine — and Ezio uses one in a memorable AC2 mission. In what city does that flight scene take place?",
        options: [
          "Florence",
          "Venice",
          "Rome",
          "Forlì",
        ],
        correctIndex: 1,
        explanation:
          "The flying-machine mission is set in Venice during the Carnevale. Leonardo's real flying-machine drawings (the 'ornithopter') date from his Milan period in the 1480s — long before Ezio borrowed one.",
      },
    ],
  },
];
