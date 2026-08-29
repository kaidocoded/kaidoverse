import type { Project } from "@/content/projects";

function Hairline() {
  return <div className="h-px w-full bg-surface-3" aria-hidden />;
}

function YearPill({ year }: { year: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[4px] bg-surface-3 px-1 py-0.5 text-[12px] leading-[1.1] text-dim">
      {year}
    </span>
  );
}

function StatusPill() {
  return (
    <span className="inline-flex items-center justify-center rounded-[4px] bg-muted px-1 py-0.5 text-[12px] leading-[1.1] text-dim">
      WIP / COMING SOON
    </span>
  );
}

export function ProjectDetailSection({ project }: { project: Project }) {
  const { detail } = project;

  return (
    <div className="relative mx-auto w-full max-w-[1440px]">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-primary/15 lg:block" />

      <div className="lg:grid lg:grid-cols-2">
        <div className="flex flex-col lg:max-w-[710px]">
          <div className="flex min-h-[180px] items-center justify-center px-5 py-12 lg:min-h-[247px] lg:py-16">
            <h1 className="text-center font-display text-[48px] leading-[1.1] text-primary md:text-[80px]">
              {project.client}
            </h1>
          </div>

          <Hairline />

          <section className="flex flex-col gap-10 px-5 py-10">
            <h2 className="text-[28px] font-medium leading-[1.1] text-primary">
              {detail.aboutHeading}
            </h2>
            <p className="max-w-[453px] text-[16px] leading-[1.1] text-dim">
              {detail.aboutBody}
            </p>
          </section>

          <Hairline />

          <section className="flex flex-col gap-10 px-5 py-10">
            <h2 className="text-[28px] font-medium leading-[1.1] text-primary">
              {detail.indexHeading}
            </h2>
            <p className="max-w-[453px] text-[16px] leading-[1.1] text-dim">
              {detail.indexBody}
            </p>
          </section>

          <Hairline />

          <ul className="flex flex-col">
            {detail.index.map((item) => (
              <li key={item.title}>
                <div className="flex items-center justify-between gap-4 bg-surface-2 px-5 py-5">
                  <p className="min-w-0 text-[16px] font-medium leading-[1.1] text-primary lg:text-[20px]">
                    {item.title}
                  </p>
                  <div className="flex shrink-0 items-center gap-1">
                    {item.years.map((year) => (
                      <YearPill key={year} year={year} />
                    ))}
                    {item.status === "wip" ? <StatusPill /> : null}
                  </div>
                </div>
                <Hairline />
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block" aria-hidden />
      </div>
    </div>
  );
}
