import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/sections/footer";
import { JourneySection } from "@/components/sections/journey";
import { LetsBuild } from "@/components/sections/lets-build";
import { journey } from "@/content/journey";

export const metadata: Metadata = {
  title: "Journey — Kaidoverse",
  description: "Kaido’s journey as a creative thinker and maker of things.",
};

export default function JourneyPage() {
  return (
    <main className="pt-32">
      <PageHero title={journey.heading} subtitle={journey.subhead} />
      <div className="px-5 pb-16">
        <JourneySection showIntro={false} />
      </div>
      <LetsBuild />
      <Footer />
    </main>
  );
}
