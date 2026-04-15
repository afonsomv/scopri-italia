"use client";

import { useEffect, useState } from "react";
import { cities } from "@/data/itinerary";
import { getSpotsByCity } from "@/data/spots";
import { getGameState, getCityProgress } from "@/lib/progress";
import { GameState } from "@/lib/types";
import CityCard from "@/components/CityCard";
import Link from "next/link";

export default function Home() {
  const [state, setState] = useState<GameState | null>(null);

  useEffect(() => {
    setState(getGameState());
  }, []);

  if (!state) return null;

  const hasProfile = state.profile !== null;

  return (
    <div className="px-4 py-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-ink">Scopri Italia</h1>
          <p className="text-sm text-ink-light mt-0.5">
            {hasProfile
              ? `Ciao, ${state.profile!.name}!`
              : "Learn history through play"}
          </p>
        </div>
        <Link
          href="/profile"
          className="w-11 h-11 rounded-full bg-warm-white flex items-center justify-center text-xl hover:bg-gold-light/30 transition-colors"
        >
          {hasProfile ? state.profile!.avatar : "👤"}
        </Link>
      </div>

      {/* Stats bar */}
      {hasProfile && (
        <div className="flex items-center gap-4 mb-6 p-3 rounded-xl bg-white border border-warm-white">
          <div className="flex-1 text-center">
            <div className="text-lg font-bold text-terracotta">
              {state.totalScore}
            </div>
            <div className="text-xs text-stone-light">Points</div>
          </div>
          <div className="w-px h-8 bg-warm-white" />
          <div className="flex-1 text-center">
            <div className="text-lg font-bold text-olive">
              {Object.values(state.progress).filter((p) => p.completed).length}
            </div>
            <div className="text-xs text-stone-light">Spots</div>
          </div>
          <div className="w-px h-8 bg-warm-white" />
          <div className="flex-1 text-center">
            <div className="text-lg font-bold text-gold">
              {state.bestStreak}
            </div>
            <div className="text-xs text-stone-light">Best Streak</div>
          </div>
        </div>
      )}

      {/* Welcome card for new users */}
      {!hasProfile && (
        <Link
          href="/profile"
          className="block mb-6 p-5 rounded-2xl bg-gradient-to-br from-terracotta to-terracotta/80 text-white"
        >
          <h2 className="font-semibold text-lg">Welcome, traveler!</h2>
          <p className="text-sm mt-1 text-white/80">
            Set up your profile to start exploring Italian history through
            quizzes and fun facts.
          </p>
          <div className="mt-3 text-sm font-medium bg-white/20 inline-block px-3 py-1.5 rounded-lg">
            Get Started →
          </div>
        </Link>
      )}

      {/* Trip overview */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-stone uppercase tracking-wide">
          Your Itinerary
        </h2>
        <p className="text-xs text-stone-light mt-0.5">
          April 15–21, 2026 — 5 cities, 40+ spots
        </p>
      </div>

      {/* Quick links */}
      <div className="flex gap-2 mb-4">
        <Link
          href="/timeline"
          className="flex-1 flex items-center gap-2 p-3 rounded-xl bg-white border border-warm-white text-sm font-medium text-ink hover:border-terracotta/30 transition-colors"
        >
          <span>🗓️</span>
          <span>Timeline</span>
        </Link>
        <Link
          href="/food"
          className="flex-1 flex items-center gap-2 p-3 rounded-xl bg-white border border-warm-white text-sm font-medium text-ink hover:border-terracotta/30 transition-colors"
        >
          <span>🍝</span>
          <span>Food Guide</span>
        </Link>
      </div>

      {/* City cards */}
      <div className="space-y-3">
        {cities.map((city) => {
          const spots = getSpotsByCity(city.slug);
          const spotIds = spots.map((s) => s.id);
          const progress = getCityProgress(city.slug, spotIds);
          return (
            <CityCard key={city.slug} city={city} progress={progress} />
          );
        })}
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-stone-light mt-8 mb-4">
        Scopri Italia — Built with curiosity
      </p>
    </div>
  );
}
