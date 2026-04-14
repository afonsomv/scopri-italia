import { Spot } from "@/lib/types";

export const sienaSpots: Spot[] = [
  {
    id: "siena-campo",
    citySlug: "siena",
    name: "Piazza del Campo",
    type: "piazza",
    tagline: "The shell-shaped stage for the world's wildest horse race",
    history:
      "Built over a former Roman marketplace at the junction of Siena's three hills, Piazza del Campo was paved in its distinctive shell shape in 1349 using red brick divided into nine segments — one for each member of the Council of Nine that governed the city. Twice a year since the 1600s, it transforms into a racetrack for the Palio, a bareback horse race between Siena's 17 contrade (city districts) that lasts just 90 seconds but consumes the entire city.",
    funFacts: [
      "The piazza is divided into 9 sections representing the medieval Council of Nine — you can still count the segments in the brickwork",
      "Horses in the Palio are assigned to contrade by lottery, and the horse can win even without its rider",
      "The piazza slopes at a steep angle toward the Palazzo Pubblico — intentionally designed so all citizens could see government ceremonies",
      "Contrade rivalries are so intense that alliances and betrayals are plotted year-round, and jockeys are routinely bribed",
    ],
    challenges: [
      {
        id: "siena-campo-c1",
        type: "observe",
        title: "Count the Shell Segments",
        description:
          "Sit on the sloped pavement and count the 9 segments of the shell-shaped piazza divided by white travertine lines.",
        hint: "Find a seat near the center and look toward the Palazzo Pubblico — the lines radiate outward from the drain at the base.",
      },
      {
        id: "siena-campo-c2",
        type: "find",
        title: "Spot the Fonte Gaia",
        description:
          "Find the rectangular fountain at the top of the piazza and identify the relief of the Virgin Mary at its center.",
      },
    ],
    timeSlot: "15:00",
  },
  {
    id: "siena-torre-mangia",
    citySlug: "siena",
    name: "Torre del Mangia",
    type: "monument",
    tagline: "400 steps to the rooftop of Tuscany",
    history:
      "Completed in 1348, the 102-meter Torre del Mangia was deliberately built to match the height of Siena's cathedral — a statement that civic and religious power were equals. It was the tallest secular tower in Italy at the time. The chapel at its base, the Cappella di Piazza, was added after the Black Death of 1348 as a votive offering of thanks from survivors.",
    funFacts: [
      "Its nickname 'Mangia' (meaning 'eat') comes from its first bell-ringer, Giovanni di Balduccio, who was famous for eating away all his earnings",
      "The tower has exactly 400 steps to the top — and no elevator, so pace yourself",
      "Lightning struck the tower's bell in 1348, the same year the Black Death arrived — Sienese took it as a terrible omen",
      "The tower was built with white travertine and brick to be visible from every corner of the city",
    ],
    challenges: [
      {
        id: "siena-torre-mangia-c1",
        type: "photo",
        title: "The Campo from Above",
        description:
          "Take a photo from the top of the tower showing the shell-shaped Piazza del Campo spread out below.",
        hint: "Position yourself on the side facing the piazza and try to capture the full shell shape with its nine segments.",
      },
      {
        id: "siena-torre-mangia-c2",
        type: "count",
        title: "Step Counter",
        description:
          "Count the steps as you climb to the top. Did you get exactly 400?",
      },
    ],
    timeSlot: "15:30",
  },
  {
    id: "siena-palazzo-pubblico",
    citySlug: "siena",
    name: "Palazzo Pubblico",
    type: "museum",
    tagline: "Where medieval democracy was painted on the walls",
    history:
      "Built between 1297 and 1310 as Siena's city hall, the Palazzo Pubblico still serves as the seat of municipal government. Its greatest treasure is the Sala dei Nove, where Ambrogio Lorenzetti painted his Allegory of Good and Bad Government (1338-1339) — the first known large-scale secular painting in Western art. These frescoes were literally a daily reminder to the ruling council of what happens when leaders govern wisely versus corruptly.",
    funFacts: [
      "Lorenzetti's 'Good Government' fresco is considered the first landscape painting since antiquity — you can spot recognizable Sienese countryside",
      "Simone Martini's 'Maestà' in the council chamber was the first major commission for the building, finished in 1315",
      "The palazzo still functions as Siena's town hall — civil servants work steps away from 700-year-old masterpieces",
      "The building's facade curves slightly to follow the shape of the piazza rather than standing at rigid right angles",
    ],
    challenges: [
      {
        id: "siena-palazzo-pubblico-c1",
        type: "find",
        title: "The Medici Coat of Arms",
        description:
          "Find the Medici coat of arms (six balls on a shield) on the exterior facade of the palazzo.",
        hint: "Look above the main entrance and along the upper portions of the facade.",
      },
      {
        id: "siena-palazzo-pubblico-c2",
        type: "observe",
        title: "Good vs Bad Government",
        description:
          "In the Sala dei Nove, compare the two sides of Lorenzetti's fresco — spot the difference between the thriving city under Good Government and the ruined city under Bad Government.",
      },
    ],
    timeSlot: "15:00",
  },
  {
    id: "siena-duomo",
    citySlug: "siena",
    name: "Duomo di Siena",
    type: "church",
    tagline: "A Gothic fever dream in black and white marble",
    history:
      "Begun in the 12th century, Siena's cathedral is a dazzling showcase of striped black-and-white marble, a motif drawn from the city's coat of arms. In the 1330s, Sienese leaders attempted to build a massive extension that would have made it the largest church in Christendom — but the Black Death of 1348 killed so many workers and citizens that the project was abandoned forever. Inside, the inlaid marble floor contains 56 panels of biblical and allegorical scenes created by over 40 artists across two centuries.",
    funFacts: [
      "The marble floor took nearly 200 years to complete and is so precious it's covered with protective boards most of the year — only fully revealed for a few weeks annually",
      "The Piccolomini Library inside contains vibrant Pinturicchio frescoes that look as fresh as the day they were painted in 1502",
      "Siena originally planned a cathedral so enormous that the current building would have been just the transept — the unfinished walls of the nave are still visible",
      "Bernini, Michelangelo, and Donatello all contributed sculptures to the interior",
    ],
    challenges: [
      {
        id: "siena-duomo-c1",
        type: "find",
        title: "Uncovered Floor Panel",
        description:
          "Find a section of the marble inlaid floor that's uncovered and visible — they're protected by boards most of the year and only revealed at certain times.",
        hint: "Some panels near the entrance or transept are left uncovered year-round. Look for intricate black and white scenes set into the floor.",
      },
      {
        id: "siena-duomo-c2",
        type: "count",
        title: "Stripe Spotter",
        description:
          "Count how many columns inside the nave have the distinctive black-and-white striped marble pattern.",
      },
    ],
    timeSlot: "16:00",
  },
  {
    id: "siena-cripta",
    citySlug: "siena",
    name: "Cripta del Duomo",
    type: "museum",
    tagline: "A hidden medieval time capsule buried for 700 years",
    history:
      "Rediscovered entirely by accident in 1999 during routine maintenance work beneath the Duomo, this crypt had been sealed and forgotten since the late 1300s. Workers broke through a wall and found a stunning cycle of 13th-century frescoes in remarkably vivid condition, protected from light and air for seven centuries. The paintings depict scenes from the Old and New Testaments and represent some of the finest examples of Sienese painting from the period.",
    funFacts: [
      "The crypt was sealed when the cathedral floor was raised in the 1300s — no one knew it existed for over 600 years",
      "The frescoes retain astonishing color because they were never exposed to sunlight or candle smoke",
      "Art historians believe the painters may include members of Duccio's workshop, making these among the earliest works of the Sienese school",
      "The space was filled with rubble and debris when found — excavation took years of painstaking work",
    ],
    challenges: [
      {
        id: "siena-cripta-c1",
        type: "observe",
        title: "700-Year-Old Colors",
        description:
          "Notice how the medieval fresco colors are still vibrant underground — pick out the brightest blue or red you can find and compare it to what you've seen in the Duomo above.",
      },
      {
        id: "siena-cripta-c2",
        type: "find",
        title: "Sealed Doorway",
        description:
          "Find one of the original sealed doorways or passages that connected the crypt to the cathedral above before it was buried.",
        hint: "Look for arched outlines in the walls where passages were bricked shut.",
      },
    ],
    timeSlot: "09:15",
  },
  {
    id: "siena-opera-duomo",
    citySlug: "siena",
    name: "Museo dell'Opera del Duomo",
    type: "museum",
    tagline: "Home to a masterpiece that once made an entire city weep with joy",
    history:
      "Housed in the unfinished right aisle of Siena's abandoned cathedral expansion, this museum contains artworks removed from the Duomo for preservation. Its crown jewel is Duccio di Buoninsegna's Maestà (1308-1311), a massive double-sided altarpiece that was so celebrated upon completion that the entire city held a procession to carry it from Duccio's workshop to the cathedral. The museum also grants access to the Facciatone, the unfinished facade wall of the planned mega-cathedral.",
    funFacts: [
      "When Duccio's Maestà was finished, shops closed, bells rang, and the whole city paraded it through the streets — a Renaissance-era launch event",
      "The Facciatone terrace offers one of the most breathtaking panoramic views in all of Tuscany — and almost no one knows about it",
      "Duccio was reportedly fined multiple times for unpaid debts and refusing military service while working on the Maestà",
      "The museum sits inside what would have been the nave of the largest cathedral ever attempted in medieval Europe",
    ],
    challenges: [
      {
        id: "siena-opera-duomo-c1",
        type: "photo",
        title: "Facciatone Panorama",
        description:
          "Take a photo from the Facciatone terrace panoramic viewpoint — try to capture the Duomo dome and the Torre del Mangia in a single shot.",
        hint: "The terrace is accessed via steep narrow stairs inside the unfinished wall. Face southeast for the best angle.",
      },
      {
        id: "siena-opera-duomo-c2",
        type: "observe",
        title: "Duccio's Maestà Up Close",
        description:
          "Stand in front of Duccio's Maestà and find the tiny panel showing the Entry into Jerusalem — notice how Duccio painted individual faces in the crowd.",
      },
    ],
    timeSlot: "09:45",
  },
  {
    id: "siena-san-domenico",
    citySlug: "siena",
    name: "Basilica di San Domenico",
    type: "church",
    tagline: "Where Siena's patron saint left her head — literally",
    history:
      "This austere brick basilica, begun in 1226, is inseparably linked to St. Catherine of Siena, one of only four female Doctors of the Church. Catherine experienced her first mystical vision here at age six and later took her vows in the chapel. After her death in Rome in 1380, the Sienese wanted her relics returned — when her full body couldn't be moved, they brought back her head, which is still displayed in a gilded reliquary in the Chapel of St. Catherine.",
    funFacts: [
      "St. Catherine's preserved head is displayed in a marble tabernacle — her thumb is in a separate reliquary nearby",
      "Catherine convinced Pope Gregory XI to return the papacy from Avignon to Rome in 1377, essentially through the power of strongly worded letters",
      "She could not read or write for most of her life and dictated her influential theological works to scribes",
      "The basilica's massive brick exterior was never given a marble facade — giving it a stark, fortress-like appearance",
    ],
    challenges: [
      {
        id: "siena-san-domenico-c1",
        type: "find",
        title: "St Catherine's Head",
        description:
          "Find the gilded reliquary containing St. Catherine's head in the Chapel of St. Catherine.",
        hint: "The chapel is on the right side of the nave, about halfway down. The reliquary sits in a marble tabernacle on the altar.",
      },
      {
        id: "siena-san-domenico-c2",
        type: "find",
        title: "The Authentic Portrait",
        description:
          "Find the fresco portrait of St. Catherine believed to be the most accurate depiction of her likeness, painted by her contemporary Andrea Vanni.",
      },
    ],
    timeSlot: "17:45",
  },
  {
    id: "siena-fortezza",
    citySlug: "siena",
    name: "Fortezza Medicea",
    type: "viewpoint",
    tagline: "A Medici power move turned sunset wine bar",
    history:
      "Built by Cosimo I de' Medici in 1561 after Florence conquered the Sienese Republic, this star-shaped fortress was designed not to protect Siena from invaders but to control its citizens and crush any thoughts of rebellion. The Sienese resented it so much that they demolished an earlier version in 1552 during their final stand against Florence. Today the fortress has been thoroughly repurposed — its vaulted cellars house the Enoteca Italiana, a wine institution offering tastings of wines from across Italy.",
    funFacts: [
      "The Sienese tore down the first Medici fortress brick by brick in 1552 — Florence just built a bigger one after conquering them",
      "The Enoteca Italiana inside is one of the only places where you can taste wines from every region of Italy under one roof",
      "The fortress ramparts offer sweeping golden-hour views over Siena's rooftops and the Tuscan hills beyond",
      "Siena's Republic was one of the last independent city-states to fall to the Medici — they held out until 1555 after a brutal 18-month siege",
    ],
    challenges: [
      {
        id: "siena-fortezza-c1",
        type: "photo",
        title: "Golden Hour Skyline",
        description:
          "Take a sunset photo of the Siena skyline from the fortress walls — try to capture the Torre del Mangia and the Duomo silhouetted against the sky.",
        hint: "The best vantage point is from the northern ramparts. Arrive at least 20 minutes before sunset for the golden light.",
      },
      {
        id: "siena-fortezza-c2",
        type: "observe",
        title: "Star-Shaped Fortress",
        description:
          "Walk along the ramparts and try to feel the star shape of the fortress — count how many pointed bastions you pass as you make a full circuit.",
      },
    ],
    timeSlot: "18:35",
  },
];
