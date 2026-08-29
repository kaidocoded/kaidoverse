const sectionPadding = {
  hero: "pt-[180px] pb-8",
  default: "pt-10 pb-8 lg:pt-8 lg:pb-8",
  large: "pt-10 pb-10 lg:pt-16 lg:pb-16",
} as const;

const labelClassName =
  "sticky top-[180px] text-[20px] leading-[1.2] text-primary";

export function SplitSection({
  id,
  label,
  children,
  padding = "default",
  contentClassName = "",
  innerClassName = "",
  borderless = false,
  columnDivider = false,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  padding?: keyof typeof sectionPadding;
  contentClassName?: string;
  innerClassName?: string;
  borderless?: boolean;
  columnDivider?: boolean;
}) {
  const pad = sectionPadding[padding];
  const borderClassName = borderless ? "" : "border-primary/20 lg:border-l";

  return (
    <section
      id={id}
      className="grid min-w-0 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-stretch"
    >
      <div className={`hidden self-stretch pl-10 pr-5 lg:block ${pad}`}>
        <p className={labelClassName}>{label}</p>
      </div>
      <div
        className={`relative min-w-0 px-5 lg:px-5 ${borderClassName} ${pad} ${contentClassName}`}
      >
        {columnDivider ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-primary/20 lg:block"
          />
        ) : null}
        {innerClassName ? (
          <div className={innerClassName}>{children}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

export function SectionLabel({
  label,
  padding = "default",
}: {
  label: string;
  padding?: keyof typeof sectionPadding;
}) {
  const pad = sectionPadding[padding];

  return (
    <div className={`hidden self-stretch pl-10 pr-5 lg:block ${pad}`}>
      <p className={labelClassName}>{label}</p>
    </div>
  );
}
