import { Spot } from "@/lib/types";

export const romeSpots: Spot[] = [
  // Day 2 - Afternoon in Trastevere (after Aventino/Piramide)
  {
    id: "rome-trastevere",
    citySlug: "rome",
    name: "Trastevere",
    type: "neighborhood",
    tagline: "Rome's most rebellious neighborhood never lost its soul",
    history:
      "Trastevere — literally 'across the Tiber' — was originally home to immigrants, sailors, and Jewish communities in ancient Rome. During the Middle Ages it developed a fiercely independent identity, with residents calling themselves 'noiantri' (we others). Its narrow cobblestone streets, ivy-draped facades, and lively piazzas have made it one of the most beloved neighborhoods in Rome.",
    funFacts: [
      "Every July, Trastevere holds the 'Festa de' Noantri,' a street festival dating back to the 16th century",
      "In ancient Rome this was the neighborhood where foreign merchants and freed slaves settled",
      "The basilica of Santa Maria in Trastevere is believed to be the first church in Rome officially dedicated to the Virgin Mary",
      "Despite its tourist fame, many alleys still feel like a medieval village frozen in time",
    ],
    timeSlot: "16:40",
    challenges: [
      {
        id: "rome-trastevere-c1",
        type: "find",
        title: "Neighborhood Shrine Hunt",
        description:
          "Find a contrada plaque or a small Madonna shrine (edicola) mounted on a wall in the narrow streets.",
        hint: "Look up at corners and above doorways — they're everywhere once you start noticing them",
      },
      {
        id: "rome-trastevere-c2",
        type: "photo",
        title: "The Perfect Ivy Alley",
        description:
          "Take a photo of one of Trastevere's iconic ivy-draped alleyways with hanging laundry or string lights.",
      },
    ],
  },
  {
    id: "rome-trevi",
    citySlug: "rome",
    name: "Fontana di Trevi",
    type: "monument",
    tagline: "Toss a coin and Rome will never let you go",
    history:
      "Completed in 1762 by Nicola Salvi, the Trevi Fountain marks the terminal point of the Aqua Virgo aqueduct, originally built by Agrippa in 19 BC to supply water to Rome's bathhouses. The baroque masterpiece depicts Neptune's chariot being pulled by sea horses through crashing waters. It was immortalized in Fellini's 'La Dolce Vita' when Anita Ekberg waded into the fountain.",
    funFacts: [
      "About 3,000 euros in coins are thrown into the fountain every day — the money is donated to Caritas to fund a supermarket for the poor",
      "Legend says one coin guarantees your return to Rome, two coins bring love, and three bring marriage",
      "The fountain is fed by a 2,000-year-old aqueduct that still works — one of the few ancient Roman water systems still in use",
      "Fellini had to use warm water during filming because Anita Ekberg refused to enter cold water at night",
    ],
    timeSlot: "16:55",
    challenges: [
      {
        id: "rome-trevi-c1",
        type: "photo",
        title: "Coin Toss Moment",
        description:
          "Take a photo throwing a coin over your left shoulder with your right hand into the fountain.",
        hint: "Have someone ready to snap the shot — the toss is quick!",
      },
      {
        id: "rome-trevi-c2",
        type: "find",
        title: "Neptune's Steeds",
        description:
          "Find the two sea horses pulling Neptune's chariot — one is calm and one is wild. Which side is which?",
      },
    ],
  },
  {
    id: "rome-pantheon",
    citySlug: "rome",
    name: "Pantheon",
    type: "monument",
    tagline: "Two thousand years old and still the world's largest unreinforced concrete dome",
    history:
      "Originally built by Agrippa in 27 BC and completely rebuilt by Emperor Hadrian around 125 AD, the Pantheon was a temple to all the gods of Rome. Its dome remained the largest in the world for over 1,300 years. In 609 AD it was consecrated as a Christian church, which is the main reason it survived intact while other Roman temples were stripped for building materials.",
    funFacts: [
      "The oculus — the 9-meter hole at the top of the dome — is the only source of light, and yes, rain does come in through it",
      "The dome's diameter and the height from floor to oculus are exactly equal: 43.3 meters, forming a perfect sphere",
      "Raphael is buried here — his epitaph reads 'Here lies Raphael, by whom Nature feared to be outdone while he lived, and when he died, feared she herself would die'",
      "The concrete in the dome gets progressively lighter toward the top, using pumice stone instead of rock — ancient Roman engineering genius",
    ],
    timeSlot: "17:45",
    challenges: [
      {
        id: "rome-pantheon-c1",
        type: "observe",
        title: "The Light Beam",
        description:
          "Stand under the oculus and watch the beam of light moving across the interior of the dome. Where does it land?",
        hint: "The effect is most dramatic around midday when the sun is high",
      },
      {
        id: "rome-pantheon-c2",
        type: "find",
        title: "Raphael's Resting Place",
        description:
          "Find Raphael's tomb inside the Pantheon. Can you read his epitaph?",
      },
    ],
  },
  {
    id: "rome-navona",
    citySlug: "rome",
    name: "Piazza Navona",
    type: "piazza",
    tagline: "A baroque stage built on the ruins of a Roman racetrack",
    history:
      "Piazza Navona sits directly on top of the Stadium of Domitian, built in 80 AD for athletic competitions — its elongated shape perfectly traces the ancient track. In the 17th century, Pope Innocent X transformed it into a showcase of baroque art, commissioning Bernini's Fountain of the Four Rivers as the centerpiece. Until the 19th century, the piazza was regularly flooded on weekends in August for water games.",
    funFacts: [
      "Bernini and Borromini, bitter rivals, both have works facing each other in this piazza — legend says Bernini's river statue shields its eyes to avoid looking at Borromini's church",
      "The piazza was flooded every August weekend in the 1600s and 1700s so nobles could parade in their carriages through the water",
      "Remains of Domitian's stadium are still visible underground, accessible beneath the north end of the piazza",
      "The Egyptian obelisk in the center was actually made in Rome — it's a Roman copy carved for a temple of Isis",
    ],
    timeSlot: "18:00",
    challenges: [
      {
        id: "rome-navona-c1",
        type: "count",
        title: "River Gods Roll Call",
        description:
          "Count how many river gods are on Bernini's Fountain of the Four Rivers. Can you name which rivers they represent?",
        hint: "Each figure personifies a major river from a different continent known at the time",
      },
      {
        id: "rome-navona-c2",
        type: "observe",
        title: "The Rival's Glare",
        description:
          "Find the river god that appears to shield his eyes from Borromini's church facade. Is the legend about their rivalry true?",
      },
    ],
  },
  {
    id: "rome-piazza-spagna",
    citySlug: "rome",
    name: "Piazza di Spagna",
    type: "piazza",
    tagline: "The most theatrical staircase in Europe — 135 steps of baroque drama",
    history:
      "The Spanish Steps were built between 1723 and 1726 to connect the Bourbon Spanish embassy at the bottom to the French church Trinità dei Monti at the top — a diplomatic compromise sculpted in travertine. Designed by Francesco de Sanctis, the 135 steps cascade in a butterfly pattern that was revolutionary for its time. At the base, Bernini's father Pietro created the Fontana della Barcaccia (Fountain of the Ugly Boat), shaped like a half-sunken ship to solve the problem of low water pressure in the area. The surrounding streets became the center of Rome's Grand Tour culture, attracting Keats, Shelley, and Byron.",
    funFacts: [
      "John Keats died in a small room overlooking the Steps in 1821 — the building is now a museum dedicated to the Romantic poets",
      "The 'Barcaccia' fountain is shaped like a leaking boat because the water pressure was too low for a tall fountain — Bernini's father turned a limitation into art",
      "Sitting on the Steps has been banned since 2019 — violators face fines up to €400",
      "The Steps were built to connect a Spanish embassy to a French church, making them one of Europe's most elegant diplomatic compromises",
    ],
    timeSlot: "17:15",
    challenges: [
      {
        id: "rome-piazza-spagna-c1",
        type: "find",
        title: "The Sinking Boat",
        description:
          "Find the Fontana della Barcaccia at the base of the Steps. Why is the boat half-sunken?",
        hint: "The low water pressure in this area meant a traditional tall fountain was impossible — the 'sinking' design was the creative solution",
      },
      {
        id: "rome-piazza-spagna-c2",
        type: "photo",
        title: "View From the Top",
        description:
          "Climb to the top of the Steps at Trinità dei Monti and take a photo of the panoramic view down over the piazza and across Rome's rooftops.",
      },
    ],
  },
  {
    id: "rome-campo-fiori",
    citySlug: "rome",
    name: "Campo de' Fiori",
    type: "piazza",
    tagline: "A flower market by day, Rome's living room by night — with a dark secret at its center",
    history:
      "Campo de' Fiori ('Field of Flowers') was a meadow in the Middle Ages before being paved in the 15th century. Unlike most Roman piazzas, it has no church — instead, it served as a site for public executions. The most famous victim was philosopher Giordano Bruno, burned at the stake here in 1600 for heresy after proposing that the universe was infinite and that stars were distant suns with their own planets. His hooded bronze statue has stood defiantly at the center since 1889, facing the Vatican. By morning the piazza hosts one of Rome's oldest open-air markets, and by night it transforms into a lively social hub.",
    funFacts: [
      "Giordano Bruno was burned here in 1600 for suggesting the universe was infinite — the Church only formally expressed 'regret' in 2000, 400 years later",
      "It is the only major piazza in central Rome without a church, because the Church refused to allow one near a site of papal executions",
      "The morning flower and food market has been running continuously since 1869",
      "The statue of Bruno deliberately faces the Vatican as a symbol of intellectual defiance against religious censorship",
    ],
    timeSlot: "18:20",
    challenges: [
      {
        id: "rome-campo-fiori-c1",
        type: "find",
        title: "The Defiant Philosopher",
        description:
          "Find the hooded statue of Giordano Bruno at the center of the piazza. Which direction is he facing — and why?",
        hint: "He faces the Vatican as a deliberate symbol of intellectual defiance",
      },
      {
        id: "rome-campo-fiori-c2",
        type: "observe",
        title: "No Church in Sight",
        description:
          "Look around the piazza — unlike every other major square in Rome, there is no church here. Can you figure out why?",
      },
    ],
  },

  // Day 2 - Ancient Rome
  {
    id: "rome-colosseo",
    citySlug: "rome",
    name: "Colosseo",
    type: "monument",
    tagline: "Where 50,000 Romans decided who lived and who died",
    history:
      "Built between 70 and 80 AD under emperors Vespasian and Titus, the Colosseum could seat 50,000 spectators who came to watch gladiatorial combat, animal hunts, and even mock naval battles. The Flavian Amphitheatre — its official name — was a political tool: free entertainment to keep the populace loyal. After the fall of Rome, it was used as a quarry, fortress, and even a cemetery before becoming the iconic ruin we know today.",
    funFacts: [
      "The opening games in 80 AD lasted 100 days and saw over 9,000 animals killed",
      "A retractable canvas roof called the 'velarium' shaded spectators — it required 1,000 sailors from the Roman navy to operate",
      "Two-thirds of the original structure is missing — much of the marble was stripped to build St. Peter's Basilica and other Roman palaces",
      "The arena floor concealed an elaborate underground network of tunnels, animal cages, and elevators called the hypogeum",
    ],
    timeSlot: "09:30",
    challenges: [
      {
        id: "rome-colosseo-c1",
        type: "find",
        title: "Vomitoria Numbers",
        description:
          "Find the numbered entrance arches (vomitoria) on the outside of the Colosseum. What is the highest number you can spot?",
        hint: "Look for Roman numerals carved above the ground-level arches on the outer wall",
      },
      {
        id: "rome-colosseo-c2",
        type: "observe",
        title: "The Hypogeum Below",
        description:
          "Look down into the exposed underground level (hypogeum) and spot the corridors where animals and gladiators waited before being lifted into the arena.",
      },
    ],
  },
  {
    id: "rome-arco-constantino",
    citySlug: "rome",
    name: "Arco di Constantino",
    type: "monument",
    tagline: "A greatest-hits album of Roman imperial sculpture",
    history:
      "Erected in 315 AD to celebrate Constantine's victory over Maxentius at the Battle of Milvian Bridge, this is the largest and best-preserved triumphal arch in Rome. Much of its decoration was recycled from monuments to earlier emperors — Trajan, Hadrian, and Marcus Aurelius — making it a collage of Rome's greatest sculptural achievements across three centuries.",
    funFacts: [
      "The arch recycles sculptures from at least three earlier emperors — ancient Roman 'remixing' at its finest",
      "Constantine's victory at the Milvian Bridge in 312 AD led him to legalize Christianity, changing the course of Western civilization",
      "The recycled reliefs show noticeably higher artistic quality than the newly carved Constantine-era panels, revealing the decline in Roman craftsmanship",
    ],
    timeSlot: "10:45",
    challenges: [
      {
        id: "rome-arco-constantino-c1",
        type: "find",
        title: "Spot the Recycled Art",
        description:
          "Find the reliefs recycled from older emperors — they have a noticeably different artistic style from the Constantine-era panels. Can you tell which are older?",
        hint: "The round medallions (tondi) are from Hadrian's era and show much finer detail than the frieze below them",
      },
    ],
  },
  {
    id: "rome-foro-romano",
    citySlug: "rome",
    name: "Foro Romano",
    type: "monument",
    tagline: "The original downtown — where democracy, religion, and commerce collided",
    history:
      "For over a thousand years, the Roman Forum was the beating heart of public life: elections, trials, triumphal processions, and commerce all happened here. Julius Caesar was cremated in this very space in 44 BC, and Mark Antony delivered his famous funeral speech from the Rostra. After the fall of Rome, the Forum was buried under meters of debris and used as a cow pasture — locals called it 'Campo Vaccino' — until excavations began in the 18th century.",
    funFacts: [
      "The Forum was used as a cattle grazing field for centuries — it was called 'Campo Vaccino' (Cow Field) until the 1800s",
      "You can still see the spot where Julius Caesar's body was cremated — visitors leave flowers there to this day",
      "The Temple of Saturn served as the state treasury — 'aerarium' — and its eight surviving columns are among the Forum's most iconic",
      "The Cloaca Maxima, one of the world's earliest sewer systems, runs underneath and still drains into the Tiber today",
    ],
    timeSlot: "10:50",
    challenges: [
      {
        id: "rome-foro-romano-c1",
        type: "photo",
        title: "Walk the Via Sacra",
        description:
          "Take a photo standing on the Via Sacra, the ancient road where triumphal processions marched through the Forum.",
        hint: "The Via Sacra runs from the Arch of Titus down through the center of the Forum",
      },
      {
        id: "rome-foro-romano-c2",
        type: "find",
        title: "Caesar's Cremation Spot",
        description:
          "Find the spot where Julius Caesar's body was cremated. Do you see any flowers left by visitors?",
      },
    ],
  },
  {
    id: "rome-palatino",
    citySlug: "rome",
    name: "Monte Palatino",
    type: "viewpoint",
    tagline: "Where Romulus founded a city and emperors built their palaces",
    history:
      "According to legend, this is where Romulus and Remus were found by the she-wolf and where Romulus founded Rome in 753 BC. It became the most desirable address in Rome — Augustus, Tiberius, and Domitian all built lavish palaces here. The English word 'palace' actually derives from 'Palatine.' From the top, you get sweeping views over the Forum on one side and the Circus Maximus on the other.",
    funFacts: [
      "The word 'palace' in English, 'palazzo' in Italian, and 'palais' in French all derive from 'Palatine'",
      "In 2007, archaeologists discovered a cave believed to be the Lupercal — the legendary grotto where the she-wolf nursed Romulus and Remus",
      "Emperor Domitian's palace had polished marble walls so he could see reflections of anyone approaching behind him — he was paranoid about assassination",
      "Augustus chose to live here in a modest house even though he could afford a grand palace — the remains of his home still have original frescoes",
    ],
    timeSlot: "12:20",
    challenges: [
      {
        id: "rome-palatino-c1",
        type: "observe",
        title: "Circus Maximus Panorama",
        description:
          "Find the viewpoint overlooking the Circus Maximus from the Palatine Hill. Can you trace the full oval shape of the ancient racetrack below?",
      },
      {
        id: "rome-palatino-c2",
        type: "find",
        title: "Domitian's Paranoid Walls",
        description:
          "Find the remains of Domitian's palace. Look for traces of the polished marble walls he used as mirrors to spot assassins behind him.",
        hint: "The Domus Augustana section contains the palace's private quarters",
      },
    ],
  },
  {
    id: "rome-vittoriano",
    citySlug: "rome",
    name: "Vittoriano",
    type: "monument",
    tagline: "Love it or hate it — this colossal white marble wedding cake united a nation",
    history:
      "The Altare della Patria (Altar of the Fatherland) was built between 1885 and 1935 to honor Victor Emmanuel II, the first king of unified Italy. Designed by Giuseppe Sacconi in gleaming white Botticino marble, the monument houses the Tomb of the Unknown Soldier, guarded by an eternal flame since 1921. Romans either love or hate it — critics call it the 'macchina da scrivere' (typewriter) or 'torta nuziale' (wedding cake) because its bombastic neoclassical style clashes with the ancient ruins around it. The rooftop terrace offers a 360-degree panorama rivaling any viewpoint in Rome.",
    funFacts: [
      "Romans nicknamed it the 'typewriter' and the 'wedding cake' because of its blocky white marble design that sticks out against the surrounding ochre and terracotta of Rome",
      "The equestrian statue of Victor Emmanuel II is so large that during construction, 20 workers had dinner inside the horse's belly",
      "The Botticino marble was chosen specifically because it would NOT darken with age like travertine, keeping the monument blindingly white forever",
      "The eternal flame at the Tomb of the Unknown Soldier has been burning continuously since 1921 and is guarded 24/7 by soldiers in full dress uniform",
    ],
    timeSlot: "13:10",
    challenges: [
      {
        id: "rome-vittoriano-c1",
        type: "observe",
        title: "The Eternal Flame",
        description:
          "Find the Tomb of the Unknown Soldier and the eternal flame at the base of the monument. Watch the guards in their ceremonial uniforms.",
      },
      {
        id: "rome-vittoriano-c2",
        type: "photo",
        title: "Wedding Cake or Masterpiece?",
        description:
          "Take a photo that captures the massive scale of the Vittoriano compared to the ancient ruins around it. What do you think — does it fit or clash?",
      },
    ],
  },
  {
    id: "rome-bocca-verita",
    citySlug: "rome",
    name: "Bocca della Verità",
    type: "monument",
    tagline: "Stick your hand in the mouth of truth — if you dare",
    history:
      "This ancient marble disc, carved with the face of a river god or possibly the god Oceanus, sits in the portico of the church Santa Maria in Cosmedin. Dating to the 1st century AD, it was probably an ancient drain cover from a nearby temple. Medieval legend transformed it into a lie detector: if you put your hand in the mouth and told a lie, it would bite it off. The legend was immortalized in the 1953 film 'Roman Holiday' when Gregory Peck pretended to lose his hand, terrifying Audrey Hepburn.",
    funFacts: [
      "In 'Roman Holiday' (1953), Gregory Peck improvised the scene where he pretends the Mouth bites his hand off — Audrey Hepburn's scream of terror was completely genuine",
      "It was most likely an ancient manhole cover or drain for a nearby Roman temple, repurposed into a medieval lie detector",
      "In the Middle Ages, it was rumored that a priest hid behind the disc with a scorpion to sting the hands of suspected liars",
      "The church Santa Maria in Cosmedin behind it has a beautiful 8th-century interior and a skull said to be that of Saint Valentine",
    ],
    timeSlot: "13:30",
    challenges: [
      {
        id: "rome-bocca-verita-c1",
        type: "photo",
        title: "Hand in the Mouth",
        description:
          "Take a photo with your hand inside the Bocca della Verità — the classic Roman Holiday shot. Are you telling the truth?",
      },
      {
        id: "rome-bocca-verita-c2",
        type: "find",
        title: "Saint Valentine's Skull",
        description:
          "Step inside the church Santa Maria in Cosmedin and find the relic said to be the skull of Saint Valentine.",
        hint: "It's displayed in a small chapel on the left side of the church",
      },
    ],
  },
  {
    id: "rome-circo-massimo",
    citySlug: "rome",
    name: "Circo Massimo",
    type: "monument",
    tagline: "The largest stadium ever built — and it held a quarter million screaming fans",
    history:
      "The Circus Maximus was Rome's oldest and largest venue for chariot racing, capable of seating an estimated 250,000 spectators. Racing here dates back to the 6th century BC under the Etruscan kings. The track was 621 meters long, and races of seven laps were the standard. Chariot racing was Rome's true national obsession — far more popular than gladiatorial combat — with rival fan factions that occasionally sparked deadly riots.",
    funFacts: [
      "At 250,000 seats, it was larger than any modern stadium — the biggest today hold around 100,000",
      "Chariot racing fans formed color-coded factions — Blues, Greens, Reds, and Whites — like modern football ultras",
      "The spina (central barrier) held an Egyptian obelisk that now stands in Piazza del Popolo",
      "Ben-Hur's famous chariot race was inspired by the Circus Maximus",
    ],
    timeSlot: "13:35",
    challenges: [
      {
        id: "rome-circo-massimo-c1",
        type: "observe",
        title: "Feel the Scale",
        description:
          "Stand at one end of the Circus Maximus and look to the other. Appreciate the full 600-meter length — this held 250,000 spectators.",
      },
      {
        id: "rome-circo-massimo-c2",
        type: "find",
        title: "The Missing Obelisk",
        description:
          "Find the spot where the spina (central barrier) once stood. The obelisk that was here now stands in Piazza del Popolo — can you picture it?",
        hint: "Look for the slightly raised area running down the center of the track",
      },
    ],
  },
  {
    id: "rome-giardino-aranci",
    citySlug: "rome",
    name: "Giardino degli Aranci",
    type: "viewpoint",
    tagline: "Rome's sweetest panorama, framed by bitter orange trees",
    history:
      "Officially called Parco Savello, this garden sits atop the Aventine Hill on the grounds of a 13th-century fortress built by the Savelli family. The bitter orange trees that give it its popular name were planted in the 1930s, said to descend from a tree brought from Spain by Saint Dominic in 1220. The terrace offers one of the most photographed views in Rome, stretching from Trastevere to St. Peter's dome.",
    funFacts: [
      "The oranges are bitter Seville oranges — beautiful but inedible straight from the tree",
      "Saint Dominic supposedly planted the first orange tree here in 1220, and a descendant still grows in the adjacent cloister of Santa Sabina",
      "The view from the terrace captures seven of Rome's most iconic landmarks in a single panorama",
    ],
    timeSlot: "15:05",
    challenges: [
      {
        id: "rome-giardino-aranci-c1",
        type: "photo",
        title: "St Peter's Through the Trees",
        description:
          "Take a photo of St. Peter's dome framed by the orange trees from the garden terrace.",
      },
      {
        id: "rome-giardino-aranci-c2",
        type: "count",
        title: "Landmark Spotting",
        description:
          "From the terrace, count how many domes and bell towers you can spot in the panorama.",
        hint: "The view supposedly captures seven major landmarks — can you find them all?",
      },
    ],
  },
  {
    id: "rome-buco-serratura",
    citySlug: "rome",
    name: "Buco della Serratura",
    type: "other",
    tagline: "One keyhole, three countries, one perfect dome",
    history:
      "The keyhole belongs to the gate of the Priory of the Knights of Malta on the Aventine Hill. Piranesi redesigned the piazza and gateway in 1765, and whether by accident or genius, the keyhole frames St. Peter's dome perfectly at the end of a tree-lined garden path. Looking through it, you technically see three sovereign states at once: the Knights of Malta property, Italy, and Vatican City.",
    funFacts: [
      "You see three countries through one tiny hole — the Priory of Malta (sovereign territory), Italy, and Vatican City",
      "The piazza was redesigned by Giovanni Battista Piranesi, better known for his dramatic etchings of Roman ruins",
      "The Knights of Malta still exist today as a sovereign entity with their own passports, stamps, and license plates",
      "There is almost always a queue of people patiently waiting to peer through a keyhole — one of Rome's most charmingly absurd sights",
    ],
    timeSlot: "15:25",
    challenges: [
      {
        id: "rome-buco-serratura-c1",
        type: "photo",
        title: "The Keyhole Shot",
        description:
          "Take a photo through the keyhole showing St. Peter's dome perfectly framed at the end of the garden path. Three countries in one shot!",
        hint: "Hold your phone camera right up to the keyhole — it takes a steady hand",
      },
    ],
  },
  {
    id: "rome-santa-sabina",
    citySlug: "rome",
    name: "Basilica di Santa Sabina",
    type: "church",
    tagline: "Step inside a 5th-century church that barely changed in 1,600 years",
    history:
      "Built between 422 and 432 AD on the Aventine Hill, Santa Sabina is one of the best-preserved early Christian basilicas in Rome. Its soaring nave with Corinthian columns was taken from a nearby Roman temple. The church was given to the Dominican Order in 1222 by Pope Honorius III, and Saint Dominic himself established the order's headquarters here. A 13th-century restoration stripped away baroque additions, returning it to its original austere beauty.",
    funFacts: [
      "The wooden doors at the entrance date to the 5th century and contain one of the earliest known depictions of the Crucifixion in Christian art",
      "The 24 Corinthian columns lining the nave were recycled from a Roman temple that once stood nearby",
      "A small round stone in the nave floor is said to be a piece of basalt hurled by the Devil at Saint Dominic while he prayed",
      "The orange tree in the cloister is said to have been planted by Saint Dominic himself around 1220",
    ],
    timeSlot: "15:40",
    challenges: [
      {
        id: "rome-santa-sabina-c1",
        type: "find",
        title: "Earliest Crucifixion",
        description:
          "Find the oldest known depiction of the Crucifixion in Christian art on the 5th-century wooden entrance doors.",
        hint: "It's a small panel on the upper-left section of the doors — easy to miss if you don't look carefully",
      },
      {
        id: "rome-santa-sabina-c2",
        type: "find",
        title: "The Devil's Stone",
        description:
          "Find the small round black stone in the nave floor that the Devil supposedly hurled at Saint Dominic while he was praying.",
      },
    ],
  },
  {
    id: "rome-piramide",
    citySlug: "rome",
    name: "Piramide di Cestio",
    type: "monument",
    tagline: "A Roman politician's Egyptian dream preserved in marble",
    history:
      "Built around 12 BC as a tomb for Gaius Cestius, a Roman magistrate, this 36-meter pyramid reflects the Egyptian craze that swept Rome after the conquest of Egypt in 30 BC. It was built in just 330 days, as stipulated in Cestius's will. In the 3rd century, it was incorporated into the Aurelian Walls, which is why it survived — too useful as a fortification to be dismantled.",
    funFacts: [
      "It is steeper than Egyptian pyramids because Romans likely copied from Nubian pyramids, which have sharper angles",
      "The burial chamber inside has frescoes depicting winged figures, but it was looted centuries ago",
      "Next to it lies the Protestant Cemetery, where Keats and Shelley are buried — Shelley called it 'the most beautiful and solemn cemetery I ever beheld'",
    ],
    timeSlot: "16:00",
    challenges: [
      {
        id: "rome-piramide-c1",
        type: "observe",
        title: "Steeper Than Egypt",
        description:
          "Notice how much steeper this pyramid is compared to the Egyptian ones. The sharp angle comes from Nubian pyramid designs, not Egyptian.",
      },
      {
        id: "rome-piramide-c2",
        type: "find",
        title: "Built Into the Walls",
        description:
          "Find where the pyramid is incorporated into the Aurelian Walls. Can you see the ancient city wall extending from either side?",
      },
    ],
  },
  {
    id: "rome-gianicolo",
    citySlug: "rome",
    name: "Gianicolo",
    type: "viewpoint",
    tagline: "Rome's best panorama — and a cannon fires every day at noon to prove it",
    history:
      "The Janiculum Hill is not one of Rome's original seven hills, but it offers arguably the finest view of them all. It was a key battleground in 1849 when Garibaldi and his volunteers defended the short-lived Roman Republic against French troops. The hilltop promenade is lined with busts of Garibaldi's fighters, and his massive equestrian statue dominates the summit. Every day at noon, a cannon fires from the terrace — a tradition since 1847 to synchronize the city's church bells.",
    funFacts: [
      "A cannon has been fired from the Janiculum at noon every day since 1847 — originally to synchronize all the church bells in Rome",
      "The hill is named after the god Janus, the two-faced deity of beginnings and endings",
      "Garibaldi's wife Anita, who fought beside him, has her own dramatic equestrian statue nearby — she is depicted brandishing a pistol while holding her baby",
      "On a clear day you can see all the way to the Alban Hills, over 20 kilometers away",
    ],
    timeSlot: "17:10",
    challenges: [
      {
        id: "rome-gianicolo-c1",
        type: "observe",
        title: "Dome Identification",
        description:
          "Try to identify the major domes visible in the panorama below. How many can you name?",
        hint: "Look for the Pantheon's flat dome, Sant'Ivo alla Sapienza's spiral, and the Synagogue's square-topped dome",
      },
      {
        id: "rome-gianicolo-c2",
        type: "find",
        title: "Anita's Statue",
        description:
          "Find the equestrian statue of Garibaldi's wife Anita nearby. She's depicted brandishing a pistol while holding her baby.",
      },
    ],
  },

  // Day 3 - Vatican area + Centro Storico
  {
    id: "rome-piazza-san-pietro",
    citySlug: "rome",
    name: "Piazza San Pietro",
    type: "piazza",
    tagline: "Bernini's stone embrace that welcomes the entire world",
    history:
      "Designed by Gian Lorenzo Bernini between 1656 and 1667, St. Peter's Square was conceived as two great semicircular colonnades symbolizing the 'motherly arms of the Church' reaching out to embrace the faithful. The 284 columns and 88 pilasters are arranged in four rows, topped by 140 statues of saints. At the center stands a 25-meter Egyptian obelisk that once decorated the circus where, according to tradition, Saint Peter was crucified.",
    funFacts: [
      "If you stand on one of the two circular paving stones between the obelisk and the fountains, the four rows of columns magically align into a single row",
      "The obelisk in the center was brought from Egypt by Caligula in 37 AD — it once stood in Nero's circus where Saint Peter was martyred",
      "Moving the obelisk to the piazza in 1586 required 900 workers, 140 horses, and 47 cranes — and the pope threatened death to anyone who spoke during the operation",
      "The square can hold over 300,000 people and is technically in Vatican City — stepping onto it means leaving Italy",
    ],
    timeSlot: "08:50",
    challenges: [
      {
        id: "rome-piazza-san-pietro-c1",
        type: "find",
        title: "The Magic Alignment",
        description:
          "Find one of the two circular paving stones between the obelisk and the fountains. Stand on it and watch all four rows of columns magically align into a single row.",
        hint: "Look for a round marble disc set into the ground — there's one on each side of the obelisk",
      },
      {
        id: "rome-piazza-san-pietro-c2",
        type: "observe",
        title: "Three Countries, One Square",
        description:
          "Step onto the piazza and realize you've just left Italy. Look for the boundary markers showing where Vatican City begins.",
      },
    ],
  },
  {
    id: "rome-san-pietro",
    citySlug: "rome",
    name: "Basilica di San Pietro",
    type: "church",
    tagline: "The largest church on Earth, built over the bones of a fisherman",
    history:
      "St. Peter's Basilica stands on the site where Saint Peter, the first pope, was buried after his crucifixion around 64 AD. Construction of the current basilica began in 1506 and took 120 years, involving architects including Bramante, Raphael, Michelangelo, and Bernini. Michelangelo designed the iconic dome at age 71, though he did not live to see it completed. Inside, Bernini's baldachin over the papal altar stands 29 meters tall, cast from bronze stripped from the Pantheon's portico.",
    funFacts: [
      "Michelangelo sculpted the Pietà at age 24 — it's the only work he ever signed, after overhearing someone attribute it to another sculptor",
      "Lines on the nave floor mark the lengths of other large churches to show how much bigger St. Peter's is than all of them",
      "The bronze for Bernini's baldachin was taken from the Pantheon's portico — Romans joked 'what the barbarians didn't do, the Barberini did'",
      "In 1950, excavations beneath the basilica uncovered bones widely believed to be Saint Peter's, wrapped in purple and gold cloth",
    ],
    timeSlot: "09:10",
    challenges: [
      {
        id: "rome-san-pietro-c1",
        type: "find",
        title: "Michelangelo's Signature",
        description:
          "Find Michelangelo's signature on the Pieta. It's carved on the sash running across the Virgin Mary's chest — the only work he ever signed.",
        hint: "The Pieta is in the first chapel on the right as you enter. Look closely at the diagonal sash",
      },
      {
        id: "rome-san-pietro-c2",
        type: "find",
        title: "How Big Is This Church?",
        description:
          "Find the brass markers on the nave floor that show the lengths of other major churches. Which famous church comes closest to St. Peter's in size?",
      },
    ],
  },
  {
    id: "rome-castel-santangelo",
    citySlug: "rome",
    name: "Castel Sant'Angelo",
    type: "monument",
    tagline: "From emperor's tomb to papal fortress to Puccini's dramatic finale",
    history:
      "Originally built by Emperor Hadrian in 139 AD as a mausoleum for himself and his family, this cylindrical fortress has served as a military garrison, papal residence, prison, and museum over nearly 2,000 years. A secret elevated passageway called the 'Passetto di Borgo' connects it directly to the Vatican, allowing popes to escape during sieges. Pope Clement VII famously fled through it during the Sack of Rome in 1527.",
    funFacts: [
      "Its name comes from a legend that Archangel Michael appeared atop the fortress in 590 AD, sheathing his sword to signal the end of a plague",
      "The Passetto di Borgo — the secret escape tunnel to the Vatican — saved Pope Clement VII's life during the brutal Sack of Rome in 1527",
      "In Puccini's opera 'Tosca,' the heroine leaps to her death from the castle's ramparts in the final act",
      "Hadrian's ashes were originally kept in the central chamber, but were scattered during the Visigoth sack of 410 AD",
    ],
    timeSlot: "10:30",
    challenges: [
      {
        id: "rome-castel-santangelo-c1",
        type: "find",
        title: "The Archangel on Top",
        description:
          "Spot the statue of Archangel Michael sheathing his sword on the very top of the castle. He appeared there in 590 AD to signal the end of a plague.",
      },
      {
        id: "rome-castel-santangelo-c2",
        type: "find",
        title: "The Papal Escape Route",
        description:
          "Look for the Passetto di Borgo — the elevated secret passageway connecting the castle to the Vatican. Can you trace its path along the wall?",
        hint: "Look towards the Vatican — it's a covered corridor running along the top of a wall",
      },
    ],
  },
  {
    id: "rome-ponte-santangelo",
    citySlug: "rome",
    name: "Ponte Sant'Angelo",
    type: "bridge",
    tagline: "Cross a bridge guarded by Bernini's angels and 2,000 years of history",
    history:
      "Originally built by Emperor Hadrian in 134 AD to connect his mausoleum to the city center, this bridge has been in continuous use for nearly two millennia. In 1668, Pope Clement IX commissioned Bernini to redesign it with ten angel statues, each holding an instrument of Christ's Passion. Bernini personally carved two of the angels, which the pope found so beautiful he replaced them with copies and kept the originals in a church.",
    funFacts: [
      "The three central arches are original Roman construction from 134 AD — still standing after nearly 1,900 years",
      "Bernini's two original angel sculptures were considered too beautiful for outdoor display and were moved to the church of Sant'Andrea delle Fratte",
      "During the Holy Year of 1450, so many pilgrims crowded the bridge that it collapsed, killing around 200 people",
      "For centuries, the bridge was used to display the bodies of executed criminals as a warning to the public",
    ],
    timeSlot: "10:50",
    challenges: [
      {
        id: "rome-ponte-santangelo-c1",
        type: "count",
        title: "Angel Census",
        description:
          "Count how many angel sculptures line the bridge. Each one holds a different instrument of Christ's Passion — can you identify any?",
      },
      {
        id: "rome-ponte-santangelo-c2",
        type: "observe",
        title: "Roman Foundations",
        description:
          "Look at the three central arches of the bridge — these are original Roman construction from 134 AD, nearly 1,900 years old.",
      },
    ],
  },
  {
    id: "rome-portico-ottavia",
    citySlug: "rome",
    name: "Portico di Ottavia & Ghetto Ebraico",
    type: "monument",
    tagline: "Two thousand years of Jewish Rome, framed by crumbling Roman arches",
    history:
      "The Portico di Ottavia, built by Emperor Augustus around 27 BC and dedicated to his sister Octavia, once formed a monumental entrance to a vast colonnade housing temples to Jupiter and Juno. After centuries of decay, a medieval fish market was installed directly inside the ancient ruins — a characteristic Roman habit of repurposing the old. The surrounding Ghetto Ebraico is one of the oldest continuous Jewish settlements in the world, established in 1555 when Pope Paul IV confined Rome's Jews to this bend in the Tiber. The Great Synagogue of Rome (1904) stands as the community's proud landmark.",
    funFacts: [
      "A medieval fish market operated inside the ancient portico for centuries — vendors were required by law to donate the head of any fish larger than the portico arch to local authorities",
      "The Jewish community of Rome is the oldest in Europe, predating the destruction of Jerusalem in 70 AD — Roman Jews descend from people who were already there before the diaspora",
      "The Synagogue of Rome has a distinctly un-European square dome, deliberately designed to stand apart from the city's many Catholic domes",
      "During WWII, the Nazis demanded 50 kg of gold from the Jewish community in 48 hours as a ransom — it was delivered, and the community was still deported anyway",
    ],
    timeSlot: "11:45",
    challenges: [
      {
        id: "rome-portico-ottavia-c1",
        type: "observe",
        title: "Ancient Meets Medieval",
        description:
          "Find the point where the medieval church of Sant'Angelo in Pescheria was built directly into the ancient Roman portico — spot the original Roman columns embedded in the later structure.",
        hint: "Look at the facade of the church at the entrance to the Ghetto — Roman columns and medieval brickwork merge into a single wall.",
      },
      {
        id: "rome-portico-ottavia-c2",
        type: "find",
        title: "The Square Dome",
        description:
          "Find the Great Synagogue of Rome and spot its distinctive square dome — deliberately designed to look unlike any Catholic church in the city.",
      },
    ],
  },
  {
    id: "rome-isola-tiberina",
    citySlug: "rome",
    name: "Isola Tiberina",
    type: "neighborhood",
    tagline: "A tiny island of healing in the middle of Rome's river",
    history:
      "According to legend, this island formed when Romans threw the grain harvest of the hated Tarquin kings into the Tiber after expelling them in 509 BC, and silt accumulated around it. In 291 BC, a Temple to Aesculapius, the god of healing, was built here after a sacred snake from the Greek sanctuary at Epidaurus supposedly swam to the island. The healing tradition continues — the Fatebenefratelli hospital has operated on the island since 1584.",
    funFacts: [
      "The island was shaped to look like a ship in ancient times, with a marble prow and obelisk-mast — remains of the 'prow' are still visible",
      "A hospital has existed here for over 450 years, continuing the island's ancient association with healing",
      "The Ponte Fabricio connecting the island to the city center was built in 62 BC and is the oldest intact bridge in Rome",
      "Every summer, an outdoor cinema festival transforms the island's riverbanks into a movie theater under the stars",
    ],
    timeSlot: "12:55",
    challenges: [
      {
        id: "rome-isola-tiberina-c1",
        type: "observe",
        title: "The Ship Prow",
        description:
          "Look for the carved stone ship prow on the island's embankment — the ancient Romans shaped the island to look like a vessel.",
        hint: "Walk to the downstream (southern) tip of the island and look at the stone facing the river",
      },
      {
        id: "rome-isola-tiberina-c2",
        type: "find",
        title: "Rome's Oldest Bridge",
        description:
          "Cross the Ponte Fabricio connecting the island to the city center. Built in 62 BC, it's the oldest intact bridge in Rome. Find the inscription with the builder's name.",
      },
    ],
  },
  {
    id: "rome-santa-maria-maggiore",
    citySlug: "rome",
    name: "Basilica di Santa Maria Maggiore",
    type: "church",
    tagline: "A snowfall in August built Rome's greatest Marian church",
    history:
      "One of the four major papal basilicas in Rome, Santa Maria Maggiore was built in the 5th century after Pope Liberius had a vision of the Virgin Mary telling him to build a church where snow would fall. On August 5, 358 AD, snow miraculously fell on the Esquiline Hill, and the pope traced the church's outline in the snow. The interior preserves stunning 5th-century mosaics — among the oldest in any Roman church — and the ceiling is gilded with the first gold brought from the Americas by Columbus.",
    funFacts: [
      "Every August 5th, white flower petals are dropped from the ceiling to re-enact the miraculous snowfall of 358 AD",
      "The ceiling was gilded with gold that Columbus brought back from the New World, a gift from Ferdinand and Isabella of Spain",
      "Beneath the altar lie five wooden boards believed to be fragments of the manger from Christ's birthplace in Bethlehem",
      "The 5th-century mosaics along the nave are among the most important early Christian artworks in existence",
    ],
    timeSlot: "08:30",
    challenges: [
      {
        id: "rome-santa-maria-maggiore-c1",
        type: "observe",
        title: "Columbus's Gold",
        description:
          "Look up at the gilded ceiling and take it in — it's covered in the first gold Christopher Columbus brought back from the Americas.",
      },
      {
        id: "rome-santa-maria-maggiore-c2",
        type: "find",
        title: "Ancient Mosaics",
        description:
          "Find the 5th-century mosaics along the nave walls. These are among the oldest Christian artworks in any Roman church.",
        hint: "They run along the upper walls above the columns — bring binoculars or zoom in with your phone camera",
      },
    ],
  },
  {
    id: "rome-san-clemente",
    citySlug: "rome",
    name: "Basilica di San Clemente",
    type: "church",
    tagline: "Three civilizations stacked on top of each other like a time-travel lasagna",
    history:
      "San Clemente is Rome's most vivid example of historical layering. The current 12th-century church sits directly on top of a 4th-century church, which itself was built over a 1st-century Roman house containing a Mithraic temple. You can descend through all three levels, moving from medieval mosaics to early Christian frescoes to the eerie underground sound of a subterranean river. The lowest level dates to the Great Fire of Rome in 64 AD.",
    funFacts: [
      "The 1st-century Mithraeum in the basement still has its carved altar showing Mithras slaying the bull — one of the best-preserved in Rome",
      "You can hear an underground river flowing beneath the lowest level — it runs into the ancient Roman sewer system",
      "The 4th-century frescoes include one of the oldest examples of written Italian — a comic strip-like scene with surprisingly rude dialogue",
      "Irish Dominican monks have been the custodians of this church since 1667 and were the ones who excavated the lower levels",
    ],
    timeSlot: "09:45",
    challenges: [
      {
        id: "rome-san-clemente-c1",
        type: "observe",
        title: "Time-Travel Descent",
        description:
          "As you descend through the three layers, notice how the architecture changes at each level — from 12th-century medieval to 4th-century early Christian to 1st-century Roman.",
      },
      {
        id: "rome-san-clemente-c2",
        type: "find",
        title: "The Underground River",
        description:
          "Reach the lowest level and listen for the sound of the underground river flowing beneath. It still drains into the ancient Roman sewer system.",
        hint: "Stand quietly at the deepest point — you'll hear the water running beneath your feet",
      },
    ],
  },
];
