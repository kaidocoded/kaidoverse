"use client";

import { AvatarGroup } from "@/components/avatar-group";
import { GlassIcon } from "@/components/glass-icon";
import { site } from "@/content/site";

export function SocialLinks() {
  return (
    <AvatarGroup className="h-[44px] gap-[12px]">
      {site.socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          className="block size-[44px] shrink-0"
        >
          <GlassIcon src={social.icon} alt="" tone="dark" />
        </a>
      ))}
    </AvatarGroup>
  );
}
