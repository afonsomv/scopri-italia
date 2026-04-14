"use client";

import { useState } from "react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────

type FoodType =
  | "restaurant"
  | "trattoria"
  | "pizzeria"
  | "street-food"
  | "gelateria"
  | "cafe"
  | "market"
  | "bar";

interface FoodSpot {
  name: string;
  type: FoodType;
  description: string;
  price: "€" | "€€" | "€€€";
  near: string;
  tryThis?: string;
  day?: number;
  meal?: "breakfast" | "lunch" | "dinner" | "snack";
}

interface CityFood {
  slug: string;
  name: string;
  emoji: string;
  spots: FoodSpot[];
}

// ── Helpers ────────────────────────────────────────────────────────────────

const typeConfig: Record<FoodType, { label: string; color: string }> = {
  restaurant: { label: "Restaurant", color: "bg-terracotta/10 text-terracotta" },
  trattoria: { label: "Trattoria", color: "bg-terracotta/10 text-terracotta" },
  pizzeria: { label: "Pizzeria", color: "bg-gold/20 text-gold" },
  "street-food": { label: "Street Food", color: "bg-olive/10 text-olive" },
  gelateria: { label: "Gelateria", color: "bg-sky-100 text-sky-700" },
  cafe: { label: "Cafe", color: "bg-amber-100 text-amber-700" },
  market: { label: "Market", color: "bg-olive/10 text-olive" },
  bar: { label: "Bar", color: "bg-purple-100 text-purple-700" },
};

