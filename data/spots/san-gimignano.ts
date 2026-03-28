import { Spot } from "@/lib/types";

export const sanGimignanoSpots: Spot[] = [
  {
    id: "sg-cisterna",
    citySlug: "san-gimignano",
    name: "Piazza della Cisterna",
    type: "piazza",
    tagline: "A triangle of travertine where medieval deal-making never stopped",
    history:
      "This triangular piazza has been the commercial heart of San Gimignano since the 13th century, named after the octagonal cistern (1287) at its center that supplied the town's water. Ringed by tower-houses and palazzi built by rival merchant families, the piazza served as the marketplace and gathering point — the worn herringbone brick paving still bears the grooves of centuries of cart wheels and market stalls.",
    funFacts: [
      "The octagonal well at the center dates to 1287 and was the town's main water supply for centuries",
      "The piazza is triangular because it sits at the junction of two ancient roads — the Via Francigena pilgrim route crossed here",
      "Wealthy families competed to build the tallest tower overlooking this square — at the peak there were 72 towers in this tiny town",
      "The Gelateria Dondoli on this piazza has won multiple World Gelato Championship titles",
    ],
    challenges: [
      {
        id: "sg-cisterna-c1",
        type: "count",
        title: "Tower Tally",
        description:
          "Stand at the center of the piazza next to the well and count how many medieval towers you can see from that spot.",
        hint: "Slowly turn 360 degrees — some towers hide behind rooftops. You should be able to spot at least 5.",
      },
      {
        id: "sg-cisterna-c2",
        type: "find",
        title: "Cart Wheel Grooves",
        description:
          "Find the worn grooves in the herringbone brick paving left by centuries of cart wheels rolling through the market square.",
      },
    ],
    timeSlot: "09:00",
  },
  {
    id: "sg-collegiata",
    citySlug: "san-gimignano",
    name: "Collegiata di Santa Maria Assunta",
    type: "church",
    tagline: "A plain facade hiding one of Tuscany's most dazzling fresco cycles",
    history:
      "Consecrated in 1148, this deceptively modest Romanesque church conceals an interior blanketed in frescoes from floor to ceiling. The left nave features Old Testament scenes by Bartolo di Fredi (1367), the right nave depicts New Testament episodes by the workshop of Lippo Memmi, and the entrance wall bears a terrifying Last Judgment by Taddeo di Bartolo (1393). The church was elevated to collegiate status in 1471 by Pope Julius II, but never became a cathedral — San Gimignano lost its bishopric to nearby Volterra.",
    funFacts: [
      "The plain, unfinished facade was intentional — medieval Tuscan churches often spent their entire budget on interior decoration",
      "Taddeo di Bartolo's Last Judgment on the entrance wall is shockingly graphic, with demons torturing sinners in inventive and gruesome ways",
      "The Chapel of Santa Fina, added in 1468 by Giuliano da Maiano, contains frescoes by Ghirlandaio that Vasari praised as among his finest work",
      "Legend says Santa Fina, a local girl who lay on a wooden board for years as penance, caused violets to bloom on every tower in town when she died in 1253",
    ],
    challenges: [
      {
        id: "sg-collegiata-c1",
        type: "find",
        title: "The Last Judgment",
        description:
          "Find the Last Judgment fresco by Taddeo di Bartolo on the interior entrance wall — look for the most gruesome demon punishing sinners.",
        hint: "Turn around as soon as you enter and face the wall above the door. The damned are on the right side.",
      },
      {
        id: "sg-collegiata-c2",
        type: "observe",
        title: "Old vs New Testament",
        description:
          "Compare the Old Testament frescoes on the left wall with the New Testament scenes on the right — notice the difference in artistic style between the two sets of painters.",
      },
    ],
    timeSlot: "09:30",
  },
  {
    id: "sg-torre-grossa",
    citySlug: "san-gimignano",
    name: "Torre Grossa",
    type: "monument",
    tagline: "The last tower standing open — and the tallest of them all",
    history:
      "Completed in 1311, the Torre Grossa (Big Tower) stands 54 meters tall and is the highest of San Gimignano's surviving 14 towers. It was built by the town government itself, which then passed a law forbidding any private family from building higher. It is the only tower open to the public, and the climb rewards visitors with sweeping 360-degree views across the Val d'Elsa, the surrounding vineyards, and the bristling skyline of medieval towers below.",
    funFacts: [
      "A 1255 law banned private towers from exceeding the height of the Torre Rognosa — so the commune built this one even taller to assert its dominance",
      "Of the original 72 towers built by feuding noble families, only 14 survive today — each was a combined fortress, status symbol, and storage silo",
      "Dante Alighieri visited San Gimignano in 1300 as a Florentine ambassador, and climbed the tower precinct while lobbying the town to join the Guelph alliance",
      "The towers were not just for show — during feuds, families would barricade inside and use wooden bridges between allied towers to move without touching the street",
    ],
    challenges: [
      {
        id: "sg-torre-grossa-c1",
        type: "count",
        title: "Tower Census from the Top",
        description:
          "From the top of Torre Grossa, count how many of San Gimignano's surviving towers you can see. Can you find all 14?",
        hint: "Some towers are shorter and blend in with the rooftops — look carefully in every direction.",
      },
      {
        id: "sg-torre-grossa-c2",
        type: "photo",
        title: "Medieval Manhattan",
        description:
          "Take a photo that captures as many towers as possible in a single frame to show why San Gimignano is called the 'Medieval Manhattan'.",
      },
    ],
    timeSlot: "10:00",
  },
];
