import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { JourneySection } from "@/components/sections/journey";
import { LetsBuild } from "@/components/sections/lets-build";
import { ProjectsSection } from "@/components/sections/projects";
import { RecipeSection } from "@/components/sections/recipe";
import { ThingsIDo } from "@/components/sections/things-i-do";
import { WhatWhere } from "@/components/sections/what-where";
import { SectionLabel, SplitSection } from "@/components/split-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative mx-auto min-w-0 max-w-[1440px] overflow-x-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-[400px] hidden w-px bg-primary/20 lg:block" />

        <section className="grid min-w-0 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-stretch">
          <SectionLabel label="Hi, Fellow Human -&gt;" padding="hero" />
          <div className="relative min-h-[460px] border-primary/20 p-5 lg:min-h-[620px] lg:border-l">
            <Hero />
          </div>
        </section>

        <SplitSection
          label="Things I Do -&gt;"
          contentClassName="overflow-x-clip !px-0 lg:!px-5"
        >
          <ThingsIDo />
        </SplitSection>

        <SplitSection id="where" label="What/Where -&gt;">
          <WhatWhere />
        </SplitSection>

        <SplitSection
          id="journey"
          label="Work History -&gt;"
          padding="large"
          contentClassName="!pb-20 lg:!pb-16"
        >
          <JourneySection />
        </SplitSection>

        <SplitSection
          id="projects"
          label="Work Portfolio -&gt;"
          padding="large"
          borderless
          columnDivider
          contentClassName="!p-0"
          innerClassName="relative z-[1] w-full rounded-t-[80px] bg-surface-2 px-5 pt-10 pb-10 lg:px-5 lg:pt-16 lg:pb-16"
        >
          <ProjectsSection />
        </SplitSection>

        <SplitSection id="recipe" label="App-Stack -&gt;" padding="large">
          <RecipeSection />
        </SplitSection>
      </div>

      <div className="border-t border-primary/20">
        <LetsBuild />
      </div>
      <Footer />
    </main>
  );
}
