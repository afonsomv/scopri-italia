"use client";

import Link from "next/link";
import { City } from "@/lib/types";
import ProgressRing from "./ProgressRing";

export default function CityCard({
  city,
  progress,
}: {
  city: City;
  progress: { completed: number; total: number; percentage: number };
}) {
  const isComplete = progress.percentage === 1;

  return (
    <Link
      href={`/city/${city.slug}`}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-warm-white hover:border-gold-light transition-all hover:shadow-sm active:scale-[0.98]"
    >
      <div className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center">
        {city.emoji}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-ink">{city.name}</h3>
          {isComplete && <span className="text-sm">✅</span>}
        </div>
        <p className="text-sm text-ink-light truncate">{city.tagline}</p>
        <p className="text-xs text-stone-light mt-0.5">{city.date}</p>
      </div>

      <ProgressRing percentage={progress.percentage} size={44} strokeWidth={3}>
        <span className="text-xs font-medium text-stone">
          {progress.completed}/{progress.total}
        </span>
      </ProgressRing>
    </Link>
  );
}
