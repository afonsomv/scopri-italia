"use client";

import { useEffect, useState } from "react";
import { getGameState } from "@/lib/progress";
import { badges, getUnlockedBadgeIds } from "@/data/badges";

export default function BadgesPage() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const state = getGameState();
    setUnlockedIds(getUnlockedBadgeIds(state));
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="px-4 py-6 animate-fade-in">
        <div className="text-center text-stone-light text-sm mt-12">Loading...</div>
      </div>
    );
  }

  const unlockedCount = unlockedIds.length;
  const totalCount = badges.length;

  return (
    <div className="px-4 py-6 pb-24 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-ink">Trophy Room</h1>
        <p className="text-sm text-ink-light mt-1">
          {unlockedCount} / {totalCount} badges unlocked
        </p>
        {/* Progress bar */}
        <div className="mt-3 mx-auto max-w-[200px] h-2 rounded-full bg-warm-white overflow-hidden">
          <div
            className="h-full rounded-full bg-gold transition-all duration-500"
            style={{ width: `${totalCount > 0 ? (unlockedCount / totalCount) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Badge grid */}
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge) => {
          const isUnlocked = unlockedIds.includes(badge.id);

          return (
            <div
              key={badge.id}
              className={`rounded-2xl p-4 text-center transition-all ${
                isUnlocked
                  ? "bg-white border-2 border-gold/30 shadow-sm"
                  : "bg-warm-white border-2 border-warm-white opacity-60"
              }`}
            >
              <div className={`text-3xl mb-2 ${isUnlocked ? "" : "grayscale"}`}>
                {isUnlocked ? badge.icon : "?"}
              </div>
              <h3
                className={`text-sm font-semibold ${
                  isUnlocked ? "text-ink" : "text-stone-light"
                }`}
              >
                {badge.name}
              </h3>
              <p
                className={`text-xs mt-1 ${
                  isUnlocked ? "text-ink-light" : "text-stone-light"
                }`}
              >
                {isUnlocked ? badge.description : "Keep exploring to unlock..."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
