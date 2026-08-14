"use client";

import { useEffect, useState } from "react";

// 🗓️ Avreisedato - endre her hvis planene endrer seg.
const DEPARTURE_DATE = new Date("2026-09-24T00:00:00+02:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeLeft(): TimeLeft {
  const diff = DEPARTURE_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: false };
}

const units: { key: keyof Omit<TimeLeft, "done">; label: string }[] = [
  { key: "days", label: "dager" },
  { key: "hours", label: "timer" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sek" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="relative bg-burgundy px-5 py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-hand text-2xl text-dustypink sm:text-3xl">
          Nedtelling til avreise
        </p>

        {timeLeft?.done ? (
          <h2 className="mt-4 font-display text-4xl italic sm:text-6xl">
            Aarhus, here we come! 🇩🇰
          </h2>
        ) : (
          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-6">
            {units.map((unit) => (
              <div
                key={unit.key}
                className="rounded-sm border border-cream/20 bg-cream/5 px-2 py-5 sm:py-8"
              >
                <span
                  suppressHydrationWarning
                  className="block font-display text-4xl tabular-nums sm:text-6xl"
                >
                  {timeLeft ? String(timeLeft[unit.key]).padStart(2, "0") : "--"}
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-cream/60 sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 font-body text-sm text-cream/60">
          24.–27. september 2026 · Aarhus, Danmark
        </p>
      </div>
    </section>
  );
}
