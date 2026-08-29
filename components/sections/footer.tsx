import { site } from "@/content/site";
import { LocalClock } from "@/components/local-clock";
import { SiteButton } from "@/components/site-button";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer
      id="footer"
      className="mt-auto flex w-full flex-1 flex-col border-t border-primary/15 bg-surface px-5 pt-10 pb-[calc(var(--mobile-nav-reserve,84px)+20px)] lg:pt-12 lg:pb-5"
    >
      <div className="flex w-full max-w-[1440px] flex-col gap-10 lg:mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-end">
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

        <div className="order-1 flex min-w-[212px] flex-col items-start lg:order-3 lg:justify-self-end">
          <SocialLinks />
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
