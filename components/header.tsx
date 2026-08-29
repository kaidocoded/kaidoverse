"use client";

import { BorderBeam } from "border-beam";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { useNav } from "@/components/site-shell";

export function Header() {
  const { setOpen } = useNav();

  return (
    <header className="pointer-events-none fixed top-5 left-1/2 z-40 hidden w-full max-w-[1440px] -translate-x-1/2 px-5 lg:block lg:px-0">
      <div className="lg:w-[400px] lg:px-5">
        <BorderBeam
          size="md"
          colorVariant="mono"
          strength={0.88}
          theme="light"
          borderRadius={26}
          className="pointer-events-auto w-full"
        >
          <div className="relative flex w-full items-center justify-between gap-5 overflow-clip rounded-[26px] border border-primary/8 p-3 shadow-[0px_2px_12px_2px_rgba(0,0,0,0.06)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[26px] bg-ink/60 backdrop-blur-[24px]"
            />
            <Link href="/" className="relative z-10 flex items-center gap-1">
              <span className="relative size-14 shrink-0 overflow-clip rounded-[14px] border border-primary/8">
                <Image
                  src="/images/avatar-nav.jpg"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
                <span className="absolute top-[6px] right-[2px] text-[11px] font-extralight leading-none text-primary">
                  ®
                </span>
              </span>
              <span className="px-2.5 text-[16px] font-medium leading-[1.1] text-primary">
                {site.handle}
              </span>
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="relative z-10 size-14 shrink-0 cursor-pointer overflow-clip rounded-[14px] border border-primary/8"
            >
              <span className="absolute top-1/2 left-1/2 flex h-5 w-[25px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between">
                <span className="block h-[1.75px] w-full bg-primary" />
                <span className="block h-[1.75px] w-full bg-primary" />
                <span className="block h-[1.75px] w-full bg-primary" />
              </span>
            </button>
          </div>
        </BorderBeam>
      </div>
    </header>
  );
}
