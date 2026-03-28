import { QuizSet } from "@/lib/types";
import { pisaQuizzes } from "./pisa";
import { luccaQuizzes } from "./lucca";
import { sienaQuizzes } from "./siena";
import { sanGimignanoQuizzes } from "./san-gimignano";
import { romeQuizzes } from "./rome";

const allQuizzes: QuizSet[] = [
  ...pisaQuizzes,
  ...luccaQuizzes,
  ...sienaQuizzes,
  ...sanGimignanoQuizzes,
  ...romeQuizzes,
];

export function getQuizBySpotId(spotId: string): QuizSet | undefined {
  return allQuizzes.find((q) => q.spotId === spotId);
}
