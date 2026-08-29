"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

function Digit({
  char,
  stagger,
}: {
  char: string;
  stagger?: 1 | 2;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prev.current === null) {
      prev.current = char;
      el.classList.add("is-animating");
      return;
    }

    if (prev.current === char) return;

    prev.current = char;
    el.classList.remove("is-animating");
    void el.offsetHeight;
    el.classList.add("is-animating");
  }, [char]);

  return (
    <span
      ref={ref}
      className="t-digit"
      {...(stagger ? { "data-stagger": stagger } : {})}
    >
      {char}
    </span>
  );
}

function DigitGroup({
  chars,
  staggerLastTwo = false,
  className,
}: {
  chars: string[];
  staggerLastTwo?: boolean;
  className?: string;
}) {
  return (
    <span className={`t-digit-group ${className ?? ""}`.trim()}>
      {chars.map((char, index) => {
        let stagger: 1 | 2 | undefined;
        if (staggerLastTwo && chars.length >= 2) {
          if (index === chars.length - 2) stagger = 1;
          if (index === chars.length - 1) stagger = 2;
        }

        return <Digit key={index} char={char} stagger={stagger} />;
      })}
    </span>
  );
}

function Colon({ visible }: { visible: boolean }) {
  return (
    <span
      className={`clock-colon${visible ? " is-visible" : ""}`}
      aria-hidden
    >
      :
    </span>
  );
}

function FixedDigitPair({ chars }: { chars: string[] }) {
  return (
    <span className="relative inline-block align-baseline">
      <span className="pointer-events-none invisible select-none" aria-hidden>
        88
      </span>
      <span className="absolute inset-0 text-left">
        <DigitGroup chars={chars} staggerLastTwo />
      </span>
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
  const colonVisible = Number.parseInt(parts.seconds, 10) % 2 === 0;

  return (
    <span className="clock-time">
      <DigitGroup chars={parts.hours.split("")} />
      <Colon visible={colonVisible} />
      <DigitGroup chars={parts.minutes.split("")} staggerLastTwo />
      <Colon visible={colonVisible} />
      <FixedDigitPair chars={parts.seconds.split("")} />
      <span className="ml-[0.15em] inline-block min-w-[2ch] text-left align-baseline">
        <DigitGroup chars={parts.period.split("")} staggerLastTwo />
      </span>
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

  const weekday = now
    ? new Intl.DateTimeFormat("en-US", {
        timeZone: site.timezone,
        weekday: "long",
      }).format(now)
    : "—";

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
        {weekday}
      </p>
      <p className="font-display text-[48px] leading-[1.1] text-primary md:text-[60px]">
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
