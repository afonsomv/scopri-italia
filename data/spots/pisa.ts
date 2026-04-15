import { Spot } from "@/lib/types";

export const pisaSpots: Spot[] = [
  {
    id: "pisa-torre",
    citySlug: "pisa",
    name: "Torre Pendente di Pisa",
    type: "monument",
    tagline: "The world's most famous architectural mistake",
    history:
      "Construction began in 1173 and took nearly 200 years to complete. The tower started leaning during construction due to soft ground on one side. It leans at about 3.97 degrees today — engineers spent 11 years (1990-2001) stabilizing it and actually straightened it slightly. Galileo allegedly dropped two balls of different masses from the top in 1589 to prove they fall at the same speed.",
    funFacts: [
      "The tower was never straight — it started tilting during construction of the second floor in 1178",
      "Mussolini tried to fix the lean by pouring concrete into the base — it made it worse",
      "There are 294 steps to the top, but the stairs are worn unevenly because of the lean",
      "During WWII, the Allies almost demolished it because Germans were using it as an observation post — but a retreat order came just in time",
    ],
    timeSlot: "08:15",
    challenges: [
      {
        id: "pisa-torre-c1",
        type: "find",
        title: "The Counter-Curve",
        description:
          "Find the slight curve in the tower — the upper floors were built curved to compensate for the lean, giving the tower a subtle banana shape.",
        hint: "Look at the tower's profile from the south side of the piazza. The top floors bend slightly back toward vertical.",
      },
      {
        id: "pisa-torre-c2",
        type: "count",
        title: "Column Counter",
        description:
          "Count the number of open gallery levels (loggias) with columns that wrap around the outside of the tower.",
      },
    ],
  },
  {
    id: "pisa-duomo",
    citySlug: "pisa",
    name: "Duomo di Pisa",
    type: "church",
    tagline: "The cathedral that inspired the Renaissance before it started",
    history:
      "Built starting in 1063 to celebrate Pisa's naval victory over the Saracens in Palermo, it was the largest cathedral in Europe at the time. The architect Buscheto blended Roman, Byzantine, and Islamic styles into what became known as 'Pisan Romanesque' — a style that influenced architecture across Tuscany. The famous bronze doors and Giovanni Pisano's pulpit are masterpieces.",
    funFacts: [
      "A hanging lamp in the nave supposedly inspired Galileo's theory of pendulum motion when he was a student",
      "The cathedral was funded by treasure looted from the 1063 raid on Palermo",
      "The facade has recycled Roman columns — Pisans literally raided ancient ruins for building materials",
    ],
    timeSlot: "09:00",
    challenges: [
      {
        id: "pisa-duomo-c1",
        type: "observe",
        title: "Galileo's Lamp",
        description:
          "Look for the bronze lamp hanging in the nave — legend says watching it swing inspired Galileo's theory of pendulum motion.",
        hint: "Look up in the central nave, near the center of the ceiling.",
      },
      {
        id: "pisa-duomo-c2",
        type: "find",
        title: "Recycled Roman Columns",
        description:
          "Spot a column in the nave that was recycled from an ancient Roman ruin. Look for differences in stone color and carving style compared to the medieval columns.",
      },
    ],
  },
  {
    id: "pisa-battistero",
    citySlug: "pisa",
    name: "Battistero di San Giovanni",
    type: "monument",
    tagline: "Italy's largest baptistery with magical acoustics",
    history:
      "Started in 1152 in Romanesque style, it took over 200 years to finish. The upper section was completed in Gothic style, giving it a unique two-tone appearance. The interior is intentionally bare to amplify sound — every 30 minutes a custodian demonstrates the extraordinary echo by singing a few notes that reverberate into a full chord.",
    funFacts: [
      "The acoustics create a natural reverb of about 5 seconds — a single voice sounds like a choir",
      "Nicola Pisano's pulpit inside (1260) is considered one of the first masterpieces of Italian sculpture since antiquity",
      "The dome is the largest baptistery dome in the world",
    ],
    timeSlot: "09:30",
    challenges: [
      {
        id: "pisa-battistero-c1",
        type: "observe",
        title: "The Acoustic Miracle",
        description:
          "Wait for the custodian's acoustic demonstration and count how many notes they sing. Listen for how a single voice transforms into a full chord thanks to the 5-second reverb.",
      },
      {
        id: "pisa-battistero-c2",
        type: "find",
        title: "Two Styles, One Building",
        description:
          "Find the transition line where the lower Romanesque arches give way to the upper Gothic pointed arches and pinnacles.",
        hint: "Stand back and look at the exterior — the bottom half has rounded arches and the top half switches to pointed ones.",
      },
    ],
  },
  {
    id: "pisa-camposanto",
    citySlug: "pisa",
    name: "Camposanto Monumentale",
    type: "monument",
    tagline: "A cemetery built on sacred soil from Jerusalem",
    history:
      "Legend says that Archbishop Ubaldo Lanfranchi brought shiploads of sacred soil from Golgotha during the Third Crusade (1203), and the cemetery was built around it. The Gothic cloister contains Roman sarcophagi reused by medieval Pisans and once held magnificent frescoes. Allied bombing in 1944 set the lead roof on fire, melting it onto the frescoes — restoration continues to this day.",
    funFacts: [
      "Bodies buried here were said to decompose in just 24 hours due to the 'holy soil'",
      "The 'Triumph of Death' fresco inspired Liszt to compose his 'Totentanz'",
      "Chains from the harbor of Pisa were hung here as war trophies — they were returned by Florence and Genoa centuries later",
    ],
    timeSlot: "10:00",
    challenges: [
      {
        id: "pisa-camposanto-c1",
        type: "find",
        title: "Second Life Sarcophagus",
        description:
          "Find a Roman sarcophagus that was reused as a medieval tomb. Look for ancient Roman carvings on a tomb bearing a medieval inscription or coat of arms.",
        hint: "Several are displayed along the cloister walls — look for Classical relief carvings that clearly predate the medieval names inscribed on them.",
      },
      {
        id: "pisa-camposanto-c2",
        type: "observe",
        title: "Traces of the Fire",
        description:
          "Look for signs of the 1944 fire damage on the frescoes — areas where the paint is discolored or partially melted from the lead roof fire.",
      },
    ],
  },
  {
    id: "pisa-cavalieri",
    citySlug: "pisa",
    name: "Piazza dei Cavalieri",
    type: "piazza",
    tagline: "From Roman forum to power center to university campus",
    history:
      "This was the political heart of medieval Pisa. In 1562, Cosimo I de' Medici transformed it into the headquarters of the Knights of St. Stephen, a military order he created to fight Mediterranean pirates. The Palazzo della Carovana, redesigned by Vasari, is now home to the Scuola Normale Superiore — one of Italy's most prestigious universities, where Enrico Fermi studied.",
    funFacts: [
      "Count Ugolino della Gherardesca was starved to death in the tower here in 1289 — Dante immortalized him in the Inferno",
      "The Scuola Normale was founded by Napoleon in 1810 as a branch of Paris's École Normale",
      "Vasari's facade features elaborate sgraffito decoration — patterns scratched into plaster",
    ],
    timeSlot: "10:45",
    challenges: [
      {
        id: "pisa-cavalieri-c1",
        type: "find",
        title: "Scratched into Stone",
        description:
          "Spot the sgraffito decoration on the Palazzo della Carovana facade — patterns scratched into plaster to create intricate designs of zodiac signs, figures, and trophies.",
        hint: "Look closely at the facade between and around the windows. The designs are etched into the surface, not painted.",
      },
      {
        id: "pisa-cavalieri-c2",
        type: "find",
        title: "Ugolino's Prison",
        description:
          "Find the Torre della Muda (now called Torre della Fame) where Count Ugolino was starved to death — the episode Dante wrote about in the Inferno.",
        hint: "Look for the clock tower at the corner of the piazza.",
      },
    ],
  },
  {
    id: "pisa-spina",
    citySlug: "pisa",
    name: "Chiesa di Santa Maria della Spina",
    type: "church",
    tagline: "A tiny Gothic jewel on the riverbank",
    history:
      "This miniature church on the banks of the Arno was built in 1230 to house a thorn (spina) from Christ's crown of thorns, brought back from the Crusades. Originally right at the water's edge, it was dismantled stone by stone in 1871 and rebuilt higher up to protect it from flooding. It's one of the finest examples of Italian Gothic architecture.",
    funFacts: [
      "The entire church was moved brick by brick to higher ground in the 19th century",
      "It's only about 10 meters wide — more like a jewel box than a church",
      "The thorn relic was moved to another church — Santa Chiara — and is rarely displayed",
    ],
    timeSlot: "11:30",
    challenges: [
      {
        id: "pisa-spina-c1",
        type: "photo",
        title: "River Reflection",
        description:
          "Take a photo of the church with its reflection in the Arno river. Try to capture the Gothic spires mirrored in the water.",
        hint: "Stand on the Ponte Solferino or the opposite bank for the best angle.",
      },
      {
        id: "pisa-spina-c2",
        type: "count",
        title: "Saints on the Roof",
        description:
          "Count the statues of saints and angels perched along the roofline and pinnacles of the church.",
      },
    ],
  },
];
