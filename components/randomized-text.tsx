"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function scrambleFrame(text: string, progress: number): string {
  return text
    .split("")
    .map((char, index) => {
      if (/[\s,'’]/.test(char)) return char;

      const revealAt = (index + 1) / text.length;
      if (progress >= revealAt) return char;

      return CHARSET[Math.floor(Math.random() * CHARSET.length)];
    })
    .join("");
}

export function RandomizedText({
  text,
  className,
  delay = 0,
  duration = 0.75,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(text);
      return;
    }

    setDisplay(scrambleFrame(text, 0));

    const controls = animate(0, 1, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setDisplay(scrambleFrame(text, value));
      },
      onComplete() {
        setDisplay(text);
      },
    });

    return () => controls.stop();
  }, [text, delay, duration, reducedMotion]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
