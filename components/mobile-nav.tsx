"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Liquid } from "liquid-gooey";
import { site } from "@/content/site";
import { useNav } from "@/components/site-shell";
import { SiteButton } from "@/components/site-button";

const PAD = 12;
const COLLAPSED = 84;
const EXPANDED = 240;
const ICON_CLOSED = 60;
const ICON_OPEN = 44;
const BUTTON_H = 60;
const BUTTON_GAP = 12;
const BUILD_OPEN_Y = 76;
const CHAT_OPEN_Y = BUILD_OPEN_Y + BUTTON_H + BUTTON_GAP;
const motion = "smooth";
const iconBorder =
  "relative block size-full overflow-clip rounded-[14px] border border-primary/8";

function AvatarLink({ size }: { size: number }) {
  const mark =
    size >= 56
      ? "top-[7px] right-[2px] text-[11px]"
      : "top-[5px] right-[1px] text-[9px]";

  return (
    <Link
      href="/"
      aria-label={site.name}
      className={iconBorder}
    >
      <Image
        src="/images/avatar-nav.jpg"
        alt=""
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
      <span
        className={`absolute font-extralight leading-none text-primary ${mark}`}
      >
        ®
      </span>
    </Link>
  );
}

function HamburgerButton({
  size,
  onClick,
}: {
  size: number;
  onClick: () => void;
}) {
  const barW = size >= 56 ? 30 : 24;
  const barH = size >= 56 ? 24 : 20;
  const line = size >= 56 ? 2.18 : 1.75;

  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={onClick}
      className={iconBorder}
    >
      <span
        className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-between"
        style={{ width: barW, height: barH }}
      >
        <span className="block w-full bg-primary" style={{ height: line }} />
        <span className="block w-full bg-primary" style={{ height: line }} />
        <span className="block w-full bg-primary" style={{ height: line }} />
      </span>
    </button>
  );
}

