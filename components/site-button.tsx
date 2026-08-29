import Image from "next/image";
import Link from "next/link";

type SiteButtonProps = {
  href: string;
  label: string;
  badge?: string;
  variant: "filled" | "outlined" | "tertiary";
  className?: string;
};

export function SiteButton({
  href,
  label,
  badge,
  variant,
  className = "",
}: SiteButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");
  const classNames =
    variant === "filled"
      ? `relative flex h-[60px] items-center overflow-clip rounded-[14px] bg-primary px-5 text-ink shadow-[inset_0px_-2px_0px_2px_rgba(255,255,255,0.12),inset_0px_-8px_2px_0px_rgba(0,0,0,0.12)] ${
          badge ? "justify-between" : "justify-center gap-3"
        }`
      : variant === "outlined"
        ? `relative flex h-[60px] items-center rounded-[14px] border-2 border-primary px-5 text-primary ${
            badge ? "justify-between" : "justify-center gap-3"
          }`
        : "relative flex h-[60px] items-center justify-center rounded-[14px] px-5 text-[16px] font-medium text-dim transition-colors hover:text-primary";

  const showArrow = variant !== "tertiary";

  const inner = (
    <>
      <span className={`flex items-center ${showArrow ? "gap-3" : ""}`}>
        <span
          className={
            variant === "tertiary"
              ? "leading-[1.1]"
              : "text-[18px] font-medium leading-[1.1]"
          }
        >
          {label}
        </span>
        {showArrow ? (
          <span className="relative size-[17px] shrink-0 overflow-clip">
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={12}
              height={12}
              className={`absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 ${
                variant === "filled" ? "brightness-0 invert" : ""
              }`}
            />
          </span>
        ) : null}
      </span>
      {badge ? (
        <span
          className={
            variant === "filled"
              ? "flex h-6 w-11 items-center justify-center rounded-[4px] bg-ink text-[12px] font-medium text-primary"
              : "flex h-6 w-11 items-center justify-center rounded-[4px] bg-primary text-[12px] font-medium text-ink"
          }
        >
          {badge}
        </span>
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${classNames} ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${classNames} ${className}`}>
      {inner}
    </Link>
  );
}
