import Image from "next/image";
import { site } from "@/content/site";

const instagramHref =
  site.socials.find((social) => social.name === "Instagram")?.href ??
  "https://instagram.com/kaidoverse";

function HeroChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block size-8 shrink-0 rounded-[9px] shadow-[0px_3.143px_12.571px_3px_rgba(0,0,0,0.8)] md:size-11 md:rounded-[12.571px] ${className ?? ""}`}
    >
      <span className="relative block size-full overflow-hidden rounded-[9px] border border-[#656565] [clip-path:inset(0_round_9px)] md:rounded-[12.571px] md:[clip-path:inset(0_round_12.571px)]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[9px] bg-[rgba(255,255,255,0.01)] backdrop-blur-[6px] md:rounded-[12.571px]"
        />
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[9px] shadow-[inset_0px_6.286px_6.286px_0px_rgba(0,0,0,0.4)] md:rounded-[12.571px]"
        />
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[14px] lg:absolute lg:inset-0 lg:h-auto lg:rounded-none">
      <Image
        src="/images/hero.jpg"
        alt="Kaido standing in a spotlight"
        fill
        priority
        sizes="(min-width: 1024px) 690px, 100vw"
        className="size-full object-cover object-[32%_22%]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0a0a0a] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <p className="flex items-center gap-2 text-[32px] font-medium leading-[1.1] text-white md:text-[44px]">
          <span>Hi</span>
          <HeroChip className="hero-wave-chip cursor-pointer">
            <span className="absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2">
              <span className="hero-wave-icon block size-full origin-[65%_90%]">
                <Image
                  src="/images/wave.png"
                  alt=""
                  width={28}
                  height={28}
                  className="size-full object-cover"
                />
              </span>
            </span>
          </HeroChip>
          <span>,</span>
          </p>
          <p className="flex items-center gap-2 text-[32px] font-medium leading-[1.1] text-white md:text-[44px]">
          <span>I’m</span>
          <span>Kaido</span>
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Kaido on Instagram"
            className="inline-block cursor-pointer"
          >
            <HeroChip className="group/avatar">
              <span className="absolute top-1/2 left-1/2 size-[22px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[6px] border-[0.5px] border-[#656565] transition-transform duration-300 ease-in-out [clip-path:inset(0_round_6px)] group-hover/avatar:scale-110 md:size-[31.429px] md:rounded-[8.381px] md:[clip-path:inset(0_round_8.381px)]">
                <Image
                  src="/images/avatar-hero.jpg"
                  alt=""
                  fill
                  sizes="32px"
                  className="object-contain"
                />
                <span className="absolute top-[6px] right-[4px] text-[7px] font-extralight leading-none text-[#ebeae6] md:top-[8.69px] md:right-[6.83px] md:text-[9.429px]">
                  ®
                </span>
              </span>
            </HeroChip>
          </a>
          <span>.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
