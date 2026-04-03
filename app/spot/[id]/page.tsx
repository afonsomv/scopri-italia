import { allSpots } from "@/data/spots";
import SpotPageClient from "./SpotPageClient";

export function generateStaticParams() {
  return Object.values(allSpots)
    .flat()
    .map((spot) => ({ id: spot.id }));
}

export default async function SpotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SpotPageClient id={id} />;
}
