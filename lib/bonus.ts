"use client";

/**
 * Unlock logic for AC-themed bonus quizzes.
 *
 * Florence: all 3 standard Florence quizzes must be completed → all 3 AC quizzes unlock together.
 * Rome: per-spot — each Rome AC quiz unlocks when the matching standard quiz is complete.
 *
 * Two bypass mechanisms exist for testing:
 *   • localStorage flag `dev-unlock-ac` = "1"  (toggle from the profile page)
 *   • URL query param `?unlockAC=1`            (session-only via sessionStorage)
 */

import { GameState, BonusTheme, QuizSet } from "./types";
import { getGameState } from "./progress";

const DEV_FLAG_KEY = "dev-unlock-ac";
const SESSION_FLAG_KEY = "session-unlock-ac";
const QUERY_PARAM = "unlockAC";

export const FLORENCE_REQUIRED_SPOTS = [
  "florence-duomo",
  "florence-signoria",
  "florence-ponte-vecchio",
];

/** Returns true when AC quizzes should be force-unlocked for testing. */
export function isDevUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(DEV_FLAG_KEY) === "1") return true;
  if (sessionStorage.getItem(SESSION_FLAG_KEY) === "1") return true;
  return false;
}

export function setDevUnlock(value: boolean) {
  if (typeof window === "undefined") return;
  if (value) localStorage.setItem(DEV_FLAG_KEY, "1");
  else localStorage.removeItem(DEV_FLAG_KEY);
}

/** Read `?unlockAC=1` from the URL once on load and persist for the session. */
export function applyUnlockQueryParam() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  if (params.get(QUERY_PARAM) === "1") {
    sessionStorage.setItem(SESSION_FLAG_KEY, "1");
  }
}

/**
 * Decide if a given bonus quiz is unlocked.
 * `state` is optional — if omitted we read from localStorage.
 */
export function isBonusUnlocked(quiz: QuizSet, state?: GameState): boolean {
  if (!quiz.bonusTheme) return true;
  if (isDevUnlocked()) return true;

  const s = state ?? getGameState();

  if (quiz.bonusTheme === "ac-florence") {
    return FLORENCE_REQUIRED_SPOTS.every(
      (id) => s.progress[id]?.completed === true
    );
  }

  if (quiz.bonusTheme === "ac-rome") {
    // The standard quiz lives at quiz.spotId
    return s.progress[quiz.spotId]?.completed === true;
  }

  return false;
}

/** Short hint shown to the user when a bonus is locked. */
export function bonusUnlockHint(theme: BonusTheme): string {
  switch (theme) {
    case "ac-florence":
      return "Complete all 3 Florence quizzes to unlock the Assassin's Creed bonus.";
    case "ac-rome":
      return "Complete the standard quiz for this spot to unlock its AC Brotherhood bonus.";
  }
}

/** Display label / colour tokens for a theme. Tailwind class strings. */
export const bonusThemeStyles: Record<
  BonusTheme,
  {
    label: string;
    badge: string; // bg + text classes for the badge pill
    border: string; // border colour for cards
    accent: string; // text colour for emphasis
    icon: string;
  }
> = {
  "ac-florence": {
    label: "AC Bonus · Firenze",
    badge: "bg-ac-florence/15 text-ac-florence",
    border: "border-ac-florence/40",
    accent: "text-ac-florence",
    icon: "🗡️",
  },
  "ac-rome": {
    label: "AC Bonus · Brotherhood",
    badge: "bg-ac-rome/15 text-ac-rome",
    border: "border-ac-rome/40",
    accent: "text-ac-rome",
    icon: "🗡️",
  },
};
