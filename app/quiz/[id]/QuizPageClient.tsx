"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSpotById } from "@/data/spots";
import { getQuizBySlug } from "@/data/quizzes";
import { saveQuizResult } from "@/lib/progress";
import { isBonusUnlocked, bonusThemeStyles } from "@/lib/bonus";
import { QuizQuestion as QuizQuestionType } from "@/lib/types";
import QuizQuestion from "@/components/QuizQuestion";

function shuffleQuestion(q: QuizQuestionType): QuizQuestionType {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...q,
    options: indices.map((i) => q.options[i]),
    correctIndex: indices.indexOf(q.correctIndex),
  };
}

export default function QuizPageClient({ id }: { id: string }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [finished, setFinished] = useState(false);

  const quiz = getQuizBySlug(id);
  const spot = quiz ? getSpotById(quiz.spotId) : undefined;
  const shuffledQuestions = useMemo(
    () => quiz?.questions.map(shuffleQuestion) ?? [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  if (!spot || !quiz) {
    return (
      <div className="px-4 py-6 text-center">
        <p className="text-stone-light">Quiz not found</p>
        <Link href="/" className="text-terracotta text-sm mt-2 inline-block">
          ← Back home
        </Link>
      </div>
    );
  }

  // Block direct URL access to a locked bonus quiz
  if (quiz.bonusTheme && !isBonusUnlocked(quiz)) {
    const styles = bonusThemeStyles[quiz.bonusTheme];
    return (
      <div className="px-4 py-6 text-center animate-fade-in">
        <div className="text-5xl mt-12 mb-4">🔒</div>
        <h1 className="text-xl font-bold text-ink mb-2">Bonus Quiz Locked</h1>
        <p className={`text-sm font-medium mb-1 ${styles.accent}`}>
          {styles.label}
        </p>
        <p className="text-sm text-ink-light max-w-xs mx-auto mb-6">
          Complete the requirements first — then come back to claim this bonus.
        </p>
        <Link
          href={`/spot/${spot.id}`}
          className="inline-block px-5 py-3 rounded-2xl bg-terracotta text-white font-semibold text-sm hover:bg-terracotta/90 transition-colors"
        >
          Back to {spot.name}
        </Link>
      </div>
    );
  }

  const questions = shuffledQuestions;
  const totalQuestions = questions.length;

  const handleAnswer = (correct: boolean) => {
    const newScore = correct ? score + 1 : score;
    const newStreak = correct ? streak + 1 : 0;
    const newBestStreak = Math.max(bestStreak, newStreak);

    setScore(newScore);
    setStreak(newStreak);
    setBestStreak(newBestStreak);

    if (currentIndex + 1 >= totalQuestions) {
      // Quiz finished
      saveQuizResult(id, newScore, totalQuestions, newBestStreak);
      setFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (finished) {
    const percentage = score / totalQuestions;
    let message = "";
    let emoji = "";

    if (percentage === 1) {
      message = "Perfect score! You're a true historian!";
      emoji = "🏆";
    } else if (percentage >= 0.75) {
      message = "Great job! You really know your history!";
      emoji = "🌟";
    } else if (percentage >= 0.5) {
      message = "Not bad! You're learning fast!";
      emoji = "📚";
    } else {
      message = "Keep exploring — every visit teaches something new!";
      emoji = "🌱";
    }

    return (
      <div className="px-4 py-6 animate-fade-in">
        <div className="text-center mt-12 mb-8">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-2xl font-bold text-ink mb-2">Quiz Complete!</h1>
          <p className="text-sm text-ink-light mb-6">{message}</p>

          <div className="inline-flex gap-6 p-4 rounded-2xl bg-white border border-warm-white mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-terracotta">
                {score}/{totalQuestions}
              </div>
              <div className="text-xs text-stone-light mt-1">Correct</div>
            </div>
            {bestStreak > 0 && (
              <>
                <div className="w-px bg-warm-white" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">
                    {bestStreak}
                  </div>
                  <div className="text-xs text-stone-light mt-1">
                    Best Streak
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href={`/spot/${spot.id}`}
            className="block w-full text-center py-3.5 rounded-2xl bg-terracotta text-white font-semibold text-sm hover:bg-terracotta/90 transition-colors active:scale-[0.98]"
          >
            Back to {spot.name}
          </Link>
          <Link
            href={`/city/${spot.citySlug}`}
            className="block w-full text-center py-3.5 rounded-2xl bg-white border border-warm-white text-stone font-medium text-sm hover:border-gold-light transition-colors active:scale-[0.98]"
          >
            Explore More Spots
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href={`/spot/${spot.id}`}
          className="text-sm text-stone-light hover:text-terracotta transition-colors"
        >
          ← Exit
        </Link>
        {streak > 1 && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/10 text-gold animate-streak">
            <span className="text-xs">🔥</span>
            <span className="text-xs font-bold">{streak} streak!</span>
          </div>
        )}
      </div>

      {/* Spot name */}
      <p className="text-xs text-stone-light mb-1">{spot.name}</p>

      {/* Current question */}
      <QuizQuestion
        key={currentIndex}
        question={questions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={totalQuestions}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
