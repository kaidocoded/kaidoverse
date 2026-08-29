export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="px-5 pb-12 text-center">
      <h1 className="font-display text-[48px] leading-[1.1] text-primary md:text-[80px]">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-[1.3] text-dim">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
