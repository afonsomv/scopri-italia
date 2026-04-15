"use client";

import { useState } from "react";
import Link from "next/link";
import { getSpotById } from "@/data/spots";
import { Spot } from "@/lib/types";

// ── Types ──────────────────────────────────────────────────────────────────

interface SpotEntry {
  type: "spot";
  spotId: string;
  time?: string;
}
interface MealEntry {
  type: "meal";
  label: "Lunch" | "Dinner";
  time: string;
  city: string;
  citySlug: string;
}
interface TravelEntry {
  type: "travel";
  from: string;
  to: string;
  duration: string;
  time: string;
}
interface NoteEntry {
  type: "note";
  text: string;
  time?: string;
  emoji?: string;
}

type TimelineEntry = SpotEntry | MealEntry | TravelEntry | NoteEntry;

interface TimelineDay {
  day: number;
  date: string;
  dateISO: string;
  title: string;
  emoji: string;
  entries: TimelineEntry[];
}

// ── Data ───────────────────────────────────────────────────────────────────

const DAYS: TimelineDay[] = [
  {
    day: 1,
    date: "Apr 15",
    dateISO: "2026-04-15",
    title: "Arrival",
    emoji: "✈️",
    entries: [
      { type: "note", text: "Fly in — arrive Pisa", time: "~15:00", emoji: "✈️" },
      { type: "note", text: "Check in & freshen up", emoji: "🏨" },
      { type: "note", text: "Evening stroll around Campo dei Miracoli", time: "~18:00", emoji: "🚶" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Pisa", citySlug: "pisa" },
    ],
  },
  {
    day: 2,
    date: "Apr 16",
    dateISO: "2026-04-16",
    title: "Pisa → Lucca",
    emoji: "🏗️",
    entries: [
      { type: "spot", spotId: "pisa-torre", time: "09:00" },
      { type: "spot", spotId: "pisa-duomo", time: "09:45" },
      { type: "spot", spotId: "pisa-battistero", time: "10:20" },
      { type: "spot", spotId: "pisa-camposanto", time: "10:50" },
      { type: "spot", spotId: "pisa-cavalieri", time: "11:30" },
      { type: "spot", spotId: "pisa-spina", time: "11:50" },
      { type: "meal", label: "Lunch", time: "13:00", city: "Pisa", citySlug: "pisa" },
      { type: "travel", from: "Pisa", to: "Lucca", duration: "~30 min", time: "14:00" },
      { type: "spot", spotId: "lucca-muralhas", time: "14:30" },
      { type: "spot", spotId: "lucca-anfiteatro", time: "15:10" },
      { type: "spot", spotId: "lucca-guinigi", time: "15:45" },
      { type: "spot", spotId: "lucca-torre-ore", time: "16:15" },
      { type: "spot", spotId: "lucca-san-michele", time: "16:45" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Lucca", citySlug: "lucca" },
    ],
  },
  {
    day: 3,
    date: "Apr 17",
    dateISO: "2026-04-17",
    title: "Lucca → Florence → Siena",
    emoji: "🎨",
    entries: [
      { type: "spot", spotId: "lucca-duomo", time: "09:00" },
      { type: "spot", spotId: "lucca-san-frediano", time: "09:45" },
      { type: "travel", from: "Lucca", to: "Florence", duration: "~1 h", time: "10:30" },
      { type: "spot", spotId: "florence-duomo", time: "11:30" },
      { type: "spot", spotId: "florence-signoria", time: "12:00" },
      { type: "spot", spotId: "florence-ponte-vecchio", time: "12:30" },
      { type: "meal", label: "Lunch", time: "13:00", city: "Florence", citySlug: "florence" },
      { type: "travel", from: "Florence", to: "Siena", duration: "~1 h 15 min", time: "14:30" },
      { type: "spot", spotId: "siena-campo", time: "15:45" },
      { type: "spot", spotId: "siena-torre-mangia", time: "16:15" },
      { type: "spot", spotId: "siena-palazzo-pubblico", time: "17:00" },
      { type: "spot", spotId: "siena-duomo", time: "17:30" },
      { type: "spot", spotId: "siena-san-domenico", time: "18:15" },
      { type: "spot", spotId: "siena-fortezza", time: "18:45" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Siena", citySlug: "siena" },
    ],
  },
  {
    day: 4,
    date: "Apr 18",
    dateISO: "2026-04-18",
    title: "Siena → Rome",
    emoji: "🐎",
    entries: [
      { type: "spot", spotId: "siena-cripta", time: "09:00" },
      { type: "spot", spotId: "siena-opera-duomo", time: "10:00" },
      { type: "meal", label: "Lunch", time: "12:30", city: "Siena", citySlug: "siena" },
      { type: "travel", from: "Siena", to: "Rome", duration: "~3 h", time: "14:00" },
      { type: "note", text: "Check in — Rome", time: "17:30", emoji: "🏨" },
      { type: "spot", spotId: "rome-trevi", time: "18:30" },
      { type: "spot", spotId: "rome-piazza-spagna", time: "19:00" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Rome", citySlug: "rome" },
      { type: "spot", spotId: "rome-pantheon", time: "21:30" },
      { type: "spot", spotId: "rome-navona", time: "22:00" },
      { type: "spot", spotId: "rome-campo-fiori", time: "22:30" },
    ],
  },
  {
    day: 5,
    date: "Apr 19",
    dateISO: "2026-04-19",
    title: "Ancient Rome",
    emoji: "🏛️",
    entries: [
      { type: "spot", spotId: "rome-colosseo", time: "09:00" },
      { type: "spot", spotId: "rome-arco-constantino", time: "10:30" },
      { type: "spot", spotId: "rome-foro-romano", time: "10:45" },
      { type: "spot", spotId: "rome-palatino", time: "11:30" },
      { type: "spot", spotId: "rome-vittoriano", time: "12:30" },
      { type: "meal", label: "Lunch", time: "13:00", city: "Rome", citySlug: "rome" },
      { type: "spot", spotId: "rome-bocca-verita", time: "14:30" },
      { type: "spot", spotId: "rome-circo-massimo", time: "15:00" },
      { type: "spot", spotId: "rome-giardino-aranci", time: "15:30" },
      { type: "spot", spotId: "rome-buco-serratura", time: "16:00" },
      { type: "spot", spotId: "rome-santa-sabina", time: "16:20" },
      { type: "spot", spotId: "rome-piramide", time: "17:00" },
      { type: "spot", spotId: "rome-trastevere", time: "17:30" },
      { type: "spot", spotId: "rome-gianicolo", time: "18:30" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Rome", citySlug: "rome" },
    ],
  },
  {
    day: 6,
    date: "Apr 20",
    dateISO: "2026-04-20",
    title: "Vatican & Centro",
    emoji: "⛪",
    entries: [
      { type: "spot", spotId: "rome-piazza-san-pietro", time: "08:30" },
      { type: "spot", spotId: "rome-san-pietro", time: "09:00" },
      { type: "spot", spotId: "rome-castel-santangelo", time: "11:00" },
      { type: "spot", spotId: "rome-ponte-santangelo", time: "12:00" },
      { type: "meal", label: "Lunch", time: "13:00", city: "Rome", citySlug: "rome" },
      { type: "spot", spotId: "rome-portico-ottavia", time: "14:30" },
      { type: "spot", spotId: "rome-isola-tiberina", time: "15:00" },
      { type: "meal", label: "Dinner", time: "20:00", city: "Rome", citySlug: "rome" },
    ],
  },
  {
    day: 7,
    date: "Apr 21",
    dateISO: "2026-04-21",
    title: "Last Morning",
    emoji: "🌅",
    entries: [
      { type: "spot", spotId: "rome-santa-maria-maggiore", time: "09:00" },
      { type: "spot", spotId: "rome-san-clemente", time: "10:00" },
      { type: "meal", label: "Lunch", time: "12:30", city: "Rome", citySlug: "rome" },
      { type: "note", text: "Head to airport — arrivederci!", time: "15:00", emoji: "✈️" },
    ],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function spotTypeEmoji(type: Spot["type"]): string {
  const map: Record<Spot["type"], string> = {
    monument: "🏛️",
    church: "⛪",
    piazza: "🏟️",
    museum: "🖼️",
    viewpoint: "🌄",
    bridge: "🌉",
    neighborhood: "🏘️",
    other: "📍",
  };
  return map[type] ?? "📍";
}

function getLocalDateISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getDefaultDayIndex(): number {
  const stored = typeof window !== "undefined" ? sessionStorage.getItem("timeline-day") : null;
  if (stored !== null) {
    const n = Number(stored);
    if (n >= 0 && n < DAYS.length) return n;
  }
  const todayISO = getLocalDateISO();
  const idx = DAYS.findIndex((d) => d.dateISO === todayISO);
  return idx >= 0 ? idx : 0;
}

// ── Entry components ───────────────────────────────────────────────────────

function SpotRow({ entry }: { entry: SpotEntry }) {
  const spot = getSpotById(entry.spotId);
  if (!spot) return null;

  return (
    <Link href={`/spot/${spot.id}`} className="flex items-start gap-3 group">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-warm-white border-2 border-terracotta/30 flex items-center justify-center text-sm group-hover:border-terracotta transition-colors">
          {spotTypeEmoji(spot.type)}
        </div>
      </div>
      <div className="flex-1 pb-4 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium text-ink text-sm leading-tight group-hover:text-terracotta transition-colors truncate">
            {spot.name}
          </span>
          {entry.time && (
            <span className="text-xs text-stone-light shrink-0">{entry.time}</span>
          )}
        </div>
        <p className="text-xs text-stone-light mt-0.5 leading-snug line-clamp-1">
          {spot.tagline}
        </p>
      </div>
    </Link>
  );
}

function MealRow({ entry }: { entry: MealEntry }) {
  const isLunch = entry.label === "Lunch";
  return (
    <Link href={`/food#${entry.citySlug}`} className="flex items-center gap-3 group">
      <div className="w-8 h-8 rounded-full bg-gold-light/40 border-2 border-gold/40 flex items-center justify-center text-sm group-hover:border-gold transition-colors">
        {isLunch ? "🍝" : "🍷"}
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium text-gold text-sm group-hover:text-terracotta transition-colors">
            {entry.label} — {entry.city}
          </span>
          <span className="text-xs text-stone-light">{entry.time}</span>
        </div>
        <p className="text-xs text-terracotta/60 mt-0.5">See suggestions →</p>
      </div>
    </Link>
  );
}

function TravelRow({ entry }: { entry: TravelEntry }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-olive/10 border-2 border-olive/30 flex items-center justify-center text-sm">
        🚗
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium text-olive text-sm">
            {entry.from} → {entry.to}
          </span>
          <span className="text-xs text-stone-light">{entry.time}</span>
        </div>
        <p className="text-xs text-stone-light mt-0.5">Drive {entry.duration}</p>
      </div>
    </div>
  );
}

function NoteRow({ entry }: { entry: NoteEntry }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-warm-white border-2 border-stone-light/30 flex items-center justify-center text-sm">
        {entry.emoji ?? "📌"}
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm text-ink-light">{entry.text}</span>
          {entry.time && (
            <span className="text-xs text-stone-light shrink-0">{entry.time}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function TimelinePage() {
  const [activeIdx, setActiveIdx] = useState(getDefaultDayIndex);

  function selectDay(idx: number) {
    setActiveIdx(idx);
    sessionStorage.setItem("timeline-day", String(idx));
  }
  const day = DAYS[activeIdx];

  const isTodayActive = DAYS[activeIdx].dateISO === getLocalDateISO();

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-4 pt-6 pb-3">
        <h1 className="text-2xl font-bold text-ink">Itinerary</h1>
        <p className="text-sm text-ink-light mt-0.5">April 15–21, 2026 · Italy</p>
      </div>

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide">
        {DAYS.map((d, idx) => {
          const isToday = d.dateISO === getLocalDateISO();
          const isActive = idx === activeIdx;
          return (
            <button
              key={d.day}
              onClick={() => selectDay(idx)}
              className={`flex-none flex flex-col items-center px-3 py-2 rounded-xl border transition-all ${
                isActive
                  ? "bg-terracotta text-white border-terracotta"
                  : "bg-white text-stone border-warm-white"
              }`}
            >
              <span className="text-lg leading-none">{d.emoji}</span>
              <span className={`text-[10px] font-semibold mt-0.5 ${isActive ? "text-white" : "text-stone"}`}>
                Day {d.day}
              </span>
              <span className={`text-[10px] ${isActive ? "text-white/80" : "text-stone-light"}`}>
                {d.date}
              </span>
              {isToday && (
                <span className={`mt-1 w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-terracotta"}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Day header */}
      <div className={`mx-4 mb-4 px-4 py-3 rounded-2xl ${isTodayActive ? "bg-terracotta text-white" : "bg-white border border-warm-white"}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wide ${isTodayActive ? "text-white/70" : "text-stone-light"}`}>
              {isTodayActive ? "Today" : `Day ${day.day} · ${day.date}`}
            </p>
            <h2 className={`text-base font-bold mt-0.5 ${isTodayActive ? "text-white" : "text-ink"}`}>
              {day.title}
            </h2>
          </div>
          <span className="text-3xl">{day.emoji}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 pb-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-16 top-4 bottom-4 w-px bg-warm-white" />

          <div className="space-y-0 pl-12">
            {day.entries.map((entry, i) => {
              if (entry.type === "spot") return <SpotRow key={i} entry={entry} />;
              if (entry.type === "meal") return <MealRow key={i} entry={entry} />;
              if (entry.type === "travel") return <TravelRow key={i} entry={entry} />;
              if (entry.type === "note") return <NoteRow key={i} entry={entry} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
