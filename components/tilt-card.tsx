"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MAX_TILT = 14;

export function TiltCard({
  children,
  className = "",
  cardClassName = "",
}: {
  children: ReactNode;
  className?: string;
  cardClassName?: string;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tilt = tiltRef.current;
    const card = cardRef.current;
    if (!tilt || !card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reset = () => {
      tilt.classList.remove("is-hover");
      card.classList.remove("is-tilting");
      card.style.setProperty("--tilt-rx", "0deg");
      card.style.setProperty("--tilt-ry", "0deg");
    };

    const track = (event: PointerEvent) => {
      if (reduce.matches) return;

      const rect = tilt.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

      tilt.classList.add("is-hover");
      card.classList.add("is-tilting");
      card.style.setProperty(
        "--tilt-ry",
        `${((px - 0.5) * MAX_TILT).toFixed(2)}deg`,
      );
      card.style.setProperty(
        "--tilt-rx",
        `${((0.5 - py) * MAX_TILT).toFixed(2)}deg`,
      );
      card.style.setProperty("--tilt-gx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--tilt-gy", `${(py * 100).toFixed(1)}%`);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        try {
          tilt.setPointerCapture(event.pointerId);
        } catch {
          /* ignore unsupported capture */
        }
      }
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse") reset();
    };

    tilt.addEventListener("pointerdown", onPointerDown);
    tilt.addEventListener("pointermove", track);
    tilt.addEventListener("pointerup", reset);
    tilt.addEventListener("pointercancel", reset);
    tilt.addEventListener("pointerleave", onPointerLeave);

    return () => {
      tilt.removeEventListener("pointerdown", onPointerDown);
      tilt.removeEventListener("pointermove", track);
      tilt.removeEventListener("pointerup", reset);
      tilt.removeEventListener("pointercancel", reset);
      tilt.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div ref={tiltRef} className={`t-tilt ${className}`.trim()}>
      <div ref={cardRef} className={`t-tilt-card h-full ${cardClassName}`.trim()}>
        {children}
        <div className="t-tilt-glare" aria-hidden />
      </div>
    </div>
  );
}
