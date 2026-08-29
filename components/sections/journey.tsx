import Image from "next/image";
import Link from "next/link";
import { CurrentlyOrb } from "@/components/currently-orb";
import { JourneyTimeline } from "@/components/journey-timeline";
import { journey } from "@/content/journey";

export function JourneySection({
  showIntro = true,
}: {
  showIntro?: boolean;
}) {
  const current = journey.entries.filter((e) => e.current);
  const previous = journey.entries.filter((e) => !e.current);

  return (
    <div className="mx-auto flex w-full max-w-[454px] flex-col gap-[120px]">
      {showIntro ? (
        <div className="text-center">
          <h2 className="font-display text-[48px] leading-[1.1] text-primary md:text-[60px]">
            {journey.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[335px] text-[16px] leading-[1.2] text-dim">
            {journey.subhead}
          </p>
        </div>
      ) : null}

      <JourneyTimeline>
        <div className="mb-6 flex items-center">
          <CurrentlyOrb />
        </div>
        <ol className="mb-10 flex flex-col gap-8">
          {current.map((entry) => (
            <JourneyRow key={entry.org} entry={entry} />
          ))}
        </ol>

        <p className="mb-6 text-[9px] text-dim lg:text-[13px]">
          <span className="rounded-full border border-muted px-1 py-0.5 lg:px-2">
            Previously
          </span>
        </p>
        <ol className="flex flex-col gap-8">
          {previous.map((entry) => (
            <JourneyRow key={entry.org} entry={entry} />
          ))}
        </ol>
      </JourneyTimeline>
    </div>
  );
}

function JourneyRow({
  entry,
}: {
  entry: (typeof journey.entries)[number];
}) {
  const body = (
    <div className="flex items-start justify-between gap-3 lg:gap-5">
      <div className="flex shrink-0 items-center gap-2 pt-1 lg:w-[88px] lg:pt-2">
        <span
          aria-hidden
          className="block h-px w-3 shrink-0 bg-primary"
        />
        <div className="flex items-center gap-1">
          <span className="whitespace-nowrap text-[6px] leading-[1.1] text-dim lg:text-[8px]">
            {entry.start}
          </span>
          <span className="relative flex size-[11px] shrink-0 items-center justify-center">
            <Image
              src="/icons/journey-date-arrow.svg"
              alt=""
              width={8}
              height={8}
              className="block size-2 rotate-45 brightness-0"
            />
          </span>
          <span className="whitespace-nowrap text-[6px] leading-[1.1] text-dim lg:text-[8px]">
            {entry.end}
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <p
            className="text-[22px] font-medium leading-[1.1] text-primary lg:text-[24px]"
            {...(entry.title.endsWith("...")
              ? { "aria-label": entry.title }
              : {})}
          >
            <JourneyTitle title={entry.title} />
          </p>
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap text-[12px] font-light leading-[1.1] text-primary lg:text-[16px]">
              {entry.org}
            </p>
            <span
              className="h-3 w-px shrink-0 bg-surface-3"
              aria-hidden="true"
            />
            <p className="max-w-[90px] text-[8px] leading-[1.1] text-dim lg:max-w-none lg:whitespace-nowrap lg:text-[12px]">
              {entry.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (entry.href) {
    return (
      <li>
        <Link href={entry.href} className="block transition-opacity hover:opacity-80">
          {body}
        </Link>
      </li>
    );
  }

  return <li>{body}</li>;
}

function JourneyTitle({ title }: { title: string }) {
  if (!title.endsWith("...")) {
    return title;
  }

  const base = title.slice(0, -3);

  return (
    <>
      {base}
      <span className="inline-flex" aria-hidden>
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="journey-ellipsis-dot"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            .
          </span>
        ))}
      </span>
    </>
  );
}
