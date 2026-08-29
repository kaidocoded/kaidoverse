"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowOutIcon } from "@/components/arrow-out-icon";
import { recipe } from "@/content/stack";
import { GlassIcon } from "@/components/glass-icon";

function RecipeGroup({
  group,
}: {
  group: (typeof recipe.groups)[number];
}) {
  const [open, setOpen] = useState(group.title === "Design");

  return (
    <details className="group" open={open}>
      <summary
        className="flex cursor-pointer list-none items-end gap-3 group-open:mb-8 [&::-webkit-details-marker]:hidden"
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <h3 className="text-[28px] leading-[1.1] text-primary">{group.title}</h3>
        <Image
          src="/icons/chevron.svg"
          alt=""
          width={24}
          height={24}
          className="mb-0.5 size-6 -rotate-90 brightness-0 transition-transform duration-200 group-open:rotate-0"
        />
      </summary>
      {group.comingSoon ? (
        <p className="text-center text-[16px] leading-[1.2] text-dim/50">
          Stack coming soon.
        </p>
      ) : (
        <ul className="flex flex-col gap-[28px]">
          {group.tools.map((tool) => (
            <li key={tool.name}>
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <GlassIcon
                    src={tool.icon}
                    alt=""
                    iconClassName="brightness-0"
                  />
                  <span className="min-w-0">
                    <span className="block text-[18px] leading-[1.1] text-primary">
                      {tool.name}
                    </span>
                    {tool.blurb ? (
                      <span className="mt-1 block max-w-[220px] text-[13px] leading-[1.2] text-dim">
                        {tool.blurb}
                      </span>
                    ) : null}
                  </span>
                </span>
                <ArrowOutIcon className="size-11 shrink-0 text-primary" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}

export function RecipeSection({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[454px]">
      {showIntro ? (
        <div className="mb-20 text-center">
          <p className="font-display text-[48px] leading-[1.1] text-primary md:text-[60px]">
            {recipe.kicker}
          </p>
          <div className="mt-1 flex flex-col items-center gap-0">
            <h2 className="font-display text-[48px] leading-[1.1] text-primary md:text-[60px]">
              {recipe.heading}
            </h2>
            <span className="text-[13px] text-dim">{recipe.note}</span>
          </div>
          <p className="mt-5 text-[16px] leading-[1.2] text-dim">{recipe.body}</p>
        </div>
      ) : null}

      <div className="flex flex-col">
        {recipe.groups.map((group, index) => (
          <div key={group.title}>
            <RecipeGroup group={group} />
            {index < recipe.groups.length - 1 ? (
              <div className="my-12 h-px w-full bg-surface-3" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