function TypeBadge({ type }: { type: FoodType }) {
  const cfg = typeConfig[type];
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const CITIES: CityFood[] = [
  {
    slug: "pisa",
    name: "Pisa",
    emoji: "🏗️",
    spots: [
      {
        name: "Bar Pasticceria Salza",
        type: "cafe",
        description: "Historic Pisa cafe on Borgo Stretto — the classic Italian breakfast",
        price: "€",
        near: "Borgo Stretto",
        tryThis: "Cappuccino + cornetto",
        day: 2,
        meal: "breakfast",
      },
      {
        name: "Pizzeria Il Montino",
        type: "pizzeria",
        description: "Famous in Pisa for pizza al taglio and cecina (chickpea crepe)",
        price: "€",
        near: "Borgo Stretto",
        tryThis: "Cecina — Pisa's signature snack",
        day: 2,
        meal: "lunch",
      },
      {
        name: "Osteria dei Cavalieri",
        type: "trattoria",
        description: "Classic Tuscan cucina on Via San Frediano — cozy and authentic",
        price: "€€",
        near: "Piazza dei Cavalieri",
        tryThis: "Ribollita or pici cacio e pepe",
        day: 1,
        meal: "dinner",
      },
      {
        name: "Trattoria La Buca",
        type: "trattoria",
        description: "Authentic local spot with affordable menu do dia",
        price: "€",
        near: "Centro",
        tryThis: "Menu del giorno (~10-12€)",
        day: 1,
        meal: "dinner",
      },
    ],
  },
  {
    slug: "lucca",
    name: "Lucca",
    emoji: "🏰",
    spots: [
      {
        name: "Pasticceria Taddeucci",
        type: "cafe",
        description: "Legendary since 1881 on Piazza San Michele — home of Lucca's signature pastry",
        price: "€",
        near: "Piazza San Michele",
        tryThis: "Buccellato — sweet Lucchese ring cake",
        day: 3,
        meal: "breakfast",
      },
      {
        name: "Trattoria da Leo",
        type: "trattoria",
        description: "Family-run, beloved cucina lucchese — always packed for good reason",
        price: "€",
        near: "Via Tegrimi",
        tryThis: "Tordelli lucchesi (local ravioli with ragu)",
        day: 2,
        meal: "dinner",
      },
      {
        name: "Ristorante Giglio",
        type: "restaurant",
        description: "More refined but still accessible — elegant setting on Piazza del Giglio",
        price: "€€",
        near: "Piazza del Giglio",
        tryThis: "Buccellato for dessert",
        day: 2,
        meal: "dinner",
      },
    ],
  },
  {
    slug: "florence",
    name: "Firenze",
    emoji: "🎨",
    spots: [
      {
        name: "All'Antico Vinaio",
        type: "street-food",
        description: "Legendary sandwich shop on Via dei Neri — permanent queue, worth every second",
        price: "€",
        near: "Ponte Vecchio",
        tryThis: "La Favolosa (their signature schiacciata)",
        day: 3,
        meal: "lunch",
      },
      {
        name: "Lampredotto Stand",
        type: "street-food",
        description: "Florence's most typical street food — tripe sandwich from a street cart",
        price: "€",
        near: "Centro",
        tryThis: "Lampredotto panino (~5€) — eat standing like locals",
        day: 3,
        meal: "lunch",
      },
    ],
  },
  {
    slug: "siena",
    name: "Siena",
    emoji: "🐎",
    spots: [
      {
        name: "Osteria Le Logge",
        type: "restaurant",
        description: "Considered Siena's best — reserve if you can. Via del Porrione",
        price: "€€",
        near: "Piazza del Campo",
        tryThis: "Pappardelle al cinghiale (wild boar pasta)",
        day: 3,
        meal: "dinner",
      },
      {
        name: "Antica Osteria da Divo",
        type: "restaurant",
        description: "Medieval underground atmosphere — dining inside Etruscan caves",
        price: "€€",
        near: "Duomo",
        tryThis: "Pici senesi with truffle",
        day: 3,
        meal: "dinner",
      },
      {
        name: "Gino Cacino di Angelo",
        type: "street-food",
        description: "Incredible sandwiches with premium Tuscan produce at Piazza del Mercato",
        price: "€",
        near: "Piazza del Campo",
        tryThis: "Pecorino & finocchiona sandwich",
        day: 4,
        meal: "lunch",
      },
    ],
  },
  {
    slug: "rome",
    name: "Roma",
    emoji: "🏛️",
    spots: [
      {
        name: "Antico Forno ai Serpenti",
        type: "cafe",
        description: "Artisan bakery in Monti — pizza bianca and cornetti straight from the oven",
        price: "€",
        near: "Monti / Colosseo",
        tryThis: "Pizza bianca + cappuccino",
        day: 5,
        meal: "breakfast",
      },
      {
        name: "Mercato Testaccio",
        type: "market",
        description: "Covered market with multiple Roman food stalls — taste everything for cheap",
        price: "€",
        near: "Piramide / Circo Massimo",
        tryThis: "Supplì (rice croquette, ~2€) from multiple stands",
        day: 5,
        meal: "lunch",
      },
      {
        name: "Flavio al Velavevodetto",
        type: "trattoria",
        description: "Testaccio institution — legendary carbonara in a cave-like setting",
        price: "€€",
        near: "Monte Testaccio",
        tryThis: "Carbonara — arguably Rome's best",
        day: 5,
        meal: "lunch",
      },
      {
        name: "Da Enzo al 29",
        type: "trattoria",
        description: "Tiny Trastevere legend — huge queues but unforgettable. Arrive before 20:00",
        price: "€€",
        near: "Trastevere",
        tryThis: "Tonnarelli cacio e pepe",
        day: 5,
        meal: "dinner",
      },
      {
        name: "Trattoria Da Teo",
        type: "trattoria",
        description: "Authentic cucina romana on Piazza dei Ponziani — quieter alternative to Da Enzo",
        price: "€€",
        near: "Trastevere",
        tryThis: "Amatriciana",
        day: 5,
        meal: "dinner",
      },
      {
        name: "Da Francesco",
        type: "restaurant",
        description: "Piazza del Fico — reliable cucina romana near the Pantheon",
        price: "€€",
        near: "Pantheon / Navona",
        tryThis: "Cacio e pepe or carbonara",
        day: 4,
        meal: "dinner",
      },
      {
        name: "Osteria dell'Ingegno",
        type: "restaurant",
        description: "Right next to the Pantheon on Piazza di Pietra — great value",
        price: "€€",
        near: "Pantheon",
        tryThis: "Roman pasta trio (cacio e pepe, carbonara, amatriciana)",
        day: 4,
        meal: "dinner",
      },
      {
        name: "Pizzarium Bonci",
        type: "pizzeria",
        description: "Widely considered the best pizza al taglio in all of Rome",
        price: "€",
        near: "Vatican / Prati",
        tryThis: "Any seasonal topping — they're all incredible",
        day: 6,
        meal: "lunch",
      },
      {
        name: "Pizzeria ai Marmi",
        type: "pizzeria",
        description: "Known as 'l'obitorio' — thin, crispy Roman-style pizza since 1931",
        price: "€",
        near: "Trastevere",
        tryThis: "Margherita romana (thin & crispy)",
        day: 6,
        meal: "dinner",
      },
      {
        name: "Mercato Centrale Roma",
        type: "market",
        description: "Quality food hall inside Termini station — perfect for the last meal with luggage",
        price: "€€",
        near: "Termini",
        tryThis: "Tiramisù as a farewell dessert",
        day: 7,
        meal: "lunch",
      },
      {
        name: "Panella",
        type: "cafe",
        description: "Beautiful bakery on Via Merulana — pastries, pizza, and great coffee",
        price: "€",
        near: "Termini / Santa Maria Maggiore",
        tryThis: "Pizza al taglio + espresso",
        day: 7,
        meal: "lunch",
      },
      {
        name: "Fatamorgana",
        type: "gelateria",
        description: "Artisanal gelato with natural ingredients — multiple locations across Rome",
        price: "€",
        near: "Via Laurina / Piazza di Spagna",
        tryThis: "Any seasonal flavour — all natural, no artificial colours",
        meal: "snack",
      },
      {
        name: "Fior di Luna",
        type: "gelateria",
        description: "Organic artisanal gelato in the heart of Trastevere",
        price: "€",
        near: "Trastevere",
        tryThis: "Dark chocolate or seasonal fruit",
        meal: "snack",
      },
      {
        name: "Sant'Eustachio Il Caffe",
        type: "cafe",
        description: "Legendary Roman coffee house since 1938 — near the Pantheon",
        price: "€",
        near: "Pantheon",
        tryThis: "Gran caffè — their secret recipe is iconic",
        meal: "snack",
      },
    ],
  },
];

// ── Components ─────────────────────────────────────────────────────────────

function FoodCard({ spot }: { spot: FoodSpot }) {
  return (
    <div className="p-3 rounded-xl bg-white border border-warm-white">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-sm text-ink">{spot.name}</h3>
            <TypeBadge type={spot.type} />
          </div>
          <p className="text-xs text-stone-light mt-1 leading-relaxed">
            {spot.description}
          </p>
        </div>
        <span className="text-sm font-bold text-olive shrink-0">{spot.price}</span>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
        <span className="text-stone-light">
          📍 {spot.near}
        </span>
        {spot.tryThis && (
          <span className="text-terracotta font-medium">
            🍴 {spot.tryThis}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Filter types ───────────────────────────────────────────────────────────

type FilterType = "all" | "restaurant" | "pizza" | "gelato-cafe" | "street";

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "restaurant", label: "Restaurants" },
  { key: "pizza", label: "Pizza" },
  { key: "gelato-cafe", label: "Gelato & Coffee" },
  { key: "street", label: "Street Food" },
];

function matchesFilter(spot: FoodSpot, filter: FilterType): boolean {
  if (filter === "all") return true;
  if (filter === "restaurant") return ["restaurant", "trattoria"].includes(spot.type);
  if (filter === "pizza") return spot.type === "pizzeria";
  if (filter === "gelato-cafe") return ["gelateria", "cafe"].includes(spot.type);
  if (filter === "street") return ["street-food", "market"].includes(spot.type);
  return true;
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function FoodPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-ink">Food Guide</h1>
            <p className="text-sm text-ink-light mt-0.5">Where to eat across Italy</p>
          </div>
          <span className="text-3xl">🍝</span>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`flex-none text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
              filter === f.key
                ? "bg-terracotta text-white border-terracotta"
                : "bg-white text-stone border-warm-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* City sections */}
      <div className="px-4 pb-8 space-y-6">
        {CITIES.map((city) => {
          const filtered = city.spots.filter((s) => matchesFilter(s, filter));
          if (filtered.length === 0) return null;

          return (
            <section key={city.slug} id={city.slug}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{city.emoji}</span>
                <h2 className="text-base font-bold text-ink">{city.name}</h2>
                <span className="text-xs text-stone-light">
                  {filtered.length} {filtered.length === 1 ? "spot" : "spots"}
                </span>
              </div>
              <div className="space-y-2">
                {filtered.map((spot) => (
                  <FoodCard key={spot.name} spot={spot} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Back to timeline */}
      <div className="px-4 pb-8 text-center">
        <Link
          href="/timeline"
          className="inline-block text-sm text-terracotta font-medium hover:underline"
        >
          ← Back to Timeline
        </Link>
      </div>
    </div>
  );
}
