"use client";

import Link from "next/link";
import { QuizSet, SpotProgress } from "@/lib/types";
import { bonusThemeStyles, bonusUnlockHint } from "@/lib/bonus";
import { getSpotById } from "@/data/spots";

export default function BonusQuizCard({
  quiz,
  unlocked,
  progress,
}: {
  quiz: QuizSet;
  unlocked: boolean;
  progress: SpotProgress | null;
}) {
  if (!quiz.bonusTheme) return null;
  const styles = bonusThemeStyles[quiz.bonusTheme];
  const spot = getSpotById(quiz.spotId);
  const slug = quiz.slug ?? quiz.spotId;
  const title = quiz.title ?? spot?.name ?? quiz.spotId;
  const isCompleted = progress?.completed;

  if (!unlocked) {
    return (
      <div
        className={`flex items-center gap-3 p-3.5 rounded-xl border-2 border-dashed ${styles.border} bg-warm-white/40 opacity-70`}
      >
        <div className="text-xl flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-white/70">
          🔒
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-medium text-sm text-stone truncate">
              {title}
            </h3>
          </div>
          <p className="text-xs text-stone-light truncate">
            {bonusUnlockHint(quiz.bonusTheme)}
          </p>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${styles.badge}`}>
          Locked
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/quiz/${slug}`}
      className={`flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all hover:shadow-sm active:scale-[0.98] bg-white ${styles.border}`}
    >
      <div className="text-xl flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-warm-white">
        {styles.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className={`font-semibold text-sm truncate ${styles.accent}`}>
            {title}
          </h3>
          {isCompleted && <span className="text-xs flex-shrink-0">✅</span>}
        </div>
        <p className="text-xs text-ink-light truncate">
          {styles.label} · {quiz.questions.length} questions
        </p>
      </div>

      {isCompleted && progress ? (
        <div className="text-right flex-shrink-0">
          <div className={`text-sm font-semibold ${styles.accent}`}>
            {progress.score}/{progress.totalQuestions}
          </div>
        </div>
      ) : (
        <div className={`flex-shrink-0 text-xs font-medium px-2 py-1 rounded-full ${styles.badge}`}>
          Bonus
        </div>
      )}
    </Link>
  );
}
