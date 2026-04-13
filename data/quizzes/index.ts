import { QuizSet } from "@/lib/types";
import { pisaQuizzes } from "./pisa";
import { luccaQuizzes } from "./lucca";
import { sienaQuizzes } from "./siena";
import { florenceQuizzes } from "./florence";
import { florenceAcQuizzes } from "./florence-ac";
import { romeQuizzes } from "./rome";
import { romeAcQuizzes } from "./rome-ac";

const allQuizzes: QuizSet[] = [
  ...pisaQuizzes,
  ...luccaQuizzes,
  ...sienaQuizzes,
  ...florenceQuizzes,
  ...florenceAcQuizzes,
  ...romeQuizzes,
  ...romeAcQuizzes,
];

/** Resolve the routing/storage slug of a quiz (defaults to spotId for standard quizzes). */
export function quizSlug(quiz: QuizSet): string {
  return quiz.slug ?? quiz.spotId;
}

/** Get a quiz by its slug — works for both standard (spotId) and bonus (e.g. "florence-duomo-ac"). */
export function getQuizBySlug(slug: string): QuizSet | undefined {
  return allQuizzes.find((q) => quizSlug(q) === slug);
}

/** Backwards-compatible alias: standard quizzes are looked up by their spotId. */
export function getQuizBySpotId(spotId: string): QuizSet | undefined {
  return allQuizzes.find((q) => !q.bonusTheme && q.spotId === spotId);
}

/** Get all quizzes (standard + bonus) attached to a given spot. */
export function getQuizzesForSpot(spotId: string): QuizSet[] {
  return allQuizzes.filter((q) => q.spotId === spotId);
}

/** Get all bonus quizzes for a city (looks them up via the spots that belong to that city). */
export function getBonusQuizzesForCity(citySlug: string): QuizSet[] {
  // Use spotId prefix conventions: florence-* and rome-* spots
  return allQuizzes.filter(
    (q) => q.bonusTheme && q.spotId.startsWith(`${citySlug}-`)
  );
}

export const ALL_QUIZZES = allQuizzes;
