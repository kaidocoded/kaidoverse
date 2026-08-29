"use client";

import { useEffect, useRef, useState } from "react";

function getLineFill(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const start = viewportHeight * 0.88;
  const end = viewportHeight * 0.22;
  const scrollRange = rect.height + (start - end);

  if (scrollRange <= 0) return 0;

  const scrolled = start - rect.top;
  return Math.min(1, Math.max(0, scrolled / scrollRange));
}

export function JourneyTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  const fadeStop = fill * 100;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const update = () => {
      setFill(reducedMotion ? 1 : getLineFill(container));
    };

    update();
    if (reducedMotion) return;

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative pl-[18px] lg:pl-5">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-0 w-[2px]"
        style={{
          background: `linear-gradient(to bottom, var(--surface-3) 0%, var(--surface-3) calc(${fadeStop}% - 10px), var(--primary) calc(${fadeStop}% + 10px), var(--primary) 100%)`,
        }}
      />
      {children}
    </div>
  );
}
