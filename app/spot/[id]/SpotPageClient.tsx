"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSpotById } from "@/data/spots";
import { getSpotProgress, toggleChallenge, getGameState } from "@/lib/progress";
import { SpotProgress } from "@/lib/types";

const challengeTypeIcons: Record<string, string> = {
  find: "🔍",
  count: "🔢",
  photo: "📸",
  observe: "👁️",
};

export default function SpotPageClient({ id }: { id: string }) {
  const [progress, setProgress] = useState<SpotProgress | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [expandedHint, setExpandedHint] = useState<string | null>(null);
  const [revealedFacts, setRevealedFacts] = useState<Set<number>>(new Set());

  const spot = getSpotById(id);

  useEffect(() => {
    setProgress(getSpotProgress(id));
    const stored = localStorage.getItem(`facts-revealed-${id}`);
    if (stored) setRevealedFacts(new Set(JSON.parse(stored)));
    setLoaded(true);
  }, [id]);

  const revealFact = (i: number) => {
    setRevealedFacts((prev) => {
      const next = new Set(prev).add(i);
      localStorage.setItem(`facts-revealed-${id}`, JSON.stringify([...next]));
      return next;
    });
  };

  const handleToggleChallenge = (challengeId: string) => {
    const newState = toggleChallenge(id, challengeId);
    setProgress(newState.progress[id] ?? null);
  };

  if (!spot) {
    return (
      <div className="px-4 py-6 text-center">
        <p className="text-stone-light">Spot not found</p>
        <Link href="/" className="text-terracotta text-sm mt-2 inline-block">
          ← Back home
        </Link>
      </div>
    );
  }

  const completedChallenges = progress?.completedChallenges ?? [];

  return (
    <div className="px-4 py-6 animate-fade-in">
      {/* Back */}
      <Link
        href={`/city/${spot.citySlug}`}
        className="text-sm text-stone-light hover:text-terracotta transition-colors"
      >
        ← Back to city
      </Link>

      {/* Spot header */}
      <div className="mt-4 mb-6">
        <h1 className="text-2xl font-bold text-ink leading-tight">
          {spot.name}
        </h1>
        <p className="text-sm text-terracotta font-medium mt-1">
          {spot.tagline}
        </p>
        {spot.timeSlot && (
          <p className="text-xs text-stone-light mt-1">
            Suggested time: {spot.timeSlot}
          </p>
        )}
      </div>

      {/* Completed badge */}
      {loaded && progress?.completed && (
        <div className="mb-4 p-3 rounded-xl bg-olive/10 border border-olive/20 flex items-center gap-2">
          <span>✅</span>
          <span className="text-sm font-medium text-olive">
            Quiz completed — {progress.score}/{progress.totalQuestions} correct
          </span>
        </div>
      )}

      {/* History */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-stone uppercase tracking-wide mb-2">
          The Story
        </h2>
        <p className="text-sm leading-relaxed text-ink/80">{spot.history}</p>
      </div>

      {/* Fun facts — tap to reveal */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-stone uppercase tracking-wide mb-1">
          Did You Know?
        </h2>
        <p className="text-xs text-stone-light mb-3">
          Tap each card to reveal a fun fact
        </p>
        <div className="space-y-2.5">
          {spot.funFacts.map((fact, i) => {
            const isRevealed = revealedFacts.has(i);
            return (
              <button
                key={i}
                onClick={() => revealFact(i)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 ${
                  isRevealed
                    ? "bg-white border-gold/30"
                    : "bg-gradient-to-r from-gold/10 to-terracotta/5 border-gold/20 hover:border-gold/40 active:scale-[0.98]"
                }`}
              >
                {isRevealed ? (
                  <p className="text-sm text-ink/80 leading-relaxed animate-fade-in">
                    <span className="text-gold font-bold mr-1.5">#{i + 1}</span>
                    {fact}
                  </p>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-lg">?</span>
                    <span className="text-sm font-medium text-gold/70">
                      Tap to reveal fact #{i + 1}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scavenger Hunt Challenges */}
      {spot.challenges && spot.challenges.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-stone uppercase tracking-wide mb-3">
            Scavenger Hunt
          </h2>
          <div className="space-y-2.5">
            {spot.challenges.map((challenge) => {
              const isDone = completedChallenges.includes(challenge.id);
              return (
                <div
                  key={challenge.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isDone
                      ? "bg-gold/5 border-gold/30"
                      : "bg-white border-warm-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => handleToggleChallenge(challenge.id)}
                      className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        isDone
                          ? "bg-gold border-gold text-white"
                          : "border-stone-light/40 hover:border-gold"
                      }`}
                    >
                      {isDone && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-sm">
                          {challengeTypeIcons[challenge.type]}
                        </span>
                        <span className={`text-sm font-semibold ${isDone ? "text-gold line-through" : "text-ink"}`}>
                          {challenge.title}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${isDone ? "text-ink/40" : "text-ink/70"}`}>
                        {challenge.description}
                      </p>
                      {challenge.hint && (
                        <button
                          onClick={() =>
                            setExpandedHint(
                              expandedHint === challenge.id ? null : challenge.id
                            )
                          }
                          className="text-xs text-terracotta/70 hover:text-terracotta mt-1.5 font-medium"
                        >
                          {expandedHint === challenge.id ? "Hide hint" : "Need a hint?"}
                        </button>
                      )}
                      {expandedHint === challenge.id && challenge.hint && (
                        <p className="text-xs text-stone-light mt-1 italic animate-fade-in">
                          {challenge.hint}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quiz CTA */}
      <Link
        href={`/quiz/${spot.id}`}
        className={`block w-full text-center py-4 rounded-2xl font-semibold text-sm transition-all active:scale-[0.98] ${
          progress?.completed
            ? "bg-olive/10 text-olive border border-olive/20 hover:bg-olive/20"
            : "bg-terracotta text-white hover:bg-terracotta/90 shadow-sm"
        }`}
      >
        {progress?.completed ? "Retake Quiz" : "Start Quiz →"}
      </Link>
    </div>
  );
}
