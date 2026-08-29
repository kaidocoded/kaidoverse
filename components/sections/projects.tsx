import Image from "next/image";
import Link from "next/link";
import { DisabledProjectViewButton } from "@/components/disabled-project-view-button";
import { TiltCard } from "@/components/tilt-card";
import { projects, type Project } from "@/content/projects";

export function ProjectsSection({
  showIntro = true,
  items = projects.filter((p) => p.featured),
  viewEnabled = true,
}: {
  showIntro?: boolean;
  items?: Project[];
  viewEnabled?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[335px] lg:max-w-[336px]">
      {showIntro ? (
        <div className="mb-12 text-center">
          <h2 className="font-display text-[40px] leading-[1.1] text-primary">
            Projects +
            <br />
            More Projects.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.15] text-dim">
            Curious what design projects i’ve built or contributed to? Take a
            look.
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-10">
        {items.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            viewEnabled={viewEnabled}
          />
        ))}
      </div>

      {showIntro ? (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex h-[60px] w-full items-center justify-center gap-3 rounded-[14px] border-2 border-primary text-[18px] font-medium text-primary"
          >
            See all projects
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={12}
              height={12}
              className="size-3 rotate-45"
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  viewEnabled,
}: {
  project: Project;
  viewEnabled: boolean;
}) {
  const height = project.height === "tall" ? "h-[400px]" : "h-[240px]";
  const tooltipId = `view-tt-${project.slug}`;

  return (
    <article className="flex flex-col gap-3">
      <TiltCard
        className={height}
        cardClassName="flex flex-col rounded-[12px] border border-surface-3 bg-chrome"
      >
        <div className="flex h-10 items-center justify-between gap-4 px-2">
          <div className="flex items-center gap-2">
            <span className="relative size-5 overflow-clip rounded-full bg-muted">
              <Image
                src="/icons/close-win.svg"
                alt=""
                width={8}
                height={8}
                className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
              />
            </span>
            <span className="relative size-5 overflow-clip rounded-full bg-muted">
              <Image
                src="/icons/expand-win.svg"
                alt=""
                width={7}
                height={12}
                className="absolute top-1/2 left-1/2 h-3 w-[7px] -translate-x-1/2 -translate-y-1/2 -rotate-45"
              />
            </span>
            {project.chrome === "graphic" ? (
              <span className="text-[14px] font-medium text-dim">
                {project.fileLabel}
              </span>
            ) : null}
          </div>
          {project.chrome === "website" ? (
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <span className="h-7 min-w-0 flex-1 truncate rounded-[4px] border border-muted bg-chrome-inset px-2 py-1 text-[14px] font-medium text-dim">
                {project.urlLabel}
              </span>
              <span className="flex size-7 items-center justify-center rounded-[4px] bg-chrome-inset">
                <Image
                  src="/icons/link.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-3"
                />
              </span>
            </div>
          ) : (
            <span className="relative size-7">
              <Image src="/icons/file.svg" alt="" fill className="object-contain" />
            </span>
          )}
        </div>
        <div className="min-h-0 flex-1 p-2">
          <div className="relative h-full overflow-clip rounded-[4px] bg-chrome-inset">
            <Image
              src={project.image}
              alt={`${project.client} project`}
              fill
              sizes="320px"
              className={
                project.imageFit === "contain"
                  ? "object-contain p-8"
                  : "object-cover object-center"
              }
            />
          </div>
        </div>
      </TiltCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] text-dim">Client</p>
          <p className="mt-1 text-[16px] font-medium text-primary">{project.client}</p>
        </div>
        {viewEnabled ? (
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-11 items-center rounded-2xl border border-primary px-5 text-[18px] font-medium text-primary transition-opacity hover:opacity-80"
          >
            View
          </Link>
        ) : (
          <DisabledProjectViewButton tooltipId={tooltipId} />
        )}
      </div>
    </article>
  );
}
