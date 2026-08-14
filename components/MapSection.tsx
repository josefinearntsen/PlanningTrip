"use client";

import dynamic from "next/dynamic";
import { accommodations } from "@/data/accommodations";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-deep text-sm text-ink/50">
      Laster kart …
    </div>
  ),
});

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function MapSection({ selectedId, onSelect }: Props) {
  return (
    <section id="kart" className="bg-cream-deep px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl sm:px-8">
        <p className="font-hand text-2xl text-burgundy sm:text-3xl">Geografien</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          Hvor bor Maia? 📍
        </h2>
        <p className="mt-5 max-w-xl font-body text-ink/70">
          Trykk på et bosted i listen over eller på kartet for å se hvor det
          ligger i forhold til Maia. 💌-ikonet er bostedet til Maia.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <button
            onClick={() => onSelect("")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !selectedId ? "bg-burgundy text-cream" : "bg-cream text-ink/70"
            }`}
          >
            Alle
          </button>
          {accommodations.map((acc) => (
            <button
              key={acc.id}
              onClick={() => onSelect(acc.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedId === acc.id
                  ? "bg-burgundy text-cream"
                  : "bg-cream text-ink/70 hover:bg-dustypink/40"
              }`}
            >
              {acc.name}
            </button>
          ))}
        </div>

        <div className="mt-6 h-[420px] overflow-hidden rounded-sm border border-ink/10 shadow-card sm:h-[520px]">
          <MapView selectedId={selectedId || null} onSelect={onSelect} />
        </div>
      </div>
    </section>
  );
}
