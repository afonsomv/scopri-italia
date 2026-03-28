"use client";

import Link from "next/link";
import { Spot, SpotProgress } from "@/lib/types";

const typeIcons: Record<string, string> = {
  monument: "🏛️",
  church: "⛪",
  piazza: "🏘️",
  museum: "🎨",
  viewpoint: "🌄",
  bridge: "🌉",
  neighborhood: "🏘️",
  other: "📍",
};

export default function SpotCard({
  spot,
  progress,
}: {
  spot: Spot;
  progress: SpotProgress | null;
}) {
  const isCompleted = progress?.completed;

  return (
    <Link
      href={`/spot/${spot.id}`}
      className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all hover:shadow-sm active:scale-[0.98] ${
        isCompleted
          ? "bg-olive/5 border-olive/20"
          : "bg-white border-warm-white hover:border-gold-light"
      }`}
    >
      <div className="text-xl flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-warm-white">
        {typeIcons[spot.type]}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium text-sm text-ink truncate">{spot.name}</h3>
          {isCompleted && <span className="text-xs flex-shrink-0">✅</span>}
        </div>
        <p className="text-xs text-ink-light truncate">{spot.tagline}</p>
      </div>

      {isCompleted && progress ? (
        <div className="text-right flex-shrink-0">
          <div className="text-sm font-semibold text-olive">
            {progress.score}/{progress.totalQuestions}
          </div>
        </div>
      ) : (
        <div className="flex-shrink-0 text-xs text-stone-light font-medium px-2 py-1 bg-warm-white rounded-full">
          Quiz
        </div>
      )}
    </Link>
  );
}
