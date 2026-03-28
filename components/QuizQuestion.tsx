"use client";

import { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/lib/types";

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (revealed) return;
    setSelected(index);
    setRevealed(true);
  };

  const handleContinue = () => {
    onAnswer(selected === question.correctIndex);
  };

  const isCorrect = selected === question.correctIndex;

  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-stone-light">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < questionNumber - 1
                  ? "bg-terracotta"
                  : i === questionNumber - 1
                  ? "bg-gold"
                  : "bg-warm-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg font-semibold text-ink mb-6 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let style = "bg-white border-warm-white hover:border-gold-light";

          if (revealed) {
            if (index === question.correctIndex) {
              style = "bg-olive/10 border-olive text-olive";
            } else if (index === selected) {
              style = "bg-red-50 border-red-300 text-red-700";
            } else {
              style = "bg-white border-warm-white opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={revealed}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium ${style} ${
                revealed && index === question.correctIndex
                  ? "animate-correct"
                  : revealed && index === selected && !isCorrect
                  ? "animate-wrong"
                  : ""
              }`}
            >
              <span className="text-stone-light mr-2">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation + Continue */}
      {revealed && (
        <>
          <div
            className={`mt-6 p-4 rounded-xl text-sm leading-relaxed animate-fade-in ${
              isCorrect
                ? "bg-olive/10 text-olive"
                : "bg-terracotta/10 text-terracotta"
            }`}
          >
            <span className="font-semibold">
              {isCorrect ? "Correct! " : "Not quite! "}
            </span>
            {question.explanation}
          </div>
          <button
            onClick={handleContinue}
            className="w-full mt-4 py-3.5 rounded-2xl bg-terracotta text-white font-semibold text-sm hover:bg-terracotta/90 transition-colors active:scale-[0.98] animate-fade-in"
          >
            {questionNumber < totalQuestions ? "Next Question →" : "See Results →"}
          </button>
        </>
      )}
    </div>
  );
}
