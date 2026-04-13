import { GameState } from "@/lib/types";
import { getSpotsByCity, allSpots } from "@/data/spots";
import { ALL_QUIZZES } from "@/data/quizzes";

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "milestone" | "city" | "skill";
}

export const badges: Badge[] = [
  {
    id: "first-quiz",
    name: "First Steps",
    description: "Complete your first quiz.",
    icon: "\uD83C\uDF31",
    category: "milestone",
  },
  {
    id: "perfect-score",
    name: "Perfetto!",
    description: "Score 100% on any quiz.",
    icon: "\uD83D\uDCAF",
    category: "skill",
  },
  {
    id: "streak-3",
    name: "On Fire",
    description: "Get 3 correct answers in a row.",
    icon: "\uD83D\uDD25",
    category: "skill",
  },
  {
    id: "streak-5",
    name: "Unstoppable",
    description: "Get 5 correct answers in a row.",
    icon: "\u26A1",
    category: "skill",
  },
  {
    id: "pisa-complete",
    name: "Pisan Scholar",
    description: "Complete all Pisa spots.",
    icon: "\uD83C\uDFD7\uFE0F",
    category: "city",
  },
  {
    id: "lucca-complete",
    name: "Lucchese Explorer",
    description: "Complete all Lucca spots.",
    icon: "\uD83C\uDFF0",
    category: "city",
  },
  {
    id: "florence-complete",
    name: "Florentine Renaissance",
    description: "Complete all Florence spots.",
    icon: "\uD83C\uDFA8",
    category: "city",
  },
  {
    id: "siena-complete",
    name: "Sienese Expert",
    description: "Complete all Siena spots.",
    icon: "\uD83D\uDC0E",
    category: "city",
  },
  {
    id: "rome-complete",
    name: "Roman Historian",
    description: "Complete all Rome spots.",
    icon: "\uD83C\uDFDB\uFE0F",
    category: "city",
  },
  {
    id: "ac-florence-complete",
    name: "Auditore Heir",
    description: "Complete all 3 Assassin's Creed bonus quizzes in Florence.",
    icon: "\uD83D\uDDE1\uFE0F",
    category: "skill",
  },
  {
    id: "ac-rome-complete",
    name: "Mentor of Rome",
    description: "Complete all 6 Assassin's Creed Brotherhood bonus quizzes in Rome.",
    icon: "\uD83D\uDDE1\uFE0F",
    category: "skill",
  },
  {
    id: "grand-tourist",
    name: "Grand Tourist",
    description: "Complete all spots in every city.",
    icon: "\uD83D\uDC51",
    category: "milestone",
  },
  {
    id: "challenge-hunter",
    name: "Challenge Hunter",
    description: "Complete 10 scavenger hunt challenges.",
    icon: "\uD83D\uDD0D",
    category: "skill",
  },
  {
    id: "halfway",
    name: "Halfway There",
    description: "Complete 50% of all spots.",
    icon: "\u2B50",
    category: "milestone",
  },
];

function isCityComplete(citySlug: string, progress: GameState["progress"]): boolean {
  const spots = getSpotsByCity(citySlug);
  if (spots.length === 0) return false;
  return spots.every((spot) => progress[spot.id]?.completed);
}

export function getUnlockedBadgeIds(state: GameState): string[] {
  const unlocked: string[] = [];
  const { progress, bestStreak } = state;

  const completedSpots = Object.values(progress).filter((p) => p.completed);

  // first-quiz: at least 1 spot completed
  if (completedSpots.length >= 1) {
    unlocked.push("first-quiz");
  }

  // perfect-score: any spot has score === totalQuestions
  if (completedSpots.some((p) => p.score === p.totalQuestions && p.totalQuestions > 0)) {
    unlocked.push("perfect-score");
  }

  // streak-3: bestStreak >= 3
  if (bestStreak >= 3) {
    unlocked.push("streak-3");
  }

  // streak-5: bestStreak >= 5
  if (bestStreak >= 5) {
    unlocked.push("streak-5");
  }

  // City completions
  const cityBadgeMap: Record<string, string> = {
    pisa: "pisa-complete",
    lucca: "lucca-complete",
    florence: "florence-complete",
    siena: "siena-complete",
    rome: "rome-complete",
  };

  const citySlugs = Object.keys(cityBadgeMap);
  let allCitiesComplete = true;

  for (const citySlug of citySlugs) {
    if (isCityComplete(citySlug, progress)) {
      unlocked.push(cityBadgeMap[citySlug]);
    } else {
      allCitiesComplete = false;
    }
  }

  // grand-tourist: all 5 city badges unlocked
  if (allCitiesComplete) {
    unlocked.push("grand-tourist");
  }

  // challenge-hunter: total completedChallenges across all spots >= 10
  const totalChallenges = Object.values(progress).reduce(
    (sum, p) => sum + (p.completedChallenges?.length ?? 0),
    0
  );
  if (totalChallenges >= 10) {
    unlocked.push("challenge-hunter");
  }

  // halfway: completed spots / total spots >= 0.5
  const totalSpots = Object.values(allSpots).reduce((sum, spots) => sum + spots.length, 0);
  if (totalSpots > 0 && completedSpots.length / totalSpots >= 0.5) {
    unlocked.push("halfway");
  }

  // AC bonus city completions — keyed by quiz slug, not spotId
  const allBonusCompleted = (theme: "ac-florence" | "ac-rome") => {
    const quizzes = ALL_QUIZZES.filter((q) => q.bonusTheme === theme);
    if (quizzes.length === 0) return false;
    return quizzes.every((q) => progress[q.slug ?? q.spotId]?.completed);
  };

  if (allBonusCompleted("ac-florence")) {
    unlocked.push("ac-florence-complete");
  }
  if (allBonusCompleted("ac-rome")) {
    unlocked.push("ac-rome-complete");
  }

  return unlocked;
}
