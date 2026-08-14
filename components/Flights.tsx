"use client";

import { useState } from "react";
import { flightOptions, trainInfo, busInfo } from "@/data/flights";

export default function Flights() {
  const [active, setActive] = useState(0);
  const current = flightOptions[active];

  return (
    <section id="fly" className="bg-cream-deep px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl sm:px-8">
        <p className="font-hand text-2xl text-burgundy sm:text-3xl">Praktisk info</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Komme oss til Aarhus <span className="not-italic">✈️</span>
        </h2>
        <p className="mt-5 max-w-xl font-body text-ink/70">
          Vi reise fra forskjellige bya i Norge. Velg din by under for
          direktelenker til flyselskapa og flysøk. Aarhus Lufthavn har koden{" "}
          <strong className="text-burgundy">AAR</strong> — men det kan også
          lønne sæ å fly til København (<strong className="text-burgundy">CPH</strong>) og ta
          toget videre, eller til Billund (<strong className="text-burgundy">BLL</strong>) og ta
          direktebuss videre.
        </p>

        {/* City tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap">
          {flightOptions.map((origin, i) => (
            <button
              key={origin.city}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === i
                  ? "bg-burgundy text-cream"
                  : "bg-cream text-ink/70 hover:bg-dustypink/40"
              }`}
            >
              {origin.city}
            </button>
          ))}
        </div>

        {/* Active city card */}
        <div className="mt-6 rounded-sm border border-ink/10 bg-cream p-6 shadow-card sm:p-8">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              {current.city}
            </h3>
            <span className="font-hand text-lg text-burgundy">
              {current.airportCode}
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {current.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-burgundy/30 px-5 py-2.5 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy hover:text-cream"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="flex flex-wrap items-center gap-3 rounded-sm bg-dustyblue/20 px-6 py-5 text-sm text-ink/70">
            <span>🚆</span>
            <span>
              Tar du turen via København, ta toget videre til Aarhus H (ca. 3t
              15min) —{" "}
              <a
                href={trainInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-burgundy underline underline-offset-2"
              >
                {trainInfo.label} ↗
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-sm bg-dustypink/20 px-6 py-5 text-sm text-ink/70">
            <span>🚌</span>
            <span>
              Tar du turen via Billund, det går direktebuss videre til Aarhus
              (ca. 1t 15min) —{" "}
              <a
                href={busInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-burgundy underline underline-offset-2"
              >
                {busInfo.label} ↗
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
