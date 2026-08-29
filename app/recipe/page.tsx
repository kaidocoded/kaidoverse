import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/sections/footer";
import { LetsBuild } from "@/components/sections/lets-build";
import { RecipeSection } from "@/components/sections/recipe";
import { recipe } from "@/content/stack";

export const metadata: Metadata = {
  title: "Recipe — Kaidoverse",
  description:
    "The day-to-day app stack Kaido uses for design, organization, focus, and automation.",
};

export default function RecipePage() {
  return (
    <main className="pt-32">
      <PageHero title={recipe.heading} subtitle={recipe.body} />
      <div className="px-5 pb-16">
        <RecipeSection showIntro={false} />
      </div>
      <LetsBuild />
      <Footer />
    </main>
  );
}
