import { ALL_QUIZZES, quizSlug } from "@/data/quizzes";
import QuizPageClient from "./QuizPageClient";

export function generateStaticParams() {
  return ALL_QUIZZES.map((q) => ({ id: quizSlug(q) }));
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <QuizPageClient id={id} />;
}
