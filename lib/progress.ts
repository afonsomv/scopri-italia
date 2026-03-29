"use client";

import { GameState, Profile, SpotProgress } from "./types";

const STORAGE_KEY = "travel-quiz-state";

const defaultState: GameState = {
  profile: null,
  progress: {},
  totalScore: 0,
  currentStreak: 0,
  bestStreak: 0,
};

export function getGameState(): GameState {
  if (typeof window === "undefined") return defaultState;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultState;
  return JSON.parse(raw) as GameState;
}

function saveGameState(state: GameState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getProfile(): Profile | null {
  return getGameState().profile;
}

export function saveProfile(profile: Profile) {
  const state = getGameState();
  state.profile = profile;
  saveGameState(state);
}

export function getSpotProgress(spotId: string): SpotProgress | null {
  return getGameState().progress[spotId] ?? null;
}

export function saveQuizResult(
  spotId: string,
  score: number,
  totalQuestions: number,
  bestStreak: number
) {
  const state = getGameState();
  const existing = state.progress[spotId];

  // Keep best score
  if (!existing || score > existing.score) {
    state.progress[spotId] = {
      completed: true,
      score,
      totalQuestions,
      bestStreak,
    };
  }

  // Update total score (recalculate from all spots)
  state.totalScore = Object.values(state.progress).reduce(
    (sum, p) => sum + p.score,
    0
  );

  // Update best streak
  if (bestStreak > state.bestStreak) {
    state.bestStreak = bestStreak;
  }

  saveGameState(state);
  return state;
}

export function toggleChallenge(spotId: string, challengeId: string) {
  const state = getGameState();
  if (!state.progress[spotId]) {
    state.progress[spotId] = {
      completed: false,
      score: 0,
      totalQuestions: 0,
      bestStreak: 0,
      completedChallenges: [],
    };
  }
  const challenges = state.progress[spotId].completedChallenges ?? [];
  if (challenges.includes(challengeId)) {
    state.progress[spotId].completedChallenges = challenges.filter(
      (id) => id !== challengeId
    );
  } else {
    state.progress[spotId].completedChallenges = [...challenges, challengeId];
  }
  saveGameState(state);
  return state;
}

export function resetProgress() {
  const state = getGameState();
  state.progress = {};
  state.totalScore = 0;
  state.currentStreak = 0;
  state.bestStreak = 0;
  saveGameState(state);
  // Clear revealed fun facts for all spots
  Object.keys(localStorage)
    .filter((key) => key.startsWith("facts-revealed-"))
    .forEach((key) => localStorage.removeItem(key));
}

export function getCityProgress(citySlug: string, spotIds: string[]) {
  const state = getGameState();
  const completed = spotIds.filter((id) => state.progress[id]?.completed).length;
  const total = spotIds.length;
  const score = spotIds.reduce(
    (sum, id) => sum + (state.progress[id]?.score ?? 0),
    0
  );
  return { completed, total, score, percentage: total > 0 ? completed / total : 0 };
}
