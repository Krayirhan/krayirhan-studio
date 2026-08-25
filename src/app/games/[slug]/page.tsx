import { redirect } from "next/navigation";
import { GAMES } from "@/data/games";

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

export default async function LegacyGameRedirect({ params }: GamePageProps) {
  const { slug } = await params;
  redirect(`/products/${slug}`);
}
