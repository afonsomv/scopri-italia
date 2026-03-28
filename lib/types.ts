export interface Profile {
  name: string;
  avatar: string;
}

export interface City {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  day: number;
  date: string;
  emoji: string;
}

export interface Spot {
  id: string;
  citySlug: string;
  name: string;
  type: "monument" | "church" | "piazza" | "museum" | "viewpoint" | "bridge" | "neighborhood" | "other";
  tagline: string;
  funFacts: string[];
  history: string;
  timeSlot?: string;
  challenges?: Challenge[];
}

export interface Challenge {
  id: string;
  type: "find" | "count" | "photo" | "observe";
  title: string;
  description: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  spotId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizSet {
  spotId: string;
  questions: QuizQuestion[];
}

export interface SpotProgress {
  completed: boolean;
  score: number;
  totalQuestions: number;
  bestStreak: number;
  completedChallenges?: string[];
}

export interface GameState {
  profile: Profile | null;
  progress: Record<string, SpotProgress>;
  totalScore: number;
  currentStreak: number;
  bestStreak: number;
}
