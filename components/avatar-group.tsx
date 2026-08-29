"use client";

import { Children, useRef, type ReactNode } from "react";

function setAvatarShifts(
  root: HTMLElement | null,
  activeIdx: number | null,
  phase: "in" | "out",
) {
  if (!root) return;

  const cs = getComputedStyle(document.documentElement);
  const num = (name: string, fb: number) => {
    const v = parseFloat(cs.getPropertyValue(name));
    return Number.isFinite(v) ? v : fb;
  };
  const ease = (name: string, fb: string) =>
    cs.getPropertyValue(name).trim() || fb;

  const lift = num("--avatar-lift", -4);
  const falloff = num("--avatar-falloff", 0.45);
  const scale = num("--avatar-scale", 1.05);
  const tf =
    phase === "out"
      ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
      : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)");

  root.querySelectorAll<HTMLElement>(".t-avatar").forEach((el, i) => {
    el.style.transitionTimingFunction = tf;
    if (activeIdx == null) {
      el.style.setProperty("--shift", "0px");
      el.style.setProperty("--scale-active", "1");
      return;
    }

    const distance = Math.abs(i - activeIdx);
    el.style.setProperty(
      "--shift",
      `${(lift * Math.pow(falloff, distance)).toFixed(3)}px`,
    );
    el.style.setProperty(
      "--scale-active",
      i === activeIdx ? String(scale) : "1",
    );
  });
}

export function AvatarGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);

  return (
    <div
      ref={rootRef}
      className={`t-avatar-group ${className}`.trim()}
      onMouseLeave={() => setAvatarShifts(rootRef.current, null, "out")}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className="t-avatar"
          onMouseEnter={() => setAvatarShifts(rootRef.current, index, "in")}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
