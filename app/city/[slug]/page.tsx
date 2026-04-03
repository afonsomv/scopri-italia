import { cities } from "@/data/itinerary";
import CityPageClient from "./CityPageClient";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CityPageClient slug={slug} />;
}
