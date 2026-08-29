"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "@/content/site";
import { useNav } from "@/components/site-shell";

function getModalCloseMs() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--modal-close-dur")
    .trim();
  return Number.parseFloat(raw) || 150;
}

export function NavOverlay() {
  const { open, setOpen } = useNav();
  const [portalReady, setPortalReady] = useState(false);
  const [present, setPresent] = useState(false);
  const [phase, setPhase] = useState<"entering" | "open" | "closing">(
    "entering",
  );

  const close = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setPresent(true);
    setPhase("entering");
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase("open"));
    });
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (open || !present) return;

    setPhase("closing");
    const timeout = window.setTimeout(() => {
      setPresent(false);
      setPhase("entering");
    }, getModalCloseMs());

    return () => window.clearTimeout(timeout);
  }, [open, present]);

  useEffect(() => {
    if (!present) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [present, close]);

  if (!portalReady || !present) {
    return null;
  }

  const phaseClass =
    phase === "open" ? "is-open" : phase === "closing" ? "is-closing" : "";

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-hidden={phase !== "open"}
    >
      <div
        aria-hidden
        className={`nav-modal-backdrop absolute inset-0 bg-ink/70 backdrop-blur-[24px] ${phaseClass}`}
      />
      <div className={`t-modal absolute inset-0 ${phaseClass}`}>
        <h2 className="sr-only">Site navigation</h2>
        <p className="sr-only">Jump to a page or section of Kaidoverse.</p>
        <nav className="absolute top-1/2 left-[8.33%] flex -translate-y-1/2 flex-col items-start gap-5 leading-[1.1] md:left-[calc(8.33%+18px)]">
        {navItems.map((item) => {
          const className =
            "font-display text-[40px] text-primary transition-opacity hover:opacity-70 md:text-[80px]";
          const label = (
            <span className="flex items-end gap-2 whitespace-nowrap">
              <span>{item.label}</span>
              {item.note ? (
                <span className="pb-1 font-sans text-[12px] text-dim md:pb-2 md:text-[18px]">
                  {item.note}
                </span>
              ) : null}
            </span>
          );

          if ("external" in item && item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                className={className}
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                {label}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={className}
              onClick={close}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <button
        type="button"
        aria-label="Close menu"
        onClick={close}
        className="absolute top-5 right-5 size-11 overflow-clip rounded-2xl border border-primary/8"
      >
        <span className="absolute top-1/2 left-1/2 block h-[2.24px] w-[24px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
        <span className="absolute top-1/2 left-1/2 block h-[2.24px] w-[24px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-primary" />
      </button>
      </div>
    </div>,
    document.body,
  );
}
