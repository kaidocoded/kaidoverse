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
      className={`relative inline-block size-10 shrink-0 rounded-[11.25px] shadow-[0px_3.929px_15.714px_3.75px_rgba(0,0,0,0.8)] md:size-[55px] md:rounded-[15.714px] ${className ?? ""}`}
    >
      <span className="relative block size-full overflow-hidden rounded-[11.25px] border border-[#656565] [clip-path:inset(0_round_11.25px)] md:rounded-[15.714px] md:[clip-path:inset(0_round_15.714px)]">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[11.25px] bg-[rgba(255,255,255,0.01)] backdrop-blur-[6px] md:rounded-[15.714px]"
        />
        {children}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[11.25px] shadow-[inset_0px_7.857px_7.857px_0px_rgba(0,0,0,0.4)] md:rounded-[15.714px]"
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
        sizes="(min-width: 1024px) 750px, 100vw"
        className="size-full object-cover object-[32%_22%]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0a0a0a] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2.5">
          <p className="flex items-center gap-2.5 text-[40px] font-medium leading-[1.1] text-white md:text-[55px]">
            <span>Hi</span>
            <HeroChip className="hero-wave-chip cursor-pointer">
              <span className="absolute top-1/2 left-1/2 size-[35px] -translate-x-1/2 -translate-y-1/2">
                <span className="hero-wave-icon block size-full origin-[65%_90%]">
                  <Image
                    src="/images/wave.png"
                    alt=""
                    width={35}
                    height={35}
                    className="size-full object-cover"
                  />
                </span>
              </span>
            </HeroChip>
            <span>,</span>
          </p>
          <p className="flex items-center gap-2.5 text-[40px] font-medium leading-[1.1] text-white md:text-[55px]">
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
                <span className="absolute top-1/2 left-1/2 size-[27.5px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[7.5px] border-[0.625px] border-[#656565] transition-transform duration-300 ease-in-out [clip-path:inset(0_round_7.5px)] group-hover/avatar:scale-110 md:size-[39.286px] md:rounded-[10.476px] md:[clip-path:inset(0_round_10.476px)]">
                  <Image
                    src="/images/avatar-hero.jpg"
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                  <span className="absolute top-[7.5px] right-[5px] text-[8.75px] font-extralight leading-none text-[#ebeae6] md:top-[10.86px] md:right-[8.54px] md:text-[11.786px]">
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
