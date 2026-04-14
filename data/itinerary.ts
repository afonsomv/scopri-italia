import { City } from "@/lib/types";

export interface DayInfo {
  day: number;
  date: string;
  label: string;
  spotIds: string[];
}

// Maps spots to their itinerary day for the day-view grouping
export const daySchedule: Record<string, DayInfo[]> = {
  pisa: [
    {
      day: 1,
      date: "Apr 15",
      label: "Day 1 — Arrival Evening",
      spotIds: [], // Evening walk, no specific spots with quizzes
    },
    {
      day: 2,
      date: "Apr 16",
      label: "Day 2 — Morning in Pisa",
      spotIds: [
        "pisa-torre",
        "pisa-duomo",
        "pisa-battistero",
        "pisa-camposanto",
        "pisa-cavalieri",
        "pisa-spina",
      ],
    },
  ],
  lucca: [
    {
      day: 2,
      date: "Apr 16",
      label: "Day 2 — Afternoon in Lucca",
      spotIds: [
        "lucca-muralhas",
        "lucca-anfiteatro",
        "lucca-guinigi",
        "lucca-san-michele",
      ],
    },
    {
      day: 3,
      date: "Apr 17",
      label: "Day 3 — Morning in Lucca",
      spotIds: ["lucca-duomo", "lucca-san-frediano"],
    },
  ],
  florence: [
    {
      day: 3,
      date: "Apr 17",
      label: "Day 3 — Florence Sprint (~2h)",
      spotIds: [
        "florence-duomo",
        "florence-signoria",
        "florence-ponte-vecchio",
      ],
    },
  ],
  siena: [
    {
      day: 3,
      date: "Apr 17",
      label: "Day 3 — Afternoon & Evening",
      spotIds: [
        "siena-campo",
        "siena-torre-mangia",
        "siena-palazzo-pubblico",
        "siena-duomo",
        "siena-san-domenico",
        "siena-fortezza",
      ],
    },
    {
      day: 4,
      date: "Apr 18",
      label: "Day 4 — Last Morning in Siena",
      spotIds: ["siena-cripta", "siena-opera-duomo"],
    },
  ],
  rome: [
    {
      day: 4,
      date: "Apr 18",
      label: "Day 4 — Arrival Evening",
      spotIds: ["rome-trevi", "rome-piazza-spagna", "rome-pantheon", "rome-navona", "rome-campo-fiori"],
    },
    {
      day: 5,
      date: "Apr 19",
      label: "Day 5 — Ancient Rome",
      spotIds: [
        "rome-colosseo",
        "rome-arco-constantino",
        "rome-foro-romano",
        "rome-palatino",
        "rome-vittoriano",
        "rome-bocca-verita",
        "rome-circo-massimo",
        "rome-giardino-aranci",
        "rome-buco-serratura",
        "rome-santa-sabina",
        "rome-piramide",
        "rome-trastevere",
        "rome-gianicolo",
      ],
    },
    {
      day: 6,
      date: "Apr 20",
      label: "Day 6 — Vatican & Centro",
      spotIds: [
        "rome-piazza-san-pietro",
        "rome-san-pietro",
        "rome-castel-santangelo",
        "rome-ponte-santangelo",
        "rome-isola-tiberina",
      ],
    },
    {
      day: 7,
      date: "Apr 21",
      label: "Day 7 — Last Morning",
      spotIds: ["rome-santa-maria-maggiore", "rome-san-clemente"],
    },
  ],
};

export const cities: City[] = [
  {
    slug: "pisa",
    name: "Pisa",
    country: "Italy",
    tagline: "More than just a leaning tower",
    day: 1,
    date: "Apr 15-16",
    emoji: "🏗️",
  },
  {
    slug: "lucca",
    name: "Lucca",
    country: "Italy",
    tagline: "The walled city of a hundred churches",
    day: 2,
    date: "Apr 16-17",
    emoji: "🏰",
  },
  {
    slug: "florence",
    name: "Firenze",
    country: "Italy",
    tagline: "The cradle of the Renaissance — and Ezio's hometown",
    day: 3,
    date: "Apr 17",
    emoji: "🎨",
  },
  {
    slug: "siena",
    name: "Siena",
    country: "Italy",
    tagline: "Medieval rival of Florence",
    day: 3,
    date: "Apr 17-18",
    emoji: "🐎",
  },
  {
    slug: "rome",
    name: "Roma",
    country: "Italy",
    tagline: "The Eternal City",
    day: 4,
    date: "Apr 18-21",
    emoji: "🏛️",
  },
];
