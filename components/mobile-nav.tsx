"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const iconBorder =
  "relative block size-full overflow-clip rounded-[14px] border border-primary/8";

function AvatarLink({ size }: { size: number }) {
  const mark =
    size >= 56
      ? "top-[7px] right-[2px] text-[11px]"
      : "top-[5px] right-[1px] text-[9px]";

  return (
    <Link href="/" aria-label={site.name} className={iconBorder}>
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
    // Fixed nav — reserve collapsed height only. Expanding must not reflow the page.
    document.body.style.setProperty("--mobile-nav-reserve", `${COLLAPSED}px`);
    return () => {
      document.body.style.removeProperty("--mobile-nav-reserve");
    };
  }, []);

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
        className={`fixed inset-0 z-30 bg-ink/25 transition-opacity duration-200 ease-out lg:hidden ${connectOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <nav className="pointer-events-none fixed inset-x-0 bottom-5 z-40 px-5 lg:hidden">
        <div
          id="mobile-connect-sheet"
          className="pointer-events-auto relative w-full will-change-[height]"
          style={{
            height,
            transition: `height 320ms ${EASE}`,
          }}
        >
          {/* Glass pill — static blur (not animated) so expand stays smooth */}
          <div className="absolute inset-0 overflow-clip rounded-[26px] border border-primary/8 bg-ink/45 shadow-[0px_2px_12px_2px_rgba(0,0,0,0.06)] backdrop-blur-[24px] [transform:translateZ(0)]" />

          {/* Back */}
          <div
            className="absolute"
            style={{
              left: PAD,
              top: PAD,
              width: ICON_OPEN,
              height: ICON_OPEN,
              opacity: connectOpen ? 1 : 0,
              transform: connectOpen ? "translate3d(0,0,0)" : "translate3d(-4px,0,0)",
              transition: `opacity 200ms ease, transform 280ms ${EASE}`,
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
          </div>

          {/* Avatar */}
          <div
            className="absolute"
            style={{
              left: PAD,
              top: PAD,
              width: icon,
              height: icon,
              transform: connectOpen
                ? `translate3d(${ICON_OPEN + 8}px,0,0)`
                : "translate3d(0,0,0)",
              transition: `transform 280ms ${EASE}, width 280ms ${EASE}, height 280ms ${EASE}`,
            }}
          >
            <AvatarLink size={icon} />
          </div>

          {/* Hamburger */}
          <div
            className="absolute"
            style={{
              right: PAD,
              top: PAD,
              width: icon,
              height: icon,
              transition: `width 280ms ${EASE}, height 280ms ${EASE}`,
            }}
          >
            <HamburgerButton size={icon} onClick={openMenu} />
          </div>

          {/* Connect */}
          <div
            className="absolute"
            style={{
              left: connectLeft,
              right: PAD + ICON_CLOSED + 20,
              top: PAD,
              height: ICON_CLOSED,
              opacity: connectOpen ? 0 : 1,
              transform: connectOpen
                ? "translate3d(0,8px,0) scale(0.96)"
                : "translate3d(0,0,0) scale(1)",
              transition: `opacity 180ms ease, transform 280ms ${EASE}`,
              pointerEvents: connectOpen ? "none" : "auto",
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
          </div>

          {/* Build */}
          <div
            className="absolute"
            style={{
              left: PAD,
              right: PAD,
              top: PAD,
              height: BUTTON_H,
              opacity: connectOpen ? 1 : 0,
              transform: connectOpen
                ? `translate3d(0,${BUILD_OPEN_Y}px,0)`
                : "translate3d(0,0,0)",
              transition: `opacity 200ms ease, transform 300ms ${EASE}`,
              transitionDelay: connectOpen ? "20ms" : "0ms",
              pointerEvents: connectOpen ? "auto" : "none",
            }}
          >
            <SiteButton
              href={site.ctas.build.href}
              label={site.ctas.build.label}
              variant="filled"
              className="w-full"
            />
          </div>

          {/* Chat / Request a Collab */}
          <div
            className="absolute"
            style={{
              left: PAD,
              right: PAD,
              top: PAD,
              height: BUTTON_H,
              opacity: connectOpen ? 1 : 0,
              transform: connectOpen
                ? `translate3d(0,${CHAT_OPEN_Y}px,0)`
                : "translate3d(0,0,0)",
              transition: `opacity 200ms ease, transform 300ms ${EASE}`,
              transitionDelay: connectOpen ? "40ms" : "0ms",
              pointerEvents: connectOpen ? "auto" : "none",
            }}
          >
            <SiteButton
              href={site.ctas.chat.href}
              label={site.ctas.chat.label}
              variant="outlined"
              className="w-full"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
