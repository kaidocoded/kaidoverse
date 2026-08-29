import Image from "next/image";

function LocationChip() {
  return (
    <span className="inline-flex items-center">
      <span className="relative size-11 overflow-clip rounded-[12.5px] border border-primary/10 shadow-[0px_3.143px_12.571px_3.143px_rgba(0,0,0,0.12)]">
        <span className="absolute inset-0 bg-surface" />
        <span className="absolute top-[5px] left-[5px] size-[31px] overflow-clip rounded-[6px] border border-primary/10">
          <Image
            src="/images/location.png"
            alt=""
            fill
            sizes="32px"
            className="object-cover"
          />
        </span>
        <span className="pointer-events-none absolute inset-0 shadow-[inset_0px_6px_6px_0px_rgba(0,0,0,0.08)]" />
      </span>
      <span className="text-primary">.</span>
    </span>
  );
}

export function WhatWhere() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
      {/* Mobile line breaks match Figma */}
      <div className="flex flex-col items-center gap-0 text-[32px] font-semibold leading-[1.5] lg:hidden">
        <p className="flex flex-wrap items-center justify-center gap-x-2">
          <span className="text-quiet">I’m</span>
          <span className="text-quiet">a</span>
          <span className="text-primary">graphic</span>
          <span className="text-primary">+</span>
          <span className="text-primary">ui</span>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-2">
          <span className="relative inline-flex flex-col items-start justify-center">
            <span className="mb-[-8px] w-full text-right text-[8px] font-light leading-[8px] text-quiet">
              (designer)
            </span>
            <span className="text-primary">dsgnr</span>
          </span>
          <span className="text-quiet">based</span>
          <span className="text-quiet">in</span>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-2">
          <span className="text-primary">Salt</span>
          <span className="text-primary">Lake</span>
          <span className="text-primary">City,</span>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-2">
          <span className="text-primary">Utah</span>
          <LocationChip />
        </p>
      </div>

      {/* Desktop wrapping */}
      <div className="hidden flex-col items-center gap-2 lg:flex">
        <p className="flex flex-wrap items-center justify-center gap-2 text-[44px] font-semibold leading-[1.1]">
          <span className="text-quiet">I’m</span>
          <span className="text-quiet">a</span>
          <span className="text-primary">graphic</span>
          <span className="text-primary">+</span>
          <span className="text-primary">ui</span>
          <span className="relative inline-flex flex-col items-start justify-center">
            <span className="mb-[-8px] w-full text-right text-[8px] font-light leading-[8px] text-quiet">
              (designer)
            </span>
            <span className="text-primary">dsgnr</span>
          </span>
          <span className="text-quiet">based</span>
          <span className="text-quiet">in</span>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2 text-[44px] font-semibold leading-[1.1]">
          <span className="text-primary">Salt Lake City, Utah</span>
          <LocationChip />
        </p>
      </div>
    </div>
  );
}