export function MobileNav() {
  const { setOpen } = useNav();
  const [connectOpen, setConnectOpen] = useState(false);

  useEffect(() => {
    if (!connectOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setConnectOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [connectOpen]);

  useEffect(() => {
    if (!connectOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [connectOpen]);

  useEffect(() => {
    document.body.style.setProperty(
      "--mobile-nav-reserve",
      `${connectOpen ? EXPANDED : COLLAPSED}px`,
    );
    return () => {
      document.body.style.removeProperty("--mobile-nav-reserve");
    };
  }, [connectOpen]);

  const openMenu = () => {
    setConnectOpen(false);
    setOpen(true);
  };

  const icon = connectOpen ? ICON_OPEN : ICON_CLOSED;
  const height = connectOpen ? EXPANDED : COLLAPSED;
  const connectLeft = PAD + ICON_CLOSED + 20;

  return (
    <>
      <div
        aria-hidden
        onClick={() => setConnectOpen(false)}
        className={`fixed inset-0 z-30 bg-ink/20 backdrop-blur-[4px] transition-opacity duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${connectOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <nav className="pointer-events-none fixed inset-x-0 bottom-5 z-40 px-5 lg:hidden">
      <Liquid
        blur={6}
        contrast={18}
        fill="rgba(224,222,211,0.85)"
        shadow="0px 2px 12px 2px rgba(0,0,0,0.06)"
        filterPadding={48}
        className="pointer-events-auto w-full"
      >
        <div
          id="mobile-connect-sheet"
          className="relative w-full"
          style={{
            height,
            transition: "height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Glass pill — size morphs with the sheet */}
          <Liquid.Item
            morph={{ shape: true, bounce: 0, contentBlur: 0 }}
            radius={26}
            className="block w-full"
            style={{
              position: "absolute",
              inset: 0,
              display: "block",
            }}
          >
            <div
              className="relative w-full overflow-clip rounded-[26px] border border-primary/8 bg-ink/45 shadow-[0px_2px_12px_2px_rgba(0,0,0,0.06)] backdrop-blur-[32px] backdrop-saturate-150"
              style={{
                height,
                transition: "height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </Liquid.Item>

          {/* Back */}
          <Liquid.Item
            x={0}
            y={0}
            scale={1}
            transition={motion}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              left: PAD,
              top: PAD,
              width: ICON_OPEN,
              height: ICON_OPEN,
              display: "block",
              opacity: connectOpen ? 1 : 0,
              transition: "opacity 280ms ease",
              pointerEvents: connectOpen ? "auto" : "none",
            }}
          >
            <button
              type="button"
              aria-label="Close connect"
              onClick={() => setConnectOpen(false)}
              className={`${iconBorder} text-primary`}
            >
              <Image
                src="/icons/nav-back.svg"
                alt=""
                width={44}
                height={44}
                className="size-full"
              />
            </button>
          </Liquid.Item>

          {/* Avatar */}
          <Liquid.Item
            x={connectOpen ? ICON_OPEN + 8 : 0}
            y={0}
            transition={motion}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              left: PAD,
              top: PAD,
              width: icon,
              height: icon,
              display: "block",
            }}
          >
            <AvatarLink size={icon} />
          </Liquid.Item>

          {/* Hamburger */}
          <Liquid.Item
            x={0}
            y={0}
            transition={motion}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              right: PAD,
              top: PAD,
              width: icon,
              height: icon,
              display: "block",
            }}
          >
            <HamburgerButton size={icon} onClick={openMenu} />
          </Liquid.Item>

          {/* Connect — collapses into the CTAs */}
          <Liquid.Item
            x={0}
            y={0}
            scale={1}
            transition={motion}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              left: connectLeft,
              right: PAD + ICON_CLOSED + 20,
              top: PAD,
              height: ICON_CLOSED,
              display: "block",
              opacity: connectOpen ? 0 : 1,
              transition: "opacity 220ms ease",
            }}
          >
            <button
              type="button"
              aria-expanded={connectOpen}
              aria-controls="mobile-connect-sheet"
              onClick={() => setConnectOpen(true)}
              className="flex h-full w-full items-center justify-center gap-2 rounded-[14px] bg-primary px-5 text-ink shadow-[inset_0px_-2px_0px_2px_rgba(255,255,255,0.12),inset_0px_-8px_2px_0px_rgba(0,0,0,0.12)]"
            >
              <span className="whitespace-nowrap text-[18px] font-medium leading-[1.1]">
                Connect
              </span>
              <span aria-hidden className="text-[18px] leading-[1.2]">
                💬
              </span>
            </button>
          </Liquid.Item>

          {/* Build — flies out of Connect */}
          <Liquid.Item
            x={0}
            y={connectOpen ? BUILD_OPEN_Y : 0}
            scale={1}
            transition={motion}
            delay={connectOpen ? 20 : 0}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              left: PAD,
              right: PAD,
              top: PAD,
              height: BUTTON_H,
              display: "block",
              opacity: connectOpen ? 1 : 0,
              transition: "opacity 280ms ease",
              pointerEvents: connectOpen ? "auto" : "none",
            }}
          >
            <SiteButton
              href={site.ctas.build.href}
              label={site.ctas.build.label}
              variant="filled"
              className="w-full"
            />
          </Liquid.Item>

          {/* Chat — flies out after Build */}
          <Liquid.Item
            x={0}
            y={connectOpen ? CHAT_OPEN_Y : 0}
            scale={1}
            transition={motion}
            delay={connectOpen ? 40 : 0}
            radius={14}
            className="block"
            style={{
              position: "absolute",
              left: PAD,
              right: PAD,
              top: PAD,
              height: BUTTON_H,
              display: "block",
              opacity: connectOpen ? 1 : 0,
              transition: "opacity 280ms ease",
              pointerEvents: connectOpen ? "auto" : "none",
            }}
          >
            <SiteButton
              href={site.ctas.chat.href}
              label={site.ctas.chat.label}
              variant="outlined"
              className="w-full"
            />
          </Liquid.Item>
        </div>
      </Liquid>
    </nav>
    </>
  );
}
