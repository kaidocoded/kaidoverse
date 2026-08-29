import Image from "next/image";
import { site } from "@/content/site";
import { SiteButton } from "@/components/site-button";

export function LetsBuild() {
  return (
    <section className="px-5 py-10 lg:px-[138px] lg:py-16">
      <div className="overflow-clip rounded-[14px] border border-primary/10 bg-surface px-4 py-10 lg:px-10 lg:py-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-[120px]">
          <div className="relative w-full max-w-[267px] text-center lg:text-left">
            <h2 className="font-display text-[60px] leading-[1.1] text-primary md:text-[60px]">
              Let’s build.
            </h2>
            <span className="absolute -top-1 right-6 size-[40px] rotate-30 overflow-clip rounded-full border border-surface-3 lg:right-0">
              <Image
                src="/images/avatar.jpg"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <p className="mt-3 text-[14px] leading-[1.1] text-dim">
              Lookin’ to build your idea, or chat design freely 1:1 with me?
              Click below.
            </p>
          </div>
          <div className="flex w-full max-w-[311px] flex-col gap-5">
            <SiteButton
              href={site.ctas.build.href}
              label={site.ctas.build.label}
              badge={site.ctas.build.badge}
              variant="filled"
              className="w-full"
            />
            <SiteButton
              href={site.ctas.chat.href}
              label={site.ctas.chat.label}
              variant="outlined"
              className="w-full lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
