"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cities, daySchedule } from "@/data/itinerary";
import { getSpotById } from "@/data/spots";
import { getBonusQuizzesForCity, quizSlug } from "@/data/quizzes";
import { getGameState, getCityProgress } from "@/lib/progress";
import {
  applyUnlockQueryParam,
  isBonusUnlocked,
  bonusThemeStyles,
} from "@/lib/bonus";
import { GameState, SpotProgress } from "@/lib/types";
import SpotCard from "@/components/SpotCard";
import BonusQuizCard from "@/components/BonusQuizCard";
import ProgressRing from "@/components/ProgressRing";

export default function CityPageClient({ slug }: { slug: string }) {
  const [progressMap, setProgressMap] = useState<Record<string, SpotProgress>>({});
  const [gameState, setGameState] = useState<GameState | null>(null);

  const city = cities.find((c) => c.slug === slug);
  const days = daySchedule[slug] ?? [];
  const allSpotIds = days.flatMap((d) => d.spotIds);
  const bonusQuizzes = getBonusQuizzesForCity(slug);

  useEffect(() => {
    applyUnlockQueryParam();
    const state = getGameState();
    setProgressMap(state.progress);
    setGameState(state);
  }, []);

  if (!city) {
    return (
      <div className="px-4 py-6 text-center">
        <p className="text-stone-light">City not found</p>
        <Link href="/" className="text-terracotta text-sm mt-2 inline-block">
          ← Back home
        </Link>
      </div>
    );
  }

  const cityProgress = getCityProgress(slug, allSpotIds);
  const bonusTheme = bonusQuizzes[0]?.bonusTheme;
  const bonusStyles = bonusTheme ? bonusThemeStyles[bonusTheme] : null;

  return (
    <div className="px-4 py-6 animate-fade-in">
      {/* Header */}
      <Link
        href="/"
        className="text-sm text-stone-light hover:text-terracotta transition-colors"
      >
        ← Back
      </Link>

      <div className="flex items-center gap-4 mt-4 mb-6">
        <div className="text-4xl">{city.emoji}</div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-ink">{city.name}</h1>
          <p className="text-sm text-ink-light">{city.tagline}</p>
          <p className="text-xs text-stone-light mt-0.5">{city.date}</p>
        </div>
        <ProgressRing percentage={cityProgress.percentage} size={56} strokeWidth={4}>
          <span className="text-xs font-bold text-stone">
            {Math.round(cityProgress.percentage * 100)}%
          </span>
        </ProgressRing>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 p-3 rounded-xl bg-white border border-warm-white text-center">
          <div className="text-lg font-bold text-terracotta">{cityProgress.score}</div>
          <div className="text-xs text-stone-light">Points</div>
        </div>
        <div className="flex-1 p-3 rounded-xl bg-white border border-warm-white text-center">
          <div className="text-lg font-bold text-olive">
            {cityProgress.completed}/{cityProgress.total}
          </div>
          <div className="text-xs text-stone-light">Completed</div>
        </div>
      </div>

      {/* Spots grouped by day */}
      {days.map((day) => {
        if (day.spotIds.length === 0) return null;
        return (
          <div key={day.day + day.label} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-sm font-semibold text-stone uppercase tracking-wide">
                {day.label}
              </h2>
              <span className="text-xs text-stone-light">({day.date})</span>
            </div>
            <div className="space-y-2.5">
              {day.spotIds.map((spotId) => {
                const spot = getSpotById(spotId);
                if (!spot) return null;
                return (
                  <SpotCard
                    key={spot.id}
                    spot={spot}
                    progress={progressMap[spot.id] ?? null}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* AC Bonus section */}
      {bonusQuizzes.length > 0 && bonusStyles && (
        <div className="mb-6 mt-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base">{bonusStyles.icon}</span>
            <h2 className={`text-sm font-bold uppercase tracking-wide ${bonusStyles.accent}`}>
              {bonusStyles.label}
            </h2>
          </div>
          <p className="text-xs text-stone-light mb-3">
            Assassin&apos;s Creed–themed bonus quizzes — locked until you earn them.
          </p>
          <div className="space-y-2.5">
            {bonusQuizzes.map((q) => {
              const slug = quizSlug(q);
              const unlocked = gameState ? isBonusUnlocked(q, gameState) : false;
              return (
                <BonusQuizCard
                  key={slug}
                  quiz={q}
                  unlocked={unlocked}
                  progress={progressMap[slug] ?? null}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
