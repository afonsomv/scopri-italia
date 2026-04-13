import { QuizSet } from "@/lib/types";

export const florenceQuizzes: QuizSet[] = [
  {
    spotId: "florence-duomo",
    questions: [
      {
        id: "florence-duomo-1",
        spotId: "florence-duomo",
        question: "Who designed the dome of Florence's cathedral?",
        options: [
          "Michelangelo",
          "Filippo Brunelleschi",
          "Leonardo da Vinci",
          "Giotto",
        ],
        correctIndex: 1,
        explanation:
          "Brunelleschi won a public competition in 1418 with a revolutionary double-shell design and herringbone brick pattern. The dome was completed in 1436 and is still the largest masonry dome in the world.",
      },
      {
        id: "florence-duomo-2",
        spotId: "florence-duomo",
        question: "What famous Florentine poet was baptised in the Battistero next to the cathedral?",
        options: [
          "Petrarch",
          "Dante Alighieri",
          "Boccaccio",
          "Machiavelli",
        ],
        correctIndex: 1,
        explanation:
          "Dante was baptised in the Battistero di San Giovanni in 1266. He mentions it lovingly in the Divine Comedy as 'il mio bel San Giovanni' (my beautiful San Giovanni).",
      },
      {
        id: "florence-duomo-3",
        spotId: "florence-duomo",
        question: "Who designed the Campanile (bell tower) next to the cathedral?",
        options: [
          "Arnolfo di Cambio",
          "Giotto",
          "Andrea Pisano",
          "Lorenzo Ghiberti",
        ],
        correctIndex: 1,
        explanation:
          "Giotto designed the Campanile in 1334 but died in 1337 before reaching the second tier. Andrea Pisano and Francesco Talenti completed it according to a modified plan.",
      },
    ],
  },
  {
    spotId: "florence-signoria",
    questions: [
      {
        id: "florence-signoria-1",
        spotId: "florence-signoria",
        question: "What is the statue of David in front of the Palazzo Vecchio?",
        options: [
          "The original by Michelangelo",
          "A copy — the original is in the Galleria dell'Accademia",
          "A copy by Donatello",
          "A modern bronze recreation",
        ],
        correctIndex: 1,
        explanation:
          "The original David stood here from 1504 until 1873, when it was moved indoors to protect it from weather damage. The current marble copy was installed in 1910.",
      },
      {
        id: "florence-signoria-2",
        spotId: "florence-signoria",
        question: "What does a round marble plaque in front of the Palazzo Vecchio commemorate?",
        options: [
          "The founding of the Florentine Republic",
          "The spot where the friar Savonarola was executed in 1498",
          "Where Michelangelo carved David",
          "The arrival of the Medici back to power",
        ],
        correctIndex: 1,
        explanation:
          "Girolamo Savonarola — the fiery Dominican friar who organised the Bonfire of the Vanities — was hanged and burned on this spot in 1498 after losing the support of the people.",
      },
      {
        id: "florence-signoria-3",
        spotId: "florence-signoria",
        question: "Why is the Loggia dei Lanzi called 'dei Lanzi'?",
        options: [
          "Because it was designed by an architect named Lanzi",
          "After the Lanzichenecchi (German mercenary lancers) who camped there under Cosimo I",
          "Because lances were sold in the loggia during medieval markets",
          "It is named for an old Florentine family",
        ],
        correctIndex: 1,
        explanation:
          "The loggia, built in the late 1300s, took its modern name from the Lanzichenecchi (German Landsknecht mercenaries) of Grand Duke Cosimo I, who used it as their guard post in the 16th century.",
      },
    ],
  },
  {
    spotId: "florence-ponte-vecchio",
    questions: [
      {
        id: "florence-ponte-vecchio-1",
        spotId: "florence-ponte-vecchio",
        question: "What is unique about Ponte Vecchio's survival in World War II?",
        options: [
          "It was rebuilt brick-by-brick after the war",
          "It was the only Florence bridge not destroyed by the retreating German army in 1944",
          "It was protected by Allied bombing of nearby buildings",
          "It was disassembled and stored, then rebuilt",
        ],
        correctIndex: 1,
        explanation:
          "In August 1944, the retreating Germans blew up every bridge over the Arno except Ponte Vecchio. According to the prevailing account, Hitler ordered it spared because of its beauty.",
      },
      {
        id: "florence-ponte-vecchio-2",
        spotId: "florence-ponte-vecchio",
        question: "What kind of shops have been on Ponte Vecchio for over 400 years?",
        options: [
          "Bakeries and bookshops",
          "Goldsmiths and jewellers",
          "Butchers and fishmongers",
          "Wine merchants",
        ],
        correctIndex: 1,
        explanation:
          "Ferdinando I de' Medici evicted the smelly butchers, fishmongers and tanners in 1593 and replaced them with goldsmiths — partly because he had to cross over the bridge daily through the Vasari Corridor above.",
      },
      {
        id: "florence-ponte-vecchio-3",
        spotId: "florence-ponte-vecchio",
        question: "What is the Vasari Corridor that runs above the shops?",
        options: [
          "An aqueduct from Roman times",
          "A private elevated passage built for the Medici in 1565",
          "A defensive wall added during the Risorgimento",
          "A rail line never put into service",
        ],
        correctIndex: 1,
        explanation:
          "Designed by Giorgio Vasari in 1565 for Cosimo I de' Medici, the corridor connected the Palazzo Vecchio to the Palazzo Pitti so the duke and his family could move across the city safely and unseen.",
      },
    ],
  },
];
