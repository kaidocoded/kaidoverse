"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

function PopDigit({
  char,
  stagger,
}: {
  char: string;
  stagger?: 1 | 2;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevChar = useRef<string | null>(null);

  useEffect(() => {
    if (prevChar.current === null) {
      prevChar.current = char;
      return;
    }
    if (char === prevChar.current) return;

    const el = ref.current;
    if (!el) return;

    el.classList.remove("is-popping");
    void el.offsetHeight;
    el.classList.add("is-popping");
    prevChar.current = char;
  }, [char]);

  return (
    <span ref={ref} className="t-digit is-popping" data-stagger={stagger}>
      {char}
    </span>
  );
}

function Colon() {
  return (
    <span className="clock-colon" aria-hidden>
      :
    </span>
  );
}

function FixedDigitPair({
  chars,
  keyPrefix,
}: {
  chars: string[];
  keyPrefix: string;
}) {
  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible pointer-events-none select-none" aria-hidden>
        88
      </span>
      <span className="absolute inset-0 text-left">
        {chars.map((char, index) => (
          <PopDigit
            key={`${keyPrefix}-${index}`}
            char={char}
            stagger={index === 0 ? 1 : 2}
          />
        ))}
      </span>
    </span>
  );
}

function Period({ period }: { period: string }) {
  return (
    <span className="ml-[0.15em] inline-block min-w-[2ch] text-left align-baseline">
      {period.split("").map((char, index) => (
        <PopDigit key={`p-${index}`} char={char} />
      ))}
    </span>
  );
}

type TimeParts = {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
};

function TimeLine({ parts }: { parts: TimeParts }) {
  return (
    <span className="clock-time">
      {parts.hours.split("").map((char, index) => (
        <PopDigit key={`h-${index}`} char={char} />
      ))}
      <Colon />
      {parts.minutes.split("").map((char, index) => (
        <PopDigit
          key={`m-${index}`}
          char={char}
          stagger={index === 0 ? 1 : 2}
        />
      ))}
      <Colon />
      <FixedDigitPair chars={parts.seconds.split("")} keyPrefix="s" />
      <Period period={parts.period} />
    </span>
  );
}

export function LocalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const date = now
    ? new Intl.DateTimeFormat("en-US", {
        timeZone: site.timezone,
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(now)
    : "—";

  const timeParts: TimeParts | null = now
    ? (() => {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: site.timezone,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).formatToParts(now);

        const pick = (type: Intl.DateTimeFormatPartTypes) =>
          parts.find((part) => part.type === type)?.value ?? "";

        return {
          hours: pick("hour"),
          minutes: pick("minute"),
          seconds: pick("second"),
          period: pick("dayPeriod").toUpperCase(),
        };
      })()
    : null;

  const timeLabel = timeParts
    ? `${timeParts.hours}:${timeParts.minutes}:${timeParts.seconds} ${timeParts.period}`
    : undefined;

  return (
    <div>
      <p className="text-[14px] leading-[1.4] text-dim">{site.timezoneLabel}</p>
      <p className="mt-2 font-display text-[48px] leading-[1.1] text-primary md:text-[60px]">
        {date}
      </p>
      <p
        className="text-left font-display text-[48px] leading-[1.1] text-primary md:text-[60px]"
        aria-label={timeLabel}
      >
        {timeParts ? <TimeLine parts={timeParts} /> : "—"}
      </p>
    </div>
  );
}
