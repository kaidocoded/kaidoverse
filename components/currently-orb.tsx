"use client";

import { ThinkingOrb } from "thinking-orbs";

const ORB_SIZE = 60;

export function CurrentlyOrb() {
  return (
    <span className="inline-flex size-[60px] shrink-0 items-center justify-center">
      <ThinkingOrb
        state="working"
        size={64}
        speed={0.8}
        theme="light"
        aria-label="Currently active"
        className="shrink-0"
        style={{ width: ORB_SIZE, height: ORB_SIZE }}
      />
    </span>
  );
}
