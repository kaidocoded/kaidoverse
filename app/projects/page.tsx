import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Footer } from "@/components/sections/footer";
import { LetsBuild } from "@/components/sections/lets-build";
import { ProjectsSection } from "@/components/sections/projects";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects — Kaidoverse",
  description:
    "Design projects Kaido has built or contributed to — websites, logos, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col pt-32">
      <PageHero
        title="Projects"
        subtitle="Curious what design projects i’ve built or contributed to? Take a look."
      />
      <div className="px-5 pb-16">
        <ProjectsSection showIntro={false} items={projects} />
      </div>
      <LetsBuild />
      <Footer />
    </main>
  );
}
