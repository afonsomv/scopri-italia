import { Spot } from "@/lib/types";
import { pisaSpots } from "./pisa";
import { luccaSpots } from "./lucca";
import { sienaSpots } from "./siena";
import { florenceSpots } from "./florence";
import { romeSpots } from "./rome";

export const allSpots: Record<string, Spot[]> = {
  pisa: pisaSpots,
  lucca: luccaSpots,
  siena: sienaSpots,
  florence: florenceSpots,
  rome: romeSpots,
};

export function getSpotsByCity(citySlug: string): Spot[] {
  return allSpots[citySlug] ?? [];
}

export function getSpotById(id: string): Spot | undefined {
  for (const spots of Object.values(allSpots)) {
    const spot = spots.find((s) => s.id === id);
    if (spot) return spot;
  }
  return undefined;
}
