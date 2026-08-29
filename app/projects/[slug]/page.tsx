import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/footer";
import { LetsBuild } from "@/components/sections/lets-build";
import { ProjectDetailSection } from "@/components/sections/project-detail";
import { getProject, getProjectSlugs } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project — Kaidoverse" };
  }

  return {
    title: `${project.client} — Kaidoverse`,
    description: project.detail.aboutBody,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col pt-32">
      <ProjectDetailSection project={project} />
      <div className="border-t border-primary/20">
        <LetsBuild />
      </div>
      <Footer />
    </main>
  );
}
