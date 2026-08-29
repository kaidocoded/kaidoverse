import { site } from "@/content/site";
import { GlassIcon } from "@/components/glass-icon";
import { LocalClock } from "@/components/local-clock";
import { SiteButton } from "@/components/site-button";

export function Footer() {
  return (
    <footer
      id="footer"
      className="mt-auto flex flex-1 flex-col border-t border-primary/15 bg-surface px-5 pt-10 pb-[calc(var(--mobile-nav-reserve,84px)+40px)] lg:px-5 lg:py-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <LocalClock />
          <div className="hidden w-fit overflow-clip rounded-[26px] border border-primary/8 bg-ink/60 p-3 shadow-[0px_2px_12px_2px_rgba(0,0,0,0.06)] backdrop-blur-[10px] lg:inline-flex lg:gap-3">
            <SiteButton
              href={site.ctas.build.href}
              label={site.ctas.build.label}
              variant="filled"
              className="w-[240px]"
            />
          </div>
        </div>

        <div className="order-1 flex min-w-[212px] flex-col items-start gap-3 lg:order-3 lg:justify-self-end">
          <p className="text-[18px] font-medium leading-[1.1] text-quiet">
            Follow along
          </p>
          <div className="flex h-[44px] items-center gap-3">
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="block size-[44px] shrink-0 hover:opacity-80"
              >
                <GlassIcon src={social.icon} alt="" tone="dark" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-3 flex flex-col items-stretch gap-6 lg:order-2 lg:items-center">
          <div className="flex justify-between text-[9px] leading-[1.3] text-dim lg:flex-col lg:justify-center lg:items-end lg:text-right lg:text-[13px]">
            <p>{site.designedBy}</p>
            <p className="lg:mt-1">{site.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
