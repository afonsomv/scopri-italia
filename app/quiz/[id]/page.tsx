import { allSpots } from "@/data/spots";
import QuizPageClient from "./QuizPageClient";

export function generateStaticParams() {
  return Object.values(allSpots)
    .flat()
    .map((spot) => ({ id: spot.id }));
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <QuizPageClient id={id} />;
}
