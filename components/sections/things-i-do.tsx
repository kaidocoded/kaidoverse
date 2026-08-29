import { skills } from "@/content/site";

const mobileRows = [
  skills.slice(0, 4),
  skills.slice(4, 8),
  skills.slice(8),
] as const;

const desktopRows = [skills.slice(0, 6), skills.slice(6)] as const;

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-[28px] border border-muted p-2 text-[14px] leading-[1.1] whitespace-nowrap text-dim">
      {label}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 40,
}: {
  items: readonly string[];
  reverse?: boolean;
  duration?: number;
}) {
  // Repeat within each segment so the track is always wider than the viewport.
  const segment = [...items, ...items];

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-clip p-1">
      <div
        className={`marquee-track flex w-max max-w-none ${reverse ? "marquee-track-reverse" : ""}`}
        style={
          { "--marquee-duration": `${duration}s` } as React.CSSProperties
        }
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-x-[20px] pr-[20px]"
            aria-hidden={copy === 1}
          >
            {segment.map((label, i) => (
              <Chip key={`${copy}-${label}-${i}`} label={label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThingsIDo() {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-5">
      <p className="w-full px-5 text-center text-[20px] leading-[1.2] text-primary lg:hidden lg:px-0">
        Things I Do
      </p>
      <div className="flex w-full min-w-0 max-w-full flex-col gap-[20px] lg:hidden">
        <MarqueeRow items={mobileRows[0]} duration={48} />
        <MarqueeRow items={mobileRows[1]} reverse duration={56} />
        <MarqueeRow items={mobileRows[2]} duration={52} />
      </div>
      <div className="hidden w-full min-w-0 flex-col gap-[20px] lg:flex">
        <MarqueeRow items={desktopRows[0]} duration={48} />
        <MarqueeRow items={desktopRows[1]} reverse duration={56} />
      </div>
    </div>
  );
}
